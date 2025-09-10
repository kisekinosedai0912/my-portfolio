import '../assets/css/index.css'
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Introduction from './Introduction'

export default function Body() {
    return (
        <>
            <section className="flex flex-col w-full h-[100dvh]">
                <div className="flex items-center justify-between w-full h-[20%]">
                    <div className="flex items-center justify-center gap-3 w-[35%] h-full">
                        <Link to="/">Skills</Link>
                        <Link to="/">Projects</Link>
                        <Link to="/">Contact</Link>
                    </div>
                    {/* Spacer */}
                    <div className="flex items-center justify-between w-[35%] h-full"></div>
                    {/* Spacer */}

                    <div className="flex items-center justify-end w-[35%] h-full">
                        <span className='flex items-center gap-2'>
                            <Sun />
                            <Switch />
                            <Moon />
                        </span>
                    </div>
                </div>
                <Introduction />
            </section>
        </>
    )
}