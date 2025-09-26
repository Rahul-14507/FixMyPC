import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Send, 
  Truck, 
  Wrench, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Submit Your Request",
      description: "Fill out our simple form with your laptop/desktop details and the issue you're experiencing. We'll provide an initial estimate within 2 hours.",
      icon: <Send className="h-8 w-8" />,
      time: "2 hours"
    },
    {
      number: "02", 
      title: "Ship or Drop Off",
      description: "Choose free shipping with our prepaid label, or visit our local service center. We provide secure packaging instructions and tracking.",
      icon: <Truck className="h-8 w-8" />,
      time: "1-2 days"
    },
    {
      number: "03",
      title: "Expert Repair",
      description: "Our certified technicians diagnose and repair your laptop/desktop using quality parts. We keep you updated throughout the process.",
      icon: <Wrench className="h-8 w-8" />,
      time: "24-48 hours"
    },
    {
      number: "04",
      title: "Quality Testing",
      description: "Comprehensive testing ensures everything works perfectly. We include a detailed report of work completed and warranty information.",
      icon: <CheckCircle className="h-8 w-8" />,
      time: "Same day"
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process gets your laptop or desktop fixed fast with minimal hassle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full bg-background border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {step.number}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {step.time}
                    </Badge>
                  </div>
                  
                  <div className="text-primary">{step.icon}</div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="bg-background rounded-full p-2 border-2 border-primary/20">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-background p-6 rounded-xl border">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <div className="text-left">
              <div className="font-medium">90-Day Warranty</div>
              <div className="text-sm text-muted-foreground">All repairs backed by our quality guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}