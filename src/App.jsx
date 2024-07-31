
import './App.scss'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Services from './components/service/Services'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'


function App() {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
    
      <section id='Services'><Parallax  type='services'/></section>
      <section>
        <Services />
      </section>
      <section id='Portfolios'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Contact'>
      <Contact />
      </section>
      



  
    </div>
  )
}


export default App