
import { ReactNode, useState } from 'react';
import { Button } from '../ui/button';
import { Pencil, Save } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(prev => !prev);
    if (isEditing) {
      // Save changes when turning off edit mode
      toast.success("Changes saved successfully!");
    } else {
      toast.info("Edit mode enabled. Click on text or images to edit.");
    }
  };

  return (
    <div className="relative">
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={toggleEditing}
          className={`rounded-full shadow-lg p-3 ${isEditing ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isEditing ? <Save size={24} /> : <Pencil size={24} />}
        </Button>
      </div>
      <div className={`${isEditing ? 'admin-editing-mode' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
