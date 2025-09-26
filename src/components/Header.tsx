import { Button } from "./ui/button";
import { Wrench, Phone, Mail } from "lucide-react";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wrench className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold text-primary">FixMyPC</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('order')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Get Started
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+91 70328 56170</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>pujarirahulpandu@gmail.com</span>
            </div>
          </div>
          <Button onClick={() => scrollToSection('order')}>
            Request Repair
          </Button>
        </div>
      </div>
    </header>
  );
}