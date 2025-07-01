import { useEffect } from 'react'
import { Browser } from '@capacitor/browser';
import { SplashScreen } from '@capacitor/splash-screen';

const App = () => {
  const openCapacitorSite = async ():Promise<void> => {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    
    await Browser.open({ 
      url: 'https://music.youtube.com/',
      windowName: "_blank"
    });
  };
  
  useEffect(() => {
    openCapacitorSite()
  }, [])
  
  return (
    <div></div>
  )
}

export default App