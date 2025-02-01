'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Data for the gallery
const galleryData = [
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738366433/macwatson/twsdyvfwphntz3c40kvs.jpg',
  },
  {
    id: 2,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738367306/PRINTS_2_iaatwf.jpg',
  },
  {
    id: 3,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738367317/PRINTS_1_rioaiv.jpg',
  },
  {
    id: 4,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738367323/PRINTS_behphu.jpg',
  },
  {
    id: 5,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738367589/Image_07-01-2025_at_06.58_vjeqtb.jpg',
  },
  {
    id: 6,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738367590/Image_07-01-2025_at_06.55_ukltnp.jpg',
  },
  {
    id: 7,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738367595/Image_10-12-2024_at_23.48_cnelfc.jpg',
  },
  {
    id: 8,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738367786/PRINTS_4_gkoiis.jpg',
  },
  {
    id: 9,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738431612/DSC_0090_1_2_jwla2n.jpg',
  },
  {
    id: 10,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433564/DSC_0077_3_2_qigdlb.jpg',
  },
];

export default function CardsGallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openGallery = (image) => {
    setSelectedImage(image);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryData.findIndex((img) => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryData.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryData.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(galleryData[newIndex]);
  };

  return (
    <div className="p-4 mb-12">
      {/* Skeleton Loader or Gallery Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-lg shadow-md animate-pulse">
              <div className="h-96 bg-gray-300 rounded-t-lg"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryData.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => openGallery(image)}
            >
              {/* Image */}
              <div className="relative h-96">
                <Image
                  src={image.imageUrl}
                  alt={`Gallery Image ${image.id}`}
                  fill
                  className="object-cover"
                  priority
                  sizes='500px'
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Gallery Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white text-2xl z-50"
            >
              &times;
            </button>

            {/* Image */}
            <div className="relative h-[80vh]">
              <Image
                src={selectedImage.imageUrl}
                alt={`Gallery Image ${selectedImage.id}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-black text-2xl"
            >
              &#10094;
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-black text-2xl"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}