document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let scroll = window.scrollY;
        let scroll_top = document.querySelector(".scroll-top img");
        let downloadBtn = document.getElementById("download-btn");
        let contactNo = document.getElementById("contact-no");
        let mainHeader = document.querySelector(".main-header");
        const mobileMenu = document.querySelector('.mobile-menu');

        if (scroll >= 60) {
            mainHeader.classList.add("animate", "pos-fixed");
            mobileMenu.classList.remove("active");
            scroll_top?.classList.add("d-block");
            scroll_top?.classList.remove("d-none");
            downloadBtn.classList.remove("d-none");
            downloadBtn.classList.add("d-block");
            contactNo.classList.remove("d-block");
            contactNo.classList.add("d-none");
        } else {
            mainHeader.classList.remove("animate", "pos-fixed");
            scroll_top?.classList.remove("d-block");
            scroll_top?.classList.add("d-none");
            downloadBtn.classList.remove("d-block");
            downloadBtn.classList.add("d-none");
            contactNo.classList.remove("d-none");
            contactNo.classList.add("d-block");
        }
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}
