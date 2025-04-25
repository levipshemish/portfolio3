import { useEffect, useRef, useState } from "react";

export default function LineRight() {
  const [isOverSection, setIsOverSection] = useState(false);
  const lineRef = useRef();

  const [copied, setCopied] = useState(false);
  const textToCopy = "levifsengineer.com";
  

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const lineTop = lineRef.current.getBoundingClientRect().top + window.scrollY;
      const sections = document.querySelectorAll("section");

      let overlapping = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (lineTop >= sectionTop && lineTop <= sectionBottom) {
          overlapping = true;
        }
      });

      setIsOverSection(overlapping);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      onClick={handleCopy}
      ref={lineRef}
      className="fixed bottom-10 right-10 flex flex-col items-center z-50"
    >
     <span className="mb-4 text-sm text-blue-500 ">{copied && "Copied!"}</span>

      <div className="flex flex-col gap-3 items-center">
        <p
          className={`text-sm tracking-widest [writing-mode:vertical-rl] [text-orientation:mixed] transition-colors duration-300 ${
            isOverSection ? "text-black" : "text-[#D1D1D1]"
          }`}
        >
          levifsengineer@gmail.com 

        </p>
        <div
          className={`w-[2px] h-[140px] mt-4 transition-colors duration-300 ${
            isOverSection ? "bg-black" : "bg-[#D1D1D1]"
          }`}
        />
      </div>
    </div>
  );
}
