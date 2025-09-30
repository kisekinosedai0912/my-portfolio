import ProjectGrid from './ProjectGrid'

export default function Projects() {
    return (
        <section className="w-full overflow-x-hidden flex flex-col items-center justif-center">
            <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-8">
                <div className="flex flex-col justify-center w-full mb-12">
                    <h2 className="text-center text-lg md:text-xl leading-relaxed">
                         A curated showcase of the <span className="font-semibold">systems</span> and{" "}
                    <span className="font-semibold">solutions</span> I've engineered — from{" "}
                    <span className="font-semibold">scalable web apps</span> to{" "}
                    <span className="font-semibold">intuitive platforms</span> built to solve real-world challenges.  
                    Every project reflects clean code, thoughtful design, and a drive to deliver quality systems
                    </h2>
                </div>
                <br />
                <br />
                
                <ProjectGrid />
            </div>
        </section>
    )
}