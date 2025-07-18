import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Monitor, Users, Book, MessageCircle, Laptop } from "lucide-react";

const BatchesFeatures = () => {
  const batchInfo = {
    startDate: "25 July 2025",
    modes: ["Online", "Offline", "Weekend"],
    features: [
      {
        icon: Book,
        title: "Printed Books",
        description: "High-quality printed study materials delivered to your doorstep"
      },
      {
        icon: MessageCircle,
        title: "WhatsApp Groups",
        description: "Dedicated groups for doubt clearing and peer interaction"
      },
      {
        icon: Laptop,
        title: "24/7 LMS Access",
        description: "Round-the-clock access to Learning Management System"
      },
      {
        icon: Monitor,
        title: "Live Classes",
        description: "Interactive live sessions with expert faculty"
      },
      {
        icon: Users,
        title: "Doubt Sessions",
        description: "Regular doubt clearing sessions and personal mentoring"
      },
      {
        icon: Clock,
        title: "Flexible Timing",
        description: "Multiple batch timings to suit your schedule"
      }
    ]
  };

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Batches & Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our comprehensive coaching program with flexible batch options
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Batch Information */}
          <Card className="lg:col-span-1 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="text-center">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl text-primary">New Batch Starting</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-white/80 p-4 rounded-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">{batchInfo.startDate}</h3>
                <p className="text-muted-foreground">Next batch enrollment open</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Course Modes:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {batchInfo.modes.map((mode, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {mode}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                🚀 Register Now
              </Button>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {batchInfo.features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Secure Your Railway Job Today!</h3>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of successful candidates who achieved their dreams with us
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              🚀 Register Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BatchesFeatures;