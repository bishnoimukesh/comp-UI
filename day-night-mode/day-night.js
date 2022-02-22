// var toggle = document.querySelector(".toggle-icon");
// toggle.addEventListener("click", e=> {
//     document.body.classList.toggle('dark-mode');
//     if (localStorage.getItem('is-dark-mode') != null ){
//         var new_mode = (document.querySelector("body").getAttribute("class") == "dark-mode"? 'true': 'false');
//         localStorage.setItem('is-dark-mode',new_mode);
//         currentmode = (localStorage.getItem('is-dark-mode')== 'true') ? "dark-mode" : "";
//         // toggle.innerHTML = `<i class="fas fa-sun"></i>`;
//     }
// });

// window.onload = function(e) {
//     console.log("On page load localstorage",localStorage);
//     currentmode = (localStorage.getItem('is-dark-mode')== 'true') ? "dark-mode" : "";
//     document.querySelector("body").setAttribute("class", currentmode);
// };

// function onload() {
//     document.body.classList.toggle('dark-mode', localStorage.getItem('is-dark-mode') === 'true');
// }

const toggler = document.querySelector(".btn-toggle");
const btnLight = document.querySelector("#light-mode");
const btnDark = document.querySelector("#dark-mode");

const darkMode = () => {
    document.body.classList.add("dark-mode");
    btnLight.style.display = "inline-block";
    btnDark.style.display = "none";
    localStorage.setItem("theme", "dark");
}
const lightMode = () => {
    document.body.classList.remove("dark-mode");
    btnDark.style.display = "inline-block";
    btnLight.style.display = "none";
    localStorage.setItem("theme", "light");
}
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    darkMode();
} else {
    lightMode();
}

toggler.addEventListener("click", function () {
    if (localStorage.getItem("theme") === "light") {
        darkMode();
    }
    else {
        lightMode();
    }
});