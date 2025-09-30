import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function ProjectCarousel({ project }) {
    const autoplay = Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
    })

    return (
        <div className="w-full px-2 md:px-4"> 
            <h2 className="text-sm md:text-base font-bold">
                {project.title}
            </h2>

            <div className="relative w-full">
                <Carousel plugins={[autoplay]} className="w-full">
                    <CarouselContent>
                        {project.imgPaths.map((img, i) => (
                            <CarouselItem key={i}>
                                <div className="aspect-video w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg">
                                    <img
                                        src={img}
                                        alt={project.alt}
                                        className="max-h-full max-w-full object-contain rounded-lg p-2"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>
        </div>
    )
}