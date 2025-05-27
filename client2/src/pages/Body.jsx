import { useNav } from "../NavContext"

export default function Body() {
    const {closeNav} = useNav();
    return (
            <div id="body" onClick={closeNav} className="relative bg-[#1E2749] h-screen text-white">
            {/* <div className="absolute top-4 left-4">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            </div> */}

                <div className="flex flex-col gap-2 justify-center h-full w-[80vw] lg:mx-auto px-5 py-[90px]">
                <h1 className="text-xl font-medium font-roboto">Hi, I'm</h1>
                <h2 className="lg:text-7xl text-5xl font-bold mt-2 font-raleway">Levi Pshemish</h2>
                <h3 className="text-[#8892B0] text-[30px] font-roboto" >I'm a Software Engineer at <span className="text-[#FED766]">ShoreStone Insurance.</span></h3>
                <h3 className="text-[#8892B0] text-xl w-[500px] font-roboto">I'm currently focused on expanding my experience designing and developing high performing websites.</h3>
                </div>
            
            </div>
    )
}