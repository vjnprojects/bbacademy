
import { ReactNode } from 'react';
import { Card, CardContent } from "./card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="feature-card hover:shadow-md transition-all">
      <CardContent className="p-6">
        {icon && <div className="text-bba-brown mb-4">{icon}</div>}
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
