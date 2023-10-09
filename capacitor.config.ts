import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nueva-app',
  webDir: 'dist/nueva-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
