import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


export default function Footer() {
    return (
        <div className="text-white w-full gap-2 flex justify-center items-center h-[64px] bg-[#1E2749] px-[1rem]">
            Levi Pshemish 2025. Made using <span className="text-[#FED766]">React.</span>
            
             <a 
                href="https://linkedin.com/in/levipshemish" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FED766]"
            >
            <FaLinkedin />
            </a>
            <a 
                href="https://github.com/levipshemish" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FED766]"
            >
                <FaGithub />
            </a>
            <a 
                href="mailto:levifsengineer@gmail.com"
                className="hover:text-[#FED766]"
            >
              <MdOutlineMail />
            </a> 
            
        </div>
    )
}