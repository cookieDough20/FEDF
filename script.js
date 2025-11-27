let students = [];
let sortAscending = true;

// Fetch data
fetch("students.json")
    .then(res => res.json())
    .then(data => {
        students = data.students;
        updateStatus();
        displayStudents(students);
    });

// Update Pass/Fail dynamically
function updateStatus() {
    students.forEach(st => {
        st.status = st.marks >= 50 ? "Pass" : "Fail";
    });
}

// Display students in table
function displayStudents(list) {
    const tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    list.forEach(st => {
        const row = `
        <tr>
            <td>${st.id}</td>
            <td>${st.name}</td>
            <td>${st.course}</td>
            <td>${st.marks}</td>
            <td class="${st.status.toLowerCase()}">${st.status}</td>
        </tr>`;

        tbody.innerHTML += row;
    });
}

// Calculate average marks
document.getElementById("avgBtn").addEventListener("click", () => {
    let total = students.reduce((sum, s) => sum + s.marks, 0);
    let avg = (total / students.length).toFixed(2);

    document.getElementById("averageOutput").innerText =
        `Average Marks: ${avg}`;
});

// Filter by status
document.getElementById("filterStatus").addEventListener("change", (e) => {
    let val = e.target.value;

    if (val === "all") {
        displayStudents(students);
    } else {
        let filtered = students.filter(s => s.status.toLowerCase() === val);
        displayStudents(filtered);
    }
});

// Sort by marks
document.getElementById("sortMarks").addEventListener("click", () => {
    students.sort((a, b) => {
        return sortAscending ? a.marks - b.marks : b.marks - a.marks;
    });

    sortAscending = !sortAscending;
    displayStudents(students);
});
