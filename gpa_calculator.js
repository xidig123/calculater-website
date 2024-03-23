document.getElementById('calculate').addEventListener('click', function() {
    var courses = document.querySelectorAll('.input-group');
    var totalCredits = 0;
    var totalGradePoints = 0;

    courses.forEach(function(course) {
        var credits = parseFloat(course.querySelector('#credits').value);
        var grade = parseFloat(course.querySelector('#grade').value);

        if (!isNaN(credits) && !isNaN(grade)) {
            totalCredits += credits;
            totalGradePoints += credits * grade;
        }
    });

    var gpa = totalGradePoints / totalCredits;
    if (!isNaN(gpa)) {
        document.getElementById('result').innerText = 'Your GPA is: ' + gpa.toFixed(2);
    } else {
        document.getElementById('result').innerText = 'Please enter valid data for all courses.';
    }
});

document.getElementById('add-row').addEventListener('click', function() {
    var container = document.querySelector('.container');
    var inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');
    inputGroup.innerHTML = `
        <label for="course">Course</label>
        <input type="text" id="course" placeholder="Course Name">
        <label for="credits">Credits</label>
        <input type="number" id="credits" placeholder="Credits">
        <label for="grade">Grade</label>
        <select id="grade">
            <option value="4.0">A</option>
            <option value="3.7">A-</option>
            <option value="3.3">B+</option>
            <option value="3.0">B</option>
            <option value="2.7">B-</option>
            <option value="2.3">C+</option>
            <option value="2.0">C</option>
            <option value="1.7">C-</option>
            <option value="1.3">D+</option>
            <option value="1.0">D</option>
            <option value="0.7">D-</option>
            <option value="0">F</option>
        </select>
    `;
    container.insertBefore(inputGroup, document.getElementById('add-row'));
});
