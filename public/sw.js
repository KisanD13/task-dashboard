if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>n(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b041c97ca05c928668f81e078efab227"},{url:"/_next/static/c-G-qtOqYLlRHlEn1OGKm/_buildManifest.js",revision:"9e32a63be5cc3ce678c0817d3ba75f68"},{url:"/_next/static/c-G-qtOqYLlRHlEn1OGKm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/181-b3cd02e0579dcf64.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/196-0d7882e562116f77.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/467-79c68df15958b7bb.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/4bd1b696-29d547af58fd384c.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/517-d06f698ece3f5930.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/827-a4af03e241f69386.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/980-abf08b75ed253d33.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/app/_not-found/page-5816e8780ab95ab0.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/app/analytics/page-2d4611de0c3cd004.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/app/dashboard/page-95421a1f885c65ea.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/app/history/page-1729d3da46d2bd71.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/app/layout-85c91d777ee34d8c.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/app/page-d59d198b622ed070.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/framework-895c1583be5f925a.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/main-5e72331d625fadf6.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/main-app-19dc97d8ecaaa627.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/pages/_app-abffdcde9d309a0c.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/pages/_error-94b8133dd8229633.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ac55ac32853c339c.js",revision:"c-G-qtOqYLlRHlEn1OGKm"},{url:"/_next/static/css/9a56b81a5af627f2.css",revision:"9a56b81a5af627f2"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icons/taskM-128.png",revision:"2c8c0f2c39937c96ba97ed310181321d"},{url:"/icons/taskM-144.png",revision:"fc155e5830318d71a108aa65aadb9bb0"},{url:"/icons/taskM-152.png",revision:"0afb5b4856bec57e0969702a0c2d6d64"},{url:"/icons/taskM-16.png",revision:"4d80d300e33bf634b9a9a4c2f4c1482a"},{url:"/icons/taskM-180.png",revision:"37cb157065b36fbe892595b4af583d01"},{url:"/icons/taskM-192.png",revision:"591bfd843e7bd9bd7e757c0c21e7911c"},{url:"/icons/taskM-256.png",revision:"beccda4931c46e6554051f78c77dcda3"},{url:"/icons/taskM-48.png",revision:"6655479778e52082f5e102277a888bc8"},{url:"/icons/taskM-512.png",revision:"b869340d680ecad8e05f7f9b373c20d5"},{url:"/icons/taskM-64.png",revision:"2192a2d2250e916bf854f2d6aaf2cd0d"},{url:"/icons/taskM-72.png",revision:"4ea31b873dea2459e637b2ebdd81c4a6"},{url:"/icons/taskM-96.png",revision:"914c8d76b2ba11d1e0d68437e360bca9"},{url:"/manifest.json",revision:"5142e4e0f4159b3f7872c6cb3191f143"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
