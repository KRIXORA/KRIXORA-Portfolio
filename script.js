/* =========================================================
   KRISH PARMAR — PORTFOLIO SCRIPT
   Production-ready frontend logic
   ========================================================= */

(() => {
    "use strict";

    /* =========================================================
       01. CENTRALIZED CONFIGURATION
       ========================================================= */

    const PROFILE = {
        name: "Krish Parmar",
        brand: "Krish",
        role: "Creative Developer",

        email: "krixora404@gmail.com",

        github: "https://github.com/KRIXORA",

        /*
         * Add real URLs here when available.
         * Empty values will not be rendered.
         *
         * whatsapp: use a full wa.me link, e.g.
         * "https://wa.me/15551234567" (country code, no
         * spaces, dashes, or leading +/00).
         */
        linkedin: "https://www.linkedin.com/in/krish-parmar-b90457400",

        /*
         * instagram: no account exists yet — keep this empty.
         * The icon stays visible everywhere but disabled (see
         * configureOptionalSocial's keepVisibleWhenEmpty option
         * below) instead of being removed, since the plan is to
         * add a real profile later. Fill this in and the icon
         * becomes a normal working link automatically.
         */
        instagram: "",
        whatsapp: "https://wa.me/7224044931",

        /*
         * Path to the real resume PDF. Resume buttons switch
         * from "Request Resume" to "Resume" automatically and
         * link straight here — see the resume-button wiring
         * further down. Clear this to fall back to "Request
         * Resume" (linking to #contact) if the PDF is ever
         * removed.
         */
        resume: "assets/resume/Krish-Parmar-Resume.pdf",

        /*
         * Birth date, used only to compute a live "Age" value
         * in the contact section (see calculateAge/renderAge
         * below). Month is 0-indexed (2 = March), so this reads
         * as March 12, 2007 — the age display then advances on
         * its own every year on that date and never needs to be
         * hand-edited.
         */
        birthDate: new Date(2007, 2, 12)
    };


    const SOCIAL_LINKS = {
        github: PROFILE.github,
        linkedin: PROFILE.linkedin,
        instagram: PROFILE.instagram,
        whatsapp: PROFILE.whatsapp
    };


    /* =========================================================
       02. REAL / CONFIGURED STATS
       ========================================================= */

    /*
     * Do not fabricate numbers.
     *
     * Empty values intentionally display a safe label.
     * Add exact values only when verified.
     */
    const STATS = {
        projects: {
            value: "3",
            fallback: "Projects"
        },

        technologies: {
            value: "16",
            fallback: "Technologies"
        },

        learning: {
            value: "Active",
            fallback: "Learning & Building"
        },

        opensource: {
            value: "",
            fallback: "Open Source"
        }
    };


    /* =========================================================
       03. SKILLS DATA
       ========================================================= */

    /*
     * Only put technologies here that are genuinely applicable.
     *
     * "learning" is intentionally separated from actual skills.
     */
    const skillsData = {

        frontend: [
            {
                name: "HTML5",
                icon: "code-2",
                description: "Semantic and accessible web structure.",
                level: "Core"
            },
            {
                name: "CSS3",
                icon: "palette",
                description: "Responsive layouts, animations and visual systems.",
                level: "Core"
            },
            {
                name: "JavaScript",
                icon: "braces",
                description: "Interactive experiences, logic and dynamic interfaces.",
                level: "Core"
            },
            {
                name: "Tailwind CSS",
                icon: "layout-grid",
                description: "Self-taught beyond the course, for faster and cleaner styling.",
                level: "Styling"
            },
            {
                name: "CSS Animations & Transitions",
                icon: "sparkles",
                description: "Hover effects, box/text shadows, and motion that makes interfaces feel alive.",
                level: "Core"
            },
            {
                name: "Responsive Design",
                icon: "smartphone",
                description: "Mobile-first layouts — built and tested from a phone from day one.",
                level: "Core"
            }
        ],

        languages: [
            {
                name: "HTML",
                icon: "file-code-2",
                description: "Semantic structure for modern web experiences.",
                level: "Markup"
            },
            {
                name: "CSS",
                icon: "brush",
                description: "Layouts, responsive systems and visual presentation.",
                level: "Styling"
            },
            {
                name: "JavaScript",
                icon: "braces",
                description: "Logic, interactions and dynamic web functionality.",
                level: "Programming"
            },
            {
                name: "Python",
                icon: "terminal",
                description: "Completed a 5-day Python programming workshop with Skilledu.",
                level: "In Progress"
            }
        ],

        tools: [
            {
                name: "Git",
                icon: "git-branch",
                description: "Currently learning proper version control workflows.",
                level: "Exploring"
            },
            {
                name: "GitHub",
                icon: "github",
                description: "Repository hosting and deploying projects as KRIXORA — my personal brand.",
                level: "Deployment"
            },
            {
                name: "Vercel",
                icon: "triangle",
                description: "Deploy and publish live web projects.",
                level: "Deployment"
            },
            {
                name: "Spck Editor",
                icon: "code",
                description: "Primary code editor — built entire projects from a phone.",
                level: "Development"
            },
            {
                name: "Glitch",
                icon: "flame",
                description: "Online editor used to build and structure the first multi-page project.",
                level: "Development"
            },
            {
                name: "AI Tools (ChatGPT)",
                icon: "sparkles",
                description: "Used for debugging help, research, and even naming the KRIXORA brand.",
                level: "Exploring"
            }
        ],

        learning: [
            {
                name: "Python",
                icon: "terminal",
                description: "Completed a 5-day Python workshop with Skilledu — now building on those fundamentals.",
                level: "In Progress"
            },
            {
                name: "Git & GitHub Workflows",
                icon: "git-branch",
                description: "Learning proper version control and collaboration practices.",
                level: "Exploring"
            },
            {
                name: "AI Prompt Engineering",
                icon: "brain-circuit",
                description: "Working through a certification in AI prompt engineering.",
                level: "In Progress"
            },
            {
                name: "Production-Level AI Tools",
                icon: "sparkles",
                description: "Learning to use AI tools inside real, production-ready workflows.",
                level: "Exploring"
            },
            {
                name: "Developer Roadmap",
                icon: "rocket",
                description: "Following a step-by-step path — Code.org, core CS fundamentals, and beyond.",
                level: "Exploring"
            }
        ]
    };


    /* =========================================================
       04. JOURNEY DATA
       ========================================================= */

    const journeyData = [
        {
            year: "11th Standard",
            title: "Where it all started",
            description:
                "CodeYogi's team visited school, teaching free web development through a Telegram bot — step-by-step videos, quizzes, and level-based assignments. Wrote my first line of code, <h1>Hi I'm Krish</h1>, on a phone since I didn't have a laptop."
        },
        {
            year: "11th – College Transition",
            title: "Going beyond the course",
            description:
                "While classmates stuck to the course, I explored further on YouTube — Tailwind CSS, animations, hover effects, box/text shadows. Helped other students debug their code in the community group, which is where problem-solving really clicked."
        },
        {
            year: "12th Standard",
            title: "First real project",
            description:
                "Selected at the district level to build a real project — \"Free Professional Course Finder,\" a multi-page site built on the Glitch editor. Learned how to structure and connect multiple pages, and received a certificate from school and district teachers."
        },
        {
            year: "July 2026",
            title: "A name for the work",
            description:
                "While deploying projects on GitHub, my real name wasn't available as a username. With ChatGPT's help, I landed on KRIXORA — close to my name, unique, and it stuck as my personal brand."
        },
        {
            year: "Now",
            title: "Still building. Still evolving.",
            description:
                "Balancing 2nd semester B.Tech CSE exams with building Flowora, Cashora, Coursora, and this portfolio — while going deeper into Code.org courses and AI prompt engineering."
        },
        {
            year: "What's Next",
            title: "The roadmap ahead",
            description:
                "Strengthening HTML, CSS and JavaScript, then Python, Git/GitHub, and production-level AI tools — following a step-by-step developer roadmap toward building polished, production-grade work."
        }
    ];


    /* =========================================================
       05. TOOLBOX DATA
       ========================================================= */

    const toolboxData = [
        {
            name: "HTML5",
            icon: "code-2",
            description: "Semantic web structure"
        },
        {
            name: "CSS3",
            icon: "palette",
            description: "Responsive visual systems"
        },
        {
            name: "JavaScript",
            icon: "braces",
            description: "Frontend interactions"
        },
        {
            name: "GitHub",
            icon: "github",
            description: "Code and projects"
        },
        {
            name: "Spck Editor",
            icon: "code",
            description: "Primary code editor, on phone"
        },
        {
            name: "Vercel",
            icon: "triangle",
            description: "Project deployment"
        }
    ];


    /* =========================================================
       06b. CERTIFICATIONS DATA
       ========================================================= */

    const certificationsData = [
        {
            name: "Web Development (HTML, CSS & JavaScript)",
            issuer: "CodeYogi",
            date: "December 2024",
            note: "Hands-on practical course — performance rated Excellent.",
            icon: "award"
        },
        {
            name: "Hour of Code & Hour of AI Series",
            issuer: "Code.org",
            date: "2024 – 2025",
            note: "10 completed certificates across CS Fundamentals, AI for Oceans, Music Lab and more.",
            icon: "graduation-cap"
        },
        {
            name: "5-Day Python Programming Workshop",
            issuer: "Skilledu × Alpine Institute of Technology",
            date: "July 2026",
            note: "Hands-on workshop covering Python programming fundamentals.",
            icon: "terminal"
        }
    ];


    /* =========================================================
       06c. CERTIFICATE SLIDER DATA (actual scanned certificates)
       ========================================================= */

    const certificateSlidesData = [
        {
            src: "assets/images/certificates/codeyogi-web-development.webp",
            alt: "CodeYogi certificate — Web Development (HTML, CSS & JavaScript), rated Excellent, December 2024"
        },
        {
            src: "assets/images/certificates/codeorg-career-journeys.webp",
            alt: "Code.org certificate — Career Journeys for Elementary"
        },
        {
            src: "assets/images/certificates/codeorg-course-c.webp",
            alt: "Code.org certificate — Course C"
        },
        {
            src: "assets/images/certificates/codeorg-course-d.webp",
            alt: "Code.org certificate — Course D"
        },
        {
            src: "assets/images/certificates/codeorg-pre-reader-express-2024.webp",
            alt: "Code.org certificate — Pre-reader Express 2024"
        },
        {
            src: "assets/images/certificates/codeorg-pre-express-2025.webp",
            alt: "Code.org certificate — Pre Express 2025"
        },
        {
            src: "assets/images/certificates/codeyogi-hour-of-ai.webp",
            alt: "Code.org × CodeYogi certificate — Hour of AI Basics Activity"
        },
        {
            src: "assets/images/certificates/codeorg-hour-of-ai.webp",
            alt: "Code.org certificate — The Hour of A.I."
        },
        {
            src: "assets/images/certificates/codeorg-mix-move-ai.webp",
            alt: "Code.org certificate — Mix & Move with AI, Hour of AI"
        },
        {
            src: "assets/images/certificates/codeorg-ai-for-oceans.webp",
            alt: "Code.org certificate — AI for Oceans, Hour of Code"
        },
        {
            src: "assets/images/certificates/codeorg-music-lab.webp",
            alt: "Code.org certificate — Music Lab: Jam Session, Hour of Code"
        },
        {
            src: "assets/images/certificates/skilledu-python-workshop.webp",
            alt: "Skilledu certificate — 5-Day Python Programming Workshop with Alpine Institute of Technology, July 2026"
        }
    ];


    /* =========================================================
       06. PROJECT DATA
       ========================================================= */

    const projectsData = {
        flowora: {
            name: "Flowora",
            label: "Featured Project",
            description:
                "Productivity & life planner — tasks, habits, goals, and focus in one offline-first PWA, with an AI coach for momentum.",
            url: "https://flowora-ai.vercel.app",
            github: "https://github.com/KRIXORA/Flowora",
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "PWA"
            ],
            features: [
                "Task Management",
                "Habit Tracking",
                "Goals & Review",
                "Focus Sessions",
                "AI Coach",
                "Offline-first",
                "Installable PWA"
            ],
            caseStudy: {
                problem:
                    "Tasks, habits, and planning were split across three apps. Nothing adapted to how I actually work — just more rigid lists.",
                approach:
                    "Built from a phone in Spck Editor, module by module: tasks → habits → focus. Each piece was tested on real days before the next.",
                result:
                    "An installable offline-first PWA: one calm workspace instead of three noisy tools.",
                learnings:
                    "PWA + offline state without a framework. Shipping a focused system beat overbuilding an unfinished one."
            }
        },

        cashora: {
            name: "Cashora",
            label: "Featured Project",
            description:
                "Personal finance dashboard — income, spending, budgets, goals, and net worth. Private by design. Installable PWA.",
            url: "https://cashora-os.vercel.app",
            github: "https://github.com/KRIXORA/Cashora",
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "PWA"
            ],
            features: [
                "Income & Expense Tracking",
                "Budgets & Goals",
                "Net Worth Tracking",
                "Spending Insights",
                "Private by Design",
                "Installable PWA"
            ],
            caseStudy: {
                problem:
                    "Spreadsheets weren't sticking. I needed a visual way to see income, spending, and goals without the chore feeling.",
                approach:
                    "Dashboard first, then budgets and goals, then net worth. Private by design — calm UI so it stays usable daily.",
                result:
                    "A private, installable finance PWA with tracking that actually gets opened.",
                learnings:
                    "Separate data from UI early. Finance tools force clearer models for transactions and long-term tracking."
            }
        },

        coursora: {
            name: "Coursora",
            label: "Featured Project",
            description:
                "Course discovery — 125+ free and paid courses from Udemy, Coursera, edX and more, in one installable PWA.",
            url: "https://coursora-os.vercel.app",
            github: "https://github.com/KRIXORA/Coursora",
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "PWA"
            ],
            features: [
                "125+ Courses",
                "Free & Paid Filters",
                "Multi-platform Discovery",
                "Installable PWA",
                "Focused Search UI"
            ],
            caseStudy: {
                problem:
                    "Finding solid free and paid courses meant jumping across cluttered sites. I wanted one fast, low-noise place to browse.",
                approach:
                    "Tight scope: search, filters, clean catalog — not a full LMS. Shipped as an installable PWA.",
                result:
                    "125+ courses in one installable app, without the directory bloat.",
                learnings:
                    "Clear filters beat a bloated catalog. Responsive UI + PWA install flow paid off in polish."
            }
        }
    };


    /* =========================================================
       07. DOM CACHE
       ========================================================= */

    const DOM = {
        body: document.body,
        header: document.getElementById("site-header"),

        menuToggle: document.getElementById("menuToggle"),
        mobileMenu: document.getElementById("mobile-menu"),

        themeToggle: document.getElementById("themeToggle"),

        contactForm: document.getElementById("contactForm"),
        formStatus: document.getElementById("formStatus"),

        journeyTimeline: document.getElementById("journeyTimeline"),
        toolboxGrid: document.getElementById("toolboxGrid"),
        certificationsGrid: document.getElementById("certificationsGrid"),
        certSliderTrack: document.getElementById("certSliderTrack"),
        certSliderPrev: document.getElementById("certSliderPrev"),
        certSliderNext: document.getElementById("certSliderNext"),
        certSliderDots: document.getElementById("certSliderDots"),

        currentYear: document.getElementById("currentYear"),

        projectModal: document.getElementById("projectModal"),
        modalClose: document.getElementById("modalClose"),
        modalBody: document.getElementById("projectModalBody"),
        modalTitle: document.getElementById("projectModalTitle"),

        scrollProgress: document.querySelector(".scroll-progress"),
        scrollTopFab: document.getElementById("scrollTopFab"),

        heroSection: document.getElementById("home"),
        heroContent: document.querySelector(".hero-content"),
        heroVisual: document.querySelector(".hero-visual"),

        journeySection: document.getElementById("journey"),

        ctaSection: document.getElementById("ctaSection"),
        ctaCard: document.getElementById("ctaCard"),
        ctaVisualInner: document.getElementById("ctaVisualInner"),
        ctaButton: document.querySelector("#ctaSection .btn-primary")
    };


    /* =========================================================
       08. STATE
       ========================================================= */

    const state = {
        menuOpen: false,
        modalOpen: false,
        previousFocus: null,
        formSubmitting: false,
        currentTheme: "dark"
    };


    /* =========================================================
       09. UTILITY FUNCTIONS
       ========================================================= */

    const prefersReducedMotion = () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;


    const safeExternalLink = (url) => {
        if (!url) {
            return "";
        }

        return url.trim();
    };


    const escapeHTML = (value) => {
        const div = document.createElement("div");
        div.textContent = String(value ?? "");
        return div.innerHTML;
    };


    const debounce = (callback, delay = 100) => {
        let timeoutId;

        return (...args) => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    };


    const isFocusable = (element) => {
        if (!element) {
            return false;
        }

        const style = window.getComputedStyle(element);

        return (
            !element.disabled &&
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            element.offsetParent !== null
        );
    };


    const getFocusableElements = (container) => {
        if (!container) {
            return [];
        }

        return [
            ...container.querySelectorAll(
                [
                    "a[href]",
                    "button:not([disabled])",
                    "input:not([disabled])",
                    "textarea:not([disabled])",
                    "select:not([disabled])",
                    "[tabindex]:not([tabindex='-1'])"
                ].join(",")
            )
        ].filter(isFocusable);
    };


    /* =========================================================
       10. LUCIDE ICONS
       ========================================================= */

    /*
     * GitHub is NOT a Lucide icon (removed from Lucide's set —
     * see the index.html comment on the hero/footer GitHub links).
     * Any data-driven icon list that references "github" must
     * render this inline brand SVG instead of a data-lucide tag,
     * or Lucide logs a "not found" warning and renders nothing.
     */
    const GITHUB_ICON_SVG = `<svg class="icon icon-github" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.5.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" /></svg>`;

    const renderIconMarkup = (iconName) =>
        iconName === "github"
            ? GITHUB_ICON_SVG
            : `<i data-lucide="${escapeHTML(iconName)}"></i>`;

    const refreshIcons = () => {
        if (
            window.lucide &&
            typeof window.lucide.createIcons === "function"
        ) {
            window.lucide.createIcons();
        }
    };


    /*
     * Swaps an icon button's data-lucide value with a brief
     * rotate + fade transition instead of an instant snap.
     * Used for the theme toggle (moon ⇄ sun) and the mobile
     * menu toggle (menu ⇄ x).
     *
     * The .is-swapping class (see .icon-btn.is-swapping svg in
     * style.css) drives an animation whose midpoint is fully
     * transparent — the actual data-lucide swap + refreshIcons()
     * call happens exactly at that midpoint, so Lucide replacing
     * the <svg> node under the hood is never visible.
     */
    const swapIconWithTransition = (button, newIconName) => {

        const icon =
            button?.querySelector("[data-lucide]");

        if (!icon) {
            return;
        }

        if (prefersReducedMotion()) {
            icon.setAttribute("data-lucide", newIconName);
            refreshIcons();
            return;
        }

        const ANIMATION_MS = 380;

        button.classList.add("is-swapping");

        window.setTimeout(() => {

            const currentIcon =
                button.querySelector("[data-lucide]");

            if (currentIcon) {
                currentIcon.setAttribute(
                    "data-lucide",
                    newIconName
                );

                refreshIcons();
            }

        }, ANIMATION_MS / 2);

        window.setTimeout(() => {
            button.classList.remove("is-swapping");
        }, ANIMATION_MS);
    };


    /* =========================================================
       11. PROFILE / SOCIAL LINKS
       ========================================================= */

    const configureProfileLinks = () => {

        /*
         * GitHub links.
         * Matches any github.com anchor so this keeps working
         * even if the placeholder href in the HTML changes —
         * PROFILE.github stays the single source of truth.
         */
        document
            .querySelectorAll(
                'a[href^="https://github.com/"]'
            )
            .forEach((link) => {
                link.href = PROFILE.github;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            });


        /*
         * Resume buttons
         */
        document
            .querySelectorAll("[data-resume-link]")
            .forEach((link) => {

                if (PROFILE.resume) {
                    link.href = PROFILE.resume;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";

                    link.textContent = "Resume";
                } else {
                    link.href = "#contact";
                    link.textContent = "Request Resume";
                }
            });


        /*
         * Email
         * Multiple email links exist across the page (hero socials,
         * contact card, footer socials) — querySelectorAll so all of
         * them get wired up, not just the first match.
         */
        const emailLinks =
            document.querySelectorAll("[data-email-link]");

        const emailTexts =
            document.querySelectorAll("[data-email-text]");

        if (PROFILE.email) {

            emailLinks.forEach((link) => {
                link.href = `mailto:${PROFILE.email}`;
                link.hidden = false;
            });

            emailTexts.forEach((text) => {
                text.textContent = PROFILE.email;
            });

        } else {

            emailLinks.forEach((link) => {
                link.hidden = true;
            });
        }


        /*
         * Optional social links.
         */
        configureOptionalSocial(
            "linkedin",
            SOCIAL_LINKS.linkedin,
            "LinkedIn"
        );

        configureOptionalSocial(
            "instagram",
            SOCIAL_LINKS.instagram,
            "Instagram",
            { keepVisibleWhenEmpty: true }
        );

        configureOptionalSocial(
            "whatsapp",
            SOCIAL_LINKS.whatsapp,
            "WhatsApp"
        );
    };


    const configureOptionalSocial = (
        platform,
        url,
        label,
        { keepVisibleWhenEmpty = false } = {}
    ) => {

        const elements = document.querySelectorAll(
            `[data-social="${platform}"]`
        );

        elements.forEach((element) => {

            if (!url) {

                if (!keepVisibleWhenEmpty) {
                    element.remove();
                    return;
                }

                /*
                 * Keep the icon visible but inert — no href
                 * means it's not a real link (won't navigate,
                 * won't be tab-focusable), plus a visual
                 * "coming soon" treatment (see .is-coming-soon
                 * in style.css) so it doesn't look broken.
                 */
                element.removeAttribute("href");

                element.classList.add(
                    "is-coming-soon"
                );

                element.setAttribute(
                    "aria-label",
                    `${label} — coming soon`
                );

                element.hidden = false;

                return;
            }

            element.href = url;
            element.target = "_blank";
            element.rel = "noopener noreferrer";

            element.classList.remove(
                "is-coming-soon"
            );

            /*
             * The contact-card version of this link starts
             * hidden in markup and only has an icon + label —
             * reveal it and fill in its handle text once a
             * real URL is configured. The hero/footer version
             * already has a static aria-label and isn't hidden,
             * so these are no-ops for it.
             */
            element.hidden = false;

            if (!element.hasAttribute("aria-label")) {
                element.setAttribute(
                    "aria-label",
                    `Open ${label} profile`
                );
            }
        });


        document
            .querySelectorAll(
                `[data-social-text="${platform}"]`
            )
            .forEach((textElement) => {
                textElement.textContent = url
                    ? url.replace(/^https?:\/\//, "").replace(/\/$/, "")
                    : (keepVisibleWhenEmpty ? "Coming soon" : "");
            });
    };


    /* =========================================================
       12. STATS
       ========================================================= */

    const renderStats = () => {

        Object.entries(STATS).forEach(
            ([key, config]) => {

                const element =
                    document.querySelector(
                        `[data-stat="${key}"]`
                    );

                if (!element) {
                    return;
                }

                if (config.value) {
                    // Numeric values start at 0 and count up
                    // when the card is revealed (see initStatCountUp).
                    const numeric = Number(config.value);

                    if (
                        !Number.isNaN(numeric) &&
                        config.value.trim() !== "" &&
                        String(numeric) === String(config.value).trim()
                    ) {
                        element.textContent = "0";
                        element.dataset.countTarget = config.value;
                    } else {
                        element.textContent = config.value;
                    }
                } else {
                    element.textContent =
                        config.fallback;
                }
            }
        );
    };


    const animateCountUp = (el, target, duration = 1100) => {

        const end = Number(target);

        if (Number.isNaN(end)) {
            el.textContent = target;
            return;
        }

        if (prefersReducedMotion()) {
            el.textContent = String(end);
            return;
        }

        const start = 0;
        const startTime = performance.now();

        const tick = (now) => {

            const progress = Math.min(
                (now - startTime) / duration,
                1
            );

            // Ease-out cubic
            const eased =
                1 - Math.pow(1 - progress, 3);

            el.textContent = String(
                Math.round(start + (end - start) * eased)
            );

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = String(end);
            }
        };

        requestAnimationFrame(tick);
    };


    const initStatCountUp = () => {

        const cards = document.querySelectorAll(
            ".stat-card [data-count-target]"
        );

        if (!cards.length) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            cards.forEach((el) => {
                animateCountUp(
                    el,
                    el.dataset.countTarget
                );
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const el = entry.target;
                    const target = el.dataset.countTarget;

                    if (target && !el.dataset.counted) {
                        el.dataset.counted = "1";
                        animateCountUp(el, target);
                    }

                    observer.unobserve(el);
                });
            },
            {
                threshold: 0.4
            }
        );

        cards.forEach((el) => observer.observe(el));
    };


    const initProcessRail = () => {

        const rail = document.querySelector(
            ".process-steps"
        );

        if (!rail || !("IntersectionObserver" in window)) {
            if (rail) {
                rail.classList.add("is-active");
            }
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        rail.classList.add("is-active");
                        observer.unobserve(rail);
                    }
                });
            },
            {
                threshold: 0.35
            }
        );

        observer.observe(rail);
    };


    /* =========================================================
       13. JOURNEY
       ========================================================= */

    const renderJourney = () => {

        if (!DOM.journeyTimeline) {
            return;
        }

        DOM.journeyTimeline.replaceChildren();

        journeyData.forEach(
            (item, index) => {

                const article =
                    document.createElement("article");

                article.className = "timeline-item";

                article.dataset.index = index;

                article.setAttribute("data-reveal", "");

                article.innerHTML = `
                    <div class="timeline-marker" aria-hidden="true">
                        <span></span>
                    </div>

                    <div class="timeline-content">

                        <span class="timeline-year" data-reveal>
                            ${escapeHTML(item.year)}
                        </span>

                        <h3 class="timeline-title" data-reveal>
                            ${escapeHTML(item.title)}
                        </h3>

                        <p class="timeline-description" data-reveal>
                            ${escapeHTML(item.description)}
                        </p>

                    </div>
                `;

                DOM.journeyTimeline.appendChild(article);
            }
        );
    };


    /* =========================================================
       14. TOOLBOX
       ========================================================= */

    const renderToolbox = () => {

        if (!DOM.toolboxGrid) {
            return;
        }

        DOM.toolboxGrid.replaceChildren();

        toolboxData.forEach((tool) => {

            const card =
                document.createElement("article");

            card.className = "tool-card";

            card.setAttribute("data-reveal", "");

            card.innerHTML = `
                <div class="tool-icon" aria-hidden="true">
                    ${renderIconMarkup(tool.icon)}
                </div>

                <div class="tool-content">

                    <h3>
                        ${escapeHTML(tool.name)}
                    </h3>

                    <p>
                        ${escapeHTML(tool.description)}
                    </p>

                </div>
            `;

            DOM.toolboxGrid.appendChild(card);
        });

        refreshIcons();
    };


    const renderCertifications = () => {

        if (!DOM.certificationsGrid) {
            return;
        }

        DOM.certificationsGrid.replaceChildren();

        certificationsData.forEach((cert) => {

            const card =
                document.createElement("article");

            card.className = "cert-card";

            card.setAttribute("data-reveal", "");

            card.innerHTML = `
                <div class="cert-icon" aria-hidden="true">
                    ${renderIconMarkup(cert.icon)}
                </div>

                <div class="cert-content">

                    <h3>
                        ${escapeHTML(cert.name)}
                    </h3>

                    <span class="cert-issuer">
                        ${escapeHTML(cert.issuer)}
                        &middot;
                        ${escapeHTML(cert.date)}
                    </span>

                    <p>
                        ${escapeHTML(cert.note)}
                    </p>

                </div>
            `;

            DOM.certificationsGrid.appendChild(card);
        });

        refreshIcons();
    };


    /* =========================================================
       14b. CERTIFICATE SLIDER
       ========================================================= */

    let certSliderIndex = 0;

    const goToCertSlide = (index) => {

        if (!DOM.certSliderTrack) {
            return;
        }

        const total = certificateSlidesData.length;

        certSliderIndex =
            ((index % total) + total) % total;

        DOM.certSliderTrack.style.transform =
            `translateX(-${certSliderIndex * 100}%)`;

        DOM.certSliderDots
            ?.querySelectorAll(".cert-slider-dot")
            .forEach((dot, i) => {

                dot.classList.toggle(
                    "is-active",
                    i === certSliderIndex
                );

                dot.setAttribute(
                    "aria-selected",
                    i === certSliderIndex ? "true" : "false"
                );
            });
    };


    const initCertSlider = () => {

        if (
            !DOM.certSliderTrack ||
            !certificateSlidesData.length
        ) {
            return;
        }

        DOM.certSliderTrack.replaceChildren();

        if (DOM.certSliderDots) {
            DOM.certSliderDots.replaceChildren();
        }

        certificateSlidesData.forEach((slide, index) => {

            const slideEl =
                document.createElement("div");

            slideEl.className = "cert-slide";

            const img = document.createElement("img");
            img.src = slide.src;
            img.alt = slide.alt;
            img.loading = "lazy";
            img.draggable = false;

            slideEl.appendChild(img);

            DOM.certSliderTrack.appendChild(slideEl);

            if (DOM.certSliderDots) {

                const dot =
                    document.createElement("button");

                dot.type = "button";
                dot.className = "cert-slider-dot";
                dot.setAttribute("role", "tab");
                dot.setAttribute(
                    "aria-label",
                    `Go to certificate ${index + 1}`
                );

                dot.addEventListener("click", () => {
                    goToCertSlide(index);
                });

                DOM.certSliderDots.appendChild(dot);
            }
        });

        DOM.certSliderPrev?.addEventListener("click", () => {
            goToCertSlide(certSliderIndex - 1);
        });

        DOM.certSliderNext?.addEventListener("click", () => {
            goToCertSlide(certSliderIndex + 1);
        });

        /* Touch / drag swipe support */
        let dragStartX = null;

        const viewport =
            DOM.certSliderTrack.parentElement;

        viewport?.addEventListener(
            "touchstart",
            (e) => {
                dragStartX = e.touches[0].clientX;
            },
            { passive: true }
        );

        viewport?.addEventListener(
            "touchend",
            (e) => {

                if (dragStartX === null) {
                    return;
                }

                const deltaX =
                    e.changedTouches[0].clientX - dragStartX;

                if (Math.abs(deltaX) > 40) {
                    goToCertSlide(
                        certSliderIndex + (deltaX < 0 ? 1 : -1)
                    );
                }

                dragStartX = null;
            },
            { passive: true }
        );

        /*
         * Autoplay — advances one slide every few seconds.
         * Pauses on hover/focus/touch so the person can read a
         * certificate without it slipping away mid-look, and
         * resumes once they step away.
         */

        const AUTOPLAY_DELAY_MS = 4500;

        let autoplayTimer = null;

        const stopAutoplay = () => {

            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        };

        const startAutoplay = () => {

            stopAutoplay();

            if (prefersReducedMotion()) {
                return;
            }

            autoplayTimer = setInterval(() => {
                goToCertSlide(certSliderIndex + 1);
            }, AUTOPLAY_DELAY_MS);
        };

        const sliderRoot =
            DOM.certSliderTrack.closest(".cert-slider");

        [
            "mouseenter",
            "focusin",
            "touchstart"
        ].forEach((evt) => {
            sliderRoot?.addEventListener(
                evt,
                stopAutoplay,
                { passive: true }
            );
        });

        [
            "mouseleave",
            "focusout",
            "touchend"
        ].forEach((evt) => {
            sliderRoot?.addEventListener(
                evt,
                startAutoplay,
                { passive: true }
            );
        });

        goToCertSlide(0);

        startAutoplay();
    };


    /* =========================================================
       15. SKILLS
       ========================================================= */

    const renderSkills = () => {

        Object.entries(skillsData).forEach(
            ([category, skills]) => {

                const panel =
                    document.querySelector(
                        `[data-skill-panel="${category}"]`
                    );

                if (!panel) {
                    return;
                }

                const grid =
                    panel.querySelector(".skills-grid");

                if (!grid) {
                    return;
                }

                grid.replaceChildren();

                if (!skills.length) {

                    const empty =
                        document.createElement("div");

                    empty.className =
                        "skills-empty";

                    empty.textContent =
                        "Nothing added here yet.";

                    grid.appendChild(empty);

                    return;
                }


                skills.forEach((skill) => {

                    const card =
                        document.createElement("article");

                    card.className = "skill-card";

                    card.setAttribute("data-reveal", "");

                    card.innerHTML = `
                        <div
                            class="skill-icon"
                            aria-hidden="true"
                        >
                            ${renderIconMarkup(skill.icon)}
                        </div>

                        <div class="skill-content">

                            <div class="skill-heading">

                                <h3>
                                    ${escapeHTML(skill.name)}
                                </h3>

                                <span class="skill-level">
                                    ${escapeHTML(skill.level)}
                                </span>

                            </div>

                            <p>
                                ${escapeHTML(skill.description)}
                            </p>

                        </div>
                    `;

                    grid.appendChild(card);
                });
            }
        );

        refreshIcons();
    };


    /* =========================================================
       16. SKILL TAB SYSTEM
       ========================================================= */

    const initSkillTabs = () => {

        const tabs = [
            ...document.querySelectorAll(
                "[data-skill-tab]"
            )
        ];

        const panels = [
            ...document.querySelectorAll(
                "[data-skill-panel]"
            )
        ];

        if (!tabs.length || !panels.length) {
            return;
        }


        const activateTab = (
            category,
            { instantReveal = true } = {}
        ) => {

            tabs.forEach((tab) => {

                const active =
                    tab.dataset.skillTab === category;

                tab.classList.toggle(
                    "active",
                    active
                );

                tab.setAttribute(
                    "aria-selected",
                    String(active)
                );

                tab.tabIndex =
                    active ? 0 : -1;
            });


            panels.forEach((panel) => {

                const active =
                    panel.dataset.skillPanel === category;

                panel.classList.toggle(
                    "active",
                    active
                );

                panel.hidden = !active;

                /*
                 * Skill cards inside hidden tab panels never
                 * intersect the viewport, so the scroll-reveal
                 * observer (see initScrollReveal) can't reach
                 * them. Reveal a panel's cards immediately when
                 * the user switches to it — this is a deliberate
                 * click, not a scroll moment, so an instant
                 * reveal (rather than a scroll-tied fade) is the
                 * right behavior here.
                 *
                 * instantReveal is false only for the initial
                 * "frontend" activation at setup time, so the
                 * default tab's cards still get their normal
                 * scroll-triggered entrance the first time the
                 * page loads.
                 */
                if (active && instantReveal) {
                    panel
                        .querySelectorAll("[data-reveal]")
                        .forEach((card) => {
                            card.classList.add("is-revealed");
                        });
                }
            });
        };


        tabs.forEach((tab, index) => {

            tab.addEventListener(
                "click",
                () => {
                    activateTab(
                        tab.dataset.skillTab
                    );
                }
            );


            tab.addEventListener(
                "keydown",
                (event) => {

                    let nextIndex = null;

                    if (event.key === "ArrowRight") {
                        nextIndex =
                            (index + 1) %
                            tabs.length;
                    }

                    if (event.key === "ArrowLeft") {
                        nextIndex =
                            (index - 1 + tabs.length) %
                            tabs.length;
                    }

                    if (event.key === "Home") {
                        nextIndex = 0;
                    }

                    if (event.key === "End") {
                        nextIndex =
                            tabs.length - 1;
                    }

                    if (nextIndex === null) {
                        return;
                    }

                    event.preventDefault();

                    const nextTab =
                        tabs[nextIndex];

                    activateTab(
                        nextTab.dataset.skillTab
                    );

                    nextTab.focus();
                }
            );
        });


        activateTab(
            "frontend",
            { instantReveal: false }
        );
    };


    /* =========================================================
       17. MOBILE NAVIGATION
       ========================================================= */

    const setMenuState = (open) => {

        if (
            !DOM.menuToggle ||
            !DOM.mobileMenu
        ) {
            return;
        }

        state.menuOpen = open;

        DOM.menuToggle.setAttribute(
            "aria-expanded",
            String(open)
        );

        DOM.menuToggle.setAttribute(
            "aria-label",
            open
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        swapIconWithTransition(
            DOM.menuToggle,
            open ? "x" : "menu"
        );

        DOM.mobileMenu.setAttribute(
            "aria-hidden",
            String(!open)
        );

        DOM.mobileMenu.classList.toggle(
            "is-open",
            open
        );

        DOM.body.classList.toggle(
            "menu-open",
            open
        );


        if (open) {

            const firstLink =
                DOM.mobileMenu.querySelector(
                    "a"
                );

            window.setTimeout(() => {
                firstLink?.focus();
            }, prefersReducedMotion() ? 0 : 150);

        } else {

            DOM.menuToggle.focus();
        }
    };


    const initMobileMenu = () => {

        if (!DOM.menuToggle) {
            return;
        }

        DOM.menuToggle.addEventListener(
            "click",
            () => {
                setMenuState(
                    !state.menuOpen
                );
            }
        );


        document
            .querySelectorAll(
                ".mobile-nav-link"
            )
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {
                        setMenuState(false);
                    }
                );
            });


        document.addEventListener(
            "click",
            (event) => {

                if (!state.menuOpen) {
                    return;
                }

                const clickedInside =
                    DOM.mobileMenu?.contains(
                        event.target
                    );

                const clickedToggle =
                    DOM.menuToggle?.contains(
                        event.target
                    );

                if (
                    !clickedInside &&
                    !clickedToggle
                ) {
                    setMenuState(false);
                }
            }
        );
    };


    /* =========================================================
       18. KEYBOARD NAVIGATION
       ========================================================= */

    const handleGlobalKeyboard = (event) => {

        if (event.key !== "Escape") {
            return;
        }

        if (state.modalOpen) {
            closeProjectModal();
            return;
        }

        if (state.menuOpen) {
            setMenuState(false);
        }
    };


    /* =========================================================
       19. THEME SYSTEM
       ========================================================= */

    const getStoredTheme = () => {

        try {
            return localStorage.getItem(
                "krixora-theme"
            );
        } catch {
            return null;
        }
    };


    const getPreferredTheme = () => {

        const stored =
            getStoredTheme();

        if (
            stored === "dark" ||
            stored === "light"
        ) {
            return stored;
        }

        return window.matchMedia(
            "(prefers-color-scheme: light)"
        ).matches
            ? "light"
            : "dark";
    };


    /*
     * The krixora-logo.svg mark is loaded via <object>, which is
     * an isolated document — its own CSS can't see the parent
     * page's data-theme. This mirrors the current theme onto the
     * SVG's own root element so its internal stylesheet (see
     * #glowWrap's light-only glow) can react to it. Only runs
     * once the object's document is actually available.
     */
    const syncLogoTheme = (theme) => {

        document
            .querySelectorAll(".krixora-logo")
            .forEach((objectEl) => {

                const applyToSvgRoot = () => {

                    const svgRoot =
                        objectEl.contentDocument
                            ?.documentElement;

                    if (svgRoot) {
                        svgRoot.setAttribute(
                            "data-theme",
                            theme
                        );
                    }
                };

                /*
                 * contentDocument exists (truthy) even before the
                 * real SVG has loaded — it briefly points at a
                 * blank placeholder HTML document. Only treat it
                 * as ready once its root element is actually the
                 * svg; otherwise wait for the object's load event.
                 */
                const currentRoot =
                    objectEl.contentDocument
                        ?.documentElement;

                if (
                    currentRoot &&
                    currentRoot.tagName.toLowerCase() ===
                        "svg"
                ) {
                    applyToSvgRoot();
                } else {
                    objectEl.addEventListener(
                        "load",
                        applyToSvgRoot,
                        { once: true }
                    );
                }
            });
    };


    const applyTheme = (
        theme,
        { animateIcon = false } = {}
    ) => {

        state.currentTheme = theme;

        document.documentElement.dataset.theme =
            theme;

        syncLogoTheme(
            theme
        );

        /*
         * Keep the mobile browser chrome / status bar color in
         * sync with the active theme.
         */
        const themeColorMeta =
            document.querySelector(
                'meta[name="theme-color"]'
            );

        if (themeColorMeta) {
            themeColorMeta.setAttribute(
                "content",
                theme === "light"
                    ? "#f4f7fc"
                    : "#05070d"
            );
        }

        if (!DOM.themeToggle) {
            return;
        }

        const isLight =
            theme === "light";

        DOM.themeToggle.setAttribute(
            "aria-pressed",
            String(isLight)
        );

        DOM.themeToggle.setAttribute(
            "aria-label",
            isLight
                ? "Switch to dark theme"
                : "Switch to light theme"
        );

        const icon =
            DOM.themeToggle.querySelector(
                "[data-lucide]"
            );

        if (icon) {

            const newIconName =
                isLight ? "sun" : "moon";

            if (animateIcon) {
                swapIconWithTransition(
                    DOM.themeToggle,
                    newIconName
                );
            } else {
                icon.setAttribute(
                    "data-lucide",
                    newIconName
                );

                refreshIcons();
            }
        }
    };


    const saveTheme = (theme) => {

        try {
            localStorage.setItem(
                "krixora-theme",
                theme
            );
        } catch {
            /*
             * Storage may be unavailable in
             * restricted browser contexts.
             */
        }
    };


    const initTheme = () => {

        if (!DOM.themeToggle) {
            return;
        }

        applyTheme(
            getPreferredTheme()
        );


        DOM.themeToggle.addEventListener(
            "click",
            () => {

                const nextTheme =
                    state.currentTheme === "dark"
                        ? "light"
                        : "dark";

                applyTheme(
                    nextTheme,
                    { animateIcon: true }
                );
                saveTheme(nextTheme);
            }
        );


        const mediaQuery =
            window.matchMedia(
                "(prefers-color-scheme: light)"
            );

        const handleSystemThemeChange =
            (event) => {

                if (getStoredTheme()) {
                    return;
                }

                applyTheme(
                    event.matches
                        ? "light"
                        : "dark"
                );
            };


        if (
            typeof mediaQuery.addEventListener ===
            "function"
        ) {
            mediaQuery.addEventListener(
                "change",
                handleSystemThemeChange
            );
        }
    };


    /* =========================================================
       20. ACTIVE NAVIGATION
       ========================================================= */

    const initActiveNavigation = () => {

        const sections = [
            ...document.querySelectorAll(
                "main section[id]"
            )
        ];

        const navLinks = [
            ...document.querySelectorAll(
                "[data-nav]"
            )
        ];

        if (!sections.length || !navLinks.length) {
            return;
        }


        const setActiveNavigation = (id) => {

            navLinks.forEach((link) => {

                const active =
                    link.dataset.nav === id;

                link.classList.toggle(
                    "active",
                    active
                );

                if (active) {
                    link.setAttribute(
                        "aria-current",
                        "page"
                    );
                } else {
                    link.removeAttribute(
                        "aria-current"
                    );
                }
            });
        };


        const observer =
            new IntersectionObserver(
                (entries) => {

                    const visibleEntries =
                        entries
                            .filter(
                                (entry) =>
                                    entry.isIntersecting
                            )
                            .sort(
                                (a, b) =>
                                    b.intersectionRatio -
                                    a.intersectionRatio
                            );

                    if (!visibleEntries.length) {
                        return;
                    }

                    setActiveNavigation(
                        visibleEntries[0].target.id
                    );
                },
                {
                    root: null,
                    rootMargin:
                        "-25% 0px -55% 0px",
                    threshold: [
                        0.05,
                        0.15,
                        0.3,
                        0.5
                    ]
                }
            );


        sections.forEach((section) => {
            observer.observe(section);
        });


        /*
         * Philosophy and Skills are real sections too.
         * If there is no corresponding nav item, they simply
         * do not change the visible navigation selection.
         */
        setActiveNavigation("home");
    };


    /* =========================================================
       21. PROJECT MODAL
       ========================================================= */

    const getModalFocusableElements = () => {
        return getFocusableElements(
            DOM.projectModal
        );
    };


    const openProjectModal = (projectId, trigger) => {

        const project =
            projectsData[projectId];

        if (!project || !DOM.projectModal) {
            return;
        }


        state.modalOpen = true;
        state.previousFocus =
            trigger || document.activeElement;


        if (DOM.modalTitle) {
            DOM.modalTitle.textContent =
                project.name;
        }


        if (DOM.modalBody) {

            DOM.modalBody.replaceChildren();


            const description =
                document.createElement("p");

            description.textContent =
                project.description;


            DOM.modalBody.appendChild(
                description
            );


            if (
                Array.isArray(project.tags) &&
                project.tags.length
            ) {

                const tags =
                    document.createElement("div");

                tags.className =
                    "modal-project-tags";

                project.tags.forEach((tag) => {

                    const span =
                        document.createElement("span");

                    span.textContent = tag;

                    tags.appendChild(span);
                });

                DOM.modalBody.appendChild(tags);
            }


            if (
                Array.isArray(project.features) &&
                project.features.length
            ) {

                const featuresHeading =
                    document.createElement("p");

                featuresHeading.className =
                    "modal-project-subheading";

                featuresHeading.textContent =
                    "Features";

                DOM.modalBody.appendChild(
                    featuresHeading
                );


                const featuresList =
                    document.createElement("ul");

                featuresList.className =
                    "modal-project-features";

                project.features.forEach((feature) => {

                    const item =
                        document.createElement("li");

                    item.textContent = feature;

                    featuresList.appendChild(item);
                });

                DOM.modalBody.appendChild(
                    featuresList
                );
            }


            if (project.caseStudy) {

                const caseWrap =
                    document.createElement("div");

                caseWrap.className =
                    "modal-case-study";


                const caseHeading =
                    document.createElement("p");

                caseHeading.className =
                    "modal-project-subheading";

                caseHeading.textContent =
                    "Behind the Build";

                DOM.modalBody.appendChild(
                    caseHeading
                );


                const CASE_STUDY_BLOCKS = [
                    { key: "problem", label: "The Problem" },
                    { key: "approach", label: "The Approach" },
                    { key: "result", label: "The Result" },
                    { key: "learnings", label: "What I Learned" }
                ];

                CASE_STUDY_BLOCKS.forEach(({ key, label }) => {

                    const text = project.caseStudy[key];

                    if (!text) {
                        return;
                    }

                    const block =
                        document.createElement("div");

                    block.className =
                        "modal-case-block";


                    const blockLabel =
                        document.createElement("p");

                    blockLabel.className =
                        "modal-case-label";

                    blockLabel.textContent = label;

                    block.appendChild(blockLabel);


                    const blockText =
                        document.createElement("p");

                    blockText.className =
                        "modal-case-text";

                    blockText.textContent = text;

                    block.appendChild(blockText);


                    caseWrap.appendChild(block);
                });

                DOM.modalBody.appendChild(
                    caseWrap
                );
            }


            if (project.url || project.github) {

                const actions =
                    document.createElement("div");

                actions.className =
                    "modal-actions";


                if (project.url) {

                    const liveLink =
                        document.createElement("a");

                    liveLink.href =
                        safeExternalLink(
                            project.url
                        );

                    liveLink.target = "_blank";
                    liveLink.rel =
                        "noopener noreferrer";

                    liveLink.className =
                        "btn btn-primary";

                    liveLink.textContent =
                        "Live Demo";

                    actions.appendChild(
                        liveLink
                    );
                }


                if (project.github) {

                    const githubLink =
                        document.createElement("a");

                    githubLink.href =
                        safeExternalLink(
                            project.github
                        );

                    githubLink.target = "_blank";
                    githubLink.rel =
                        "noopener noreferrer";

                    githubLink.className =
                        "btn btn-secondary";

                    githubLink.textContent =
                        "GitHub";

                    actions.appendChild(
                        githubLink
                    );
                }


                DOM.modalBody.appendChild(
                    actions
                );
            }


            if (project.status) {

                const status =
                    document.createElement("p");

                status.className =
                    "modal-project-status";

                status.textContent =
                    project.status;

                DOM.modalBody.appendChild(
                    status
                );
            }
        }


        DOM.projectModal.classList.add(
            "is-open"
        );

        DOM.projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        DOM.body.classList.add(
            "modal-open"
        );


        const focusables =
            getModalFocusableElements();

        window.setTimeout(() => {

            if (focusables.length) {
                focusables[0].focus();
            } else {
                DOM.modalClose?.focus();
            }

        }, prefersReducedMotion() ? 0 : 50);
    };


    const closeProjectModal = () => {

        if (
            !state.modalOpen ||
            !DOM.projectModal
        ) {
            return;
        }

        state.modalOpen = false;

        DOM.projectModal.classList.remove(
            "is-open"
        );

        DOM.projectModal.setAttribute(
            "aria-hidden",
            "true"
        );

        DOM.body.classList.remove(
            "modal-open"
        );


        if (DOM.modalBody) {
            DOM.modalBody.replaceChildren();
        }


        if (
            state.previousFocus &&
            typeof state.previousFocus.focus ===
                "function"
        ) {
            state.previousFocus.focus();
        }

        state.previousFocus = null;
    };


    const trapModalFocus = (event) => {

        if (
            !state.modalOpen ||
            event.key !== "Tab"
        ) {
            return;
        }

        const focusables =
            getModalFocusableElements();

        if (!focusables.length) {
            event.preventDefault();
            return;
        }

        const first =
            focusables[0];

        const last =
            focusables[
                focusables.length - 1
            ];


        if (
            event.shiftKey &&
            document.activeElement === first
        ) {
            event.preventDefault();
            last.focus();
        } else if (
            !event.shiftKey &&
            document.activeElement === last
        ) {
            event.preventDefault();
            first.focus();
        }
    };


    const initProjectModal = () => {

        if (!DOM.projectModal) {
            return;
        }


        /*
         * Modal is not opened automatically — only by an explicit
         * [data-project-trigger="<id>"] element (see the "Details"
         * button on the Flowora card in index.html).
         */
        document
            .querySelectorAll(
                "[data-project-trigger]"
            )
            .forEach((trigger) => {

                trigger.addEventListener(
                    "click",
                    () => {

                        openProjectModal(
                            trigger.dataset.projectTrigger,
                            trigger
                        );
                    }
                );
            });


        document
            .querySelectorAll(
                "[data-modal-close]"
            )
            .forEach((element) => {

                element.addEventListener(
                    "click",
                    (event) => {

                        if (
                            element.classList.contains(
                                "modal-backdrop"
                            ) &&
                            event.target !== element
                        ) {
                            return;
                        }

                        closeProjectModal();
                    }
                );
            });


        DOM.modalClose?.addEventListener(
            "click",
            closeProjectModal
        );


        document.addEventListener(
            "keydown",
            trapModalFocus
        );
    };


    /* =========================================================
       22. CONTACT FORM

       Submits to Formspree (https://formspree.io/f/mqpzpajo) —
       messages arrive at the inbox linked to that form. No
       secret key needed client-side; the endpoint URL itself is
       safe to expose (see handleContactSubmit).
       ========================================================= */

    const CONTACT_FORM_ENDPOINT =
        "https://formspree.io/f/mqpzpajo";

    const clearFormErrors = () => {

        document
            .querySelectorAll(
                ".form-error"
            )
            .forEach((element) => {
                element.textContent = "";
            });


        document
            .querySelectorAll(
                ".contact-form input, .contact-form textarea"
            )
            .forEach((field) => {
                field.removeAttribute(
                    "aria-invalid"
                );
            });
    };


    const setFieldError = (
        fieldName,
        message
    ) => {

        const error =
            document.querySelector(
                `[data-error-for="${fieldName}"]`
            );

        const field =
            document.querySelector(
                `[name="${fieldName}"]`
            );

        if (error) {
            error.textContent = message;
        }

        if (field) {
            field.setAttribute(
                "aria-invalid",
                "true"
            );
        }
    };


    const validateContactForm = () => {

        if (!DOM.contactForm) {
            return false;
        }

        clearFormErrors();

        const formData =
            new FormData(
                DOM.contactForm
            );

        const name =
            String(
                formData.get("name") || ""
            ).trim();

        const email =
            String(
                formData.get("email") || ""
            ).trim();

        const message =
            String(
                formData.get("message") || ""
            ).trim();

        let valid = true;


        if (!name) {

            setFieldError(
                "name",
                "Please enter your name."
            );

            valid = false;
        }


        if (!email) {

            setFieldError(
                "email",
                "Please enter your email."
            );

            valid = false;

        } else {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

            if (!emailPattern.test(email)) {

                setFieldError(
                    "email",
                    "Please enter a valid email address."
                );

                valid = false;
            }
        }


        if (!message) {

            setFieldError(
                "message",
                "Please enter your message."
            );

            valid = false;

        } else if (
            message.length < 10
        ) {

            setFieldError(
                "message",
                "Please enter at least 10 characters."
            );

            valid = false;
        }


        return valid;
    };


    const setFormStatus = (
        message,
        type = ""
    ) => {

        if (!DOM.formStatus) {
            return;
        }

        DOM.formStatus.textContent =
            message;

        DOM.formStatus.dataset.status =
            type;

        // Restart the CSS entrance/shake animation on every status
        // change (not just the first empty→text transition) by
        // forcing a reflow between clearing and re-applying the
        // inline animation override.
        DOM.formStatus.style.animation = "none";

        void DOM.formStatus.offsetWidth;

        DOM.formStatus.style.animation = "";
    };


    const setFormLoading = (
        loading
    ) => {

        if (!DOM.contactForm) {
            return;
        }

        const submitButton =
            DOM.contactForm.querySelector(
                ".form-submit"
            );

        const submitText =
            DOM.contactForm.querySelector(
                ".submit-text"
            );

        const submitLoading =
            DOM.contactForm.querySelector(
                ".submit-loading"
            );


        if (submitButton) {
            submitButton.disabled =
                loading;
        }

        if (submitText) {
            submitText.hidden =
                loading;
        }

        if (submitLoading) {
            submitLoading.hidden =
                !loading;
        }
    };


    const handleContactSubmit = async (
        event
    ) => {

        event.preventDefault();

        if (state.formSubmitting) {
            return;
        }


        const valid =
            validateContactForm();

        if (!valid) {

            setFormStatus(
                "Please correct the highlighted fields.",
                "error"
            );

            return;
        }


        state.formSubmitting = true;

        setFormLoading(true);

        setFormStatus(
            "Sending…",
            "info"
        );


        /*
         * Submits to Formspree (https://formspree.io/f/mqpzpajo),
         * which forwards the message to the inbox configured on
         * that form (krixora404@gmail.com). This is a real,
         * working submission — no mail app popup, no fake
         * success state.
         */

        const formData =
            new FormData(
                DOM.contactForm
            );

        try {

            const response =
                await fetch(
                    "https://formspree.io/f/mqpzpajo",
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            Accept: "application/json"
                        }
                    }
                );

            if (response.ok) {

                setFormStatus(
                    "Thanks — your message has been sent. I'll get back to you soon.",
                    "success"
                );

                DOM.contactForm.reset();

            } else {

                setFormStatus(
                    "Something went wrong sending your message. Please try again or email directly.",
                    "error"
                );
            }

        } catch (error) {

            setFormStatus(
                "Something went wrong sending your message. Please check your connection and try again.",
                "error"
            );
        }


        setFormLoading(false);

        state.formSubmitting = false;
    };


    const initContactForm = () => {

        if (!DOM.contactForm) {
            return;
        }

        DOM.contactForm.addEventListener(
            "submit",
            handleContactSubmit
        );


        DOM.contactForm
            .querySelectorAll(
                "input, textarea"
            )
            .forEach((field) => {

                field.addEventListener(
                    "input",
                    () => {

                        field.removeAttribute(
                            "aria-invalid"
                        );

                        const fieldName =
                            field.name;

                        const error =
                            document.querySelector(
                                `[data-error-for="${fieldName}"]`
                            );

                        if (error) {
                            error.textContent =
                                "";
                        }
                    }
                );
            });
    };


    /* =========================================================
       22b. SCROLL REVEAL
       ========================================================= */

    /*
     * One-time reveal: elements start hidden via CSS
     * ([data-reveal] / [data-reveal-scale]) and gain
     * .is-revealed the first time they cross into view. Once
     * revealed they stay revealed — scrolling back up never
     * re-hides or re-triggers anything, which keeps the effect
     * calm instead of distracting.
     *
     * Groups (marked with [data-reveal-group]) get a small
     * stagger: each child's transition-delay is set once, up
     * front, from its position in the group — no per-frame
     * work, just a handful of inline styles set at page load.
     */

    const applyRevealStagger = () => {

        const STAGGER_STEP_MS = 70;
        const STAGGER_MAX_STEPS = 6;

        document
            .querySelectorAll("[data-reveal-group]")
            .forEach((group) => {

                const items =
                    group.querySelectorAll(
                        "[data-reveal], [data-reveal-scale]"
                    );

                items.forEach((item, index) => {

                    const step =
                        Math.min(index, STAGGER_MAX_STEPS);

                    item.style.transitionDelay =
                        `${step * STAGGER_STEP_MS}ms`;
                });
            });
    };


    const initScrollReveal = () => {

        applyRevealStagger();

        const targets = [
            ...document.querySelectorAll(
                "[data-reveal], [data-reveal-scale]"
            )
        ];

        if (!targets.length) {
            return;
        }

        if (
            prefersReducedMotion() ||
            !("IntersectionObserver" in window)
        ) {
            targets.forEach((el) => {
                el.classList.add("is-revealed");
            });
            return;
        }

        const observer =
            new IntersectionObserver(
                (entries, obs) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "is-revealed"
                        );

                        obs.unobserve(entry.target);
                    });
                },
                {
                    root: null,
                    rootMargin: "0px 0px -8% 0px",
                    threshold: 0.12
                }
            );

        targets.forEach((el) => observer.observe(el));
    };


    /* =========================================================
       22c. SCROLL PROGRESS + JOURNEY TIMELINE FILL
       ========================================================= */

    /*
     * A single requestAnimationFrame loop drives both the top
     * progress bar and the Journey timeline fill, since both
     * are cheap reads of scroll position — no need for two
     * separate scroll listeners or two separate rAF chains.
     * The scroll listener only ever sets a "dirty" flag; the
     * actual DOM writes happen in the next animation frame.
     */

    const scrollProgressState = {
        ticking: false
    };

    let iconTiltElements = [];

    const cacheIconTiltElements = () => {

        iconTiltElements = [
            ...document.querySelectorAll(
                ".tool-icon svg, .cert-icon svg, .skill-icon svg"
            )
        ];
    };


    /*
     * Icon scroll tilt — a genuine scroll-linked effect (not a
     * one-time reveal): every icon glyph tilts a little based on
     * where it currently sits in the viewport, so it visibly
     * rotates as the page scrolls past it and settles flat once
     * it's centered. Runs on the icon's own <svg> so it never
     * fights with the parent's slide-in-on-reveal transform.
     */

    const updateIconScrollTilt = () => {

        if (
            prefersReducedMotion() ||
            !iconTiltElements.length
        ) {
            return;
        }

        const viewportH = window.innerHeight;
        const center = viewportH / 2;

        iconTiltElements.forEach((icon) => {

            const rect =
                icon.getBoundingClientRect();

            if (rect.bottom < -80 || rect.top > viewportH + 80) {
                return;
            }

            const iconCenter =
                rect.top + rect.height / 2;

            const offset =
                Math.max(
                    -1,
                    Math.min(1, (iconCenter - center) / center)
                );

            icon.style.transform =
                `rotate(${(offset * 16).toFixed(2)}deg) ` +
                `translateY(${(offset * -5).toFixed(2)}px)`;
        });
    };


    const updateScrollProgress = () => {

        scrollProgressState.ticking = false;

        const doc = document.documentElement;

        const scrollTop = window.scrollY;

        const scrollable =
            doc.scrollHeight - window.innerHeight;

        const progress =
            scrollable > 0
                ? Math.min(
                    Math.max(scrollTop / scrollable, 0),
                    1
                )
                : 0;

        if (DOM.scrollProgress) {
            DOM.scrollProgress.style.setProperty(
                "--scroll-progress",
                progress.toFixed(4)
            );
        }


        if (DOM.scrollTopFab) {
            DOM.scrollTopFab.classList.toggle(
                "is-visible",
                scrollTop > 500
            );
        }


        if (DOM.journeySection) {

            const rect =
                DOM.journeySection.getBoundingClientRect();

            const viewportH = window.innerHeight;

            /*
             * Timeline progress runs from "section top has just
             * reached the bottom of the viewport" (0%) to
             * "section bottom has reached the top of the
             * viewport" (100%) — a normal scroll-through range,
             * not tied to the whole page.
             */
            const total = rect.height + viewportH;

            const traveled =
                viewportH - rect.top;

            const timelineProgress =
                total > 0
                    ? Math.min(
                        Math.max(traveled / total, 0),
                        1
                    )
                    : 0;

            DOM.journeySection.style.setProperty(
                "--timeline-progress",
                timelineProgress.toFixed(4)
            );
        }
    };


    const requestScrollProgressUpdate = () => {

        if (scrollProgressState.ticking) {
            return;
        }

        scrollProgressState.ticking = true;

        window.requestAnimationFrame(updateScrollProgress);
    };


    const initScrollProgress = () => {

        updateScrollProgress();

        window.addEventListener(
            "scroll",
            requestScrollProgressUpdate,
            {
                passive: true
            }
        );

        window.addEventListener(
            "resize",
            requestScrollProgressUpdate,
            {
                passive: true
            }
        );
    };


    /* =========================================================
       22d. BACK-TO-TOP FAB
       ========================================================= */

    const initBackToTopFab = () => {

        if (!DOM.scrollTopFab) {
            return;
        }

        DOM.scrollTopFab.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior:
                        prefersReducedMotion()
                            ? "auto"
                            : "smooth"
                });
            }
        );
    };


    /* =========================================================
       22d2. HERO ENTRANCE SEQUENCE
       ========================================================= */

    /*
     * One-time staggered entrance for the hero on first paint.
     * CSS handles the actual motion + delays; we only flip the
     * .is-entered class after a short frame so the browser can
     * paint the initial (hidden) state first.
     */

    const initHeroEntrance = () => {

        const hero = DOM.heroSection;

        if (!hero) {
            return;
        }

        if (prefersReducedMotion()) {
            hero.classList.add("is-entered");
            return;
        }

        // Double rAF ensures the initial opacity/transform
        // styles are committed before we trigger the transition.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                hero.classList.add("is-entered");
            });
        });
    };


    /* =========================================================
       22e. HERO ATMOSPHERIC PARALLAX
       ========================================================= */

    /*
     * Extremely subtle — content drifts a few pixels, the
     * portrait barely moves at all. Only runs while the hero
     * is on or near screen (via IntersectionObserver), so nine
     * scroll-screens further down the page this costs nothing.
     */

    const heroParallaxState = {
        active: false,
        ticking: false
    };

    const updateHeroParallax = () => {

        heroParallaxState.ticking = false;

        if (!heroParallaxState.active) {
            return;
        }

        const scrollTop = window.scrollY;

        if (DOM.heroContent) {
            DOM.heroContent.style.transform =
                `translateY(${Math.min(scrollTop * 0.06, 40)}px)`;
        }

        if (DOM.heroVisual) {
            DOM.heroVisual.style.transform =
                `translateY(${Math.min(scrollTop * 0.02, 14)}px)`;
        }
    };


    const requestHeroParallaxUpdate = () => {

        if (heroParallaxState.ticking) {
            return;
        }

        heroParallaxState.ticking = true;

        window.requestAnimationFrame(updateHeroParallax);
    };


    const initHeroParallax = () => {

        if (
            !DOM.heroSection ||
            prefersReducedMotion() ||
            !("IntersectionObserver" in window)
        ) {
            return;
        }

        /*
         * Skip on narrow/short viewports — mobile scrolling
         * should stay simple and full-speed (see brief: reduce
         * parallax intensity on mobile, disable if it risks
         * performance).
         */
        if (window.innerWidth < 768) {
            return;
        }

        const observer =
            new IntersectionObserver(
                (entries) => {

                    heroParallaxState.active =
                        entries[0]?.isIntersecting ?? false;

                    if (heroParallaxState.active) {
                        requestHeroParallaxUpdate();
                    } else if (DOM.heroContent && DOM.heroVisual) {
                        DOM.heroContent.style.transform = "";
                        DOM.heroVisual.style.transform = "";
                    }
                },
                {
                    root: null,
                    threshold: 0
                }
            );

        observer.observe(DOM.heroSection);

        window.addEventListener(
            "scroll",
            requestHeroParallaxUpdate,
            {
                passive: true
            }
        );
    };


    /* =========================================================
       22f. CTA ORBITAL SYSTEM (sphere + rings)
       ========================================================= */

    /*
     * The float / breathing-glow / ring-rotation motion is pure
     * CSS (see section 23 in style.css) — always on, cheap,
     * GPU-composited. This only adds the two interactive
     * layers the brief asks for on top of that:
     *
     *   1. a very subtle cursor-follow parallax on the sphere +
     *      rings (desktop only, rAF-throttled, paused while the
     *      section is off-screen)
     *   2. a small glow boost while the "Let's Work Together"
     *      button is hovered/focused (class toggle; the actual
     *      visual change lives in CSS)
     */

    const ctaParallaxState = {
        active: false,
        ticking: false,
        maxOffset: 10,
        lastX: 0,
        lastY: 0
    };

    const supportsFinePointerHover = () =>
        window.matchMedia("(hover: hover) and (pointer: fine)")
            .matches;

    const updateCtaParallax = () => {

        ctaParallaxState.ticking = false;

        if (!DOM.ctaVisualInner) {
            return;
        }

        DOM.ctaVisualInner.style.transform =
            `translate3d(${ctaParallaxState.lastX}px, ${ctaParallaxState.lastY}px, 0)`;
    };


    const requestCtaParallaxUpdate = () => {

        if (ctaParallaxState.ticking) {
            return;
        }

        ctaParallaxState.ticking = true;

        window.requestAnimationFrame(updateCtaParallax);
    };


    const handleCtaPointerMove = (event) => {

        if (!ctaParallaxState.active || !DOM.ctaCard) {
            return;
        }

        const rect = DOM.ctaCard.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const ratioX =
            (event.clientX - centerX) / (rect.width / 2);
        const ratioY =
            (event.clientY - centerY) / (rect.height / 2);

        const clampedX =
            Math.max(-1, Math.min(1, ratioX));
        const clampedY =
            Math.max(-1, Math.min(1, ratioY));

        ctaParallaxState.lastX =
            clampedX * ctaParallaxState.maxOffset;
        ctaParallaxState.lastY =
            clampedY * ctaParallaxState.maxOffset;

        requestCtaParallaxUpdate();
    };


    const resetCtaParallax = () => {

        ctaParallaxState.lastX = 0;
        ctaParallaxState.lastY = 0;

        requestCtaParallaxUpdate();
    };


    const initCtaButtonGlow = () => {

        if (!DOM.ctaButton || !DOM.ctaCard) {
            return;
        }

        const activate = () =>
            DOM.ctaCard.classList.add("is-cta-active");

        const deactivate = () =>
            DOM.ctaCard.classList.remove("is-cta-active");

        DOM.ctaButton.addEventListener(
            "mouseenter",
            activate
        );

        DOM.ctaButton.addEventListener(
            "mouseleave",
            deactivate
        );

        DOM.ctaButton.addEventListener(
            "focus",
            activate
        );

        DOM.ctaButton.addEventListener(
            "blur",
            deactivate
        );
    };


    const initCtaOrbitalSystem = () => {

        initCtaButtonGlow();

        if (
            !DOM.ctaSection ||
            !DOM.ctaCard ||
            !DOM.ctaVisualInner ||
            prefersReducedMotion() ||
            !supportsFinePointerHover() ||
            !("IntersectionObserver" in window)
        ) {
            return;
        }

        /*
         * Desktop gets the full ~10px range; a touch-free but
         * narrower "tablet-ish" viewport (a small laptop or a
         * fine-pointer tablet in landscape) gets a noticeably
         * smaller nudge, per the brief.
         */
        ctaParallaxState.maxOffset =
            window.innerWidth < 1024 ? 5 : 10;

        const observer =
            new IntersectionObserver(
                (entries) => {

                    ctaParallaxState.active =
                        entries[0]?.isIntersecting ?? false;

                    if (!ctaParallaxState.active) {
                        resetCtaParallax();
                    }
                },
                {
                    root: null,
                    threshold: 0
                }
            );

        observer.observe(DOM.ctaSection);

        DOM.ctaCard.addEventListener(
            "mousemove",
            handleCtaPointerMove,
            {
                passive: true
            }
        );

        DOM.ctaCard.addEventListener(
            "mouseleave",
            resetCtaParallax
        );
    };


    /* =========================================================
       23. SMOOTH ANCHOR NAVIGATION
       ========================================================= */

    const initSmoothAnchors = () => {

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        const href =
                            link.getAttribute(
                                "href"
                            );

                        if (
                            !href ||
                            href === "#"
                        ) {
                            return;
                        }

                        const target =
                            document.querySelector(
                                href
                            );

                        if (!target) {
                            return;
                        }

                        event.preventDefault();

                        const headerHeight =
                            DOM.header?.offsetHeight ||
                            0;

                        const targetTop =
                            target.getBoundingClientRect()
                                .top +
                            window.scrollY -
                            headerHeight -
                            16;

                        window.scrollTo({
                            top: Math.max(
                                targetTop,
                                0
                            ),
                            behavior:
                                prefersReducedMotion()
                                    ? "auto"
                                    : "smooth"
                        });


                        /*
                         * Close mobile navigation
                         * when anchor navigation occurs.
                         */
                        if (state.menuOpen) {
                            setMenuState(false);
                        }
                    }
                );
            });
    };


    /* =========================================================
       24. HEADER SCROLL STATE
       ========================================================= */

    const updateHeaderOnScroll = () => {

        if (!DOM.header) {
            return;
        }

        DOM.header.classList.toggle(
            "scrolled",
            window.scrollY > 24
        );
    };


    const initHeaderScroll = () => {

        updateHeaderOnScroll();

        window.addEventListener(
            "scroll",
            updateHeaderOnScroll,
            {
                passive: true
            }
        );
    };


    /* =========================================================
       25. FOOTER YEAR
       ========================================================= */

    const updateFooterYear = () => {

        if (!DOM.currentYear) {
            return;
        }

        DOM.currentYear.textContent =
            new Date().getFullYear();
    };


    /* =========================================================
       25b. LIVE AGE
       ========================================================= */

    /*
     * Computes age from PROFILE.birthDate against today's date.
     * Re-run on every page load, so the displayed age rolls over
     * on its own each year on the birthday — no stored "current
     * age" value to remember to update by hand.
     */
    const calculateAge = (birthDate) => {

        const today = new Date();

        let age =
            today.getFullYear() -
            birthDate.getFullYear();

        const hasHadBirthdayThisYear =
            today.getMonth() > birthDate.getMonth() ||
            (
                today.getMonth() === birthDate.getMonth() &&
                today.getDate() >= birthDate.getDate()
            );

        if (!hasHadBirthdayThisYear) {
            age -= 1;
        }

        return age;
    };


    const renderAge = () => {

        const ageElement =
            document.querySelector("[data-age-text]");

        if (!ageElement || !PROFILE.birthDate) {
            return;
        }

        ageElement.textContent =
            `${calculateAge(PROFILE.birthDate)} yrs`;
    };


    /* =========================================================
       26. EXTERNAL LINK SECURITY
       ========================================================= */

    const secureExternalLinks = () => {

        document
            .querySelectorAll(
                'a[target="_blank"]'
            )
            .forEach((link) => {

                const rel =
                    new Set(
                        (
                            link.getAttribute(
                                "rel"
                            ) || ""
                        ).split(/\s+/)
                    );

                rel.add("noopener");
                rel.add("noreferrer");

                link.setAttribute(
                    "rel",
                    [...rel].join(" ")
                );
            });
    };


    /* =========================================================
       27. IMAGE ERROR HANDLING
       ========================================================= */

    const initImageHandling = () => {

        document
            .querySelectorAll("img")
            .forEach((image) => {

                image.addEventListener(
                    "error",
                    () => {

                        image.classList.add(
                            "image-load-error"
                        );

                        /*
                         * Do not replace images with
                         * fake/random portraits.
                         */
                    },
                    {
                        once: true
                    }
                );
            });
    };


    /* =========================================================
       28. REDUCED MOTION
       ========================================================= */

    const initReducedMotion = () => {

        const mediaQuery =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            );


        const applyReducedMotion =
            (event) => {

                document.documentElement.classList.toggle(
                    "reduce-motion",
                    event.matches
                );
            };


        applyReducedMotion(
            mediaQuery
        );


        if (
            typeof mediaQuery.addEventListener ===
            "function"
        ) {
            mediaQuery.addEventListener(
                "change",
                applyReducedMotion
            );
        }
    };


    /* =========================================================
       29. ESCAPE KEY
    ========================================================= */

    const initGlobalKeyboard = () => {

        document.addEventListener(
            "keydown",
            handleGlobalKeyboard
        );
    };


    /* =========================================================
       30. INITIALIZATION
       ========================================================= */

    /* =========================================================
       CUSTOM CURSOR + MAGNETIC BUTTONS
       Desktop-only enhancement (fine pointer + real hover
       support) — never runs on touchscreens, and bails out
       entirely under prefers-reduced-motion since it's a pure
       visual flourish with no functional purpose.
       ========================================================= */

    const initCustomCursor = () => {

        const supportsFinePointer = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!supportsFinePointer || prefersReducedMotion) {
            return;
        }

        const dot = document.querySelector(".custom-cursor-dot");
        const ring = document.querySelector(".custom-cursor-ring");

        if (!dot || !ring) {
            return;
        }

        document.body.classList.add("has-custom-cursor");

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let ringX = mouseX;
        let ringY = mouseY;

        let rafId = null;

        const render = () => {

            // Dot tracks the real cursor exactly — no lag.
            dot.style.transform =
                `translate3d(${mouseX}px, ${mouseY}px, 0)`;

            // Ring eases toward the cursor (lerp) for a soft
            // trailing feel instead of rigidly snapping to it.
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;

            ring.style.transform =
                `translate3d(${ringX}px, ${ringY}px, 0)`;

            rafId = requestAnimationFrame(render);
        };

        window.addEventListener("mousemove", (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }, { passive: true });

        window.addEventListener("mouseleave", () => {
            dot.style.opacity = "0";
            ring.style.opacity = "0";
        });

        window.addEventListener("mouseenter", () => {
            dot.style.opacity = "";
            ring.style.opacity = "";
        });

        rafId = requestAnimationFrame(render);

        // Hover state — any link, button, or explicitly
        // interactive element grows the ring. Delegated once on
        // document instead of binding per-element, so it keeps
        // working for content rendered later by JS (project
        // cards, skill tiles, etc.).
        const HOVER_TARGET_SELECTOR =
            "a, button, [role='button'], input, textarea, label";

        document.addEventListener("mouseover", (event) => {
            if (event.target.closest(HOVER_TARGET_SELECTOR)) {
                document.body.classList.add("cursor-hover");
            }
        });

        document.addEventListener("mouseout", (event) => {
            const stillInside =
                event.relatedTarget &&
                event.relatedTarget.closest(HOVER_TARGET_SELECTOR);

            if (!stillInside) {
                document.body.classList.remove("cursor-hover");
            }
        });
    };


    const initMagneticButtons = () => {

        const supportsFinePointer = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!supportsFinePointer || prefersReducedMotion) {
            return;
        }

        const MAGNET_SELECTOR = ".btn, .icon-btn, .social-link";

        // Delegated listeners so dynamically-rendered buttons
        // (project cards, skill grid, etc.) are covered too —
        // no need to re-bind after every render.

        const MAX_PULL = 10; // px, kept small so it reads as a
                              // subtle magnetic pull, not a jump.

        document.addEventListener("mousemove", (event) => {

            const target = event.target.closest(MAGNET_SELECTOR);

            document
                .querySelectorAll(".is-magnet-active")
                .forEach((el) => {
                    if (el !== target) {
                        el.classList.remove("is-magnet-active");
                        el.style.transform = "";
                    }
                });

            if (!target) {
                return;
            }

            const rect = target.getBoundingClientRect();

            const relX = event.clientX - (rect.left + rect.width / 2);
            const relY = event.clientY - (rect.top + rect.height / 2);

            const pullX = (relX / (rect.width / 2)) * MAX_PULL;
            const pullY = (relY / (rect.height / 2)) * MAX_PULL;

            target.classList.add("is-magnet-active");

            target.style.transform =
                `translate3d(${pullX}px, ${pullY}px, 0)`;

        }, { passive: true });

        document.addEventListener("mouseout", (event) => {
            const target = event.target.closest(MAGNET_SELECTOR);

            if (target && !target.contains(event.relatedTarget)) {
                target.classList.remove("is-magnet-active");
                target.style.transform = "";
            }
        });
    };


    /* =========================================================
       PROJECT CARD 3D TILT
       Desktop-only cinematic tilt that follows the cursor.
       Max rotation kept modest so it feels premium, not gimmicky.
       ========================================================= */

    const initProjectCardTilt = () => {
        const supportsFinePointer = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

        if (!supportsFinePointer || prefersReducedMotion()) {
            return;
        }

        const MAX_ROTATE = 7; // degrees
        const LIFT = 12; // px

        const cards = document.querySelectorAll(".project-card");
        if (!cards.length) return;

        cards.forEach((card) => {
            let raf = 0;
            let targetRX = 0;
            let targetRY = 0;
            let currentRX = 0;
            let currentRY = 0;
            let hovering = false;

            const animate = () => {
                currentRX += (targetRX - currentRX) * 0.12;
                currentRY += (targetRY - currentRY) * 0.12;

                card.style.transform =
                    `perspective(1100px) rotateX(${currentRX.toFixed(2)}deg) ` +
                    `rotateY(${currentRY.toFixed(2)}deg) translateY(-${LIFT}px)`;

                if (
                    hovering ||
                    Math.abs(targetRX - currentRX) > 0.05 ||
                    Math.abs(targetRY - currentRY) > 0.05
                ) {
                    raf = requestAnimationFrame(animate);
                } else {
                    raf = 0;
                    if (!hovering) {
                        card.style.transform = "";
                        card.classList.remove("is-tilting");
                    }
                }
            };

            card.addEventListener(
                "pointermove",
                (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;

                    targetRY = (x - 0.5) * (MAX_ROTATE * 2);
                    targetRX = (0.5 - y) * (MAX_ROTATE * 2);

                    if (!raf) raf = requestAnimationFrame(animate);
                },
                { passive: true }
            );

            card.addEventListener("pointerenter", () => {
                hovering = true;
                card.classList.add("is-tilting");
                if (!raf) raf = requestAnimationFrame(animate);
            });

            card.addEventListener("pointerleave", () => {
                hovering = false;
                targetRX = 0;
                targetRY = 0;
                if (!raf) raf = requestAnimationFrame(animate);
            });
        });
    };


    /* =========================================================
       PAGE SKELETON — soft first paint, then fade out
       ========================================================= */

    const dismissPageSkeleton = () => {

        const skeleton = document.getElementById("pageSkeleton");
        const body = document.body;

        body.classList.remove("is-loading");

        if (!skeleton) {
            return;
        }

        skeleton.classList.add("is-done");

        window.setTimeout(() => {
            skeleton.remove();
        }, 500);
    };


    const initPageSkeleton = () => {

        if (prefersReducedMotion()) {
            dismissPageSkeleton();
            return;
        }

        /*
         * Minimum visible time so the shimmer is readable, not
         * a single-frame flash. Cap with a safety timeout so a
         * hung resource never leaves the overlay forever.
         */
        const MIN_MS = 420;
        const MAX_MS = 2200;
        const started = performance.now();

        const finish = () => {

            const elapsed = performance.now() - started;
            const wait = Math.max(0, MIN_MS - elapsed);

            window.setTimeout(dismissPageSkeleton, wait);
        };

        if (document.readyState === "complete") {
            finish();
        } else {
            window.addEventListener("load", finish, { once: true });
            window.setTimeout(finish, MAX_MS);
        }
    };



    /* =========================================================
       PHONE LAB — Boot sequence + installable app grid
       ========================================================= */

    const PhoneLab = (() => {
        const APPS = {
            flowora: "https://flowora-ai.vercel.app",
            cashora: "https://cashora-os.vercel.app",
            coursora: "https://coursora-os.vercel.app"
        };

        let booted = false;
        let booting = false;

        const updateTime = () => {
            const el = document.getElementById("phoneTime");
            if (!el) return;
            const now = new Date();
            el.textContent = now.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
            });
        };

        const setBootProgress = (pct, status) => {
            const fill = document.getElementById("phoneBootFill");
            const statusEl = document.getElementById("phoneBootStatus");
            if (fill) fill.style.width = `${pct}%`;
            if (statusEl && status) statusEl.textContent = status;
        };

        const showHome = () => {
            const boot = document.getElementById("phoneBoot");
            const home = document.getElementById("phoneHome");
            if (boot) {
                boot.classList.add("is-done");
                boot.setAttribute("aria-hidden", "true");
            }
            if (home) {
                home.hidden = false;
            }
            booted = true;
            booting = false;
            updateTime();
        };

        const runBoot = async () => {
            if (booting) return;
            booting = true;
            booted = false;

            const boot = document.getElementById("phoneBoot");
            const home = document.getElementById("phoneHome");
            if (boot) {
                boot.classList.remove("is-done");
                boot.setAttribute("aria-hidden", "false");
            }
            if (home) home.hidden = true;

            setBootProgress(0, "booting…");

            if (prefersReducedMotion()) {
                setBootProgress(100, "ready");
                showHome();
                return;
            }

            const steps = [
                [12, "loading kernel…"],
                [28, "mounting Spck…"],
                [46, "restoring PWAs…"],
                [64, "Flowora · Cashora · Coursora"],
                [82, "network: vercel"],
                [100, "ready"]
            ];

            for (const [pct, label] of steps) {
                setBootProgress(pct, label);
                await new Promise((r) => setTimeout(r, 280));
            }

            await new Promise((r) => setTimeout(r, 220));
            showHome();
        };

        const bindApps = () => {
            const grid = document.getElementById("phoneAppGrid");
            if (!grid) return;

            grid.addEventListener("click", (e) => {
                const btn = e.target.closest("[data-app]");
                if (!btn) return;
                const app = btn.getAttribute("data-app");

                if (app === "terminal") {
                    const lab = document.getElementById("lab");
                    if (lab) {
                        lab.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
                    }
                    return;
                }

                const url = APPS[app];
                if (url) {
                    window.open(url, "_blank", "noopener,noreferrer");
                }
            });
        };

        const bindReboot = () => {
            const btn = document.getElementById("phoneRebootBtn");
            if (!btn) return;
            btn.addEventListener("click", () => {
                runBoot();
            });
        };

        const observeBoot = () => {
            const section = document.getElementById("phone-lab");
            if (!section) return;

            if (!("IntersectionObserver" in window)) {
                runBoot();
                return;
            }

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !booted && !booting) {
                            runBoot();
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.35 }
            );

            observer.observe(section);
        };

        const init = () => {
            if (!document.getElementById("phoneDevice")) return;
            updateTime();
            window.setInterval(updateTime, 30000);
            bindApps();
            bindReboot();
            observeBoot();
        };

        return { init, runBoot };
    })();


    /* =========================================================
       KRIXORA TERMINAL — Signature Interactive Lab
       ========================================================= */

    const Terminal = (() => {
        const PROJECTS = {
            flowora: {
                name: "Flowora",
                url: "https://flowora-ai.vercel.app",
                blurb: "Productivity & Life Planner — offline-first PWA with AI coach support."
            },
            cashora: {
                name: "Cashora",
                url: "https://cashora-os.vercel.app",
                blurb: "Personal Finance Dashboard — private by design, installable PWA."
            },
            coursora: {
                name: "Coursora",
                url: "https://coursora-os.vercel.app",
                blurb: "Course Discovery Platform — 125+ courses from Udemy, Coursera, edX & more."
            }
        };

        let screen = null;
        let input = null;
        let history = [];
        let historyIndex = -1;
        let demoRan = false;
        let busy = false;

        const scrollToBottom = () => {
            if (!screen) return;
            screen.scrollTop = screen.scrollHeight;
        };

        const appendLine = (text, className = "is-out") => {
            if (!screen) return null;
            const line = document.createElement("p");
            line.className = `terminal-line ${className}`;
            line.innerHTML = text;
            screen.appendChild(line);
            scrollToBottom();
            return line;
        };

        const appendCmd = (cmd) => {
            appendLine(
                `<span class="cmd-prompt">❯</span>${escapeHTML(cmd)}`,
                "is-cmd"
            );
        };

        const typeLines = async (lines, delay = 28) => {
            for (const item of lines) {
                if (typeof item === "string") {
                    appendLine(item, "is-out");
                } else if (item && item.html) {
                    appendLine(item.html, item.className || "is-out");
                }
                if (!prefersReducedMotion()) {
                    await new Promise((r) => setTimeout(r, delay));
                }
            }
        };

        const runCommand = async (raw) => {
            const cmd = String(raw || "").trim();
            if (!cmd) return;

            appendCmd(cmd);
            history.push(cmd);
            historyIndex = history.length;

            const lower = cmd.toLowerCase();
            const parts = lower.split(/\s+/);
            const base = parts[0];
            const arg = parts.slice(1).join(" ");

            if (base === "help" || base === "?") {
                await typeLines([
                    { html: "<span class='is-accent'>KRIXORA shell — available commands</span>", className: "is-accent" },
                    "",
                    { html: "<span class='is-accent'>identity</span>", className: "is-accent" },
                    "  whoami / about     Who built this",
                    "  philosophy         How I work",
                    "  status             What I'm focused on now",
                    "  why                Why phone-first",
                    "",
                    { html: "<span class='is-accent'>work</span>", className: "is-accent" },
                    "  ls projects        List shipped products",
                    "  open &lt;name&gt;         flowora | cashora | coursora",
                    "  skills             Core stack",
                    "  journey            Short timeline",
                    "  build              Fake ship pipeline",
                    "",
                    { html: "<span class='is-accent'>system</span>", className: "is-accent" },
                    "  neofetch / banner  System snapshot / logo",
                    "  theme              Toggle dark / light",
                    "  contact            Reach Krish",
                    "  history            Recent commands",
                    "  version / clear    Shell version / wipe screen",
                    "",
                    { html: "<span class='is-accent'>fun</span>", className: "is-accent" },
                    "  sudo · hack · matrix · coffee · fortune · ping"
                ], 6);
                return;
            }

            if (base === "whoami") {
                await typeLines([
                    { html: "<span class='is-accent'>Krish Parmar</span> · Creative Developer", className: "is-accent" },
                    "Brand: <strong>KRIXORA</strong> — this is my name for the work I ship.",
                    "I build real products people can install — not just demos.",
                    "Stack lives in the browser. Shipping happens from a phone."
                ]);
                return;
            }

            if (base === "about" || lower === "cat about.md") {
                await typeLines([
                    "I design and ship small, intentional products.",
                    "Flowora, Cashora and Coursora were all built as offline-first PWAs —",
                    "from idea to production — on a phone, using Spck Editor.",
                    "",
                    "I care about clean systems, real usefulness, and UI that feels considered."
                ]);
                return;
            }

            if (base === "philosophy" || base === "principles") {
                await typeLines([
                    { html: "<span class='is-accent'>Working principles</span>", className: "is-accent" },
                    "  1. Real information over invented stats",
                    "  2. Real functionality over fake UI",
                    "  3. Premium simplicity over noise",
                    "  4. Accessibility over decoration",
                    "  5. Performance over unnecessary libraries",
                    "  6. Brand identity over generic templates"
                ], 10);
                return;
            }

            if (base === "status" || base === "now") {
                await typeLines([
                    { html: "<span class='is-success'>● online</span> — building &amp; learning", className: "is-out" },
                    "Focus: stronger product thinking + deeper JS architecture",
                    "Recent: Flowora · Cashora · Coursora",
                    "Next: keep shipping useful tools as KRIXORA"
                ]);
                return;
            }

            if (base === "ls" || lower === "ls projects" || lower === "ls -la") {
                await typeLines([
                    { html: "<span class='is-accent'>projects/</span>", className: "is-accent" },
                    "  flowora/     Productivity &amp; Life Planner     [PWA]",
                    "  cashora/     Personal Finance Dashboard    [PWA]",
                    "  coursora/    Course Discovery Platform    [PWA]",
                    "",
                    "Tip:  <span class='is-accent'>open flowora</span>"
                ], 12);
                return;
            }

            if (base === "open" || base === "cd") {
                const key = (arg || "").replace(/\/$/, "");
                const project = PROJECTS[key];
                if (!project) {
                    appendLine(
                        `open: ${escapeHTML(arg || "(empty)")}: no such project. Try flowora, cashora or coursora.`,
                        "is-error"
                    );
                    return;
                }
                appendLine(
                    `Launching <a href="${project.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.name)}</a>…`,
                    "is-success"
                );
                appendLine(project.blurb, "is-out");
                window.open(project.url, "_blank", "noopener,noreferrer");
                return;
            }

            if (base === "skills" || lower === "skills --list") {
                await typeLines([
                    { html: "<span class='is-accent'>Core stack</span>", className: "is-accent" },
                    "  HTML5 · CSS3 · JavaScript (ES6+)",
                    "  Tailwind · Responsive systems · PWA",
                    "  Motion · Accessibility · Local-first data",
                    "",
                    "Tools: Spck Editor · VS-style workflows · Vercel",
                    "Currently sharpening: architecture &amp; product depth."
                ], 10);
                return;
            }

            if (base === "journey" || base === "timeline") {
                await typeLines([
                    { html: "<span class='is-accent'>short timeline</span>", className: "is-accent" },
                    "  2024     Started serious web building",
                    "  2025     Shipped first real PWAs",
                    "  now      Flowora · Cashora · Coursora live",
                    "  next     Keep building tools worth installing"
                ], 12);
                return;
            }

            if (base === "neofetch" || base === "fetch" || base === "info") {
                const theme =
                    document.documentElement.dataset.theme === "light"
                        ? "Light"
                        : "Dark (cinematic)";
                await typeLines([
                    { html: "<span class='is-accent'>krixora@portfolio</span>", className: "is-accent" },
                    "----------------------------",
                    "OS           Creative Developer Environment",
                    "Host         Krish Parmar",
                    "Kernel       Curiosity + Discipline",
                    "Uptime       Building since 2024",
                    "Packages     3 shipped PWAs",
                    "Shell        KRIXORA Terminal",
                    "Resolution   Mobile-first → Desktop",
                    `Theme        ${theme}`,
                    "CPU          Phone + Spck Editor",
                    "Memory       Focused on real products",
                    "Terminal     You are here."
                ], 8);
                return;
            }

            if (base === "contact" || base === "email" || base === "hire") {
                await typeLines([
                    { html: "Email     <a href=\"mailto:krixora404@gmail.com\">krixora404@gmail.com</a>", className: "is-out" },
                    { html: "GitHub    <a href=\"https://github.com/KRIXORA\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/KRIXORA</a>", className: "is-out" },
                    "Open to collaboration, feedback, and interesting problems.",
                    "Or scroll to the Contact section — form is live."
                ]);
                return;
            }

            if (base === "theme") {
                const toggle = document.getElementById("themeToggle");
                if (toggle) {
                    toggle.click();
                    const next =
                        document.documentElement.dataset.theme === "light"
                            ? "light"
                            : "dark";
                    appendLine(`Theme switched → <span class="is-accent">${next}</span>`, "is-success");
                } else {
                    appendLine("Theme control unavailable.", "is-error");
                }
                return;
            }

            if (base === "clear" || base === "cls") {
                screen.innerHTML = "";
                return;
            }

            if (base === "sudo") {
                await typeLines([
                    { html: "Permission denied.", className: "is-error" },
                    "This machine already belongs to the builder.",
                    "Try <span class='is-accent'>whoami</span> instead."
                ]);
                return;
            }

            if (base === "hack" || base === "hack the planet") {
                await typeLines([
                    { html: "Access denied.", className: "is-error" },
                    "Wrong movie. This terminal builds products, not exploits."
                ]);
                return;
            }

            if (base === "matrix") {
                await typeLines([
                    { html: "<span class='is-success'>01001011 01010010 01001001 01011000</span>", className: "is-out" },
                    "Wake up, builder.",
                    "The real matrix is shipping something people actually use."
                ]);
                return;
            }

            if (base === "coffee" || base === "tea") {
                await typeLines([
                    { html: "☕ brewing…", className: "is-accent" },
                    "Fuel loaded. Back to building."
                ]);
                return;
            }

            if (base === "fortune" || base === "quote") {
                const fortunes = [
                    "Ship small. Ship often. Ship real.",
                    "A portfolio is proof — not promises.",
                    "Build from constraints. Phone-first is a feature.",
                    "Pretty UI without usefulness is just decoration.",
                    "The best flex is a link that works offline."
                ];
                const pick = fortunes[Math.floor(Math.random() * fortunes.length)];
                await typeLines([
                    { html: `<span class='is-accent'>fortune:</span> ${escapeHTML(pick)}`, className: "is-out" }
                ]);
                return;
            }

            if (base === "echo") {
                appendLine(escapeHTML(arg || ""), "is-out");
                return;
            }

            if (base === "date") {
                appendLine(new Date().toString(), "is-out");
                return;
            }

            if (base === "pwd") {
                appendLine("/home/krixora/portfolio", "is-out");
                return;
            }

            if (base === "uname") {
                appendLine("KRIXORA-OS portfolio-shell x86_64", "is-out");
                return;
            }

            if (base === "version" || base === "ver" || lower === "--version") {
                await typeLines([
                    { html: "<span class='is-accent'>KRIXORA Terminal</span> v1.4", className: "is-accent" },
                    "Portfolio shell · pure HTML/CSS/JS · no framework tax"
                ]);
                return;
            }

            if (base === "banner" || base === "logo") {
                await typeLines([
                    { html: "<span class='is-accent'>  _  __  ____    _____  __  __  ___   ____      _</span>", className: "is-out" },
                    { html: "<span class='is-accent'> | |/ / |  _ \\  |_   _| \\ \\/ / / _ \\ |  _ \\    / \\</span>", className: "is-out" },
                    { html: "<span class='is-accent'> | ' /  | |_) |   | |    \\  / | | | || |_) |  / _ \\</span>", className: "is-out" },
                    { html: "<span class='is-accent'> | . \\  |  _ &lt;    | |    /  \\ | |_| ||  _ &lt;  / ___ \\</span>", className: "is-out" },
                    { html: "<span class='is-accent'> |_|\\_\\ |_| \\_\\   |_|   /_/\\_\\ \\___/ |_| \\_\\/_/   \\_\\</span>", className: "is-out" },
                    "",
                    "Building digital experiences worth installing."
                ], 6);
                return;
            }

            if (base === "why" || base === "why phone" || lower === "why phone?") {
                await typeLines([
                    { html: "<span class='is-accent'>Why phone-first?</span>", className: "is-accent" },
                    "Constraints force clarity.",
                    "If it ships well from a phone, it stays focused.",
                    "No bloated toolchain theater — just product."
                ]);
                return;
            }

            if (base === "build" || base === "ship") {
                await typeLines([
                    { html: "build pipeline", className: "is-accent" },
                    "  [ok] idea → problem",
                    "  [ok] sketch → structure",
                    "  [ok] code → module by module",
                    "  [ok] test → real use",
                    "  [ok] ship → Vercel",
                    "",
                    { html: "<span class='is-success'>status: shipped</span>", className: "is-out" }
                ], 14);
                return;
            }

            if (base === "history" || base === "hist") {
                if (history.length === 0) {
                    appendLine("history is empty.", "is-out");
                    return;
                }
                const recent = history.slice(-12);
                await typeLines(
                    recent.map((h, i) => `  ${String(i + 1).padStart(2, " ")}  ${escapeHTML(h)}`),
                    6
                );
                return;
            }

            if (base === "hello" || base === "hi" || base === "hey") {
                await typeLines([
                    "Hey. Type <span class='is-accent'>help</span> to look around,",
                    "or <span class='is-accent'>open flowora</span> to see a live product."
                ]);
                return;
            }

            if (base === "ping") {
                appendLine("pong — system responsive.", "is-success");
                return;
            }

            // Friendly unknown command
            const hints = [
                "Did you mean <span class='is-accent'>help</span>?",
                "Try <span class='is-accent'>ls projects</span> or <span class='is-accent'>whoami</span>.",
                "Type <span class='is-accent'>fortune</span> for a random line.",
                "Curious? Try <span class='is-accent'>banner</span> or <span class='is-accent'>why</span>."
            ];
            const hint = hints[Math.floor(Math.random() * hints.length)];
            appendLine(
                `command not found: ${escapeHTML(cmd)}. ${hint}`,
                "is-error"
            );
        };

        const runDemo = async () => {
            if (demoRan || prefersReducedMotion()) {
                appendLine(
                    "Type <span class=\"is-accent\">help</span> to explore the system.",
                    "is-out"
                );
                return;
            }
            demoRan = true;
            busy = true;

            const sequence = ["whoami", "status", "ls projects"];

            for (const cmd of sequence) {
                await new Promise((r) => setTimeout(r, 380));
                await runCommand(cmd);
            }

            await typeLines([
                "",
                "Tip: type <span class='is-accent'>help</span> · <span class='is-accent'>fortune</span> · <span class='is-accent'>banner</span> · <span class='is-accent'>open flowora</span>"
            ], 10);

            busy = false;
            if (input) input.focus({ preventScroll: true });
        };

        const bindInput = () => {
            if (!input) return;

            input.addEventListener("keydown", async (e) => {
                if (busy) {
                    e.preventDefault();
                    return;
                }

                if (e.key === "Enter") {
                    e.preventDefault();
                    const value = input.value;
                    input.value = "";
                    busy = true;
                    await runCommand(value);
                    busy = false;
                    return;
                }

                if (e.key === "ArrowUp") {
                    e.preventDefault();
                    if (history.length === 0) return;
                    historyIndex = Math.max(0, historyIndex - 1);
                    input.value = history[historyIndex] || "";
                    return;
                }

                if (e.key === "ArrowDown") {
                    e.preventDefault();
                    if (historyIndex >= history.length - 1) {
                        historyIndex = history.length;
                        input.value = "";
                        return;
                    }
                    historyIndex += 1;
                    input.value = history[historyIndex] || "";
                }
            });
        };

        const bindChips = () => {
            const chips = document.getElementById("terminalChips");
            if (!chips) return;

            chips.addEventListener("click", async (e) => {
                const btn = e.target.closest("[data-cmd]");
                if (!btn || busy) return;
                const cmd = btn.getAttribute("data-cmd");
                if (!cmd) return;
                busy = true;
                await runCommand(cmd);
                busy = false;
                if (input) input.focus({ preventScroll: true });
            });
        };

        const bindFocusClick = () => {
            const win = document.querySelector(".terminal-window");
            if (!win || !input) return;
            win.addEventListener("click", (e) => {
                if (e.target.closest("a, button")) return;
                input.focus({ preventScroll: true });
            });
        };

        const observeDemo = () => {
            const section = document.getElementById("lab");
            if (!section || !("IntersectionObserver" in window)) {
                runDemo();
                return;
            }

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            runDemo();
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.35 }
            );

            observer.observe(section);
        };

        const init = () => {
            screen = document.getElementById("terminalScreen");
            input = document.getElementById("terminalInput");
            if (!screen || !input) return;

            appendLine(
                "KRIXORA Terminal v1.0 — type <span class=\"is-accent\">help</span> or wait for the demo.",
                "is-out"
            );

            bindInput();
            bindChips();
            bindFocusClick();
            observeDemo();
        };

        return { init };
    })();


    const init = () => {

        initPageSkeleton();

        configureProfileLinks();

        renderStats();

        initStatCountUp();

        initProcessRail();

        renderJourney();

        renderSkills();

        renderToolbox();

        renderCertifications();

        initCertSlider();

        initSkillTabs();

        initMobileMenu();

        initTheme();

        initActiveNavigation();

        Terminal.init();

        PhoneLab.init();

        initProjectCardTilt();

        initProjectModal();

        initContactForm();

        initSmoothAnchors();

        initScrollReveal();

        initScrollProgress();

        initBackToTopFab();

        initHeroEntrance();

        initHeroParallax();

        initCtaOrbitalSystem();

        initHeaderScroll();

        updateFooterYear();

        secureExternalLinks();

        initImageHandling();

        initReducedMotion();

        initGlobalKeyboard();

        initCustomCursor();

        initMagneticButtons();

        refreshIcons();
    };


    /* =========================================================
       31. START
       ========================================================= */

    if (
        document.readyState ===
        "loading"
    ) {
        document.addEventListener(
            "DOMContentLoaded",
            init,
            {
                once: true
            }
        );
    } else {
        init();
    }

})();