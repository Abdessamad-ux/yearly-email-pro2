import { DollarSign, Clock, User, Shield, CheckCircle, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Affordable",
      description: (
        <span>
          Only <span className="font-bold text-yellow-500">$29.99/year</span> for one business email. We charge yearly, while competitors charge:
          <br />
          Microsoft 365: $6/month = <span className="text-red-500">$72/year</span>
          <br />
          Google Workspace: $6/month = <span className="text-red-500">$72/year</span>
        </span>
      ),
      highlight: "Save 60%+ vs competitors"
    },
    {
      icon: User,
      title: "Personalized",
      description: (
        <span>
          Use any prefix you want: @contact, info@, sales@, hello@, ceo@, yourname@ - completely customizable. 
          <span className="text-green-500 font-bold"> Here is an example: </span>
          <span className="font-bold text-yellow-500">contact@YourDomain.com</span>
        </span>
      ),
      highlight: "Your choice, your brand"
    },
    {
      icon: Shield,
      title: "Professional",
      description: "Instantly boost your credibility with customers and build trust with a professional email.",
      highlight: "Build instant trust"
    },
    {
      icon: Zap,
      title: "Easy Setup",
      description: "No technical skills needed. We handle everything for you in 24-48 hours.",
      highlight: "Zero hassle"
    },
    {
      icon: CheckCircle,
      title: "Pay After Delivery",
      description: "No risk - only pay once your email is ready and working perfectly.",
      highlight: "100% risk-free"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Get your professional email up and running in just 24-48 hours.",
      highlight: "Lightning fast"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Our Business Email Service?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlike expensive monthly competitors, we offer professional business emails at unbeatable yearly rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="professional-card text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="bg-secondary/10 px-3 py-1 rounded-full inline-block">
                  <span className="text-sm font-medium text-secondary">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
