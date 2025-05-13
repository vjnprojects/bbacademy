
import { ReactNode, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AdminLayout from './AdminLayout';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isAdmin, setIsAdmin] = useState(false);

  // Toggle admin mode with keyboard shortcut (Ctrl+Shift+A)
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      setIsAdmin(prev => !prev);
    }
  };

  // Add event listener for keyboard shortcut
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const content = (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );

  return isAdmin ? <AdminLayout>{content}</AdminLayout> : content;
};

export default Layout;
