import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, Calculator, MessageSquare, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const syllabusData = [
  {
    id: "mathematics",
    title: "Mathematics",
    icon: Calculator,
    topics: [
      "Number System and Simplification",
      "Percentage and Ratio & Proportion",
      "Average, Time & Work, Time & Distance",
      "Simple and Compound Interest",
      "Profit & Loss, Partnership",
      "Algebra and Linear Equations",
      "Geometry and Mensuration",
      "Trigonometry and Statistics"
    ]
  },
  {
    id: "reasoning",
    title: "General Intelligence & Reasoning",
    icon: MessageSquare,
    topics: [
      "Analogies and Similarities",
      "Differences and Classification",
      "Arithmetic Reasoning",
      "Non-Verbal Reasoning",
      "Visual Memory and Pattern Recognition",
      "Observation and Relationship Concepts",
      "Arithmetical Computation",
      "Analysis and Judgment"
    ]
  },
  {
    id: "awareness",
    title: "General Awareness",
    icon: BookOpen,
    topics: [
      "Current Affairs (National & International)",
      "Indian History and Culture",
      "Indian Geography and Environment",
      "Indian Constitution and Polity",
      "Economics and Banking",
      "General Science and Technology",
      "Sports and Games",
      "Awards and Honors"
    ]
  },
  {
    id: "technical",
    title: "Technical Subjects (ALP & Technical)",
    icon: Monitor,
    topics: [
      "Basic Electronics Engineering",
      "Electrical Engineering Fundamentals",
      "Mechanical Engineering Basics",
      "Computer Science and IT",
      "Civil Engineering Concepts",
      "Engineering Drawing",
      "Workshop Technology",
      "Safety and Environmental Engineering"
    ]
  }
];

const CourseSyllabus = () => {
  const [activeSection, setActiveSection] = useState<string>("mathematics");

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Detailed Syllabus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive curriculum covering all RRB exam subjects with latest updates
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {syllabusData.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 text-left ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card hover:bg-muted/50 text-foreground'
                  }`}
                >
                  <section.icon className="h-5 w-5" />
                  <span className="font-medium">{section.title}</span>
                  {activeSection === section.id ? (
                    <ChevronDown className="h-4 w-4 ml-auto" />
                  ) : (
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {syllabusData.map((section) => (
              <div
                key={section.id}
                className={`transition-all duration-500 ${
                  activeSection === section.id ? 'block' : 'hidden'
                }`}
              >
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <section.icon className="h-7 w-7" />
                      <span>{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.topics.map((topic, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Hours of Content</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Practice Questions</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Mock Tests</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSyllabus;