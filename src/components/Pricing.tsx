import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: "Single Email",
      price: "$29.99",
      period: "/year",
      description: "Perfect for freelancers and small business owners",
      features: [
        "Including your Domain Name",
        "1 Professional Business Email",
        "Any prefix you choose",
        "24-48 hour setup",
        "Pay after delivery",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Double Email",
      price: "$34.99", 
      period: "/year",
      description: "Best value for growing businesses",
      features: [
        "Including your Domain Name",
        "2 Professional Business Emails",
        "Any prefixes you choose", 
        "24-48 hour setup",
        "Pay after delivery",
        "Priority email support",
        "Save $25 vs individual emails"
      ],
      popular: true
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No monthly fees, no hidden costs. Pay once per year and save big compared to competitors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`professional-card relative ${plan.popular ? 'ring-2 ring-primary' : ''} ${!plan.popular ? 'bg-blue-100 text-gray-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span className="font-medium">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className={`w-full ${plan.popular ? 'btn-hero' : 'btn-secondary'}`}
                size="lg"
              >
                Fill the form below
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Compare with competitors:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
            <div className="bg-muted/50 p-4 rounded-lg">
              <strong>Google Workspace:</strong><br/>
              $6/month = $72/year
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <strong>Microsoft 365:</strong><br/>
              $6/month = $72/year  
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary">
              <strong>Our Service:</strong><br/>
              $29.99/year total
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;