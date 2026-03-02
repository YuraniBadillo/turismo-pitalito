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

    function update(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = text;
        }
    }

    update("title", content[language].title);
    update("nature", content[language].nature);
    update("culture", content[language].culture);

    update("exp1-title", content[language].exp1Title);
    update("exp1-desc", content[language].exp1Desc);

    update("exp2-title", content[language].exp2Title);
    update("exp2-desc", content[language].exp2Desc);

    update("exp3-title", content[language].exp3Title);
    update("exp3-desc", content[language].exp3Desc);

    update("exp4-title", content[language].exp4Title);
    update("exp4-desc", content[language].exp4Desc);

    update("exp5-title", content[language].exp5Title);
    update("exp5-desc", content[language].exp5Desc);

    update("exp6-title", content[language].exp6Title);
    update("exp6-desc", content[language].exp6Desc);

    update("menu-nature", content[language].nature);
    update("menu-culture", content[language].culture);

    update(
        "culture-desc",
        language === "es"
            ? "Descubre tradiciones, historia y patrimonio cultural de Pitalito."
            : "Discover traditions, history and cultural heritage of Pitalito."
    );

    update(
        "nature-desc",
        language === "es"
            ? "Explora paisajes naturales y rutas ecológicas."
            : "Explore natural landscapes and ecological routes."
    );
}
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle("active");
}
