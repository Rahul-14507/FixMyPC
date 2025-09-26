import { Wrench, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wrench className="h-6 w-6" />
              <span className="text-xl font-semibold">FixMyPC</span>
            </div>
            <p className="text-sm opacity-90 max-w-sm">
              Professional laptop and desktop repair services with fast turnaround times and quality guarantees.
            </p>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" onClick={() => scrollToSection('order')}>
                Get Quote
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Hardware Repair</li>
              <li>Performance Upgrades</li>
              <li>Diagnostics & Cleaning</li>
              <li>Data Recovery</li>
              <li>Password Unlock</li>
              <li>OS Re-installation</li>
              <li>Windows/Office Activation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 70328 56170</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>pujarirahulpandu@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Business Hours</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <div>
                  <div>Mon-Fri: 4PM-11PM</div>
                  <div>Saturday: 10AM-4PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 p-3 rounded-lg">
              <div className="text-sm font-medium">Emergency Service Available</div>
              <div className="text-xs opacity-90">24/7 for critical repairs</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm opacity-90">
            © {currentYear} FixMyPC. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm opacity-90">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Warranty Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}