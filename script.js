// Function to handle adding a student
function addStudent() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;
    const userType = document.getElementById('user-type').value;

    if (firstName && lastName && email && password && cnic && userType) {
        alert(`Student added successfully: 
        Name: ${firstName} ${lastName}, 
        Email: ${email}, 
        CNIC: ${cnic}, 
        User Type: ${userType}`);
    } else {
        alert("Please fill all the fields.");
    }
}

// Function to handle uploading student marks
function uploadMarks() {
    const course = document.getElementById('course').value;
    const studentId = document.getElementById('student-id').value;
    const marks = document.getElementById('marks').value;
    const totalMarks = document.getElementById('total-marks').value;
    const grade = document.getElementById('grade').value;

    if (course && studentId && marks && totalMarks && grade) {
        alert(`Marks uploaded successfully: 
        Course: ${course}, 
        Student ID: ${studentId}, 
        Marks: ${marks}/${totalMarks}, 
        Grade: ${grade}`);
    } else {
        alert("Please fill all the fields.");
    }
}
