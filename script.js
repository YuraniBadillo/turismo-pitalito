let language = "es";

function changeLanguage() {
    if (language === "es") {
        document.getElementById("title").innerText = "Tourism Routes of Pitalito";
        language = "en";
    } else {
        document.getElementById("title").innerText = "Rutas Turísticas de Pitalito";
        language = "es";
    }
}
