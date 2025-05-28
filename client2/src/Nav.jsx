// import { useEffect, useState } from "react"
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";
// import { useNav } from "./NavContext";
// import { BiMenuAltRight } from "react-icons/bi";
// import { CgMenuMotion } from "react-icons/cg";

// export default function Nav() {
//     const {isNavOpen, toggleNav} = useNav();
// const [isHovered, setIsHovered] = useState(false);


// const [navBackground, setNavBackground] = useState("bg-white"); // default to white

// useEffect(() => {
//   const sectionColors = {
//     body:'bg-[#1E2749]',
//     projects: "bg-white", 
//     experience: "bg-[#1E2749]", // blue section      // white section
//     contact: "bg-white",    // blue section
//   };

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const currentSection = entry.target.id;
//           const currentSectionColor = sectionColors[currentSection];

//           // Choose nav background that contrasts with current section
//           if (currentSectionColor === "bg-white") {
//             setNavBackground("#1E2749");
//           } else {
//             setNavBackground("white");
//           }
//         }
//       });
//     },
//     {
//       root: null,
//       threshold: 0.5,
//     }
//   );

//   // Observe all the section elements
//   Object.keys(sectionColors).forEach((id) => {
//     const section = document.getElementById(id);
//     if (section) observer.observe(section);
//   });

//   return () => {
//     Object.keys(sectionColors).forEach((id) => {
//       const section = document.getElementById(id);
//       if (section) observer.unobserve(section);
//     });
//   };
// }, []);
// //24x15
 
// if (!isNavOpen) {

//     return (
//         <div className={`shadow-2xl fixed  transition-colors duration-300  w-full h-[65px] z-1 `}>
//             <div className={`flex justify-between items-center p-3`}>
//                 <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill={navBackground} viewBox="0 0 24 24" strokeWidth={1.5} stroke={navBackground} className={`size-10`}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
//                     </svg>
//                     {/* <img className={`h-13 bg-[${navBackground}]`} src={LOGO}/> */}
//                 </div>
//                 <div onClick={toggleNav}>
                
//                     <div 
//                        className="cursor-pointer" 
//                        onMouseEnter={() => setIsHovered(true)}
//                        onMouseLeave={() => setIsHovered(false)}
//                     >
//                      {isHovered ? (
//                          <CgMenuMotion className={`text-${navBackground} text-5xl`}/>
//                          ) : (
//                            <BiMenuAltRight className={`text-${navBackground} text-5xl`}/> 
//                           )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
//  } 

//  if (isNavOpen) {
//     return (
//         <div className="fixed bg-[#FAFAFF] h-[430px] w-full shadow-3xl  z-1">
//             <div className="flex justify-between p-3">
//                    <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-[#1E2749]">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
//                         </svg>
//                     </div>
//                     <div onClick={toggleNav}>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hover:text-[#FED766] text-[#1E2749]">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//                         </svg>
//                     </div>
//             </div>   
//              <div className="flex justify-end p-6 text-hollow  font-roboto">
//                 <ul className="flex flex-col gap-5 text-4xl">
//                     <li onClick={toggleNav} className="text-hollow-hover">
//                         <a href="#projects">Projects</a>
//                     </li>
//                     <li onClick={toggleNav} className="text-hollow-hover">
//                         <a href="#experience">Experience</a>
//                     </li>
//                     <li onClick={toggleNav} className="text-hollow-hover">
//                         <a href="#experience">Resume</a>
//                     </li>
//                     <li onClick={toggleNav} className="text-hollow-hover">
//                         <a href="#contact">Contact</a>
//                     </li>
//                 </ul>
//              </div>

//             <div className="flex gap-4 text-3xl text-[#30343F] p-6">
//                  <a 
//                                 href="https://linkedin.com/in/levipshemish" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer" 
//                                 className="hover:text-[#614684]"
//                             >
//                             <FaLinkedin />
//                             </a>
//                             <a 
//                                 href="https://github.com/levipshemish" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer" 
//                                 className="hover:text-[#614684]"
//                             >
//                                 <FaGithub />
//                             </a>
//                             <a 
//                                 href="mailto:levifsengineer@gmail.com"
//                                 className="hover:text-[#614684]"
//                             >
//                                 <MdOutlineMail />
//                             </a>
//             </div>
//         </div>
//     )
//  }
// }
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useNav } from "./NavContext";
import { BiMenuAltRight } from "react-icons/bi";
import { CgMenuMotion } from "react-icons/cg";

export default function Nav() {
  const { isNavOpen, toggleNav } = useNav();
  const [isHovered, setIsHovered] = useState(false);
  const [navBackground, setNavBackground] = useState("#1E2749"); // Default to dark blue

  useEffect(() => {
    if (isNavOpen) {
      const sectionColors = {
        body: "bg-[#1E2749]",
        projects: "bg-white",
        experience: "bg-[#1E2749]",
        contact: "bg-white",
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const currentSection = entry.target.id;
              const currentSectionColor = sectionColors[currentSection];

              if (currentSectionColor === "bg-white") {
                setNavBackground("#1E2749");
              } else {
                setNavBackground("white");
              }
            }
          });
        },
        { root: null, threshold: 0.5 }
      );

      Object.keys(sectionColors).forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });

      return () => {
        Object.keys(sectionColors).forEach((id) => {
          const section = document.getElementById(id);
          if (section) observer.unobserve(section);
        });
      };
    } else {
      // When nav is closed, always use dark blue
      setNavBackground("#1E2749");
    }
  }, [isNavOpen]);

  // Nav bar when closed
  if (!isNavOpen) {
    return (
      <div className={`fixed w-full h-[65px] z-10 shadow-2xl transition-colors duration-300`} style={{ backgroundColor: navBackground }}>
        <div className="flex justify-between items-center p-3">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <div onClick={toggleNav}>
            <div
              className="cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <CgMenuMotion className="text-white text-5xl" />
              ) : (
                <BiMenuAltRight className="text-white text-5xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Nav menu when open
  return (
    <div className="fixed bg-[#FAFAFF] h-[430px] w-full shadow-3xl z-10">
      <div className="flex justify-between p-3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-[#1E2749]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
        <div onClick={toggleNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 hover:text-[#FED766] text-[#1E2749]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className="flex justify-end p-6 font-roboto">
        <ul className="flex flex-col gap-5 text-4xl text-hollow">
          <li onClick={toggleNav} className="text-hollow-hover"><a href="#projects">Projects</a></li>
          <li onClick={toggleNav} className="text-hollow-hover"><a href="#experience">Experience</a></li>
          <li onClick={toggleNav} className="text-hollow-hover"><a href="#experience">Resume</a></li>
          <li onClick={toggleNav} className="text-hollow-hover"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="flex gap-4 text-3xl text-[#30343F] p-6">
        <a href="https://linkedin.com/in/levipshemish" target="_blank" rel="noopener noreferrer" className="hover:text-[#614684]"><FaLinkedin /></a>
        <a href="https://github.com/levipshemish" target="_blank" rel="noopener noreferrer" className="hover:text-[#614684]"><FaGithub /></a>
        <a href="mailto:levifsengineer@gmail.com" className="hover:text-[#614684]"><MdOutlineMail /></a>
      </div>
    </div>
  );
}
