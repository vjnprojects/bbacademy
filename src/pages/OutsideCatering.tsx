import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';

const OutsideCatering = () => (
  <Layout>
    <HeroSection
      backgroundImage="/images/training2.jpg"
      title="Outside Catering"
      subtitle="Catering services for all events."
    />
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-6">Professional Outside Catering for Every Event</h2>
        <p className="text-lg mb-8">BBA offers full-service outside catering for weddings, corporate events, private parties, and more. Our experienced team delivers delicious food, creative menus, and impeccable service to make your event unforgettable.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Customizable menus for all tastes and dietary needs</li>
              <li>Professional chefs and service staff</li>
              <li>Setup, service, and cleanup included</li>
              <li>Bar and beverage service available</li>
              <li>Event planning and coordination support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Types of Events</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Weddings and anniversaries</li>
              <li>Corporate meetings and conferences</li>
              <li>Birthday parties and celebrations</li>
              <li>Outdoor picnics and BBQs</li>
              <li>Charity and community events</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Can you accommodate special diets?</strong> Yes, we offer vegetarian, vegan, gluten-free, and other options.</li>
            <li><strong>How far in advance should I book?</strong> We recommend booking at least 2 weeks in advance for best availability.</li>
            <li><strong>Do you provide staff and equipment?</strong> Yes, all necessary staff and equipment are included.</li>
          </ul>
        </div>
        <div className="text-center">
          <a href="/contact" className="btn-primary">Request a Quote</a>
          <a href="/services" className="btn-secondary ml-4">See All Services</a>
        </div>
      </div>
    </section>
  </Layout>
);

export default OutsideCatering; 