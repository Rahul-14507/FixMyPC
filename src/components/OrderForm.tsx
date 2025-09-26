import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Alert, AlertDescription } from "./ui/alert";
import { Badge } from "./ui/badge";
import { 
  Laptop, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  AlertCircle,
  Monitor
} from "lucide-react";

export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mandgwaa", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      setError("Failed to submit request. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="order" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl mb-2">Request Submitted Successfully!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for choosing FixMyPC. We'll review your request and send you a detailed quote within 2 hours.
                </p>
                <div className="space-y-2 text-sm">
                  <p>📧 Check your email for confirmation details</p>
                  <p>📞 Urgent? Call us at +91 70328 56170</p>
                  <p>⏰ We'll contact you within 2 business hours</p>
                </div>
                <Button 
                  className="mt-6" 
                  onClick={() => {setIsSubmitted(false); window.location.reload();}}
                >
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">Get Your PC Fixed</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out this form to get started. We'll provide a detailed quote within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Repair Request Form
                </CardTitle>
                <CardDescription>
                  Provide details about your laptop/desktop and the issues you're experiencing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address (for shipping)</Label>
                    <Input id="address" name="address" placeholder="Street address, city, state, ZIP" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deviceType">Device Type *</Label>
                    <Select name="deviceType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select device type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="desktop">Desktop</SelectItem>
                        <SelectItem value="all-in-one">All-in-One PC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand">Brand *</Label>
                      <Select name="brand" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apple">Apple (Old Intel Macs only)</SelectItem>
                          <SelectItem value="dell">Dell</SelectItem>
                          <SelectItem value="hp">HP</SelectItem>
                          <SelectItem value="lenovo">Lenovo</SelectItem>
                          <SelectItem value="asus">ASUS</SelectItem>
                          <SelectItem value="acer">Acer</SelectItem>
                          <SelectItem value="microsoft">Microsoft Surface</SelectItem>
                          <SelectItem value="custom-built">Custom Built</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">Model Number</Label>
                      <Input id="model" name="model" placeholder="e.g., ACER Aspire A315, OptiPlex 7090" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select name="serviceType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="What do you need?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="repair">Hardware Repair</SelectItem>
                        <SelectItem value="upgrade">Performance Upgrades</SelectItem>
                        <SelectItem value="diagnostic">Diagnostics & Cleaning</SelectItem>
                        <SelectItem value="data-recovery">Data Recovery</SelectItem>
                        <SelectItem value="password-unlock">Password Unlock</SelectItem>
                        <SelectItem value="os-reinstall">OS Re-installation</SelectItem>
                        <SelectItem value="activation">Windows/Office Activation</SelectItem>
                        <SelectItem value="not-sure">Not Sure - Need Diagnosis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="issue">Describe the Issue *</Label>
                    <Textarea 
                      id="issue" 
                      name="issue" 
                      placeholder="Please describe what's wrong with your laptop/desktop, any error messages, when the problem started, etc."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select name="urgency">
                      <SelectTrigger>
                        <SelectValue placeholder="How urgent is this repair?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (2-3 days), Service cost: ₹300 </SelectItem>
                        <SelectItem value="expedited">Expedited (1-2 days), Service cost: ₹400</SelectItem>
                        <SelectItem value="emergency">Emergency (same day), Service cost: ₹600</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="dataBackup" name="dataBackup" />
                    <Label htmlFor="dataBackup" className="text-sm">
                      I need data backup/transfer services (+₹200)
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" name="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms of service and 90-day warranty policy *
                    </Label>
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Repair Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Quick Turnaround
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Standard Service</span>
                  <Badge variant="secondary">2-3 days</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Expedited Service</span>
                  <Badge variant="secondary">1-2 days</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Emergency Service</span>
                  <Badge variant="secondary">Same day</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">+91 70328 56170</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri 4PM-11PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">pujarirahulpandu@gmail.com</div>
                    <div className="text-sm text-muted-foreground">24/7 email support</div>
                  </div>
                </div>

              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Free Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">
                  We provide prepaid shipping labels for all repairs. Safe, insured, and trackable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}