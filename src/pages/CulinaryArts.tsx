import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';

const CulinaryArts = () => (
  <Layout>
    <HeroSection
      backgroundImage="/images/caurse1.jpg"
      title="Culinary Arts"
      subtitle="Explore our pastry, bakery, and kitchen programs."
    />
    <section className="section-padding bg-white text-center">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4">Culinary Arts at BBA</h2>
        <p className="text-lg mb-8">Our Culinary Arts program covers pastry, bakery, hot and cold kitchen skills. More details coming soon!</p>
      </div>
    </section>
  </Layout>
);

export default CulinaryArts; 