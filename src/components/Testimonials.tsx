import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content: "I ordered info@mydomain.com and got it in 1 day. Looks super professional and cost way less than Google Workspace! My clients take me much more seriously now.",
      rating: 5,
      email: "info@sarahdesigns.com"
    },
    {
      name: "Mike Chen",
      role: "Small Business Owner",
      content: "Finally found an affordable solution! Got contact@mikesplumbing.com and hello@mikesplumbing.com for just $35/year. No more expensive monthly fees!",
      rating: 5,
      email: "contact@mikesplumbing.com"
    },
    {
      name: "Jessica Rodriguez",
      role: "Marketing Consultant",
      content: "The setup was incredibly fast and professional. I love having jessica@marketingpro.com - it's made such a difference in my business communications.",
      rating: 5,
      email: "jessica@marketingpro.com"
    },
    {
      name: "David Thompson",
      role: "Tech Startup Founder",
      content: "Saved us hundreds compared to Microsoft 365. Got ceo@innovatetech.com and team@innovatetech.com set up perfectly. Highly recommend for any business!",
      rating: 5,
      email: "ceo@innovatetech.com"
    },
    {
      name: "Lisa Wang",
      role: "E-commerce Store Owner",
      content: "Customer service was amazing and the price can't be beat. My support@lisashop.com email works flawlessly with my phone and computer.",
      rating: 5,
      email: "support@lisashop.com"
    },
    {
      name: "Robert Martinez",
      role: "Real Estate Agent",
      content: "Professional email was exactly what I needed to stand out. robert@homeswithrob.com has helped me close more deals. Worth every penny!",
      rating: 5,
      email: "robert@homeswithrob.com"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied business owners who chose our professional email service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="professional-card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mb-2">{testimonial.role}</div>
                <div className="text-sm font-mono bg-muted/50 px-2 py-1 rounded">
                  {testimonial.email}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-secondary/10 p-6 rounded-lg max-w-2xl mx-auto">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <p className="text-muted-foreground">
              Based on 200+ customer reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;