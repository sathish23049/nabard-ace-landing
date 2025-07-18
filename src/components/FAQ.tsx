import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqData = [
  {
    id: 1,
    question: "What is the duration of the NABARD Grade A & B course?",
    answer: "The complete course duration is 6 months for Grade A and 4 months for Grade B. This includes live classes, mock tests, and revision sessions. You also get lifetime access to recorded lectures and study materials."
  },
  {
    id: 2,
    question: "Are the classes live or recorded?",
    answer: "We offer both live interactive classes and recorded sessions. Live classes are conducted by expert faculty with real-time doubt solving. All live sessions are recorded and made available for revision within 24 hours."
  },
  {
    id: 3,
    question: "What study materials are provided?",
    answer: "Complete study package includes printed books, PDFs, practice question banks, previous year papers, current affairs updates, and exclusive notes prepared by our faculty. All materials are updated as per latest exam pattern."
  },
  {
    id: 4,
    question: "How many mock tests are included?",
    answer: "The course includes 50+ mock tests for each grade (A & B), including sectional tests, full-length tests, and previous year paper tests. Each test comes with detailed analysis and performance tracking."
  },
  {
    id: 5,
    question: "Is there any doubt clearing support?",
    answer: "Yes, we provide dedicated doubt clearing sessions twice a week. You can ask questions through our app, WhatsApp, or during live sessions. Our faculty responds to all queries within 24 hours."
  },
  {
    id: 6,
    question: "What is the refund policy?",
    answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course quality. Refunds are processed within 15-20 working days after the refund request is approved."
  },
  {
    id: 7,
    question: "Can I access the course on mobile?",
    answer: "Yes, our learning platform is mobile-friendly. You can access live classes, recorded lectures, notes, and take tests on any device - mobile, tablet, or computer with internet connection."
  },
  {
    id: 8,
    question: "What is the fee structure?",
    answer: "Grade A course: ₹25,000, Grade B course: ₹20,000, Combo package: ₹40,000. We offer EMI options and special discounts for early enrollment. Contact us for current offers and scholarship details."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-primary mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our NABARD preparation course
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <Card key={faq.id} className="border border-border/50 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-border/30 pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you with any additional queries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919876543210" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  📞 Call: +91 98765 43210
                </a>
                <a 
                  href="mailto:info@shankarbankingacademy.com" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-colors duration-200"
                >
                  ✉️ Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;