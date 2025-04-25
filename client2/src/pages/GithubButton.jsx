export default function GithubButton({link}) {
    return (
        <div>
            <button>
                <a href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#FED766] text-[#636b83] shadow-xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-2 transition-all duration-200 px-5 py-3 rounded-md"

                >
                    View Code {'›'}
                </a>
            </button>
        </div>
    )
}