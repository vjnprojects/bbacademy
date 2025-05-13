
import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  center?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, center = false, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`mb-3 ${light ? 'text-white' : 'text-bba-brown'}`}>{title}</h2>
      {subtitle && (
        typeof subtitle === 'string' ? (
          <p className={`text-lg ${light ? 'text-gray-200' : 'text-gray-600'}`}>{subtitle}</p>
        ) : (
          subtitle
        )
      )}
    </div>
  );
};

export default SectionTitle;
