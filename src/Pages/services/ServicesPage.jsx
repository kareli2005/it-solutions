import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WhoWeAre from '../../components/WhoWeAre';
import ServicesComponent from './ServicesComponent';
import { services } from '../../data';

const ServicesPage = () => {
  const location = useLocation()
  const currentPath = location.pathname

  // Log the current path
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [currentPath])

  return (
    <div className='w-full bg-[#f3f3f3]'>
      {
        services.map((item, key) => {
          if (currentPath === item.link) return (
            <div key={key}>
              <ServicesComponent item={item} />
              <WhoWeAre />
            </div>
          )
        })
      }
    </div>
  );
};

export default ServicesPage;
