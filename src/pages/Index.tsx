import Hero from "@/components/Hero";
import CourseFeatures from "@/components/CourseFeatures";
import WhyChooseUs from "@/components/WhyChooseUs";
import CourseSyllabus from "@/components/CourseSyllabus";
import RegistrationForm from "@/components/RegistrationForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CourseFeatures />
      <WhyChooseUs />
      <CourseSyllabus />
      <Testimonials />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
