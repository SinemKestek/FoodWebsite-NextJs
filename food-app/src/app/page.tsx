import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Services from '@/components/Services'


export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <Services/>
      <Menu></Menu>
      <Footer/>
    </main>

  )
}
