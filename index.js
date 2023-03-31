"use strict";

window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#btn").addEventListener("click", goBack);
}

function goBack() {
    window.location = "forside.html";
}