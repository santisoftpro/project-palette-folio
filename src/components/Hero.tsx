import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Alex Johnson
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full-Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies. Passionate about clean code, 
            innovative solutions, and building applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="xl">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="glow" size="xl">
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;