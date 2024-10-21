'use client';
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);
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
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-500",
        className,
        isScrolledPast ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      <Menu setActive={setActive}>
        {[
          { name: "OUR WORK", href: "#about-us" },
          { name: "SERVICES", href: "#our-work" },
          { name: "RESULTS", href: "#prices" },
          { name: "CONTACT US", href: "https://calendly.com/gupdav/improve-your-social-presence" }
        ].map((item) => (
          <Link href={item.href} key={item.name}>
            <MenuItem setActive={setActive} active={active} item={item.name} />
          </Link>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
