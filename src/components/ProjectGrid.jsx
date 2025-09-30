import ProjectCarousel from './utils/projectCarousel'
import {projects} from '../assets/js/projectData'

export default function ProjectGrid() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-12">
            {projects.map((project, i) => (
                <div 
                    key={i} 
                    className="w-full flex flex-col items-center justify-start"
                >
                    <ProjectCarousel project={project} />
                </div>
            ))}
        </div>
    )
}