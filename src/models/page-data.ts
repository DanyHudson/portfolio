export const navLinks = {
    en: [
        { label: 'About me', anchor: 'aboutme' },
        { label: 'Skills', anchor: 'skills' },
        { label: 'Projects', anchor: 'projects' },
        { label: 'Contact', anchor: 'contact' },
    ],
    de: [
        { label: 'Über mich', anchor: 'aboutme' },
        { label: 'Fähigkeiten', anchor: 'skills' },
        { label: 'Projekte', anchor : 'projects' },
        { label: 'Kontakt', anchor: 'contact' },
    ]
}

export const sectionNames = {
    en: [
        'About me',
        'Skills',
        'Projects',
        'Contact me',
    ],
    de: [
        'Über mich',
        'Fähigkeiten',
        'Projekte',
        'Kontakt',              
    ]

}

export const aboutMeTypewriter = [
    {
        icon: 'assets/icons/location_icon.svg',
        preText: 'I am',
        typeText: 'located in Hamburg',
    },
    {
        icon: 'assets/icons/remote_icon.svg',
        preText: 'I am',
        typeText: 'open to remote work',
    },
    {
        icon: 'assets/icons/remote_icon.svg',
        preText: 'I am',
        typeText: 'passionate about coding',
    },

];

export const aboutMe = {

    en: `I\’m a frontend developer based in Hamburg with a background in media design.
         I thrive on the challenge of translating a designer\’s vision into functional web experiences.
         I enjoy working in teams as well as independently, sharing ideas and knowledge. 
         I\’m always eager to improve my skills and stay up-to-date with the latest technologies.
          \nLet\’s connect!`,

    de: `Ich bin eine Frontend-Entwicklerin und Mediengestalterin aus Hamburg.
         Es macht mir Spaß Designs so präzise wie möglich in funktionale Web-Erlebnisse umzusetzen.
         Ich arbeite gerne im Team aber auch selbststandig, probiere gerne neue Tools und Frameworks.
        \nLet\‘s connect!
        `

};

export const skills = [
    {
        skillIcons: [
            {
                icon: 'assets/icons/html_icon.svg',
                alt: 'HTML5 Logo',
                skill: 'HTML5',
            },
            {
                icon: 'assets/icons/css_icon.svg',
                alt: 'SCSS Logo',
                skill: 'CSS',
            },
            {
                icon: 'assets/icons/js_icon.svg',
                alt: 'JavaScript Logo',
                skill: 'JavaScript',
            },
            {
                icon: 'assets/icons/ts_icon.svg',
                alt: 'TypeScript Logo',
                skill: 'TypeScript',
            },
            {
                icon: 'assets/icons/ang_icon.svg',
                alt: 'Angular Logo',
                skill: 'Angular',
            },
            {
                icon: 'assets/icons/fb_icon.svg',
                alt: 'Firebase Logo',
                skill: 'Firebase',
            },
            {
                icon: 'assets/icons/md_icon.svg',
                alt: 'Material Design Logo',
                skill: 'Material Design',
            },
            {
                icon: 'assets/icons/scrum_icon.svg',
                alt: 'Scrum Logo',
                skill: 'Scrum',
            },
            {
                icon: 'assets/icons/git_icon.svg',
                alt: 'Git Logo',
                skill: 'Git',
            },
            {
                icon: 'assets/icons/ai_CC_icon.svg',
                alt: 'Adobe Illustrator Logo',
                skill: 'Adobe Illustrator',
            },
            {
                icon: 'assets/icons/ps_CC_icon.svg',
                alt: 'Adobe Photoshop Logo',
                skill: 'Adobe Photoshop',
            },
            {
                icon: 'assets/icons/ac_CC_icon.svg',
                alt: 'Adobe Acrobat Logo',
                skill: 'Adobe Acrobat',
            },

        ],

        learning: [
            {
                claim: {
                    en: 'I am currently learning:',
                    de: 'Aktuell lerne ich:'
                },

                reference: [
                    { icon: 'assets/icons/react_icon.svg', label: 'React' },
                    { icon: 'assets/icons/owl_icon.svg', label: 'OWL' }
                ],

                text: {
                    en: `I am always eager to improve my skills and stay up-to-date with the latest technologies.`,
                    de: `Ständig mit meinen Fähigkeiten up-to-date zu bleiben und neue Technologien zu lernen ist für mich selbstverständlich.`
                },
                link: '',
                linkLabel: ''
            }
        ]
    }
];

export const myProjectTabs = [
    {
        label: 'Join',
        subLabel: 'Kanban App',
        content: [
            {
                headline: {
                    en: `About the project`,
                    de: `Über das Projekt`
                },

                text: {
                    en: `Task manager inspired by the Kanban system.
                         \nMy part: Login and signup form, form validation.
                         This was a group project.
                `,
                    de: `Task Manager inspiriert vom Kanban-System. Erstellen und Organisieren von Aufgaben mit Drag-and-Drop-Funktionen, Zuweisen von Benutzern und Kategorien.
                         Dies war ein Gruppenprojekt.
                `
                }

            },
            {
                headline: {
                    en: `Organising our work process`,
                    de: `Organisation unserer Arbeitsprozesse`,
                },

                text: {
                    en: `Dividing the project into smaller tasks and assigning them to each team member based on strengths and interests. 
                         Use of the Trello Kanban board to track our progress. 
                         Regular communication and collaboration `,
                    de: `Unterteilung des Projekts in kleinere Aufgaben und Zuweisung an jedes Teammitglied basierend auf Stärken und Interessen.
                         Verwendung des Trello-Kanban-Boards, um unsere Prozesse zu organisieren.
                         Regelmäßige Kommunikation und Co-Programming Sessions.
                         `,
                }

            },
            {
                headline: {
                    en: 'Our group work experience',
                    de: 'Unsere Erfahrungen in der Gruppenarbeit'
                },

                text: {
                    en: `Collaboration, teamwork, and problem-solving in a real-world project setting.
                         Communication in real-time colab-sessions with immediate feedback.
                    `,
                    de: `Zusammenarbeit, Teamarbeit und Problemlösung in einem realen Projektumfeld.
                         Kommunikation und direktes Feedback in Real-Time Colab-Sessions.
                    `,
                }
            }
        ],

        icons: [
            { icon: '../assets/icons/js_icon.svg', alt: 'JavaScript logo' },
            { icon: '../assets/icons/css_icon.svg', alt: 'CSS logo' },
            { icon: '../assets/icons/fb_icon.svg', alt: 'Firebase logo' }
        ],

        techNames: ['JavaScript', 'CSS', 'Firebase'],

        projectImage: '../assets/img/join_scrsh.jpg',
        linkLiveTest: 'https://www.dany-hudson.com/Join',
        linkGitHub: 'https://github.com/DanyHudson/Join'
    },

    {
        label: 'Sharky',
        subLabel: 'Game App',
        content: [
            {
                headline: {
                    en: `About the project`,
                    de: `Über das Projekt`
                },
                text: {
                    en: `Simple D2 browser game app.
                         OOP based with collision detection, animation and HTML5 canvas element.
                         Design by Developer Academy.
                         `,
                    de: `Einfaches D2 Browsergame.
                         OOP basiert mit Kollisions-Logik, Animationen und HTML5-Canvas-Element.
                         Design von der Developer Academy.
                        `,
                } 
            },
            {
                headline: {
                    en: `Organising my work process`,
                    de: `Organisation meiner Arbeitsprozesse`
                },
                text: {
                    en: ` Focus on folder structure, hyrarchy of classes and instances.
                          Research for sound effects, applied game mechanics and animation techniques.
                          Git for version control and tracking changes.
                    `,
                    de: `Fokus auf Ordnerstruktur, Hierarchie von Klassen und Instanzen.
                         Recherche für Soundeffekte, angewandte Spielmechaniken und Animationstechniken.
                         Git für Versionskontrolle und Nachverfolgung von Änderungen.
                    `,
                }
            },
            {
                headline: {
                    en: 'What I have learned',
                    de: 'Was ich gelernt habe'
                },

                text: {
                    en: `Thinking in terms of objects and classes.
                         Structuring and refactoring code.
                         Collision detection and animation`,

                    de: `Denkweise in der Logik von Objekten und Klassen.
                         Strukturierung und Refactoring von Code.
                         Kollisionserkennung und Animation.
                         `
                }
            }
        ],

        icons: [
            { icon: '../assets/icons/js_icon.svg', alt: 'JavaScript logo' },
            { icon: '../assets/icons/css_icon.svg', alt: 'CSS logo' },
            { icon: '../assets/icons/html_icon.svg', alt: 'HTML logo' }
        ],

        techNames: ['Angular', 'TypeScript', 'Firebase'],

        projectImage: '../assets/img/sharky_scrsh.jpg',
        linkLiveTest: 'https://www.dany-hudson.com/Sharky',
        linkGitHub: 'https://github.com/DanyHudson/Sharkie-a-2d-game'
    },
   
    {
        label: 'My GitHub',
        subLabel: 'My GitHub',
        content: [
            {
                headline: {
                    en: 'Ongoing projects',
                    de: 'Laufende Projektes'
                },

                text: {
                    en: `Come check out my GitHub for more projects and code samples! 
                         I am continuously working on new projects to further develop my skills and explore new technologies.
                `,
                    de: `Schau dir mein GitHub für weitere Projekte und Codebeispiele an! 
                         Ich arbeite ständig an neuen Projekten, um meine Fähigkeiten weiterzuentwickeln und neue Technologien zu erkunden.
                `
                }

            },
            

      
        ],

        icons: [
            { icon: '../assets/icons/html_icon.svg', alt: 'HTML logo' },
            { icon: '../assets/icons/css_icon.svg', alt: 'CSS logo' },
            { icon: '../assets/icons/js_icon.svg', alt: 'JavaScript logo' },
            { icon: '../assets/icons/ts_icon.svg', alt: 'TypeScript logo' },
            { icon: '../assets/icons/ang_icon.svg', alt: 'Angular logo' },
            { icon: '../assets/icons/fb_icon.svg', alt: 'Firebase logo' },

        ],

        techNames: ['JavaScript', 'CSS', 'HTML'],

        projectImage: '../assets/img/github.jpg',
        linkLiveTest: '',
        linkGitHub: 'https://github.com/DanyHudson'
    },

];

export const mainClaim = {
    en: 'Need a teamplayer? Here\'s what my colleagues said about me',
    de: 'Was Kollegen über mich sagen'
};

export const mainClaimResp = {
    en: 'Need a teamplayer?',
    de: 'Teamplayer gesucht?'
};

export const mainSubClaimResp = {
    en: 'Here\'s what my colleagues said about me',
    de: 'Was Kollegen über mich sagen'
};

export const testimonials = [
    {
        claim: 'Victor Vaal',
        reference: 'Join',
        text: {
            en: `You have a way to approach tasks with great attention to detail. If there is a challenge, you keep working until you find a solution. This makes you a very valuable and reliable team member.`,
            de: `Du hast so eine Art, Aufgaben mit großer Sorgfalt anzugehen, wenn du auf ein Problem triffst bohrst du so lange bis du eine Lösung hast. Das macht dich zu einem sehr wertvollen und zuverlässigen Teammitglied.`
        },
        link: '',
        linkLabel: ''
    },
    {
        claim: `Anna Lena Westermann`,
        reference: 'Firmen CI Projekt',
        text: {
            en: `I really enjoyed working with Dany on the development of the new company CI.
                 The creative exchange of ideas, the decision processes and finally bringing our designs to life was amazing.
                 I could always rely on her founded input and I have learned a lot from her. 
`,
            de: `Die gemeinsame Entwicklung der neuen Firmen CI im Grafik-Team hat viel Spaß gemacht.
                 Ideenfindung, Entscheidungsprozesse und Umsetzung - Dany hat mir viel beigenbracht und war immer für eine Austausch ansprechbar.`
        },
        link: 'https://linkedin.com/in/anna-lena-westermann/',
        linkLabel: 'View LinkedIn'
    },
    {
        claim: 'Thomas Bopzin',
        reference: 'diverse Holzarbeiten',
        text: {
            en: `Danys patient persistence, even when things get tough, is inspiring. Her active input in creating plans and finding solutions has greatly advanced our projects, and her ability to follow instructions has been excellent. I look forward to the next project together.`,
            de: `Danys geduldige Ausdauer, auch wenn es anstrengend wird ziehen einen mit. 
                 Ihr aktiver Input bei der Erstellung von Plänen und finden von Lösungen haben unsere Projekte gut vorran gebracht, aber auch Anleitungen hat sie sehr gut umgesetz. Ich freue mich schon auf das nächste Projekt`
        },
        link: '',
        linkLabel: ''
    }

];

export const contactInfo = [
    {
        text: {
            en: `Feel free to reach out! You can contact me via contact form or LinkedIn.
                 I am always open to new opportunities and collaborations.`,
            de: `Nimm Kontakt auf! Über das Kontaktformular oder LinkedIn kannst du mich erreichen.
                 Ich bin immer offen für neue Möglichkeiten und Zusammenarbeit.`,
        },

        email: `mail@dany-hudson.com`,
        tel: `01570 3034009`
    },
];

export const contactFormText = {
    en: {
        nameLabel: 'your name',
        nameRequired: 'your name is required',
        emailLabel: 'your email',
        emailRequired: 'your email is required',
        emailInvalid: 'please enter a valid email address',
        messageLabel: 'your message',
        messageRequired: 'your message is required',
        requiredFields: '* required fields',
        privacy: {
            beforeLink: `I've read the `,
            linkText: `privacy policy`,
            afterLink: ` and agree to the processing of my data as outlined.`,
            error: 'Please accept the privacy policy.',
        },
        submit: 'Send',
    },
    de: {
        nameLabel: 'dein Name',
        nameRequired: 'Dein Name ist erforderlich',
        emailLabel: 'deine E-Mail',
        emailRequired: 'Deine E-Mail ist erforderlich',
        emailInvalid: 'Bitte gib eine gueltige E-Mail-Adresse ein',
        messageLabel: 'deine Nachricht',
        messageRequired: 'Deine Nachricht ist erforderlich',
        requiredFields: '* Pflichtfelder',
        privacy: {
            beforeLink: `Ich habe die `,
            linkText: `Datenschutzerklaerung`,
            afterLink: ` gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.`,
            error: 'Bitte akzeptiere die Datenschutzerklaerung.',
        },
        submit: 'Senden',
    },
};

export const successMessages = {
    en: 'Your message has been sent successfully!',
    de: 'Deine Nachricht wurde erfolgreich gesendet!'
}
