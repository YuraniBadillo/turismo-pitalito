let language = "es";

const content = {
    es: {
        title: "Rutas Turísticas de Pitalito",
        nature: "Naturaleza",
        culture: "Cultura",
        exp1Title: "Laguna de Guaitipan",
        exp1Desc: "Hermosa laguna natural ideal para senderismo y fotografía.",
        exp2Title: "Artesanías Locales",
        exp2Desc: "Talleres y muestras de artesanos locales que conservan técnicas tradicionales."
    },
    en: {
        title: "Tourism Routes of Pitalito",
        nature: "Nature",
        culture: "Culture",
        exp1Title: "Guaitipan Lagoon",
        exp1Desc: "Beautiful natural lagoon ideal for hiking and photography.",
        exp2Title: "Local Handicrafts",
        exp2Desc: "Workshops and exhibitions of local artisans preserving traditional techniques."
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
    document.getElementById("culture").innerText = content[language].culture;

    document.getElementById("exp1-title").innerText = content[language].exp1Title;
    document.getElementById("exp1-desc").innerText = content[language].exp1Desc;

    document.getElementById("exp2-title").innerText = content[language].exp2Title;
    document.getElementById("exp2-desc").innerText = content[language].exp2Desc;
}
