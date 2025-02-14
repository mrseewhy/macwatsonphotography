'use client';
import React from 'react';
import Image from 'next/image';

export default function ImageTextSection() {
  return (
    <div className="p-4 mb-12">
      {/* Section with Image and Text */}
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

        {/* Text on the Right (Bottom on Mobile) */}
        <div className="flex-1 flex items-center">
          <div className="text-left">
            <h2 className="text-3xl font-exo font-bold mb-4">Buy or gift a friend a print.</h2>
           
            
          <p className="text-gray-800 font-lato mb-4"> This are handpicked fine art portrait, limited edition, carefully selected  Each print will be signed and assigned a certificate of authenticity. If you want your prints framed, that will be done for free. </p>

          <p className="text-gray-800 font-lato mb-4">Print material : Art - Archival Matte Paper</p>

          <h2 className="text-2xl font-exo font-bold mb-4">To order a print</h2> 
          <p className="text-gray-800 font-lato mb-4">Send a mail to macwatsonphotos@gmail.com</p>

          <p className="text-gray-800 font-lato mb-4">or Contact +2348021063688</p>

          <p className="text-gray-800 font-lato mb-4">Kindly note that shipping isn&#39;t free.</p>

          <p className="text-gray-800 font-lato mb-4">Delivery within Nigeria takes between 2 - 7 days.</p>

          <p className="text-gray-800 font-lato mb-4">Have a custom print request? Send a mail.</p>

          <p className="text-gray-800 font-lato mb-4">Thank you!</p>
          </div>
        </div>
      </div>
    </div>
  );
}