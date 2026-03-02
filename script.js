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
        cultureDesc: "Descubre tradiciones, historia y patrimonio cultural de Pitalito."
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
        cultureDesc: "Discover traditions, history and cultural heritage of Pitalito."
    }
};

function update(id, text) {
    const element = document.getElementById(id);
    if (element) {
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
}

function changeLanguage() {
    language = (language === "es") ? "en" : "es";
    localStorage.setItem("language", language);
    applyLanguage();
}

document.addEventListener("DOMContentLoaded", applyLanguage);
