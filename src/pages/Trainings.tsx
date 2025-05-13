
import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import TrainingForm from '../components/ui/TrainingForm';

const Trainings = () => {
  // Training Programs Data
  const trainingPrograms = [
    {
      title: "Barista Training Program",
      duration: "3 months",
      schedule: "Monday to Friday, 9:00 AM - 1:00 PM",
      startDates: ["June 15, 2025", "September 1, 2025", "January 10, 2026"],
      description: "Become a certified barista with our comprehensive training program. Learn everything from bean selection to latte art.",
      curriculum: [
        "Coffee history and cultivation",
        "Bean selection and grinding techniques",
        "Espresso extraction principles",
        "Milk texturing and latte art",
        "Brewing methods (pour-over, French press, etc.)",
        "Coffee tasting and sensory skills",
        "Machine maintenance and troubleshooting",
        "Customer service excellence"
      ],
      image: "https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg"
    },
    {
      title: "Bartending & Mixology Program",
      duration: "3 months",
      schedule: "Monday to Friday, 2:00 PM - 6:00 PM",
      startDates: ["July 1, 2025", "October 15, 2025", "February 1, 2026"],
      description: "Master the art of mixology and bartending with our hands-on training program designed by industry professionals.",
      curriculum: [
        "Bar setup and management",
        "Spirit categories and production methods",
        "Classic cocktail preparation",
        "Modern mixology techniques",
        "Flair bartending fundamentals",
        "Wine and beer service",
        "Customer interaction and upselling",
        "Responsible alcohol service"
      ],
      image: "https://thumbs-eu-west-1.myalbum.io/photo/1k0/031bec54-ad42-41bd-bab2-85880b04518c.jpg"
    },
    {
      title: "Sommelier Certification Program",
      duration: "3 months",
      schedule: "Tuesday to Saturday, 10:00 AM - 2:00 PM",
      startDates: ["August 1, 2025", "November 15, 2025", "March 1, 2026"],
      description: "Develop your wine knowledge and tasting skills with our comprehensive sommelier training program.",
      curriculum: [
        "Wine history and viticulture",
        "Major wine regions of the world",
        "Grape varieties and characteristics",
        "Professional wine tasting techniques",
        "Food and wine pairing principles",
        "Wine service etiquette",
        "Wine cellar management",
        "Building and managing wine lists"
      ],
      image: "https://thumbs-eu-west-1.myalbum.io/photo/1k0/00ef293b-ef61-46f1-a08b-cfb5ab41d7e6.jpg"
    }
  ];

  return (
    <Layout>
      <HeroSection
        backgroundImage="https://thumbs-eu-west-1.myalbum.io/photo/1k0/44cb386c-5f5f-48f1-9f70-50f970667323.jpg"
        title="Training Programs"
        subtitle="Elevate your hospitality career with our specialized training"
      />

      {/* Training Programs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Training Programs" 
            subtitle="Discover our world-class hospitality education offerings"
            center={true}
          />
          
          <div className="space-y-16">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-semibold text-bba-brown mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                    <div>
                      <h4 className="font-medium">Duration:</h4>
                      <p className="text-gray-600">{program.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Schedule:</h4>
                      <p className="text-gray-600">{program.schedule}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <h4 className="font-medium">Upcoming Start Dates:</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {program.startDates.map((date, i) => (
                          <span key={i} className="bg-bba-cream text-bba-brown text-sm px-3 py-1 rounded-full">
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Curriculum Highlights:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                      {program.curriculum.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-bba-gold font-bold mr-2">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href="#registration-form" className="btn-primary inline-block">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Training Registration" 
            subtitle="Fill out this form to register for one of our training programs"
            center={true}
          />
          
          <div className="max-w-2xl mx-auto">
            <TrainingForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainings;
