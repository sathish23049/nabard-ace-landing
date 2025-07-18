import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Phone, Mail, MapPin, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.course) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required for registration",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Registration Successful!",
      description: "Our team will contact you within 24 hours with course details.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      course: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Start Your NABARD Journey Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of successful candidates. Fill the form to get instant access to course details and special offers.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Instant Course Access</h3>
                  <p className="text-muted-foreground">Get immediate access to demo classes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Personal Counseling</h3>
                  <p className="text-muted-foreground">One-on-one guidance from experts</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Study Material</h3>
                  <p className="text-muted-foreground">Comprehensive study resources included</p>
                </div>
              </div>
            </div>

            {/* Special Offer */}
            <div className="mt-12 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl p-6 border border-accent/30">
              <h3 className="text-xl font-bold text-foreground mb-2">
                🎉 Limited Time Offer!
              </h3>
              <p className="text-muted-foreground mb-3">
                Register now and get 30% off on course fees + Free mock test series
              </p>
              <div className="text-sm text-accent font-semibold">
                Offer valid till month end
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div>
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">
                  Enroll Now - NABARD Course
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <UserPlus className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="pl-12 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-12 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-12 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-foreground font-medium">
                      City *
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="pl-12 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-foreground font-medium">
                      Course Selection *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("course", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nabard-grade-a">NABARD Grade A</SelectItem>
                        <SelectItem value="nabard-grade-b">NABARD Grade B</SelectItem>
                        <SelectItem value="nabard-combo">NABARD Grade A + B Combo</SelectItem>
                        <SelectItem value="nabard-mock">Mock Test Series Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Enroll Now - Get Started Today!
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By enrolling, you agree to our Terms & Conditions and Privacy Policy
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;