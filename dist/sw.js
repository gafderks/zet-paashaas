if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const o=e=>r(e,c),d={module:{uri:c},exports:f,require:o};i[c]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(s(...e),f)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1b5dfa57.css",revision:null},{url:"assets/index-7af18e1d.js",revision:null},{url:"icon.png",revision:"e9506d7d74f29cf3937aebf9f35c3b27"},{url:"img/bulbasaur.png",revision:"90d7ee7a053314b9c891981b817f4080"},{url:"img/charmander.png",revision:"c361b6a218de14bd427dcb37339e02cc"},{url:"img/gengar.png",revision:"0ff089179caedfb328723b6c073c7edf"},{url:"img/jigglypuff.png",revision:"0e9d04d3996bba10a7b128a24978e595"},{url:"img/magikarp.png",revision:"cf0447d06d359daeaf3c472f7df01180"},{url:"img/meoth.png",revision:"bd3317b04f0980495441f154eb09ecce"},{url:"img/mewtwo.png",revision:"6b979e33e819db177682c54af2fe9cc9"},{url:"img/pikachu.png",revision:"ee05bf6ca956212ab481fbeda77cc071"},{url:"img/snorlax.png",revision:"16449ff72e9c02c6b9d90966e44e861e"},{url:"img/squirtle.png",revision:"9b4a43cd96a25ceca06383a2e7903553"},{url:"index.html",revision:"ff6a66eb5f88d0723a6485792ec95fd5"},{url:"registerSW.js",revision:"42e7e698a99b6c0910348f3b59ae28f1"},{url:"manifest.webmanifest",revision:"bf66c83786b91724664c3566cbd2abe8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));