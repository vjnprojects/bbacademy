
import { useState, useEffect } from 'react';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const EditableImage = ({ src, alt, className = '' }: EditableImageProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.image-editor-container')) {
        setIsEditing(false);
      }
    };

    if (isEditing) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing]);

  const handleClick = () => {
    const globalEditingMode = document.body.classList.contains('admin-editing-mode');
    if (globalEditingMode) {
      setIsEditing(true);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isEditing) {
    return (
      <div className="image-editor-container relative">
        <img src={imageSrc} alt={alt} className={className} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md">
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageSelect}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>
        </div>
      </div>
    );
  }

  return <img src={imageSrc} alt={alt} className={className} onClick={handleClick} />;
};

export default EditableImage;
