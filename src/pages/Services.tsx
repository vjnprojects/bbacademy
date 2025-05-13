
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';

const Services = () => {
  // Services data
  const services = [
    {
      title: "Barista Training",
      description: "Master the art of coffee preparation with our comprehensive barista training program. Learn everything from bean selection to latte art in our state-of-the-art facilities.",
      image: "https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg",
      features: [
        "Coffee bean selection and roasting basics",
        "Espresso machine operation and maintenance",
        "Milk steaming and latte art techniques",
        "Coffee flavor profiles and tasting",
        "Customer service excellence"
      ]
    },
    {
      title: "Bartending & Mixology",
      description: "Learn the science and art of creating exceptional cocktails and mastering bar service. Our program covers classic and contemporary mixology techniques.",
      image: "https://thumbs-eu-west-1.myalbum.io/photo/1k0/031bec54-ad42-41bd-bab2-85880b04518c.jpg",
      features: [
        "Classic and contemporary cocktail recipes",
        "Flair bartending techniques",
        "Spirit knowledge and tasting",
        "Bar setup and management",
        "Customer interaction and upselling"
      ]
    },
    {
      title: "Sommelier Course",
      description: "Develop your palate and knowledge of wines from around the world with our sommelier training. Become an expert in wine selection, pairing, and service.",
      image: "https://thumbs-eu-west-1.myalbum.io/photo/1k0/00ef293b-ef61-46f1-a08b-cfb5ab41d7e6.jpg",
      features: [
        "Wine regions and varietals",
        "Wine tasting techniques",
        "Food and wine pairing principles",
        "Wine service and etiquette",
        "Wine cellar management"
      ]
    },
    {
      title: "Real Simulation Environment",
      description: "Practice your skills in our real-world simulation environments that replicate actual bars, coffee shops, and wine cellars. Learn by doing in realistic settings.",
      image: "https://thumbs-eu-west-1.myalbum.io/photo/1k0/44cb386c-5f5f-48f1-9f70-50f970667323.jpg",
      features: [
        "Fully equipped bar stations",
        "Professional-grade espresso machines",
        "Wine tasting room and cellar",
        "POS system training",
        "Customer interaction scenarios"
      ]
    },
    {
      title: "Certification",
      description: "Receive internationally recognized certifications that will enhance your resume and career prospects in the hospitality industry worldwide.",
      image: "https://thumbs-eu-west-1.myalbum.io/photo/1k0/c48411f7-8bc3-4555-9c55-f1b06f9d2742.jpg",
      features: [
        "Internationally recognized credentials",
        "Digital and physical certificates",
        "Industry-endorsed qualifications",
        "Portfolio development assistance",
        "Continuing education options"
      ]
    },
    {
      title: "Job Placement Assistance",
      description: "Benefit from our extensive network of hospitality partners and receive assistance in finding employment after completing your training program.",
      image: "https://thumbs-eu-west-1.myalbum.io/photo/1k0/3592c17f-c89c-4991-9117-47193331fda1.jpg",
      features: [
        "Resume and cover letter workshops",
        "Interview preparation",
        "Industry networking events",
        "Job referral opportunities",
        "Career counseling sessions"
      ]
    }
  ];

  return (
    <Layout>
      <HeroSection
        backgroundImage="https://thumbs-eu-west-1.myalbum.io/photo/1k0/c48411f7-8bc3-4555-9c55-f1b06f9d2742.jpg"
        title="Our Services & Gallery"
        subtitle="Discover our world-class hospitality training programs"
      >
        <Link to="/trainings" className="btn-primary">
          Apply for Training
        </Link>
      </HeroSection>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Premium Services" 
            subtitle="Elevate your hospitality career with our specialized training programs"
            center={true}
          />
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg w-full h-96 object-cover"
                  />
                </div>
                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl font-semibold text-bba-brown mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-bba-gold font-bold mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Gallery" 
            subtitle="Take a visual tour of our facilities and training sessions"
            center={true}
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg"
                alt="Gallery image - Barista training"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/031bec54-ad42-41bd-bab2-85880b04518c.jpg"
                alt="Gallery image - Bartending"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/00ef293b-ef61-46f1-a08b-cfb5ab41d7e6.jpg"
                alt="Gallery image - Wine tasting"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/44cb386c-5f5f-48f1-9f70-50f970667323.jpg"
                alt="Gallery image - Training environment"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/c48411f7-8bc3-4555-9c55-f1b06f9d2742.jpg"
                alt="Gallery image - Certification"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/3592c17f-c89c-4991-9117-47193331fda1.jpg"
                alt="Gallery image - Job placement"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/36ed3fd8-070e-4a5c-8e77-8aadbf042437.jpg"
                alt="Gallery image - Academy exterior"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg"
                alt="Gallery image - Coffee preparation"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bba-brown text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join one of our premium training programs and transform your passion into a successful career in the hospitality industry.
          </p>
          <Link to="/trainings" className="btn-secondary">
            Apply for Training
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
