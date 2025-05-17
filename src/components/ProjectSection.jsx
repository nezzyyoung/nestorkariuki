

const projects = [
    {
        id: 1,
        title: "Green Energy Landing Page",
        description: "A seamless landing page for a solar energy online firm",
        image: "/projects/web1.png",
        tag: ["Wordpress", "Php"],
        demoUrl: "rutsonenergy.com"
    },
    {
        id: 3,
        title: "Ecommerce Landing Page",
        description: "A seamless landing page for an ecommerce online app",
        image: "/projects/web2.png",
        tag: ["Javascript", "Node.js", "MySQL"],
        demoUrl: "buibuiecommerce.netlify.app"
    },
    {
        id: 3,
        title: "Online App Landing Page",
        description: "A seamless landing page for a loyalty online firm",
        image: "/projects/web3.png",
        tag: ["Wordpress", "Php", "JavaScript"],
        demoUrl: "ecodreum.com"
    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my most recent projects, Each project was carefully tailored
                    and crafted with attention to detail, performance, optimized, and user experience
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}