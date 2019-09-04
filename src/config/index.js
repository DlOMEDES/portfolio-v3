module.exports = {
  siteTitle: "Diomedes Lajara | Software Developer",
  siteDescription: `I'm a Software Developer living in beautiful Philadelphia. I specialize in building high-quality frontend interfaces for websites and applications.`,
  iDO: `I build things for the web.`,
  siteKeywords:
    "Diomedes Lajara, Diomedes, Lajara, dlomedes, software, developer, front-end, web developer, javascript",
  siteUrl: "https://diomedes.site",
  siteLanguage: "en_US",

  // googleVerification: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk",

  name: "Diomedes Lajara",
  location: "Philadelphia, PA",
  email: "diomedes.lajara@gmail.com",
  github: "https://github.com/dlomedes/",

  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/dlomedes/",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/diomedeslajara/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/dl_ajara",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "#about",
    },

    {
      name: "Work",
      url: "#work",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ],

  twitterHandle: "@dl_ajara",
  // googleAnalyticsID: "UA-45666519-2",

  navHeight: 100,

  // greenColor: "#64ffda",
  // navyColor: "#0a192f",
  // darkNavyColor: "#020c1b",

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
