'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Data for the gallery
const galleryData = [
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433564/DSC_0077_3_2_qigdlb.jpg',
  },
  {
    id: 2,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433567/IMG_3816_lnuxnh.jpg',
  },
  {
    id: 3,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433569/_ARW7736_2_uxwe2k.jpg',
  },
  {
    id: 4,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433569/_ARW7724_2_unxnux.jpg',
  },
  {
    id: 5,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433571/_ARW7705_2_wlioj7.jpg',
  },
  {
    id: 6,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433577/_ARW7740_2_nxkttb.jpg',
  },
  {
    id: 7,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433582/DSC_0205_2_p0cdbi.jpg',
  },
  {
    id: 8,
    imageUrl: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433584/DSC_0170_rmtktc.jpg',
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