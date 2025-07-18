import { Award, Users, BookOpen, HelpCircle, TrendingUp, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from industry experts with 10+ years of banking exam coaching experience"
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "95% success rate with 5000+ students placed in various banking positions"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description: "Updated study materials covering entire syllabus with latest exam patterns"
  },
  {
    icon: HelpCircle,
    title: "Doubt Clearing Sessions",
    description: "Regular doubt clearing sessions and one-on-one mentoring support"
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Multiple batch timings to suit your schedule with recorded session access"
  },
  {
    icon: Award,
    title: "Mock Test Series",
    description: "Extensive mock tests with detailed analysis and performance tracking"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Shankar Banking Academy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful candidates who trusted us for their NABARD preparation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-card hover:bg-muted/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-border"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Success Stories That Inspire
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">2500+</div>
                  <div className="text-sm opacity-90">Grade A Selections</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">3000+</div>
                  <div className="text-sm opacity-90">Grade B Selections</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">₹50L+</div>
                  <div className="text-sm opacity-90">Avg. Package</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h4 className="text-xl font-semibold mb-2">Top Rankers</h4>
                  <p className="opacity-90">
                    Our students consistently rank in top 100 across India in NABARD examinations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;