"use client";

import { navLinks } from "@/Data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoChatbox, IoChevronDown } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 w-full z-50 shadow-xl text-secondary bg-background">
      {/* Top bar */}
      <div className="max-w-[1920px] mx-auto p-4 flex justify-between items-center">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center font-yester w-fit text-3xl"
        >
          <Image
            src="/assets/logo.webp"
            alt="glow bar logo"
            width={40}
            height={40}
            priority={false}
          />
          GlowBar
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-xl pr-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group mr-7">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 hover:text-primary"
                >
                  {link.label}
                  <IoChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>

                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-3 invisible opacity-0 translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
                  <div className="min-w-44 rounded-lg border bg-background py-2 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-lg hover:bg-muted hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                className="mr-7 hover:text-primary"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link href={"/booking"} className="flex  gap-2 text-primary/90  font-medium hover:text-primary">
            Book Now
            <IoChatbox className="h-7 w-7" />
          </Link>
        </nav>

        {/* Burger button (mobile only) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => (open ? closeMenu() : setOpen(true))}
          className="md:hidden relative h-8 w-8"
        >
          <span
            className={`absolute left-0 h-0.5 w-8 rounded-full bg-foreground transition-all duration-300 ${
              open ? "top-[15px] rotate-45" : "top-[10px] rotate-0"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-8 rounded-full bg-foreground transition-all duration-300 ${
              open ? "top-[15px] -rotate-45" : "top-[20px] rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full h-[calc(100dvh-4.5rem)] overflow-y-auto bg-primary flex flex-col items-start gap-6 px-6 pt-10 transition-[clip-path] duration-500 ease-in-out ${
          open
            ? "[clip-path:inset(0_0_0_0)] pointer-events-auto"
            : "[clip-path:inset(0_0_100%_0)] pointer-events-none"
        }`}
      >
        {navLinks.map((link) =>
          link.children ? (
            <div key={link.href} className="w-full">
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center gap-2 text-3xl font-medium text-primary-foreground"
              >
                {link.label}
                <IoChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Categories (smooth expand) */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-4 pl-4 pt-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenu}
                        className="text-2xl text-primary-foreground/90"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-3xl font-medium text-primary-foreground"
            >
              {link.label}
            </Link>
          ),
        )}

        <Link
          href="/booking"
          onClick={closeMenu}
          className="text-3xl font-medium text-primary-foreground"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
