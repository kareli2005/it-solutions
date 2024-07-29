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
import useDocumentTitle from './useDocumentTitle';
import { services } from './data';

function App() {

  const location = useLocation()
  const currentUrl = location.pathname
  const parts = currentUrl.split('/')
  const pathAfterFirstSlash = parts.slice(1).join('/')
  const formattedPath = pathAfterFirstSlash.replace(/-/g, ' ')
  const title = formattedPath? ` - ${formattedPath}` : ''
  
  useDocumentTitle(`IT-Solutions ${title}`)

  return (
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
  )
}

export default App;
