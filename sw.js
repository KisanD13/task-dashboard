if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const c=e=>a(e,i),d={module:{uri:i},exports:r,require:c};s[i]=Promise.all(t.map((e=>d[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/task-dashboard/_next/app-build-manifest.json",revision:"f10b80ed5dbc981311b8fad9ad310fa6"},{url:"/task-dashboard/_next/static/chunks/181-b3cd02e0579dcf64.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/318-d7754fcf63d4b27a.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/360-b42cecbcc3c80c5a.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/389-5d0623f9b786e27b.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/43-18bdeb34f53d4b4b.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/467-79c68df15958b7bb.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/4bd1b696-29d547af58fd384c.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/517-19f38a966aa18a92.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/827-a4af03e241f69386.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/980-2cbe68e33fbc0244.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/app/_not-found/page-5816e8780ab95ab0.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/app/analytics/page-1200be3cfdab9c4d.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/app/calendar/page-3aaa53f238a1a718.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/app/dashboard/page-638eae877eeaf811.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/app/history/page-5a498d935332abd9.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/app/layout-a312aa4f52a5c929.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/app/page-d59d198b622ed070.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/framework-895c1583be5f925a.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/main-afccd51713f2e7cf.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/main-app-19dc97d8ecaaa627.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/pages/_app-abffdcde9d309a0c.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/pages/_error-94b8133dd8229633.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/task-dashboard/_next/static/chunks/webpack-c681e25f3dc375da.js",revision:"lglY38WrnyTg9peQgubLg"},{url:"/task-dashboard/_next/static/css/019e2f4599feaba5.css",revision:"019e2f4599feaba5"},{url:"/task-dashboard/_next/static/lglY38WrnyTg9peQgubLg/_buildManifest.js",revision:"bee851977708e38b00168719ded3706c"},{url:"/task-dashboard/_next/static/lglY38WrnyTg9peQgubLg/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/task-dashboard/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/task-dashboard/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/task-dashboard/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/task-dashboard/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/task-dashboard/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/task-dashboard/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/task-dashboard/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/task-dashboard/_redirects",revision:"f4d697b973c15b5a53e1f8a56ac9b3bc"},{url:"/task-dashboard/manifest.json",revision:"10f35ff687b34742be4e841a0efce3cc"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/task-dashboard",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
