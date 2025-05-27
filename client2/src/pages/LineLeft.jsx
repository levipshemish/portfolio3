import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function LeftLine() {
  const [iconColor, setIconColor] = useState("#D1D1D1");

  useEffect(() => {
    const sectionColors = {
      body: "#D1D1D1",
      projects: "#1E2749",
      experience: "#D1D1D1",
      contact: "#1E2749",
    };

    const handleScroll = () => {
      const middleOfScreen = window.innerHeight / 2;

      let closestSectionId = null;
      let closestDistance = Infinity;

      Object.keys(sectionColors).forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - middleOfScreen);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSectionId = id;
          }
        }
      });

      if (closestSectionId) {
        setIconColor(sectionColors[closestSectionId]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount too

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-10 left-10 hidden lg:flex flex-col items-center space-y-4 z-50">
      <div className="flex flex-col items-center gap-5 text-2xl" style={{ color: iconColor }}>
        <a
          href="https://linkedin.com/in/levipshemish"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/levipshemish"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:levifsengineer@gmail.com"
          className="hover:scale-110 transition-transform duration-200"
        >
          <MdOutlineMail />
        </a>
      </div>
      <div className="w-[2px] h-[140px] mt-4" style={{ backgroundColor: iconColor }} />
    </div>
  );
}
