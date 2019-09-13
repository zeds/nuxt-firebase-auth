importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.9eea6986e3c1f82b4e7a.js",
    "revision": "ae1a81f11fe0f2b2291588d4a6aadb7e"
  },
  {
    "url": "/_nuxt/app.befb363a830a9ba56dba600f655c15ce.css",
    "revision": "befb363a830a9ba56dba600f655c15ce"
  },
  {
    "url": "/_nuxt/layouts/default.98e91b8bf912c8d4aa23.js",
    "revision": "38cd2392eda79e2f1c359ce5e7124ca4"
  },
  {
    "url": "/_nuxt/manifest.8b4c13dec0129db7d44d.js",
    "revision": "a5bf1d1c7bdb67271c0fe6531c473bed"
  },
  {
    "url": "/_nuxt/pages/about.69e9a7279b9d8d619841.js",
    "revision": "0bf2dee019ebfb97e6895572c64d4bc9"
  },
  {
    "url": "/_nuxt/pages/admin.359c14ecf1d7e67f8682.js",
    "revision": "5dbb9363eae210d482da6817bfde881e"
  },
  {
    "url": "/_nuxt/pages/admin/index.d2f0740e8fab15ccb1fe.js",
    "revision": "ed992d2369933dc2ff00898f9f59d66d"
  },
  {
    "url": "/_nuxt/pages/admin/items.ed4c50f2a013f6c84c62.js",
    "revision": "1f90199a0eb8c04a449818b57e80af25"
  },
  {
    "url": "/_nuxt/pages/admin/settings.993c670fa38093089256.js",
    "revision": "dffcbe7307dcdc3588992a8f029f0b28"
  },
  {
    "url": "/_nuxt/pages/index.361e30f8454adecfaea0.js",
    "revision": "8b675a84db720060d15a3af1ac990f37"
  },
  {
    "url": "/_nuxt/pages/login.8ca73bd8b49d26377c4d.js",
    "revision": "39fcb353e3e6d0dd1b4526edb321d1c9"
  },
  {
    "url": "/_nuxt/vendor.5282f7ed0b9c3cedac78.js",
    "revision": "3b01f2de20732d71a93b5dbd77e3e933"
  }
], {
  "cacheId": "nuxt-firebase-auth",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





