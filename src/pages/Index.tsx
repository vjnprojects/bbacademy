
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';
import ServiceCard from '../components/ui/ServiceCard';
import { Award, Sparkles, Users } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://thumbs-eu-west-1.myalbum.io/photo/1k0/36ed3fd8-070e-4a5c-8e77-8aadbf042437.jpg"
        title="Welcome to Beyond Barista Academy – Kigali's Iconic Hospitality School"
      >
        <Link to="/trainings" className="btn-primary mr-4">
          Explore Our Programs
        </Link>
        <Link to="/contact" className="btn-outline">
          Contact Us
        </Link>
      </HeroSection>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed mb-8">
              An iconic school in the heart of vibrant Kigali, the cleanest city in Africa, stands as a landmark destination, seamlessly blending exquisite Rwandan hospitality in the nation of a thousand hills. Timeless allure, attentive service, and meticulously designed settings invite you to embark on an awe-inspiring retreat. Immerse yourself in signature courses that offer a mix of recreation and career-building studies, making your dream unforgettable.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond Barista Academy (BBA) is a high-end Hospitality Training Centre (HTC) offering world-class service with a mission to awaken careers. Our origin story stems from the Middle East to Kigali—a home where stories of love, ambition, and gracious hospitality unfold. We create bridges between job seekers and employers. This is your chance to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Premium Training Programs" 
            subtitle="Discover world-class hospitality education in the heart of Rwanda"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Barista Training"
              description="Master the art of coffee preparation with our comprehensive barista training program."
              image="https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg"
              link="/trainings"
            />
            <ServiceCard
              title="Bartending & Mixology"
              description="Learn the science and art of creating exceptional cocktails and mastering bar service."
              image="https://thumbs-eu-west-1.myalbum.io/photo/1k0/031bec54-ad42-41bd-bab2-85880b04518c.jpg"
              link="/trainings"
            />
            <ServiceCard
              title="Sommelier Course"
              description="Develop your palate and knowledge of wines from around the world with our sommelier training."
              image="https://thumbs-eu-west-1.myalbum.io/photo/1k0/00ef293b-ef61-46f1-a08b-cfb5ab41d7e6.jpg"
              link="/trainings"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="What Makes BBA Different?" 
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles size={40} />}
              title="Fresh & Realistic"
              description="The only training center born in today's reality, aware of youth employment struggles—and built to solve them."
            />
            <FeatureCard
              icon={<Users size={40} />}
              title="Joyful & Serious"
              description="We take your future seriously, while bringing you joy and a classy experience during training."
            />
            <FeatureCard
              icon={<Award size={40} />}
              title="Trust & Integrity"
              description="Attention to detail, gentleman-like ethics, and a do-it-right-once mentality."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bba-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Hospitality Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Beyond Barista Academy and transform your passion into a successful career in the hospitality industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/trainings" className="btn-secondary">
              Browse Our Programs
            </Link>
            <Link to="/contact" className="bg-white text-bba-brown hover:bg-gray-100 transition-colors duration-300 px-6 py-3 rounded-md font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
