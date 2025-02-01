import CardsGallery from "@/components/CardGallery"

export const metadata = {
  title: "Macwatson Photography | Card Gallery",
};

const page = () => {
  return (
    <div>
      <div className=' p-4'><h2 className='text-3xl  font-bold font-exo'>Cards Gallery</h2></div>
      <CardsGallery/>
    </div>
  )
}

export default page
