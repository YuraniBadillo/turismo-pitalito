let language = "es";

const content = {
    es: {
        title: "Rutas Turísticas de Pitalito",
        nature: "Naturaleza",
        culture: "Cultura",

        exp1Title: "Laguna de Guaitipan",
        exp1Desc: "Hermosa laguna natural ideal para senderismo y fotografía.",

        exp2Title: "Artesanías Locales",
        exp2Desc: "Talleres y muestras de artesanos locales que conservan técnicas tradicionales.",

        exp3Title: "Cascada El Maco",
        exp3Desc: "Una hermosa cascada rodeada de naturaleza ideal para caminatas ecológicas.",

        exp4Title: "Sendero Ecológico",
        exp4Desc: "Recorrido natural para disfrutar de la biodiversidad del municipio.",

        exp5Title: "Museo Local",
        exp5Desc: "Espacio cultural donde se preserva la historia y tradiciones de la región.",

        exp6Title: "Ruta Ancestral",
        exp6Desc: "Experiencia cultural guiada sobre las raíces indígenas del territorio."
    },

    en: {
        title: "Tourism Routes of Pitalito",
        nature: "Nature",
        culture: "Culture",

        exp1Title: "Guaitipan Lagoon",
        exp1Desc: "Beautiful natural lagoon ideal for hiking and photography.",

        exp2Title: "Local Handicrafts",
        exp2Desc: "Workshops and exhibitions of local artisans preserving traditional techniques.",

        exp3Title: "El Maco Waterfall",
        exp3Desc: "A beautiful waterfall surrounded by nature, ideal for eco walks.",

        exp4Title: "Ecological Trail",
        exp4Desc: "Natural route to enjoy the biodiversity of the municipality.",

        exp5Title: "Local Museum",
        exp5Desc: "Cultural space preserving the history and traditions of the region.",

        exp6Title: "Ancestral Route",
        exp6Desc: "Guided cultural experience about the indigenous roots of the territory."
    }
};

function changeLanguage() {
    language = (language === "es") ? "en" : "es";

    document.getElementById("title").innerText = content[language].title;
    document.getElementById("nature").innerText = content[language].nature;
    document.getElementById("culture").innerText = content[language].culture;

    document.getElementById("exp1-title").innerText = content[language].exp1Title;
    document.getElementById("exp1-desc").innerText = content[language].exp1Desc;

    document.getElementById("exp2-title").innerText = content[language].exp2Title;
    document.getElementById("exp2-desc").innerText = content[language].exp2Desc;

    document.getElementById("exp3-title").innerText = content[language].exp3Title;
    document.getElementById("exp3-desc").innerText = content[language].exp3Desc;

    document.getElementById("exp4-title").innerText = content[language].exp4Title;
    document.getElementById("exp4-desc").innerText = content[language].exp4Desc;

    document.getElementById("exp5-title").innerText = content[language].exp5Title;
    document.getElementById("exp5-desc").innerText = content[language].exp5Desc;

    document.getElementById("exp6-title").innerText = content[language].exp6Title;
    document.getElementById("exp6-desc").innerText = content[language].exp6Desc;

    document.getElementById("menu-nature").innerText = content[language].nature;
    document.getElementById("menu-culture").innerText = content[language].culture;
}
