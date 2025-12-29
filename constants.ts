import { ContentProvider, Language } from './types';

export const METADATA = {
  email: "islamsabirzyanov@gmail.com",
  phone: "+7 (927) 247-85-30",
  telegramBot: "https://t.me/bizvoz"
};

export const CONTENT_EN: ContentProvider = {
  nav: {
    title: "SYSTEM_DASHBOARD",
    items: ["METRICS", "STACK", "PROJECTS", "TIMELINE"]
  },
  hero: {
    status: "<System Online />",
    name: "ISLAM SABIRZYANOV",
    role: ["IT Project Manager", "Product Manager", "AI Integrator"],
    bio: "Turning chaos into structure. Managing complex Web/Mobile product development with AI & Fintech integration.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Download CV",
    resumeEN: "/Sabirzyanov_Islam_Resume_EN.pdf",
    resumeRU: "/Sabirzyanov_Islam_Resume_RU.pdf"
  },
  metrics: {
    title: "SYSTEM METRICS",
    exp: { val: "5+", label: "YEARS IN PROJECT MANAGEMENT" },
    budget: { val: "$50k+", label: "PROJECT BUDGETS" },
    integrations: { val: "15+", label: "API & HARDWARE INTEGRATIONS" },
    team: { title: "SQUAD LEAD", label: "Up to 9 Specialists" },
    scope: { val: "360°", label: "WEB • MOBILE • IOT • AI" }
  },
  skills: {
    title: "SKILLS MATRIX",
    mgmtTitle: "MANAGEMENT & METHODOLOGIES",
    softTitle: "SOFT SKILLS & LEADERSHIP",
    techTitle: "TECHNICAL ARSENAL",
    management: [
      { name: "Agile / Scrum / Kanban", level: 95 },
      { name: "Risk Management", level: 85 },
      { name: "Release Management", level: 90 },
      { name: "Stakeholder Mgmt", level: 92 },
      { name: "Unit Economics", level: 80 }
    ],
    soft: [
      "Negotiation", "Conflict Resolution", "Strategic Thinking", 
      "Cross-functional Leadership", "Adaptability", "Problem Solving"
    ],
    tech: [
      {
        category: "CORE & AI",
        items: ["Python", "LangGraph", "OpenAI API", "FastAPI"]
      },
      {
        category: "WEB & MOBILE",
        items: ["Flutter", "React", "React Native", "Django"]
      },
      {
        category: "FINTECH & INFRA",
        items: ["CloudPayments", "Faster Payments System (SBP)", "PostgreSQL", "Docker", "Git"]
      }
    ]
  },
  projects: {
    title: "FEATURED PROJECTS",
    closeText: "CLOSE PROJECT FILE",
    items: [
      {
        id: "yastvo",
        title: "Yastvo",
        subtitle: "AI Nutrition App",
        description: "A revolutionary nutrition tracking app built from scratch. Features a multi-agent architecture on LangGraph for complex reasoning and real-time food recognition via photos.",
        role: "IT Project Manager / Release Manager",
        team: "6 Specialists",
        tags: ["Flutter", "Python", "FastAPI", "PostgreSQL", "LangGraph", "GPT-4 API", "Docker", "CI/CD"],
        achievements: [
            "Led full-cycle cross-platform development (iOS/Android) from concept to release in 6 months with a 5M+ RUB budget.",
            "Architected a multi-agent AI system on LangGraph for automatic calorie counting with real-time food recognition via GPT-4 API.",
            "Implemented Freemium monetization with 6 subscription tiers and 5 payment gateways (Apple IAP, Google Play, RuStore, Robokassa).",
            "Orchestrated simultaneous release in 3 stores (App Store, Google Play, RuStore): prepared marketing assets and ensured platform compliance.",
            "Coordinated a cross-functional team of 6: set up Agile processes, resolved critical blockers (iPhone camera API incompatibilities, App Store moderation)."
        ],
        imageType: "mobile",
        stats: ["3 Store Release", "6 Sub Types", "5 Payment Gateways"],
      },
      {
        id: "911",
        title: "911",
        subtitle: "Auto Services Marketplace",
        description: "A comprehensive ecosystem comprising 3 platforms (Admin Panel + Client App + Master App). Implements dynamic pricing algorithms and geolocation-based order distribution using OSRM.",
        role: "IT Project Manager",
        team: "5 Developers",
        tags: ["Django/DRF", "React", "React Native", "Flutter", "PostgreSQL", "FCM", "CloudPayments", "Tinkoff", "OSRM"],
        achievements: [
            "Launched product from scratch to Production: Ecosystem of 3 platforms (Web Admin + 2 Mobile Apps), 60+ screens, 30+ DB tables.",
            "Managed a roadmap of 120+ tasks prioritized by MoSCoW; decomposed specs into technical stories.",
            "Designed DB architecture and created API documentation (Swagger, 60+ endpoints).",
            "Implemented dynamic pricing, geolocation-based order distribution (OSRM), and a dual-balance finance system.",
            "Processed 4000+ orders since launch with 0 critical incidents in production."
        ],
        imageType: "system",
        stats: ["4000+ Orders", "0 Incidents", "120+ Tasks"],
      },
      {
        id: "infomatika",
        title: "Infomatika",
        subtitle: "Fintech Integrations",
        description: "High-level integration of Faster Payments System (SBP) and Installment Service 'Podeli' payment services within the infrastructure of Europe's largest theme park 'Dream Island'. Custom software development for physical turnstiles and payment terminals.",
        role: "Project Manager (Fintech)",
        team: "Up to 9 Specialists",
        tags: ["Fintech", "IoT", "Hardware", "Security", "PHP", "Vue.js", "API Integration"],
        achievements: [
            "Integrated Installment Service 'Podeli' and Faster Payments System (SBP) at Europe's largest theme park 'Dream Island' across Website, Cash Desks, and 15+ Self-service Terminals.",
            "Developed software for turnstiles (ACS) implementing Faster Payments System (SBP) payments via Russian Standard Bank API (QR generation, status processing).",
            "Led integration of Vendotek terminals for a boat rental service in UAE, enhancing service quality.",
            "Implemented an Advance Certificate system with complex balance logic for ticket aggregation (PHP, Vue.js)."
        ],
        imageType: "abstract",
        stats: ["Physical Integration", "High Traffic", "Secure Payments"],
      }
    ]
  },
  experience: {
    title: "EXPERIENCE TIMELINE",
    items: [
      {
        id: "mediann",
        company: "mediann.dev",
        role: "IT Project Manager / Release Manager",
        period: "April 2025 – Present",
        active: true,
        desc: "Leading full-cycle development of complex AI and marketplace products.",
        projects: [
          {
            title: "Yastvo - AI Nutrition App",
            role: "Project Manager",
            tech: "Flutter, Python, LangGraph, GPT-4",
            achievements: [
              "Led full-cycle development (iOS/Android) in 6 months.",
              "Architected multi-agent AI system for real-time food recognition.",
              "Implemented freemium monetization with 6 tiers & 5 payment gateways.",
              "Orchestrated simultaneous release in App Store, Google Play, RuStore."
            ]
          },
          {
            title: "911 - Auto Marketplace",
            role: "Project Manager",
            tech: "Django, React, Flutter, OSRM",
            achievements: [
              "Launched ecosystem of 3 platforms (Admin + 2 Mobile Apps).",
              "Managed roadmap of 120+ tasks; 0 critical incidents in production.",
              "Implemented dynamic pricing & geo-location order distribution."
            ]
          },
          {
            title: "SMMRockets - SaaS Platform",
            role: "Product Manager",
            tech: "Next.js, Python, Telegram Bot API",
            achievements: [
              "Launched MVP in 3 months; managed 80+ user stories.",
              "Delivered 60+ pages with bilingual content & SEO strategy."
            ]
          },
          {
            title: "Beautiful Hair Institute",
            role: "Project Manager",
            tech: "FastAPI, React, Postgres, TG Bot",
            achievements: [
              "Launched fully functional clinic website with CMS in 2 months (20+ screens).",
              "Implemented automated request processing via Telegram Bot.",
              "Ensured 100% SEO compliance and secure data handling."
            ]
          }
        ]
      },
      {
        id: "infomatika",
        company: "Infomatika LLC",
        role: "Project Manager (Fintech)",
        period: "Nov 2023 – Mar 2025",
        desc: "Coordinated cross-functional teams (up to 9) for payment integrations.",
        projects: [
          {
            title: "Installment Service 'Podeli' & Faster Payments System (SBP) Integration",
            role: "Project Manager",
            tech: "Hardware, API Integration",
            achievements: [
              "Integrated payments at Europe's largest theme park 'Dream Island': Website, Cash Desks, and 15+ Self-service Terminals.",
              "Developed secure integration algorithms & fraud prevention."
            ]
          },
          {
            title: "Faster Payments System (SBP) on Turnstiles (ACS)",
            role: "Project Manager",
            tech: "IoT, Russian Standard Bank API",
            achievements: [
              "Pilot project for Access Control Systems at sports arenas.",
              "Implemented QR generation and status processing on physical devices."
            ]
          },
          {
            title: "Boat Rental Terminal (UAE)",
            role: "Project Manager",
            tech: "Vendotek, UI/UX",
            achievements: [
              "Led integration of Vendotek terminals for a boat rental service in UAE.",
              "Designed interfaces and enhanced overall service quality."
            ]
          },
          {
            title: "Advance Certificates",
            role: "Project Manager",
            tech: "PHP, Vue.js, SQL",
            achievements: [
              "Implemented certificate sales via cash desks and website.",
              "Developed balance system for event ticket aggregator."
            ]
          },
          {
            title: "Faster Payments System (SBP) on HC 'Lokomotiv' Website",
            role: "Project Manager",
            tech: "SBER API, UX/UI",
            achievements: [
               "Integrated SBER API for payments.",
               "Developed UX/UI, resulting in increased ticket purchase conversion."
            ]
          }
        ]
      },
      {
        id: "prom",
        company: "PromBudushchee LLC",
        role: "Project Manager",
        period: "Jun 2022 – Oct 2023",
        achievements: [
          "Supported and controlled uninterrupted operation of 30,000 terminals (negotiations with operators).",
          "GIS for Republic of Tatarstan: Managed data collection & visualization (NextGIS).",
          "TuganPay (ApplePay alternative): Released mobile app for terminals (Flutter)."
        ]
      },
      {
        id: "isa",
        company: "ISA TECHNOLOGY LTD",
        role: "IT Project Manager",
        period: "May 2021 – May 2022",
        achievements: [
          "Managed crypto product development & blockchain security.",
          "Coordinated international exchange listing & compliance."
        ]
      },
      {
        id: "alabuga",
        company: "SEZ Alabuga JSC",
        role: "Deputy Project Manager",
        period: "Jun 2020 – May 2021",
        achievements: [
          "Led IT projects from planning to documentation.",
          "Market analysis & budget estimation."
        ]
      }
    ]
  },
  extra: {
    pet: {
      title: "PET PROJECT: VPN Service Bot",
      desc: "Developed a proprietary VPN service manager using Python & SQL. Automated user handling and key generation with secure data transmission.",
      btn: "OPEN TELEGRAM BOT"
    },
    edu: {
      title: "EDUCATION (2016-2026)",
      uni: "Kazan Federal University",
      degree: "Applied Mathematics and Computer Science",
      period: "In progress"
    },
    hobbies: {
      sports: "Sports",
      martial: "Martial Arts"
    }
  },
  footer: {
    title: { start: "Ready to launch your", highlight: "next big project?" },
    location: "Kazan, Russia",
    relocate: "READY TO RELOCATE",
    copy: ""
  }
};

export const CONTENT_RU: ContentProvider = {
  nav: {
    title: "SYSTEM_DASHBOARD",
    items: ["МЕТРИКИ", "НАВЫКИ", "ПРОЕКТЫ", "ОПЫТ"]
  },
  hero: {
    status: "<System Online />",
    name: "ИСЛАМ САБИРЗЯНОВ",
    role: ["IT Project Manager", "Product Manager", "AI Интегратор"],
    bio: "Превращаю хаос в структуру. Управляю разработкой сложных Web/Mobile продуктов с интеграцией AI и Fintech.",
    ctaPrimary: "Смотреть проекты",
    ctaSecondary: "Скачать CV",
    resumeEN: "/Sabirzyanov_Islam_Resume_EN.pdf",
    resumeRU: "/Sabirzyanov_Islam_Resume_RU.pdf"
  },
  metrics: {
    title: "СИСТЕМНЫЕ МЕТРИКИ",
    exp: { val: "5+", label: "ЛЕТ В ПРОЕКТНОМ МЕНЕДЖМЕНТЕ" },
    budget: { val: "5М₽+", label: "БЮДЖЕТЫ ПРОЕКТОВ" },
    integrations: { val: "15+", label: "ИНТЕГРАЦИЙ (API & HARDWARE)" },
    team: { title: "TEAM LEAD", label: "До 9 специалистов" },
    scope: { val: "360°", label: "WEB • MOBILE • IOT • AI" }
  },
  skills: {
    title: "МАТРИЦА НАВЫКОВ",
    mgmtTitle: "УПРАВЛЕНИЕ И МЕТОДОЛОГИИ",
    softTitle: "SOFT SKILLS & ЛИДЕРСТВО",
    techTitle: "ТЕХНИЧЕСКИЙ АРСЕНАЛ",
    management: [
      { name: "Agile / Scrum / Kanban", level: 95 },
      { name: "Управление рисками", level: 85 },
      { name: "Управление релизами", level: 90 },
      { name: "Управление стейкхолдерами", level: 92 },
      { name: "Unit-экономика", level: 80 }
    ],
    soft: [
      "Переговоры", "Решение конфликтов", "Стратегическое мышление", 
      "Лидерство", "Адаптивность", "Решение проблем"
    ],
    tech: [
      {
        category: "CORE & AI",
        items: ["Python", "LangGraph", "OpenAI API", "FastAPI"]
      },
      {
        category: "WEB & MOBILE",
        items: ["Flutter", "React", "React Native", "Django"]
      },
      {
        category: "FINTECH & INFRA",
        items: ["CloudPayments", "Сервис Быстрых Платежей (СБП)", "PostgreSQL", "Docker", "Git"]
      }
    ]
  },
  projects: {
    title: "ИЗБРАННЫЕ ПРОЕКТЫ",
    closeText: "ЗАКРЫТЬ ПРОЕКТ",
    items: [
      {
        id: "yastvo",
        title: "Yastvo",
        subtitle: "AI Трекер питания",
        description: "Революционное приложение для трекинга питания. Разработано с нуля.",
        role: "IT Project Manager / Release Manager",
        team: "6 человек",
        tags: ["Flutter", "Python", "FastAPI", "PostgreSQL", "LangGraph", "GPT-4 API", "Docker", "CI/CD"],
        achievements: [
            "Руководил full-cycle разработкой кроссплатформенного мобильного приложения (iOS/Android) от концепции до релиза за 6 месяцев с бюджетом 5+ млн руб.",
            "Спроектировал multi-agent AI архитектуру на LangGraph для автоматического подсчета калорий с интеграцией GPT 4 API для распознавания блюд по фото в реальном времени.",
            "Реализовал freemium монетизацию с 6 типами подписок и интеграцией 5 платежных систем для разных регионов (Apple IAP, Google Play, RuStore, Robokassa).",
            "Организовал одновременный релиз в 3 магазина (App Store, Google Play, RuStore): подготовил маркетинговые материалы, обеспечил compliance с требованиями платформ.",
            "Координировал кросс-функциональную команду из 6 человек: организовал Agile-процессы (спринты, планирование, ретроспективы), устранил критические блокеры (camera API несовместимость iPhone, прохождение модерации App Store)."
        ],
        imageType: "mobile",
        stats: ["Релиз в 3 стора", "6 типов подписок", "5 Платежных систем"],
      },
      {
        id: "911",
        title: "911",
        subtitle: "Маркетплейс автоуслуг",
        description: "Комплексная экосистема из 3 платформ (Админ-панель + Приложение Клиента + Приложение Мастера).",
        role: "IT Project Manager",
        team: "5 разработчиков",
        tags: ["Django/DRF", "React", "React Native", "Flutter", "PostgreSQL", "FCM", "CloudPayments", "Tinkoff", "OSRM"],
        achievements: [
            "Вывел продукт с нуля до Production: экосистема из 3 платформ (web-админка + 2 мобильных приложения iOS/Android), реализовано 60+ экранов, 30+ таблиц БД.",
            "Управлял roadmap из 120+ задач с приоритизацией по MoSCoW, декомпозировал ТЗ в technical stories.",
            "Спроектировал архитектуру БД и создал API-документацию (Swagger, 60+ endpoints).",
            "Реализовал динамическое ценообразование, геолокационное распределение заказов с push-уведомлениями (FCM), двухбалансовую финансовую систему с интеграцией CloudPayments/Tinkoff.",
            "Платформа обработала 4000+ заказов с момента запуска, 0 критических инцидентов в production после релиза."
        ],
        imageType: "system",
        stats: ["4000+ заказов", "0 инцидентов", "120+ задач"],
      },
      {
        id: "infomatika",
        title: "Инфоматика",
        subtitle: "Fintech Интеграции",
        description: "Глубокая интеграция платежных сервисов СБП и 'Подели' в инфраструктуру крупнейшего парка развлечений в Европе «Остров Мечты».",
        role: "Project Manager (Fintech)",
        team: "До 9 человек",
        tags: ["Fintech", "IoT", "Hardware", "Security", "PHP", "Vue.js", "API Integration"],
        achievements: [
            "Интеграция платежных систем «Сервис рассрочки «Подели»» и «Сервис Быстрых Платежей» (СБП) в крупнейший парк развлечений в Европе «Остров Мечты»: Команда 9 чел. Разработал алгоритм интеграции, модифицировал БД, реализовал обработку статусов оплаты.",
            "Сервис Быстрых Платежей (СБП) на турникетах: Команда 5 чел. Интеграция API Русский Стандарт, доработка ПО турникетов (генерация QR, обработка статусов).",
            "Терминал для аренды лодок (ОАЭ): Команда 5 чел. Интеграция терминала Vendotek, дизайн интерфейсов. Результат: повышение качества обслуживания.",
            "Авансовые сертификаты: Команда 8 чел. Структурные изменения БД, механика продажи на сайте (PHP, Vue.js). Результат: новый метод оплаты, рост лояльности."
        ],
        imageType: "abstract",
        stats: ["Физическая интеграция", "High Traffic", "Безопасные платежи"],
      }
    ]
  },
  experience: {
    title: "ХРОНОЛОГИЯ ОПЫТА",
    items: [
      {
        id: "mediann",
        company: "mediann.dev",
        role: "IT Project Manager / Release Manager",
        period: "Апрель 2025 – По наст. время",
        active: true,
        desc: "Управление полным циклом разработки AI-продуктов и маркетплейсов.",
        projects: [
          {
            title: "Yastvo - AI Nutrition App",
            role: "Project Manager",
            tech: "Flutter, Python, LangGraph, GPT-4",
            achievements: [
              "Руководил full-cycle разработкой (iOS/Android) за 6 месяцев.",
              "Спроектировал AI-архитектуру для распознавания еды.",
              "Внедрил Freemium (6 подписок, 5 платежных систем).",
              "Организовал релиз в App Store, Google Play, RuStore."
            ]
          },
          {
            title: "911 - Auto Marketplace",
            role: "Project Manager",
            tech: "Django, React, Flutter, OSRM",
            achievements: [
              "Запустил экосистему из 3 платформ с нуля.",
              "0 критических багов в проде, roadmap из 120+ задач.",
              "Динамическое ценообразование и гео-распределение."
            ]
          },
          {
            title: "SMMRockets - SaaS платформа",
            role: "Product Manager",
            tech: "Next.js, Python, Telegram Bot",
            achievements: [
              "Запустил MVP за 3 месяца, управлял бэклогом 80+ историй.",
              "Реализовал 60+ страниц с контентом на 2 языках и SEO."
            ]
          },
          {
            title: "Институт Красивых Волос",
            role: "Project Manager",
            tech: "FastAPI, React, Postgres, TG Bot",
            achievements: [
              "Запустил сайт клиники с CMS с нуля за 2 месяца (20+ экранов).",
              "Внедрил авто-обработку заявок через Telegram Bot.",
              "Обеспечил 100% соответствие SEO стандартам."
            ]
          }
        ]
      },
      {
        id: "infomatika",
        company: "ООО «Инфоматика»",
        role: "Project Manager (Fintech)",
        period: "Ноябрь 2023 – Март 2025",
        desc: "Координация команд до 9 человек, интеграция платежных решений.",
        projects: [
          {
            title: "Интеграция «Подели» и СБП",
            role: "Project Manager",
            tech: "Hardware, API Integration",
            achievements: [
              "Интеграция в крупнейшем парке развлечений в Европе «Остров Мечты»: сайт, кассы и более 15 терминалов самообслуживания.",
              "Разработка алгоритмов защиты от фрода."
            ]
          },
          {
            title: "СБП на турникетах (СКУД)",
            role: "Project Manager",
            tech: "IoT, API Русский Стандарт",
            achievements: [
              "Разработка пилотного проекта СКУД для спортивных арен.",
              "Генерация QR-кодов и обработка статусов на устройствах."
            ]
          },
          {
            title: "Терминал для аренды лодок (ОАЭ)",
            role: "Project Manager",
            tech: "Vendotek, UI/UX",
            achievements: [
               "Интеграция терминала Vendotek, дизайн интерфейсов.",
               "Повышение качества обслуживания."
            ]
          },
          {
            title: "Авансовые сертификаты",
            role: "Project Manager",
            tech: "PHP, Vue.js, SQL",
            achievements: [
              "Реализованы сертификаты с продажей в кассах и на сайте с балансом для агрегатора билетов.",
              "Внедрена система баланса."
            ]
          },
          {
             title: "СБП на сайте ХК «Локомотив»",
             role: "Project Manager",
             tech: "SBER API, UX/UI",
             achievements: [
               "Интеграция СБЕР API для оплаты.",
               "Разработка UX/UI, увеличение конверсии при покупке билетов."
             ]
          }
        ]
      },
      {
        id: "prom",
        company: "ООО «ПромБудущее»",
        role: "Руководитель проектов",
        period: "Июнь 2022 – Октябрь 2023",
        achievements: [
          "Поддержка и контроль бесперебойной работы 30 000 терминалов (переговоры с операторами связи).",
          "ГИС Татарстана: Сбор и визуализация данных (NextGIS).",
          "TuganPay (аналог ApplePay): Релиз приложения для терминалов (Flutter)."
        ]
      },
      {
        id: "isa",
        company: "ISA TECHNOLOGY LTD",
        role: "Руководитель IT проектов",
        period: "Май 2021 – Май 2022",
        achievements: [
          "Управление разработкой крипто-продуктов и токеномикой.",
          "Листинг на международной бирже, compliance."
        ]
      },
      {
        id: "alabuga",
        company: "АО ОЭЗ ППТ «Алабуга»",
        role: "Заместитель руководителя проектов",
        period: "Июнь 2020 – Май 2021",
        achievements: [
          "Ведение IT-проектов от планирования до документации.",
          "Анализ рынка, оценка бюджетов."
        ]
      }
    ]
  },
  extra: {
    pet: {
      title: "PET PROJECT: VPN Service Bot",
      desc: "Разработал собственный VPN-сервис на Python/SQL. Автоматизация выдачи ключей и безопасная передача данных.",
      btn: "ОТКРЫТЬ TELEGRAM БОТА"
    },
    edu: {
      title: "ОБРАЗОВАНИЕ (2016-2026)",
      uni: "Казанский (Приволжский) федеральный университет",
      degree: "Прикладная математика и информатика",
      period: "В процессе"
    },
    hobbies: {
      sports: "Спорт",
      martial: "Боевые искусства"
    }
  },
  footer: {
    title: { start: "Готовы запустить", highlight: "ваш следующий проект?" },
    location: "Казань, Россия",
    relocate: "ГОТОВ К ПЕРЕЕЗДУ",
    copy: ""
  }
};

export { }; 

export const GET_CONTENT = (lang: Language): ContentProvider => {
  return lang === Language.EN ? CONTENT_EN : CONTENT_RU;
};