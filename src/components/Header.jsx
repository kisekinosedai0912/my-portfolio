import '../assets/css/index.css'
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="flex items-center justify-around w-full h-[18%]">
            <div className="flex items-center gap-6">
                <Link to="/">Skills</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact</Link>
            </div>
            {/* Spacer */}
            <div></div>
            {/* Spacer */}

            <div className="flex items-center gap-2">
                <Sun />
                <Switch />
                <Moon />
            </div>
        </header>
    )
}