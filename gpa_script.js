<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GPA Calculator</title>
    <meta name="description" content="Calculate your GPA (Grade Point Average) with this handy tool.">
    <meta name="keywords" content="GPA calculator, grade point average, GPA tool, college GPA">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>        
        <h1>GPA Calculator</h1>
    </header>
    <main>
        <div class="calculator">
            <label for="num-courses">Number of Courses:</label>
            <input type="number" id="num-courses" placeholder="Enter number of courses">

            <div id="course-grades">
                <!-- Course Grade Inputs will be dynamically added here -->
            </div>

            <button id="add-course-btn">Add Course</button>

            <button id="calculate-gpa-btn">Calculate GPA</button>

            <div id="result">
                <h2>GPA Result</h2>
                <p>Your GPA is: <span id="gpa"></span></p>
            </div>
        </div>
    </main>
    <footer>
        <p>© 2024 GPA Calculator. All rights reserved.</p>
    </footer>
    <script src="gpa_script.js"></script>
</body>
</html>
