import { useEffect } from 'react'
import { Browser } from '@capacitor/browser';

const App = () => {
  const openCapacitorSite = async () => {
    await Browser.open({ 
      url: 'https://music.youtube.com/',
      windowName: "_blank"
    });
  };
  
  useEffect(() => openCapacitorSite(), [])
  
  return (
    <div></div>
  )
}

export default App