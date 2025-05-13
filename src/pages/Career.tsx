import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import JobForm from '../components/ui/JobForm';

const Career = () => {
  // Available Jobs Data
  const availableJobs = [
    {
      title: "Barista Trainer",
      location: "Kigali, Rwanda",
      type: "Full-time",
      description: "We're looking for an experienced Barista Trainer to join our team. The ideal candidate should have extensive experience in specialty coffee and a passion for teaching.",
      requirements: [
        "3+ years of experience as a professional barista",
        "Knowledge of various brewing methods and equipment",
        "Strong communication and presentation skills",
        "Fluent in English (French or Kinyarwanda is a plus)"
      ]
    },
    {
      title: "Bartender/Mixology Instructor",
      location: "Kigali, Rwanda",
      type: "Full-time",
      description: "Join our team as a Bartender and Mixology Instructor to train the next generation of bartending professionals in Rwanda.",
      requirements: [
        "5+ years of experience as a bartender or mixologist",
        "Knowledge of classic and contemporary cocktail recipes",
        "Experience with flair bartending is a plus",
        "Previous teaching experience preferred"
      ]
    },
    {
      title: "Administrative Assistant",
      location: "Kigali, Rwanda",
      type: "Full-time",
      description: "Support our growing academy with your excellent organizational and communication skills as an Administrative Assistant.",
      requirements: [
        "Previous administrative experience",
        "Excellent organizational and time-management skills",
        "Proficiency in MS Office and other software",
        "Strong communication skills in English"
      ]
    },
    {
      title: "Marketing Specialist",
      location: "Kigali, Rwanda",
      type: "Part-time",
      description: "Help us spread the word about Beyond Barista Academy's unique programs as our Marketing Specialist.",
      requirements: [
        "Experience in digital marketing and social media management",
        "Content creation skills",
        "Knowledge of SEO and analytics",
        "Experience in the hospitality or education sector is a plus"
      ]
    }
  ];

  return (
    <Layout>
      <HeroSection
        backgroundImage="/images/best.jpg"
        title="Career Opportunities"
        subtitle="Join our team or find your dream job in hospitality"
      />

      {/* Available Jobs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Available Jobs" 
            subtitle="Explore current opportunities at Beyond Barista Academy"
          />
          
          <div className="space-y-8">
            {availableJobs.map((job, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-bba-brown">{job.title}</h3>
                    <div className="flex space-x-3 mt-1">
                      <span className="bg-bba-cream text-bba-brown text-sm px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="bg-bba-gold bg-opacity-20 text-bba-brown text-sm px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {job.requirements.map((requirement, i) => (
                        <li key={i}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href="#application-form" className="btn-primary inline-block">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Form */}
      <section id="application-form" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Job Application" 
            subtitle="Fill out this form to apply for a position at Beyond Barista Academy"
            center={true}
          />
          
          <div className="max-w-2xl mx-auto">
            <JobForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
