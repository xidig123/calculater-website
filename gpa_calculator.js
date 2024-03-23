// Function to calculate the quality points based on the grade
function calculateQualityPoints(grade) {
    switch (grade) {
        case "A+":
            return 4.0;
        case "A":
            return 4.0;
        case "A-":
            return 3.7;
        case "B+":
            return 3.3;
        case "B":
            return 3.0;
        case "B-":
            return 2.7;
        case "C+":
            return 2.3;
        case "C":
            return 2.0;
        case "C-":
            return 1.7;
        case "D+":
            return 1.3;
        case "D":
            return 1.0;
        case "D-":
            return 0.7;
        case "F":
            return 0.0;
        case "P":
            return 0.0; // Assuming P has no quality points
        case "NP":
            return 0.0; // Assuming NP has no quality points
        default:
            return 0.0; // Default case for unknown grades
    }
}

// Function to calculate GPA
function calculateGPA() {
    var courses = document.querySelectorAll('.input-group');
    var totalCredits = 0;
    var totalQualityPoints = 0;

    courses.forEach(course => {
        var credits = parseInt(course.querySelector('input[type="number"]').value);
        var grade = course.querySelector('select').value;

        if (!isNaN(credits)) {
            totalCredits += credits;
            totalQualityPoints += calculateQualityPoints(grade) * credits;
        }
    });

    if (totalCredits === 0) {
        document.getElementById('result').textContent = "Please add at least one course with valid credits.";
    } else {
        var gpa = totalQualityPoints / totalCredits;
        document.getElementById('result').textContent = 'Your GPA is: ' + gpa.toFixed(2);
    }
}

// Function to add a new row
function addRow() {
    var container = document.getElementById('container');
    var newRow = document.createElement('div');
    newRow.classList.add('input-group');
    newRow.innerHTML = `
        <input type="text" placeholder="Course Name">
        <input type="number" placeholder="Credits">
        <select>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="D-">D-</option>
            <option value="F">F</option>
            <option value="P">P</option>
            <option value="NP">NP</option>
        </select>
    `;
    container.appendChild(newRow);
}

// Event listeners
document.getElementById('add-row').addEventListener('click', addRow);
document.getElementById('calculate').addEventListener('click', calculateGPA);

