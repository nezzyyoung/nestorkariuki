import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const FloatingScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled beyond 100px (approx below HeroSection scroll down button)
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </button>
  );
};

export default FloatingScrollTopButton;
