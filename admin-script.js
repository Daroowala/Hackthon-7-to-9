// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add Student function
function addStudent() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;

    // Add student to Firebase Authentication and Firestore Database
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            db.collection('students').doc(cnic).set({
                firstName,
                lastName,
                email,
                cnic,
                userType: 'Student'
            }).then(() => {
                alert('Student added successfully!');
            });
        })
        .catch((error) => {
            console.error('Error adding student: ', error.message);
        });
}

// Upload Marks function
function uploadMarks() {
    const course = document.getElementById('course').value;
    const studentId = document.getElementById('student-id').value;
    const marks = document.getElementById('marks').value;
    const totalMarks = document.getElementById('total-marks').value;
    const grade = document.getElementById('grade').value;

    // Add marks to Firestore database for the student
    db.collection('students').doc(studentId).update({
        result: {
            course,
            marks,
            totalMarks,
            grade
        }
    }).then(() => {
        alert('Marks uploaded successfully!');
    }).catch((error) => {
        console.error('Error uploading marks: ', error.message);
    });
}
