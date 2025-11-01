// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'malerbe', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Repositories',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 0, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['malerbe/Encoders_Explained', 'malerbe/Decoders_Explained', 'malerbe/QRT_Challenge'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Website for CPGE students',
          description:
            'This website is both my past personal website and a website still used by dozens of students from my past CPGE to access archives of ressources. ',
          imageUrl:
            'https://raw.githubusercontent.com/malerbe/malerbe.github.io/refs/heads/main/personalwebsitepng.png',
          link: 'https://cpge.loucamalerba.fr',
        },
      ],
    },
  },
  seo: { title: 'Louca Malerba', description: '', imageURL: '' },
  social: {
    linkedin: 'loucamalerba',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.loucamalerba.fr',
    phone: '',
    email: 'louca.malerba@student-cs.fr',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
  'Python',
  'PHP',
  'C++',
  'Data Science',
  'Computer Vision',
  'Medical Imaging',
  'PyTorch',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Seaborn',
  'SQL',
  'Power BI',
  'Git',
  'LaTeX',
  'HTML',
  'CSS',
],

experiences: [
  {
    company: 'GE HealthCare',
    position: 'Apprentice Research Engineer',
    from: 'June 2025',
    to: 'Present',
    companyLink: 'https://www.gehealthcare.com/',
  },
  {
    company: 'GE HealthCare',
    position: 'Machine Learning & Data Science Apprentice',
    from: 'October 2023',
    to: 'October 2025',
    companyLink: 'https://www.gehealthcare.com/',
  },
],

certifications: [
  {
    name: 'Certification AMF',
    body: 'Autorité des marchés financiers (AMF) – France',
    year: 'July 2025',
    link: 'https://www.amf-france.org/',
  },
  {
    name: 'Cambridge Advanced Certificate (C1)',
    body: 'Cambridge University Press & Assessment',
    year: 'July 2019',
    link: 'https://www.cambridgeenglish.org/',
  },
],

educations: [
  {
    institution: 'CentraleSupélec',
    degree: "Master’s Degree (M2) in General Engineering",
    from: '2023',
    to: '2026',
  },
  {
    institution: 'Lycée Jules Ferry',
    degree: 'Classes Préparatoires (CPGE) PTSI/PT*',
    from: '2021',
    to: '2023',
  },
  {
    institution: 'Institution des Chartreux',
    degree: 'Baccalauréat, Physique–Mathématiques',
    from: '2016',
    to: '2021',
  },
  {
    institution: 'Cistercian College Roscrea',
    degree: 'One-year academic exchange (English-speaking), Première equivalent',
    from: '2018',
    to: '2019',
  },
],
  publications: [
    //{
    //  title: 'Publication Title',
    //  conferenceName: '',
    //  journalName: 'Journal Name',
    //  authors: 'John Doe, Jane Smith',
    //  link: 'https://example.com',
    //  description:
    //    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //}
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
