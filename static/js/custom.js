document.addEventListener("DOMContentLoaded", function () {
    let backToTopButton = document.getElementById("back-to-top");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
