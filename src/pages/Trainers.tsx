
import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import TrainerCard from '../components/ui/TrainerCard';

const Trainers = () => {
  // Trainer Data
  const trainers = [
    {
      name: "Jean-Pierre Muhire",
      role: "Head Barista Trainer",
      image: "/placeholder.svg",
      bio: "With over 10 years of experience in specialty coffee, Jean-Pierre has worked in top cafés across East Africa and Europe. He specializes in latte art and alternative brewing methods."
    },
    {
      name: "Marie Uwamahoro",
      role: "Senior Bartender & Mixology Instructor",
      image: "/placeholder.svg",
      bio: "Marie brings 8 years of international bartending experience from luxury hotels in Dubai and Cape Town. She is passionate about creating unique flavor combinations and teaching flair bartending."
    },
    {
      name: "David Karangwa",
      role: "Head Sommelier Trainer",
      image: "/placeholder.svg",
      bio: "David is a certified sommelier with experience in fine dining establishments across Europe. He specializes in Old World wines and food pairing techniques."
    },
    {
      name: "Christine Mugisha",
      role: "Barista & Customer Service Trainer",
      image: "/placeholder.svg",
      bio: "Christine combines technical coffee knowledge with exceptional customer service skills. She previously managed several coffee shops in Kigali and specializes in coffee bean selection."
    },
    {
      name: "Robert Ndungutse",
      role: "Mixology Specialist",
      image: "/placeholder.svg",
      bio: "Robert is known for his innovative cocktail creations and deep knowledge of spirits. He has won several regional bartending competitions and brings a creative approach to mixology."
    },
    {
      name: "Sarah Mutesi",
      role: "Wine Education Specialist",
      image: "/placeholder.svg",
      bio: "Sarah has traveled extensively throughout wine regions in France, Italy, and South Africa. She specializes in wine tasting techniques and sensory evaluation."
    }
  ];

  return (
    <Layout>
      <HeroSection
        backgroundImage="/placeholder.svg"
        title="Meet Our Trainers"
        subtitle="Learn from experienced professionals in the hospitality industry"
      />

      {/* Trainers Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Expert Trainers" 
            subtitle="Our trainers bring years of real-world experience to the classroom"
            center={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard
                key={index}
                name={trainer.name}
                role={trainer.role}
                image={trainer.image}
                bio={trainer.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="section-padding bg-bba-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Join Our Team of Trainers" 
                subtitle="Are you passionate about hospitality education? We're always looking for talented trainers to join our team."
              />
              <p className="text-lg mb-6">
                If you have extensive experience in bartending, barista skills, or as a sommelier, we'd love to hear from you. Beyond Barista Academy offers a supportive and dynamic environment where you can share your knowledge and help shape the next generation of hospitality professionals.
              </p>
              <a href="/career" className="btn-primary inline-block">
                View Career Opportunities
              </a>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Join our team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
