document.addEventListener("DOMContentLoaded", function() {
    var fadeElements = document.querySelectorAll(".fade-hidden");

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.remove("fade-hidden");
                entry.target.classList.add("fade-in-left");
            } else {
                entry.target.classList.remove("fade-in-left");
                entry.target.classList.add("fade-hidden");
            }
        });
    }, { threshold: 0.7 });

    fadeElements.forEach(function(element) {
        observer.observe(element);
    });


    var fadeElementsUp = document.querySelectorAll(".fade-hidden-up");

    var observerUp = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.remove("fade-hidden-up");
                entry.target.classList.add("fade-up");
            } else {
                entry.target.classList.remove("fade-up");
                entry.target.classList.add("fade-hidden-up");
            }
        });
    }, { threshold: 0.7 });

    fadeElementsUp.forEach(function(element) {
        observerUp.observe(element);
    });

    var fadeOpa = document.querySelectorAll(".fade-hidden-opa");

    var observerOpa = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.remove("fade-hidden-opa");
                entry.target.classList.add("fade-opa");
            } else {
                entry.target.classList.remove("fade-opa");
                entry.target.classList.add("fade-hidden-opa");
            }
        });
    }, { threshold: 0.7 });

    fadeOpa.forEach(function(element) {
        observerOpa.observe(element);
    });

    var fadePortfo = document.querySelectorAll(".fade-hidden-portfo");

    var observerPortfo = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.remove("fade-hidden-portfo");
                entry.target.classList.add("fade-in-portfo");
            } else {
                entry.target.classList.remove("fade-in-portfo");
                entry.target.classList.add("fade-hidden-portfo");
            }
        });
    }, { threshold: 0.7 });

    fadePortfo.forEach(function(element) {
        observerPortfo.observe(element);
    });
});



const btnHover = document.getElementById('btn-call-hover');
const btnShow = document.getElementById('btn-call-show')

btnHover.addEventListener("mouseenter", (event) => {
    btnShow.classList.remove('btn-hidden')
});

btnHover.addEventListener("mouseleave", (event) => {
    btnShow.classList.add('btn-hidden')
});