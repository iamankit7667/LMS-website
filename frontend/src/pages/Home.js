import HeroSection from "../components/Hero-Section/HeroSection";
// import CompanySection from "../components/Company-section/Company";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
        {/* <CompanySection /> */}
        <AboutUs />
        <Courses />
        <ChooseUs />
        <Features />
        <FreeCourse />
        <Testimonials />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
