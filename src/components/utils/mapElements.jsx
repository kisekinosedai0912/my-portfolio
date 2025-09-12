import { 
  FaReact, FaLaravel, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaNpm, FaFigma, FaMicrosoft, FaToolbox, FaFontAwesome 
} from "react-icons/fa";
import { 
  SiReact, SiJavascript, SiExpress, SiJquery, SiJasmine, SiTailwindcss, SiRedux, SiMui, SiShadcnui, SiFramer, SiMysql, SiMongodb, SiFirebase, SiVercel, SiVite 
} from "react-icons/si";
import { VscAzureDevops, VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";

const techIcons = {
    React: { icon: <FaReact className="text-cyan-500 w-8 h-8" /> },
    Laravel: { icon: <FaLaravel className="text-red-500 w-8 h-8" /> },
    "Node.js": { icon: <FaNodeJs className="text-green-600 w-8 h-8" /> },
    "Express.js": { icon: <SiExpress className="text-green-700 w-8 h-8" /> },
    JavaScript: { icon: <SiJavascript className="text-yellow-500 w-8 h-8" /> },
    PHP: { icon: <FaPhp className="text-indigo-700 w-8 h-8" /> },
    "C#": { icon: <FaMicrosoft className="text-purple-600 w-8 h-8" /> },
    ".Net": { icon: <FaMicrosoft className="text-indigo-600 w-8 h-8" /> },
    HTML5: { icon: <FaHtml5 className="text-orange-600 w-8 h-8" /> },
    CSS3: { icon: <FaCss3Alt className="text-blue-600 w-8 h-8" /> },
    Bootstrap: { icon: <FaBootstrap className="text-purple-500 w-8 h-8" /> },
    jQuery: { icon: <SiJquery className="text-blue-500 w-8 h-8" /> },
    Jasmine: { icon: <SiJasmine className="text-pink-500 w-8 h-8" /> },
    Git: { icon: <FaGitAlt className="text-orange-600 w-8 h-8" /> },
    GitHub: { icon: <FaGithub className="text-gray-800 dark:text-gray-200 w-8 h-8" /> },
    "Material UI": { icon: <SiMui className="text-blue-500 w-8 h-8" /> },
    Axios: { icon: <FaNpm className="text-red-500 w-8 h-8" /> },
    Redux: { icon: <SiRedux className="text-purple-600 w-8 h-8" /> },
    "shadcn/ui": { icon: <SiShadcnui className="text-gray-600 w-8 h-8" /> },
    "React-Icons": { icon: <SiReact className="text-red-600 w-8 h-8" /> },
    "Framer Motion": { icon: <SiFramer className="text-pink-500 w-8 h-8" /> },
    "Font Awesome": { icon: <FaFontAwesome className="text-black-500 w-8 h-8" /> },
    MySQL: { icon: <SiMysql className="text-blue-700 w-8 h-8" /> },
    MongoDB: { icon: <SiMongodb className="text-green-600 w-8 h-8" /> },
    Firebase: { icon: <SiFirebase className="text-orange-600 w-8 h-8" /> },
    Vercel: { icon: <SiVercel className="text-gray-700 w-8 h-8" /> },
    "Tailwind CSS": {icon: <SiTailwindcss className="text-cyan-500 w-8 h-8" />},
    "Azure DevOps": { icon: <VscAzureDevops className="text-blue-500 w-8 h-8" />},
    "Visual Studio": { icon: <DiVisualstudio className="text-purple-500 w-8 h-8" /> },
    "VS Code": { icon: <VscVscode className="text-blue-500 w-8 h-8" /> },
    Vite: { icon: <SiVite className="text-purple-900 w-8 h-8" /> },
    Figma: { icon: <FaFigma className="text-red-700 w-8 h-8" /> },
};

export function mapper(content) {
    return content.map((value, id) => {
        const key = Object.keys(techIcons).find(k => k.toLowerCase() === value.toLowerCase());
        const tech = techIcons[key] || { icon: <FaToolbox className="text-gray-500 w-8 h-8" /> };

        return (
            <li key={id}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm hover:scale-105 transition-transform"
            >
                {tech.icon}
                <span className="text-base font-medium">{value}</span>
            </li>
        );
    });
}