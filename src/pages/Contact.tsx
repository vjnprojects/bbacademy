import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <HeroSection
        backgroundImage="/images/classroom.jpg"
        title="Contact Us"
        subtitle="Get in touch with Beyond Barista Academy"
      />

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Get In Touch" />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-bba-brown">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Address</h4>
                    <p className="text-gray-600">Kigali, Rwanda</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-bba-brown">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">+250 798 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-bba-brown">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@beyondbarista.rw</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-bba-brown">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-gray-600">+250 798 123 456</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden h-80">
                  <iframe
                    title="Beyond Barista Academy Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.41796917015!2d30.03400323891204!3d-1.9441805764920232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411e0e35!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1715102823475!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <SectionTitle title="Send Us a Message" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-bba-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-6">
              Stay updated with our latest courses, events, and hospitality industry insights.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="form-input flex-grow"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
