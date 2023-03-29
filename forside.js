"use strict";

window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#btn-back").addEventListener("click", goBack);
}

function goToMain() {
    window.location = "forside.html";
}