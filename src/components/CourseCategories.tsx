import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Train, Wrench, Users, Computer } from "lucide-react";

const CourseCategories = () => {
  const courses = [
    {
      icon: Train,
      title: "RRB NTPC",
      description: "Non-Technical Popular Categories for Graduate level posts",
      eligibility: "Graduate in any discipline",
      link: "#ntpc-syllabus"
    },
    {
      icon: Users,
      title: "RRB Group D",
      description: "Level 1 posts including Track Maintainer, Helper, Porter",
      eligibility: "10th/12th pass",
      link: "#groupd-syllabus"
    },
    {
      icon: Wrench,
      title: "RRB ALP",
      description: "Assistant Loco Pilot and Technician Grade III posts",
      eligibility: "ITI/Diploma in relevant trade",
      link: "#alp-syllabus"
    },
    {
      icon: Computer,
      title: "Technical Posts",
      description: "Junior Engineer, Senior Section Engineer, and other technical roles",
      eligibility: "Engineering Degree/Diploma",
      link: "#technical-syllabus"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Course Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the right course for your Railway career aspirations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <course.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{course.description}</p>
                <div className="bg-accent/10 p-3 rounded-lg">
                  <p className="text-sm font-medium text-accent-foreground">
                    <strong>Eligibility:</strong> {course.eligibility}
                  </p>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  View Syllabus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;