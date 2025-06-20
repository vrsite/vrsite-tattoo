document.addEventListener('DOMContentLoaded', () => {
  // Гамбургер меню
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.main-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
  });

  // Кнопка прокрутки вниз
  const scrollDownBtn = document.querySelector('.scroll-down-btn');
  scrollDownBtn.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Кнопка прокрутки вверх
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
    // Добавьте остальные языки по аналогии, если нужно
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

  // Lightbox
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

  // Share button
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
