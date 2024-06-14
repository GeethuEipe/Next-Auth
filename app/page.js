import AboutUs from '../components/Home/AboutUs'
import BackgroundWrapper from '../components/BackgroundWrapper'
import ContactUs from '../components/Home/ContactUs'
import Footer from '../components/Home/Footer'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Home/Navbar'
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
      <ContactUs />
      <Footer />
    </main>
  )
}
