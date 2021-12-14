/* eslint-disable no-restricted-globals */
import { CacheableResponse } from "workbox-cacheable-response";
import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies";

clientsClaim();
self.skipWaiting();
precacheAndRoute(self.__WB_MANIFEST);

// ------------------------------------------
// this will cache the fonts from google fonts
registerRoute(
   ({ url }) => url.origin === "https://fonts.googleapis.com",
   new StaleWhileRevalidate({
      cacheName: "google-fonts-stylesheets"
   })
);

registerRoute(
   ({ url }) => url.origin === "https://fonts.gstatic.com",
   new CacheFirst({
      cacheName: "google-fonts-webfonts",
      plugins: [
         new CacheableResponse({
            statuses: [0, 200]
         }),
         new ExpirationPlugin({
            maxEntries: 30,
            maxAgeSeconds: 30 * 24 * 60 * 365,
         })
      ]
   })
);

// ---------------------------------------------
// this will cache the used script and stylesheets
registerRoute(
   ({ request }) => request.destination === "script" || request.destination === "style",
   new StaleWhileRevalidate({
      cacheName: "static-resources"
   })
);