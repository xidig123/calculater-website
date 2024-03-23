document.getElementById('add-row').addEventListener('click', function() {
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
});

document.getElementById('calculate').addEventListener('click', function() {
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
       
