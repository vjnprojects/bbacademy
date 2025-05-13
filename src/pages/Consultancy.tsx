import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';

const Consultancy = () => (
  <Layout>
    <HeroSection
      backgroundImage="/images/certificat.jpg"
      title="Consultancy"
      subtitle="On job training and drinks menu creation."
    />
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-6">Our Consultancy Services</h2>
        <p className="text-lg mb-8">BBA offers expert consultancy for hospitality businesses, bars, restaurants, and individuals seeking to elevate their beverage and service standards. Our team brings years of industry experience to help you achieve your goals.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>On-the-job staff training and upskilling</li>
              <li>Drinks menu and beverage list creation</li>
              <li>Bar setup and workflow optimization</li>
              <li>Service quality audits and improvement plans</li>
              <li>Custom workshops for teams and managers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Why Choose BBA Consultancy?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Industry-leading experts and trainers</li>
              <li>Tailored solutions for your business needs</li>
              <li>Proven track record of client success</li>
              <li>Confidential and professional service</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Who can benefit from consultancy?</strong> Bars, restaurants, hotels, and individuals looking to improve their beverage and service operations.</li>
            <li><strong>Is the consultancy in-person or remote?</strong> We offer both in-person and remote consultancy options.</li>
            <li><strong>How do I get a quote?</strong> Contact us for a custom proposal tailored to your needs.</li>
          </ul>
        </div>
        <div className="text-center">
          <a href="/contact" className="btn-primary">Contact Us for a Custom Quote</a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Consultancy; 