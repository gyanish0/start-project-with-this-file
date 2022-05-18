import React from "react";
import GitProfile from "@arifszn/gitprofile";
import "@arifszn/gitprofile/dist/style.css";
// gitprofile.config.js
import Page from "../../../components/Page";
const config = {
  github: {
    username: "gyanish0", // Your GitHub org/user name. (Required)
    sortBy: "stars", // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: "gyanish-shrivastava-153582137",
    twitter: "srivastavgyani1",
    facebook: "gyanishanurag",
    website: "https://gyanish.netlify.app/",
    phone: "+917784855635",
    email: "srivastavagyanish@gmail.com",
    whatsapp: "https://wa.me/7784855635",
  },
  skills: [
    "JavaScript",
    "React.js",
    "Material UI",
    "HTML5",
    "CSS3",
    "React Native",
    "Figma",
  ],
  experiences: [
    {
      company: "Mobiloitte Technology",
      position: "Software Trainee",
      from: "October 2021",
      to: "March 2022",
    },
    {
      company: "Luminoguru Pvt. Ltd.",
      position: "Associate Software Engineer",
      from: "April 2022",
      to: "Present",
    },
  ],
  education: [
    {
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      degree: "B.Tech",
      from: "2017",
      to: "2021",
    },
    {
      institution: "Sri Krishna S S Inter College",
      degree: "Higher Secondary Certificate",
      from: "2015",
      to: "2017",
    },
    {
      institution: "Gyan Prakash Inter College",
      degree: "Secondary School Certificate",
      from: "2013",
      to: "2015",
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: "dev", // medium | dev
    username: "gyanish0",
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id
    id: "", // UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: "",
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: "light",

    // Hides the theme change switch
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "procyon",
    ],

    // Custom theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem",
    },
  },
};
const GitPort = () => {
  return (
    <Page title="GitHub | Home">
      <div>
        <GitProfile config={config} />
      </div>
    </Page>
  );
};

export default GitPort;
