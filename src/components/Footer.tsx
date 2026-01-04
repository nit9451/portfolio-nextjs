'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '@/data/personal';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-purple-900/50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-purple-500"
            >
              {personalInfo.name}
            </Link>
            <p className="text-gray-600 dark:text-gray-300">
              {personalInfo.title} passionate about creating amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              {personalInfo.socialLinks.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons] || Mail;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-purple-900/30 border border-purple-800/50 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-purple-200 hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Get In Touch
            </h3>
            <div className="space-y-2">
              <p className="text-purple-200">
                <span className="font-medium">Email:</span> {personalInfo.email}
              </p>
              {personalInfo.phone && (
                <p className="text-purple-200">
                  <span className="font-medium">Phone:</span> {personalInfo.phone}
                </p>
              )}
              <p className="text-purple-200">
                <span className="font-medium">Location:</span> {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-purple-900/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
