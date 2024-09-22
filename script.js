
document.addEventListener("scroll", function() {
    const parallax = document.querySelectorAll(".parallax");
    parallax.forEach(function(el) {
        let speed = el.getAttribute("data-speed");
        el.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});
