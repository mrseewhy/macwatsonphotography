'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for the cards
const cardsData = [
  {
    title: 'Card 1',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367323/PRINTS_behphu.jpg',
    url: '/cards-gallery',
  },
  {
    title: 'Card 2',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367323/PRINTS_behphu.jpg',
    url: '/cards-gallery',
  },
  {
    title: 'Card 3',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367323/PRINTS_behphu.jpg',
    url: '/cards-gallery',
  },
  {
    title: 'Card 4',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367323/PRINTS_behphu.jpg',
    url: '/cards-gallery',
  },
  {
    title: 'Card 5',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367323/PRINTS_behphu.jpg',
    url: '/cards-gallery',
  },
  {
    title: 'Card 6',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367323/PRINTS_behphu.jpg',
    url: '/cards-gallery',
  },
  {
    title: 'Card 7',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367323/PRINTS_behphu.jpg',
    url: '/cards-gallery',
  },
  {
    title: 'Card 8',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367323/PRINTS_behphu.jpg',
    url: '/cards-gallery',
  },
];

export default function CardComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 mb-12">
      {/* Skeleton Loader or Card Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-lg shadow-md animate-pulse">
              <div className="h-96 bg-gray-300 rounded-t-lg"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardsData.map((card, index) => (
            <Link href={card.url} key={index} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-96">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-cover"
                    priority={index < 4} // Preload the first 4 images
                  />
                </div>

                {/* Title */}
                <div className="p-4 bg-gray-100">
                  <h3 className="text-xl font-exo font-semibold text-black hover:text-gray-800 transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}