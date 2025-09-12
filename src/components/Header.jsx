import '../assets/css/index.css'
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Header() {
    return (
        <header className="flex items-center justify-around w-full h-[18%]">
            <div className="flex items-center gap-6">
                {/* <Link to="/">Skills</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact</Link> */}
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">About Me</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Skills</BreadcrumbLink>
                            </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Projects</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
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