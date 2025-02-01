import CardComponent from '@/components/StoriesCards'
import React from 'react'

export const metadata = {
  title: "Macwatson Photography | Stories",
};

const page = () => {
  return (
    <div>
      <div className=' p-4'><h2 className='text-3xl  font-bold font-exo'>Stories</h2></div>
      
      <CardComponent/>
    </div>
  )
}

export default page
