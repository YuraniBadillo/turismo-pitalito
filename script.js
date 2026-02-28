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
        exp1Title: "Guaitipan Lagoon",
        exp1Desc: "Beautiful natural lagoon ideal for hiking and photography."
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
    document.getElementById("exp1Title").innerText = content[language].exp1Title;
    document.getElementById("exp1Desc").innerText = content[language].exp1Desc;
}
