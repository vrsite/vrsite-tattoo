// Объект со всеми переводами
const translations = {
    ru: {
        page_title_main: "Портфолио",
        hero_main_title: "TATTOOKIRILL YUVELIR", // Измененный текст
        nav_about: "Обо мне",
        nav_services: "Услуги",
        nav_portfolio: "Работы",
        nav_process: "Процесс",
        nav_contact: "Контакты",
        hero_subtitle: "Tattoo Germany",
        hero_description_short: "Ваш мастер эксклюзивных татуировок.",
        hero_description: "Кирилл – ваш мастер эксклюзивных татуировок в Германии. Специализируюсь на реалистичных, японских, чикано, орнаментальных и мини-татуировках. Создаю уникальные произведения искусства на вашей коже, отражающие вашу индивидуальность и стиль. Моя работа — это не просто нанесение чернил, а создание истории, которая останется с вами навсегда. Высокое качество, внимание к деталям и стерильность – мои главные приоритеты.",
        about_title: "Обо мне",
        services_title: "Услуги и стили",
        service_realism_title: "Реализм",
        service_realism_desc: "Детализированные портреты, животные и объекты, которые выглядят как фотографии на вашей коже.",
        service_japanese_title: "Японский стиль (Irezumi)",
        service_japanese_desc: "Традиционные мотивы: драконы, карпы, самураи, цветы в ярких, насыщенных цветах.",
        service_chicano_title: "Чикано",
        service_chicano_desc: "Гангстерская тематика, религиозные и культурные символы, обычно в черно-сером исполнении.",
        service_ornamental_title: "Орнаментал",
        service_ornamental_desc: "Геометрические узоры, мандалы, этнические мотивы, создающие уникальный дизайн.",
        service_mini_tattoo_title: "Мини-тату",
        service_mini_tattoo_desc: "Маленькие, аккуратные татуировки с глубоким смыслом или просто для украшения.",
        portfolio_title: "Мои работы",
        process_title: "Процесс",
        process_consultation_title: "Консультация",
        process_consultation_desc: "Обсуждаем ваши идеи, стиль, размер и расположение будущей татуировки. Ваше видение - наш приоритет.",
        process_design_title: "Разработка дизайна",
        process_design_desc: "Создаем уникальный эскиз, который идеально подходит именно вам, учитывая все пожелания и особенности анатомии.",
        process_preparation_title: "Подготовка",
        process_preparation_desc: "Подготавливаем кожу и рабочее место, обеспечивая полную стерильность и ваш комфорт.",
        process_tattooing_title: "Нанесение",
        process_tattooing_desc: "Аккуратно и профессионально наносим татуировку, уделяя внимание каждой детали для идеального результата.",
        process_aftercare_title: "Уход",
        process_aftercare_desc: "Предоставляем подробные рекомендации по уходу за новой татуировкой, чтобы она радовала вас долгие годы.",
        contact_title: "Контакты",
        contact_instagram_label: "Instagram",
        contact_telegram_label: "Telegram",
        footer_text: "© 2025. Все права защищены.",
        lightbox_prev: "←",
        lightbox_next: "→",
        share_title: "Поделиться сайтом TattooKirill Yuvelir",
        share_text: "Посмотрите портфолио потрясающего тату-мастера Кирилла Ювелира!"
    },
    en: {
        page_title_main: "Portfolio",
        hero_main_title: "TATTOOKIRILL YUVELIR", // Измененный текст
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_process: "Process",
        nav_contact: "Contact",
        hero_subtitle: "Tattoo Germany",
        hero_description_short: "Your exclusive tattoo artist.",
        hero_description: "Kirill is your master of exclusive tattoos in Germany. I specialize in realistic, Japanese, Chicano, ornamental, and mini-tattoos. I create unique works of art on your skin that reflect your individuality and style. My work is not just about applying ink, but about creating a story that will stay with you forever. High quality, attention to detail, and sterility are my top priorities.",
        about_title: "About Me",
        services_title: "Services & Styles",
        service_realism_title: "Realism",
        service_realism_desc: "Detailed portraits, animals, and objects that look like photographs on your skin.",
        service_japanese_title: "Japanese Style (Irezumi)",
        service_japanese_desc: "Traditional motifs: dragons, koi fish, samurai, flowers in vibrant, rich colors.",
        service_chicano_title: "Chicano",
        service_chicano_desc: "Gangster themes, religious and cultural symbols, usually in black and grey.",
        service_ornamental_title: "Ornamental",
        service_ornamental_desc: "Geometric patterns, mandalas, ethnic motifs, creating a unique design.",
        service_mini_tattoo_title: "Mini-Tattoo",
        service_mini_tattoo_desc: "Small, neat tattoos with deep meaning or simply for decoration.",
        portfolio_title: "My Works",
        process_title: "Process",
        process_consultation_title: "Consultation",
        process_consultation_desc: "We discuss your ideas, style, size, and placement of the future tattoo. Your vision is our priority.",
        process_design_title: "Design Development",
        process_design_desc: "We create a unique sketch that perfectly suits you, considering all wishes and anatomical features.",
        process_preparation_title: "Preparation",
        process_preparation_desc: "We prepare the skin and workspace, ensuring complete sterility and your comfort.",
        process_tattooing_title: "Tattooing",
        process_tattooing_desc: "Carefully and professionally apply the tattoo, paying attention to every detail for a perfect result.",
        process_aftercare_title: "Aftercare",
        process_aftercare_desc: "We provide detailed recommendations for caring for your new tattoo so it will bring you joy for many years.",
        contact_title: "Contact",
        contact_instagram_label: "Instagram",
        contact_telegram_label: "Telegram",
        footer_text: "© 2025. All rights reserved.",
        lightbox_prev: "←",
        lightbox_next: "→",
        share_title: "Share TattooKirill Yuvelir Website",
        share_text: "Check out the portfolio of the amazing tattoo artist Kirill Yuvelir!"
    },
    uk: {
        page_title_main: "Портфоліо",
        hero_main_title: "TATTOOKIRILL YUVELIR", // Измененный текст
        nav_about: "Про мене",
        nav_services: "Послуги",
        nav_portfolio: "Роботи",
        nav_process: "Процес",
        nav_contact: "Контакти",
        hero_subtitle: "Tattoo Germany",
        hero_description_short: "Ваш майстер ексклюзивних татуювань.",
        hero_description: "Кирило – ваш майстер ексклюзивних татуювань у Німеччині. Спеціалізуюсь на реалістичних, японських, чикано, орнаментальних та міні-татуюваннях. Створюю унікальні витвори мистецтва на вашій шкірі, що відображають вашу індивідуальність та стиль. Моя робота — це не просто нанесення чорнила, а створення історії, яка залишиться з вами назавжди. Висока якість, увага до деталей та стерильність – мої головні пріоритети.",
        about_title: "Про мене",
        services_title: "Послуги та стилі",
        service_realism_title: "Реалізм",
        service_realism_desc: "Деталізовані портрети, тварини та об'єкти, які виглядають як фотографії на вашій шкірі.",
        service_japanese_title: "Японський стиль (Irezumi)",
        service_japanese_desc: "Традиційні мотиви: дракони, коропи, самураї, квіти в яскравих, насичених кольорах.",
        service_chicano_title: "Чікано",
        service_chicano_desc: "Гангстерська тематика, релігійні та культурні символи, зазвичай у чорно-сірому виконанні.",
        service_ornamental_title: "Орнаментал",
        service_ornamental_desc: "Геометричні візерунки, мандали, етнічні мотиви, що створюють унікальний дизайн.",
        service_mini_tattoo_title: "Міні-тату",
        service_mini_tattoo_desc: "Маленькі, акуратні татуювання з глибоким змістом або просто для прикраси.",
        portfolio_title: "Мої роботи",
        process_title: "Процес",
        process_consultation_title: "Консультація",
        process_consultation_desc: "Обговорюємо ваші ідеї, стиль, розмір та розташування майбутнього татуювання. Ваше бачення - наш пріоритет.",
        process_design_title: "Розробка дизайну",
        process_design_desc: "Створюємо унікальний ескіз, який ідеально підходить саме вам, враховуючи всі побажання та особливості анатомії.",
        process_preparation_title: "Підготовка",
        process_preparation_desc: "Готуємо шкіру та робоче місце, забезпечуючи повну стерильність та ваш комфорт.",
        process_tattooing_title: "Нанесення",
        process_tattooing_desc: "Акуратно та професійно наносимо татуювання, приділяючи увагу кожній деталі для ідеального результату.",
        process_aftercare_title: "Догляд",
        process_aftercare_desc: "Надаємо докладні рекомендації щодо догляду за новим татуюванням, щоб воно радувало вас довгі роки.",
        contact_title: "Контакти",
        contact_instagram_label: "Instagram",
        contact_telegram_label: "Telegram",
        footer_text: "© 2025. Всі права захищені.",
        lightbox_prev: "←",
        lightbox_next: "→",
        share_title: "Поділитися сайтом TattooKirill Yuvelir",
        share_text: "Подивіться портфоліо чудового тату-майстра Кирила Ювеліра!"
    },
    de: {
        page_title_main: "Portfolio",
        hero_main_title: "TATTOOKIRILL YUVELIR", // Измененный текст
        nav_about: "Über mich",
        nav_services: "Leistungen",
        nav_portfolio: "Arbeiten",
        nav_process: "Prozess",
        nav_contact: "Kontakt",
        hero_subtitle: "Tattoo Germany",
        hero_description_short: "Ihr exklusiver Tätowierer.",
        hero_description: "Kirill ist Ihr Meister für exklusive Tätowierungen in Deutschland. Ich spezialisiere mich auf realistische, japanische, Chicano, ornamentale und Mini-Tattoos. Ich erschaffe einzigartige Kunstwerke auf Ihrer Haut, die Ihre Individualität und Ihren Stil widerspiegeln. Meine Arbeit ist nicht nur das Auftragen von Tinte, sondern die Schaffung einer Geschichte, die Sie für immer begleiten wird. Hohe Qualität, Liebe zum Detail und Sterilität sind meine obersten Prioritäten.",
        about_title: "Über Mich",
        services_title: "Leistungen & Stile",
        service_realism_title: "Realismus",
        service_realism_desc: "Detaillierte Porträts, Tiere und Objekte, die wie Fotos auf Ihrer Haut aussehen.",
        service_japanese_title: "Japanischer Stil (Irezumi)",
        service_japanese_desc: "Traditionelle Motive: Drachen, Koi-Fische, Samurai, Blumen in lebhaften, satten Farben.",
        service_chicano_title: "Chicano",
        service_chicano_desc: "Gangster-Themen, religiöse und kulturelle Symbole, meist in Schwarz und Grau gehalten.",
        service_ornamental_title: "Ornamental",
        service_ornamental_desc: "Geometrische Muster, Mandalas, ethnische Motive, die ein einzigartiges Design ergeben.",
        service_mini_tattoo_title: "Mini-Tattoo",
        service_mini_tattoo_desc: "Kleine, feine Tätowierungen mit tiefer Bedeutung oder einfach zur Dekoration.",
        portfolio_title: "Meine Arbeiten",
        process_title: "Prozess",
        process_consultation_title: "Beratung",
        process_consultation_desc: "Wir besprechen Ihre Ideen, Stil, Größe und Platzierung der zukünftigen Tätowierung. Ihre Vision ist unsere Priorität.",
        process_design_title: "Designentwicklung",
        process_design_desc: "Wir erstellen eine einzigartige Skizze, die perfekt zu Ihnen passt, unter Berücksichtigung aller Wünsche und anatomischen Besonderheiten.",
        process_preparation_title: "Vorbereitung",
        process_preparation_desc: "Wir bereiten die Haut und den Arbeitsplatz vor, um vollständige Sterilität und Ihren Komfort zu gewährleisten.",
        process_tattooing_title: "Tätowierung",
        process_tattooing_desc: "Sorgfältig und professionell tragen wir die Tätowierung auf, wobei wir auf jedes Detail achten, um ein perfektes Ergebnis zu erzielen.",
        process_aftercare_title: "Nachsorge",
        process_aftercare_desc: "Wir geben detaillierte Empfehlungen zur Pflege Ihres neuen Tattoos, damit es Ihnen viele Jahre Freude bereitet.",
        contact_title: "Kontakt",
        contact_instagram_label: "Instagram",
        contact_telegram_label: "Telegram",
        footer_text: "© 2025. Alle Rechte vorbehalten.",
        lightbox_prev: "←",
        lightbox_next: "→",
        share_title: "TattooKirill Yuvelir Webseite teilen",
        share_text: "Schauen Sie sich das Portfolio des erstaunlichen Tätowierers Kirill Yuvelir an!"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Down Button
    const scrollDownBtn = document.querySelector('.scroll-down-btn');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Language Switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('lang') || 'ru'; // По умолчанию русский
    
    // Устанавливаем активную кнопку
    langButtons.forEach(button => {
        if (button.dataset.lang === currentLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Применяем переводы при загрузке страницы
    applyTranslations(currentLang);

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            localStorage.setItem('lang', lang);
            applyTranslations(lang);

            // Обновляем активный класс
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    function applyTranslations(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        // Обновляем title страницы
        document.title = translations[lang].page_title_main;
    }

    // Hamburger Menu Functionality
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    hamburgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked (for mobile)
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });


    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    // Обновлен селектор: теперь только изображения, видео удалено
    const galleryItems = document.querySelectorAll('.portfolio-gallery img');
    let currentIndex = 0;

    // Кнопки социальных сетей
    const socialSideButtons = document.querySelector('.social-side-buttons');
    const contactSection = document.getElementById('contact');

    // Новые кнопки "Поделиться"
    const shareTopLeftBtn = document.getElementById('shareTopLeftBtn');
    const shareBottomBtn = document.getElementById('shareBottomBtn');

    // Функция для обработки действия "Поделиться"
    function shareWebsite() {
        const url = window.location.href; // Текущий URL сайта
        const titleKey = 'share_title';
        const textKey = 'share_text';
        
        const currentLang = localStorage.getItem('lang') || 'ru';
        const shareTitle = translations[currentLang][titleKey] || "Поделиться сайтом";
        const shareText = translations[currentLang][textKey] || "Посмотрите этот сайт!";

        if (navigator.share) {
            navigator.share({
                title: shareTitle,
                text: shareText,
                url: url,
            }).then(() => {
                console.log('Сайт успешно поделен!');
            }).catch((error) => {
                console.error('Ошибка при попытке поделиться:', error);
                // Если share API не сработало или пользователь отменил, можно предложить копирование
                fallbackCopyUrl(url);
            });
        } else {
            // Запасной вариант для браузеров без navigator.share
            fallbackCopyUrl(url);
        }
    }

    // Запасная функция: копировать URL в буфер обмена
    function fallbackCopyUrl(url) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Ссылка на сайт скопирована в буфер обмена: ' + url);
        }).catch(err => {
            console.error('Не удалось скопировать ссылку:', err);
            prompt('Скопируйте ссылку вручную:', url); // Если копирование не удалось
        });
    }

    // Добавляем слушатели событий для кнопок "Поделиться"
    if (shareTopLeftBtn) {
        shareTopLeftBtn.addEventListener('click', shareWebsite);
    }
    if (shareBottomBtn) {
        shareBottomBtn.addEventListener('click', shareWebsite);
    }

    // Функция для обновления видимости социальных кнопок
    function updateSocialButtonsVisibility() {
        if (!socialSideButtons) return; // Выход, если кнопки не найдены

        const isLightboxOpen = lightbox.style.display === 'flex';
        const contactSectionRect = contactSection ? contactSection.getBoundingClientRect() : null;

        // Проверяем, находится ли раздел контактов в видимой области экрана
        // Кнопки должны исчезать, когда верхняя часть раздела контактов попадает в viewport
        // и нижняя часть раздела контактов еще не вышла из viewport.
        const isContactSectionInView = contactSectionRect && 
                                       contactSectionRect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
                                       contactSectionRect.bottom >= 0;

        if (isLightboxOpen || isContactSectionInView) {
            socialSideButtons.style.display = 'none';
        } else {
            socialSideButtons.style.display = 'flex'; // Используем 'flex', так как в CSS они flex-column
        }
    }

    function updateLightboxContent() {
        const currentItem = galleryItems[currentIndex];
        
        lightboxImg.src = currentItem.src;
        lightboxImg.style.display = 'block';

        // Убедимся, что никаких видеоэлементов в лайтбоксе нет
        let lightboxVideo = lightbox.querySelector('#lightbox-video');
        if (lightboxVideo) {
            lightboxVideo.remove();
        }

        lightbox.style.display = 'flex';
        updateSocialButtonsVisibility(); // Обновляем видимость кнопок после открытия лайтбокса
    }


    function closeLightbox() {
        lightbox.style.display = 'none';
        lightboxImg.src = ''; // Очищаем src изображения
        updateSocialButtonsVisibility(); // Обновляем видимость кнопок после закрытия лайтбокса
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxContent();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightboxContent();
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            updateLightboxContent();
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
        if (e.key === 'ArrowRight' && lightbox.style.display === 'flex') {
            showNextImage();
        }
        if (e.key === 'ArrowLeft' && lightbox.style.display === 'flex') {
            showPrevImage();
        }
    });

    // Логика для кнопки "Вверх"
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Показываем/скрываем кнопку при прокрутке
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) { // Появляется сразу при начале прокрутки вниз
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
        updateSocialButtonsVisibility(); // Вызываем также при прокрутке
    });

    // Плавная прокрутка наверх при клике на кнопку
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Инициализация видимости кнопок при загрузке страницы
    updateSocialButtonsVisibility();
});