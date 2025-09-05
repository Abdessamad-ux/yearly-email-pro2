import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-email.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Professional business email setup" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Mail className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Your Professional Business Email for{" "}
            <span className="gradient-text">$29.99/Year</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Look professional, build trust, and reach more clients with your own branded email address. 
            Choose any prefix you like: <span className="font-semibold text-primary">contact@yourname.com</span>, 
            <span className="font-semibold text-primary"> info@</span>, 
            <span className="font-semibold text-primary"> sales@</span>, 
            <span className="font-semibold text-primary"> hello@</span> … or anything you want!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="btn-hero text-lg px-8 py-4"
              size="lg"
            >
              Get Started Today
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Pay only after delivery</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>24-48 Hour Setup</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Any Prefix You Want</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Works with any Email</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;