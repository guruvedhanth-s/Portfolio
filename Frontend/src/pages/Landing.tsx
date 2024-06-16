
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Tools from "../components/Tools"
import About from '../components/About'
import Quote from '../components/Quote'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function Landing() {
  return (
    <div  className='bg-black min-h-screen px-52 py-20 flex flex-col gap-y-20'>
        <Navbar/>
        <HeroBanner/>
        <Tools/>
        <About/>
        <Quote/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Landing