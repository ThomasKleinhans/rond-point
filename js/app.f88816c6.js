(()=>{"use strict";var e={8867:(e,t,r)=>{r(71),r(5363);var o=r(8880),n=r(9592),a=r(3673);function s(e,t,r,o,n,s){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}const i=(0,a.aZ)({name:"App"});var l=r(4260);const c=(0,l.Z)(i,[["render",s]]),d=c;var u=r(2630),h=r(7083),p=r(9582);const f=[{name:"auth",path:"/",component:()=>Promise.all([r.e(736),r.e(389)]).then(r.bind(r,1389)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(398)]).then(r.bind(r,9398))},{name:"login",path:"/login",component:()=>Promise.all([r.e(736),r.e(755)]).then(r.bind(r,755))},{name:"register",path:"/register",component:()=>Promise.all([r.e(736),r.e(698)]).then(r.bind(r,4698))},{name:"private",path:"/private",component:()=>Promise.all([r.e(736),r.e(211)]).then(r.bind(r,4211)),meta:{requiresAuth:!0}},{name:"homepage",path:"/app",component:()=>Promise.all([r.e(736),r.e(12)]).then(r.bind(r,6012)),meta:{requiresAuth:!0}},{name:"forgot-password",path:"/forgot-password",component:()=>Promise.all([r.e(736),r.e(813)]).then(r.bind(r,8813))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(905)]).then(r.bind(r,905))}],m=f;var g=r(529);const v=(0,h.BC)((function({store:e}){const t=p.PO,r=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:t("/rond-point/")});return r.beforeEach((async(t,r,o)=>{const{ensureAuthIsInitialized:n,isAuthenticated:a}=g.Z;await n(e);try{t.matched.some((e=>e.meta.requiresAuth))?a(e)?o():o("/"):o()}catch(s){console.log(s),o()}})),r}));async function b(e,t){const o="function"===typeof u["default"]?await(0,u["default"])({}):u["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,2630)),s="function"===typeof v?await v({store:o}):v;o.$router=s;const i=e(d);return i.use(n.Z,t),{app:i,store:o,storeKey:a,router:s}}var y=r(6920),A=r(6417);const w={config:{},plugins:{Loading:y.Z,Notify:A.Z}};var P=r(1413);(0,P.z)("/rond-point/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,9501,23));const E="/rond-point/",O=/\/\//,S=e=>(E+e).replace(O,"/");async function U({app:e,router:t,store:r,storeKey:o},n){let a=!1;const s=e=>{try{return S(t.resolve(e).href)}catch(r){}return Object(e)===e?null:e},i=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let d=0;!1===a&&d<n.length;d++)try{await n[d]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:E})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}b(o.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,2490)),Promise.resolve().then(r.bind(r,9979))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));U(e,r)}))))},9979:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(7083),n=r(9058);const a=(0,o.xr)((async()=>{n.Z.set(!0)}))},2490:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(7083),n=r(529);const a=(0,o.xr)((async({app:e,router:t,store:r,Vue:o})=>{n.Z.fBInit({apiKey:"AIzaSyCZs8PVuCmfN_vTAUyp8iIRs3v9qLlON80",authDomain:"dev-rondpoint.firebaseapp.com",projectId:"dev-rondpoint",storageBucket:"dev-rondpoint.appspot.com",messagingSenderId:"921542209863",appId:"1:921542209863:web:9134986463492e0597dc62"}),n.Z.messaging("BCQ-qP_lbCpPr3PV1YU3F3wbcuWh2gbskJ4XBNJbSMRqmciKoPYtxYeTRLP99qSSMctEGAZJ_9N0SFNHHKSdSR4DEV_API_KEY=AIzaSyCZs8PVuCmfN_vTAUyp8iIRs3v9qLlON80 DEV_AUTH_DOMAIN=dev-rondpoint.firebaseapp.com DEV_PROJECT_ID=dev-rondpoint DEV_STORAGE_BUCKET=dev-rondpoint.appspot.com DEV_MESSAGING_SENDER_ID=921542209863 DEV_APP_ID=1:921542209863:web:9134986463492e0597dc62 DEV_MEASUREMENT_ID=G-B71HQJNLVX DEV_CLOUD_MESSAGING_API_KEY=BCQ-qP_lbCpPr3PV1YU3F3wbcuWh2gbskJ4XBNJbSMRqmciKoPYtxYeTRLP99qSSMctEGAZJ_9N0SFNHHKSdSR4","/rond-point/service-worker.js"),n.Z.auth().onAuthStateChanged((e=>{n.Z.handleOnAuthStateChanged(r,e)}),(e=>{console.error(e)})),r.$fb=n.Z}))},9215:(e,t,r)=>{r.r(t),r.d(t,{addUserData:()=>n,setUserAvailability:()=>a,fetchAllOtherUsers:()=>s});var o=r(5720);r(3602);const n=async(e,t,r)=>o.Z.firestore().collection("users").doc(e).set({name:t,email:r,availability:!1}),a=async(e,t)=>o.Z.firestore().collection("users").doc(e).update({availability:t}),s=async e=>o.Z.firestore().collection("users").where(o.Z.firestore.FieldPath.documentId(),"!=",e).get()},529:(e,t,r)=>{r.d(t,{Z:()=>A});var o={};r.r(o),r.d(o,{auth:()=>i,fBInit:()=>l,messaging:()=>c});var n={};r.r(n),r.d(n,{createUserWithEmail:()=>d,ensureAuthIsInitialized:()=>g,handleOnAuthStateChanged:()=>m,isAuthenticated:()=>f,logOut:()=>p,loginWithEmail:()=>u,registerUser:()=>h,resetPassword:()=>v});var a={};r.r(a),r.d(a,{initMessaging:()=>y});var s=r(5720);r(4479);const i=()=>s.Z.auth(),l=e=>s.Z.initializeApp(e),c=(e,t)=>{const r=s.Z.messaging();navigator.serviceWorker.register(t).then((t=>{r.getToken({vapidKey:e,serviceWorkerRegistration:t}).then((e=>{e?(console.log("User token :"+e),r.onMessage((e=>{console.log("Message received. ",e)}))):console.log("No registration token available. Request permission to generate one.")})).catch((e=>{console.log("An error occurred while retrieving token. ",e)}))}))},d=async(e,t)=>s.Z.auth().createUserWithEmailAndPassword(e,t),u=(e,t)=>s.Z.auth().signInWithEmailAndPassword(e,t),h=(e,t)=>s.Z.auth().createUserWithEmailAndPassword(e,t),p=()=>s.Z.auth().signOut(),f=e=>e.state.auth.isAuthenticated,m=async(e,t)=>{e.commit("setAuthState",null!==t),t&&e.commit("setUserToken",t)},g=async e=>!!e.state.auth.isReady||new Promise(((e,t)=>{const r=s.Z.auth().onAuthStateChanged((t=>{e(),r()}),(()=>{t(new Error("Looks like there is a problem with the firebase service. Please try again later"))}))})),v=e=>s.Z.auth().sendPasswordResetEmail(e);var b=r(9215);r(8819);const y=async()=>{},A=Object.assign({},o,n,b,a)},2630:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var o=r(7083),n=r(3617);const a={isAuthenticated:!1,uid:"",isReady:!1},s={getAuthStatus:e=>e.isAuthenticated,getUserUID:e=>e.uid},i={async loginUser({commit:e},t){const{email:r,password:o}=t;this.$fb.loginWithEmail(r,o).then((t=>{e("setAuthState",null!==t),e("setUserToken",t),this.$router.push({name:"homepage"})})).catch((e=>{console.error(e)}))},async registerUser({commit:e},t){const{name:r,email:o,password:n}=t;this.$fb.registerUser(o,n).then((e=>this.$fb.addUserData(e.user.uid,r,o).then((()=>console.log("User successfully added"))))).catch((e=>{console.log(e)}))},async logoutUser({commit:e}){this.$fb.logOut().then((()=>{e("destroyUser")})).catch((e=>{console.log(e)}))},async resetPassword({commit:e},t){const{email:r}=t;this.$fb.resetPassword(r).then((()=>{this.$router.push({name:"login"})})).catch((e=>{console.log(e)}))}},l={setAuthState(e,t){e.isAuthenticated=t,e.isReady=t},setUserToken(e,t){e.uid=t.uid},destroyUser(e){e.isAuthenticated=!1,e.isReady=!1,e.uid=""}},c={state:a,getters:s,actions:i,mutations:l};r(9215);const d={name:"",isAvailable:!1,users:[]},u={getAvailability:e=>e.isAvailable,getName:e=>e.name,getAllOtherUsers:e=>e.users},h={async setUserAvailability({commit:e},t){const{uid:r,availability:o}=t;this.$fb.setUserAvailability(r,o).then((()=>{e("setAvailability",o)})).catch((e=>{console.error(e)}))},async fetchAllOtherUsers({commit:e,getters:t}){const r=t.getUserUID;r&&(e("resetUser"),this.$fb.fetchAllOtherUsers(r).then((t=>{t.forEach((t=>{e("addUser",t.data())}))})).catch((e=>{console.error(e)})))}},p={setAvailability(e,t){e.isAvailable=t},addUser(e,t){e.users.push(t)},resetUser(e){e.users=[]}},f={state:d,getters:u,actions:h,mutations:p},m=(0,o.h)((function(){const e=(0,n.MT)({modules:{auth:c,user:f},strict:!1});return e}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var s=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>s[e]=()=>o[e]));return s["default"]=()=>o,r.d(a,s),a}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{12:"84353c86",211:"aba36c52",389:"9f8a9237",398:"25e633c0",698:"8dcba20e",755:"629c26f8",813:"ff87ea26",905:"04bc8a29"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{12:"e7aa8009",143:"a653297d",698:"813ccbe4",736:"ebe43f6b",755:"aa9ecb3c",813:"42fe78e9"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="rond-point:";r.l=(o,n,a,s)=>{if(e[o])e[o].push(n);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[n];var h=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/rond-point/"})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,n.parentNode.removeChild(n),o(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){n=s[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var s=r.miniCssF(o),i=r.p+s;if(t(s,i))return n();e(o,i,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={12:1,698:1,755:1,813:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var s=r.p+r.u(t),i=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,n[1](i)}};r.l(s,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[s,i,l]=o,c=0;if(s.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var d=l(r)}for(t&&t(o);c<s.length;c++)a=s[c],r.o(e,a)&&e[a]&&e[a][0](),e[s[c]]=0;return r.O(d)},o=self["webpackChunkrond_point"]=self["webpackChunkrond_point"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(8867)));o=r.O(o)})();