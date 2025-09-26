import { Button } from "./ui/button";
import { CheckCircle, Clock, Shield, Wrench } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl">
                Professional Laptop & Desktop Repair Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Expert technicians, fast turnaround, and quality guarantees. We fix everything from hardware failures to performance upgrades.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Fast Service</div>
                  <div className="text-sm text-muted-foreground">24-48hr turnaround</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Warranty</div>
                  <div className="text-sm text-muted-foreground">90-day guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Expert Tech</div>
                  <div className="text-sm text-muted-foreground">Certified pros</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToOrder} className="text-lg px-8">
                <Wrench className="h-5 w-5 mr-2" />
                Request Repair Now
              </Button>
              <a href="https://wa.me/917032856170?text=Hi,%20I%20want%20to%20book%20a%20laptop%20repair%20service!" target="_blank" class="whatsapp-btn" title="Contact on WhatsApp">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  WhatsApp us at +91 70328 56170
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1709102884400-b50ca1a12bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjByZXBhaXIlMjB0ZWNobmljaWFuJTIwd29ya2luZ3xlbnwxfHx8fDE3NTg3MzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional laptop repair technician working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">80+</div>
                <div className="text-sm opacity-90">Repairs Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}