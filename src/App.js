import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
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
    <Router>
      <div className="App">
        <Header />  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About-Us' element={<AboutUs />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact-Us' element={<Contact />} />
          {
            services.map((service, key) => (
              <Route key={key} path={'/' + service.link} element={<ServicesPage />} />  
            ))
          }
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App;
