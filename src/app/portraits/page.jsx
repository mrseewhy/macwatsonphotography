import CardComponent from '@/components/PortraitsCards'
import CardsGallery from '@/components/PortraitsGallery';
import React from 'react'

export const metadata = {
  title: "Macwatson Photography | Portraits",
};

const page = () => {
  return (
    <div>
      <div className=' p-4'><h2 className='text-3xl  font-bold font-exo'>Portraits</h2></div>
      {/* <CardComponent/> */}
      <CardsGallery />
    </div>
  )
}

export default page
