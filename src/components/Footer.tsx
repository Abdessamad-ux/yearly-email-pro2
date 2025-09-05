import { Mail, Shield, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-8 w-8" />
              <span className="text-2xl font-bold">Business Email Setup</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Professional business emails at unbeatable prices. Get contact@yourname.com, 
              info@yourbrand.com, and more for just $29.99/year.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-secondary" />
                <span>Secure Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>24-48hr Delivery</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Business Email Setup</li>
              <li>Domain Registration Help</li>
              <li>Email Client Configuration</li>
              <li>Technical Support</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Pricing</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>1 Email: $29.99/year</li>
              <li>2 Emails: $29.99/year</li>
              <li>5 Emails: $79.99/year</li>
              <li>Custom Packages Available</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Business Email Setup. All rights reserved. Professional business emails at unbeatable prices.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;