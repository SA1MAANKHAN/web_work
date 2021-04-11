gsap.registerPlugin(ScrollTrigger);
var container = document.querySelector("#scroll-container");
var height = container.clientHeight;
document.body.style.height = height + "px";
gsap.to(container, {
  y: -(height - document.documentElement.clientHeight),
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.8cd,
  },
});

// skills animation

const skillSection = document.querySelector(".skills");
const htmlSkill = document.querySelector(".skill__html");
const cssSkill = document.querySelector(".skill__css");
const jsSkill = document.querySelector(".skill__js");
const golangSkill = document.querySelector(".skill__golang");
const pythonSkill = document.querySelector(".skill__python");
const sqlSkill = document.querySelector(".skill__sql");
const cppSkill = document.querySelector(".skill__cpp");
const reactSkill = document.querySelector(".skill__react");
const mongodbSkill = document.querySelector(".skill__mongodb");
const nodeSkill = document.querySelector(".skill__node");

const skillsAnimation = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      htmlSkill.classList.add("skill__animate__html");
      cssSkill.classList.add("skill__animate__css");
      jsSkill.classList.add("skill__animate__js");
      golangSkill.classList.add("skill__animate__golang");
      pythonSkill.classList.add("skill__animate__python");
      sqlSkill.classList.add("skill__animate__sql");
      cppSkill.classList.add("skill__animate__cpp");
      reactSkill.classList.add("skill__animate__react");
      mongodbSkill.classList.add("skill__animate__mongodb");
      nodeSkill.classList.add("skill__animate__node");
    } else {
      htmlSkill.classList.remove("skill__animate__html");
      cssSkill.classList.remove("skill__animate__css");
      jsSkill.classList.remove("skill__animate__js");
      golangSkill.classList.remove("skill__animate__golang");
      pythonSkill.classList.remove("skill__animate__python");
      sqlSkill.classList.remove("skill__animate__sql");
      cppSkill.classList.remove("skill__animate__cpp");
      reactSkill.classList.remove("skill__animate__react");
      mongodbSkill.classList.remove("skill__animate__mongodb");
      nodeSkill.classList.remove("skill__animate__node");
    }
  });
};

const obsOptionsSkills = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver(skillsAnimation, obsOptionsSkills);

observer.observe(skills);

// contact form

var firebaseConfig = {
  apiKey: "AIzaSyAl1pvyByyn5-ID-l9kG2UgYS5KWL8dHSc",
  authDomain: "itssalmaank.firebaseapp.com",
  projectId: "itssalmaank",
  storageBucket: "itssalmaank.appspot.com",
  messagingSenderId: "639431915479",
  appId: "1:639431915479:web:8b6e1dc04768f0addbfd92",
  measurementId: "G-7BNQGLDEX9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log(firebase);

// let messagesRef = firebase.database().ref("messages");

var messagesRef = firebase.database().ref("messages");

//submit
const submitForm = function (e) {
  e.preventDefault();

  const name = getInputValue("name");
  const email = getInputValue("email");
  const phone = getInputValue("phone");
  const message = getInputValue("message");

  saveMessage(name, email, phone, message);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";

  document.querySelector(".contact__messageSent").style.opacity = "1";

  // hide alert
  setTimeout(() => {
    document.querySelector(".contact__messageSent").style.opacity = "0";
  }, 3000);
};

const getInputValue = function (id) {
  return document.getElementById(id).value;
};

const contactForm = document.getElementById("contact__form");

contactForm.addEventListener("submit", submitForm);

const saveMessage = function (name, email, phone, message) {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
};

// FIREBASE

// try 1

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.3.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.3.3/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

// try 2

// <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

// <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js"></script>

// <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-analytics.js"></script>

// <!-- Add Firebase products that you want to use -->
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-firestore.js"></script>

// try 3

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAl1pvyByyn5-ID-l9kG2UgYS5KWL8dHSc",
//     authDomain: "itssalmaank.firebaseapp.com",
//     projectId: "itssalmaank",
//     storageBucket: "itssalmaank.appspot.com",
//     messagingSenderId: "639431915479",
//     appId: "1:639431915479:web:8b6e1dc04768f0addbfd92",
//     measurementId: "G-7BNQGLDEX9"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
