/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    flight: {

        category: "DATA ANALYSIS & MACHINE LEARNING",

        title:
            "Flight Delay Prediction and Operational Insights",

        description:
            "A data analysis and machine learning project using 539,747 historical flight records to understand flight delays, cancellations, airline performance, airport patterns, route-level trends and operational factors affecting delays.",

        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "SQL",
            "Scikit-learn",
            "Random Forest",
            "Data Visualization"
        ],

        details:
            "The project involved data cleaning, exploratory data analysis, SQL-based analysis, business insights and machine learning. The analysis focused on identifying operational patterns associated with flight delays and understanding airline and airport-level trends.",

        stats: [
            {
                value: "539,747",
                label: "Flight Records"
            },
            {
                value: "18.79%",
                label: "Observed Delay Rate"
            },
            {
                value: "0.6368",
                label: "Random Forest ROC-AUC"
            }
        ],

        github:
            "https://github.com/sakharesamiksha756-glitch"

    },


    insurance: {

        category: "RISK & FRAUD ANALYTICS",

        title:
            "Insurance Claims Analysis for Risk & Fraud Detection",

        description:
            "A data analytics project focused on analyzing insurance claims to identify fraud patterns, risk factors and suspicious claim characteristics using Python, SQL and Power BI.",

        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "SQL",
            "SQLite",
            "Power BI",
            "Matplotlib"
        ],

        details:
            "The project analyzed 15,420 insurance claim records. Data was cleaned and transformed using Python and Pandas, followed by exploratory analysis and SQL-based fraud analysis. A Power BI dashboard was developed to present key KPIs, fraud distribution and risk patterns for business-oriented analysis.",

        stats: [
            {
                value: "15,420",
                label: "Total Claims"
            },
            {
                value: "923",
                label: "Fraud Claims"
            },
            {
                value: "5.99%",
                label: "Fraud Rate"
            }
        ],

        insights: [
            "Vehicle category fraud rates varied across Utility, Sedan and Sport categories.",
            "Rural claims showed a higher observed fraud rate than Urban claims.",
            "Policy Holder fault showed a higher observed fraud rate than Third Party fault.",
            "Younger policyholders showed higher observed fraud rates in the analyzed dataset.",
            "The analysis identifies associations and patterns; it does not establish causal relationships."
        ],

        github:
            "https://github.com/sakharesamiksha756-glitch/Insurance_Claims_Analysis",

        dashboard:
            "images/dashboard_page1.png"

    }

};


/* =========================================================
   SHOW PROJECT
========================================================= */

function showProject(projectName) {

    const project = projectData[projectName];

    if (!project) {

        console.error(
            "Project information not found:",
            projectName
        );

        return;

    }


    const modal =
        document.getElementById("project-modal");

    const modalContent =
        document.getElementById("modal-content");


    if (!modal || !modalContent) {

        console.error(
            "Project modal elements not found."
        );

        return;

    }


    let statsHTML = "";

    if (project.stats) {

        statsHTML = `
            <div class="modal-stats">

                ${project.stats.map(stat => `

                    <div class="modal-stat">

                        <strong>
                            ${stat.value}
                        </strong>

                        <span>
                            ${stat.label}
                        </span>

                    </div>

                `).join("")}

            </div>
        `;

    }


    let technologiesHTML = "";

    if (project.technologies) {

        technologiesHTML = `
            <div class="modal-tech">

                ${project.technologies.map(technology => `

                    <span>
                        ${technology}
                    </span>

                `).join("")}

            </div>
        `;

    }


    let insightsHTML = "";

    if (project.insights) {

        insightsHTML = `

            <h3>
                Key Insights
            </h3>

            <ul class="modal-insights">

                ${project.insights.map(insight => `

                    <li>
                        ${insight}
                    </li>

                `).join("")}

            </ul>

        `;

    }


    let dashboardHTML = "";

    if (project.dashboard) {

        dashboardHTML = `

            <h3>
                Dashboard Preview
            </h3>

            <div class="modal-dashboard">

                <img
                    src="${project.dashboard}"
                    alt="${project.title} Power BI Dashboard"
                >

            </div>

        `;

    }


    modalContent.innerHTML = `

        <button
            class="close-modal"
            onclick="closeProject()"
            aria-label="Close project details"
        >
            ×
        </button>


        <p class="modal-project-category">
            ${project.category}
        </p>


        <h2 id="modal-title">
            ${project.title}
        </h2>


        <p>
            ${project.description}
        </p>


        ${statsHTML}


        <h3>
            Technologies Used
        </h3>

        ${technologiesHTML}


        <h3>
            Project Details
        </h3>

        <p>
            ${project.details}
        </p>


        ${insightsHTML}


        ${dashboardHTML}


        <div class="modal-links">

            <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-link"
            >
                View on GitHub →
            </a>

        </div>

    `;


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

    const modal =
        document.getElementById("project-modal");


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById("project-modal");


        if (
            modal &&
            event.target === modal
        ) {

            closeProject();

        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );


            const isOpen =
                navLinks.classList.contains(
                    "active"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            menuToggle.textContent =
                isOpen ? "✕" : "☰";

        }
    );


    const links =
        navLinks.querySelectorAll(
            ".nav-link"
        );


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.textContent =
                        "☰";

                }
            );

        }
    );

}


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle =
    document.getElementById(
        "theme-toggle"
    );


if (themeToggle) {

    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-theme"
        );

        themeToggle.textContent =
            "🌙";

    }


    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-theme"
            );


            const isLight =
                document.body.classList.contains(
                    "light-theme"
                );


            localStorage.setItem(
                "portfolio-theme",
                isLight ? "light" : "dark"
            );


            themeToggle.textContent =
                isLight ? "🌙" : "☀️";

        }
    );

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );

const formMessage =
    document.getElementById(
        "form-message"
    );


if (contactForm && formMessage) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            if (!name) {

                formMessage.textContent =
                    "Please enter your name.";

                return;

            }


            formMessage.textContent =
                "Thank you! Your message has been prepared. Connect with me through LinkedIn or GitHub.";

            contactForm.reset();

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 140;

                const sectionHeight =
                    section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                        sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navItems.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================================
   MODAL DASHBOARD STYLING
========================================================= */

const modalStyle =
    document.createElement("style");

modalStyle.textContent = `

    .modal-insights {
        margin-top: 10px;
        padding-left: 20px;
    }

    .modal-insights li {
        color: var(--text-secondary);
        font-size: 0.88rem;
        line-height: 1.7;
        margin-bottom: 8px;
    }

    .modal-dashboard {
        margin-top: 15px;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid var(--border);
    }

    .modal-dashboard img {
        width: 100%;
        display: block;
    }

`;

document.head.appendChild(
    modalStyle
);


/* =========================================================
   PAGE LOAD
========================================================= */

console.log(
    "Samiksha Sakhare Portfolio loaded successfully."
);