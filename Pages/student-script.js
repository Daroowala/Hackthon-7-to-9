// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to check student result
function checkResult() {
    const cnic = document.getElementById('cnic').value;
    const resultDiv = document.getElementById('result');

    db.collection('students').doc(cnic).get()
        .then((doc) => {
            if (doc.exists && doc.data().result) {
                const student = doc.data();
                const resultHTML = `
                    <h3>Result for ${student.firstName} ${student.lastName}</h3>
                    <p>Course: ${student.result.course}</p>
                    <p>Marks: ${student.result.marks} / ${student.result.totalMarks}</p>
                    <p>Grade: ${student.result.grade}</p>
                `;
                resultDiv.innerHTML = resultHTML;
            } else {
                resultDiv.innerHTML = '<p>No result found for this CNIC.</p>';
            }
        })
        .catch((error) => {
            console.error('Error getting result: ', error.message);
        });
}