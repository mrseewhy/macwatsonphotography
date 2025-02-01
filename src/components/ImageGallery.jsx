'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Custom Skeleton Component
const ImageSkeleton = ({ className = '' }) => (
  <div className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg ${className}`} />
);

const images = [
  { id: 1, src: "https://res.cloudinary.com/dvmobuvar/image/upload/v1738367317/PRINTS_1_rioaiv.jpg", alt: 'Image 1', category: 'Portraits', size: 'small' },
  { id: 2, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738432434/dji_fly_20241119_142052_108_1732047499230_photo_x04pgu.jpg', alt: 'Image 2', category: 'Drone shots', size: 'large' },
  { id: 3, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367306/PRINTS_2_iaatwf.jpg', alt: 'Image 3', category: 'Portraits', size: 'small' },
  { id: 4, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738367590/Image_07-01-2025_at_06.55_ukltnp.jpg', alt: 'Image 3', category: 'Portraits', size: 'small' },
  { id: 5, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738431629/DSC_0041_2_sosoeu.jpg', alt: 'Image 4', category: 'Stories', size: 'small' },
  { id: 6, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367786/PRINTS_4_gkoiis.jpg', alt: 'Image 5', category: 'Portraits', size: 'large' },
  // { id: 7, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/w_1000/q_auto/f_auto/v1738367595/Image_10-12-2024_at_23.48_cnelfc.jpg', alt: 'Image 6', category: 'Drone shots', size: 'small' },
  { id: 8, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433582/DSC_0205_2_p0cdbi.jpg', alt: 'Image 6', category: 'Prints', size: 'small' },
  { id: 9, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738431620/DSC_0091_dxkmqt.jpg', alt: 'Image 7', category: 'Stories', size: 'small' },
  { id: 10, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433584/DSC_0170_rmtktc.jpg', alt: 'Image 8', category: 'Prints', size: 'small' },
  { id: 11, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433567/IMG_3816_lnuxnh.jpg', alt: 'Image 9', category: 'Prints', size: 'small' },
  { id: 12, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738433564/DSC_0077_3_2_qigdlb.jpg', alt: 'Image 9', category: 'Published works', size: 'small' },
  { id: 13, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738432431/dji_fly_20241120_153842_121_1732170544059_photo_2_g4xmit.jpg', alt: 'Image 11', category: 'Drone shots', size: 'large' },
  { id: 14, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738431619/_ARW7750_2_prghjn.jpg', alt: 'Image 12', category: 'Published works', size: 'small' },
  { id: 15, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738431612/DSC_0090_1_2_jwla2n.jpg', alt: 'Image 12', category: 'Published works', size: 'small' },
  { id: 16, src: 'https://res.cloudinary.com/dvmobuvar/image/upload/v1738431611/IMG_3888_nexoiq.jpg', alt: 'Image 12', category: 'Stories', size: 'small' },
];

const categories = ['all', 'Stories', 'Published works', 'Portraits', 'Drone shots', 'Prints'];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  const openPopup = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const filteredImages = filter === 'all' ? images : images.filter((img) => img.category === filter);
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleKeyPress = (e) => {
    if (!selectedImage) return;
    
    if (e.key === 'Escape') closePopup();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  const filteredImages = filter === 'all' ? images : images.filter((img) => img.category === filter);

  return (
    <div className="p-4 mt-16 mb-12">
      {/* Filter Section - Updated for better mobile responsiveness */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 text-sm font-lato">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                filter === category 
                  ? 'bg-black text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className={`relative cursor-pointer group aspect-square ${
              image.size === 'large' 
                ? 'md:col-span-2 md:row-span-2' 
                : image.size === 'medium' 
                ? 'md:row-span-2' 
                : ''
            }`}
            onClick={() => openPopup(image)}
          >
            {(loading || !loadedImages[image.id]) && (
              <ImageSkeleton className="absolute inset-0" />
            )}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                className={`rounded-lg shadow-lg object-cover transition-all duration-500 group-hover:scale-105 ${
                  loadedImages[image.id] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(image.id)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={image.id <= 4}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal remains the same */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) closePopup();
          }}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="object-contain rounded-lg"
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                priority
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-black text-2xl hover:bg-opacity-75 transition-all"
              aria-label="Previous image"
            >
              &#10094;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-black text-2xl hover:bg-opacity-75 transition-all"
              aria-label="Next image"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}