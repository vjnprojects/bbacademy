import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';

const ArtificialBeauty = () => (
  <Layout>
    <HeroSection
      backgroundImage="/images/best.jpg"
      title="Artificial Beauty (Ubwiza Buhangano)"
      subtitle="Makeup, manicure, pedicure, waxing, and massage."
    />
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-6">Why Choose Artificial Beauty at BBA?</h2>
        <p className="text-lg mb-8">Our Artificial Beauty program is perfect for those passionate about beauty, wellness, and personal care. Learn the latest techniques in makeup, manicure, pedicure, waxing, and massage from industry professionals in a supportive, hands-on environment.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Program Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Comprehensive training in beauty and wellness</li>
              <li>Modern salon facilities and equipment</li>
              <li>Guidance from experienced beauty professionals</li>
              <li>Small class sizes for personalized learning</li>
              <li>Internationally recognized certification</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Curriculum Highlights</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Makeup artistry and techniques</li>
              <li>Manicure and pedicure essentials</li>
              <li>Waxing and hair removal</li>
              <li>Massage therapy basics</li>
              <li>Skin care and hygiene</li>
              <li>Client consultation and service</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Career Opportunities</h3>
          <p className="text-gray-700">Graduates can work as makeup artists, nail technicians, beauty therapists, or start their own beauty businesses. Our job placement support helps you connect with top employers in the beauty industry.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Do I need prior experience?</strong> No, the program is open to all skill levels.</li>
            <li><strong>How long is the program?</strong> The Artificial Beauty program typically lasts 3 months.</li>
            <li><strong>Is certification provided?</strong> Yes, a certificate is awarded upon completion.</li>
          </ul>
        </div>
        <div className="text-center">
          <a href="/contact" className="btn-primary">Contact Us for More Info</a>
          <a href="/trainings" className="btn-secondary ml-4">Apply Now</a>
        </div>
      </div>
    </section>
  </Layout>
);

export default ArtificialBeauty; 