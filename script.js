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
         * Resume file does not currently need to exist.
         * Keeping this empty makes the UI use "Request Resume".
         */
        resume: "",

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
            value: "",
            fallback: "Projects"
        },

        technologies: {
            value: "",
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
                name: "Responsive Design",
                icon: "smartphone",
                description: "Mobile-first layouts that adapt across screen sizes.",
                level: "Core"
            },
            {
                name: "UI/UX",
                icon: "layout-grid",
                description: "Clean interfaces focused on clarity, usability and experience.",
                level: "Design"
            },
            {
                name: "Accessibility",
                icon: "accessibility",
                description: "Inclusive interfaces built with accessible web practices.",
                level: "Quality"
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
                description: "Learning programming fundamentals and practical development.",
                level: "Exploring"
            }
        ],

        tools: [
            {
                name: "Git",
                icon: "git-branch",
                description: "Track changes and manage development workflows.",
                level: "Version Control"
            },
            {
                name: "GitHub",
                icon: "github",
                description: "Repository management, project hosting and version control.",
                level: "Collaboration"
            },
            {
                name: "VS Code",
                icon: "code",
                description: "Primary environment for writing and managing code.",
                level: "Development"
            },
            {
                name: "Chrome DevTools",
                icon: "bug",
                description: "Inspect, debug and optimize web experiences.",
                level: "Debugging"
            },
            {
                name: "Figma",
                icon: "pen-tool",
                description: "Explore interface layouts, visual concepts and design ideas.",
                level: "Design"
            },
            {
                name: "Vercel",
                icon: "triangle",
                description: "Deploy and publish modern web projects.",
                level: "Deployment"
            }
        ],

        learning: [
            {
                name: "Advanced JavaScript",
                icon: "layers",
                description: "Deepening understanding of modern JavaScript and application logic.",
                level: "Exploring"
            },
            {
                name: "AI & Generative AI",
                icon: "brain-circuit",
                description: "Exploring intelligent tools and AI-powered digital experiences.",
                level: "Exploring"
            },
            {
                name: "Frontend Architecture",
                icon: "layout-template",
                description: "Learning how to structure scalable and maintainable interfaces.",
                level: "Exploring"
            },
            {
                name: "Performance",
                icon: "gauge",
                description: "Understanding faster loading, efficient rendering and web performance.",
                level: "Improving"
            },
            {
                name: "Product Development",
                icon: "rocket",
                description: "Learning to turn ideas into useful and complete digital products.",
                level: "Exploring"
            },
            {
                name: "Modern Web Technologies",
                icon: "globe",
                description: "Continuously exploring new tools, patterns and possibilities on the web.",
                level: "Exploring"
            }
        ]
    };


    /* =========================================================
       04. JOURNEY DATA
       ========================================================= */

    const journeyData = [
        {
            year: "The Beginning",
            title: "Where curiosity became direction",
            description:
                "It started with a simple curiosity about how digital experiences are built. Exploring the web became more than learning technology — it became a way to turn ideas into something real."
        },
        {
            year: "Learning",
            title: "Building the fundamentals",
            description:
                "HTML, CSS, JavaScript, design, and countless experiments became the foundation. Every project brought a new lesson, and every mistake became part of the process."
        },
        {
            year: "Building",
            title: "From experiments to real projects",
            description:
                "The focus shifted from simply writing code to creating complete experiences — thoughtful interfaces, useful interactions, responsive systems, and projects built with purpose."
        },
        {
            year: "KRIXORA",
            title: "A name for the work",
            description:
                "KRIXORA became the identity behind the journey — a space to combine development, design, experimentation, and ideas into digital experiences that feel intentional."
        },
        {
            year: "Now",
            title: "Still building. Still evolving.",
            description:
                "Today, the focus is on creating better products, exploring AI and modern web technologies, refining the craft, and turning ambitious ideas into polished digital experiences."
        },
        {
            year: "What's Next",
            title: "The journey is still unfolding",
            description:
                "There is no final destination. The next chapter is about deeper engineering, smarter products, meaningful experimentation, and building things that are worth remembering."
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
            name: "VS Code",
            icon: "code",
            description: "Development environment"
        },
        {
            name: "Vercel",
            icon: "triangle",
            description: "Project deployment"
        }
    ];


    /* =========================================================
       06. PROJECT DATA
       ========================================================= */

    const projectsData = {
        lifeflow: {
            name: "LifeFlow AI",
            label: "Featured Project",
            description:
                "AI Productivity & Life Architecture Platform. A modern productivity workspace designed to organize tasks, manage goals, track habits, plan daily activities, monitor productivity, and bring intelligent tools into one focused system.",
            url: "https://life-flow-ai-app.vercel.app",
            github: PROFILE.github,
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "PWA"
            ],
            features: [
                "Smart Task Management",
                "Smart Daily Planner",
                "Pomodoro Focus Timer",
                "Calendar & Scheduling",
                "Goals & Milestones",
                "Habit Tracking",
                "Productivity Analytics",
                "AI Assistant Hub"
            ]
        },

        finpulse: {
            name: "FinPulse OS",
            label: "Featured Project",
            description:
                "Personal Finance & Analytics Dashboard. A financial management interface designed to help users understand and organize their finances through dashboards, transactions, budgets, savings, spending insights, and financial analytics.",
            url: "https://krixora.github.io/finpulse-os/",
            github: PROFILE.github,
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript"
            ],
            features: [
                "Financial Dashboard",
                "Income & Expense Tracking",
                "Transaction Management",
                "Budget Planning",
                "Savings Goals",
                "Spending Insights",
                "Financial Analytics",
                "Financial Health Tracking",
                "CSV Export"
            ]
        },

        coursefinder: {
            name: "Course Finder",
            label: "Featured Project",
            description:
                "Professional Course Discovery Platform. A focused course discovery platform designed to help users explore professional learning opportunities through a simple search and filtering experience.",
            url: "https://rad-dolphin-affc57.netlify.app/",
            github: "",
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript"
            ],
            features: [
                "Course Search",
                "Category Filtering",
                "Professional Course Discovery",
                "Simple User Interface",
                "Responsive Design"
            ]
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
                    element.textContent =
                        config.value;
                } else {
                    element.textContent =
                        config.fallback;
                }
            }
        );
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

                        <span class="timeline-year">
                            ${escapeHTML(item.year)}
                        </span>

                        <h3 class="timeline-title">
                            ${escapeHTML(item.title)}
                        </h3>

                        <p class="timeline-description">
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
         * button on the LifeFlow card in index.html).
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

       No backend/form service is configured. This form
       validates locally and is honest about that — it never
       claims an email was sent (see handleContactSubmit).

       TO CONNECT A REAL SUBMISSION METHOD, pick one and wire
       it into handleContactSubmit below:

       - Formspree (formspree.io): POST formData to your
         form endpoint URL (e.g. https://formspree.io/f/xxxxx).
         No secret key needed client-side.
       - Netlify Forms: add `data-netlify="true"` and a hidden
         `form-name` input to the <form> in index.html; Netlify
         handles the rest at deploy time, no JS changes needed.
       - EmailJS: requires a public key + service/template IDs
         (safe to expose client-side by design) from your
         EmailJS account.
       - A custom backend/serverless function: POST formData to
         your own endpoint; keep any real secret server-side,
         never in this file.

       None of the above requires a private API key in this
       file. If a real key or secret is ever needed, it must be
       proxied through a server — never placed here.
       ========================================================= */

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
            "Demo form — email integration is not connected yet.",
            "info"
        );


        /*
         * IMPORTANT:
         *
         * This form does NOT pretend to send an email.
         *
         * The short timeout only provides a realistic
         * loading interaction while keeping the behavior honest.
         */
        await new Promise((resolve) => {
            window.setTimeout(
                resolve,
                prefersReducedMotion()
                    ? 0
                    : 500
            );
        });


        setFormLoading(false);

        setFormStatus(
            "Your message was validated locally. Email integration is coming soon.",
            "success"
        );

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

    const init = () => {

        configureProfileLinks();

        renderStats();

        renderJourney();

        renderSkills();

        renderToolbox();

        initSkillTabs();

        initMobileMenu();

        initTheme();

        initActiveNavigation();

        initProjectModal();

        initContactForm();

        initSmoothAnchors();

        initScrollReveal();

        initScrollProgress();

        initBackToTopFab();

        initHeroParallax();

        initCtaOrbitalSystem();

        initHeaderScroll();

        updateFooterYear();

        renderAge();

        secureExternalLinks();

        initImageHandling();

        initReducedMotion();

        initGlobalKeyboard();

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