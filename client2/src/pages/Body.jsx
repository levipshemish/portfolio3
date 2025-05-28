import { useNav } from "../NavContext"

export default function Body() {
    const {closeNav} = useNav();
    return (
            // <div id="body" onClick={closeNav} className="relative bg-[#1E2749] h-screen text-white">
         

            //     <div className="flex flex-col gap-2 justify-center h-full w-[80vw] lg:mx-auto px-5 py-[90px]">
            //     <h1 className="text-xl font-medium font-roboto">Hi, I'm</h1>
            //     <h2 className="lg:text-7xl text-5xl font-bold mt-2 font-raleway">Levi Pshemish</h2>
            //     <h3 className="text-[#8892B0] text-[30px] font-roboto" >I'm a Software Engineer at <span className="text-[#FED766]">ShoreStone Insurance.</span></h3>
            //     <h3 className="text-[#8892B0] text-xl w-[500px] font-roboto">I'm currently focused on expanding my experience designing and developing high performing websites.</h3>
            //     </div>
            
            // </div>
            <div
            id="body"
            onClick={closeNav}
            className="relative bg-[#1E2749] min-h-screen text-white flex items-center"
          >
            <div className="flex flex-col gap-4 justify-center items-start max-w-4xl mx-auto px-6 pt-10 sm:pt-20">
              <h1 className="text-lg sm:text-xl font-medium font-roboto">
                Hi, I'm
              </h1>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-raleway">
                Levi Pshemish
              </h2>
              <h3 className="text-[#8892B0] text-xl sm:text-2xl font-roboto">
                I'm a Software Engineer at{" "}
                <span className="text-[#FED766]">ShoreStone Insurance.</span>
              </h3>
              <p className="text-[#8892B0] text-base sm:text-lg font-roboto max-w-prose">
                I'm currently focused on expanding my experience designing and
                developing high performing websites.
              </p>
            </div>
          </div>
    )
}