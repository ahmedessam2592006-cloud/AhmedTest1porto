// ==========================================
// 🔥 FIREBASE CONFIG
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyCFb1X2Eqa9ax6C0g43tfffBhhAmiUwq1M",
  authDomain: "my-portfolio-f9067.firebaseapp.com",
  projectId: "my-portfolio-f9067",
  storageBucket: "my-portfolio-f9067.firebasestorage.app",
  messagingSenderId: "345282308436",
  appId: "1:345282308436:web:66353341080c423ca0c0c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Admin credentials
const ADMIN_EMAIL = "ahmedtest1@gmail.com";
const ADMIN_PASSWORD = "sasa1968";

// Export for other files
window.firebaseConfig = firebaseConfig;
window.db = db;
window.auth = auth;
