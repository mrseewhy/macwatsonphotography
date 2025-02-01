import CardComponent from '@/components/DroneCards'
import CardsGallery from '@/components/DroneGallery';
import React from 'react'

export const metadata = {
  title: "Macwatson Photography | Drone Shots",
};

const page = () => {
  return (
    <div>
      <div className=' p-4'><h2 className='text-3xl  font-bold font-exo'>Drone Shots</h2></div>
      {/* <CardComponent/> */}
      <CardsGallery/>
    </div>
  )
}

export default page
