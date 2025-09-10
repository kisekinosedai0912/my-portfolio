export default function Introduction() {
    return (
        <section className="h-full w-full px-16 py-16 bg-white dark:bg-black text-gray-800 dark:text-gray-200">
            <div className="w-[97%] flex flex-col gap-6">
                {/* Heading */}
                <h1 className="text-4xl font-extrabold text-red-600 dark:text-red-500">
                    Hi, I'm Jasper Bendol 👋
                </h1>

                {/* Who you are */}
                <p className="text-lg leading-relaxed">
                    I’m a passionate{" "}
                    <span className="font-semibold text-red-600 dark:text-red-400">
                        Full-Stack Developer
                    </span>{" "}
                    with hands-on experience building dynamic and scalable web applications. I enjoy turning complex problems into simple, intuitive solutions that create value for both people and businesses.
                </p>

                {/* Skills & Expertise */}
                <p className="text-lg leading-relaxed">
                    Over the years, I’ve honed my skills in <span className="font-semibold">JavaScript</span> and <span className="font-semibold">Laravel</span>, building complex systems that deliver results.  
                    Currently, I'm diving deeper into <span className="font-semibold">React.js</span> in combination with <span className="font-semibold">Tailwind CSS</span>, and <span className="font-semibold">Laravel</span>. I also have experienced working with {" "}
                    <span className="font-semibold">External APIs</span>, <span className="font-semibold">REST APIs</span>, <span className="font-semibold">Axios</span>, and <span className="font-semibold">MySQL</span> to create structured, scalable & optimized solutions.
                </p>

                {/* Career Journey */}
                <p className="text-lg leading-relaxed">
                    My first professional role was as a{" "}
                    <span className="font-semibold">Junior CRM Developer</span>, where I worked with <span className="font-semibold">C#</span> and Microsoft Services, particularly <span className="font-semibold">Azure DevOps</span> to deliver customized CRM solutions for clients. 
                    This experience taught me the importance of writing maintainable, scalable, and client-focused code while maintaining a collaboration effectively.
                </p>

                {/* Current Focus & Growth */}
                <p className="text-lg leading-relaxed">
                    Today, I continue to expand my expertise, currently diving deeper into <span className="font-semibold">MERN stack</span> with Express.js, Node.js, and MongoDB. I’m always thrilled to learn new technologies, tackle challenging problems, and deliver impactful solutions.
                </p>

                {/* Closing Statement */}
                <p className="text-lg leading-relaxed">
                    Every project I work on challenges me to innovate, problem-solve, and deliver meaningful code that makes a real impact.
                </p>
            </div>
        </section>
    );
}
