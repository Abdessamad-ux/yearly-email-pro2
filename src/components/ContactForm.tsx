import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    currentEmail: '',
    domain: '',
    desiredEmails: '',
    additionalInfo: ''
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Remove handleSubmit or adjust it to validate and then submit normally

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get Your Professional Email Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to upgrade your business communications? Fill out the form below and we'll have your professional email ready in 24-48 hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="professional-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  Order Your Business Email
                </CardTitle>
                <CardDescription>
                  Tell us what you need and we'll set it up for you. Remember, you only pay after everything is working!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  action="https://formspree.io/f/xjkeplar" 
                  method="POST" 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentEmail">Your Current Email *</Label>
                      <Input
                        id="currentEmail"
                        name="currentEmail"
                        type="email"
                        value={formData.currentEmail}
                        onChange={handleInputChange}
                        placeholder="john@gmail.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="domain">Your WhatsApp Number (for order confirmation) *</Label>
                    <Input
                      id="domain"
                      name="domain"
                      value={formData.domain}
                      onChange={handleInputChange}
                      placeholder="We will contact you on WhatsApp to confirm your order."
                      required
                      className="mt-1"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      .
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="desiredEmails">Desired Business Email(s) *</Label>
                    <Textarea
                      id="desiredEmails"
                      name="desiredEmails"
                      value={formData.desiredEmails}
                      onChange={handleInputChange}
                      placeholder="Examples:&#10;- contact@yourBusinessName.com&#10;- info@yourName.com&#10;- sales@yourbusiness.com&#10;&#10;List all the emails you want (Up to 2 business emails for $34.99/year and up to 5 business emails for $79.99/year.)"
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any special requirements or questions? Let us know!"
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-hero w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Request
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>✅ No payment required now</p>
                    <p>✅ We'll contact you within 24 hours</p>
                    <p>✅ Pay only after your email is ready</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="professional-card border-0">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with us directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">support@career-maestros.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+31 637630250</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Service Area</p>
                    <p className="text-sm text-muted-foreground">Worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="professional-card border-0 bg-secondary/10">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ 24-48 hour setup</li>
                  <li>✅ Pay after delivery</li>
                  <li>✅ Works with any email client</li>
                  <li>✅ 60%+ cheaper than competitors</li>
                  <li>✅ Professional setup & testing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
