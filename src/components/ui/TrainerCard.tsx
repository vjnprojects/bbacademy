
import { Card, CardContent } from "./card";

interface TrainerCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const TrainerCard = ({ name, role, image, bio }: TrainerCardProps) => {
  return (
    <Card className="trainer-card overflow-hidden hover:shadow-lg transition-all">
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-bba-lightBrown mb-3">{role}</p>
        {bio && <p className="text-gray-600">{bio}</p>}
      </CardContent>
    </Card>
  );
};

export default TrainerCard;
