import { BookOpen, Users, FileText, Video, Trophy, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "Live Interactive Classes",
    description: "Join real-time classes with expert faculty and interactive doubt-solving sessions"
  },
  {
    icon: BookOpen,
    title: "Full Syllabus Coverage",
    description: "Complete coverage of Agriculture, Rural Development, Economics, Reasoning & Quant"
  },
  {
    icon: FileText,
    title: "Study Materials & PDFs",
    description: "Comprehensive study materials, notes, and downloadable PDFs for offline study"
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced faculty with proven track record in banking exams"
  },
  {
    icon: Trophy,
    title: "Mock Tests & Practice",
    description: "Regular mock tests and practice sessions to evaluate your preparation"
  },
  {
    icon: MessageCircle,
    title: "Doubt Clearing Sessions",
    description: "Dedicated doubt clearing sessions to resolve all your queries"
  }
];

const CourseFeatures = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Course Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to crack NABARD Grade A & B exams in one comprehensive package
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Faculty Highlight */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Meet Our Expert Faculty
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">DR</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Dr. Rajesh Sharma</h4>
                      <p className="text-muted-foreground">Agriculture & Rural Development Expert</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-secondary-foreground font-bold">PR</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Prof. Priya Gupta</h4>
                      <p className="text-muted-foreground">Economics & Financial Awareness</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground font-bold">AM</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Amit Kumar</h4>
                      <p className="text-muted-foreground">Reasoning & Quantitative Aptitude</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">SK</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Sunita Joshi</h4>
                      <p className="text-muted-foreground">English Language & Communication</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-1">
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-24 w-24 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground">15+ Expert Faculty</p>
                      <p className="text-muted-foreground">With 10+ Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;