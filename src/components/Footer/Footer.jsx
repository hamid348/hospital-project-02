// import { title } from 'process'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/img/logo.webp"

function Footer() {
  const quickLinks = [
    { title: 'Home', href: '/' },
    { title: 'Betalingbevestiging', href: '/payment-confirmation' },
    { title: 'Privacyverklaring', href: '/privacy' },
    { title: 'Algemene voorwaarden', href: '/terms' },
  ];

  const contactInfo = [
    { title: 'Email', content: 'info@zorgvervoer-rotterdam.nl' },
    { title: 'Telefoon', content: '+31 (0)10 123 4567' },
    { title: 'Adres', content: 'Rotterdam, Netherlands' },
    { title: 'KVK', content: '12345678' },
  ];

  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src={logo}
              alt='Zorgvervoer Rotterdam logo'
              width={200}
              height={200}
              className="w-auto h-auto"
              priority
            />
            <p className="text-center md:text-left text-gray-600 dark:text-gray-300 max-w-sm">
              Wij bieden snelle en betrouwbare besteldiensten voor ziekenhuizen en medische noodgevallen.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-xl text-gray-800 dark:text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-xl text-gray-800 dark:text-white">
              Contact
            </h2>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li 
                  key={index}
                  className="text-gray-600 dark:text-gray-300"
                >
                  <span className="font-medium">{item.title}: </span>
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Zorgvervoer Regio Rotterdam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer