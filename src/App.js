import './App.css';
import { Routes, Route, useLocation  } from 'react-router-dom';
import Home from './Pages/home/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AboutUs from './Pages/about-us/AboutUs';
import Portfolio from './Pages/portfolio/Portfolio';
import Contact from './Pages/contact/Contact';
import ServicesPage from './Pages/services/ServicesPage';
import { services } from './data';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/it-solutions' element={<Home />} />
        <Route path='/it-solutions/About-Us' element={<AboutUs />} />
        <Route path='/it-solutions/Portfolio' element={<Portfolio />} />
        <Route path='/it-solutions/Contact-Us' element={<Contact />} />
        {
          services.map((service, key) => (
            <Route key={key} path={'/it-solutions/' + service.link} element={<ServicesPage />} />  
          ))
        }
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App;
