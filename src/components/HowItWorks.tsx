import { MessageSquare, Settings, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "1",
      title: "Tell Us What You Want",
      description: "Simply tell us the email address you want (e.g., hello@yourdomain.com) using our contact form below."
    },
    {
      icon: Settings,
      step: "2", 
      title: "We Set It Up For You",
      description: "Our team handles all the technical setup in 24-48 hours. No complicated configurations needed on your end."
    },
    {
      icon: CreditCard,
      step: "3",
      title: "You Pay Once It's Ready",
      description: "Only pay after your email is fully set up and working. Test it first, then pay - completely risk-free."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your professional business email is incredibly simple. Here's our 3-step process:
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center relative">
                <div className="professional-card">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-primary to-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-px bg-gradient-to-r from-primary to-secondary"></div>
                    <div className="w-0 h-0 border-l-[6px] border-l-secondary border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-8 -mt-px"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;