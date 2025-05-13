import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';

const About = () => {
  return (
    <Layout>
      <HeroSection
        backgroundImage="/images/about.jpg"
        title="About Beyond Barista Academy"
        subtitle="Discover our story, mission, and commitment to excellence"
      />

      {/* Brief About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Who We Are" />
            <p className="text-lg mb-6">
              Beyond Barista Academy (BBA) is the only training center in Rwanda offering international-level bartending, barista, and wine skills. We provide certificates that empower our graduates to compete globally. After completing our 3-month courses, you can confidently work internationally as a senior bartender, barista, or sommelier.
            </p>
            <p className="text-lg font-medium text-bba-brown mb-8">
              Our students skip internships—we simulate real-world work environments like actual bars, coffee shops, and wine cellars to ensure you're job-ready the day you graduate.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-bba-brown">Our Vision</h3>
              <p className="text-gray-700">
                To proudly offer high-end, globally relevant skills in barista, bartender, and sommelier training.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-bba-brown">Our Mission</h3>
              <p className="text-gray-700">
                We train our people to always exceed company expectations.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-bba-brown">Our Values (AI-RP)</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Attitude</li>
                <li>Integrity</li>
                <li>Responsibility</li>
                <li>Professionalism</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Objectives" 
            subtitle="We are committed to achieving the following goals:"
          />

          <div className="pl-4">
            <ol className="list-decimal space-y-4 text-lg">
              <li>Coffee awakening in the Rwandan community</li>
              <li>Alcohol awareness and tuning enhancement programs</li>
              <li>Enabling dreams to come true with skill + documentation abroad</li>
              <li>Mixology awakening in Kigali</li>
              <li>Solving the "no experience" challenge for freshers</li>
              <li>Thinking outside the box</li>
              <li>Changing lives for our members</li>
            </ol>
          </div>
        </div>
      </section>

      {/* What Makes BBA Different */}
      <section className="section-padding bg-bba-cream">
        <div className="container-custom">
          <SectionTitle 
            title="What Makes BBA Different?" 
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-bba-brown mb-4">Fresh & Realistic</h3>
              <p className="text-gray-600">
                The only training center born in today's reality, aware of youth employment struggles—and built to solve them.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-bba-brown mb-4">Joyful & Serious</h3>
              <p className="text-gray-600">
                We take your future seriously, while bringing you joy and a classy experience during training.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-bba-brown mb-4">Trust & Integrity</h3>
              <p className="text-gray-600">
                Attention to detail, gentleman-like ethics, and a do-it-right-once mentality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
