import Skillset from "./Skillset"

export default function Skills() {
    return (
        <>
            {/* title of skills page */}
            <div className="flex flex-col justify-center w-full h-[20%] overflow-y-auto">
                <h2 className="text-center text-lg md:text-xl leading-relaxed">
                    Here’s a snapshot of the <span className="font-semibold">languages</span>,{" "}
                    <span className="font-semibold">frameworks</span>, and{" "}
                    <span className="font-semibold">tools </span> 
                    that power the systems and solutions I’ve built.  
                    <br className="hidden md:block" />
                    Always exploring, always shipping 🚀
                </h2>
            </div>

            {/* Tech-Stack */}
            <Skillset />
        </>
    )
}