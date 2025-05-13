
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <Loader2 size={40} className="animate-spin text-bba-brown" />
        <p className="mt-4 text-bba-brown">Loading...</p>
      </div>
    );
  }

  if (!user) {
    // Redirect to auth page, but save the attempted URL
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
