importScripts('//cdnt.netcoresmartech.com/swv4.js');

var config = {
  apiKey: 'AIzaSyBRo-DRDavc-u8-H1Xv1CBlIL7nS_JZW7c',
  messagingSenderId: '413188023608',
  appId: '1:413188023608:web:32e5a671fc510a00c70dcd',
  projectId: 'netcore-2d0f3',
  user_key: 'ADGMOT35CHFLVDHBJNIG50K96AM68RKF7EHOO2OHA1Q08TPD7LL0',
  siteid: '303d01c87235c518bbbf52b2d4301eef'
};

self.addEventListener('install', function(event) {
  console.log('Service Worker installed');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', function(event) {
  console.log('Fetch event:', event.request.url);
});

