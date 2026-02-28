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
