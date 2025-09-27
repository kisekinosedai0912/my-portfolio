import ProjectCarousel from './utils/projectCarousel'

export default function SlideShow() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 w-full">
            <div>
                <h2 className="text-2xl font-bold mb-4">Web Applications</h2>
                <ProjectCarousel />
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Mobile Applications</h2>
                <ProjectCarousel />
            </div>
        </section>
    )
}