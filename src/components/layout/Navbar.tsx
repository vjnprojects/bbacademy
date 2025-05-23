import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services & Gallery', href: '/services' },
  { name: 'Career', href: '/career' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Trainings', href: '/trainings' },
  { name: 'Meet Our Trainers', href: '/trainers' },
];

const servicesMenu = [
  { name: 'All Services & Gallery', href: '/services' },
  { name: 'Barista Training', href: '/trainings#barista' },
  { name: 'Bartending & Mixology', href: '/trainings#bartending' },
  { name: 'Sommelier Course', href: '/trainings#sommelier' },
  { name: 'Culinary Arts', href: '/culinary-arts' },
  { name: 'Artificial Beauty', href: '/artificial-beauty' },
  { name: 'Consultancy', href: '/consultancy' },
  { name: 'Outside Catering', href: '/outside-catering' },
  { name: 'Job Placement Assistance', href: '/career' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  // Get initials for avatar fallback
  const getInitials = (name?: string) => {
    if (!name) return 'BBA';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/LOGO EGIDE new.png" alt="BBA Logo" className="h-10 w-10 mr-3 object-contain" />
          <span className="font-cormorant text-2xl font-bold text-bba-brown">Beyond Barista Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => {
            if (item.name === 'Services & Gallery') {
              return (
                <div key={item.name} className="relative group">
                  <button className={`nav-link ${location.pathname === item.href ? 'active' : ''} flex items-center gap-1 focus:outline-none`}>
                    {item.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Mega Menu Dropdown */}
                  <div className="absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-50 p-4 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                    <div className="grid grid-cols-1 gap-2">
                      {servicesMenu.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-3 py-2 rounded-md text-bba-brown hover:bg-bba-cream/50 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              );
            }
          })}
          
          {/* Authentication */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-0 w-10 h-10">
                  <Avatar>
                    <AvatarImage src={user?.user_metadata?.avatar_url} />
                    <AvatarFallback>
                      {getInitials(user?.user_metadata?.full_name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-bba-brown focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === item.href
                    ? 'bg-bba-cream text-bba-brown font-medium'
                    : 'hover:bg-bba-cream/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Authentication for mobile */}
            {user ? (
              <>
                <div className="px-3 py-2 flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.user_metadata?.avatar_url} />
                    <AvatarFallback>
                      {getInitials(user?.user_metadata?.full_name)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user?.user_metadata?.full_name || user.email}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="w-full flex items-center px-3 py-2 text-left hover:bg-bba-cream/50 rounded-md"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="block px-3 py-2 text-center bg-bba-brown text-white rounded-md"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
