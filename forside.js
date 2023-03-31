"use strict";

window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#btn").addEventListener("click", goToMain);
}

function goToMain() {
    window.location = "index.html";
}