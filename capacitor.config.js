"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    appId: 'com.ytmusicnative.app',
    appName: 'YT Music',
    webDir: 'dist',
    plugins: {
        SplashScreen: {
            launchShowDuration: 3000,
            launchAutoHide: true,
            launchFadeOutDuration: 3000,
            backgroundColor: "#ff0000",
            androidSplashResourceName: "splash",
            androidScaleType: "CENTER_CROP",
            showSpinner: true,
            androidSpinnerStyle: "large",
            iosSpinnerStyle: "small",
            spinnerColor: "#ffffff",
            splashFullScreen: true,
            splashImmersive: true,
            layoutName: "YT Music",
            useDialog: true,
        },
    },
};
exports.default = config;
