import { User, GraduationCap, Briefcase, Code, Heart } from "lucide-react";

export const getPersonalData = (t) => [
    {
        icon: "User",
        subtitle: t("personalData.whoIAm.subtitle"),
        content: t("personalData.whoIAm.content"),
        image: "/profile.jpg",
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
        techStack: "React, TailwindCSS",
        description: t("services.readixon"),
    },
    {
        name: "nestforyou",
        images: ["/nestforyou.png", "/nestforyou2.png", "/nestforyou3.png"],
        link: "https://nestforyou.com",
        techStack: "React, TailwindCSS",
        description: t("services.nestforyou"),
    },
    {
        name: "movieapp",
        images: ["/movieapp.png", "/movieapp2.png", "/movieapp3.png"],
        link: "https://movieapp.com",
        techStack: "React, TailwindCSS",
        description: t("services.movieapp"),
    },
    {
        name: "weatherapp",
        images: ["/weatherapp.png", "/weatherapp2.png", "/weatherapp3.png"],
        link: "https://weatherapp.com",
        techStack: "React, TailwindCSS",
        description: t("services.weatherapp"),
    },
    {
        name: "taskmanager",
        images: ["/taskmanager.png", "/taskmanager2.png", "/taskmanager3.png"],
        link: "https://taskmanager.com",
        techStack: "React, TailwindCSS",
        description: t("services.taskmanager"),
    },
];
