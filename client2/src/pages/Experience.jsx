import { BsFastForward } from "react-icons/bs";
import { useNav } from "../NavContext"


export default function Experience() {
        const {closeNav} = useNav();
    return (
      <div className='bg-[#1E2749]'>

      
        <div onClick={closeNav} id="experience" className="bg-[#1E2749] w-[80vw] mx-auto h-screen">
            <h1 className="text-white font-raleway text-5xl mb-3 py-5">Experience.</h1>
            <div className="text-white flex flex-col gap-3 py-[20px] px-[20px] bg-[#25315b] rounded-md w-[80vw] mx-auto lg:h-75 h-85 border border-[#8892B0]">
                <div className="text-[24px] font-roboto text-[#D1D1D1]">Fullstack Engineer <span className="text-[18px] text-[#FED766]">@ShoreStone Insurance</span></div>
                <div className="text-[18px] font-roboto text-[#D1D1D1]">
                    August 2024 — Current
                </div>
                <div className='font-roboto'>
                    At Shorestone i did stuff At Shorestone i did stuff At Shorestone i did stuff At Shorestone i did stuff At Shorestone i did stuff At Shorestone i did stuff
                </div>
                <ul className="grid grid-cols-2 w-[65%] ml-8 mt-2 gap-3 gap-x-8 text-[#D1D1D1]">
                    <li className="flex gap-2 items-center">
                    <BsFastForward />
                    <div className="text-white text-[15px]">JavaScript</div>
                    </li>
                    <li className="flex gap-2 items-center">
                    <BsFastForward />
                    <div className="text-white text-[15px]">React</div>
                    </li>
                    <li className="flex gap-2 items-center">
                    <BsFastForward />
                    <div className="text-white text-[15px]">NextJs</div>
                    </li>
                    <li className="flex gap-2 items-center">
                    <BsFastForward />
                    <div className="text-white text-[15px]">MongoDb</div>
                    </li>
                    <li className="flex gap-2 items-center">
                    <BsFastForward />
                    <div className="text-white text-[15px]">ExpressJs</div>
                    </li>
                    <li className="flex gap-2 items-center">
                    <BsFastForward />
                    <div className="text-white text-[15px]">Tailwindcss</div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
}