document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-row");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");
    let rowCount = 5; // Initial number of rows

    addButton.addEventListener("click", function() {
        addRow();
    });

    calculateButton.addEventListener("click", function() {
        calculateGPA();
    });

    // Function to add a new row
    function addRow() {
        const container = document.createElement("div");
        container.classList.add("input-group");

        container.innerHTML = `
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

        document.querySelector(".horizontal-line").before(container);
        rowCount++;
    }

    // Function to calculate GPA
    function calculateGPA() {
        let totalGradePoints = 0;
        let totalCredits = 0;

        for (let i = 0; i < rowCount; i++) {
            const grade = document.querySelectorAll(".input-group select")[i].value;
            const credits = parseFloat(document.querySelectorAll(".input-group input[type='number']")[i].value);

            if (!isNaN(credits)) {
                totalCredits += credits;
                totalGradePoints += calculateGradePoint(grade) * credits;
            }
        }

        const gpa = totalGradePoints / totalCredits;
        resultDiv.textContent = `Your GPA is: ${gpa.toFixed(2)}`;
    }

    // Function to calculate grade points based on letter grade
    function calculateGradePoint(grade) {
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
                return 0.0; // Assuming P represents pass without affecting GPA
            case "NP":
                return 0.0; // Assuming NP represents no pass without affecting GPA
            default:
                return 0.0;
        }
    }
});
