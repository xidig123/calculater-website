// gpa_calculator.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-row').addEventListener('click', addRow);
    document.getElementById('calculate').addEventListener('click', calculateGPA);
});

function addRow() {
    var form = document.getElementById('form');
    var row = document.createElement('div');
    row.classList.add('row');
    row.innerHTML = `
        <input type="text" placeholder="Course (optional)" class="course">
        <input type="text" placeholder="Credits" class="credits">
        <select class="grade">
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
    form.appendChild(row);
}

function calculateGPA() {
    var courses = document.querySelectorAll('.row');
    var totalCredits = 0;
    var totalQualityPoints = 0;

    courses.forEach(course => {
        var credits = parseFloat(course.querySelector('.credits').value);
        var grade = course.querySelector('.grade').value;

        if (!isNaN(credits)) {
            totalCredits += credits;
            totalQualityPoints += calculateQualityPoints(grade) * credits;
        }
    });

    var gpa = totalQualityPoints / totalCredits;
    document.getElementById('result').textContent = 'Your GPA is: ' + gpa.toFixed(2);
}

function calculateQualityPoints(grade) {
    switch (grade) {
        case 'A+':
            return 4.3;
        case 'A':
            return 4.0;
        case 'A-':
            return 3.
