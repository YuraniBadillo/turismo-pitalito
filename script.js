let language = "es";

const content = {
    es: {
        title: "Rutas Turísticas de Pitalito",
        nature: "Naturaleza",
        exp1Title: "Laguna de Guaitipan",
        exp1Desc: "Hermosa laguna natural ideal para senderismo y fotografía."
    },
    en: {
        title: "Tourism Routes of Pitalito",
        nature: "Nature",
        exp1-title: "Guaitipan Lagoon",
        exp1-desc: "Beautiful natural lagoon ideal for hiking and photography."
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
    document.getElementById("exp1-title").innerText = content[language].exp1-title;
    document.getElementById("exp1-desc").innerText = content[language].exp1-desc;
}
