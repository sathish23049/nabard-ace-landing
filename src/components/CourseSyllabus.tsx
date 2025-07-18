import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, Calculator, MessageSquare, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const syllabusData = [
  {
    id: "agriculture",
    title: "Agriculture & Rural Development",
    icon: BookOpen,
    topics: [
      "Indian Agriculture - Features, Problems & Reforms",
      "Cropping Patterns & Agricultural Productivity",
      "Food Security & Public Distribution System",
      "Agricultural Marketing & Price Policy",
      "Rural Development Programmes & Schemes",
      "Cooperative Movement in India",
      "Watershed Management & Sustainable Agriculture",
      "Agricultural Finance & Credit System"
    ]
  },
  {
    id: "economics",
    title: "Economic & Social Issues",
    icon: Calculator,
    topics: [
      "Indian Economy Overview",
      "Economic Planning & Five Year Plans",
      "Monetary & Fiscal Policy",
      "Banking System in India",
      "Financial Markets & Institutions",
      "International Trade & Balance of Payments",
      "Poverty, Unemployment & Human Development",
      "Social Issues & Government Policies"
    ]
  },
  {
    id: "reasoning",
    title: "Reasoning, Quant & English",
    icon: MessageSquare,
    topics: [
      "Logical Reasoning - Verbal & Non-Verbal",
      "Analytical Reasoning & Puzzles",
      "Data Interpretation & Analysis",
      "Quantitative Aptitude - Arithmetic",
      "Algebra, Geometry & Mensuration",
      "English Language - Grammar & Vocabulary",
      "Reading Comprehension",
      "Writing Skills & Essay Writing"
    ]
  },
  {
    id: "computer",
    title: "Computer Awareness",
    icon: Monitor,
    topics: [
      "Computer Fundamentals & Hardware",
      "Operating Systems & Software",
      "Internet & Email Basics",
      "MS Office Suite - Word, Excel, PowerPoint",
      "Database Management Systems",
      "Computer Networks & Security",
      "Digital Banking & E-Commerce",
      "Latest Technology Trends"
    ]
  }
];

const CourseSyllabus = () => {
  const [activeSection, setActiveSection] = useState<string>("agriculture");

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Course Syllabus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coverage of all subjects as per latest NABARD exam pattern
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