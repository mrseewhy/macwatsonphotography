import HeroSection from '@/components/Header'
import ImageGallery from '@/components/ImageGallery'

export const metadata = {
  title: "Macwatson Photography | Home",
  description: "Macwatson Photography, world class Photograpy from lagos to the world",
};

const page = () => {
  return (
    <div>
      <HeroSection/>
      <ImageGallery/>

    </div>
  )
}

export default page
