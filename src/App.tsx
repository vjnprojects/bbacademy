
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { useState } from "react";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Trainings from "./pages/Trainings";
import Trainers from "./pages/Trainers";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Create custom CSS for editable mode
const injectGlobalCSS = () => {
  const style = document.createElement('style');
  style.textContent = `
    .admin-editing-mode [contenteditable]:hover {
      outline: 2px dashed #3b82f6;
      cursor: pointer;
    }
    
    .admin-editing-mode img:not([role="presentation"]):hover {
      outline: 2px dashed #3b82f6;
      cursor: pointer;
      position: relative;
    }
    
    .admin-editing-mode img:not([role="presentation"]):hover::after {
      content: "Click to edit";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0,0,0,0.7);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 14px;
      pointer-events: none;
    }
    
    .btn-primary, .btn-secondary, .btn-outline {
      display: inline-flex;
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      font-weight: 500;
      transition: all 0.2s;
      align-items: center;
      justify-content: center;
    }
    
    .btn-primary {
      background-color: #6d4c41;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #5d4037;
    }
    
    .btn-secondary {
      background-color: #d7ccc8;
      color: #4e342e;
    }
    
    .btn-secondary:hover {
      background-color: #bcaaa4;
    }
    
    .btn-outline {
      border: 2px solid white;
      color: white;
      background-color: transparent;
    }
    
    .btn-outline:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .section-padding {
      padding: 5rem 0;
    }
    
    .container-custom {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
  `;
  document.head.appendChild(style);
};

const App = () => {
  // Initialize the QueryClient inside the component
  const [queryClient] = useState(() => new QueryClient());
  
  // Inject global CSS
  injectGlobalCSS();
  
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/trainings" element={<Trainings />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/auth" element={<Auth />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
