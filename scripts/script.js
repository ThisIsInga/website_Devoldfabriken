document.querySelector(".header-burger").addEventListener("click", function () {
    this.classList.toggle("active");

     
    const headerNav = document.querySelector(".header-wrap");
    if (headerNav) {
        headerNav.classList.toggle("header-wrap-activ");
    }
});
