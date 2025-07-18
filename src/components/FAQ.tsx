import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqData = [
  {
    id: 1,
    question: "What is the eligibility criteria for different RRB exams?",
    answer: "RRB NTPC: Graduate in any discipline, age 18-33 years. RRB Group D: 10th/12th pass, age 18-33 years. RRB ALP: 10th/ITI or equivalent, age 18-28 years. Age relaxations apply for reserved categories."
  },
  {
    id: 2,
    question: "How long is the RRB coaching course duration?",
    answer: "Our comprehensive RRB course is designed for 4-6 months, including live classes, practice sessions, and mock tests. We also offer intensive crash courses of 2-3 months duration."
  },
  {
    id: 3,
    question: "Are classes available in Tamil and English?",
    answer: "Yes, we offer coaching in both Tamil and English medium. Students can choose their preferred language during enrollment to ensure better understanding and comfort."
  },
  {
    id: 4,
    question: "What study materials are provided?",
    answer: "We provide printed books, online PDFs, current affairs updates, practice test series, and access to our digital LMS platform with video lectures and doubt clearing support."
  },
  {
    id: 5,
    question: "How many practice tests are included?",
    answer: "Our course includes 100+ mock tests, 200+ sectional tests, and daily practice quizzes. All tests follow the latest RRB exam pattern and difficulty level."
  },
  {
    id: 6,
    question: "What is the fee structure and are there any scholarships?",
    answer: "We offer competitive and affordable fee structure with EMI options. Merit-based scholarships and discounts are available for early enrollment. Contact our counseling team for details."
  },
  {
    id: 7,
    question: "Can I access the course on mobile?",
    answer: "Yes, our learning platform is mobile-friendly. You can access live classes, recorded lectures, notes, and take tests on any device - mobile, tablet, or computer with internet connection."
  },
  {
    id: 8,
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide complete guidance for document verification, medical examination, and joining formalities. Our alumni network helps with placement support and career guidance."
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
            Find answers to common questions about our RRB preparation course
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