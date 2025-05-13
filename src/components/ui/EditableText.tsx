
import { useState, useRef, useEffect } from 'react';

interface EditableTextProps {
  text: string;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  className?: string;
}

const EditableText = ({ text, tag = 'p', className = '' }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(text);
  const textRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (textRef.current && !textRef.current.contains(event.target as Node)) {
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

  const handleInput = (e: React.FormEvent<HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement>) => {
    setContent(e.currentTarget.textContent || '');
  };

  // Create the appropriate element based on the tag prop
  const renderEditableElement = () => {
    const props = {
      ref: textRef as React.RefObject<any>,
      onClick: handleClick,
      contentEditable: isEditing,
      suppressContentEditableWarning: true,
      onInput: handleInput,
      className: `${className} ${isEditing ? 'outline outline-2 outline-blue-500 p-1 rounded' : ''}`
    };

    switch (tag) {
      case 'h1':
        return <h1 {...props}>{content}</h1>;
      case 'h2':
        return <h2 {...props}>{content}</h2>;
      case 'h3':
        return <h3 {...props}>{content}</h3>;
      case 'h4':
        return <h4 {...props}>{content}</h4>;
      case 'h5':
        return <h5 {...props}>{content}</h5>;
      case 'h6':
        return <h6 {...props}>{content}</h6>;
      case 'span':
        return <span {...props}>{content}</span>;
      default:
        return <p {...props}>{content}</p>;
    }
  };

  return renderEditableElement();
};

export default EditableText;
