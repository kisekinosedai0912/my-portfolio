import { mapper } from './utils/mapElements'
import { FaCode } from 'react-icons/fa'

export default function Skillset() {
    const languages = [
        "React", 
        "Laravel", 
        "Node.js", 
        "Express.js", 
        ".NET", 
        "jQuery",
        "Jasmine", 
        "JavaScript", 
        "PHP", 
        "C#", 
        "Tailwind CSS", 
        "Bootstrap",
        "HTML5", 
        "CSS3"
    ];
    const libraries = ["Axios", "Redux", "Git", "GitHub", "Material UI", "shadcn/ui", "Framer Motion", "React-Icons", "Font Awesome"];
    const databases = ["MySQL", "MongoDB"];
    const cloudServices = ["Azure DevOps", "Firebase", "Vercel"];
    const otherTools = ["VS Code", "Visual Studio", "Vite", "Figma"];

    return (
        <section className="flex flex-col items-center justify-center gap-6 w-full px-8 py-16">
            {/* Tech Stack Label */}
            <span className="flex items-center gap-3 mb-10">
                <FaCode className="text-red-700 w-8 h-8" /> 
                <h3 className="text-3xl font-extrabold">Tech-Stack</h3>
            </span>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-30 gap-y-16 max-w-6xl w-full">
                
                {/* Languages & Frameworks */}
                <div className="space-y-4">
                    <span className="text-xl font-bold block">Languages & Frameworks</span>
                    <ul className="flex flex-wrap gap-3">{ mapper(languages) }</ul>
                </div>

                {/* Libraries & Tools */}
                <div className="space-y-4">
                    <span className="text-xl font-bold block">Libraries & Tools</span>
                    <ul className="flex flex-wrap gap-3">{ mapper(libraries) }</ul>
                </div>

                {/* Databases */}
                <div className="space-y-4">
                    <span className="text-xl font-bold block">Databases</span>
                    <ul className="flex flex-wrap gap-3">{ mapper(databases) }</ul>
                </div>

                {/* Cloud & Services */}
                <div className="space-y-4">
                    <span className="text-xl font-bold block">Cloud & Services</span>
                    <ul className="flex flex-wrap gap-3">{ mapper(cloudServices) }</ul>
                </div>

                {/* Other Tools */}
                <div className="space-y-4">
                    <span className="text-xl font-bold block">Other Tools</span>
                    <ul className="flex flex-wrap gap-3">{ mapper(otherTools) }</ul>
                </div>
            </div>
        </section>
    )
}