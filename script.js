let language = localStorage.getItem("language") || "es";

const content = {
    es: {
        title: "Rutas Turísticas de Pitalito",
        heroTitle: "Descubre la magia de Pitalito",
        heroDesc: "Vive experiencias únicas entre montañas, cafetales, cultura y sabores tradicionales en uno de los destinos turísticos más encantadores del Huila.",
        heroBtn: "Explorar destinos",
        homeTitle: "Explora Pitalito",
        homeDesc: "Descubre Pitalito, un destino lleno de vida y diversidad. Desde sus verdes montañas y ríos cristalinos hasta sus cafetales y coloridos paisajes rurales, cada rincón ofrece experiencias únicas: ecoturismo, senderismo, avistamiento de aves, gastronomía típica y la calidez de su gente te esperan para vivir aventuras inolvidables. ¡Explora la riqueza natural y cultural de Pitalito y déjate sorprender!",
        homeFoodTitle: "Gastronomía",
        homeFoodDesc: "Descubre los sabores tradicionales de Pitalito y disfruta de su rica oferta gastronómica.",
        homeFoodBtn: "Ver Gastronomía",
        cardNatureDesc: "Explora montañas, ríos y fauna de Pitalito.",
        cardNatureBtn: "Ver Naturaleza",
        cardCultureTitle: "Cultura",
        cardCultureDesc: "Descubre tradiciones y patrimonio cultural de Pitalito.",
        cardCultureBtn: "Ver Cultura",
        btnNature: "Ver Naturaleza",
        btnCulture: "Ver Cultura",
        nature: "Naturaleza",
        culture: "Cultura",
        natureDesc: "Pitalito se caracteriza por un entorno natural muy diverso y exuberante. Está ubicado en el sur del departamento del Huila, en una región rodeada de montañas y valles que forman parte de la cordillera Oriental de los Andes. Su clima es mayormente cálido y templado, ideal para la agricultura y el desarrollo de ecosistemas ricos en flora y fauna. Los ríos que atraviesan la zona, como el río Magdalena y sus afluentes, contribuyen a la fertilidad del suelo y al mantenimiento de bosques ribereños, que albergan numerosas especies de aves, mamíferos y peces. Además, los cerros y paisajes montañosos ofrecen un escenario perfecto para la conservación de la biodiversidad y actividades ecoturísticas, como senderismo, observación de aves y turismo de naturaleza. La combinación de paisajes agrícolas, bosques y cuerpos de agua hace que Pitalito sea un lugar de gran valor ecológico y ambiental en la región sur del Huila.",
        cultureDesc: "Descubre tradiciones, historia y patrimonio cultural de Pitalito.  Sumérgete en sus costumbres, festividades, expresiones artísticas y arquitectura representativa que reflejan la identidad y el legado de su gente. Vive experiencias culturales auténticas mientras recorres espacios llenos de memoria, color y significado que conectan el pasado con el presente de la región.",
        navHome: "Inicio",
        navNature: "Naturaleza",
        navCulture: "Cultura",
        foodTitle: "Gastronomía de Pitalito",
        foodDesc: "Pitalito es reconocido por su rica gastronomía, donde los visitantes pueden disfrutar de platos típicos del Huila y experiencias culinarias únicas. Lugares que combinan tradición, sabor y un ambiente acogedor.",
        food1Title: "Fogón de Piedra",
        food1Desc: "Restaurante reconocido por su comida tradicional huilense preparada en fogón de piedra.",
        food2Title: "La Pecera",
        food2Desc: "Un restaurante popular en Pitalito donde se destacan platos típicos y una experiencia gastronómica única.",

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
        heroTitle: "Discover the magic of Pitalito",
        heroDesc: "Live unique experiences among mountains, coffee plantations, culture and traditional flavors in one of the most charming tourist destinations in Huila.",
        heroBtn: "Explore destinations",
        homeTitle: "Explore Pitalito",
        homeDesc: "Discover Pitalito, a vibrant and diverse destination. From its verdant mountains and crystal-clear rivers to its coffee plantations and colorful rural landscapes, every corner offers unique experiences: ecotourism, hiking, birdwatching, traditional cuisine, and the warmth of its people await you for unforgettable adventures. Explore the natural and cultural richness of Pitalito and prepare to be amazed!",
        homeFoodTitle: "Gastronomy",
        homeFoodDesc: "Discover the traditional flavors of Pitalito and enjoy its rich gastronomic offer.",
        homeFoodBtn: "View Gastronomy",
        cardNatureTitle: "Nature",
        cardNatureDesc: "Explore mountains, rivers and wildlife of Pitalito.",
        cardNatureBtn: "View Nature",
        cardCultureTitle: "Culture",
        cardCultureDesc: "Discover traditions and cultural heritage of Pitalito.",
        cardCultureBtn: "View Culture",
        btnNature: "View Nature",
        btnCulture: "View Culture",
        nature: "Nature",
        culture: "Culture",
        natureDesc: "Pitalito is characterized by its diverse and lush natural environment. Located in the southern part of the Huila department, it lies in a region surrounded by mountains and valleys that form part of the Eastern Cordillera of the Andes. Its climate is mostly warm and temperate, ideal for agriculture and the development of ecosystems rich in flora and fauna. The rivers that cross the area, such as the Magdalena River and its tributaries, contribute to soil fertility and the maintenance of riparian forests, which are home to numerous species of birds, mammals, and fish. Furthermore, the hills and mountainous landscapes offer a perfect setting for biodiversity conservation and ecotourism activities, such as hiking, birdwatching, and nature tourism. The combination of agricultural landscapes, forests, and bodies of water makes Pitalito a place of great ecological and environmental value in the southern region of Huila.",
        cultureDesc: "Discover traditions, history and cultural heritage of Pitalito. Immerse yourself in its customs, festivals, artistic expressions, and distinctive architecture, which reflect the identity and legacy of its people. Enjoy authentic cultural experiences as you explore places steeped in history, color, and meaning that connect the region’s past with its present.",
        navHome: "Home",
        navNature: "Nature",
        navCulture: "Culture",
        foodTitle: "Pitalito Gastronomy",
        foodDesc: "Pitalito is known for its rich gastronomy, where visitors can enjoy traditional dishes from Huila and unique culinary experiences. Flavor and a welcoming atmosphere.",
        food1Title: "Stone Stove",
        food1Desc: "Restaurant known for traditional Huila cuisine prepared on a stone stove.",
        food2Title: "The Fish Tank",
        food2Desc: "A popular restaurant in Pitalito known for its traditional dishes and unique dining experience.",

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
    update("hero-title", content[language].heroTitle);
    update("hero-desc", content[language].heroDesc);
    update("hero-btn", content[language].heroBtn);
    update("home-title", content[language].homeTitle);
    update("home-desc", content[language].homeDesc);
    update("home-food-title", content[language].homeFoodTitle);
    update("home-food-desc", content[language].homeFoodDesc);
    update("home-food-btn", content[language].homeFoodBtn);
    update("nav-home", content[language].navHome);
    update("nav-nature", content[language].navNature);
    update("nav-culture", content[language].navCulture);
    update("btn-nature", content[language].btnNature);
    update("btn-culture", content[language].btnCulture);
    update("nature", content[language].nature);
    update("culture", content[language].culture);
    update("nature-desc", content[language].natureDesc);
    update("culture-desc", content[language].cultureDesc);
    update("card-nature-title", content[language].cardNatureTitle);
    update("card-nature-desc", content[language].cardNatureDesc);
    update("card-nature-btn", content[language].cardNatureBtn);
    update("card-culture-title", content[language].cardCultureTitle);
    update("card-culture-desc", content[language].cardCultureDesc);
    update("card-culture-btn", content[language].cardCultureBtn);
    update("food-title", content[language].foodTitle);
    update("food-desc", content[language].foodDesc);
    update("food1-title", content[language].food1Title);
    update("food1-desc", content[language].food1Desc);
    update("food2-title", content[language].food2Title);
    update("food2-desc", content[language].food2Desc);
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
