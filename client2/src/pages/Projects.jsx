import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaStripe } from "react-icons/fa6";
import ECOMMERCEIMAGE from '/Users/levipshemish/Desktop/levi-portfolio/client2/src/images/download (8).jpeg'
import YOUTUBEIMAGE from '/Users/levipshemish/Desktop/levi-portfolio/client2/src/images/youtube_logo_4.png'
import WORDLEIMAGE from '/Users/levipshemish/Desktop/levi-portfolio/client2/src/images/wordle_image2.jpg'
import AIRBNBIMAGE from '/Users/levipshemish/Desktop/levi-portfolio/client2/src/images/airbnb.png'
import CHESSPIECE from '/Users/levipshemish/Desktop/levi-portfolio/client2/src/images/horse.png'
import { useNav } from "../NavContext"
import VisitSite from "./VisitSite";
import GithubButton from "./GithubButton";
import {useRef} from 'react'


export default function Projects() {
    const {closeNav} = useNav();
    const projectsRef = useRef()

    return (
        <section id="projects" ref={projectsRef}>
           
       
            <div onClick={closeNav} className="bg-[#FAFAFF] text-black ">
            
            <h1 className="mt-8 mb-3 ml-5 text-5xl text-[#30343F]">Projects.</h1>
                <div className="">
                   

                         </div>
                             <div className="grid grid-cols-5 grid-rows-4 gap-x-8 gap-y-8 w-[80vw] h-[150vh] mx-auto p-4 ">
                            {/* Large 2x2 div on the left */}
                            <div className="col-span-3 row-span-2 bg-white p-4 rounded-lg shadow-lg text-center">
                                <div className="flex flex-col gap-3">
                                <img src={ECOMMERCEIMAGE} className="rounded-lg w-full"/>
                                 <h1 className="text-left pl-4 mt-5 flex justify-center text-2xl text-[#636B83]">Ecommerce Store</h1>
                                 <h1 className="text-left pl-4 text-[#636B83] flex mb-5">This full-stack eCommerce app allows users to browse and securely purchase products with seamless Stripe integration. Admins have access to a custom dashboard where they can upload, edit, and manage products in real-time.</h1>
                                 <div className="flex gap-2 justify-center mb-5">
                                    <VisitSite link='https://linkedin.com/in/levipshemish'/>
                                    <GithubButton link='https://github.com/levipshemish/ecommerce'/>
                                 </div>
                                 <div className="flex gap-3 justify-center mt-2 text-gray-400">
                                <FaReact  className="w-8 h-8 "/>
                                <RiTailwindCssFill className="w-8 h-8"/>
                                <SiMongodb className="w-8 h-8"/>
                                <RiNextjsFill className="w-8 h-8"/>
                                <FaStripe className="w-8 h-8"/>
                                </div>
                                </div>
                                
                            </div>

                            {/* Top-right 1x1 */}
                            <div className="relative group col-span-2 row-span-1">
  {/* The card that lifts */}
                                <div className="bg-white p-4 mb-6 text-center rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-5 z-0 relative">
                                    <div className="flex items-center align-center mb-2 mt-2">
                                    <img src={YOUTUBEIMAGE} className="h-10" />
                                    <h1 className="text-[#636B83] text-xl ml-4">Youtube Clone</h1>
                                    </div>
                                    <h1 className="mt-5 text-[#636B83] mb-8">
                                    This YouTube clone allows users to search, watch, and explore trending content seamlessly.
                                    </h1>
                                    <div className="flex justify-center gap-3 text-gray-400">
                                    <FaReact className="w-8 h-8" />
                                    <RiTailwindCssFill className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Hidden buttons revealed on hover */}
                                <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-0">
                                    <a
                                    href="https://linkedin.com/in/levipshemish"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FED766] text-[#636b83] px-4 py-2 rounded transition-colors"
                                    >
                                    Visit Site
                                    </a>
                                    <a
                                    href="https://github.com/levipshemish/youtube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FED766] text-[#636b83] px-4 py-2 rounded transition-colors"
                                    >
                                    Github
                                    </a>
                                </div>
                                </div>

                            {/* Bottom-right 1x1 */}
                            
                            <div className="relative group col-span-2 row-span-1">
  {/* The card that lifts */}
                                <div className="bg-white p-4 mb-6 text-center rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-3 z-0 relative">
                                    <div className="flex items-center align-center mb-2 mt-2">
                                    <img src={WORDLEIMAGE} className="h-12" />
                                    <h1 className="text-[#636B83] text-xl ml-4">Wordle</h1>
                                    </div>
                                    <h1 className="mt-5 text-[#636B83] mb-8">
                                    Try and Guess the word with this wordle game.
                                    </h1>
                                    <div className="flex justify-center gap-3 text-gray-400">
                                    <FaReact className="w-8 h-8" />
                                    <RiTailwindCssFill className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Hidden buttons revealed on hover */}
                                <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-0">
                                    <a
                                    href="https://linkedin.com/in/levipshemish"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FED766] text-[#636b83] px-4 py-2 rounded transition-colors"
                                    >
                                    Visit Site
                                    </a>
                                    <a
                                    href="https://github.com/levipshemish/Wordle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FED766] text-[#636b83] px-4 py-2 rounded transition-colors"
                                    >
                                    Github
                                    </a>
                                </div>
                                </div>
                            
                                <div className="relative group col-span-2 row-span-1">
  {/* The card that lifts */}
                                <div className="bg-white p-4 mb-6 text-center rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2 z-0 relative">
                                    <div className="flex items-center align-center mb-2 mt-2">
                                    <img src={CHESSPIECE} className="h-10" />
                                    <h1 className="text-[#636B83] text-xl ml-4">Chess</h1>
                                    </div>
                                    <h1 className="mt-5 text-[#636B83] mb-8">
                                    Play a game of Chess on my chess app.
                                    </h1>
                                    <div className="flex justify-center gap-3 text-gray-400">
                                    <FaReact className="w-8 h-8" />
                                    <RiTailwindCssFill className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Hidden buttons revealed on hover */}
                                <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-0">
                                    <a
                                    href="https://linkedin.com/in/levipshemish"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FED766] text-[#636b83] px-4 py-2 rounded transition-colors"
                                    >
                                    Visit Site
                                    </a>
                                    <a
                                    href="https://github.com/levipshemish"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FED766] text-[#636b83] px-4 py-2 rounded transition-colors"
                                    >
                                    Github
                                    </a>
                                </div>
                                </div>

                                  <div className="col-span-3 row-span-2 bg-white p-4 rounded-lg shadow-lg text-center">
                                <div className="flex flex-col gap-3">
                                <img src={AIRBNBIMAGE} className="rounded-lg w-full"/>
                                 <h1 className="text-left pl-4  flex justify-center text-2xl text-[#636B83]">AirBnb Clone</h1>
                                 <h1 className="text-left pl-4 text-[#636B83] flex mb-5">An Airbnb clone that allows users to browse, book, and host properties with a clean, user-friendly interface. It includes full CRUD functionality, user authentication, and an admin dashboard for managing listings and reservations.</h1>
                                 <div className="flex gap-2 justify-center mb-5">
                                    <VisitSite link='https://linkedin.com/in/levipshemish'/>
                                    <GithubButton link='https://github.com/levipshemish/airbnb-clone'/>
                                 </div>
                                 <div className="flex gap-3 justify-center mt-2 text-gray-400">
                                <FaReact  className="w-8 h-8 "/>
                                <RiTailwindCssFill className="w-8 h-8"/>
                                <SiMongodb className="w-8 h-8"/>
                                <FaStripe className="w-8 h-8"/>
                                </div>
                                </div>
                                
                            </div>

                            <div className="relative group col-span-2 row-span-1">
  {/* The card that lifts */}
                                <div className="bg-white p-4 mb-6 text-center rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-5 z-0 relative">
                                    <div className="flex items-center align-center mb-2 mt-2">
                                    <img src={YOUTUBEIMAGE} className="h-10" />
                                    <h1 className="text-[#636B83] text-xl ml-4">Youtube Clone</h1>
                                    </div>
                                    <h1 className="mt-5 text-[#636B83] mb-8">
                                    This YouTube clone allows users to search, watch, and explore trending content seamlessly.
                                    </h1>
                                    <div className="flex justify-center gap-3 text-gray-400">
                                    <FaReact className="w-8 h-8" />
                                    <RiTailwindCssFill className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Hidden buttons revealed on hover */}
                                <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-0">
                                    <a
                                    href="https://linkedin.com/in/levipshemish"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FED766] text-[#636b83] px-4 py-2 rounded transition-colors"
                                    >
                                    Visit Site
                                    </a>
                                    <a
                                    href="https://github.com/levipshemish"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FED766] text-[#636b83] px-4 py-2 rounded transition-colors"
                                    >
                                    Github
                                    </a>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                          
            </section>
    )
}