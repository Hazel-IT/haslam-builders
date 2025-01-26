document.getElementById('learnMore').addEventListener('click', () => {
    alert('Thank you for your interest! Contact us for more information.');
});


document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-button");
    const carousels = document.querySelectorAll(".carousel");
    const tabContents = document.querySelector(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            document.querySelector(".tab-button.active").classList.remove("active");
            tab.classList.add("active");

            const target = tab.getAttribute("data-tab");
            carousels.forEach((carousel) => {
                carousel.classList.remove("active");
                if (carousel.id === target) {
                    carousel.classList.add("active");
                }
            });
        });
    });

    tabContents.addEventListener("click", (e) => {
        if (e.target.classList.contains("prev") || e.target.classList.contains("next")) {
            const carousel = e.target.closest(".carousel");
            const inner = carousel.querySelector(".carousel-inner");
            const images = inner.querySelectorAll("img");
            let index = Array.from(images).findIndex(
                (img) => img.offsetLeft === inner.scrollLeft
            );

            if (e.target.classList.contains("prev")) {
                index = (index - 1 + images.length) % images.length;
            } else {
                index = (index + 1) % images.length;
            }

            inner.scrollLeft = images[index].offsetLeft;
        }
    });
});