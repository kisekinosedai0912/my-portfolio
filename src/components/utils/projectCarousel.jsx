import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { projects } from '../../assets/js/projectData'
import Autoplay from "embla-carousel-autoplay"

export default function ProjectCarousel(props) {
    const autoplay = Autoplay(
        {
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }
    )

    return (
        <Carousel className="w-full" plugins={[autoplay]}>
            <CarouselContent>
                {projects.map((project, index) => (
                    <CarouselItem key={index} className="basis-[30vw]">
                        <div className="p-4 shadow-md bg-gray-100 dark:bg-gray-800">
                            <img 
                                src={project.imgPath} 
                                alt={project.title} 
                                className="w-full h-58 object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel> 
    )
}