import { ArrowRight, ExternalLink, Github } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "Green Energy Landing Page",
        description: "A seamless landing page for a solar energy online firm",
        image: "/projects/web1.png",
        tag: ["Wordpress", "Php"],
        demoUrl: "https://rutsonenergy.com",
        githubUrl: ""
    },
    {
        id: 1,
        title: "Digital Tech Landing Page",
        description: "A seamless landing page for a digital solutions online firm",
        image: "/projects/web4.png",
        tag: ["Next.js", "Tailwind"],
        demoUrl: "https://senovaratech.vercel.app/",
        githubUrl: ""
    },
    {
        id: 1,
        title: "Community Program Landing Page",
        description: "A seamless landing page for a community online organization",
        image: "/projects/web5.png",
        tag: ["Next.js", "ESLint"],
        demoUrl: "https://lumos-nestor-kariukis-projects.vercel.app/",
        githubUrl: ""
    },
    {
        id: 1,
        title: "Adventure Company Landing Page",
        description: "A seamless landing page for an Adventure platform company",
        image: "/projects/web6.png",
        tag: ["React.js", "Tailwind.css"],
        demoUrl: "https://xpeditionhub.vercel.app/",
        githubUrl: ""
    },
    {
        id: 3,
        title: "Ecommerce Landing Page",
        description: "A seamless landing page for an ecommerce online app",
        image: "/projects/web2.png",
        tag: ["Javascript", "Node.js", "MySQL"],
        demoUrl: "https://buibuiecommerce.netlify.app",
        githubUrl: ""
    },
    {
        id: 3,
        title: "Online App Landing Page",
        description: "A seamless landing page for a loyalty online firm",
        image: "/projects/web3.png",
        tag: ["Wordpress", "Php", "JavaScript"],
        demoUrl: "https://ecodreum.com",
        githubUrl: ""
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
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tag.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    > 
                                        <ExternalLink size={20} /> 
                                    </a>
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    > 
                                        <Github size={20} /> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/nezzyyoung"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
                
            </div>
        </section>
    )
}