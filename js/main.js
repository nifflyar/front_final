document.getElementById('themeBtn').addEventListener('click', function () {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
    }
});

const texts = {
    ru: {
        home: 'Главное',
        movies: 'Фильмы',
        tvShows: 'Сериалы',
        contact: 'Контакт',
        language: 'Язык 🇷🇺',
        theme: '☀️ / 🌙',
        chainsawman: 'Человек Бензопила',
        demonslayer: 'Истребитель демонов',
        evangelion: 'Евангелион',
        heroTitle: "Добро пожаловать в KINOLOVE",
        heroDesc: "Мы предлагаем вам лучшее из мира кино и сериалов. На нашем сайте вы найдете самые свежие новости,\nрейтинги, а также сможете открыть для себя новые фильмы и сериалы, которые обязательно понравятся!",
        contactUs: "Свяжитесь с нами",
        contactHappy: "Мы всегда рады получить информацию от наших клиентов, инвесторов и любителей кино",
        contactOpenHours: "ЧАСЫ РАБОТЫ",
        contactDateTime: "Понедельник - пятница, с 8 утра до 16 вечера",
        contactAddressTitle: "Адрес",
        contactAddress: "1234 Оушен Вью Драйв, Сан-Франциско, Калифорния 94110",
        sendMessage: "Отправить",
        fullName: "Полное имя",
        email: "Электронная почта",
        phone: "Номер телефона",
        message: "Ваше сообщение здесь",
        searchPlaceholder: "Поиск...",

        interstellar: "Интерстеллар",
        interstellarDesc: "Поскольку наше пребывание на Земле подходит к концу, команда исследователей предпринимает самую важную миссию в истории человечества: отправляется за пределы этой галактики, чтобы выяснить, есть ли у человечества будущее среди звезд.",

        knivesOut: "Достать Ножи",
        knivesOutDesc: "Когда известный криминальный романист Харлан Тромби был найден мертвым в своем поместье сразу после своего 85-летия, к расследованию таинственным образом привлекается любознательный и жизнерадостный детектив Бенуа Блан.",

        catchMe: "Поймай меня, если сможешь",
        catchMeDesc: "Фрэнку едва исполнилось 17, и он уже умелый фальшивомонетчик, успевший зарекомендовать себя как врач, юрист и пилот. Агент ФБР Карл становится одержим идеей выследить мошенника, который только наслаждается погоней.",
    },
    en: {
        home: 'Home',
        movies: 'Movies',
        tvShows: 'TV Shows',
        contact: 'Contact',
        language: 'Language 🇺🇸',
        theme: '☀️ / 🌙',
        chainsawman: 'Chainsaw Man',
        demonslayer: 'Demon Slayer',
        evangelion: 'Evangelion',
        heroTitle: "Welcome to KINOLOVE",
        heroDesc: "We offer you the best of the world of movies and TV series. On our website you will find the latest news, \nratings, and you will also be able to discover new movies and TV series that you will definitely like!",
        contactUs: "CONTACT US",
        contactHappy: "We're always happy to hear from our customers, investors, and film enthusiasts",
        contactOpenHours: "OPENING HOURS",
        contactDateTime: "Monday - Friday, 8am - 4pm",
        contactAddressTitle: "ADDRESS",
        contactAddress: "1234 Ocean View Drive, San Francisco, CA 94110",
        sendMessage: "Send",
        fullName: "Full Name",
        email: "Email",
        phone: "Phone Number",
        message: "Your message here",
        searchPlaceholder: "Search...",

        interstellar: "Interstellar",
        interstellarDesc: "With our time on Earth coming to an end, a team of explorers undertakes the most important mission in human history; traveling beyond this galaxy to discover whether mankind has a future among the stars.",

        knivesOut: "Knives Out",
        knivesOutDesc: "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate.",

        catchMe: "Catch Me If You Can",
        catchMeDesc: "Barely 17 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
    }
};



function changeLanguage(lang) {

    $('#homeLink').html(texts[lang].home);
    $('#moviesLink').text(texts[lang].movies);
    $('#tvShowsLink').text(texts[lang].tvShows);
    $('#contactLink').text(texts[lang].contact);
    $('#languageBtn').text(texts[lang].language);
    $('#themeBtn').text(texts[lang].theme);
    $('#chainsawman').text(texts[lang].chainsawman);
    $('#demonslayer').text(texts[lang].demonslayer);
    $('#evangelion').text(texts[lang].evangelion);
    $('#heroTitle').text(texts[lang].heroTitle);
    $('#heroDesc').text(texts[lang].heroDesc);
    $('#contactUs').text(texts[lang].contactUs);
    $('#contactHappy').text(texts[lang].contactHappy);
    $('#contactOpenHours').text(texts[lang].contactOpenHours);
    $('#contactDateTime').text(texts[lang].contactDateTime);
    $('#contactAddressTitle').text(texts[lang].contactAddressTitle);
    $('#contactAddress').text(texts[lang].contactAddress);
    $('#sendMessage').text(texts[lang].sendMessage);

    $('#fullName').attr('placeholder', texts[lang].fullName);
    $('#email').attr('placeholder', texts[lang].email);
    $('#phone').attr('placeholder', texts[lang].phone);
    $('#message').attr('placeholder', texts[lang].message);

    $('#searchInput').attr('placeholder', texts[lang].searchPlaceholder);

    $('#interstellar').text(texts[lang].interstellar);
    $('#interstellarDesc').text(texts[lang].interstellarDesc);

    $('#knivesOut').text(texts[lang].knivesOut);
    $('#knivesOutDesc').text(texts[lang].knivesOutDesc);

    $('#catchMe').text(texts[lang].catchMe);
    $('#catchMeDesc').text(texts[lang].catchMeDesc);

    localStorage.setItem('language', lang);
}



document.getElementById('languageBtn').addEventListener('click', function () {
    const currentLang = localStorage.getItem('language');
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    changeLanguage(newLang);
    location.reload()
});


window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(savedTheme + '-theme');
    } else {
        document.body.classList.add('light-theme');
    }
    const savedLanguage = localStorage.getItem('language');
    changeLanguage(savedLanguage)

}