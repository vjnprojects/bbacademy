import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';

const ArtificialBeauty = () => (
  <Layout>
    <HeroSection
      backgroundImage="/images/best.jpg"
      title="Artificial Beauty (Ubwiza Buhangano)"
      subtitle="Makeup, manicure, pedicure, waxing, and massage."
    />
    <section className="section-padding bg-white text-center">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4">Artificial Beauty at BBA</h2>
        <p className="text-lg mb-8">Our Artificial Beauty program includes makeup, manicure and pedicure, waxing, and massage. More details coming soon!</p>
      </div>
    </section>
  </Layout>
);

export default ArtificialBeauty; 