let language = "es";

const content = {
    es: {
        title: "Rutas Turísticas de Pitalito",
        nature: "Naturaleza"
    },
    en: {
        title: "Tourism Routes of Pitalito",
        nature: "Nature"
    }
};

function changeLanguage() {
    if (language === "es") {
        language = "en";
    } else {
        language = "es";
    }

    document.getElementById("title").innerText = content[language].title;
    document.getElementById("nature").innerText = content[language].nature;
}
