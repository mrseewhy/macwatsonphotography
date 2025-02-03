import CardComponent from '@/components/PrintsCards'
import ImageTextSection from '@/components/PrintsComponent';
import CardsGallery from '@/components/PrintsGallery';
import Image from 'next/image';
import React from 'react'


export const metadata = {
  title: "Macwatson Photography | Prints",
};

const page = () => {
  return (
    <div>
      <ImageTextSection/>
      <CardComponent/>
      {/* <CardsGallery/> */}
    </div>
  )
}

export default page
