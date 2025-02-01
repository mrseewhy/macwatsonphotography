'use client';
import React from 'react';
import Image from 'next/image';
import { MailCheck, PhoneCall, Phone, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function ContactUsSection() {
  return (
    <div className="p-4 mb-12">
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
            <h2 className="text-3xl font-bold mb-6 font-exo">Contact Me</h2>
            <p className='text-gray-800 font-lato mb-4'>MacWatson Photography is based in Lagos, Nigeria, and available for local & international assignments.</p>
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-8">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <a
                  href="mailto:macwatsonphotos@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-600 transition-colors"
                  aria-label="Email"
                >
                  <MailCheck size={28} />
                </a>
              </div>
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <a
                  href="https://x.com/macwatson20"
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
                  href="https://www.instagram.com/macwatsonphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
              </div>
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <a
                  href="https://www.instagram.com/aduke_films"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>

            {/* Cards for Contact Information */}
            <div className="space-y-4">
              {/* Email Card */}
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center gap-4">
              {/* Lucide Mail Icon */}
                <div className='bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center'>
                  <MailCheck className="w-6 h-6 text-gray-50" />
                </div>
                {/* Email Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-1 font-exo">Email</h3>
                  <p className="text-gray-800 font-lato">
                    <a href="mailto:macwatsonphotos@gmail.com" className="hover:underline">
                      macwatsonphotos@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center gap-4">
                {/* Lucide Phone Icon */}
                <div className='bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center'>
                  <PhoneCall className="w-6 h-6 text-gray-50" />
                </div>
                {/* Phone Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-1 font-exo">Phone</h3>
                  <p className="text-gray-800 font-lato">
                    <a href="tel:2348021063688" className="hover:underline">
                    +234 802 106 3688
                    </a>
                  </p>
                </div>
              </div>
              

              {/* WhatsApp Card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center gap-4">
                {/* Lucide Phone Icon */}
                <div className='bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center'>
                  <Phone className="w-6 h-6 text-gray-50" />
                </div>
                {/* Phone Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-1 font-exo">WhatsApp</h3>
                  <p className="text-gray-800 font-lato">
                    <a href="tel:2348021063688" className="hover:underline">
                    +234 802 106 3688
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}