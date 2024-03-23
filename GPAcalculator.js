document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for the Calculate GPA button
    document.getElementById("calculate").addEventListener("click", calculateGPA);

    // Add event listener for the Add Row button
    document.getElementById("add-row").addEventListener("click", addRow);
});

// Function to calculate GPA
function calculateGPA() {
    // Get all input elements for course name, grade, and credits
    const courseNames = document.querySelectorAll('input[type="text"]');
    const grades = document.querySelectorAll('select');
    const credits = document.querySelectorAll('input[type="number"]');

    let totalGradePoints = 0;
    let totalCredits = 0;

    // Iterate over each course and calculate grade points
    for (let i = 0; i < courseNames.length; i++) {
        const grade = grades[i].value;
        const credit = parseInt(credits[i].value);

        // Calculate grade points for each course
        let gradePoints = 0;
        switch (grade) {
            case "A+":
                gradePoints = 4.0;
                break;
            case "A":
                gradePoints = 4.0;
                break;
            case "A-":
                gradePoints = 3.7;
                break;
            case "B+":
                gradePoints = 3.3;
                break;
            case "B":
                gradePoints = 3.0;
                break;
            case "B-":
                gradePoints = 2.7;
                break;
            case "C+":
                gradePoints = 2.3;
                break;
            case "C":
                gradePoints = 2.0;
                break;
            case "C-":
                gradePoints = 1.7;
                break;
            case "D+":
                gradePoints = 1.3;
                break;
            case "D":
                gradePoints = 1.0;
                break;
            case "D-":
                gradePoints = 0.7;
                break;
            case "F":
                gradePoints = 0;
                break;
            case "P":
                gradePoints = 0; // Assuming Pass doesn't contribute to GPA
                break;
            case "NP":
                gradePoints = 0; // Assuming No Pass doesn't contribute to GPA
                break;
            default:
                gradePoints = 0; // Assuming any other value doesn't contribute to GPA
                break;
        }

        // Calculate total grade points and credits
        totalGradePoints += gradePoints * credit;
        totalCredits += credit;
    }

    // Calculate GPA
    const GPA = totalGradePoints / totalCredits;

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Your GPA is: " + GPA.toFixed(2) + "</h2>";
}

// Function to add a new row for another course
function addRow() {
    // Create HTML elements for new row
    const newRow = document.createElement("div");
    newRow.classList.add("input-group");
    newRow.innerHTML = `
        <input type="text" placeholder="Course Name">
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
        <input type="number" placeholder="Credits">
    `;

    // Insert the new row before the Add Row button
    const addRowButton = document.getElementById("add-row");
    addRowButton.parentNode.insertBefore(newRow, addRowButton);
}
