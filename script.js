let language = localStorage.getItem("language") || "es";

const content = {
    es: {
        title: "Rutas Turísticas de Pitalito",
        homeTitle: "Explora Pitalito",
        homeDesc: "Descubre naturaleza y cultura del sur del Huila.",
        btnNature: "Ver Naturaleza",
        btnCulture: "Ver Cultura",
        nature: "Naturaleza",
        culture: "Cultura",
        natureDesc: "Explora paisajes naturales y rutas ecológicas.",
        cultureDesc: "Descubre tradiciones, historia y patrimonio cultural de Pitalito.",

        exp1Title: "Laguna de Guaitipan",
        exp1Desc: "Hermosa laguna natural ideal para senderismo y fotografía.",

        exp3Title: "Parque Ecoturístico Pueblito Huilense",
        exp3Desc: "es un Parque Ecoturistico que busca brindar experiencias en un entorno natural rescatando la cultura del Huila.",

        exp2Title: "Artesanías Locales",
        exp2Desc: "Talleres y muestras de artesanos locales que conservan técnicas tradicionales.",

        exp5Title: "Feria Equina",
        exp5Desc: " Competencias de los mejores ejemplares del Caballo Criollo Colombiano, juzgamientos de alto nivel, remates musicales y muestras gastronómicas.",

        exp6Title: "Ruta del Cafe",
        exp6Desc: "Pitalito es líder en producción de café especial, ofreciendo visitas a fincas tradicionales para conocer el proceso desde la siembra hasta la taza"
    },

    en: {
        title: "Tourist Routes of Pitalito",
        homeTitle: "Explore Pitalito",
        homeDesc: "Discover nature and culture in southern Huila.",
        btnNature: "View Nature",
        btnCulture: "View Culture",
        nature: "Nature",
        culture: "Culture",
        natureDesc: "Explore natural landscapes and ecological routes.",
        cultureDesc: "Discover traditions, history and cultural heritage of Pitalito.",

        exp1Title: "Guaitipan Lagoon",
        exp1Desc: "Beautiful natural lagoon ideal for hiking and photography.",

        exp3Title: "Pueblito Huilense Ecotourism Park",
        exp3Desc: "It is an Ecotourism Park that seeks to provide experiences in a natural environment, rescuing the culture of Huila.",

        exp2Title: "Local Crafts",
        exp2Desc: "Workshops and exhibitions of local artisans preserving traditional techniques.",

        exp5Title: "Equine Fair",
        exp5Desc: "Competitions featuring the finest examples of the Colombian Criollo Horse, high-level judging, musical auctions, and gastronomic displays.",

        exp6Title: "Coffee Route",
        exp6Desc: "Pitalito is a leader in specialty coffee production, offering visits to traditional farms to learn about the process from planting to the cup."
    }
};

function update(id, text) {
    const element = document.getElementById(id);
    if (element && text) {
        element.innerText = text;
    }
}

function applyLanguage() {
    update("title", content[language].title);
    update("home-title", content[language].homeTitle);
    update("home-desc", content[language].homeDesc);
    update("btn-nature", content[language].btnNature);
    update("btn-culture", content[language].btnCulture);
    update("nature", content[language].nature);
    update("culture", content[language].culture);
    update("nature-desc", content[language].natureDesc);
    update("culture-desc", content[language].cultureDesc);

    update("exp1-title", content[language].exp1Title);
    update("exp1-desc", content[language].exp1Desc);
    update("exp2-title", content[language].exp2Title);
    update("exp2-desc", content[language].exp2Desc);
    update("exp3-title", content[language].exp3Title);
    update("exp3-desc", content[language].exp3Desc);
    update("exp5-title", content[language].exp5Title);
    update("exp5-desc", content[language].exp5Desc);
    update("exp6-title", content[language].exp6Title);
    update("exp6-desc", content[language].exp6Desc);
}

function changeLanguage() {
    language = (language === "es") ? "en" : "es";
    localStorage.setItem("language", language);
    applyLanguage();
}

document.addEventListener("DOMContentLoaded", applyLanguage);
