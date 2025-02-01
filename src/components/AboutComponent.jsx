'use client';
import React from 'react';
import Image from 'next/image';

export default function ImageTextSection() {
  return (
    <div className="p-4">
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
            <h2 className="text-3xl lg:text-5xl font-exo font-bold mb-4">About Me</h2>
            <p className="text-gray-800 font-lato mb-4">
            ADEDOYIN ADEROMOLA MACWATSON is an accomplished documentary and Fine art photographer, hailing from Lagos, Nigeria. With a solid academic foundation in Dramatic Arts attained from the prestigious OBAFEMI AWOLOWO UNIVERSITY, ILE IFE, she exhibits a profound passion for her craft. Adedoyin&#39;s unwavering dedication lies in the exploration and portrayal of Humanism, Africanism, and the diverse narratives of people of color.
</p>
<p className="text-gray-800 font-lato mb-4">
In addition to her formal education, Adedoyin has undergone specialized training in Textile Design and canvas priming, honing her skills under the tutelage of the renowned artist, Dotun Popoola. The recognition of her exceptional talent is evident through the inclusion of her works in esteemed competitions such as the &#39;500 px&#39; Portrait competition in 2023 and the prestigious &#39;CAP PRIZE 2023.&#39;
</p>
<p className="text-gray-800 font-lato mb-4">
Adedoyin&#39;s artistic prowess has garnered considerable acclaim, with her captivating works being sought after by private galleries both at home and abroad. Currently operating from her studio in Lagos, she not only produces remarkable pieces but also engages in the noble task of imparting knowledge and fostering creativity through her training and educational endeavors.            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}