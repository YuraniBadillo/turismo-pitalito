let language = "es";

function changeLanguage() {
    if(language === "es") {
        document.querySelector("h1").innerText = "Tourism Routes of Pitalito";
        language = "en";
    } else {
        document.querySelector("h1").innerText = "Rutas Turísticas de Pitalito";
        language = "es";
    }
}
