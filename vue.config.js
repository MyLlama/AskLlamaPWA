const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp('^/$'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'my-app-cache',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
          },
        },
        {
          urlPattern: new RegExp('/index.html'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'my-app-cache',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
          },
        },
        {
          urlPattern: new RegExp('/css/app.css'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'my-app-cache',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
          },
        },
        // Add other assets as needed
      ],
    },
  },
};
