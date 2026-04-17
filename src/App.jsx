import './App.css'
import Navbar     from './assets/Navbar'
import Home       from './assets/Home'
import About      from './assets/About'
import Services   from './assets/Services'
import SocialMedia from './assets/SocialMedia'
import Footer     from './assets/Footer'

function App() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Home />

        <div className="divider" />
        <About />

        <div className="divider" />
        <Services />

        <div className="divider" />
        <SocialMedia />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
