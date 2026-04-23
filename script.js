const dashboardData = {
    summary:
        "This dashboard turns breach research into a more accessible case-study experience. It highlights incident flow, attack themes, business impact, lessons learned, and defensive recommendations in a format that is easier to review than a static document.",

    metrics: [
        { title: "Case Study Type", value: "Major Platform Breach" },
        { title: "Primary Focus", value: "Incident Analysis" },
        { title: "Portfolio Angle", value: "Research To Product Thinking" },
        { title: "Use Case", value: "Security Education And Awareness" }
    ],

    timeline: [
        {
            title: "Pre-Incident Weaknesses",
            text: "The case study highlights platform weaknesses and the conditions that made the environment vulnerable to compromise."
        },
        {
            title: "Attack Execution",
            text: "An attacker or attacker group exploited weaknesses to gain access or expose sensitive information."
        },
        {
            title: "Public Discovery And Response",
            text: "The incident became known, requiring technical response, communication, containment, and trust repair."
        },
        {
            title: "Long-Term Lessons",
            text: "The breach became a reference point for stronger password handling, response planning, and security maturity."
        }
    ],

    attackFactors: [
        {
            title: "Weakness Exposure",
            text: "The research centers on the vulnerabilities or security gaps that made the incident possible."
        },
        {
            title: "Attack Path",
            text: "The study examines how attacker actions translated into measurable security and business impact."
        },
        {
            title: "Trust And Reputation Risk",
            text: "Security failures in major platforms affect both technical systems and public trust."
        }
    ],

    impact: [
        {
            title: "User Impact",
            text: "Users may face account risk, credential concerns, and reduced confidence in the platform."
        },
        {
            title: "Business Impact",
            text: "A breach can trigger reputational damage, operational disruption, and the need for expensive remediation."
        },
        {
            title: "Security Investment Pressure",
            text: "Incidents often force organizations to raise security maturity expectations and defensive spending."
        }
    ],

    lessons: [
        {
            title: "Security Weaknesses Become Business Problems",
            text: "A technical vulnerability can rapidly become a reputational and operational crisis."
        },
        {
            title: "Detection And Response Matter",
            text: "Organizations need stronger monitoring, triage, escalation, and communication readiness."
        },
        {
            title: "User Protection Must Stay Central",
            text: "Security strategy must consider the user experience, account safety, and trust recovery."
        }
    ],

    defenses: [
        {
            title: "Access Protection",
            text: "Strengthen account security controls, authentication practices, and recovery processes."
        },
        {
            title: "Monitoring And Detection",
            text: "Expand anomaly detection, logging quality, and faster incident triage workflows."
        },
        {
            title: "Secure Engineering",
            text: "Review application design, patch known weaknesses, and reduce avoidable exposure."
        },
        {
            title: "Security Awareness",
            text: "Use breach research to train users and internal teams on better security habits."
        }
    ],

    quiz: [
        {
            question: "What is the main value of breach case-study analysis?",
            options: [
                "It only helps with marketing",
                "It helps organizations translate incidents into stronger defenses",
                "It replaces technical monitoring",
                "It eliminates the need for user education"
            ],
            answer: 1
        },
        {
            question: "Why is user trust important in a breach case study?",
            options: [
                "Because trust damage can outlast the technical incident",
                "Because users do not matter in platform security",
                "Because branding is the only issue",
                "Because trust has no effect on business outcomes"
            ],
            answer: 0
        },
        {
            question: "Which area is most aligned with defensive improvement?",
            options: [
                "Ignoring response workflows",
                "Reducing monitoring visibility",
                "Improving access protection and incident response",
                "Avoiding lessons learned reviews"
            ],
            answer: 2
        }
    ]
};

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function populateCards(containerId, items, className) {
    const container = document.getElementById(containerId);
    container.innerHTML = items
        .map(item => `
            <article class="${className}">
                <h3>${item.title}</h3>
                <p>${item.text || item.value}</p>
            </article>
        `)
        .join("");
}

function buildMetrics() {
    const metricGrid = document.getElementById("metricGrid");
    metricGrid.innerHTML = dashboardData.metrics
        .map(metric => `
            <article class="metric-card">
                <h3>${metric.title}</h3>
                <p>${metric.value}</p>
            </article>
        `)
        .join("");
}

function buildQuiz() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = dashboardData.quiz
        .map((item, index) => `
            <div class="quiz-question">
                <h3>Question ${index + 1}</h3>
                <p>${item.question}</p>
                ${item.options.map((option, optionIndex) => `
                    <label class="quiz-option">
                        <input type="radio" name="question-${index}" value="${optionIndex}">
                        ${option}
                    </label>
                `).join("")}
            </div>
        `)
        .join("");
}

function scoreQuiz() {
    let score = 0;

    dashboardData.quiz.forEach((question, index) => {
        const selected = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selected && Number(selected.value) === question.answer) {
            score += 1;
        }
    });

    const results = document.getElementById("quizResults");
    results.classList.remove("hidden");
    results.innerHTML = `
        <strong>Score:</strong> ${score} / ${dashboardData.quiz.length}<br>
        <strong>Summary:</strong> This quiz reinforces how breach research can be turned into defensive insight, awareness training, and stronger security planning.
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("summaryText").textContent = dashboardData.summary;

    buildMetrics();
    populateCards("timelineGrid", dashboardData.timeline, "timeline-card");
    populateCards("attackGrid", dashboardData.attackFactors, "info-card");
    populateCards("impactGrid", dashboardData.impact, "info-card");
    populateCards("lessonsGrid", dashboardData.lessons, "info-card");
    populateCards("defenseGrid", dashboardData.defenses, "info-card");
    buildQuiz();

    document.getElementById("submitQuiz").addEventListener("click", scoreQuiz);
});
