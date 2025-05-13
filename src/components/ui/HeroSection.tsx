
import { ReactNode } from 'react';
import EditableText from './EditableText';
import EditableImage from './EditableImage';

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage = '/images/hero-barista.jpg', 
  children 
}: HeroSectionProps) => {
  return (
    <section 
      className="relative h-[70vh] min-h-[500px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom text-white">
        <div className="max-w-3xl animate-fade-in">
          {typeof title === 'string' ? (
            <EditableText 
              text={title} 
              tag="h1" 
              className="mb-4 leading-tight" 
            />
          ) : (
            title
          )}
          {subtitle && (
            <EditableText 
              text={subtitle} 
              tag="p" 
              className="text-xl mb-8 opacity-90" 
            />
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
