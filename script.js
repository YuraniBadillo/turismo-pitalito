let isSpanish = true;

function changeLanguage() {
    isSpanish = !isSpanish;

    function update(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = text;
        }
    }

    if (isSpanish) {
        update("title", "Rutas Turísticas de Pitalito");
        update("home-title", "Explora Pitalito");
        update("home-desc", "Descubre naturaleza y cultura del sur del Huila.");
        update("btn-nature", "Ver Naturaleza");
        update("btn-culture", "Ver Cultura");
        update("nature", "Naturaleza");
        update("culture", "Cultura");
    } else {
        update("title", "Tourist Routes of Pitalito");
        update("home-title", "Explore Pitalito");
        update("home-desc", "Discover nature and culture in southern Huila.");
        update("btn-nature", "View Nature");
        update("btn-culture", "View Culture");
        update("nature", "Nature");
        update("culture", "Culture");
    }
}

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
