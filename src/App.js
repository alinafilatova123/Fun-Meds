import './App.css';
import {Navbar, Gallery, Footer, Header, Pricing, Contact, Socials} from './components/import';

function App() {

  return (
    <> 
      <div className='bg-img'>
        <div className='filter'>
          <Navbar />
          <Header />
        </div>
      </div>
      <Gallery />
      <Pricing />
      <Socials />
      <Contact />
      <Footer />
    </>
  )
}

export default App