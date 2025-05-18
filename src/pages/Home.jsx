import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground"


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* NavBar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/* Footer */}


    </div>
    );
};