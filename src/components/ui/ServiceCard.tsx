
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="text-bba-brown font-medium hover:underline">
          Learn more →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
