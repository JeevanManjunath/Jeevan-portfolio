// ================= Mobile Navbar =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Close menu when clicking links

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// ================= Theme Toggle =================

const themeBtn = document.getElementById("themeBtn");

function setTheme(mode){

    if(mode === "light"){

        document.body.classList.add("light");

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme","light");

    }
    else{

        document.body.classList.remove("light");

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme","dark");

    }

}

setTheme(localStorage.getItem("theme") || "dark");

themeBtn.addEventListener("click", () => {

    const light = document.body.classList.contains("light");

    setTheme(light ? "dark" : "light");

});


// ================= Footer Year =================

document.getElementById("year").textContent =
new Date().getFullYear();


// ================= Typing Animation =================

const roles = [
    "UI Developer",
    "Frontend Developer",
    "Cybersecurity Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const typing = document.getElementById("typing");

    const current = roles[roleIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }
    else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 70 : 100);

}

typeEffect();


// ================= Active Nav Link =================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let scrollY = window.pageYOffset;

    sections.forEach(section => {

        const sectionHeight = section.offsetHeight;

        const sectionTop = section.offsetTop - 100;

        const sectionId = section.getAttribute("id");

        if(scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight){

            document
            .querySelectorAll(".nav-links a")
            .forEach(link => link.classList.remove("active"));

            document
            .querySelector(`.nav-links a[href*=${sectionId}]`)
            ?.classList.add("active");

        }

    });

});


// ================= Scroll Reveal =================

const revealElements =
document.querySelectorAll(".fade-up");

function reveal(){

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ================= Skill Bars =================

const bars = document.querySelectorAll(".skill-bar-fill");

function animateBars(){

    bars.forEach(bar => {

        const width = bar.dataset.width;

        const top = bar.getBoundingClientRect().top;

        if(top < window.innerHeight - 50){

            bar.style.width = width + "%";

        }

    });

}

window.addEventListener("scroll", animateBars);

animateBars();


// ================= Project Search =================

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("input", e => {

        const value = e.target.value.toLowerCase();

        document.querySelectorAll(".project")
        .forEach(project => {

            const title =
            project.dataset.title.toLowerCase();

            project.style.display =
            title.includes(value)
            ? "block"
            : "none";

        });

    });

}


// ================= Modal =================

const openButtons =
document.querySelectorAll(".open-modal");

const modals =
document.querySelectorAll(".modal");

openButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modalId =
        button.getAttribute("data-modal");

        document
        .getElementById(modalId)
        .classList.add("show");

    });

});

modals.forEach(modal => {

    modal.addEventListener("click", e => {

        if(e.target.classList.contains("modal")){

            modal.classList.remove("show");

        }

    });

    modal.querySelector(".modal-close")
    ?.addEventListener("click", () => {

        modal.classList.remove("show");

    });

});


// ================= Contact Form =================

const form =
document.getElementById("contactForm");

const formStatus =
document.getElementById("formStatus");

if(form){

    form.addEventListener("submit", e => {

        e.preventDefault();

        formStatus.textContent =
        "✅ Message sent successfully (Demo).";

        form.reset();

        setTimeout(() => {

            formStatus.textContent = "";

        },2500);

    });

}


// ================= Counter Animation =================

const counters =
document.querySelectorAll(".stat h3");

const speed = 100;

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.innerText.replace("+","");

        const count =
        +counter.dataset.count || 0;

        const increment =
        target / speed;

        if(count < target){

            const newCount =
            Math.ceil(count + increment);

            counter.dataset.count = newCount;

            counter.innerText =
            counter.innerText.includes("+")
            ? newCount + "+"
            : newCount;

            setTimeout(updateCounter,20);

        }

    };

    updateCounter();

});


// ================= Back To Top =================

const topBtn =
document.querySelector(".top-link");

topBtn.addEventListener("click", e => {

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});