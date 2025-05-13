import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';

const CulinaryArts = () => (
  <Layout>
    <HeroSection
      backgroundImage="/images/caurse1.jpg"
      title="Culinary Arts"
      subtitle="Explore our pastry, bakery, and kitchen programs."
    />
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-6">Why Choose Culinary Arts at BBA?</h2>
        <p className="text-lg mb-8">Our Culinary Arts program is designed for aspiring chefs, bakers, and food enthusiasts who want to master the art of cooking, baking, and kitchen management. Learn from experienced chefs in a hands-on environment and gain skills that are in high demand in the hospitality industry.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Program Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Hands-on training in pastry, bakery, hot and cold kitchen</li>
              <li>Modern kitchen facilities and equipment</li>
              <li>Guidance from professional chefs</li>
              <li>Small class sizes for personalized attention</li>
              <li>Internationally recognized certification</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Curriculum Highlights</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Pastry and dessert making</li>
              <li>Bread and bakery fundamentals</li>
              <li>Hot kitchen: sauces, meats, vegetables</li>
              <li>Cold kitchen: salads, appetizers, dressings</li>
              <li>Food safety and hygiene</li>
              <li>Menu planning and costing</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Career Opportunities</h3>
          <p className="text-gray-700">Graduates can pursue careers as chefs, pastry chefs, bakers, kitchen managers, or start their own food businesses. Our job placement assistance helps connect you with top employers in the hospitality industry.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Do I need prior experience?</strong> No, our program is suitable for beginners and those with some experience.</li>
            <li><strong>How long is the program?</strong> The Culinary Arts program typically lasts 3 months.</li>
            <li><strong>Is certification provided?</strong> Yes, you will receive a certificate upon successful completion.</li>
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

export default CulinaryArts; 