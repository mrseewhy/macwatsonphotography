import PublishedCards from '@/components/PublishedCards'
import React from 'react'

export const metadata = {
  title: "Macwatson Photography | Published Works",
};

const page = () => {
  return (
    <div>
      <div className=' p-4'><h2 className='text-3xl  font-bold font-exo'>Published Works</h2></div>
      <PublishedCards/>
    </div>
  )
}

export default page
