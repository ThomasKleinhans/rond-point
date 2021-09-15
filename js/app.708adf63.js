(()=>{"use strict";var e={2318:(e,t,r)=>{r(7280),r(5363),r(71);var o=r(8880),n=r(9592),a=r(3673);function i(e,t,r,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});s.render=i;const l=s;var c=r(8434),u=r(7083),d=r(9582);const p=[{name:"auth",path:"/",component:()=>Promise.all([r.e(736),r.e(169)]).then(r.bind(r,4169)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(831)]).then(r.bind(r,9831))},{name:"login",path:"/login",component:()=>Promise.all([r.e(736),r.e(43)]).then(r.bind(r,9043))},{name:"register",path:"/register",component:()=>Promise.all([r.e(736),r.e(693)]).then(r.bind(r,3693))}]},{name:"app",path:"/app",component:()=>"layouts/MainLayout.vue",children:[{name:"private",path:"private",component:()=>Promise.all([r.e(736),r.e(211)]).then(r.bind(r,4211))}],meta:{requiresAuth:!0}},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(905)]).then(r.bind(r,905))}],h=p,f=(0,u.BC)((function({store:e}){const t=d.PO,r=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:t("/")});return r.beforeEach(((t,r,o)=>{if(t.matched.some((e=>e.meta.requiresAuth))){if(e.getters.getAuthStatus)return void o();o("/")}else o()})),r}));async function m(e,t){const o="function"===typeof c.default?await(0,c.default)({}):c.default,{storeKey:a}=await Promise.resolve().then(r.bind(r,8434)),i="function"===typeof f?await f({store:o}):f;o.$router=i;const s=e(l);return s.use(n.Z,t),{app:s,store:o,storeKey:a,router:i}}var v=r(6920),b=r(6417);const g={config:{},plugins:{Loading:v.Z,Notify:b.Z}},y="/";async function w({app:e,router:t,store:r,storeKey:o},n){let a=!1;const i=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:y})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}m(o.ri,g).then((e=>Promise.all([Promise.resolve().then(r.bind(r,3993)),Promise.resolve().then(r.bind(r,9979))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,r)}))))},9979:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(7083),n=r(9058);const a=(0,o.xr)((async()=>{n.Z.set(!0)}))},3993:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var o={};r.r(o),r.d(o,{auth:()=>l,fBInit:()=>c});var n={};r.r(n),r.d(n,{createUserWithEmail:()=>u,logOut:()=>h,loginWithEmail:()=>d,registerUser:()=>p});var a={};r.r(a),r.d(a,{addUserData:()=>f});var i=r(7083),s=r(5720);r(4479);const l=()=>s.Z.auth(),c=e=>s.Z.initializeApp(e),u=async(e,t)=>s.Z.auth().createUserWithEmailAndPassword(e,t),d=(e,t)=>s.Z.auth().signInWithEmailAndPassword(e,t),p=(e,t)=>s.Z.auth().createUserWithEmailAndPassword(e,t),h=()=>s.Z.auth().signOut();r(4042);const f=async(e,t)=>s.Z.firestore().collection("users").add({name:e,email:t}),m=Object.assign({},o,n,a),v=(0,i.xr)((async({app:e,router:t,store:r,Vue:o})=>{m.fBInit({apiKey:"AIzaSyCZs8PVuCmfN_vTAUyp8iIRs3v9qLlON80",authDomain:"dev-rondpoint.firebaseapp.com",projectId:"dev-rondpoint",storageBucket:"dev-rondpoint.appspot.com",messagingSenderId:"921542209863",appId:"1:921542209863:web:9134986463492e0597dc62"}),m.auth().onAuthStateChanged((e=>{e&&r.commit("setUserToken",e)}),(e=>{console.error(e)})),r.$fb=m}))},8434:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var o=r(7083),n=r(7874);const a={isAuthenticated:!1,uid:null},i={getAuthStatus:e=>e.isAuthenticated,getUserUID:e=>e.uid},s={async loginUser({commit:e},t){const r=this.$fb,{email:o,password:n}=t;r.loginWithEmail(o,n).then((t=>{e("setUserToken",t)})).catch((e=>{console.error(e)}))},async registerUser({commit:e},t){const r=this.$fb,{name:o,email:n,password:a}=t;r.registerUser(n,a).then((()=>r.addUserData(o,n).then((()=>console.log("User successfully added"))))).catch((e=>{console.log(e)}))},async logoutUser({commit:e}){const t=this.$fb;t.logOut().then((t=>{e("destroyUser"),console.log(t)})).catch((e=>{console.log(e)}))}},l={setUserToken(e,t){e.isAuthenticated=!0,e.uid=t.uid},destroyUser(e){e.isAuthenticated=!1,e.uid=""}},c={state:a,getters:i,actions:s,mutations:l},u=(0,o.h)((function(){const e=(0,n.MT)({modules:{auth:c},strict:!1});return e}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));s&&(e.splice(c--,1),t=n())}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{43:"f0977632",169:"f422c9ef",211:"e4b47eb5",693:"9167d596",831:"a2bbb667",905:"9b123565"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/vendor.5b1e30e0.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="rond-point:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(h);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,c=0;for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r);for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(u)},o=self["webpackChunkrond_point"]=self["webpackChunkrond_point"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(2318)));o=r.O(o)})();