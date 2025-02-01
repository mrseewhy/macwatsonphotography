'use client';
import React from 'react';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function ContactUsSection() {
  return (
    <div className="p-4">
      {/* Section with Image and Contact Info */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image on the Left (Top on Mobile) */}
        <div className="flex-1">
          <Image
            src="/images/1.JPG" // Replace with your image path
            alt="MacWatson"
            className="w-full h-auto rounded-lg shadow-lg"
            priority
            width={500}
            height={400}
          />
        </div>

        {/* Contact Info on the Right (Bottom on Mobile) */}
        <div className="flex-1 flex items-center">
          <div className="text-left w-full">
            {/* Header */}
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-exo">Contact Me</h2>
            <p className='text-gray-800 font-lato mb-4'>MacWatson Photography is based in Lagos, Nigeria, and available for local & international assignments.</p>
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-8">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
              </div>
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-colors"
                  aria-label="Twitter (X)"
                >
                  <Twitter size={28} />
                </a>
              </div>
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
              </div>
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={28} />
                </a>
              </div>
            </div>

            {/* Cards for Contact Information */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 font-exo">Email</h3>
                <p className="text-gray-700 font-lato">me@me.com</p>
              </div>

              {/* Phone Card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 font-exo">Phone</h3>
                <p className="text-gray-700">+234 858 858</p>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 font-exo">WhatsApp</h3>
                <p className="text-gray-700 font-lato">+234 696 969 69</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}