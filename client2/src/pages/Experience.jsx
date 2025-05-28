
import { BsFastForward } from "react-icons/bs";
import { useNav } from "../NavContext";

const experience = {
  role: "Fullstack Engineer",
  company: "ShoreStone Insurance",
  date: "August 2024 — Current",
  description:
    "At Shorestone, I developed scalable full-stack applications, implemented internal tools for client management, and optimized API performance across services.",
  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
  ],
};

export default function Experience() {
  const { closeNav } = useNav();

  return (
    <div className="bg-[#1E2749] w-full min-h-screen">
      <div
        onClick={closeNav}
        id="experience"
        className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-10"
      >
        <h1 className="text-white font-raleway text-4xl md:text-5xl mb-6">Experience.</h1>

        <div className="bg-[#25315b] text-white p-6 rounded-md border border-[#8892B0]">
          <div className="text-xl md:text-2xl font-roboto text-[#D1D1D1]">
            {experience.role}{" "}
            <span className="text-lg md:text-xl text-[#FED766]">
              @{experience.company}
            </span>
          </div>

          <div className="text-md md:text-lg text-[#D1D1D1] mt-1 font-roboto">
            {experience.date}
          </div>

          <p className="mt-4 font-roboto text-sm md:text-base text-[#D1D1D1] leading-relaxed">
            {experience.description}
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-8 mt-4 ml-4 text-sm md:text-base">
            {experience.skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <BsFastForward />
                <span className="text-white">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="text-white text-4xl md:text-5xl font-raleway">Resume.</h2>

          <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-6 font-roboto">
            <button
              onClick={() => window.open("/resume_coding.pdf", "_blank")}
              className="bg-[#25315b] border border-[#8892B0] text-[#FED766] px-6 py-3 rounded text-lg transition-transform transform hover:scale-105"
            >
              Open Resume
            </button>

            <a
              href="/resume_coding.pdf"
              download="Levi_Pshemish_Resume.pdf"
              className="bg-[#25315b] border border-[#8892B0] text-[#FED766] px-6 py-3 rounded text-lg transition-transform transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
