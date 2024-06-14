import AboutUs from '../components/AboutUs'
import BackgroundWrapper from '../components/BackgroundWrapper'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <BackgroundWrapper>
        <Navbar />
        <div className="mt-4">
          <Hero />
        </div>
      </BackgroundWrapper>
      <AboutUs />
      {/* <div
        className="bg-image justify-content-end"
        style={{
          backgroundImage: "url('/images/contact.jpeg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%'
        }}> */}
      <ContactUs />
      {/* </div> */}
      <Footer />
    </main>
  )
}
