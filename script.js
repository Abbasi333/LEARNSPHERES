// navbar
// navbar
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const userGreeting = document.getElementById("user-greeting");
  const userNameSpan = document.getElementById("user-name");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });

  // Simulate login
  const userName = localStorage.getItem("userName") || null;

  if (userName) {
    userNameSpan.textContent = userName;
    userGreeting.style.display = "block";
  }
});

// Change navbar background on scroll
window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// navbar
// regiuster
// Show the login modal when clicking "Go to Login"
document.getElementById("go-to-login").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default anchor click behavior
  document.getElementById("login-modal").style.display = "block"; // Show modal
});

// Close the modal when the user clicks on <span> (x)
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("login-modal").style.display = "none"; // Hide modal
});

// Close the modal when clicking anywhere outside of the modal
window.addEventListener("click", function (event) {
  const modal = document.getElementById("login-modal");
  if (event.target === modal) {
    modal.style.display = "none"; // Hide modal
  }
});

// register
// login
document.querySelector("#login").addEventListener("click", function () {
  document.getElementById("login-modal").style.display = "block";
  document.getElementById("login-modal").style.position = "absolute";

  document.getElementById("login-modal").style.zIndex = 1000;
  alert("NAVIGATE TO THE HOME SECTION!!!");
});
document
  .getElementById("register-button")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default action
    const registerSection = document.getElementById("register"); // Make sure the register section has this ID
    registerSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the register section
  });
