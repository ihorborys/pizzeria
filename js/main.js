const ghPagesRootURL = "https://ihorborys.github.io/pizzeria/";
const gallerySlideUrl = "assets/img/";
const SLIDE_BASE_URL = window.location.origin === ghPagesRootURL
    ? ghPagesRootURL + gallerySlideUrl
    : gallerySlideUrl;
    console.log(window.location.origin);

const logo = document.querySelector(".logo img");
const orderBtn = document.querySelector(".order-btn img");
const footerLogo = document.querySelector(".footer-logo img");
const socials = document.querySelectorAll(".social-footer img");
const socialsImgNames = ["facebook.svg", "instagram.svg", "telegram.svg"];

logo.setAttribute("src", SLIDE_BASE_URL + "logo2.jpg");
orderBtn.setAttribute("src", SLIDE_BASE_URL + "order_btn.jpeg");
footerLogo.setAttribute("src", SLIDE_BASE_URL + "logo2.jpg");
socials.forEach((social, i) => {
    social.setAttribute("src", SLIDE_BASE_URL + "social/" + socialsImgNames[i]);
})