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
        icon: 'assets/icons/location_icon.svg',
        preText: 'I love',
        typeText: 'drinking coffee',
    },
    {
        icon: 'assets/icons/remote_icon.svg',
        preText: 'I am',
        typeText: 'passionate about coding',
    },

];


export const aboutMe = {

    en: `I’m a frontend developer based in Hamburg with a background in media design. My journey into web development began with a curiosity to understand how websites work and a determination to bring creative ideas to life.
         While I wouldn’t call myself a natural-born coder, I am persistent and resilient and I thrive on the challenge of finding solutions. My attention to detail means I care deeply about making designs look just right.
         I enjoy working in teams, exchanging ideas, and learning from others. I find satisfaction in translating a designer’s vision into functional, pixel-perfect web experiences.
         I’m always eager to improve my skills and contribute to meaningful projects. If you’re looking for a frontend developer who is dedicated, detail-oriented, and motivated by problem-solving, let’s connect!`,
    de: `Ich bin ein Frontend-Entwickler mit Sitz in Hamburg, mit einem Hintergrund in Mediendesign und einem starken Antrieb, Probleme durch Code zu lösen. Mein Weg in die Webentwicklung begann mit der Neugier, zu verstehen, wie Websites funktionieren, und dem Willen, kreative Ideen zum Leben zu erwecken – selbst wenn die Lernkurve steil ist.
         Obwohl ich mich nicht als geborenen Programmierer bezeichnen würde, bin ich hartnäckig und widerstandsfähig. Ich gedeihe bei der Herausforderung, Lösungen zu finden, und gebe selten auf, bis ich eine Lösung gefunden habe. Meine Liebe zum Detail bedeutet, dass mir die Gestaltung von Designs sehr wichtig ist, selbst wenn es zusätzliche Zeit und Mühe erfordert.
         Ich arbeite gerne im Team, tausche Ideen aus und lerne von anderen. Meine Erfahrung als Mediendesigner hat mir den Wert von Zusammenarbeit und klarer Kommunikation vermittelt. Heutzutage finde ich Zufriedenheit darin, die Vision eines Designers in funktionale, pixelgenaue Web-Erlebnisse umzusetzen.
         Ich bin immer bestrebt, meine Fähigkeiten zu verbessern und zu bedeutungsvollen Projekten beizutragen. Wenn Sie nach einem Frontend-Entwickler suchen, der engagiert, detailorientiert und problemlösungsorientiert ist, lassen Sie uns verbinden!`

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
                skill: 'Firebbnase',
            },
            {
                icon: 'assets/icons/md_icon.svg',
                alt: 'Material Design Logo',
                skill: 'Material Design',
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
                    { icon: 'assets/icons/owl_icon.svg', label: 'OWL' },
                    { icon: 'assets/icons/owl_icon.svg', label: 'OWL' }
                ],

                text: {
                    en: `Show that you are motivated to continually improve your skills, 
                        implement innovative solutions and stay abreast of new technologies.`,
                    de: `Zeige, dass du motiviert bist, deine Fähigkeiten ständig zu verbessern, 
                        innovative Lösungen umzusetzen und über neue Technologien auf dem Laufenden zu bleiben.`
                },
                link: '',
                linkLabel: ''
            }
        ]
    }
];

export const myProjectTabs = [
    {
        label: 'DA Bubble',
        subLabel: 'Community App',
        content: [
            {
                headline: {
                    en: 'About the project',
                    de: 'Ueber das Projekt'
                },
                text: {
                    en: `Content bullet 1 lorem ipsum dolor elit sed ut labore et dolore,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    `,
                    de: `Content bullet 1 lorem ipsum dolor elit sed ut labore et dolore,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    `,
                },
            },
            {
                headline: {
                    en: 'How I have organised my work process',
                    de: 'Wie ich meinen Arbeitsprozess organisiert habe'
                },
                text: {
                    en: 'Content bullet 2 lorem ipsum dolor elit sed ut labore et dolore',
                    de: 'Content bullet 2 lorem ipsum dolor elit sed ut labore et dolore',
                }
            },
            {
                headline: {
                    en: 'My group work experience',
                    de: 'Meine Erfahrungen in der Gruppenarbeit'
                },
                text: {
                    en: 'Content bullet 3 lorem ipsum dolor elit sed ut labore et dolore',
                    de: 'Content bullet 3 lorem ipsum dolor elit sed ut labore et dolore',
                }
            }
        ],

        icons: [
            { icon: 'assets/icons/ang_icon.svg', alt: 'Angular logo' },
            { icon: 'assets/icons/ts_icon.svg', alt: 'TypeScript logo' },
            { icon: 'assets/icons/fb_icon.svg', alt: 'Firebase logo' }
        ],

        techNames: ['Angular', 'TypeScript', 'Firebase'],

        projectImage: '../assets/img/da_bubble_scrsh.jpg',
        linkLiveTest: '',
        linkGitHub: ''
    },

    {
        label: 'Sharky',
        subLabel: 'Game App',
        content: [
            {
                headline: {
                    en: 'About the project',
                    de: 'Ueber das Projekt'
                },
                text: {
                    en: `Content bullet 1 lorem ipsum dolor elit sed ut labore et dolore,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                `,
                    de: `Content bullet 1 lorem ipsum dolor elit sed ut labore et dolore,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                `,
                }
            },
            {
                headline: {
                    en: 'How I have organised my work process',
                    de: 'Wie ich meinen Arbeitsprozess organisiert habe'
                },
                text: {
                    en: 'Content bullet 2 lorem ipsum dolor elit sed ut labore et dolore',
                    de: 'Content bullet 2 lorem ipsum dolor elit sed ut labore et dolore',
                }
            },
            {
                headline: {
                    en: 'What I have learned',
                    de: 'Was ich gelernt habe'
                },

                text: {
                    en: `As someone who is always trying to learn new technologies, 
                        you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. 
                        Give details, such as the name of the framework or language you mean.`,
                    de: `Als jemand, der immer versucht, neue Technologien zu lernen`
                }
            }
        ],

        icons: [
            { icon: '../assets/icons/angular_icon.svg', alt: 'Angular logo' },
            { icon: '../assets/icons/ts_icon.svg', alt: 'TypeScript logo' },
            { icon: '../assets/icons/fb_icon.svg', alt: 'Firebase logo' }
        ],

        techNames: ['Angular', 'TypeScript', 'Firebase'],

        projectImage: '../assets/img/sharky_scrsh.jpg',
        linkLiveTest: '',
        linkGitHub: ''
    },

    {
        label: 'Join',
        subLabel: 'Kanban App',
        content: [
            {
                headline: {
                    en: 'About the project',
                    de: 'Ueber das Projekt'
                },

                text: {
                    en: `Content bullet 1 lorem ipsum dolor elit sed ut labore et dolore,
                         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                `,
                    de: `Content bullet 1 lorem ipsum dolor elit sed ut labore et dolore,`
                }

            },
            {
                headline: {
                    en: 'How I have organised my work process',
                    de: 'Wie ich meinen Arbeitsprozess organisiert habe',
                },

                text: {
                    en: 'Content bullet 2 lorem ipsum dolor elit sed ut labore et dolore',
                    de: 'Content bullet 2 lorem ipsum dolor elit sed ut labore et dolore',
                }

            },
            {
                headline: {
                    en: 'My group work experience',
                    de: 'Meine Erfahrungen in der Gruppenarbeit'
                },

                text: {
                    en: 'Content bullet 3 lorem ipsum dolor elit sed ut labore et dolore',
                    de: 'Content bullet 3 lorem ipsum dolor elit sed ut labore et dolore',
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
        linkLiveTest: '',
        linkGitHub: ''
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
        claim: 'Max Mustermann',
        reference: 'example project',
        text: {
            en: 'Working with you was a pleasure. You always brought creative solutions to the table.',
            de: 'Die Zusammenarbeit mit Ihnen war eine Freude. Sie haben immer kreative Lösungen auf den Tisch gebracht.'
        },
        link: 'https://linkedin.com/in/janedoe',
        linkLabel: 'View LinkedIn'
    },
    {
        claim: 'Tina Tester',
        reference: 'example project',
        text: {
            en: 'Working with you was a pleasure. You always brought creative solutions to the table.',
            de: 'Die Zusammenarbeit mit Ihnen war eine Freude. Sie haben immer kreative Lösungen auf den Tisch gebracht.'
        },
        link: 'https://linkedin.com/in/janedoe',
        linkLabel: 'View LinkedIn'
    },
    {
        claim: 'Eugenia Example',
        reference: 'example project',
        text: {
            en: 'Working with you was a pleasure. You always brought creative solutions to the table.',
            de: 'Die Zusammenarbeit mit Ihnen war eine Freude. Sie haben immer kreative Lösungen auf den Tisch gebracht.'
        },
        link: 'https://linkedin.com/in/janedoe',
        linkLabel: 'View LinkedIn'
    },
];

export const contactInfo = [
    {
        text: {
            en: `I am open to new opportunities and collaborations. 
                 Feel free to reach out to me via the contact form or connect with me on LinkedIn.`,
            de: `Ich bin offen für neue Möglichkeiten und Kooperationen.
                 Zögern Sie nicht, mich über das Kontaktformular zu erreichen oder sich mit mir auf LinkedIn zu vernetzen.`,
        },

        email: 'hudson.developer@gmail.com',
        tel: '0157 123 456 68'
    },
];

export const successMessages = {
    en: 'Your message has been sent successfully!',
    de: 'Deine Nachricht wurde erfolgreich gesendet!'
}