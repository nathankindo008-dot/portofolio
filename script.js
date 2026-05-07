(function () {
    'use strict';

    var STORAGE_KEY = 'portfolioLang';

    var STRINGS = {
        en: {
            'meta.title': "Nathan Kindo - Data Scientist & Statistical Analyst",
            'aria.menu_toggle': 'Toggle navigation menu',
            'aria.lang_switch': 'Language',
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.journey': 'Journey',
            'nav.projects': 'Projects',
            'nav.publications': 'Publications',
            'nav.contact': 'Contact',
            'hero.subtitle': 'Statistical Analyst Trainee | Junior Data Scientist',
            'hero.desc': "Third-year student at ENSEA Abidjan, passionate about data analysis and artificial intelligence. I turn data into actionable insights for informed decision-making.",
            'hero.cta_projects': 'View my projects',
            'hero.cta_contact': 'Contact me',
            'img.profile': 'Nathan Kindo — professional photo',
            'img.workspace': 'Nathan Kindo — workspace',
            'about.section': 'About Me',
            'about.who': 'Who am I?',
            'about.p1': "Statistical Analyst student at ENSEA Abidjan, I focus on the intersection of statistics, econometrics, and artificial intelligence. As President of the ENSEA Data Science Club, I lead students on applied, innovative projects.",
            'about.p2': 'My path has built strong skills in statistical modeling, machine learning, and AI application development — including an internship at the National Institute of Statistics and Demography of Burkina Faso.',
            'about.certs_title': 'Certifications',
            'about.datacamp_badge': 'DataCamp Scholarship — Data Engineer (in progress)',
            'about.click_cert': 'Click to view the certificate',
            'about.datacamp_list_label': 'DataCamp certificates earned:',
            'about.datacamp_list': 'Git, Communicating with APIs, Data cleaning, and more',
            'about.stat_projects': 'Projects completed',
            'about.stat_degree': 'Degree in progress',
            'about.stat_passion': 'Passion & commitment',
            'about.interests': 'Interests',
            'about.music': 'Music',
            'about.football': 'Football',
            'about.basketball': 'Basketball',
            'journey.title': 'My Journey',
            'journey.edu_title': 'Academic Background',
            'journey.exp_title': 'Professional Experience',
            'journey.skills_title': 'Technical Skills',
            'journey.soft_skills': 'Soft Skills',
            'edu1.title': 'Statistical Analyst (AS)',
            'edu1.sub': 'ENSEA Abidjan',
            'edu1.desc': 'Training in statistics, econometrics, data analysis, and Python/R programming',
            'edu1.date': '(validation in progress)',
            'edu2.title': 'Scientific Baccalaureate (Series C)',
            'edu2.sub': 'Horizon International School, Ouagadougou',
            'edu2.desc': 'Honors (Mention Bien)',
            'edu2.date': '2023',
            'exp1.title': 'Statistical analyst intern',
            'exp1.sub': 'CNAM (French National Health Insurance Fund)',
            'exp1.desc': 'Supporting data analysis and KPI production for activity monitoring.',
            'exp1.date': 'Since March 9, 2026',
            'exp2.title': 'President — Data Science Club',
            'exp2.sub': 'ENSEA Abidjan',
            'exp2.desc': 'Supervision and coordination of analysis projects; mentoring students',
            'exp2.date': 'Since August 2025',
            'exp3.title': 'Statistics intern',
            'exp3.sub': 'National Institute of Statistics and Demography, Burkina Faso',
            'exp3.desc': 'Small-area estimation methods in Python; report writing',
            'exp3.date': 'Aug 2025 – Sept 2025',
            'exp4.title': 'Communications lead',
            'exp4.sub': 'Division of Statistical Analysts, ENSEA',
            'exp4.desc': 'Visual design and social media management',
            'exp4.date': 'July 2024 – Aug 2025',
            'exp5.title': 'Communications lead',
            'exp5.sub': 'GBU ENSEA (university Bible group)',
            'exp5.desc': 'Communication and activities for the group',
            'exp5.date': 'July 2024 – July 2025',
            'exp6.title': 'Survey enumerator',
            'exp6.sub': 'Academic survey, ENSEA Abidjan',
            'exp6.desc': 'Household data collection',
            'exp6.date': 'April 2025',
            'soft.teamwork': 'Teamwork',
            'soft.leadership': 'Leadership',
            'soft.writing': 'Writing skills',
            'soft.design': 'Graphic design',
            'projects.section': 'Featured Projects',
            'badge.featured': 'Featured',
            'proj11.title': 'Price Comparator — Jumia CI',
            'proj11.desc': 'End-to-end production pipeline for multi-source price intelligence (Jumia CI, DjokStore CI, CoinAfrique CI): scraping, cleaning, PostgreSQL storage, REST API, orchestration with Airflow and Celery, Prometheus/Grafana monitoring, and CSV/Excel/JSON export.',
            'proj1.title': 'Smart Price Analysis — Jumia Côte d’Ivoire',
            'proj1.desc': 'End-to-end web scraping and price analysis for phones on Jumia. FastAPI to expose data and an intelligent chatbot for product and price-trend questions.',
            'proj2.title': 'Deep Learning — Breast Cancer Detection',
            'proj2.desc': 'Convolutional neural network (CNN) for early breast cancer detection from medical images, using advanced deep learning to improve diagnostic accuracy.',
            'proj3.title': 'COVID-19 Prediction — Medical Classification',
            'proj3.desc': 'Binary classification project (Machine Learnia) to predict COVID-19 status. Includes exploratory analysis, visualizations, statistical tests, ML models with metric evaluation, and hyperparameter tuning.',
            'proj3.tag_stat': 'Statistical Tests',
            'proj4.title': 'AFCON 2025 Prediction',
            'proj4.desc': 'ENSEA Data Science Club project to predict Africa Cup of Nations 2025 outcomes using ML on historical team performance, player stats, and predictive analytics.',
            'proj5.title': 'Conversational AI for Learning English',
            'proj5.desc': 'AI-powered English learning app with speech-to-text and text-to-speech. Interactive interface for natural conversations to improve language skills.',
            'proj6.title': 'Trade in Services Analysis — Sub-Saharan Africa',
            'proj6.desc': 'Academic project at ENSEA: compiling and processing macro data on services trade in sub-Saharan Africa, with in-depth statistics and trend visualization.',
            'proj7.title': 'Determinants of Côte d’Ivoire’s GDP',
            'proj7.desc': 'Econometric analysis of GDP drivers in R: advanced plots, stationarity and cointegration tests, and modeling macro relationships for growth factors.',
            'proj8.title': 'Small Area Estimation Methods',
            'proj8.desc': 'Internship at Burkina Faso’s National Institute of Statistics. Python implementation of advanced methods for small-area estimation and a full technical report.',
            'proj9.title': 'Task Management Application',
            'proj9.desc': 'Task management app in VBA for Excel: intuitive UI to create, organize, track tasks with priorities, due dates, and progress.',
            'proj10.title': 'Customer Management System',
            'proj10.desc': 'Full Python GUI app for customer operations, data visualization, scoring, and an ETL pipeline from Excel to SQLite — integrated CRM analytics.',
            'tag.econometrics': 'Econometrics',
            'tag.macroeconomics': 'Macroeconomics',
            'tag.prediction': 'Prediction',
            'tag.project_mgmt': 'Project management',
            'pub.section': 'Publications & Articles',
            'pub1.title': 'Machine Learning Algorithms for Finance',
            'pub1.tag_article': 'Article',
            'pub1.tag_writing': 'Writing',
            'img.article': 'Article — Machine Learning Algorithms for Finance',
            'contact.section': 'Get in touch',
            'contact.heading': "Let's work together",
            'contact.p': 'Open to opportunities in data science, collaborations on innovative projects, or conversations about data analysis and AI — feel free to reach out.',
            'contact.phone_label': 'Phone',
            'contact.location': 'Abidjan, Côte d’Ivoire',
            'footer.line': '© 2026 — Designed and developed by Nathan Kindo Pawentaore',
            'footer.sub': 'Statistical Analyst | Data Scientist | ENSEA Abidjan'
        },
        fr: {
            'meta.title': "Nathan Kindo - Data Scientist & Analyste Statisticien",
            'aria.menu_toggle': 'Afficher ou masquer le menu',
            'aria.lang_switch': 'Langue',
            'nav.home': 'Accueil',
            'nav.about': 'À propos',
            'nav.journey': 'Parcours',
            'nav.projects': 'Projets',
            'nav.publications': 'Publications',
            'nav.contact': 'Contact',
            'hero.subtitle': 'Elève Analyste Statisticien | Data Scientist Junior',
            'hero.desc': "Étudiant en 3ᵉ année à l'ENSEA d'Abidjan, passionné par l'analyse de données et l'intelligence artificielle. Je transforme les données en insights actionnables pour une prise de décision éclairée.",
            'hero.cta_projects': 'Découvrir mes projets',
            'hero.cta_contact': 'Me contacter',
            'img.profile': 'Nathan Kindo — Photo professionnelle',
            'img.workspace': 'Nathan Kindo — Espace de travail',
            'about.section': 'À Propos de Moi',
            'about.who': 'Qui suis-je ?',
            'about.p1': "Étudiant en Analyste Statisticien à l'ENSEA d'Abidjan, je suis passionné par l'intersection entre les statistiques, l'économétrie et l'intelligence artificielle. En tant que Président du Club de Data Science de l'ENSEA, j'encadre une équipe d'étudiants autour de projets appliqués et innovants.",
            'about.p2': "Mon parcours m'a permis de développer une expertise solide en modélisation statistique, machine learning et développement d'applications IA, notamment lors de mon stage à l'Institut National de la Statistique et de la Démographie du Burkina Faso.",
            'about.certs_title': 'Certifications',
            'about.datacamp_badge': 'Lauréat Bourse DataCamp - Data Engineer (en cours)',
            'about.click_cert': 'Cliquez pour voir le certificat',
            'about.datacamp_list_label': 'Certificats DataCamp obtenus :',
            'about.datacamp_list': 'Git, Communication avec les API, Nettoyage de données, et autres',
            'about.stat_projects': 'Projets réalisés',
            'about.stat_degree': 'Diplôme en cours',
            'about.stat_passion': 'Passion & Engagement',
            'about.interests': "Centres d'intérêt",
            'about.music': 'Musique',
            'about.football': 'Football',
            'about.basketball': 'Basketball',
            'journey.title': 'Mon Parcours',
            'journey.edu_title': 'Formation Académique',
            'journey.exp_title': 'Expérience Professionnelle',
            'journey.skills_title': 'Compétences Techniques',
            'journey.soft_skills': 'Soft Skills',
            'edu1.title': 'Analyste Statisticien (AS)',
            'edu1.sub': "ENSEA d'Abidjan",
            'edu1.desc': 'Formation en statistique, économétrie, data analysis et programmation Python/R',
            'edu1.date': '(en cours de validation)',
            'edu2.title': 'Baccalauréat Scientifique (Série C)',
            'edu2.sub': 'Complexe Scolaire Horizon International, Ouagadougou',
            'edu2.desc': 'Mention Bien',
            'edu2.date': '2023',
            'exp1.title': 'Stagiaire analyste statisticien',
            'exp1.sub': "CNAM (Caisse Nationale d'Assurance Maladie)",
            'exp1.desc': "Appui à l'analyse de données et à la production d'indicateurs pour le pilotage des activités.",
            'exp1.date': 'Depuis le 9 mars 2026',
            'exp2.title': 'Président - Club de Data Science',
            'exp2.sub': "ENSEA d'Abidjan",
            'exp2.desc': "Supervision et coordination des projets d'analyse, Encadrement d'étudiants",
            'exp2.date': 'Depuis Août 2025',
            'exp3.title': 'Stagiaire en Statistique',
            'exp3.sub': 'Institut National de la Statistique et de la Démographie, Burkina Faso',
            'exp3.desc': "Méthodes d'estimations des petits domaines sur Python, Rédaction de rapport",
            'exp3.date': 'Août 2025 – Septembre 2025',
            'exp4.title': 'Chargé à la Communication',
            'exp4.sub': 'Division des Analystes Statisticiens, ENSEA',
            'exp4.desc': 'Conception de supports visuels et gestion des réseaux sociaux',
            'exp4.date': 'Juillet 2024 – Août 2025',
            'exp5.title': 'Chargé à la Communication',
            'exp5.sub': "Groupe Biblique Universitaire de l'ENSEA",
            'exp5.desc': 'Gestion de la communication et des activités du groupe',
            'exp5.date': 'Juillet 2024 – Juillet 2025',
            'exp6.title': 'Agent Enquêteur',
            'exp6.sub': 'Enquête académique, ENSEA Abidjan',
            'exp6.desc': 'Collecte de données auprès des ménages',
            'exp6.date': 'Avril 2025',
            'soft.teamwork': 'Travail en équipe',
            'soft.leadership': 'Leadership',
            'soft.writing': 'Capacité rédactionnelle',
            'soft.design': 'Graphisme',
            'projects.section': 'Projets Réalisés',
            'badge.featured': 'À la une',
            'proj11.title': 'Comparateur de Prix — Jumia CI',
            'proj11.desc': "Pipeline de production complet pour l'intelligence des prix multi-sources (Jumia CI, DjokStore CI, CoinAfrique CI) : scraping, nettoyage, stockage PostgreSQL, API REST, orchestration Airflow + Celery, monitoring Prometheus/Grafana et export CSV/Excel/JSON.",
            'proj1.title': "Analyse Intelligente des Prix - Jumia Côte d'Ivoire",
            'proj1.desc': "Projet complet de web scraping et d'analyse des prix des téléphones sur Jumia. Développement d'une API avec FastAPI pour exposer les données et création d'un chatbot intelligent pour répondre aux questions sur les produits et tendances de prix.",
            'proj2.title': 'Modèle Deep Learning - Détection du Cancer du Sein',
            'proj2.desc': "Développement d'un réseau de neurones convolutifs (CNN) pour la détection précoce du cancer du sein à partir d'images médicales. Utilisation de techniques avancées de deep learning pour améliorer la précision du diagnostic.",
            'proj3.title': 'Prédiction COVID-19 - Classification Médicale',
            'proj3.desc': "Projet de classification binaire réalisé via Machine Learnia pour prédire si un patient est atteint du COVID-19 ou non. Le projet comprend une analyse exploratoire approfondie des données, des visualisations statistiques, des tests statistiques pour valider les hypothèses, le développement et l'entraînement de modèles de machine learning avec évaluation des métriques de performance, et l'optimisation des hyperparamètres pour améliorer la précision du modèle.",
            'proj3.tag_stat': 'Tests Statistiques',
            'proj4.title': 'Prédiction de la CAN 2025',
            'proj4.desc': "Projet collaboratif du Club de Data Science ENSEA visant à prédire les résultats de la Coupe d'Afrique des Nations 2025. Développement de modèles de machine learning basés sur les performances historiques des équipes, statistiques des joueurs et analyses prédictives pour estimer les probabilités de victoire et les parcours des équipes.",
            'proj5.title': "IA Conversationnelle pour Apprentissage d'Anglais",
            'proj5.desc': "Application d'apprentissage de l'anglais basée sur l'IA avec reconnaissance vocale (STT) et synthèse vocale (TTS). Interface interactive permettant des conversations naturelles pour améliorer les compétences linguistiques.",
            'proj6.title': 'Analyse du Commerce des Services en Afrique Subsaharienne',
            'proj6.desc': "Projet académique réalisé à l'ENSEA portant sur la compilation et le traitement de données macroéconomiques relatives au commerce des services en Afrique subsaharienne. Analyse statistique approfondie et visualisation des tendances.",
            'proj7.title': "Analyse des Déterminants du PIB de la Côte d'Ivoire",
            'proj7.desc': "Analyse économétrique approfondie des facteurs influençant le PIB de la Côte d'Ivoire. Réalisé avec le langage R, ce projet comprend des visualisations statistiques avancées, des tests statistiques (tests de stationnarité, cointégration, etc.) et la modélisation des relations entre variables macroéconomiques pour identifier les principaux déterminants de la croissance économique.",
            'proj8.title': "Méthodes d'Estimation des Petits Domaines",
            'proj8.desc': "Projet de stage à l'Institut National de la Statistique du Burkina Faso. Implémentation en Python de méthodes statistiques avancées pour l'estimation dans les petits domaines, avec rédaction d'un rapport technique complet.",
            'proj9.title': 'Application de Gestion des Tâches',
            'proj9.desc': "Développement d'une application de gestion des tâches avec VBA (Visual Basic for Applications) dans Excel. Interface utilisateur intuitive permettant de créer, organiser, suivre et gérer efficacement les tâches avec des fonctionnalités de priorisation, de dates d'échéance et de suivi de progression.",
            'proj10.title': 'Système de Gestion de Clients',
            'proj10.desc': "Application complète de gestion de clients développée en Python avec interface graphique. Le système permet de gérer toutes les opérations des clients, effectuer des visualisations de données, réaliser du scoring client, et inclut un processus ETL pour importer des données depuis des fichiers Excel vers une base de données SQLite. Solution intégrée pour la gestion et l'analyse de la relation client.",
            'tag.econometrics': 'Économétrie',
            'tag.macroeconomics': 'Macroéconomie',
            'tag.prediction': 'Prédiction',
            'tag.project_mgmt': 'Gestion de Projet',
            'pub.section': 'Publications & Articles',
            'pub1.title': 'Algorithmes de Machine Learning au Service de la Finance',
            'pub1.tag_article': 'Article',
            'pub1.tag_writing': 'Rédaction',
            'img.article': 'Article — Algorithmes de Machine Learning au Service de la Finance',
            'contact.section': 'Contactez-moi',
            'contact.heading': 'Travaillons ensemble',
            'contact.p': "Je suis ouvert à de nouvelles opportunités en Data Science, des collaborations sur des projets innovants, ou simplement échanger sur l'analyse de données et l'IA. N'hésitez pas à me contacter !",
            'contact.phone_label': 'Téléphone',
            'contact.location': "Abidjan, Côte d'Ivoire",
            'footer.line': '© 2026 — Conçu et développé par Nathan Kindo Pawentaore',
            'footer.sub': "Analyste Statisticien | Data Scientist | ENSEA d'Abidjan"
        }
    };

    function t(lang, key) {
        var table = STRINGS[lang];
        if (!table || table[key] === undefined) {
            return STRINGS.en[key] !== undefined ? STRINGS.en[key] : key;
        }
        return table[key];
    }

    function getStoredLang() {
        try {
            var v = localStorage.getItem(STORAGE_KEY);
            if (v === 'en' || v === 'fr') return v;
        } catch (e) { /* ignore */ }
        return 'en';
    }

    function setStoredLang(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) { /* ignore */ }
    }

    function applyLanguage(lang) {
        if (lang !== 'en' && lang !== 'fr') lang = 'en';

        document.documentElement.lang = lang;
        document.title = t(lang, 'meta.title');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (!key) return;
            var text = t(lang, key);
            if (el.tagName === 'TITLE') {
                el.textContent = text;
            } else {
                el.textContent = text;
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (!key) return;
            el.innerHTML = t(lang, key);
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            var spec = el.getAttribute('data-i18n-attr');
            if (!spec) return;
            spec.split(';').forEach(function (pair) {
                var parts = pair.split(':');
                if (parts.length >= 2) {
                    var attr = parts[0].trim();
                    var key = parts.slice(1).join(':').trim();
                    el.setAttribute(attr, t(lang, key));
                }
            });
        });

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            var isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('lang-btn--active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var lang = getStoredLang();
        applyLanguage(lang);

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var next = btn.getAttribute('data-lang');
                if (next !== 'en' && next !== 'fr') return;
                setStoredLang(next);
                applyLanguage(next);
            });
        });

        var mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        var navLinks = document.querySelector('.nav-links');

        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', function () {
                navLinks.classList.toggle('active');
                var icon = this.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });

            if (navLinks) {
                navLinks.querySelectorAll('a').forEach(function (link) {
                    link.addEventListener('click', function () {
                        navLinks.classList.remove('active');
                        var icon = mobileMenuToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    });
                });
            }
        }

        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var href = anchor.getAttribute('href');
                if (!href || href === '#') return;
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    });
})();
