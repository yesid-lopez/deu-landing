"use client";

import { Button } from "@/components/ui/button";
import LuloIcon from "@/components/ui/lulo-icon";
import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/lulo",
      label: "Instagram",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/lulo",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/lulo",
      label: "LinkedIn",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/lulo",
      label: "GitHub",
    },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Download", href: "#download" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "https://deu.luloai.com/about" },
        { label: "Careers", href: "https://deu.luloai.com" },
        { label: "Blog", href: "https://deu.luloai.com" },
      ],
    },
  ];

  return (
    <footer className="bg-background py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Section */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8">
                <LuloIcon width={32} height={32} />
              </div>
              <span className="text-xl font-bold">Lulo</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Making life in Germany easier for everyone.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Lulo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
