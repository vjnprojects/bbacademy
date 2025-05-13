import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import placeholder from '/placeholder.svg';

const Services = () => {
  // Services data
  const services = [
    {
      group: 'Training Center (BBA TC)',
      services: [
        {
          title: 'Barista Training',
          description: 'Barista skills, latte arts, world of coffee, home barista, technical skills, brewing skills, sensory skills, roasting skills, tea making, smoothies and milkshake, cold & hot drinks preparation.',
          image: '/images/barista.jpg',
          features: [
            'Barista skills',
            'Latte arts',
            'World of coffee',
            'Home barista',
            'Technical skills',
            'Brewing skills',
            'Sensory skills',
            'Roasting skills',
            'Tea making',
            'Smoothies and milkshake',
            'Cold & hot drinks preparation'
          ]
        },
        {
          title: 'Bartending & Mixology',
          description: '101 bartending, master level, classic cocktail preparation, customer interaction and upselling, cross selling and suggestive selling, spirit categories, origins and production methods, modern mixology techniques, beer and mocktails services, responsible alcohol service and cigar services.',
          image: '/images/vodka.jpg',
          features: [
            '101 bartending',
            'Master level',
            'Classic cocktail preparation',
            'Customer interaction and upselling',
            'Cross selling and suggestive selling',
            'Spirit categories, origins and production methods',
            'Modern mixology techniques',
            'Beer and mocktails services',
            'Responsible alcohol service',
            'Cigar services'
          ]
        },
        {
          title: 'Sommelier (Oenology)',
          description: 'Introduction to wine, 18 noble grape varieties, food and wine pairing principles, professional wine tasting techniques, major wine regions of the world, wine service etiquette.',
          image: '/images/wine.jpg',
          features: [
            'Introduction to wine',
            '18 noble grape varieties',
            'Food and wine pairing principles',
            'Professional wine tasting techniques',
            'Major wine regions of the world',
            'Wine service etiquette'
          ]
        },
        {
          title: 'Culinary Arts',
          description: 'Pastry, bakery, hot and cold kitchen.',
          image: '/images/caurse1.jpg',
          features: [
            'Pastry',
            'Bakery',
            'Hot kitchen',
            'Cold kitchen'
          ],
          link: '/culinary-arts'
        },
        {
          title: 'Artificial Beauty (Ubwiza Buhangano)',
          description: 'Makeup, manicure and pedicure, waxing and massage.',
          image: '/images/best.jpg',
          features: [
            'Makeup',
            'Manicure and pedicure',
            'Waxing',
            'Massage'
          ],
          link: '/artificial-beauty'
        },
        {
          title: 'Private Candidates Formation (NEPC)',
          description: 'National Exams Private Candidate: Food and beverage operation, tourism, customs and taxes.',
          image: '/images/certificate.jpg',
          features: [
            'Food and beverage operation',
            'Tourism',
            'Customs and taxes'
          ]
        },
        {
          title: 'Career Basic Trainings (CBT)',
          description: 'House maids, home professionals (HP), all in one.',
          image: '/images/classroom.jpg',
          features: [
            'House maids',
            'Home professionals (HP)',
            'All in one'
          ]
        }
      ]
    },
    {
      group: 'Bar On Job Training (BJT)',
      services: [
        {
          title: 'Bar On Job Training',
          description: 'On-the-job bar training for practical skills development.',
          image: '/images/training1.jpg',
          features: [
            'Hands-on bar experience',
            'Real-world scenarios',
            'Skill assessment and feedback'
          ]
        }
      ]
    },
    {
      group: 'Beyond Job Connect (BJC)',
      services: [
        {
          title: 'Beyond Job Connect',
          description: 'Connecting graduates with job opportunities in hospitality.',
          image: '/images/hired.jpg',
          features: [
            'Job placement',
            'Career counseling',
            'Networking events'
          ]
        }
      ]
    },
    {
      group: 'Other Services',
      services: [
        {
          title: 'Outside Catering',
          description: 'Outside catering for all events.',
          image: '/images/training2.jpg',
          features: [
            'Event catering',
            'Custom menus',
            'Professional staff'
          ],
          link: '/outside-catering'
        },
        {
          title: 'Consultancy',
          description: 'On job training (JT) & drinks menu (beverage list) creation and designing.',
          image: '/images/certificat.jpg',
          features: [
            'On job training (JT)',
            'Drinks menu creation',
            'Beverage list designing'
          ],
          link: '/consultancy'
        }
      ]
    }
  ];

  return (
    <Layout>
      <HeroSection
        backgroundImage="https://thumbs-eu-west-1.myalbum.io/photo/1k0/c48411f7-8bc3-4555-9c55-f1b06f9d2742.jpg"
        title="Our Services & Gallery"
        subtitle="Discover our world-class hospitality training programs"
      >
        <Link to="/trainings" className="btn-primary">
          Apply for Training
        </Link>
      </HeroSection>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Premium Services" 
            subtitle="Elevate your hospitality career with our specialized training programs"
            center={true}
          />
          
          <div className="space-y-16">
            {services.map((group, groupIdx) => (
              <div key={groupIdx} className="mb-12">
                <h2 className="text-3xl font-bold text-bba-brown mb-6">{group.group}</h2>
                <div className="space-y-10">
                  {group.services.map((service, idx) => (
                    <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="rounded-lg w-full h-96 object-cover"
                        />
                      </div>
                      <div className={`${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                        <h3 className="text-2xl font-semibold text-bba-brown mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-bba-gold font-bold mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {service.link && (
                          <Link to={service.link} className="btn-outline">
                            Learn more
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Gallery" 
            subtitle="Take a visual tour of our facilities and training sessions"
            center={true}
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg"
                alt="Gallery image - Barista training"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/031bec54-ad42-41bd-bab2-85880b04518c.jpg"
                alt="Gallery image - Bartending"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/00ef293b-ef61-46f1-a08b-cfb5ab41d7e6.jpg"
                alt="Gallery image - Wine tasting"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/44cb386c-5f5f-48f1-9f70-50f970667323.jpg"
                alt="Gallery image - Training environment"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/c48411f7-8bc3-4555-9c55-f1b06f9d2742.jpg"
                alt="Gallery image - Certification"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/3592c17f-c89c-4991-9117-47193331fda1.jpg"
                alt="Gallery image - Job placement"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/36ed3fd8-070e-4a5c-8e77-8aadbf042437.jpg"
                alt="Gallery image - Academy exterior"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg"
                alt="Gallery image - Coffee preparation"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bba-brown text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join one of our premium training programs and transform your passion into a successful career in the hospitality industry.
          </p>
          <Link to="/trainings" className="btn-secondary">
            Apply for Training
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
