import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroImage from "@/assets/rrb-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="RRB Course Hero"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white fade-in">
            <div className="mb-6">
              <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                🚂 Tamil Nadu's Leading Railway Academy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                RRB NTPC | Group D | ALP
                <span className="block text-accent">Coaching in Tamil Nadu</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                Crack Railway Exams with India's Top-Ranked Coaching Institute
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🎯 Join Free Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                📥 Download Syllabus
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">8000+</div>
                <div className="text-sm text-primary-foreground/80">Railway Selections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">92%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-sm text-primary-foreground/80">Expert Trainers</div>
              </div>
            </div>
          </div>

          {/* Video/Image */}
          <div className="relative fade-in float-animation">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-white/95">
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="font-semibold">Watch Course Demo</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Free Railway Demo Class
                </h3>
                <p className="text-gray-600">
                  Experience our Tamil + English coaching methodology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;