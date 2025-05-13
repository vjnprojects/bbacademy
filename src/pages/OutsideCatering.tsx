import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';

const OutsideCatering = () => (
  <Layout>
    <HeroSection
      backgroundImage="/images/training2.jpg"
      title="Outside Catering"
      subtitle="Catering services for all events."
    />
    <section className="section-padding bg-white text-center">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4">Outside Catering</h2>
        <p className="text-lg mb-8">We provide outside catering for all events with custom menus and professional staff. More details coming soon!</p>
      </div>
    </section>
  </Layout>
);

export default OutsideCatering; 