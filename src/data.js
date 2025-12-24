import { User, GraduationCap, Briefcase, Code, Heart } from "lucide-react";

export const getPersonalData = (t) => [
    {
        icon: "User",
        subtitle: t("personalData.whoIAm.subtitle"),
        content: t("personalData.whoIAm.content"),
        image: "/profile.PNG",
        color: "blue",
    },
    {
        icon: "GraduationCap",
        subtitle: t("personalData.academicBackground.subtitle"),
        content: t("personalData.academicBackground.content"),
        image: "/education.jpg",
        color: "blue",
    },
    {
        icon: "Briefcase",
        title: t("personalData.experience.title"),
        content: t("personalData.experience.content"),
        image: "/experience.jpg",
        color: "green",
    },
    {
        icon: "Code",
        title: t("personalData.skills.title"),
        subtitle: t("personalData.skills.subtitle"),
        content: t("personalData.skills.content"),
        image: "/skills.jpg",
        color: "orange",
    },
    {
        icon: "Heart",
        title: t("personalData.hobbies.title"),
        subtitle: t("personalData.hobbies.subtitle"),
        content: t("personalData.hobbies.content"),
        image: "/hobbies.jpg",
        color: "pink",
    },
];

export const getWorksData = (t) => [
    {
        name: "readixon",
        images: ["/readixon.png", "/readixon2.png", "/readixon3.png"],
        link: "https://readixon.com",
        techStack: "React, ShadcnUI,Express.js,PostgreSQL",
        description: t("services.readixon"),
    },
    {
        name: "nestforyou",
        images: ["/movieApp.png", "/movieApp2.png", "/movieApp3.png"],
        link: "https://nestforyou.vercel.app/",
        techStack: "React, TailwindCSS,i18n,Firebase",
        description: t("services.nestforyou"),
    },
    {
        name: "athlor",
        images: ["/athlor.png", "/athlor2.png", "/athlor3.png"],
        link: "https://athlorx.com",
        techStack: "React, TailwindCSS,i18n,Firebase",
        description: t("services.athlor"),
    },



];
