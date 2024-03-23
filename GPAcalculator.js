// JavaScript (gpa_calculator.js)
document.getElementById('add-row').addEventListener('click', function() {
    var rows = document.getElementById('rows');
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
        </select>`;
    rows.appendChild(newRow);
});

document.getElementById('calculate').addEventListener('click', function() {
    var courseNames = document.querySelectorAll('input[type="text"]');
    var credits = document.querySelectorAll('input[type="number"]');
    var grades = document.querySelectorAll('select');

    var totalCredits = 0;
    var totalGradePoints = 0;

    for (var i = 0; i < credits.length; i++) {
        var credit = parseFloat(credits[i].value);
        var grade = parseFloat(grades[i].value);
        if (!isNaN(credit) && !isNaN(grade)) {
            totalCredits += credit;
            totalGradePoints += credit * grade;
        }
    }

    var gpa = totalGradePoints / totalCredits;
    if (!isNaN(gpa)) {
        document.getElementById('result').innerHTML = '<p>Your GPA is: ' + gpa.toFixed(2) + '</p>';
    } else {
        document.getElementById('result').innerHTML = '<p>Please enter valid credits and grades.</p>';
    }
});
