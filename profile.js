// Import the necessary Firebase modules
// استيراد جميع الوظائف اللازمة من Firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// // إعداد Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyDLoidyKaG3kPT0BIet9h6wZ_BwjrljkFg",
//     authDomain: "login-e88bc.firebaseapp.com",
//     projectId: "login-e88bc",
//     storageBucket: "login-e88bc.firebasestorage.app",
//     messagingSenderId: "64137450004",
//     appId: "1:64137450004:web:ecbcd3519587ebd0658d01"
// };

// // تهيئة Firebase
// const app = initializeApp(firebaseConfig);
// const auth1 = getAuth(app);






// document.addEventListener("DOMContentLoaded", function () {
//     const auth1 = getAuth(); // تأكد من تهيئة Firebase بشكل صحيح
//     const profileDiv = document.getElementById("profile");
//     const fullNameSpan = document.getElementById("full-name");

//     // تحقق من حالة المستخدم عند تحميل الصفحة
//     onAuthStateChanged(auth1, (user) => {
//         if (user) {
//             // إذا كان المستخدم مسجلاً الدخول، اعرض اسمه
//             const displayName = user.displayName || `${user.email}`; // إذا كان هناك اسم عرض، استخدمه، وإلا استخدم البريد الإلكتروني
//             fullNameSpan.textContent = displayName;

//             // إخفاء شاشة تسجيل الدخول وعرض البيانات الشخصية
//             document.getElementById("login").classList.add("hidden");
//             profileDiv.classList.remove("hidden");
//         } else {
//             // إذا لم يكن هناك مستخدم مسجل دخول، اعرض شاشة تسجيل الدخول
//             document.getElementById("login").classList.remove("hidden");
//             profileDiv.classList.add("hidden");
//         }
//     });

//     // تسجيل الدخول عند الضغط على زر "login"
//     const submit = document.getElementById("submit");
//     submit.addEventListener("click", function (e) {
//         e.preventDefault();

//         const userEmail = document.getElementById("userEmail").value;
//         const userPassword = document.getElementById("userPassword").value;

//         if (!userEmail || !userPassword) {
//             alert("Please fill in all fields.");
//             return;
//         }

//         // تسجيل الدخول باستخدام Firebase
//         signInWithEmailAndPassword(auth1, userEmail, userPassword)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log("User signed in:", user);
//                 alert("You have signed in successfully!");
//                 window.location.href = "home.html"; // بعد الدخول بنجاح، انتقل إلى صفحة home
//             })
//             .catch((error) => {
//                 console.error("Error: ", error.code, error.message);
//                 alert(`Login failed: ${error.message}`);
//             });
//     });

//     // تسجيل الخروج
//     const logoutButton = document.getElementById("logout-btn");
//     if (logoutButton) {
//         logoutButton.addEventListener("click", function () {
//             signOut(auth1)
//                 .then(() => {
//                     // بعد تسجيل الخروج، عودة إلى صفحة login
//                     window.location.href = "login.html";
//                 })
//                 .catch((error) => {
//                     console.error("Sign-out error: ", error);
//                 });
//         });
//     }
// });
