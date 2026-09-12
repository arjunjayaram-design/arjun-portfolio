// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});// Welcome message

window.addEventListener("load", function() {

    console.log("Welcome to Arjun Jayaram's Portfolio! 🚀");

});

// Automatically display the current year

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


    // Scroll-to-top button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Typing effect
// Simple typing effect

const typingText = document.getElementById("typing-text");

const words = [
    "BCA Student",
    "Aspiring Developer",
    "Python Programmer",
    "Web Developer"
];

let index = 0;

function changeText() {
    if (typingText) {
    typingText.textContent = words[index];
}

    index++;

    if (index >= words.length) {
        index = 0;
    }
}

changeText();

setInterval(changeText, 2000);



// Scroll reveal effect

const sections = document.querySelectorAll("section");

const revealSections = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealSections);

revealSections();

// Mobile menu
// Mobile menu

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function() {
            navMenu.classList.remove("active");
        });

    });

}