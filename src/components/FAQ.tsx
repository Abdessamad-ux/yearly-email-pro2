import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need a domain?",
      answer: "No, We will buy the domain for you to create business emails like contact@yourdomain.com. If you don't have one, we can help you register a domain name that fits your business perfectly."
    },
    {
      question: "Can I choose any prefix?",
      answer: "Absolutely! You can pick any prefix you want: info@, team@, hello@, talk@, ceo@, yourname@, support@, sales@, contact@, or literally anything else you can think of."
    },
    {
      question: "How long does setup take?",
      answer: "Usually 24-48 hours. We handle all the technical configuration, DNS setup, and testing to ensure your email works perfectly before delivery."
    },
    {
      question: "Can I use my email with Gmail/Outlook?",
      answer: "Yes! Your business email will work with any email client including Gmail, Outlook, Apple Mail, Thunderbird, or any mobile email app. We'll provide setup instructions."
    },
    {
      question: "When do I pay?",
      answer: "Only after your email is fully set up and working. We'll send you a test email from your new address so you can verify everything works before payment."
    },
    {
      question: "What if I need more than 2 emails?",
      answer: "We offer packages for 5 business emails at $79.99/year. For larger needs (10+ emails), contact us for custom pricing that still beats monthly competitors."
    },
    {
      question: "Is this really cheaper than competitors?",
      answer: "Yes! Google Workspace costs $72/year per email, Microsoft 365 costs $72/year per email. Our 2-email package is just $29.99/year total - saving you over 60%."
    },
    {
      question: "What's included with my business email?",
      answer: "You get a fully functional business email, spam filtering, mobile device compatibility, and the ability to send/receive emails using any email client. Storage is ample for typical business use."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Since you only pay after testing and confirming your email works, refunds are rarely needed. However, we offer a 30-day satisfaction guarantee for complete peace of mind."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about our business email service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="professional-card border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;