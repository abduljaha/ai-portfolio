import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Education', href: '/#education' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = ({ profile, isDarkMode, toggleDarkMode }: { profile: any, isDarkMode?: boolean, toggleDarkMode?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass py-3 border-b shadow-md dark:shadow-none dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white z-50 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-blue to-primary-purple flex items-center justify-center text-sm text-gray-900 dark:text-white">
              AI
            </span>
            <span>{profile.name.split(' ')[0]}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-200 dark:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            {toggleDarkMode && (
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-200 dark:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </nav>

          <div className="flex items-center gap-4 md:hidden z-50">
            {toggleDarkMode && (
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-900 dark:text-white rounded-full"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            )}
            {/* Mobile Menu Toggle */}
            <button 
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-900 dark:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center pt-16"
          >
            <nav className="flex flex-col items-center gap-6 w-full px-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-900 dark:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
