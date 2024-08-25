import React, { useEffect, useRef, useState } from 'react'

const GoogleMapComponent = () => {
  const mapContainerRef = useRef(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const API_KEY = 'AIzaSyC8A8BAVnZAxRBHsHddOFF74vjjkLpMdYs'
    
    const loadGoogleMapsScript = () => {
      return new Promise((resolve, reject) => {
        const existingScript = document.getElementById('google-maps-script')
        if (!existingScript) {
          const script = document.createElement('script')
          script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`
          script.id = 'google-maps-script'
          script.async = true
          script.defer = true
          script.onload = resolve
          script.onerror = () => {
            setError(true)
            reject(new Error('Failed to load Google Maps script'))
          }
          document.head.appendChild(script)
        } else {
          resolve()
        }
      })
    }

    const initMap = () => {
      if (window.google && window.google.maps) {
        new window.google.maps.Map(mapContainerRef.current, {
          center: { lat: 41.725130481728854, lng: 44.77417934606194 },
          zoom: 17,
        })
        new window.google.maps.Marker({
          position: { lat: 41.725130481728854, lng: 44.77417934606194 },
          map: mapContainerRef.current,
        })
      } else {
        setError(true)
      }
    }

    loadGoogleMapsScript().then(() => {
      if (window.google && window.google.maps) {
        initMap()
      } else {
        window.initMap = initMap
      }
    }).catch(() => {
      setError(true)
    })

    return () => {
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = ''
      }
      const scriptTag = document.getElementById('google-maps-script')
      if (scriptTag) {
        document.head.removeChild(scriptTag)
      }
    }
  }, [])

  if (error) {
    return <div className='w-full h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center'>Error getting the map</div>
  }

  return (
    <div ref={mapContainerRef} className='w-full h-[200px] sm:h-[300px] md:h-[400px]' />
  )
}

export default GoogleMapComponent
