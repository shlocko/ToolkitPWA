if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const c=e=>i(e,r),f={module:{uri:r},exports:o,require:c};s[r]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-bc55f1ff"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.0c388c70.css",revision:null},{url:"assets/index.ef58f7c6.js",revision:null},{url:"index.html",revision:"1601013fac8296f58ceb26395c852e91"},{url:"manifest.webmanifest",revision:"84d91d22f3ec1904d14d7ef1c3fd403d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
