"use strict";

window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#btn-to-main").addEventListener("click", goToMain);
}

function goToMain() {
    window.location = "index.html";
}