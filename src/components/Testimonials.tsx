import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import successImage from "@/assets/rrb-students.jpg";

const testimonials = [
  {
    id: 1,
    name: "Karthik Raj",
    position: "Station Master, RRB NTPC",
    location: "Chennai",
    rating: 5,
    testimonial: "The structured approach and Tamil medium classes helped me crack RRB NTPC in my first attempt. The faculty's guidance and practice tests were excellent. The study material covered the entire syllabus perfectly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Meera Devi",
    position: "Track Maintainer, RRB Group D",
    location: "Madurai",
    rating: 5,
    testimonial: "The interactive classes and doubt clearing sessions made all the difference. I secured a good rank in RRB Group D exam. The affordable fees and quality coaching gave me confidence to face the exam.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Arjun Singh",
    position: "Assistant Loco Pilot, RRB ALP",
    location: "Coimbatore",
    rating: 5,
    testimonial: "Best decision I made was joining this academy. The technical subject coaching was outstanding. The structured approach and regular assessments helped me clear both CBT 1 and CBT 2 successfully.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Divya Lakshmi",
    position: "Junior Engineer, RRB Technical",
    location: "Salem",
    rating: 5,
    testimonial: "The mock test series and performance analysis were game-changers for me. The faculty's expertise in engineering subjects helped me score high marks. Now I'm proudly serving Indian Railways.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful students who are now serving in Indian Railways
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative">
                    <img 
                      src={successImage} 
                      alt="Success Stories"
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-3xl font-bold mb-2">8000+</div>
                      <div className="text-lg">Railway Success Stories</div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <Quote className="h-12 w-12 text-primary/20 mb-4" />
                      <div className="flex mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-accent fill-current" />
                        ))}
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        "{testimonials[currentIndex].testimonial}"
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-primary font-medium">
                          {testimonials[currentIndex].position}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={goToNext}
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          {/* Additional Success Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-secondary mb-2">3500+</div>
              <div className="text-muted-foreground">NTPC Selections</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-accent mb-2">2800+</div>
              <div className="text-muted-foreground">Group D Selections</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">1500+</div>
              <div className="text-muted-foreground">ALP Selections</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;