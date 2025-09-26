import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Cpu, 
  HardDrive, 
  Monitor, 
  Battery, 
  Wifi, 
  Thermometer,
  Zap,
  Shield,
  Settings,
  Lock,
  RefreshCw,
  Key,
  FileArchive
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Hardware Repair",
      description: "Motherboard, keyboard, screen, and component replacements",
      image: "https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vdGhlcmJvYXJkJTIwcmVwYWlyfGVufDF8fHx8MTc1ODg5MjgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Motherboard repair", "Screen replacement", "Keyboard repair", "Port fixes"],
      icon: <Cpu className="h-6 w-6" />,
      pricing: "From $79"
    },
    {
      title: "Performance Upgrades",
      description: "RAM, SSD, and other performance-boosting upgrades",
      image: "https://images.unsplash.com/photo-1654240253461-3f51c793b366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzc2QlMjBtZW1vcnklMjB1cGdyYWRlfGVufDF8fHx8MTc1ODg5MjgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["SSD upgrades", "RAM installation", "Graphics upgrades", "CPU cooling"],
      icon: <Zap className="h-6 w-6" />,
      pricing: "From $99"
    },
    {
      title: "Diagnostics & Cleaning",
      description: "Comprehensive system analysis and professional cleaning",
      image: "https://images.unsplash.com/photo-1642229408339-572fa3328d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBkaWFnbm9zdGljJTIwY29tcHV0ZXIlMjByZXBhaXJ8ZW58MXx8fHwxNzU4NzMzNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Full diagnostics", "Thermal cleaning", "Software optimization", "Virus removal"],
      icon: <Settings className="h-6 w-6" />,
      pricing: "From $49"
    },
    {
      title: "Data Recovery",
      description: "Professional data recovery from failed drives and systems",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcmVjb3ZlcnklMjBoYXJkJTIwZHJpdmV8ZW58MXx8fHwxNzU4NzMzNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Failed drive recovery", "Deleted file recovery", "System crash recovery", "Data transfer"],
      icon: <FileArchive className="h-6 w-6" />,
      pricing: "From $129"
    },
    {
      title: "Password Unlock",
      description: "Windows password removal and account recovery services",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzd29yZCUyMHNlY3VyaXR5JTIwbG9ja3xlbnwxfHx8fDE3NTg3MzM1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Windows password reset", "User account recovery", "Admin access restore", "BIOS unlock"],
      icon: <Lock className="h-6 w-6" />,
      pricing: "From $59"
    },
    {
      title: "OS Re-installation",
      description: "Fresh operating system installation and setup services",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYXRpbmclMjBzeXN0ZW0lMjBpbnN0YWxsfGVufDF8fHx8MTc1ODczMzU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Windows installation", "Linux installation", "Driver setup", "Software restoration"],
      icon: <RefreshCw className="h-6 w-6" />,
      pricing: "From $89"
    },
    {
      title: "Windows & Office Activation",
      description: "Genuine Windows and Microsoft Office activation services",
      image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjB3aW5kb3dzJTIwb2ZmaWNlfGVufDF8fHx8MTc1ODczMzU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Windows activation", "Office activation", "License verification", "Genuine software"],
      icon: <Key className="h-6 w-6" />,
      pricing: "From $39"
    }
  ];

  const commonIssues = [
    { icon: <Monitor className="h-5 w-5" />, issue: "Cracked Screen" },
    { icon: <Battery className="h-5 w-5" />, issue: "Battery Issues" },
    { icon: <Wifi className="h-5 w-5" />, issue: "WiFi Problems" },
    { icon: <Thermometer className="h-5 w-5" />, issue: "Overheating" },
    { icon: <HardDrive className="h-5 w-5" />, issue: "Hard Drive Failure" },
    { icon: <Shield className="h-5 w-5" />, issue: "Virus/Malware" }
  ];

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional laptop and desktop repair services with transparent pricing and quality guarantees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <Badge variant="secondary">{service.pricing}</Badge>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-accent/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl mb-2">Common Issues We Fix</h3>
            <p className="text-muted-foreground">No matter what's wrong with your laptop or desktop, we've got you covered</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {commonIssues.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-4 bg-background rounded-lg border text-center">
                <div className="text-primary">{item.icon}</div>
                <span className="text-sm">{item.issue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}