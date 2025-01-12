// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Développeur Web",
    firstName: "MAMADOU",
    LastName: "SALIOU BAH",
    btnText: "Contactez-moi",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Années d'expérience en développement web",
      },
      {
        count: "5+",
        text: "Projets réalisés",
      },
    ],
  },
  skills: {
    title: "Compétences",
    subtitle: "MES PRINCIPALES COMPÉTENCES",
    skills_content: [
      {
        name: "HTML/CSS",
        para: "Développement frontend",
        logo: figma,
      },
      {
        name: "PHP/SQL",
        para: "Développement backend",
        logo: nodejs,
      },
      {
        name: "Bootstrap",
        para: "Framework Frontend",
        logo: ps,
      },
      {
        name: "Windows",
        para: "Système d'exploitation",
        logo: reactjs,
      },
      {
        name: "Photoshop",
        para: "Édition d'images",
        logo: sketch,
      },
      {
        name: "Pack Office",
        para: "Suite bureautique",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "CE QUE JE PROPOSE",
    service_content: [
      {
        title: "Développement Web",
        para: "Développement d'interfaces web, front et back, gestion de bases de données avec HTML, CSS, JavaScript, PHP",
        logo: services_logo1,
      },
      {
        title: "Gestion Administrative",
        para: "Suivi de trésorerie, gestion des relations clients et fournisseurs, gestion des dossiers administratifs",
        logo: services_logo2,
      },
      {
        title: "Analyse de Données",
        para: "Saisie et analyse sous Excel, gestion et traitement des informations, préparation de rapports",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projets",
    subtitle: "MES RÉALISATIONS",
    image: person_project,
    project_content: [
      {
        title: "Installation Tech Maci",
        image: project1,
      },
      {
        title: "Sites Aly-Conakry",
        image: project2,
      },
      {
        title: "Gestion Jeunesse Dubreka",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contactez-moi",
    subtitle: "RESTONS EN CONTACT",
    social_media: [
      {
        text: "salioubah@outlook.be",
        icon: GrMail,
        link: "mailto:salioubah@outlook.be",
      },
      {
        text: "+224622289099",
        icon: MdCall,
        link: "tel:+224622289099",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "© 2024 Mamadou Saliou Bah - Tous droits réservés",
  },
};
