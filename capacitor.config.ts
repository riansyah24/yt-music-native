import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ytmusicnative.app',
  appName: 'YT Music',
  webDir: 'dist',
  plugins: {
  SplashScreen: {
     launchShowDuration: 3000,
     launchAutoHide: true,
     backgroundColor: "#ff0000",
     androidSplashResourceName: "splash",
     androidScaleType: "FIT_XY",
     splashFullScreen: true,
     splashImmersive: true,
     useDialog: false,
   }
  }
};

export default config;
