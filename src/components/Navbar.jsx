'use client';
import React, { useState, useEffect } from 'react';
import { MailCheck, Menu, X, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Macwatson' },
    { href: '/stories', label: 'Stories' },
    { href: '/published', label: 'Published works' },
    { href: '/portraits', label: 'Portraits' },
    { href: '/drone', label: 'Drone shots' },
    { href: '/prints', label: 'Prints' },
    { href: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { Icon: MailCheck, href: 'mailto:Macwatsonphotos@gmail.com', label: 'Email' },
    { Icon: Instagram, href: 'https://www.instagram.com/macwatsonphotography', label: 'Instagram' },
    { Icon: Instagram, href: 'https://www.instagram.com/aduke_films', label: 'Instagram 2' },
    { Icon: Twitter, href: 'https://x.com/macwatson20', label: 'X (Twitter)' }
  ];

  const thisYear = new Date().getFullYear();

  const NavContent = ({ isMobile = false }) => (
    <>
      <div className={`mb-12 ${mounted && !isMobile ? 'animate-subtleFade' : ''}`}>
        {!isMobile && (
          <h1 className="text-2xl font-bold mb-8 font-exo">
            <Link href='/'>Macwatson Photography</Link>
          </h1>
        )}
        <nav>
          <ul className="space-y-4 mt-20 sm:mt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="font-lato text-black hover:text-gray-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className={`mt-auto ${mounted && !isMobile ? 'animate-subtleFade' : ''}`}>
        <div className="flex space-x-4 mb-4">
          {socialLinks.map((link) => (
            <a
              target='_blank'
              rel="noopener noreferrer"
              key={link.label}
              href={link.href}
              className="hover:text-gray-600 transition-colors"
              aria-label={link.label}
            >
              <div className='w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 hover:-translate-y-1 transition-all duration-200'>
                <link.Icon size={16} />
              </div>
            </a>
          ))}
        </div>
        {!isMobile && (
          <p className="text-gray-800 text-xs hover:text-gray-600">
            © {thisYear} Macwatson Photography<br />
            All rights reserved
          </p>
        )}
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex">
      {/* Desktop Sidebar */}
      <aside className="hidden sm:flex flex-col w-[20%] min-w-[200px] max-w-[300px] fixed h-screen border-r bg-white">
        <div className="p-8 h-full overflow-y-auto">
          <NavContent isMobile={false} />
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="sm:hidden fixed w-full bg-white z-50 border-b">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold font-exo">
            <Link href='/'>Macwatson Photography</Link>
          </h1>
          <div className='w-10 bg-black flex items-center justify-center rounded-lg'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black opacity-30"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-64 bg-white p-8">
            <NavContent isMobile={true} />
          </div>
        </div>
      )}

      {/* Main Content wrapper */}
      <div className="w-full sm:pl-[20%] min-w-0">
        <main className="max-w-[1200px] mx-auto p-4 sm:p-8 pt-20 sm:pt-8">
          {children}
        </main>
      </div>

      {/* Mobile Footer */}
      <footer className="sm:hidden fixed bottom-0 w-full bg-white border-t p-4 text-center text-xs text-black">
        © {thisYear} Macwatson Photography. All rights reserved
      </footer>
    </div>
  );
};

export default Layout

