export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 bottom-[0]">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
                {/* Logo / Brand */}
                <h2 className="text-xl font-extrabold text-red-600 dark:text-red-500">
                Jasper Bendol
                </h2>

                {/* Links */}
                <nav className="flex space-x-6 mt-4 md:mt-0">
                <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                >
                    Projects
                </a>
                <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                >
                    Contact
                </a>
                </nav>

                {/* Copyright */}
                <p className="mt-6 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Jasper Bendol. All rights reserved.
                </p>
            </div>
        </footer>
    )
}