import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';

const Consultancy = () => (
  <Layout>
    <HeroSection
      backgroundImage="/images/certificat.jpg"
      title="Consultancy"
      subtitle="On job training and drinks menu creation."
    />
    <section className="section-padding bg-white text-center">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4">Consultancy Services</h2>
        <p className="text-lg mb-8">We offer on job training and drinks menu (beverage list) creation and designing. More details coming soon!</p>
      </div>
    </section>
  </Layout>
);

export default Consultancy; 