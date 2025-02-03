
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Data for the cards
const cardsData = [
  {
    title: 'It takes a village',
    price: '$100',
    number: '0-10',
    inches: '12 by 15 inches',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433584/DSC_0170_rmtktc.jpg',
  },
  {
    title: 'TIRED BODY, VIBRANT SOUL',
    price: '$100',
    number: '0-10',
    inches: '12 by 15 inches',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433567/IMG_3816_lnuxnh.jpg',
  },
  {
    title: 'HIGH FASHION',
    price: '$100',
    number: '0-10',
    inches: '12 by 15 inches',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433582/DSC_0205_2_p0cdbi.jpg',
  },
  {
    title: 'SOLACE',
    price: '$100',
    number: '0-10',
    inches: '12 by 15 inches',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433564/DSC_0077_3_2_qigdlb.jpg',
  },
  {
    title: 'OLOKUN',
    price: '$100',
    number: '0-10',
    inches: '12 by 15 inches',
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433569/_ARW7736_2_uxwe2k.jpg',
  },
  
];

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="relative max-w-full max-h-full">
        <Image
          src={imageUrl}
          alt="Full size"
          width={800}
          height={600}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default function CardComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 mb-12">
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
            <div key={index} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-96 cursor-pointer" onClick={() => setSelectedImage(card.imageUrl)}>
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    sizes='500px'
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 bg-gray-100">
                  <h3 className="text-xl uppercase font-exo font-semibold text-black hover:text-gray-800 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className='font-lato text-black'>{card.inches}</p>
                  <p className='font-lato text-black'>{card.number}</p>
                  <p className='font-lato text-black'>{card.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
}