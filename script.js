document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle with animation
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.main-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    // Обновляем aria-expanded для доступности
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
  });

  // Scroll down button
  const scrollDownBtn = document.querySelector('.scroll-down-btn');
  scrollDownBtn.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Переводы
  const translations = {
    ru: {
      page_title_main: "Портфолио",
      nav_about: "Обо мне",
      nav_services: "Услуги",
      nav_portfolio: "Работы",
      nav_process: "Процесс",
      nav_contact: "Контакты",
      hero_main_title: "TATTOOKIRILL YUVELIR",
      hero_subtitle: "Tattoo Germany",
      hero_description_short: "Ваш мастер эксклюзивных татуировок.",
      hero_description:
        "Кирилл – ваш мастер эксклюзивных татуировок в Германии. Специализируюсь на реалистичных, японских, чикано, орнаментальных и мини-татуировках. Создаю уникальные произведения искусства на вашей коже, отражающие вашу индивидуальность и стиль. Моя работа — это не просто нанесение чернил, а создание истории, которая останется с вами навсегда. Высокое качество, внимание к деталям и стерильность – мои главные приоритеты.",
      about_title: "Обо мне",
      services_title: "Услуги и стили",
      service_realism_title: "Реализм",
      service_realism_desc:
        "Детализированные портреты, животные и объекты, которые выглядят как фотографии на вашей коже.",
      service_japanese_title: "Японский стиль (Irezumi)",
      service_japanese_desc:
        "Традиционные мотивы: драконы, карпы, самураи, цветы в ярких, насыщенных цветах.",
      service_chicano_title: "Чикано",
      service_chicano_desc:
        "Гангстерская тематика, религиозные и культурные символы, обычно в черно-сером исполнении.",
      service_ornamental_title: "Орнаментал",
      service_ornamental_desc:
        "Геометрические узоры, мандалы, этнические мотивы, создающие уникальный дизайн.",
      service_mini_tattoo_title: "Мини-тату",
      service_mini_tattoo_desc:
        "Маленькие, аккуратные татуировки с глубоким смыслом или просто для украшения.",
      portfolio_title: "Мои работы",
      process_title: "Процесс",
      process_consultation_title: "Консультация",
      process_consultation_desc:
        "Обсуждаем ваши идеи, стиль, размер и расположение будущей татуировки. Ваше видение - наш приоритет.",
      process_design_title: "Разработка дизайна",
      process_design_desc:
        "Создаем уникальный эскиз, который идеально подходит именно вам, учитывая все пожелания и особенности анатомии.",
      process_preparation_title: "Подготовка",
      process_preparation_desc:
        "Подготавливаем кожу и рабочее место, обеспечивая полную стерильность и ваш комфорт.",
      process_tattooing_title: "Нанесение",
      process_tattooing_desc:
        "Аккуратно и профессионально наносим татуировку, уделяя внимание каждой детали для идеального результата.",
      process_aftercare_title: "Уход",
      process_aftercare_desc:
        "Предоставляем подробные рекомендации по уходу за новой татуировкой, чтобы она радовала вас долгие годы.",
      contact_title: "Контакты",
      contact_instagram_label: "Instagram",
      contact_telegram_label: "Telegram",
      footer_text: "© 2025. Все права защищены.",
      lightbox_prev: "‹",
      lightbox_next: "›",
    },
    en: {
      page_title_main: "Portfolio",
      nav_about: "About Me",
      nav_services: "Services",
      nav_portfolio: "Portfolio",
      nav_process: "Process",
      nav_contact: "Contact",
      hero_main_title: "TATTOOKIRILL YUVELIR",
      hero_subtitle: "Tattoo Germany",
      hero_description_short: "Your exclusive tattoo master.",
      hero_description:
        "Kirill is your exclusive tattoo master in Germany. Specializing in realistic, Japanese, Chicano, ornamental, and mini tattoos. Creating unique works of art on your skin that reflect your individuality and style. My work is not just about applying ink, but creating a story that will stay with you forever. High quality, attention to detail, and sterility are my top priorities.",
      about_title: "About Me",
      services_title: "Services and Styles",
      service_realism_title: "Realism",
      service_realism_desc:
        "Detailed portraits, animals, and objects that look like photographs on your skin.",
      service_japanese_title: "Japanese Style (Irezumi)",
      service_japanese_desc:
        "Traditional motifs: dragons, carps, samurai, flowers in bright, rich colors.",
      service_chicano_title: "Chicano",
      service_chicano_desc:
        "Gangster themes, religious and cultural symbols, usually in black and gray.",
      service_ornamental_title: "Ornamental",
      service_ornamental_desc:
        "Geometric patterns, mandalas, ethnic motifs creating unique designs.",
      service_mini_tattoo_title: "Mini Tattoo",
      service_mini_tattoo_desc:
        "Small, neat tattoos with deep meaning or just for decoration.",
      portfolio_title: "My Works",
      process_title: "Process",
      process_consultation_title: "Consultation",
      process_consultation_desc:
        "Discuss your ideas, style, size, and placement of the future tattoo. Your vision is our priority.",
      process_design_title: "Design Development",
      process_design_desc:
        "Creating a unique sketch that perfectly suits you, considering all wishes and anatomical features.",
      process_preparation_title: "Preparation",
      process_preparation_desc:
        "Preparing the skin and workspace, ensuring full sterility and your comfort.",
      process_tattooing_title: "Tattooing",
      process_tattooing_desc:
        "Carefully and professionally applying the tattoo, paying attention to every detail for a perfect result.",
      process_aftercare_title: "Aftercare",
      process_aftercare_desc:
        "Providing detailed recommendations for caring for your new tattoo so it pleases you for many years.",
      contact_title: "Contacts",
      contact_instagram_label: "Instagram",
      contact_telegram_label: "Telegram",
      footer_text: "© 2025. All rights reserved.",
      lightbox_prev: "‹",
      lightbox_next: "›",
    },
    uk: {
      page_title_main: "Портфоліо",
      nav_about: "Про мене",
      nav_services: "Послуги",
      nav_portfolio: "Роботи",
      nav_process: "Процес",
      nav_contact: "Контакти",
      hero_main_title: "TATTOOKIRILL YUVELIR",
      hero_subtitle: "Tattoo Germany",
      hero_description_short: "Ваш майстер ексклюзивних татуювань.",
      hero_description:
        "Кирило – ваш майстер ексклюзивних татуювань у Німеччині. Спеціалізуюся на реалістичних, японських, чикано, орнаментальних та міні-тату. Створюю унікальні твори мистецтва на вашій шкірі, що відображають вашу індивідуальність та стиль. Моя робота — це не просто нанесення чорнил, а створення історії, яка залишиться з вами назавжди. Висока якість, увага до деталей та стерильність – мої головні пріоритети.",
      about_title: "Про мене",
      services_title: "Послуги та стилі",
      service_realism_title: "Реалізм",
      service_realism_desc:
        "Деталізовані портрети, тварини та об’єкти, які виглядають як фотографії на вашій шкірі.",
      service_japanese_title: "Японський стиль (Irezumi)",
      service_japanese_desc:
        "Традиційні мотиви: дракони, коропи, самураї, квіти в яскравих, насичених кольорах.",
      service_chicano_title: "Чикано",
      service_chicano_desc:
        "Гангстерська тематика, релігійні та культурні символи, зазвичай у чорно-сірому виконанні.",
      service_ornamental_title: "Орнаментал",
      service_ornamental_desc:
        "Геометричні візерунки, мандали, етнічні мотиви, що створюють унікальний дизайн.",
      service_mini_tattoo_title: "Міні-тату",
      service_mini_tattoo_desc:
        "Маленькі, акуратні татуювання з глибоким змістом або просто для прикраси.",
      portfolio_title: "Мої роботи",
      process_title: "Процес",
      process_consultation_title: "Консультація",
      process_consultation_desc:
        "Обговорюємо ваші ідеї, стиль, розмір та розташування майбутньої татуювання. Ваше бачення - наш пріоритет.",
      process_design_title: "Розробка дизайну",
      process_design_desc:
        "Створюємо унікальний ескіз, який ідеально підходить саме вам, враховуючи всі побажання та особливості анатомії.",
      process_preparation_title: "Підготовка",
      process_preparation_desc:
        "Підготовлюємо шкіру та робоче місце, забезпечуючи повну стерильність та ваш комфорт.",
      process_tattooing_title: "Нанесення",
      process_tattooing_desc:
        "Акуратно та професійно наносимо татуювання, приділяючи увагу кожній деталі для ідеального результату.",
      process_aftercare_title: "Догляд",
      process_aftercare_desc:
        "Надаємо докладні рекомендації щодо догляду за новою татуюванням, щоб вона радувала вас довгі роки.",
      contact_title: "Контакти",
      contact_instagram_label: "Instagram",
      contact_telegram_label: "Telegram",
      footer_text: "© 2025. Всі права захищені.",
      lightbox_prev: "‹",
      lightbox_next: "›",
    },
    de: {
      page_title_main: "Portfolio",
      nav_about: "Über mich",
      nav_services: "Dienstleistungen",
      nav_portfolio: "Arbeiten",
      nav_process: "Prozess",
      nav_contact: "Kontakt",
      hero_main_title: "TATTOOKIRILL YUVELIR",
      hero_subtitle: "Tattoo Deutschland",
      hero_description_short: "Ihr Meister für exklusive Tätowierungen.",
      hero_description:
        "Kirill ist Ihr Meister für exklusive Tätowierungen in Deutschland. Spezialisiert auf realistische, japanische, Chicano-, Ornament- und Mini-Tattoos. Ich erschaffe einzigartige Kunstwerke auf Ihrer Haut, die Ihre Individualität und Ihren Stil widerspiegeln. Meine Arbeit ist nicht nur das Auftragen von Tinte, sondern das Erzählen einer Geschichte, die für immer bei Ihnen bleibt. Hohe Qualität, Liebe zum Detail und Sterilität sind meine obersten Prioritäten.",
      about_title: "Über mich",
      services_title: "Dienstleistungen und Stile",
      service_realism_title: "Realismus",
      service_realism_desc:
        "Detaillierte Porträts, Tiere und Objekte, die wie Fotos auf Ihrer Haut aussehen.",
      service_japanese_title: "Japanischer Stil (Irezumi)",
      service_japanese_desc:
        "Traditionelle Motive: Drachen, Karpfen, Samurai, Blumen in leuchtenden, satten Farben.",
      service_chicano_title: "Chicano",
      service_chicano_desc:
        "Gangsterthemen, religiöse und kulturelle Symbole, meist in Schwarz-Weiß.",
      service_ornamental_title: "Ornamental",
      service_ornamental_desc:
        "Geometrische Muster, Mandalas, ethnische Motive, die einzigartige Designs schaffen.",
      service_mini_tattoo_title: "Mini-Tattoo",
      service_mini_tattoo_desc:
        "Kleine, saubere Tattoos mit tiefer Bedeutung oder einfach zur Dekoration.",
      portfolio_title: "Meine Arbeiten",
      process_title: "Prozess",
      process_consultation_title: "Beratung",
      process_consultation_desc:
        "Wir besprechen Ihre Ideen, Stil, Größe und Platzierung des zukünftigen Tattoos. Ihre Vision ist unsere Priorität.",
      process_design_title: "Designentwicklung",
      process_design_desc:
        "Wir erstellen eine einzigartige Skizze, die perfekt zu Ihnen passt, unter Berücksichtigung aller Wünsche und anatomischen Besonderheiten.",
      process_preparation_title: "Vorbereitung",
      process_preparation_desc:
        "Wir bereiten die Haut und den Arbeitsplatz vor und sorgen für vollständige Sterilität und Ihren Komfort.",
      process_tattooing_title: "Tätowierung",
      process_tattooing_desc:
        "Wir tätowieren sorgfältig und professionell und achten auf jedes Detail für ein perfektes Ergebnis.",
      process_aftercare_title: "Nachsorge",
      process_aftercare_desc:
        "Wir geben detaillierte Empfehlungen zur Pflege Ihres neuen Tattoos, damit es Sie viele Jahre erfreut.",
      contact_title: "Kontakt",
      contact_instagram_label: "Instagram",
      contact_telegram_label: "Telegram",
      footer_text: "© 2025. Alle Rechte vorbehalten.",
      lightbox_prev: "‹",
      lightbox_next: "›",
    },
  };

  function setLanguage(lang) {
    document.querySelectorAll("[data-lang-key]").forEach((el) => {
      const key = el.getAttribute("data-lang-key");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    document.title = translations[lang]?.page_title_main || document.title;
  }

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxPrev = document.querySelector(".lightbox-prev");
  const lightboxNext = document.querySelector(".lightbox-next");
  const galleryImages = document.querySelectorAll(".portfolio-gallery img");

  let currentIndex = 0;

  function showLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightbox.style.display = "block";
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      showLightbox(index);
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightboxPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
  });

  lightboxNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
  });

  // Share buttons with Web Share API
  const shareButtons = document.querySelectorAll(".share-btn");
  shareButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: document.title,
            url: window.location.href,
          });
        } catch (err) {
          alert("Ошибка при шаринге: " + err);
        }
      } else {
        alert("Шаринг не поддерживается в вашем браузере.");
      }
    });
  });
});
