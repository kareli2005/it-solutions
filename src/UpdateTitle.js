import { useEffect } from 'react';

const UpdateTitle = () => {
  useEffect(() => {
    const currentUrl = window.location.href
    document.title = `IT-Solutions - ${currentUrl}`
  }, [])

  return null
}

export default UpdateTitle;
