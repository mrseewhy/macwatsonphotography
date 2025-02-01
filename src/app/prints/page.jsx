import CardComponent from '@/components/PrintsCards'
import React from 'react'


export const metadata = {
  title: "Macwatson Photography | Prints",
};

const page = () => {
  return (
    <div>
      <div className=' p-4'><h2 className='text-3xl  font-bold font-exo'>Prints</h2></div>
      <CardComponent/>
    </div>
  )
}

export default page
