'use client';
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // Ensure you're using Heroicons v2
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, MenuItem } from './ui/navbar-menu';
import { cn } from "@/utils/cn";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledPast, setIsScrolledPast] = useState<boolean>(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");

    const handleScroll = () => {
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolledPast(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cn(
      "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-500",
      className,
      isScrolledPast ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
    )}>
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-black dark:text-white flex items-center justify-center p-2"
        onClick={() => setIsMobileMenuOpen(prev => !prev)} // Toggle mobile menu state
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          {[
            { name: "OUR WORK", href: "#our-work" },
            { name: "SERVICES", href: "#prices" },
            // { name: "RESULTS", href: "#prices" },
            { name: "CONTACT US", href: "https://calendly.com/gupdav/improve-your-social-presence" }
          ].map((item) => (
            <Link href={item.href} key={item.name}>
              <MenuItem setActive={setActive} active={active} item={item.name} />
            </Link>
          ))}
        </Menu>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4"
        >
          <Menu setActive={setActive}>
            <ul className="flex flex-col space-y-2">
              {[
                { name: "OUR WORK", href: "#about-us" },
                { name: "SERVICES", href: "#our-work" },
                { name: "RESULTS", href: "#prices" },
                { name: "CONTACT US", href: "https://calendly.com/gupdav/improve-your-social-presence" }
              ].map((item) => (
                <li key={item.name} className="w-full">
                  <Link href={item.href}>
                    <MenuItem setActive={setActive} active={active} item={item.name} />
                  </Link>
                </li>
              ))}
            </ul>
          </Menu>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
