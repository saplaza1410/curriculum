const TRANSLATIONS = {
  es: {
    // Navbar
    nav_about:      'Sobre mí',
    nav_experience: 'Experiencia',
    nav_skills:     'Habilidades',
    nav_portfolio:  'Portfolio',
    nav_contact:    'Contacto',

    // Hero
    hero_greeting: 'Hola, soy',
    hero_title:    'Full Stack Developer',
    hero_bio:      'Desarrollador Full Stack con <strong>5+ años de experiencia</strong> en PHP (Laravel, CakePHP), APIs REST, Docker y desarrollo móvil cross-platform con Ionic y React Native. Integro <strong>IA en el flujo de trabajo</strong> — Cursor, Claude Code y GitHub Copilot — para entregar soluciones más rápidas y de mayor calidad. Castellano nativo · Catalán · English.',
    hero_btn_projects: 'Ver proyectos',
    hero_btn_contact:  'Contactar',

    // About
    about_title: 'Sobre <span>mí</span>',
    about_bio:   'Desarrollador Full Stack con <strong>5+ años de experiencia</strong> en arquitecturas robustas con PHP (Laravel, CakePHP, Nativo), enfocado en soluciones escalables y alta eficiencia. Experto en diseño de <strong>APIs REST</strong>, integración de sistemas complejos, optimización de rendimiento en entornos cloud (<strong>AWS/Docker</strong>) y desarrollo de aplicaciones móviles cross-platform (<strong>Ionic, React Native</strong>). Aplico herramientas de <strong>Inteligencia Artificial</strong> — <strong>Cursor</strong>, <strong>Claude Code</strong> y <strong>GitHub Copilot</strong> — como parte del flujo de desarrollo diario para aumentar productividad, acelerar entregas y coordinar equipos de desarrollo de forma más eficiente.',
    about_location: 'Figueres, Girona, España',
    about_languages_title: 'Idiomas',
    lang_native: 'Nativo',
    lang_basic:  'Básico',

    // Experience
    exp_title: 'Mi <span>experiencia</span>',
    exp_avantiam_role: 'Desarrollador Web & Coordinador de Outsourcing',
    exp_avantiam_desc: 'Desarrollo y mantenimiento de webs con CakePHP. Coordinación del servicio de outsourcing que Avantiam ofrece a otras empresas: gestión de proyectos, comunicación con clientes y supervisión técnica, apoyado en herramientas de IA — Cursor, Claude Code y GitHub Copilot — para optimizar entregas y calidad del código.',
    exp_tiendapp_role: 'Desarrollador Web',
    exp_tiendapp_desc: 'Desarrollo y mantenimiento del core de la plataforma y las aplicaciones móviles de la empresa. Participación activa en la arquitectura de microservicios con Go, APIs REST con Laravel y apps cross-platform con Ionic y Angular. Colaboración directa con el equipo de producto para lanzar nuevas funcionalidades en entornos de alta demanda.',
    exp_critic_role: 'Desarrollador Web',
    exp_critic_desc: 'Evolución y mantenimiento del sistema core de la empresa, desarrollado en Laravel y PHP nativo. Refactorización de módulos críticos, optimización de consultas SQL y mejora del rendimiento general de la aplicación. Implementación de nuevas funcionalidades bajo metodología ágil con entregas continuas.',
    exp_parsonic_role: 'Desarrollador Web',
    exp_parsonic_desc: 'Desarrollo y mejora de la aplicación interna de gestión empresarial en Laravel y PHP nativo. Implementación de nuevos módulos, corrección de bugs y mantenimiento de la base de datos. Primer contacto con flujos de trabajo profesionales en equipo y buenas prácticas de desarrollo.',
    exp_strategee_role: 'Desarrollador Junior',
    exp_strategee_desc: 'Desarrollo de sitios web a medida para clientes externos, cubriendo tanto frontend como backend. Creación de interfaces con animaciones CSS/JS y lógica de negocio con CakePHP. Primera experiencia trabajando directamente con clientes y entregando proyectos completos de principio a fin.',

    // Skills
    skills_title: 'Mis <span>habilidades</span>',
    skills_ai_divider: 'IA & Herramientas',

    // Portfolio
    portfolio_title: 'Mi <span>portfolio</span>',
    portfolio_loading: 'Cargando proyectos...',
    portfolio_empty: 'No hay proyectos publicados aún.',
    portfolio_error: 'Error al cargar proyectos.',
    btn_github: 'GitHub',
    btn_live:   'Ver live',

    // Contact
    contact_title:    'Ponte en <span>contacto</span>',
    contact_subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
    contact_email_label:   'Email',
    contact_wa_label:      'WhatsApp',
    contact_li_label:      'LinkedIn',
    contact_gh_label:      'GitHub',

    // Footer
    footer_copy: '© 2025 Sergio Plaza. Hecho con 💜',

    // Scroll hint
    scroll_hint: 'Scroll',
  },

  ca: {
    nav_about:      'Sobre mi',
    nav_experience: 'Experiència',
    nav_skills:     'Habilitats',
    nav_portfolio:  'Portfolio',
    nav_contact:    'Contacte',

    hero_greeting: 'Hola, soc',
    hero_title:    'Full Stack Developer',
    hero_bio:      'Desenvolupador Full Stack amb <strong>5+ anys d\'experiència</strong> en PHP (Laravel, CakePHP), APIs REST, Docker i desenvolupament mòbil cross-platform amb Ionic i React Native. Integro <strong>IA al flux de treball</strong> — Cursor, Claude Code i GitHub Copilot — per lliurar solucions més ràpides i de major qualitat. Castellà natiu · Català · English.',
    hero_btn_projects: 'Veure projectes',
    hero_btn_contact:  'Contactar',

    about_title: 'Sobre <span>mi</span>',
    about_bio:   'Desenvolupador Full Stack amb <strong>5+ anys d\'experiència</strong> en arquitectures robustes amb PHP (Laravel, CakePHP, Natiu), enfocat en solucions escalables i alta eficiència. Expert en disseny d\'<strong>APIs REST</strong>, integració de sistemes complexos, optimització del rendiment en entorns cloud (<strong>AWS/Docker</strong>) i desenvolupament d\'aplicacions mòbils cross-platform (<strong>Ionic, React Native</strong>). Aplico eines d\'<strong>Intel·ligència Artificial</strong> — <strong>Cursor</strong>, <strong>Claude Code</strong> i <strong>GitHub Copilot</strong> — com a part del flux de desenvolupament diari per augmentar la productivitat, accelerar els lliuraments i coordinar equips de desenvolupament de forma més eficient.',
    about_location: 'Figueres, Girona, Espanya',
    about_languages_title: 'Idiomes',
    lang_native: 'Natiu',
    lang_basic:  'Bàsic',

    exp_title: 'La meva <span>experiència</span>',
    exp_avantiam_role: 'Desenvolupador Web & Coordinador d\'Outsourcing',
    exp_avantiam_desc: 'Desenvolupament i manteniment de webs amb CakePHP. Coordinació del servei d\'outsourcing que Avantiam ofereix a altres empreses: gestió de projectes, comunicació amb clients i supervisió tècnica, recolzat en eines d\'IA — Cursor, Claude Code i GitHub Copilot — per optimitzar els lliuraments i la qualitat del codi.',
    exp_tiendapp_role: 'Desenvolupador Web',
    exp_tiendapp_desc: 'Desenvolupament i manteniment del core de la plataforma i les aplicacions mòbils de l\'empresa. Participació activa en l\'arquitectura de microserveis amb Go, APIs REST amb Laravel i apps cross-platform amb Ionic i Angular. Col·laboració directa amb l\'equip de producte per llançar noves funcionalitats en entorns d\'alta demanda.',
    exp_critic_role: 'Desenvolupador Web',
    exp_critic_desc: 'Evolució i manteniment del sistema core de l\'empresa, desenvolupat en Laravel i PHP natiu. Refactorització de mòduls crítics, optimització de consultes SQL i millora del rendiment general de l\'aplicació. Implementació de noves funcionalitats sota metodologia àgil amb lliuraments continus.',
    exp_parsonic_role: 'Desenvolupador Web',
    exp_parsonic_desc: 'Desenvolupament i millora de l\'aplicació interna de gestió empresarial en Laravel i PHP natiu. Implementació de nous mòduls, correcció de bugs i manteniment de la base de dades. Primer contacte amb fluxos de treball professionals en equip i bones pràctiques de desenvolupament.',
    exp_strategee_role: 'Desenvolupador Junior',
    exp_strategee_desc: 'Desenvolupament de llocs web a mida per a clients externs, cobrint tant frontend com backend. Creació d\'interfícies amb animacions CSS/JS i lògica de negoci amb CakePHP. Primera experiència treballant directament amb clients i lliurant projectes complets de principi a fi.',

    skills_title: 'Les meves <span>habilitats</span>',
    skills_ai_divider: 'IA & Eines',

    portfolio_title: 'El meu <span>portfolio</span>',
    portfolio_loading: 'Carregant projectes...',
    portfolio_empty: 'No hi ha projectes publicats encara.',
    portfolio_error: 'Error en carregar els projectes.',
    btn_github: 'GitHub',
    btn_live:   'Veure live',

    contact_title:    'Posa\'t en <span>contacte</span>',
    contact_subtitle: 'Tens un projecte en ment? Parlem!',
    contact_email_label:   'Correu',
    contact_wa_label:      'WhatsApp',
    contact_li_label:      'LinkedIn',
    contact_gh_label:      'GitHub',

    footer_copy: '© 2025 Sergio Plaza. Fet amb 💜',
    scroll_hint: 'Desplaça',
  },

  en: {
    nav_about:      'About',
    nav_experience: 'Experience',
    nav_skills:     'Skills',
    nav_portfolio:  'Portfolio',
    nav_contact:    'Contact',

    hero_greeting: 'Hi, I\'m',
    hero_title:    'Full Stack Developer',
    hero_bio:      'Full Stack Developer with <strong>5+ years of experience</strong> in PHP (Laravel, CakePHP), REST APIs, Docker and cross-platform mobile development with Ionic and React Native. I integrate <strong>AI into my workflow</strong> — Cursor, Claude Code and GitHub Copilot — to deliver faster, higher-quality solutions. Native Spanish · Catalan · English.',
    hero_btn_projects: 'View projects',
    hero_btn_contact:  'Contact me',

    about_title: 'About <span>me</span>',
    about_bio:   'Full Stack Developer with <strong>5+ years of experience</strong> in robust PHP architectures (Laravel, CakePHP, Native), focused on scalable solutions and high efficiency. Expert in <strong>REST API</strong> design, complex system integration, performance optimization in cloud environments (<strong>AWS/Docker</strong>) and cross-platform mobile development (<strong>Ionic, React Native</strong>). I use <strong>Artificial Intelligence</strong> tools — <strong>Cursor</strong>, <strong>Claude Code</strong> and <strong>GitHub Copilot</strong> — as part of my daily development workflow to boost productivity, accelerate delivery and coordinate development teams more effectively.',
    about_location: 'Figueres, Girona, Spain',
    about_languages_title: 'Languages',
    lang_native: 'Native',
    lang_basic:  'Basic',

    exp_title: 'My <span>experience</span>',
    exp_avantiam_role: 'Web Developer & Outsourcing Coordinator',
    exp_avantiam_desc: 'Web development and maintenance with CakePHP. Coordination of the outsourcing service that Avantiam provides to other companies: project management, client communication and technical supervision, supported by AI tools — Cursor, Claude Code and GitHub Copilot — to optimise delivery and code quality.',
    exp_tiendapp_role: 'Web Developer',
    exp_tiendapp_desc: 'Development and maintenance of the company\'s platform core and mobile apps. Active involvement in microservices architecture with Go, REST APIs with Laravel and cross-platform apps with Ionic and Angular. Direct collaboration with the product team to ship new features in high-demand environments.',
    exp_critic_role: 'Web Developer',
    exp_critic_desc: 'Evolution and maintenance of the company\'s core system built with Laravel and native PHP. Refactoring of critical modules, SQL query optimisation and overall application performance improvement. Implementation of new features under agile methodology with continuous delivery.',
    exp_parsonic_role: 'Web Developer',
    exp_parsonic_desc: 'Development and improvement of the internal business management application in Laravel and native PHP. Implementation of new modules, bug fixing and database maintenance. First exposure to professional team workflows and development best practices.',
    exp_strategee_role: 'Junior Developer',
    exp_strategee_desc: 'Custom website development for external clients, covering both frontend and backend. Built interfaces with CSS/JS animations and business logic with CakePHP. First experience working directly with clients and delivering complete projects from start to finish.',

    skills_title: 'My <span>skills</span>',
    skills_ai_divider: 'AI & Tools',

    portfolio_title: 'My <span>portfolio</span>',
    portfolio_loading: 'Loading projects...',
    portfolio_empty: 'No published projects yet.',
    portfolio_error: 'Error loading projects.',
    btn_github: 'GitHub',
    btn_live:   'View live',

    contact_title:    'Get in <span>touch</span>',
    contact_subtitle: 'Got a project in mind? Let\'s talk!',
    contact_email_label:   'Email',
    contact_wa_label:      'WhatsApp',
    contact_li_label:      'LinkedIn',
    contact_gh_label:      'GitHub',

    footer_copy: '© 2025 Sergio Plaza. Made with 💜',
    scroll_hint: 'Scroll',
  }
};
