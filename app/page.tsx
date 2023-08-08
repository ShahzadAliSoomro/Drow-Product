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

      {/* ************************* Hero Component Start ************************* */}
      <HeroSec />
      {/* ************************** Hero Component End ************************** */}
      
      {/* ************************* SeasonPruduct Component Start ************************* */}
      <SeasonProduct />
      {/* ************************** SeasonPruduct Component End ************************** */}

      {/* ************************* BestSeller Component Start ************************* */}
      <BestSeller />
      {/* ************************** BestSeller Component End ************************** */}

      {/* ************************* ShopNow Discount Component Start ************************* */}
        <ShopNow />
      {/* ************************** ShopNow Discount Component End ************************** */}

      {/* ************************* Product ==> MenuProduct Component Start ************************* */}
      <MenuProduct />
      {/* ************************** Product ==> MenuProduct Component End ************************** */}

      {/* ************************* FeatureCollection Component Start ************************* */}
      <FeatureCollection />
      {/* ************************** FeatureCollection Component End ************************** */}

      {/* ************************* TestiProduct ==> TestiCard Component Start ************************* */}
      <TestiCard />
      {/* ************************** TestiProduct ==> TestiCard Component End ************************** */}

      {/* ************************* ContactPage ==> ContactForm Component Start ************************* */}
      <ContactForm />
      {/* ************************** ContactPage ==> ContactForm Component End ************************** */}

      </div>
    </main>
    
  )
}
