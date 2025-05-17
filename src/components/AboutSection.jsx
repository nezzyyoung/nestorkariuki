import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate SoftWare Engineer & Tech Creator</h3>

                        <p className="text-muted-foreground">
                            I thrive on crafting innovative solutions that drive efficiency and push the boundaries
                            of digital transformation. With expertise across programming, system architecture,
                            and emerging technologies, I bring a strategic mindset and hands-on approach to
                            every project. My commitment to excellence ensures that every solution is optimized
                            for outstanding performance, productivity, and impact. Whether building scalable applications,
                            exploring AI advancements, or enhancing user experiences, I embrace technology’s
                            power to shape the future with precision and ingenuity.
                        </p>

                        <p className="text-muted-foreground">
                            Driven by an insatiable curiosity for technology, I am passionate about software engineering
                            and its limitless potential to shape the future. From coding intricate systems to exploring AI,
                            blockchain, and cloud computing, I immerse myself in the ever-evolving tech landscape.
                            My enthusiasm lies in crafting efficient, scalable solutions that enhance productivity and
                            solve real-world challenges. Whether it’s optimizing performance, developing groundbreaking
                            applications, or pushing the boundaries of innovation, I am committed to turning ideas into
                            impactful digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="cosmic-button"> 
                                Get In Touch 
                            </a>

                            <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> 
                                Download CV 
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                   <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">SoftWare and Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating robust and responsive mobile and web applications
                                        with modern frameworks and technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                   <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX design</h4>
                                    <p className="text-muted-foreground">
                                        Designing mock-ups for user interactions and seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                   <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading both small scale and large scale project concepts to completion
                                        with agile methodologies and object Oriented Programming.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}