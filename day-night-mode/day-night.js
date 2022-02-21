var toggle = document.querySelector(".toggle-icon");
toggle.addEventListener("click", e=> {
    document.body.classList.toggle('dark-mode');
    if (localStorage.getItem('is-dark-mode') != null ){
        var new_mode = (document.querySelector("body").getAttribute("class") == "dark-mode"? 'true': 'false');
        localStorage.setItem('is-dark-mode',new_mode);
        currentmode = (localStorage.getItem('is-dark-mode')== 'true') ? "dark-mode" : "";
        // toggle.innerHTML = `<i class="fas fa-sun"></i>`;
    }
});

// window.onload = function(e) {
//     console.log("On page load localstorage",localStorage);
//     currentmode = (localStorage.getItem('is-dark-mode')== 'true') ? "dark-mode" : "";
//     document.querySelector("body").setAttribute("class", currentmode);
// };

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('is-dark-mode') === 'true');
}
