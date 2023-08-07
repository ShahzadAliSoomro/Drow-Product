import HeroSec from './components/Hero/HeroSec'
import SeasonProduct from './components/Collection/SeasonProduct'
import BestSeller from './components/Seller/BestSeller'
import ShopNow from './components/DiscountBanner/ShopNow'
import MenuProduct from './components/Product/MenuProduct'
import FeatureCollection from './components/FeatureCollection/FeatureCollection'
import TestiCard from './components/TestiProduct/TestiCard'
import ContactForm from './components/ContactPage/ContactForm'

export default function Home() {
  return (
    <main className='bg-[#fff] w-full mx-auto '>
      <div className='space-y-10'>
      <HeroSec />
      <SeasonProduct />
      <BestSeller />
      <div className=''>
        <ShopNow />
      </div>
      
      <MenuProduct />
      <FeatureCollection />
      <TestiCard />
      <ContactForm />
      </div>
    </main>
    
  )
}
