import SlideShow from './SlideShow'

export default function Projects() {
    return (
        <>
            <div className="flex flex-col justify-center w-full h-[20%] overflow-y-auto">
                <h2 className="text-center text-lg md:text-xl leading-relaxed">
                    A curated showcase of the <span className="font-semibold">systems</span> and{" "}
                    <span className="font-semibold">solutions</span> I’ve engineered — from{" "}
                    <span className="font-semibold">scalable web apps</span> to{" "}
                    <span className="font-semibold">intuitive platforms</span> built to solve real-world challenges.  
                    <br className="hidden md:block" />
                    Every project reflects clean code, thoughtful design, and a drive to deliver quality systems
                </h2>
            </div>

            <SlideShow />
        </>
    )
}