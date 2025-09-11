import Main from './Main'
import Header from './Header'

export default function AboutMe() {
    return (
        <section className="flex flex-col flex-1 px-10 py-12 overflow-y-auto">
            <Header />
            <Main />
        </section>
    )
}