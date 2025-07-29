import { useEffect, useRef } from "react";
import { useNav } from "../NavContext";
import VisitSite from "./VisitSite";
import GithubButton from "./GithubButton";
import { FaReact, FaStripe, FaNode } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill, RiOpenaiFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

import ECOMMERCEIMAGE from '../images/download (8).jpeg';
import AIIMAGE from '../images/ai_image.jpg'
import YOUTUBEIMAGE from '../images/youtube_logo_4.png';
import WORDLEIMAGE from '../images/wordle_image2.jpg';
import AIRBNBIMAGE from '../images/airbnb.png';
import CHESSPIECE from '../images/horse.png';

const projects = [
  {
    title: "AI Chat app",
    description:
      "A full-stack eCommerce app with Stripe payments and admin dashboard for managing products.",
    image: AIIMAGE,
    site: "https://ai-chat-ivory.vercel.app/",
    github: "https://github.com/levipshemish/ai_chat",
    tech: [FaReact, RiTailwindCssFill, SiMongodb, RiOpenaiFill, FaNode],
    big: true,
  },
  {
    title: "Airbnb Clone",
    description:
      "Browse, book, and host properties. Includes full CRUD, auth, and dashboard.",
    image: AIRBNBIMAGE,
    site: "https://airbnb4.vercel.app/",
    github: "https://github.com/levipshemish/airbnb4",
    tech: [FaReact, RiTailwindCssFill, FaNode, SiMongodb, FaStripe],
    big: true,
  },
  {
    title: "YouTube Clone",
    description: "A YouTube clone to search, watch, and explore trending content.",
    image: YOUTUBEIMAGE,
    site: "https://youtube-nu-six.vercel.app/",
    github: "https://github.com/levipshemish/youtube",
    tech: [FaReact, RiTailwindCssFill],
  },
  {
    title: "Wordle Game",
    description: "Try and guess the word in 6 tries with this Wordle game.",
    image: WORDLEIMAGE,
    site: "https://wordle-nu-eight.vercel.app/",
    github: "https://github.com/levipshemish/Wordle",
    tech: [FaReact, RiTailwindCssFill],
  },
  {
    title: "Chess App",
    description: "Play chess with a sleek UI and challenging logic.",
    image: CHESSPIECE,
    site: "https://chess-tau-jet.vercel.app/",
    github: "https://github.com/levipshemish/chess",
    tech: [FaReact, RiTailwindCssFill],
  },
  {
    title: "Ecommerce Store",
    description:
      "A full-stack eCommerce app with Stripe payments and admin dashboard for managing products.",
    image: ECOMMERCEIMAGE,
    site: "https://eco-front1.vercel.app/",
    github: "https://github.com/levipshemish/eco3",
    tech: [FaReact, RiTailwindCssFill, FaNode, SiMongodb, RiNextjsFill, FaStripe],
    big: true,
  },
];

export default function Projects() {
  const { closeNav } = useNav();
  const projectsRef = useRef();

  return (
    <section id="projects" ref={projectsRef} onClick={closeNav} className="bg-[#FAFAFF] py-12">
      <h1 className="text-4xl md:text-5xl font-semibold text-[#30343F] font-roboto mb-10 px-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${
              project.big ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
            } group relative bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md w-full h-52 object-cover mb-4"
            />
            <h2 className="text-2xl text-[#636B83] mb-2">{project.title}</h2>
            <p className="text-[#636B83] mb-4">{project.description}</p>
            <div className="flex justify-center gap-3 text-gray-400 mb-4 flex-wrap">
              {project.tech.map((Icon, i) => (
                <Icon key={i} className="w-6 h-6" />
              ))}
            </div>
            <div className="flex justify-center gap-4 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
              <VisitSite link={project.site} />
              <GithubButton link={project.github} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
