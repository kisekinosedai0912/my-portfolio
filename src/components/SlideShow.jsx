import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Profile from '../assets/img/grad-pic-cropped.jpg'

export default function SlideShow() {
    const projects = [
        [
            {
                id: 1,
                title: 'SCSHS Web Based Scheduler with Automated Conflict Resolution', 
                imgSrc: Profile,
                imgAlt: 'project',
                styles: 'w-full h-full object-cover'
            },
            {
                id: 2,
                title: 'Rosejing Inventory Management & Sales System', 
                imgSrc: Profile,
                imgAlt: 'project',
                styles: 'w-full h-full object-cover'
            },
        ],
        [
            {
                id: 3,
                title: 'Student Performance Metrics Management System', 
                imgSrc: Profile,
                imgAlt: 'project',
                styles: 'w-full h-full object-cover'
            },
            {
                id: 4,
                title: 'Recycle and Greenery - Points Reward Exchange System', 
                imgSrc: Profile,
                imgAlt: 'project',
                styles: 'w-full h-full object-cover'
            },
            {
                id: 5,
                title: 'Fret Muse', 
                imgSrc: Profile,
                imgAlt: 'project',
                styles: 'w-full h-full object-cover'
            },
        ]
    ];

    return (
        <section className="flex flex-col items-center justify-center gap-6 w-full px-8 py-16">
            {projects.map((project, index) => (
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-[16vw]">
                            <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
                        </CarouselItem>
                        <CarouselItem className="md:basis-[16vw]">
                            <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
                        </CarouselItem>
                        <CarouselItem className="md:basis-[16vw]">
                            <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
                        </CarouselItem>
                        <CarouselItem className="md:basis-[16vw]">
                            <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
                        </CarouselItem>
                        <CarouselItem className="md:basis-[16vw]">
                            <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            ))}
        </section>
    )
}