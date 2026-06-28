module.exports = ({ config }) => ({
  ...config,
  plugins: [
    [
      'expo-horizon-location',
      {
        isAndroidBackgroundLocationEnabled: true,
        isAndroidForegroundServiceEnabled: true,
        locationAlwaysAndWhenInUsePermission:
          'Allow $(PRODUCT_NAME) to access your location for background tracking',
        locationAlwaysPermission:
          'Allow $(PRODUCT_NAME) to access your location for background tracking',
        locationWhenInUsePermission: 'Allow $(PRODUCT_NAME) to access your location',
      },
    ],
    'expo-horizon-notifications',
    [
      'expo-horizon-core',
      {
        horizonAppId: 'DEMO_APP_ID',
        defaultHeight: '640dp',
        defaultWidth: '1024dp',
        supportedDevices: 'quest2|quest3|quest3s',
        disableVrHeadtracking: false,
        allowBackup: false,
      },
    ],
    'expo-task-manager',
  ],
});
