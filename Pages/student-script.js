import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmuRDTyrifBzRDtnTu2xhL9GLUPUPLsAc",
    authDomain: "hackathon-d6b24.firebaseapp.com",
    projectId: "hackathon-d6b24",
    storageBucket: "hackathon-d6b24.appspot.com",
    messagingSenderId: "663598035693",
    appId: "1:663598035693:web:8b831361a64f79867612e4",
    measurementId: "G-3FYQHGED81"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to check student result
async function checkResult() {
    const cnic = document.getElementById('cnic').value;
    const resultDiv = document.getElementById('result');

    try {
        const docRef = doc(db, 'students', cnic);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().result) {
            const student = docSnap.data();
            resultDiv.innerHTML = `
                <h3>Result for ${student.firstName} ${student.lastName}</h3>
                <p>Course: ${student.result.course}</p>
                <p>Marks: ${student.result.marks} / ${student.result.totalMarks}</p>
                <p>Grade: ${student.result.grade}</p>
            `;
        } else {
            resultDiv.innerHTML = '<p>No result found for this CNIC.</p>';
        }
    } catch (error) {
        console.error('Error getting result:', error.message);
    }
}
