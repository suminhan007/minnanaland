import{r as q,a as X0,R as j0,b as Ye}from"./react-DRHEsIiv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var Rp={exports:{}},so={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0=q,$0=Symbol.for("react.element"),J0=Symbol.for("react.fragment"),q0=Object.prototype.hasOwnProperty,Z0=Y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eB={key:!0,ref:!0,__self:!0,__source:!0};function Dp(A,e,t){var n,r={},i=null,s=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)q0.call(e,n)&&!eB.hasOwnProperty(n)&&(r[n]=e[n]);if(A&&A.defaultProps)for(n in e=A.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:$0,type:A,key:i,ref:s,props:r,_owner:Z0.current}}so.Fragment=J0;so.jsx=Dp;so.jsxs=Dp;Rp.exports=so;var M=Rp.exports,ac={},ku=X0;ac.createRoot=ku.createRoot,ac.hydrateRoot=ku.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},La.apply(this,arguments)}var Cn;(function(A){A.Pop="POP",A.Push="PUSH",A.Replace="REPLACE"})(Cn||(Cn={}));const zu="popstate";function tB(A){A===void 0&&(A={});function e(n,r){let{pathname:i,search:s,hash:a}=n.location;return oc("",{pathname:i,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(n,r){return typeof r=="string"?r:Pp(r)}return nB(e,t,null,A)}function Zt(A,e){if(A===!1||A===null||typeof A>"u")throw new Error(e)}function Hp(A,e){if(!A){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AB(){return Math.random().toString(36).substr(2,8)}function Ku(A,e){return{usr:A.state,key:A.key,idx:e}}function oc(A,e,t,n){return t===void 0&&(t=null),La({pathname:typeof A=="string"?A:A.pathname,search:"",hash:""},typeof e=="string"?ao(e):e,{state:t,key:e&&e.key||n||AB()})}function Pp(A){let{pathname:e="/",search:t="",hash:n=""}=A;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ao(A){let e={};if(A){let t=A.indexOf("#");t>=0&&(e.hash=A.substr(t),A=A.substr(0,t));let n=A.indexOf("?");n>=0&&(e.search=A.substr(n),A=A.substr(0,n)),A&&(e.pathname=A)}return e}function nB(A,e,t,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:i=!1}=n,s=r.history,a=Cn.Pop,o=null,l=c();l==null&&(l=0,s.replaceState(La({},s.state,{idx:l}),""));function c(){return(s.state||{idx:null}).idx}function u(){a=Cn.Pop;let p=c(),f=p==null?null:p-l;l=p,o&&o({action:a,location:m.location,delta:f})}function d(p,f){a=Cn.Push;let v=oc(m.location,p,f);t&&t(v,p),l=c()+1;let B=Ku(v,l),C=m.createHref(v);try{s.pushState(B,"",C)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;r.location.assign(C)}i&&o&&o({action:a,location:m.location,delta:1})}function h(p,f){a=Cn.Replace;let v=oc(m.location,p,f);t&&t(v,p),l=c();let B=Ku(v,l),C=m.createHref(v);s.replaceState(B,"",C),i&&o&&o({action:a,location:m.location,delta:0})}function g(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:Pp(p);return v=v.replace(/ $/,"%20"),Zt(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let m={get action(){return a},get location(){return A(r,s)},listen(p){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(zu,u),o=p,()=>{r.removeEventListener(zu,u),o=null}},createHref(p){return e(r,p)},createURL:g,encodeLocation(p){let f=g(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:h,go(p){return s.go(p)}};return m}var Wu;(function(A){A.data="data",A.deferred="deferred",A.redirect="redirect",A.error="error"})(Wu||(Wu={}));function rB(A,e,t){t===void 0&&(t="/");let n=typeof e=="string"?ao(e):e,r=Gp(n.pathname||"/",t);if(r==null)return null;let i=Np(A);iB(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let o=mB(r);s=hB(i[a],o)}return s}function Np(A,e,t,n){e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n="");let r=(i,s,a)=>{let o={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Zt(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let l=Wr([n,o.relativePath]),c=t.concat(o);i.children&&i.children.length>0&&(Zt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Np(i.children,e,c,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:dB(l,i.index),routesMeta:c})};return A.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))r(i,s);else for(let o of Op(i.path))r(i,s,o)}),e}function Op(A){let e=A.split("/");if(e.length===0)return[];let[t,...n]=e,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(n.length===0)return r?[i,""]:[i];let s=Op(n.join("/")),a=[];return a.push(...s.map(o=>o===""?i:[i,o].join("/"))),r&&a.push(...s),a.map(o=>A.startsWith("/")&&o===""?"/":o)}function iB(A){A.sort((e,t)=>e.score!==t.score?t.score-e.score:fB(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const sB=/^:[\w-]+$/,aB=3,oB=2,lB=1,cB=10,uB=-2,Xu=A=>A==="*";function dB(A,e){let t=A.split("/"),n=t.length;return t.some(Xu)&&(n+=uB),e&&(n+=oB),t.filter(r=>!Xu(r)).reduce((r,i)=>r+(sB.test(i)?aB:i===""?lB:cB),n)}function fB(A,e){return A.length===e.length&&A.slice(0,-1).every((n,r)=>n===e[r])?A[A.length-1]-e[e.length-1]:0}function hB(A,e){let{routesMeta:t}=A,n={},r="/",i=[];for(let s=0;s<t.length;++s){let a=t[s],o=s===t.length-1,l=r==="/"?e:e.slice(r.length)||"/",c=pB({path:a.relativePath,caseSensitive:a.caseSensitive,end:o},l);if(!c)return null;Object.assign(n,c.params);let u=a.route;i.push({params:n,pathname:Wr([r,c.pathname]),pathnameBase:BB(Wr([r,c.pathnameBase])),route:u}),c.pathnameBase!=="/"&&(r=Wr([r,c.pathnameBase]))}return i}function pB(A,e){typeof A=="string"&&(A={path:A,caseSensitive:!1,end:!0});let[t,n]=gB(A.path,A.caseSensitive,A.end),r=e.match(t);if(!r)return null;let i=r[0],s=i.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:n.reduce((l,c,u)=>{let{paramName:d,isOptional:h}=c;if(d==="*"){let m=a[u]||"";s=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const g=a[u];return h&&!g?l[d]=void 0:l[d]=(g||"").replace(/%2F/g,"/"),l},{}),pathname:i,pathnameBase:s,pattern:A}}function gB(A,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Hp(A==="*"||!A.endsWith("*")||A.endsWith("/*"),'Route path "'+A+'" will be treated as if it were '+('"'+A.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+A.replace(/\*$/,"/*")+'".'));let n=[],r="^"+A.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,o)=>(n.push({paramName:a,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return A.endsWith("*")?(n.push({paramName:"*"}),r+=A==="*"||A==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":A!==""&&A!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function mB(A){try{return A.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hp(!1,'The URL path "'+A+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),A}}function Gp(A,e){if(e==="/")return A;if(!A.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=A.charAt(t);return n&&n!=="/"?null:A.slice(t)||"/"}const Wr=A=>A.join("/").replace(/\/\/+/g,"/"),BB=A=>A.replace(/\/+$/,"").replace(/^\/*/,"/");function vB(A){return A!=null&&typeof A.status=="number"&&typeof A.statusText=="string"&&typeof A.internal=="boolean"&&"data"in A}const Vp=["post","put","patch","delete"];new Set(Vp);const wB=["get",...Vp];new Set(wB);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},Ra.apply(this,arguments)}const xB=q.createContext(null),CB=q.createContext(null),kp=q.createContext(null),oo=q.createContext(null),lo=q.createContext({outlet:null,matches:[],isDataRoute:!1}),zp=q.createContext(null);function ou(){return q.useContext(oo)!=null}function _B(){return ou()||Zt(!1),q.useContext(oo).location}function EB(A,e){return yB(A,e)}function yB(A,e,t,n){ou()||Zt(!1);let{navigator:r}=q.useContext(kp),{matches:i}=q.useContext(lo),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let o=s?s.pathnameBase:"/";s&&s.route;let l=_B(),c;if(e){var u;let p=typeof e=="string"?ao(e):e;o==="/"||(u=p.pathname)!=null&&u.startsWith(o)||Zt(!1),c=p}else c=l;let d=c.pathname||"/",h=d;if(o!=="/"){let p=o.replace(/^\//,"").split("/");h="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let g=rB(A,{pathname:h}),m=FB(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Wr([o,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?o:Wr([o,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),i,t,n);return e&&m?q.createElement(oo.Provider,{value:{location:Ra({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Cn.Pop}},m):m}function SB(){let A=LB(),e=vB(A)?A.status+" "+A.statusText:A instanceof Error?A.message:JSON.stringify(A),t=A instanceof Error?A.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),t?q.createElement("pre",{style:r},t):null,null)}const bB=q.createElement(SB,null);class UB extends q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?q.createElement(lo.Provider,{value:this.props.routeContext},q.createElement(zp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function MB(A){let{routeContext:e,match:t,children:n}=A,r=q.useContext(xB);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(lo.Provider,{value:e},n)}function FB(A,e,t,n){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),A==null){var i;if((i=t)!=null&&i.errors)A=t.matches;else return null}let s=A,a=(r=t)==null?void 0:r.errors;if(a!=null){let c=s.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));c>=0||Zt(!1),s=s.slice(0,Math.min(s.length,c+1))}let o=!1,l=-1;if(t&&n&&n.v7_partialHydration)for(let c=0;c<s.length;c++){let u=s[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:d,errors:h}=t,g=u.route.loader&&d[u.route.id]===void 0&&(!h||h[u.route.id]===void 0);if(u.route.lazy||g){o=!0,l>=0?s=s.slice(0,l+1):s=[s[0]];break}}}return s.reduceRight((c,u,d)=>{let h,g=!1,m=null,p=null;t&&(h=a&&u.route.id?a[u.route.id]:void 0,m=u.route.errorElement||bB,o&&(l<0&&d===0?(RB("route-fallback",!1),g=!0,p=null):l===d&&(g=!0,p=u.route.hydrateFallbackElement||null)));let f=e.concat(s.slice(0,d+1)),v=()=>{let B;return h?B=m:g?B=p:u.route.Component?B=q.createElement(u.route.Component,null):u.route.element?B=u.route.element:B=c,q.createElement(MB,{match:u,routeContext:{outlet:c,matches:f,isDataRoute:t!=null},children:B})};return t&&(u.route.ErrorBoundary||u.route.errorElement||d===0)?q.createElement(UB,{location:t.location,revalidation:t.revalidation,component:m,error:h,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var lc=function(A){return A.UseBlocker="useBlocker",A.UseLoaderData="useLoaderData",A.UseActionData="useActionData",A.UseRouteError="useRouteError",A.UseNavigation="useNavigation",A.UseRouteLoaderData="useRouteLoaderData",A.UseMatches="useMatches",A.UseRevalidator="useRevalidator",A.UseNavigateStable="useNavigate",A.UseRouteId="useRouteId",A}(lc||{});function TB(A){let e=q.useContext(CB);return e||Zt(!1),e}function IB(A){let e=q.useContext(lo);return e||Zt(!1),e}function QB(A){let e=IB(),t=e.matches[e.matches.length-1];return t.route.id||Zt(!1),t.route.id}function LB(){var A;let e=q.useContext(zp),t=TB(lc.UseRouteError),n=QB(lc.UseRouteError);return e!==void 0?e:(A=t.errors)==null?void 0:A[n]}const ju={};function RB(A,e,t){!e&&!ju[A]&&(ju[A]=!0)}function Pr(A){Zt(!1)}function DB(A){let{basename:e="/",children:t=null,location:n,navigationType:r=Cn.Pop,navigator:i,static:s=!1,future:a}=A;ou()&&Zt(!1);let o=e.replace(/^\/*/,"/"),l=q.useMemo(()=>({basename:o,navigator:i,static:s,future:Ra({v7_relativeSplatPath:!1},a)}),[o,a,i,s]);typeof n=="string"&&(n=ao(n));let{pathname:c="/",search:u="",hash:d="",state:h=null,key:g="default"}=n,m=q.useMemo(()=>{let p=Gp(c,o);return p==null?null:{location:{pathname:p,search:u,hash:d,state:h,key:g},navigationType:r}},[o,c,u,d,h,g,r]);return m==null?null:q.createElement(kp.Provider,{value:l},q.createElement(oo.Provider,{children:t,value:m}))}function HB(A){let{children:e,location:t}=A;return EB(cc(e),t)}new Promise(()=>{});function cc(A,e){e===void 0&&(e=[]);let t=[];return q.Children.forEach(A,(n,r)=>{if(!q.isValidElement(n))return;let i=[...e,r];if(n.type===q.Fragment){t.push.apply(t,cc(n.props.children,i));return}n.type!==Pr&&Zt(!1),!n.props.index||!n.props.children||Zt(!1);let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=cc(n.props.children,i)),t.push(s)}),t}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const PB="6";try{window.__reactRouterVersion=PB}catch{}const NB="startTransition",Yu=j0[NB];function OB(A){let{basename:e,children:t,future:n,window:r}=A,i=q.useRef();i.current==null&&(i.current=tB({window:r,v5Compat:!0}));let s=i.current,[a,o]=q.useState({action:s.action,location:s.location}),{v7_startTransition:l}=n||{},c=q.useCallback(u=>{l&&Yu?Yu(()=>o(u)):o(u)},[o,l]);return q.useLayoutEffect(()=>s.listen(c),[s,c]),q.createElement(DB,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:s,future:n})}var $u;(function(A){A.UseScrollRestoration="useScrollRestoration",A.UseSubmit="useSubmit",A.UseSubmitFetcher="useSubmitFetcher",A.UseFetcher="useFetcher",A.useViewTransitionState="useViewTransitionState"})($u||($u={}));var Ju;(function(A){A.UseFetcher="useFetcher",A.UseFetchers="useFetchers",A.UseScrollRestoration="useScrollRestoration"})(Ju||(Ju={}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="153",GB=0,qu=1,VB=2,Kp=1,kB=2,tn=3,Qn=0,qt=1,sn=2,Mn=0,Xr=1,Zu=2,ed=3,td=4,zB=5,Nr=100,KB=101,WB=102,Ad=103,nd=104,XB=200,jB=201,YB=202,$B=203,Wp=204,Xp=205,JB=206,qB=207,ZB=208,ev=209,tv=210,Av=0,nv=1,rv=2,uc=3,iv=4,sv=5,av=6,ov=7,cu=0,lv=1,cv=2,ln=0,uv=1,dv=2,fv=3,hv=4,pv=5,jp=300,Jr=301,qr=302,dc=303,fc=304,co=306,hc=1e3,UA=1001,pc=1002,Kt=1003,rd=1004,ko=1005,hA=1006,gv=1007,$i=1008,Fn=1009,mv=1010,Bv=1011,uu=1012,Yp=1013,_n=1014,En=1015,Ji=1016,$p=1017,Jp=1018,qn=1020,vv=1021,MA=1023,wv=1024,xv=1025,Zn=1026,Zr=1027,Cv=1028,qp=1029,_v=1030,Zp=1031,eg=1033,zo=33776,Ko=33777,Wo=33778,Xo=33779,id=35840,sd=35841,ad=35842,od=35843,Ev=36196,ld=37492,cd=37496,ud=37808,dd=37809,fd=37810,hd=37811,pd=37812,gd=37813,md=37814,Bd=37815,vd=37816,wd=37817,xd=37818,Cd=37819,_d=37820,Ed=37821,jo=36492,yv=36283,yd=36284,Sd=36285,bd=36286,tg=3e3,er=3001,Sv=3200,bv=3201,du=0,Uv=1,tr="",He="srgb",VA="srgb-linear",Ag="display-p3",Yo=7680,Mv=519,Fv=512,Tv=513,Iv=514,Qv=515,Lv=516,Rv=517,Dv=518,Hv=519,Ud=35044,Md="300 es",gc=1035,an=2e3,Da=2001;class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let i=0,s=r.length;i<s;i++)r[i].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pa=Math.PI/180,mc=180/Math.PI;function rs(){const A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[A&255]+Dt[A>>8&255]+Dt[A>>16&255]+Dt[A>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Yt(A,e,t){return Math.max(e,Math.min(t,A))}function Pv(A,e){return(A%e+e)%e}function $o(A,e,t){return(1-t)*A+t*e}function Fd(A){return(A&A-1)===0&&A!==0}function Bc(A){return Math.pow(2,Math.floor(Math.log(A)/Math.LN2))}function fs(A,e){switch(e.constructor){case Float32Array:return A;case Uint32Array:return A/4294967295;case Uint16Array:return A/65535;case Uint8Array:return A/255;case Int32Array:return Math.max(A/2147483647,-1);case Int16Array:return Math.max(A/32767,-1);case Int8Array:return Math.max(A/127,-1);default:throw new Error("Invalid component type.")}}function tA(A,e){switch(e.constructor){case Float32Array:return A;case Uint32Array:return Math.round(A*4294967295);case Uint16Array:return Math.round(A*65535);case Uint8Array:return Math.round(A*255);case Int32Array:return Math.round(A*2147483647);case Int16Array:return Math.round(A*32767);case Int8Array:return Math.round(A*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*n-s*r+e.x,this.y=i*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,r,i,s,a,o,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,s,a,o,l)}set(e,t,n,r,i,s,a,o,l){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=i,c[5]=o,c[6]=n,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],d=n[2],h=n[5],g=n[8],m=r[0],p=r[3],f=r[6],v=r[1],B=r[4],C=r[7],x=r[2],_=r[5],E=r[8];return i[0]=s*m+a*v+o*x,i[3]=s*p+a*B+o*_,i[6]=s*f+a*C+o*E,i[1]=l*m+c*v+u*x,i[4]=l*p+c*B+u*_,i[7]=l*f+c*C+u*E,i[2]=d*m+h*v+g*x,i[5]=d*p+h*B+g*_,i[8]=d*f+h*C+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*s*c-t*a*l-n*i*c+n*a*o+r*i*l-r*s*o}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=c*s-a*l,d=a*o-c*i,h=l*i-s*o,g=t*u+n*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(r*l-c*n)*m,e[2]=(a*n-r*s)*m,e[3]=d*m,e[4]=(c*t-r*o)*m,e[5]=(r*i-a*t)*m,e[6]=h*m,e[7]=(n*o-l*t)*m,e[8]=(s*t-n*i)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,s,a){const o=Math.cos(i),l=Math.sin(i);return this.set(n*o,n*l,-n*(o*s+l*a)+s+e,-r*l,r*o,-r*(-l*s+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new Ne;function ng(A){for(let e=A.length-1;e>=0;--e)if(A[e]>=65535)return!0;return!1}function Ha(A){return document.createElementNS("http://www.w3.org/1999/xhtml",A)}const Td={};function Oi(A){A in Td||(Td[A]=!0,console.warn(A))}function jr(A){return A<.04045?A*.0773993808:Math.pow(A*.9478672986+.0521327014,2.4)}function qo(A){return A<.0031308?A*12.92:1.055*Math.pow(A,.41666)-.055}const Nv=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ov=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Gv(A){return A.convertSRGBToLinear().applyMatrix3(Ov)}function Vv(A){return A.applyMatrix3(Nv).convertLinearToSRGB()}const kv={[VA]:A=>A,[He]:A=>A.convertSRGBToLinear(),[Ag]:Gv},zv={[VA]:A=>A,[He]:A=>A.convertLinearToSRGB(),[Ag]:Vv},CA={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(A){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!A},get workingColorSpace(){return VA},set workingColorSpace(A){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(A,e,t){if(this.enabled===!1||e===t||!e||!t)return A;const n=kv[e],r=zv[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(A))},fromWorkingColorSpace:function(A,e){return this.convert(A,this.workingColorSpace,e)},toWorkingColorSpace:function(A,e){return this.convert(A,e,this.workingColorSpace)}};let hr;class rg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hr===void 0&&(hr=Ha("canvas")),hr.width=e.width,hr.height=e.height;const n=hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ha("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let s=0;s<i.length;s++)i[s]=jr(i[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jr(t[n]/255)*255):t[n]=jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kv=0;class ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?i.push(Zo(r[s].image)):i.push(Zo(r[s]))}else i=Zo(r);n.url=i}return t||(e.images[this.uuid]=n),n}}function Zo(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap?rg.getDataURL(A):A.data?{data:Array.from(A.data),width:A.width,height:A.height,type:A.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wv=0;class cA extends di{constructor(e=cA.DEFAULT_IMAGE,t=cA.DEFAULT_MAPPING,n=UA,r=UA,i=hA,s=$i,a=MA,o=Fn,l=cA.DEFAULT_ANISOTROPY,c=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=rs(),this.name="",this.source=new ig(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===er?He:tr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case UA:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case UA:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?er:tg}set encoding(e){Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===er?He:tr}}cA.DEFAULT_IMAGE=null;cA.DEFAULT_MAPPING=jp;cA.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*i,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*i,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*i,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i;const o=e.elements,l=o[0],c=o[4],u=o[8],d=o[1],h=o[5],g=o[9],m=o[2],p=o[6],f=o[10];if(Math.abs(c-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const B=(l+1)/2,C=(h+1)/2,x=(f+1)/2,_=(c+d)/4,E=(u+m)/4,T=(g+p)/4;return B>C&&B>x?B<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(B),r=_/n,i=E/n):C>x?C<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(C),n=_/r,i=T/r):x<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(x),n=E/i,r=T/i),this.set(n,r,i,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-m)/v,this.z=(d-c)/v,this.w=Math.acos((l+h+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lr extends di{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Oi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===er?He:tr),this.texture=new cA(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hA,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ig(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sg extends cA{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=UA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xv extends cA{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=UA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,s,a){let o=n[r+0],l=n[r+1],c=n[r+2],u=n[r+3];const d=i[s+0],h=i[s+1],g=i[s+2],m=i[s+3];if(a===0){e[t+0]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=m;return}if(u!==m||o!==d||l!==h||c!==g){let p=1-a;const f=o*d+l*h+c*g+u*m,v=f>=0?1:-1,B=1-f*f;if(B>Number.EPSILON){const x=Math.sqrt(B),_=Math.atan2(x,f*v);p=Math.sin(p*_)/x,a=Math.sin(a*_)/x}const C=a*v;if(o=o*p+d*C,l=l*p+h*C,c=c*p+g*C,u=u*p+m*C,p===1-a){const x=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=x,l*=x,c*=x,u*=x}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,s){const a=n[r],o=n[r+1],l=n[r+2],c=n[r+3],u=i[s],d=i[s+1],h=i[s+2],g=i[s+3];return e[t]=a*g+c*u+o*h-l*d,e[t+1]=o*g+c*d+l*u-a*h,e[t+2]=l*g+c*h+a*d-o*u,e[t+3]=c*g-a*u-o*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,i=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(r/2),u=a(i/2),d=o(n/2),h=o(r/2),g=o(i/2);switch(s){case"XYZ":this._x=d*c*u+l*h*g,this._y=l*h*u-d*c*g,this._z=l*c*g+d*h*u,this._w=l*c*u-d*h*g;break;case"YXZ":this._x=d*c*u+l*h*g,this._y=l*h*u-d*c*g,this._z=l*c*g-d*h*u,this._w=l*c*u+d*h*g;break;case"ZXY":this._x=d*c*u-l*h*g,this._y=l*h*u+d*c*g,this._z=l*c*g+d*h*u,this._w=l*c*u-d*h*g;break;case"ZYX":this._x=d*c*u-l*h*g,this._y=l*h*u+d*c*g,this._z=l*c*g-d*h*u,this._w=l*c*u+d*h*g;break;case"YZX":this._x=d*c*u+l*h*g,this._y=l*h*u+d*c*g,this._z=l*c*g-d*h*u,this._w=l*c*u-d*h*g;break;case"XZY":this._x=d*c*u-l*h*g,this._y=l*h*u-d*c*g,this._z=l*c*g+d*h*u,this._w=l*c*u+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10],d=n+a+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-o)*h,this._y=(i-l)*h,this._z=(s-r)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(i+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(i-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(o+c)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(s-r)/h,this._x=(i+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,i=e._z,s=e._w,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=n*c+s*a+r*l-i*o,this._y=r*c+s*o+i*a-n*l,this._z=i*c+s*l+n*o-r*a,this._w=s*c-n*a-r*o-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,i=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=i,this;const o=1-a*a;if(o<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),u=Math.sin((1-t)*c)/l,d=Math.sin(t*c)/l;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Id.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=e.elements,s=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*s,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*s,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,i=e.x,s=e.y,a=e.z,o=e.w,l=o*t+s*r-a*n,c=o*n+a*t-i*r,u=o*r+i*n-s*t,d=-i*t-s*n-a*r;return this.x=l*o+d*-i+c*-a-u*-s,this.y=c*o+d*-s+u*-i-l*-a,this.z=u*o+d*-a+l*-s-c*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,i=e.z,s=t.x,a=t.y,o=t.z;return this.x=r*o-i*a,this.y=i*s-n*o,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new P,Id=new is;class ss{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(XA.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(XA.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=XA.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox),pr.applyMatrix4(e.matrixWorld),this.union(pr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const i=r.attributes.position;for(let s=0,a=i.count;s<a;s++)XA.fromBufferAttribute(i,s).applyMatrix4(e.matrixWorld),this.expandByPoint(XA)}else r.boundingBox===null&&r.computeBoundingBox(),pr.copy(r.boundingBox),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const n=e.children;for(let r=0,i=n.length;r<i;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,XA),XA.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),hs.subVectors(this.max,vi),gr.subVectors(e.a,vi),mr.subVectors(e.b,vi),Br.subVectors(e.c,vi),fn.subVectors(mr,gr),hn.subVectors(Br,mr),Pn.subVectors(gr,Br);let t=[0,-fn.z,fn.y,0,-hn.z,hn.y,0,-Pn.z,Pn.y,fn.z,0,-fn.x,hn.z,0,-hn.x,Pn.z,0,-Pn.x,-fn.y,fn.x,0,-hn.y,hn.x,0,-Pn.y,Pn.x,0];return!tl(t,gr,mr,Br,hs)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,gr,mr,Br,hs))?!1:(ps.crossVectors(fn,hn),t=[ps.x,ps.y,ps.z],tl(t,gr,mr,Br,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,XA).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(XA).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(WA[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),WA[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),WA[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),WA[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),WA[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),WA[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),WA[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),WA[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(WA),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const WA=[new P,new P,new P,new P,new P,new P,new P,new P],XA=new P,pr=new ss,gr=new P,mr=new P,Br=new P,fn=new P,hn=new P,Pn=new P,vi=new P,hs=new P,ps=new P,Nn=new P;function tl(A,e,t,n,r){for(let i=0,s=A.length-3;i<=s;i+=3){Nn.fromArray(A,i);const a=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),o=e.dot(Nn),l=t.dot(Nn),c=n.dot(Nn);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const jv=new ss,wi=new P,Al=new P;class uo{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jv.setFromPoints(e).getCenter(n);let r=0;for(let i=0,s=e.length;i<s;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(wi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(Al)),this.expandByPoint(wi.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jA=new P,nl=new P,gs=new P,pn=new P,rl=new P,ms=new P,il=new P;class ag{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jA)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jA.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jA.copy(this.origin).addScaledVector(this.direction,t),jA.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){nl.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(nl);const i=e.distanceTo(t)*.5,s=-this.direction.dot(gs),a=pn.dot(this.direction),o=-pn.dot(gs),l=pn.lengthSq(),c=Math.abs(1-s*s);let u,d,h,g;if(c>0)if(u=s*o-a,d=s*a-o,g=i*c,u>=0)if(d>=-g)if(d<=g){const m=1/c;u*=m,d*=m,h=u*(u+s*d+2*a)+d*(s*u+d+2*o)+l}else d=i,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d=-i,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d<=-g?(u=Math.max(0,-(-s*i+a)),d=u>0?-i:Math.min(Math.max(-i,-o),i),h=-u*u+d*(d+2*o)+l):d<=g?(u=0,d=Math.min(Math.max(-i,-o),i),h=d*(d+2*o)+l):(u=Math.max(0,-(s*i+a)),d=u>0?i:Math.min(Math.max(-i,-o),i),h=-u*u+d*(d+2*o)+l);else d=s>0?-i:i,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(nl).addScaledVector(gs,d),h}intersectSphere(e,t){jA.subVectors(e.center,this.origin);const n=jA.dot(this.direction),r=jA.dot(jA)-n*n,i=e.radius*e.radius;if(r>i)return null;const s=Math.sqrt(i-r),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),c>=0?(i=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(i=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),n>s||i>r||((i>n||isNaN(n))&&(n=i),(s<r||isNaN(r))&&(r=s),u>=0?(a=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u),n>o||a>r)||((a>n||n!==n)&&(n=a),(o<r||r!==r)&&(r=o),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jA)!==null}intersectTriangle(e,t,n,r,i){rl.subVectors(t,e),ms.subVectors(n,e),il.crossVectors(rl,ms);let s=this.direction.dot(il),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;pn.subVectors(this.origin,e);const o=a*this.direction.dot(ms.crossVectors(pn,ms));if(o<0)return null;const l=a*this.direction.dot(rl.cross(pn));if(l<0||o+l>s)return null;const c=-a*pn.dot(il);return c<0?null:this.at(c/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,r,i,s,a,o,l,c,u,d,h,g,m,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,s,a,o,l,c,u,d,h,g,m,p)}set(e,t,n,r,i,s,a,o,l,c,u,d,h,g,m,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=i,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=u,f[14]=d,f[3]=h,f[7]=g,f[11]=m,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),i=1/vr.setFromMatrixColumn(e,1).length(),s=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,i=e.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(r),l=Math.sin(r),c=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const d=s*c,h=s*u,g=a*c,m=a*u;t[0]=o*c,t[4]=-o*u,t[8]=l,t[1]=h+g*l,t[5]=d-m*l,t[9]=-a*o,t[2]=m-d*l,t[6]=g+h*l,t[10]=s*o}else if(e.order==="YXZ"){const d=o*c,h=o*u,g=l*c,m=l*u;t[0]=d+m*a,t[4]=g*a-h,t[8]=s*l,t[1]=s*u,t[5]=s*c,t[9]=-a,t[2]=h*a-g,t[6]=m+d*a,t[10]=s*o}else if(e.order==="ZXY"){const d=o*c,h=o*u,g=l*c,m=l*u;t[0]=d-m*a,t[4]=-s*u,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*c,t[9]=m-d*a,t[2]=-s*l,t[6]=a,t[10]=s*o}else if(e.order==="ZYX"){const d=s*c,h=s*u,g=a*c,m=a*u;t[0]=o*c,t[4]=g*l-h,t[8]=d*l+m,t[1]=o*u,t[5]=m*l+d,t[9]=h*l-g,t[2]=-l,t[6]=a*o,t[10]=s*o}else if(e.order==="YZX"){const d=s*o,h=s*l,g=a*o,m=a*l;t[0]=o*c,t[4]=m-d*u,t[8]=g*u+h,t[1]=u,t[5]=s*c,t[9]=-a*c,t[2]=-l*c,t[6]=h*u+g,t[10]=d-m*u}else if(e.order==="XZY"){const d=s*o,h=s*l,g=a*o,m=a*l;t[0]=o*c,t[4]=-u,t[8]=l*c,t[1]=d*u+m,t[5]=s*c,t[9]=h*u-g,t[2]=g*u-h,t[6]=a*c,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yv,e,$v)}lookAt(e,t,n){const r=this.elements;return AA.subVectors(e,t),AA.lengthSq()===0&&(AA.z=1),AA.normalize(),gn.crossVectors(n,AA),gn.lengthSq()===0&&(Math.abs(n.z)===1?AA.x+=1e-4:AA.z+=1e-4,AA.normalize(),gn.crossVectors(n,AA)),gn.normalize(),Bs.crossVectors(AA,gn),r[0]=gn.x,r[4]=Bs.x,r[8]=AA.x,r[1]=gn.y,r[5]=Bs.y,r[9]=AA.y,r[2]=gn.z,r[6]=Bs.z,r[10]=AA.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],d=n[9],h=n[13],g=n[2],m=n[6],p=n[10],f=n[14],v=n[3],B=n[7],C=n[11],x=n[15],_=r[0],E=r[4],T=r[8],w=r[12],y=r[1],I=r[5],L=r[9],U=r[13],Q=r[2],D=r[6],z=r[10],N=r[14],W=r[3],V=r[7],X=r[11],re=r[15];return i[0]=s*_+a*y+o*Q+l*W,i[4]=s*E+a*I+o*D+l*V,i[8]=s*T+a*L+o*z+l*X,i[12]=s*w+a*U+o*N+l*re,i[1]=c*_+u*y+d*Q+h*W,i[5]=c*E+u*I+d*D+h*V,i[9]=c*T+u*L+d*z+h*X,i[13]=c*w+u*U+d*N+h*re,i[2]=g*_+m*y+p*Q+f*W,i[6]=g*E+m*I+p*D+f*V,i[10]=g*T+m*L+p*z+f*X,i[14]=g*w+m*U+p*N+f*re,i[3]=v*_+B*y+C*Q+x*W,i[7]=v*E+B*I+C*D+x*V,i[11]=v*T+B*L+C*z+x*X,i[15]=v*w+B*U+C*N+x*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],s=e[1],a=e[5],o=e[9],l=e[13],c=e[2],u=e[6],d=e[10],h=e[14],g=e[3],m=e[7],p=e[11],f=e[15];return g*(+i*o*u-r*l*u-i*a*d+n*l*d+r*a*h-n*o*h)+m*(+t*o*h-t*l*d+i*s*d-r*s*h+r*l*c-i*o*c)+p*(+t*l*u-t*a*h-i*s*u+n*s*h+i*a*c-n*l*c)+f*(-r*a*c-t*o*u+t*a*d+r*s*u-n*s*d+n*o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=e[9],d=e[10],h=e[11],g=e[12],m=e[13],p=e[14],f=e[15],v=u*p*l-m*d*l+m*o*h-a*p*h-u*o*f+a*d*f,B=g*d*l-c*p*l-g*o*h+s*p*h+c*o*f-s*d*f,C=c*m*l-g*u*l+g*a*h-s*m*h-c*a*f+s*u*f,x=g*u*o-c*m*o-g*a*d+s*m*d+c*a*p-s*u*p,_=t*v+n*B+r*C+i*x;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=v*E,e[1]=(m*d*i-u*p*i-m*r*h+n*p*h+u*r*f-n*d*f)*E,e[2]=(a*p*i-m*o*i+m*r*l-n*p*l-a*r*f+n*o*f)*E,e[3]=(u*o*i-a*d*i-u*r*l+n*d*l+a*r*h-n*o*h)*E,e[4]=B*E,e[5]=(c*p*i-g*d*i+g*r*h-t*p*h-c*r*f+t*d*f)*E,e[6]=(g*o*i-s*p*i-g*r*l+t*p*l+s*r*f-t*o*f)*E,e[7]=(s*d*i-c*o*i+c*r*l-t*d*l-s*r*h+t*o*h)*E,e[8]=C*E,e[9]=(g*u*i-c*m*i-g*n*h+t*m*h+c*n*f-t*u*f)*E,e[10]=(s*m*i-g*a*i+g*n*l-t*m*l-s*n*f+t*a*f)*E,e[11]=(c*a*i-s*u*i-c*n*l+t*u*l+s*n*h-t*a*h)*E,e[12]=x*E,e[13]=(c*m*r-g*u*r+g*n*d-t*m*d-c*n*p+t*u*p)*E,e[14]=(g*a*r-s*m*r-g*n*o+t*m*o+s*n*p-t*a*p)*E,e[15]=(s*u*r-c*a*r+c*n*o-t*u*o-s*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),i=1-n,s=e.x,a=e.y,o=e.z,l=i*s,c=i*a;return this.set(l*s+n,l*a-r*o,l*o+r*a,0,l*a+r*o,c*a+n,c*o-r*s,0,l*o-r*a,c*o+r*s,i*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,s){return this.set(1,n,i,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,i=t._x,s=t._y,a=t._z,o=t._w,l=i+i,c=s+s,u=a+a,d=i*l,h=i*c,g=i*u,m=s*c,p=s*u,f=a*u,v=o*l,B=o*c,C=o*u,x=n.x,_=n.y,E=n.z;return r[0]=(1-(m+f))*x,r[1]=(h+C)*x,r[2]=(g-B)*x,r[3]=0,r[4]=(h-C)*_,r[5]=(1-(d+f))*_,r[6]=(p+v)*_,r[7]=0,r[8]=(g+B)*E,r[9]=(p-v)*E,r[10]=(1-(d+m))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let i=vr.set(r[0],r[1],r[2]).length();const s=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],_A.copy(this);const l=1/i,c=1/s,u=1/a;return _A.elements[0]*=l,_A.elements[1]*=l,_A.elements[2]*=l,_A.elements[4]*=c,_A.elements[5]*=c,_A.elements[6]*=c,_A.elements[8]*=u,_A.elements[9]*=u,_A.elements[10]*=u,t.setFromRotationMatrix(_A),n.x=i,n.y=s,n.z=a,this}makePerspective(e,t,n,r,i,s,a=an){const o=this.elements,l=2*i/(t-e),c=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let h,g;if(a===an)h=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(a===Da)h=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,i,s,a=an){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(s-i),d=(t+e)*l,h=(n+r)*c;let g,m;if(a===an)g=(s+i)*u,m=-2*u;else if(a===Da)g=i*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=m,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vr=new P,_A=new gt,Yv=new P(0,0,0),$v=new P(1,1,1),gn=new P,Bs=new P,AA=new P,Qd=new gt,Ld=new is;class fo{constructor(e=0,t=0,n=0,r=fo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,i=r[0],s=r[4],a=r[8],o=r[1],l=r[5],c=r[9],u=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,i));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(o,i)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fo.DEFAULT_ORDER="XYZ";class og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jv=0;const Rd=new P,wr=new is,YA=new gt,vs=new P,xi=new P,qv=new P,Zv=new is,Dd=new P(1,0,0),Hd=new P(0,1,0),Pd=new P(0,0,1),ew={type:"added"},Nd={type:"removed"};class Wt extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new P,t=new fo,n=new is,r=new P(1,1,1);function i(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ne}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Dd,e)}rotateY(e){return this.rotateOnAxis(Hd,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dd,e)}translateY(e){return this.translateOnAxis(Hd,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(YA.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vs.copy(e):vs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?YA.lookAt(xi,vs,this.up):YA.lookAt(vs,xi,this.up),this.quaternion.setFromRotationMatrix(YA),r&&(YA.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(YA),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ew)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Nd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),YA.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),YA.multiply(e.parent.matrixWorld)),e.applyMatrix4(YA),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let i=0,s=r.length;i<s;i++){const a=r[i];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const u=o[l];i(e.shapes,u)}else i(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(i(e.materials,this.material[o]));r.material=a}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];r.animations.push(i(e.animations,o))}}if(t){const a=s(e.geometries),o=s(e.materials),l=s(e.textures),c=s(e.images),u=s(e.shapes),d=s(e.skeletons),h=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new P(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const EA=new P,$A=new P,sl=new P,JA=new P,xr=new P,Cr=new P,Od=new P,al=new P,ol=new P,ll=new P;let ws=!1;class pA{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),EA.subVectors(e,t),r.cross(EA);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){EA.subVectors(r,t),$A.subVectors(n,t),sl.subVectors(e,t);const s=EA.dot(EA),a=EA.dot($A),o=EA.dot(sl),l=$A.dot($A),c=$A.dot(sl),u=s*l-a*a;if(u===0)return i.set(-2,-1,-1);const d=1/u,h=(l*o-a*c)*d,g=(s*c-a*o)*d;return i.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,JA),JA.x>=0&&JA.y>=0&&JA.x+JA.y<=1}static getUV(e,t,n,r,i,s,a,o){return ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ws=!0),this.getInterpolation(e,t,n,r,i,s,a,o)}static getInterpolation(e,t,n,r,i,s,a,o){return this.getBarycoord(e,t,n,r,JA),o.setScalar(0),o.addScaledVector(i,JA.x),o.addScaledVector(s,JA.y),o.addScaledVector(a,JA.z),o}static isFrontFacing(e,t,n,r){return EA.subVectors(n,t),$A.subVectors(e,t),EA.cross($A).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return EA.subVectors(this.c,this.b),$A.subVectors(this.a,this.b),EA.cross($A).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pA.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pA.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,i){return ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ws=!0),pA.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}getInterpolation(e,t,n,r,i){return pA.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}containsPoint(e){return pA.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pA.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,i=this.c;let s,a;xr.subVectors(r,n),Cr.subVectors(i,n),al.subVectors(e,n);const o=xr.dot(al),l=Cr.dot(al);if(o<=0&&l<=0)return t.copy(n);ol.subVectors(e,r);const c=xr.dot(ol),u=Cr.dot(ol);if(c>=0&&u<=c)return t.copy(r);const d=o*u-c*l;if(d<=0&&o>=0&&c<=0)return s=o/(o-c),t.copy(n).addScaledVector(xr,s);ll.subVectors(e,i);const h=xr.dot(ll),g=Cr.dot(ll);if(g>=0&&h<=g)return t.copy(i);const m=h*l-o*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Cr,a);const p=c*g-h*u;if(p<=0&&u-c>=0&&h-g>=0)return Od.subVectors(i,r),a=(u-c)/(u-c+(h-g)),t.copy(r).addScaledVector(Od,a);const f=1/(p+m+d);return s=m*f,a=d*f,t.copy(n).addScaledVector(xr,s).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let tw=0;class fr extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Xr,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wp,this.blendDst=Xp,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const s=[];for(const a in i){const o=i[a];delete o.metadata,s.push(o)}return s}if(t){const i=r(e.textures),s=r(e.images);i.length>0&&(n.textures=i),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yA={h:0,s:0,l:0},xs={h:0,s:0,l:0};function cl(A,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?A+(e-A)*6*t:t<1/2?e:t<2/3?A+(e-A)*6*(2/3-t):A}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,CA.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=CA.workingColorSpace){return this.r=e,this.g=t,this.b=n,CA.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=CA.workingColorSpace){if(e=Pv(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=cl(s,i,e+1/3),this.g=cl(s,i,e),this.b=cl(s,i,e-1/3)}return CA.toWorkingColorSpace(this,r),this}setStyle(e,t=He){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){const n=lg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return CA.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Yt(Ht.r*255,0,255))*65536+Math.round(Yt(Ht.g*255,0,255))*256+Math.round(Yt(Ht.b*255,0,255))}getHexString(e=He){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=CA.workingColorSpace){CA.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,r=Ht.g,i=Ht.b,s=Math.max(n,r,i),a=Math.min(n,r,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case n:o=(r-i)/u+(r<i?6:0);break;case r:o=(i-n)/u+2;break;case i:o=(n-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=CA.workingColorSpace){return CA.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=He){CA.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,r=Ht.b;return e!==He?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(yA),yA.h+=e,yA.s+=t,yA.l+=n,this.setHSL(yA.h,yA.s,yA.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yA),e.getHSL(xs);const n=$o(yA.h,xs.h,t),r=$o(yA.s,xs.s,t),i=$o(yA.l,xs.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Xe;Xe.NAMES=lg;class cg extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new P,Cs=new je;class OA{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ud,this.updateRange={offset:0,count:-1},this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=tA(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=tA(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tA(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=tA(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tA(t,this.array),n=tA(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tA(t,this.array),n=tA(n,this.array),r=tA(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=tA(t,this.array),n=tA(n,this.array),r=tA(r,this.array),i=tA(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ud&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ug extends OA{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dg extends OA{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class GA extends OA{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Aw=0;const dA=new gt,ul=new Wt,_r=new P,nA=new ss,Ci=new ss,bt=new P;class dn extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ng(e)?dg:ug)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Ne().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dA.makeRotationFromQuaternion(e),this.applyMatrix4(dA),this}rotateX(e){return dA.makeRotationX(e),this.applyMatrix4(dA),this}rotateY(e){return dA.makeRotationY(e),this.applyMatrix4(dA),this}rotateZ(e){return dA.makeRotationZ(e),this.applyMatrix4(dA),this}translate(e,t,n){return dA.makeTranslation(e,t,n),this.applyMatrix4(dA),this}scale(e,t,n){return dA.makeScale(e,t,n),this.applyMatrix4(dA),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new GA(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const i=t[n];nA.setFromBufferAttribute(i),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,nA.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,nA.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(nA.min),this.boundingBox.expandByPoint(nA.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(nA.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(nA.min,Ci.min),nA.expandByPoint(bt),bt.addVectors(nA.max,Ci.max),nA.expandByPoint(bt)):(nA.expandByPoint(Ci.min),nA.expandByPoint(Ci.max))}nA.getCenter(n);let r=0;for(let i=0,s=e.count;i<s;i++)bt.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let i=0,s=t.length;i<s;i++){const a=t[i],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)bt.fromBufferAttribute(a,l),o&&(_r.fromBufferAttribute(e,l),bt.add(_r)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,i=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new OA(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],c=[];for(let y=0;y<a;y++)l[y]=new P,c[y]=new P;const u=new P,d=new P,h=new P,g=new je,m=new je,p=new je,f=new P,v=new P;function B(y,I,L){u.fromArray(r,y*3),d.fromArray(r,I*3),h.fromArray(r,L*3),g.fromArray(s,y*2),m.fromArray(s,I*2),p.fromArray(s,L*2),d.sub(u),h.sub(u),m.sub(g),p.sub(g);const U=1/(m.x*p.y-p.x*m.y);isFinite(U)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(h,-m.y).multiplyScalar(U),v.copy(h).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(U),l[y].add(f),l[I].add(f),l[L].add(f),c[y].add(v),c[I].add(v),c[L].add(v))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let y=0,I=C.length;y<I;++y){const L=C[y],U=L.start,Q=L.count;for(let D=U,z=U+Q;D<z;D+=3)B(n[D+0],n[D+1],n[D+2])}const x=new P,_=new P,E=new P,T=new P;function w(y){E.fromArray(i,y*3),T.copy(E);const I=l[y];x.copy(I),x.sub(E.multiplyScalar(E.dot(I))).normalize(),_.crossVectors(T,I);const U=_.dot(c[y])<0?-1:1;o[y*4]=x.x,o[y*4+1]=x.y,o[y*4+2]=x.z,o[y*4+3]=U}for(let y=0,I=C.length;y<I;++y){const L=C[y],U=L.start,Q=L.count;for(let D=U,z=U+Q;D<z;D+=3)w(n[D+0]),w(n[D+1]),w(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new OA(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new P,i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),c.subVectors(s,i),u.subVectors(r,i),c.cross(u),a.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),a.add(c),o.add(c),l.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),i.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),c.subVectors(s,i),u.subVectors(r,i),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,o){const l=a.array,c=a.itemSize,u=a.normalized,d=new l.constructor(o.length*c);let h=0,g=0;for(let m=0,p=o.length;m<p;m++){a.isInterleavedBufferAttribute?h=o[m]*a.data.stride+a.offset:h=o[m]*c;for(let f=0;f<c;f++)d[g++]=l[h++]}return new OA(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,r=this.attributes;for(const a in r){const o=r[a],l=e(o,n);t.setAttribute(a,l)}const i=this.morphAttributes;for(const a in i){const o=[],l=i[a];for(let c=0,u=l.length;c<u;c++){const d=l[c],h=e(d,n);o.push(h)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const o in n){const l=n[o];e.data.attributes[o]=l.toJSON(e.data)}const r={};let i=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let u=0,d=l.length;u<d;u++){const h=l[u];c.push(h.toJSON(e.data))}c.length>0&&(r[o]=c,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const c=r[l];this.setAttribute(l,c.clone(t))}const i=e.morphAttributes;for(const l in i){const c=[],u=i[l];for(let d=0,h=u.length;d<h;d++)c.push(u[d].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gd=new gt,On=new ag,_s=new uo,Vd=new P,Er=new P,yr=new P,Sr=new P,dl=new P,Es=new P,ys=new je,Ss=new je,bs=new je,kd=new P,zd=new P,Kd=new P,Us=new P,Ms=new P;class NA extends Wt{constructor(e=new dn,t=new cg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){const a=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(i&&a){Es.set(0,0,0);for(let o=0,l=i.length;o<l;o++){const c=a[o],u=i[o];c!==0&&(dl.fromBufferAttribute(u,e),s?Es.addScaledVector(dl,c):Es.addScaledVector(dl.sub(t),c))}t.add(Es)}return t}raycast(e,t){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),On.copy(e.ray).recast(e.near),!(_s.containsPoint(On.origin)===!1&&(On.intersectSphere(_s,Vd)===null||On.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(Gd.copy(i).invert(),On.copy(e.ray).applyMatrix4(Gd),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let r;const i=this.geometry,s=this.material,a=i.index,o=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,d=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=d.length;g<m;g++){const p=d[g],f=s[p.materialIndex],v=Math.max(p.start,h.start),B=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let C=v,x=B;C<x;C+=3){const _=a.getX(C),E=a.getX(C+1),T=a.getX(C+2);r=Fs(this,f,e,n,l,c,u,_,E,T),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),m=Math.min(a.count,h.start+h.count);for(let p=g,f=m;p<f;p+=3){const v=a.getX(p),B=a.getX(p+1),C=a.getX(p+2);r=Fs(this,s,e,n,l,c,u,v,B,C),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,m=d.length;g<m;g++){const p=d[g],f=s[p.materialIndex],v=Math.max(p.start,h.start),B=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let C=v,x=B;C<x;C+=3){const _=C,E=C+1,T=C+2;r=Fs(this,f,e,n,l,c,u,_,E,T),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),m=Math.min(o.count,h.start+h.count);for(let p=g,f=m;p<f;p+=3){const v=p,B=p+1,C=p+2;r=Fs(this,s,e,n,l,c,u,v,B,C),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function nw(A,e,t,n,r,i,s,a){let o;if(e.side===qt?o=n.intersectTriangle(s,i,r,!0,a):o=n.intersectTriangle(r,i,s,e.side===Qn,a),o===null)return null;Ms.copy(a),Ms.applyMatrix4(A.matrixWorld);const l=t.ray.origin.distanceTo(Ms);return l<t.near||l>t.far?null:{distance:l,point:Ms.clone(),object:A}}function Fs(A,e,t,n,r,i,s,a,o,l){A.getVertexPosition(a,Er),A.getVertexPosition(o,yr),A.getVertexPosition(l,Sr);const c=nw(A,e,t,n,Er,yr,Sr,Us);if(c){r&&(ys.fromBufferAttribute(r,a),Ss.fromBufferAttribute(r,o),bs.fromBufferAttribute(r,l),c.uv=pA.getInterpolation(Us,Er,yr,Sr,ys,Ss,bs,new je)),i&&(ys.fromBufferAttribute(i,a),Ss.fromBufferAttribute(i,o),bs.fromBufferAttribute(i,l),c.uv1=pA.getInterpolation(Us,Er,yr,Sr,ys,Ss,bs,new je),c.uv2=c.uv1),s&&(kd.fromBufferAttribute(s,a),zd.fromBufferAttribute(s,o),Kd.fromBufferAttribute(s,l),c.normal=pA.getInterpolation(Us,Er,yr,Sr,kd,zd,Kd,new P),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:o,c:l,normal:new P,materialIndex:0};pA.getNormal(Er,yr,Sr,u.normal),c.face=u}return c}class cr extends dn{constructor(e=1,t=1,n=1,r=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:s};const a=this;r=Math.floor(r),i=Math.floor(i),s=Math.floor(s);const o=[],l=[],c=[],u=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,s,i,0),g("z","y","x",1,-1,n,t,-e,s,i,1),g("x","z","y",1,1,e,n,t,r,s,2),g("x","z","y",1,-1,e,n,-t,r,s,3),g("x","y","z",1,-1,e,t,n,r,i,4),g("x","y","z",-1,-1,e,t,-n,r,i,5),this.setIndex(o),this.setAttribute("position",new GA(l,3)),this.setAttribute("normal",new GA(c,3)),this.setAttribute("uv",new GA(u,2));function g(m,p,f,v,B,C,x,_,E,T,w){const y=C/E,I=x/T,L=C/2,U=x/2,Q=_/2,D=E+1,z=T+1;let N=0,W=0;const V=new P;for(let X=0;X<z;X++){const re=X*I-U;for(let G=0;G<D;G++){const Z=G*y-L;V[m]=Z*v,V[p]=re*B,V[f]=Q,l.push(V.x,V.y,V.z),V[m]=0,V[p]=0,V[f]=_>0?1:-1,c.push(V.x,V.y,V.z),u.push(G/E),u.push(1-X/T),N+=1}}for(let X=0;X<T;X++)for(let re=0;re<E;re++){const G=d+re+D*X,Z=d+re+D*(X+1),ee=d+(re+1)+D*(X+1),ne=d+(re+1)+D*X;o.push(G,Z,ne),o.push(Z,ee,ne),W+=6}a.addGroup(h,W,w),h+=W,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ei(A){const e={};for(const t in A){e[t]={};for(const n in A[t]){const r=A[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kt(A){const e={};for(let t=0;t<A.length;t++){const n=ei(A[t]);for(const r in n)e[r]=n[r]}return e}function rw(A){const e=[];for(let t=0;t<A.length;t++)e.push(A[t].clone());return e}function fg(A){return A.getRenderTarget()===null?A.outputColorSpace:VA}const iw={clone:ei,merge:kt};var sw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sw,this.fragmentShader=aw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.uniformsGroups=rw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hg extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class lA extends hg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mc*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;i+=s.offsetX*r/o,t-=s.offsetY*n/l,r*=s.width/o,n*=s.height/l}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const br=-90,Ur=1;class ow extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new lA(br,Ur,e,t);r.layers=this.layers,this.add(r);const i=new lA(br,Ur,e,t);i.layers=this.layers,this.add(i);const s=new lA(br,Ur,e,t);s.layers=this.layers,this.add(s);const a=new lA(br,Ur,e,t);a.layers=this.layers,this.add(a);const o=new lA(br,Ur,e,t);o.layers=this.layers,this.add(o);const l=new lA(br,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,i,s,a,o]=t;for(const l of t)this.remove(l);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,i,s,a,o,l]=this.children,c=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=ln,e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,o),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(c),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class pg extends cA{constructor(e,t,n,r,i,s,a,o,l,c){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,n,r,i,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lw extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Oi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===er?He:tr),this.texture=new pg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hA}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cr(5,5,5),i=new ur({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Mn});i.uniforms.tEquirect.value=t;const s=new NA(r,i),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=hA),new ow(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(i)}}const fl=new P,cw=new P,uw=new Ne;class zn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=fl.subVectors(n,t).cross(cw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uw.getNormalMatrix(e),r=this.coplanarPoint(fl).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new uo,Ts=new P;class fu{constructor(e=new zn,t=new zn,n=new zn,r=new zn,i=new zn,s=new zn){this.planes=[e,t,n,r,i,s]}set(e,t,n,r,i,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(i),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,r=e.elements,i=r[0],s=r[1],a=r[2],o=r[3],l=r[4],c=r[5],u=r[6],d=r[7],h=r[8],g=r[9],m=r[10],p=r[11],f=r[12],v=r[13],B=r[14],C=r[15];if(n[0].setComponents(o-i,d-l,p-h,C-f).normalize(),n[1].setComponents(o+i,d+l,p+h,C+f).normalize(),n[2].setComponents(o+s,d+c,p+g,C+v).normalize(),n[3].setComponents(o-s,d-c,p-g,C-v).normalize(),n[4].setComponents(o-a,d-u,p-m,C-B).normalize(),t===an)n[5].setComponents(o+a,d+u,p+m,C+B).normalize();else if(t===Da)n[5].setComponents(a,u,m,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ts.x=r.normal.x>0?e.max.x:e.min.x,Ts.y=r.normal.y>0?e.max.y:e.min.y,Ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gg(){let A=null,e=!1,t=null,n=null;function r(i,s){t(i,s),n=A.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=A.requestAnimationFrame(r),e=!0)},stop:function(){A.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){A=i}}}function dw(A,e){const t=e.isWebGL2,n=new WeakMap;function r(l,c){const u=l.array,d=l.usage,h=A.createBuffer();A.bindBuffer(c,h),A.bufferData(c,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=A.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=A.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=A.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=A.SHORT;else if(u instanceof Uint32Array)g=A.UNSIGNED_INT;else if(u instanceof Int32Array)g=A.INT;else if(u instanceof Int8Array)g=A.BYTE;else if(u instanceof Uint8Array)g=A.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=A.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function i(l,c,u){const d=c.array,h=c.updateRange;A.bindBuffer(u,l),h.count===-1?A.bufferSubData(u,0,d):(t?A.bufferSubData(u,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):A.bufferSubData(u,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(A.deleteBuffer(c.buffer),n.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,r(l,c)):u.version<l.version&&(i(u.buffer,l,c),u.version=l.version)}return{get:s,remove:a,update:o}}class hu extends dn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const i=e/2,s=t/2,a=Math.floor(n),o=Math.floor(r),l=a+1,c=o+1,u=e/a,d=t/o,h=[],g=[],m=[],p=[];for(let f=0;f<c;f++){const v=f*d-s;for(let B=0;B<l;B++){const C=B*u-i;g.push(C,-v,0),m.push(0,0,1),p.push(B/a),p.push(1-f/o)}}for(let f=0;f<o;f++)for(let v=0;v<a;v++){const B=v+l*f,C=v+l*(f+1),x=v+1+l*(f+1),_=v+1+l*f;h.push(B,C,_),h.push(C,x,_)}this.setIndex(h),this.setAttribute("position",new GA(g,3)),this.setAttribute("normal",new GA(m,3)),this.setAttribute("uv",new GA(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}var fw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vw="vec3 transformed = vec3( position );",ww=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_w=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Iw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ow=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$w=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ax=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,ox=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gx=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rC=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iC=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sC=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hC=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CC=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_C=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PC=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,OC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:fw,alphamap_pars_fragment:hw,alphatest_fragment:pw,alphatest_pars_fragment:gw,aomap_fragment:mw,aomap_pars_fragment:Bw,begin_vertex:vw,beginnormal_vertex:ww,bsdfs:xw,iridescence_fragment:Cw,bumpmap_pars_fragment:_w,clipping_planes_fragment:Ew,clipping_planes_pars_fragment:yw,clipping_planes_pars_vertex:Sw,clipping_planes_vertex:bw,color_fragment:Uw,color_pars_fragment:Mw,color_pars_vertex:Fw,color_vertex:Tw,common:Iw,cube_uv_reflection_fragment:Qw,defaultnormal_vertex:Lw,displacementmap_pars_vertex:Rw,displacementmap_vertex:Dw,emissivemap_fragment:Hw,emissivemap_pars_fragment:Pw,encodings_fragment:Nw,encodings_pars_fragment:Ow,envmap_fragment:Gw,envmap_common_pars_fragment:Vw,envmap_pars_fragment:kw,envmap_pars_vertex:zw,envmap_physical_pars_fragment:Ax,envmap_vertex:Kw,fog_vertex:Ww,fog_pars_vertex:Xw,fog_fragment:jw,fog_pars_fragment:Yw,gradientmap_pars_fragment:$w,lightmap_fragment:Jw,lightmap_pars_fragment:qw,lights_lambert_fragment:Zw,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:nx,lights_toon_pars_fragment:rx,lights_phong_fragment:ix,lights_phong_pars_fragment:sx,lights_physical_fragment:ax,lights_physical_pars_fragment:ox,lights_fragment_begin:lx,lights_fragment_maps:cx,lights_fragment_end:ux,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:fx,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:px,map_fragment:gx,map_pars_fragment:mx,map_particle_fragment:Bx,map_particle_pars_fragment:vx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:xx,morphcolor_vertex:Cx,morphnormal_vertex:_x,morphtarget_pars_vertex:Ex,morphtarget_vertex:yx,normal_fragment_begin:Sx,normal_fragment_maps:bx,normal_pars_fragment:Ux,normal_pars_vertex:Mx,normal_vertex:Fx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Rx,output_fragment:Dx,packing:Hx,premultiplied_alpha_fragment:Px,project_vertex:Nx,dithering_fragment:Ox,dithering_pars_fragment:Gx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:zx,shadowmap_pars_vertex:Kx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:jx,skinning_pars_vertex:Yx,skinning_vertex:$x,skinnormal_vertex:Jx,specularmap_fragment:qx,specularmap_pars_fragment:Zx,tonemapping_fragment:eC,tonemapping_pars_fragment:tC,transmission_fragment:AC,transmission_pars_fragment:nC,uv_pars_fragment:rC,uv_pars_vertex:iC,uv_vertex:sC,worldpos_vertex:aC,background_vert:oC,background_frag:lC,backgroundCube_vert:cC,backgroundCube_frag:uC,cube_vert:dC,cube_frag:fC,depth_vert:hC,depth_frag:pC,distanceRGBA_vert:gC,distanceRGBA_frag:mC,equirect_vert:BC,equirect_frag:vC,linedashed_vert:wC,linedashed_frag:xC,meshbasic_vert:CC,meshbasic_frag:_C,meshlambert_vert:EC,meshlambert_frag:yC,meshmatcap_vert:SC,meshmatcap_frag:bC,meshnormal_vert:UC,meshnormal_frag:MC,meshphong_vert:FC,meshphong_frag:TC,meshphysical_vert:IC,meshphysical_frag:QC,meshtoon_vert:LC,meshtoon_frag:RC,points_vert:DC,points_frag:HC,shadow_vert:PC,shadow_frag:NC,sprite_vert:OC,sprite_frag:GC},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},DA={basic:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:kt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:kt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:kt([ae.points,ae.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:kt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:kt([ae.common,ae.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:kt([ae.sprite,ae.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:kt([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:kt([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};DA.physical={uniforms:kt([DA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Is={r:0,b:0,g:0};function VC(A,e,t,n,r,i,s){const a=new Xe(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function g(p,f){let v=!1,B=f.isScene===!0?f.background:null;switch(B&&B.isTexture&&(B=(f.backgroundBlurriness>0?t:e).get(B)),B===null?m(a,o):B&&B.isColor&&(m(B,1),v=!0),A.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,s),v=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,s),v=!0;break}(A.autoClear||v)&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),B&&(B.isCubeTexture||B.mapping===co)?(c===void 0&&(c=new NA(new cr(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:ei(DA.backgroundCube.uniforms),vertexShader:DA.backgroundCube.vertexShader,fragmentShader:DA.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=B,c.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=B.colorSpace!==He,(u!==B||d!==B.version||h!==A.toneMapping)&&(c.material.needsUpdate=!0,u=B,d=B.version,h=A.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):B&&B.isTexture&&(l===void 0&&(l=new NA(new hu(2,2),new ur({name:"BackgroundMaterial",uniforms:ei(DA.background.uniforms),vertexShader:DA.background.vertexShader,fragmentShader:DA.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=B,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=B.colorSpace!==He,B.matrixAutoUpdate===!0&&B.updateMatrix(),l.material.uniforms.uvTransform.value.copy(B.matrix),(u!==B||d!==B.version||h!==A.toneMapping)&&(l.material.needsUpdate=!0,u=B,d=B.version,h=A.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,f){p.getRGB(Is,fg(A)),n.buffers.color.setClear(Is.r,Is.g,Is.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),o=f,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,m(a,o)},render:g}}function kC(A,e,t,n){const r=A.getParameter(A.MAX_VERTEX_ATTRIBS),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||i!==null,a={},o=p(null);let l=o,c=!1;function u(Q,D,z,N,W){let V=!1;if(s){const X=m(N,z,D);l!==X&&(l=X,h(l.object)),V=f(Q,N,z,W),V&&v(Q,N,z,W)}else{const X=D.wireframe===!0;(l.geometry!==N.id||l.program!==z.id||l.wireframe!==X)&&(l.geometry=N.id,l.program=z.id,l.wireframe=X,V=!0)}W!==null&&t.update(W,A.ELEMENT_ARRAY_BUFFER),(V||c)&&(c=!1,T(Q,D,z,N),W!==null&&A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?A.createVertexArray():i.createVertexArrayOES()}function h(Q){return n.isWebGL2?A.bindVertexArray(Q):i.bindVertexArrayOES(Q)}function g(Q){return n.isWebGL2?A.deleteVertexArray(Q):i.deleteVertexArrayOES(Q)}function m(Q,D,z){const N=z.wireframe===!0;let W=a[Q.id];W===void 0&&(W={},a[Q.id]=W);let V=W[D.id];V===void 0&&(V={},W[D.id]=V);let X=V[N];return X===void 0&&(X=p(d()),V[N]=X),X}function p(Q){const D=[],z=[],N=[];for(let W=0;W<r;W++)D[W]=0,z[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:N,object:Q,attributes:{},index:null}}function f(Q,D,z,N){const W=l.attributes,V=D.attributes;let X=0;const re=z.getAttributes();for(const G in re)if(re[G].location>=0){const ee=W[G];let ne=V[G];if(ne===void 0&&(G==="instanceMatrix"&&Q.instanceMatrix&&(ne=Q.instanceMatrix),G==="instanceColor"&&Q.instanceColor&&(ne=Q.instanceColor)),ee===void 0||ee.attribute!==ne||ne&&ee.data!==ne.data)return!0;X++}return l.attributesNum!==X||l.index!==N}function v(Q,D,z,N){const W={},V=D.attributes;let X=0;const re=z.getAttributes();for(const G in re)if(re[G].location>=0){let ee=V[G];ee===void 0&&(G==="instanceMatrix"&&Q.instanceMatrix&&(ee=Q.instanceMatrix),G==="instanceColor"&&Q.instanceColor&&(ee=Q.instanceColor));const ne={};ne.attribute=ee,ee&&ee.data&&(ne.data=ee.data),W[G]=ne,X++}l.attributes=W,l.attributesNum=X,l.index=N}function B(){const Q=l.newAttributes;for(let D=0,z=Q.length;D<z;D++)Q[D]=0}function C(Q){x(Q,0)}function x(Q,D){const z=l.newAttributes,N=l.enabledAttributes,W=l.attributeDivisors;z[Q]=1,N[Q]===0&&(A.enableVertexAttribArray(Q),N[Q]=1),W[Q]!==D&&((n.isWebGL2?A:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Q,D),W[Q]=D)}function _(){const Q=l.newAttributes,D=l.enabledAttributes;for(let z=0,N=D.length;z<N;z++)D[z]!==Q[z]&&(A.disableVertexAttribArray(z),D[z]=0)}function E(Q,D,z,N,W,V,X){X===!0?A.vertexAttribIPointer(Q,D,z,W,V):A.vertexAttribPointer(Q,D,z,N,W,V)}function T(Q,D,z,N){if(n.isWebGL2===!1&&(Q.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;B();const W=N.attributes,V=z.getAttributes(),X=D.defaultAttributeValues;for(const re in V){const G=V[re];if(G.location>=0){let Z=W[re];if(Z===void 0&&(re==="instanceMatrix"&&Q.instanceMatrix&&(Z=Q.instanceMatrix),re==="instanceColor"&&Q.instanceColor&&(Z=Q.instanceColor)),Z!==void 0){const ee=Z.normalized,ne=Z.itemSize,ie=t.get(Z);if(ie===void 0)continue;const he=ie.buffer,Ee=ie.type,me=ie.bytesPerElement,tt=n.isWebGL2===!0&&(Ee===A.INT||Ee===A.UNSIGNED_INT||Z.gpuType===Yp);if(Z.isInterleavedBufferAttribute){const Ue=Z.data,H=Ue.stride,Tt=Z.offset;if(Ue.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)x(G.location+Se,Ue.meshPerAttribute);Q.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Se=0;Se<G.locationSize;Se++)C(G.location+Se);A.bindBuffer(A.ARRAY_BUFFER,he);for(let Se=0;Se<G.locationSize;Se++)E(G.location+Se,ne/G.locationSize,Ee,ee,H*me,(Tt+ne/G.locationSize*Se)*me,tt)}else{if(Z.isInstancedBufferAttribute){for(let Ue=0;Ue<G.locationSize;Ue++)x(G.location+Ue,Z.meshPerAttribute);Q.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)C(G.location+Ue);A.bindBuffer(A.ARRAY_BUFFER,he);for(let Ue=0;Ue<G.locationSize;Ue++)E(G.location+Ue,ne/G.locationSize,Ee,ee,ne*me,ne/G.locationSize*Ue*me,tt)}}else if(X!==void 0){const ee=X[re];if(ee!==void 0)switch(ee.length){case 2:A.vertexAttrib2fv(G.location,ee);break;case 3:A.vertexAttrib3fv(G.location,ee);break;case 4:A.vertexAttrib4fv(G.location,ee);break;default:A.vertexAttrib1fv(G.location,ee)}}}}_()}function w(){L();for(const Q in a){const D=a[Q];for(const z in D){const N=D[z];for(const W in N)g(N[W].object),delete N[W];delete D[z]}delete a[Q]}}function y(Q){if(a[Q.id]===void 0)return;const D=a[Q.id];for(const z in D){const N=D[z];for(const W in N)g(N[W].object),delete N[W];delete D[z]}delete a[Q.id]}function I(Q){for(const D in a){const z=a[D];if(z[Q.id]===void 0)continue;const N=z[Q.id];for(const W in N)g(N[W].object),delete N[W];delete z[Q.id]}}function L(){U(),c=!0,l!==o&&(l=o,h(l.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:L,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfProgram:I,initAttributes:B,enableAttribute:C,disableUnusedAttributes:_}}function zC(A,e,t,n){const r=n.isWebGL2;let i;function s(l){i=l}function a(l,c){A.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){if(u===0)return;let d,h;if(r)d=A,h="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](i,l,c,u),t.update(c,i,u)}this.setMode=s,this.render=a,this.renderInstances=o}function KC(A,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=A.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(E){if(E==="highp"){if(A.getShaderPrecisionFormat(A.VERTEX_SHADER,A.HIGH_FLOAT).precision>0&&A.getShaderPrecisionFormat(A.FRAGMENT_SHADER,A.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&A.getShaderPrecisionFormat(A.VERTEX_SHADER,A.MEDIUM_FLOAT).precision>0&&A.getShaderPrecisionFormat(A.FRAGMENT_SHADER,A.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&A.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,u=A.getParameter(A.MAX_TEXTURE_IMAGE_UNITS),d=A.getParameter(A.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=A.getParameter(A.MAX_TEXTURE_SIZE),g=A.getParameter(A.MAX_CUBE_MAP_TEXTURE_SIZE),m=A.getParameter(A.MAX_VERTEX_ATTRIBS),p=A.getParameter(A.MAX_VERTEX_UNIFORM_VECTORS),f=A.getParameter(A.MAX_VARYING_VECTORS),v=A.getParameter(A.MAX_FRAGMENT_UNIFORM_VECTORS),B=d>0,C=s||e.has("OES_texture_float"),x=B&&C,_=s?A.getParameter(A.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:B,floatFragmentTextures:C,floatVertexTextures:x,maxSamples:_}}function WC(A){const e=this;let t=null,n=0,r=!1,i=!1;const s=new zn,a=new Ne,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const h=u.length!==0||d||n!==0||r;return r=d,n=u.length,h},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,h){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,f=A.get(u);if(!r||g===null||g.length===0||i&&!p)i?c(null):l();else{const v=i?0:n,B=v*4;let C=f.clippingState||null;o.value=C,C=c(g,d,B,h);for(let x=0;x!==B;++x)C[x]=t[x];f.clippingState=C,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(u,d,h,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=o.value,g!==!0||p===null){const f=h+m*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let B=0,C=h;B!==m;++B,C+=4)s.copy(u[B]).applyMatrix4(v,a),s.normal.toArray(p,C),p[C+3]=s.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function XC(A){let e=new WeakMap;function t(s,a){return a===dc?s.mapping=Jr:a===fc&&(s.mapping=qr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===dc||a===fc)if(e.has(s)){const o=e.get(s).texture;return t(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new lw(o.height/2);return l.fromEquirectangularTexture(A,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class jC extends hg{constructor(e=-1,t=1,n=1,r=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-e,s=n+e,a=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,s=i+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(i,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vr=4,Wd=[.125,.215,.35,.446,.526,.582],Xn=20,hl=new jC,Xd=new Xe;let pl=null;const Kn=(1+Math.sqrt(5))/2,Mr=1/Kn,jd=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Kn,Mr),new P(0,Kn,-Mr),new P(Mr,0,Kn),new P(-Mr,0,Kn),new P(Kn,Mr,0),new P(-Kn,Mr,0)];class Yd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){pl=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pl),e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hA,minFilter:hA,generateMipmaps:!1,type:Ji,format:MA,colorSpace:VA,depthBuffer:!1},r=$d(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$d(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YC(i)),this._blurMaterial=$C(i,e,t)}return r}_compileMaterial(e){const t=new NA(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,n,r){const a=new lA(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Xd),c.toneMapping=ln,c.autoClear=!1;const h=new cg({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new NA(new cr,h);let m=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,m=!0):(h.color.copy(Xd),m=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,o[f],0),a.lookAt(l[f],0,0)):v===1?(a.up.set(0,0,o[f]),a.lookAt(0,l[f],0)):(a.up.set(0,o[f],0),a.lookAt(0,0,l[f]));const B=this._cubeSize;Qs(r,v*B,f>2?B:0,B,B),c.setRenderTarget(r),m&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Jr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());const i=r?this._cubemapMaterial:this._equirectMaterial,s=new NA(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const o=this._cubeSize;Qs(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,hl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=jd[(r-1)%jd.length];this._blur(e,r-1,r,i,s)}t.autoClear=n}_blur(e,t,n,r,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",i),this._halfBlur(s,e,n,n,r,"longitudinal",i)}_halfBlur(e,t,n,r,i,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new NA(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(i)?Math.PI/(2*h):2*Math.PI/(2*Xn-1),m=i/g,p=isFinite(i)?1+Math.floor(c*m):Xn;p>Xn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const f=[];let v=0;for(let E=0;E<Xn;++E){const T=E/m,w=Math.exp(-T*T/2);f.push(w),E===0?v+=w:E<p&&(v+=2*w)}for(let E=0;E<f.length;E++)f[E]=f[E]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:B}=this;d.dTheta.value=g,d.mipInt.value=B-n;const C=this._sizeLods[r],x=3*C*(r>B-Vr?r-B+Vr:0),_=4*(this._cubeSize-C);Qs(t,x,_,3*C,2*C),o.setRenderTarget(t),o.render(u,hl)}}function YC(A){const e=[],t=[],n=[];let r=A;const i=A-Vr+1+Wd.length;for(let s=0;s<i;s++){const a=Math.pow(2,r);t.push(a);let o=1/a;s>A-Vr?o=Wd[s-A+Vr-1]:s===0&&(o=0),n.push(o);const l=1/(a-2),c=-l,u=1+l,d=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,g=6,m=3,p=2,f=1,v=new Float32Array(m*g*h),B=new Float32Array(p*g*h),C=new Float32Array(f*g*h);for(let _=0;_<h;_++){const E=_%3*2/3-1,T=_>2?0:-1,w=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];v.set(w,m*g*_),B.set(d,p*g*_);const y=[_,_,_,_,_,_];C.set(y,f*g*_)}const x=new dn;x.setAttribute("position",new OA(v,m)),x.setAttribute("uv",new OA(B,p)),x.setAttribute("faceIndex",new OA(C,f)),e.push(x),r>Vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $d(A,e,t){const n=new lr(A,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(A,e,t,n,r){A.viewport.set(e,t,n,r),A.scissor.set(e,t,n,r)}function $C(A,e,t){const n=new Float32Array(Xn),r=new P(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${A}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Jd(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function qd(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JC(A){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const o=a.mapping,l=o===dc||o===fc,c=o===Jr||o===qr;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Yd(A)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||c&&u&&r(u)){t===null&&(t=new Yd(A));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",i),d.texture}else return null}}}return a}function r(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function qC(A){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=A.getExtension("WEBGL_depth_texture")||A.getExtension("MOZ_WEBGL_depth_texture")||A.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=A.getExtension("EXT_texture_filter_anisotropic")||A.getExtension("MOZ_EXT_texture_filter_anisotropic")||A.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=A.getExtension("WEBGL_compressed_texture_s3tc")||A.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=A.getExtension("WEBGL_compressed_texture_pvrtc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=A.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ZC(A,e,t,n){const r={},i=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const m=d.morphAttributes[g];for(let p=0,f=m.length;p<f;p++)e.remove(m[p])}d.removeEventListener("dispose",s),delete r[d.id];const h=i.get(d);h&&(e.remove(h),i.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function o(u){const d=u.attributes;for(const g in d)e.update(d[g],A.ARRAY_BUFFER);const h=u.morphAttributes;for(const g in h){const m=h[g];for(let p=0,f=m.length;p<f;p++)e.update(m[p],A.ARRAY_BUFFER)}}function l(u){const d=[],h=u.index,g=u.attributes.position;let m=0;if(h!==null){const v=h.array;m=h.version;for(let B=0,C=v.length;B<C;B+=3){const x=v[B+0],_=v[B+1],E=v[B+2];d.push(x,_,_,E,E,x)}}else{const v=g.array;m=g.version;for(let B=0,C=v.length/3-1;B<C;B+=3){const x=B+0,_=B+1,E=B+2;d.push(x,_,_,E,E,x)}}const p=new(ng(d)?dg:ug)(d,1);p.version=m;const f=i.get(u);f&&e.remove(f),i.set(u,p)}function c(u){const d=i.get(u);if(d){const h=u.index;h!==null&&d.version<h.version&&l(u)}else l(u);return i.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function e_(A,e,t,n){const r=n.isWebGL2;let i;function s(d){i=d}let a,o;function l(d){a=d.type,o=d.bytesPerElement}function c(d,h){A.drawElements(i,h,a,d*o),t.update(h,i,1)}function u(d,h,g){if(g===0)return;let m,p;if(r)m=A,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](i,h,a,d*o,g),t.update(h,i,g)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=u}function t_(A){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,s,a){switch(t.calls++,s){case A.TRIANGLES:t.triangles+=a*(i/3);break;case A.LINES:t.lines+=a*(i/2);break;case A.LINE_STRIP:t.lines+=a*(i-1);break;case A.LINE_LOOP:t.lines+=a*i;break;case A.POINTS:t.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function A_(A,e){return A[0]-e[0]}function n_(A,e){return Math.abs(e[1])-Math.abs(A[1])}function r_(A,e,t){const n={},r=new Float32Array(8),i=new WeakMap,s=new ct,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function o(l,c,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=h!==void 0?h.length:0;let m=i.get(c);if(m===void 0||m.count!==g){let Q=function(){L.dispose(),i.delete(c),c.removeEventListener("dispose",Q)};m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,B=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let T=0;v===!0&&(T=1),B===!0&&(T=2),C===!0&&(T=3);let w=c.attributes.position.count*T,y=1;w>e.maxTextureSize&&(y=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const I=new Float32Array(w*y*4*g),L=new sg(I,w,y,g);L.type=En,L.needsUpdate=!0;const U=T*4;for(let D=0;D<g;D++){const z=x[D],N=_[D],W=E[D],V=w*y*4*D;for(let X=0;X<z.count;X++){const re=X*U;v===!0&&(s.fromBufferAttribute(z,X),I[V+re+0]=s.x,I[V+re+1]=s.y,I[V+re+2]=s.z,I[V+re+3]=0),B===!0&&(s.fromBufferAttribute(N,X),I[V+re+4]=s.x,I[V+re+5]=s.y,I[V+re+6]=s.z,I[V+re+7]=0),C===!0&&(s.fromBufferAttribute(W,X),I[V+re+8]=s.x,I[V+re+9]=s.y,I[V+re+10]=s.z,I[V+re+11]=W.itemSize===4?s.w:1)}}m={count:g,texture:L,size:new je(w,y)},i.set(c,m),c.addEventListener("dispose",Q)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const f=c.morphTargetsRelative?1:1-p;u.getUniforms().setValue(A,"morphTargetBaseInfluence",f),u.getUniforms().setValue(A,"morphTargetInfluences",d),u.getUniforms().setValue(A,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(A,"morphTargetsTextureSize",m.size)}else{const h=d===void 0?0:d.length;let g=n[c.id];if(g===void 0||g.length!==h){g=[];for(let B=0;B<h;B++)g[B]=[B,0];n[c.id]=g}for(let B=0;B<h;B++){const C=g[B];C[0]=B,C[1]=d[B]}g.sort(n_);for(let B=0;B<8;B++)B<h&&g[B][1]?(a[B][0]=g[B][0],a[B][1]=g[B][1]):(a[B][0]=Number.MAX_SAFE_INTEGER,a[B][1]=0);a.sort(A_);const m=c.morphAttributes.position,p=c.morphAttributes.normal;let f=0;for(let B=0;B<8;B++){const C=a[B],x=C[0],_=C[1];x!==Number.MAX_SAFE_INTEGER&&_?(m&&c.getAttribute("morphTarget"+B)!==m[x]&&c.setAttribute("morphTarget"+B,m[x]),p&&c.getAttribute("morphNormal"+B)!==p[x]&&c.setAttribute("morphNormal"+B,p[x]),r[B]=_,f+=_):(m&&c.hasAttribute("morphTarget"+B)===!0&&c.deleteAttribute("morphTarget"+B),p&&c.hasAttribute("morphNormal"+B)===!0&&c.deleteAttribute("morphNormal"+B),r[B]=0)}const v=c.morphTargetsRelative?1:1-f;u.getUniforms().setValue(A,"morphTargetBaseInfluence",v),u.getUniforms().setValue(A,"morphTargetInfluences",r)}}return{update:o}}function i_(A,e,t,n){let r=new WeakMap;function i(o){const l=n.render.frame,c=o.geometry,u=e.get(o,c);return r.get(u)!==l&&(e.update(u),r.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),t.update(o.instanceMatrix,A.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,A.ARRAY_BUFFER)),u}function s(){r=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:i,dispose:s}}const mg=new cA,Bg=new sg,vg=new Xv,wg=new pg,Zd=[],ef=[],tf=new Float32Array(16),Af=new Float32Array(9),nf=new Float32Array(4);function fi(A,e,t){const n=A[0];if(n<=0||n>0)return A;const r=e*t;let i=Zd[r];if(i===void 0&&(i=new Float32Array(r),Zd[r]=i),e!==0){n.toArray(i,0);for(let s=1,a=0;s!==e;++s)a+=t,A[s].toArray(i,a)}return i}function Et(A,e){if(A.length!==e.length)return!1;for(let t=0,n=A.length;t<n;t++)if(A[t]!==e[t])return!1;return!0}function yt(A,e){for(let t=0,n=e.length;t<n;t++)A[t]=e[t]}function ho(A,e){let t=ef[e];t===void 0&&(t=new Int32Array(e),ef[e]=t);for(let n=0;n!==e;++n)t[n]=A.allocateTextureUnit();return t}function s_(A,e){const t=this.cache;t[0]!==e&&(A.uniform1f(this.addr,e),t[0]=e)}function a_(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;A.uniform2fv(this.addr,e),yt(t,e)}}function o_(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(A.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;A.uniform3fv(this.addr,e),yt(t,e)}}function l_(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;A.uniform4fv(this.addr,e),yt(t,e)}}function c_(A,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;A.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;nf.set(n),A.uniformMatrix2fv(this.addr,!1,nf),yt(t,n)}}function u_(A,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;A.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;Af.set(n),A.uniformMatrix3fv(this.addr,!1,Af),yt(t,n)}}function d_(A,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;A.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;tf.set(n),A.uniformMatrix4fv(this.addr,!1,tf),yt(t,n)}}function f_(A,e){const t=this.cache;t[0]!==e&&(A.uniform1i(this.addr,e),t[0]=e)}function h_(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;A.uniform2iv(this.addr,e),yt(t,e)}}function p_(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;A.uniform3iv(this.addr,e),yt(t,e)}}function g_(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;A.uniform4iv(this.addr,e),yt(t,e)}}function m_(A,e){const t=this.cache;t[0]!==e&&(A.uniform1ui(this.addr,e),t[0]=e)}function B_(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;A.uniform2uiv(this.addr,e),yt(t,e)}}function v_(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;A.uniform3uiv(this.addr,e),yt(t,e)}}function w_(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;A.uniform4uiv(this.addr,e),yt(t,e)}}function x_(A,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(A.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||mg,r)}function C_(A,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(A.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vg,r)}function __(A,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(A.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||wg,r)}function E_(A,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(A.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bg,r)}function y_(A){switch(A){case 5126:return s_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return h_;case 35668:case 35672:return p_;case 35669:case 35673:return g_;case 5125:return m_;case 36294:return B_;case 36295:return v_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return E_}}function S_(A,e){A.uniform1fv(this.addr,e)}function b_(A,e){const t=fi(e,this.size,2);A.uniform2fv(this.addr,t)}function U_(A,e){const t=fi(e,this.size,3);A.uniform3fv(this.addr,t)}function M_(A,e){const t=fi(e,this.size,4);A.uniform4fv(this.addr,t)}function F_(A,e){const t=fi(e,this.size,4);A.uniformMatrix2fv(this.addr,!1,t)}function T_(A,e){const t=fi(e,this.size,9);A.uniformMatrix3fv(this.addr,!1,t)}function I_(A,e){const t=fi(e,this.size,16);A.uniformMatrix4fv(this.addr,!1,t)}function Q_(A,e){A.uniform1iv(this.addr,e)}function L_(A,e){A.uniform2iv(this.addr,e)}function R_(A,e){A.uniform3iv(this.addr,e)}function D_(A,e){A.uniform4iv(this.addr,e)}function H_(A,e){A.uniform1uiv(this.addr,e)}function P_(A,e){A.uniform2uiv(this.addr,e)}function N_(A,e){A.uniform3uiv(this.addr,e)}function O_(A,e){A.uniform4uiv(this.addr,e)}function G_(A,e,t){const n=this.cache,r=e.length,i=ho(t,r);Et(n,i)||(A.uniform1iv(this.addr,i),yt(n,i));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||mg,i[s])}function V_(A,e,t){const n=this.cache,r=e.length,i=ho(t,r);Et(n,i)||(A.uniform1iv(this.addr,i),yt(n,i));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||vg,i[s])}function k_(A,e,t){const n=this.cache,r=e.length,i=ho(t,r);Et(n,i)||(A.uniform1iv(this.addr,i),yt(n,i));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||wg,i[s])}function z_(A,e,t){const n=this.cache,r=e.length,i=ho(t,r);Et(n,i)||(A.uniform1iv(this.addr,i),yt(n,i));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Bg,i[s])}function K_(A){switch(A){case 5126:return S_;case 35664:return b_;case 35665:return U_;case 35666:return M_;case 35674:return F_;case 35675:return T_;case 35676:return I_;case 5124:case 35670:return Q_;case 35667:case 35671:return L_;case 35668:case 35672:return R_;case 35669:case 35673:return D_;case 5125:return H_;case 36294:return P_;case 36295:return N_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return z_}}class W_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=y_(t.type)}}class X_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=K_(t.type)}}class j_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let i=0,s=r.length;i!==s;++i){const a=r[i];a.setValue(e,t[a.id],n)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function rf(A,e){A.seq.push(e),A.map[e.id]=e}function Y_(A,e,t){const n=A.name,r=n.length;for(gl.lastIndex=0;;){const i=gl.exec(n),s=gl.lastIndex;let a=i[1];const o=i[2]==="]",l=i[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===r){rf(t,l===void 0?new W_(a,A,e):new X_(a,A,e));break}else{let u=t.map[a];u===void 0&&(u=new j_(a),rf(t,u)),t=u}}}class ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=e.getActiveUniform(t,r),s=e.getUniformLocation(t,i.name);Y_(i,s,this)}}setValue(e,t,n,r){const i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,s=t.length;i!==s;++i){const a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,i=e.length;r!==i;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function sf(A,e,t){const n=A.createShader(e);return A.shaderSource(n,t),A.compileShader(n),n}let $_=0;function J_(A,e){const t=A.split(`
`),n=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=r;s<i;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function q_(A){switch(A){case VA:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",A),["Linear","( value )"]}}function af(A,e,t){const n=A.getShaderParameter(e,A.COMPILE_STATUS),r=A.getShaderInfoLog(e).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+J_(A.getShaderSource(e),s)}else return r}function Z_(A,e){const t=q_(e);return"vec4 "+A+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function eE(A,e){let t;switch(e){case uv:t="Linear";break;case dv:t="Reinhard";break;case fv:t="OptimizedCineon";break;case hv:t="ACESFilmic";break;case pv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+A+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tE(A){return[A.extensionDerivatives||A.envMapCubeUVHeight||A.bumpMap||A.normalMapTangentSpace||A.clearcoatNormalMap||A.flatShading||A.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(A.extensionFragDepth||A.logarithmicDepthBuffer)&&A.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",A.extensionDrawBuffers&&A.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(A.extensionShaderTextureLOD||A.envMap||A.transmission)&&A.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function AE(A){const e=[];for(const t in A){const n=A[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nE(A,e){const t={},n=A.getProgramParameter(e,A.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=A.getActiveAttrib(e,r),s=i.name;let a=1;i.type===A.FLOAT_MAT2&&(a=2),i.type===A.FLOAT_MAT3&&(a=3),i.type===A.FLOAT_MAT4&&(a=4),t[s]={type:i.type,location:A.getAttribLocation(e,s),locationSize:a}}return t}function Mi(A){return A!==""}function of(A,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return A.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(A,e){return A.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rE=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(A){return A.replace(rE,iE)}function iE(A,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return vc(t)}const sE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(A){return A.replace(sE,aE)}function aE(A,e,t,n){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function uf(A){let e="precision "+A.precision+` float;
precision `+A.precision+" int;";return A.precision==="highp"?e+=`
#define HIGH_PRECISION`:A.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:A.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oE(A){let e="SHADOWMAP_TYPE_BASIC";return A.shadowMapType===Kp?e="SHADOWMAP_TYPE_PCF":A.shadowMapType===kB?e="SHADOWMAP_TYPE_PCF_SOFT":A.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function lE(A){let e="ENVMAP_TYPE_CUBE";if(A.envMap)switch(A.envMapMode){case Jr:case qr:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cE(A){let e="ENVMAP_MODE_REFLECTION";if(A.envMap)switch(A.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function uE(A){let e="ENVMAP_BLENDING_NONE";if(A.envMap)switch(A.combine){case cu:e="ENVMAP_BLENDING_MULTIPLY";break;case lv:e="ENVMAP_BLENDING_MIX";break;case cv:e="ENVMAP_BLENDING_ADD";break}return e}function dE(A){const e=A.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fE(A,e,t,n){const r=A.getContext(),i=t.defines;let s=t.vertexShader,a=t.fragmentShader;const o=oE(t),l=lE(t),c=cE(t),u=uE(t),d=dE(t),h=t.isWebGL2?"":tE(t),g=AE(i),m=r.createProgram();let p,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mi).join(`
`),p.length>0&&(p+=`
`),f=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mi).join(`
`),f.length>0&&(f+=`
`)):(p=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),f=[h,uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Pe.tonemapping_pars_fragment:"",t.toneMapping!==ln?eE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,Z_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),s=vc(s),s=of(s,t),s=lf(s,t),a=vc(a),a=of(a,t),a=lf(a,t),s=cf(s),a=cf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const B=v+p+s,C=v+f+a,x=sf(r,r.VERTEX_SHADER,B),_=sf(r,r.FRAGMENT_SHADER,C);if(r.attachShader(m,x),r.attachShader(m,_),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),A.debug.checkShaderErrors){const w=r.getProgramInfoLog(m).trim(),y=r.getShaderInfoLog(x).trim(),I=r.getShaderInfoLog(_).trim();let L=!0,U=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(L=!1,typeof A.debug.onShaderError=="function")A.debug.onShaderError(r,m,x,_);else{const Q=af(r,x,"vertex"),D=af(r,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+Q+`
`+D)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(y===""||I==="")&&(U=!1);U&&(this.diagnostics={runnable:L,programLog:w,vertexShader:{log:y,prefix:p},fragmentShader:{log:I,prefix:f}})}r.deleteShader(x),r.deleteShader(_);let E;this.getUniforms=function(){return E===void 0&&(E=new ga(r,m)),E};let T;return this.getAttributes=function(){return T===void 0&&(T=nE(r,m)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=_,this}let hE=0;class pE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gE(e),t.set(e,n)),n}}class gE{constructor(e){this.id=hE++,this.code=e,this.usedTimes=0}}function mE(A,e,t,n,r,i,s){const a=new og,o=new pE,l=[],c=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return w===0?"uv":`uv${w}`}function p(w,y,I,L,U){const Q=L.fog,D=U.geometry,z=w.isMeshStandardMaterial?L.environment:null,N=(w.isMeshStandardMaterial?t:e).get(w.envMap||z),W=N&&N.mapping===co?N.image.height:null,V=g[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const X=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,re=X!==void 0?X.length:0;let G=0;D.morphAttributes.position!==void 0&&(G=1),D.morphAttributes.normal!==void 0&&(G=2),D.morphAttributes.color!==void 0&&(G=3);let Z,ee,ne,ie;if(V){const mt=DA[V];Z=mt.vertexShader,ee=mt.fragmentShader}else Z=w.vertexShader,ee=w.fragmentShader,o.update(w),ne=o.getVertexShaderID(w),ie=o.getFragmentShaderID(w);const he=A.getRenderTarget(),Ee=U.isInstancedMesh===!0,me=!!w.map,tt=!!w.matcap,Ue=!!N,H=!!w.aoMap,Tt=!!w.lightMap,Se=!!w.bumpMap,Oe=!!w.normalMap,Me=!!w.displacementMap,rt=!!w.emissiveMap,ke=!!w.metalnessMap,Qe=!!w.roughnessMap,et=w.anisotropy>0,It=w.clearcoat>0,Rt=w.iridescence>0,F=w.sheen>0,S=w.transmission>0,Y=et&&!!w.anisotropyMap,te=It&&!!w.clearcoatMap,Ae=It&&!!w.clearcoatNormalMap,le=It&&!!w.clearcoatRoughnessMap,we=Rt&&!!w.iridescenceMap,ue=Rt&&!!w.iridescenceThicknessMap,J=F&&!!w.sheenColorMap,xe=F&&!!w.sheenRoughnessMap,Ce=!!w.specularMap,ye=!!w.specularColorMap,Be=!!w.specularIntensityMap,ve=S&&!!w.transmissionMap,Ge=S&&!!w.thicknessMap,At=!!w.gradientMap,R=!!w.alphaMap,oe=w.alphaTest>0,K=!!w.extensions,se=!!D.attributes.uv1,de=!!D.attributes.uv2,We=!!D.attributes.uv3;return{isWebGL2:c,shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:Z,fragmentShader:ee,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,instancing:Ee,instancingColor:Ee&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:he===null?A.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:VA,map:me,matcap:tt,envMap:Ue,envMapMode:Ue&&N.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:Tt,bumpMap:Se,normalMap:Oe,displacementMap:d&&Me,emissiveMap:rt,normalMapObjectSpace:Oe&&w.normalMapType===Uv,normalMapTangentSpace:Oe&&w.normalMapType===du,metalnessMap:ke,roughnessMap:Qe,anisotropy:et,anisotropyMap:Y,clearcoat:It,clearcoatMap:te,clearcoatNormalMap:Ae,clearcoatRoughnessMap:le,iridescence:Rt,iridescenceMap:we,iridescenceThicknessMap:ue,sheen:F,sheenColorMap:J,sheenRoughnessMap:xe,specularMap:Ce,specularColorMap:ye,specularIntensityMap:Be,transmission:S,transmissionMap:ve,thicknessMap:Ge,gradientMap:At,opaque:w.transparent===!1&&w.blending===Xr,alphaMap:R,alphaTest:oe,combine:w.combine,mapUv:me&&m(w.map.channel),aoMapUv:H&&m(w.aoMap.channel),lightMapUv:Tt&&m(w.lightMap.channel),bumpMapUv:Se&&m(w.bumpMap.channel),normalMapUv:Oe&&m(w.normalMap.channel),displacementMapUv:Me&&m(w.displacementMap.channel),emissiveMapUv:rt&&m(w.emissiveMap.channel),metalnessMapUv:ke&&m(w.metalnessMap.channel),roughnessMapUv:Qe&&m(w.roughnessMap.channel),anisotropyMapUv:Y&&m(w.anisotropyMap.channel),clearcoatMapUv:te&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:J&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(w.sheenRoughnessMap.channel),specularMapUv:Ce&&m(w.specularMap.channel),specularColorMapUv:ye&&m(w.specularColorMap.channel),specularIntensityMapUv:Be&&m(w.specularIntensityMap.channel),transmissionMapUv:ve&&m(w.transmissionMap.channel),thicknessMapUv:Ge&&m(w.thicknessMap.channel),alphaMapUv:R&&m(w.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Oe||et),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:de,vertexUv3s:We,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(me||R),fog:!!Q,useFog:w.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:G,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:A.shadowMap.enabled&&I.length>0,shadowMapType:A.shadowMap.type,toneMapping:w.toneMapped?A.toneMapping:ln,useLegacyLights:A.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sn,flipSided:w.side===qt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:K&&w.extensions.derivatives===!0,extensionFragDepth:K&&w.extensions.fragDepth===!0,extensionDrawBuffers:K&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:K&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)y.push(I),y.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(v(y,w),B(y,w),y.push(A.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function v(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function B(w,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),w.push(a.mask)}function C(w){const y=g[w.type];let I;if(y){const L=DA[y];I=iw.clone(L.uniforms)}else I=w.uniforms;return I}function x(w,y){let I;for(let L=0,U=l.length;L<U;L++){const Q=l[L];if(Q.cacheKey===y){I=Q,++I.usedTimes;break}}return I===void 0&&(I=new fE(A,y,w,i),l.push(I)),I}function _(w){if(--w.usedTimes===0){const y=l.indexOf(w);l[y]=l[l.length-1],l.pop(),w.destroy()}}function E(w){o.remove(w)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:C,acquireProgram:x,releaseProgram:_,releaseShaderCache:E,programs:l,dispose:T}}function BE(){let A=new WeakMap;function e(i){let s=A.get(i);return s===void 0&&(s={},A.set(i,s)),s}function t(i){A.delete(i)}function n(i,s,a){A.get(i)[s]=a}function r(){A=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function vE(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.material.id!==e.material.id?A.material.id-e.material.id:A.z!==e.z?A.z-e.z:A.id-e.id}function df(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.z!==e.z?e.z-A.z:A.id-e.id}function ff(){const A=[];let e=0;const t=[],n=[],r=[];function i(){e=0,t.length=0,n.length=0,r.length=0}function s(u,d,h,g,m,p){let f=A[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:h,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},A[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=h,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=m,f.group=p),e++,f}function a(u,d,h,g,m,p){const f=s(u,d,h,g,m,p);h.transmission>0?n.push(f):h.transparent===!0?r.push(f):t.push(f)}function o(u,d,h,g,m,p){const f=s(u,d,h,g,m,p);h.transmission>0?n.unshift(f):h.transparent===!0?r.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||vE),n.length>1&&n.sort(d||df),r.length>1&&r.sort(d||df)}function c(){for(let u=e,d=A.length;u<d;u++){const h=A[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:i,push:a,unshift:o,finish:c,sort:l}}function wE(){let A=new WeakMap;function e(n,r){const i=A.get(n);let s;return i===void 0?(s=new ff,A.set(n,[s])):r>=i.length?(s=new ff,i.push(s)):s=i[r],s}function t(){A=new WeakMap}return{get:e,dispose:t}}function xE(){const A={};return{get:function(e){if(A[e.id]!==void 0)return A[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Xe};break;case"SpotLight":t={position:new P,direction:new P,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new P,halfWidth:new P,halfHeight:new P};break}return A[e.id]=t,t}}}function CE(){const A={};return{get:function(e){if(A[e.id]!==void 0)return A[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return A[e.id]=t,t}}}let _E=0;function EE(A,e){return(e.castShadow?2:0)-(A.castShadow?2:0)+(e.map?1:0)-(A.map?1:0)}function yE(A,e){const t=new xE,n=CE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new P);const i=new P,s=new gt,a=new gt;function o(c,u){let d=0,h=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let m=0,p=0,f=0,v=0,B=0,C=0,x=0,_=0,E=0,T=0;c.sort(EE);const w=u===!0?Math.PI:1;for(let I=0,L=c.length;I<L;I++){const U=c[I],Q=U.color,D=U.intensity,z=U.distance,N=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=Q.r*D*w,h+=Q.g*D*w,g+=Q.b*D*w;else if(U.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(U.sh.coefficients[W],D);else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const V=U.shadow,X=n.get(U);X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,r.directionalShadow[m]=X,r.directionalShadowMap[m]=N,r.directionalShadowMatrix[m]=U.shadow.matrix,C++}r.directional[m]=W,m++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(Q).multiplyScalar(D*w),W.distance=z,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,r.spot[f]=W;const V=U.shadow;if(U.map&&(r.spotLightMap[E]=U.map,E++,V.updateMatrices(U),U.castShadow&&T++),r.spotLightMatrix[f]=V.matrix,U.castShadow){const X=n.get(U);X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,r.spotShadow[f]=X,r.spotShadowMap[f]=N,_++}f++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(Q).multiplyScalar(D),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=W,v++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*w),W.distance=U.distance,W.decay=U.decay,U.castShadow){const V=U.shadow,X=n.get(U);X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,r.pointShadow[p]=X,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=U.shadow.matrix,x++}r.point[p]=W,p++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(D*w),W.groundColor.copy(U.groundColor).multiplyScalar(D*w),r.hemi[B]=W,B++}}v>0&&(e.isWebGL2||A.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):A.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=g;const y=r.hash;(y.directionalLength!==m||y.pointLength!==p||y.spotLength!==f||y.rectAreaLength!==v||y.hemiLength!==B||y.numDirectionalShadows!==C||y.numPointShadows!==x||y.numSpotShadows!==_||y.numSpotMaps!==E)&&(r.directional.length=m,r.spot.length=f,r.rectArea.length=v,r.point.length=p,r.hemi.length=B,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=_+E-T,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=T,y.directionalLength=m,y.pointLength=p,y.spotLength=f,y.rectAreaLength=v,y.hemiLength=B,y.numDirectionalShadows=C,y.numPointShadows=x,y.numSpotShadows=_,y.numSpotMaps=E,r.version=_E++)}function l(c,u){let d=0,h=0,g=0,m=0,p=0;const f=u.matrixWorldInverse;for(let v=0,B=c.length;v<B;v++){const C=c[v];if(C.isDirectionalLight){const x=r.directional[d];x.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),d++}else if(C.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),g++}else if(C.isRectAreaLight){const x=r.rectArea[m];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(f),a.identity(),s.copy(C.matrixWorld),s.premultiply(f),a.extractRotation(s),x.halfWidth.set(C.width*.5,0,0),x.halfHeight.set(0,C.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(C.isPointLight){const x=r.point[h];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(f),h++}else if(C.isHemisphereLight){const x=r.hemi[p];x.direction.setFromMatrixPosition(C.matrixWorld),x.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:r}}function hf(A,e){const t=new yE(A,e),n=[],r=[];function i(){n.length=0,r.length=0}function s(u){n.push(u)}function a(u){r.push(u)}function o(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function SE(A,e){let t=new WeakMap;function n(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new hf(A,e),t.set(i,[o])):s>=a.length?(o=new hf(A,e),a.push(o)):o=a[s],o}function r(){t=new WeakMap}return{get:n,dispose:r}}class bE extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UE extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ME=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TE(A,e,t){let n=new fu;const r=new je,i=new je,s=new ct,a=new bE({depthPacking:bv}),o=new UE,l={},c=t.maxTextureSize,u={[Qn]:qt,[qt]:Qn,[sn]:sn},d=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:ME,fragmentShader:FE}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new OA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new NA(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kp;let f=this.type;this.render=function(x,_,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const T=A.getRenderTarget(),w=A.getActiveCubeFace(),y=A.getActiveMipmapLevel(),I=A.state;I.setBlending(Mn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=f!==tn&&this.type===tn,U=f===tn&&this.type!==tn;for(let Q=0,D=x.length;Q<D;Q++){const z=x[Q],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const W=N.getFrameExtents();if(r.multiply(W),i.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(i.x=Math.floor(c/W.x),r.x=i.x*W.x,N.mapSize.x=i.x),r.y>c&&(i.y=Math.floor(c/W.y),r.y=i.y*W.y,N.mapSize.y=i.y)),N.map===null||L===!0||U===!0){const X=this.type!==tn?{minFilter:Kt,magFilter:Kt}:{};N.map!==null&&N.map.dispose(),N.map=new lr(r.x,r.y,X),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}A.setRenderTarget(N.map),A.clear();const V=N.getViewportCount();for(let X=0;X<V;X++){const re=N.getViewport(X);s.set(i.x*re.x,i.y*re.y,i.x*re.z,i.y*re.w),I.viewport(s),N.updateMatrices(z,X),n=N.getFrustum(),C(_,E,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===tn&&v(N,E),N.needsUpdate=!1}f=this.type,p.needsUpdate=!1,A.setRenderTarget(T,w,y)};function v(x,_){const E=e.update(m);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,h.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new lr(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,A.setRenderTarget(x.mapPass),A.clear(),A.renderBufferDirect(_,null,E,d,m,null),h.uniforms.shadow_pass.value=x.mapPass.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,A.setRenderTarget(x.map),A.clear(),A.renderBufferDirect(_,null,E,h,m,null)}function B(x,_,E,T){let w=null;const y=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(y!==void 0)w=y;else if(w=E.isPointLight===!0?o:a,A.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const I=w.uuid,L=_.uuid;let U=l[I];U===void 0&&(U={},l[I]=U);let Q=U[L];Q===void 0&&(Q=w.clone(),U[L]=Q),w=Q}if(w.visible=_.visible,w.wireframe=_.wireframe,T===tn?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:u[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,E.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const I=A.properties.get(w);I.light=E}return w}function C(x,_,E,T,w){if(x.visible===!1)return;if(x.layers.test(_.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&w===tn)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const L=e.update(x),U=x.material;if(Array.isArray(U)){const Q=L.groups;for(let D=0,z=Q.length;D<z;D++){const N=Q[D],W=U[N.materialIndex];if(W&&W.visible){const V=B(x,W,T,w);A.renderBufferDirect(E,null,L,V,x,N)}}}else if(U.visible){const Q=B(x,U,T,w);A.renderBufferDirect(E,null,L,Q,x,null)}}const I=x.children;for(let L=0,U=I.length;L<U;L++)C(I[L],_,E,T,w)}}function IE(A,e,t){const n=t.isWebGL2;function r(){let R=!1;const oe=new ct;let K=null;const se=new ct(0,0,0,0);return{setMask:function(de){K!==de&&!R&&(A.colorMask(de,de,de,de),K=de)},setLocked:function(de){R=de},setClear:function(de,We,ut,mt,Rn){Rn===!0&&(de*=mt,We*=mt,ut*=mt),oe.set(de,We,ut,mt),se.equals(oe)===!1&&(A.clearColor(de,We,ut,mt),se.copy(oe))},reset:function(){R=!1,K=null,se.set(-1,0,0,0)}}}function i(){let R=!1,oe=null,K=null,se=null;return{setTest:function(de){de?he(A.DEPTH_TEST):Ee(A.DEPTH_TEST)},setMask:function(de){oe!==de&&!R&&(A.depthMask(de),oe=de)},setFunc:function(de){if(K!==de){switch(de){case Av:A.depthFunc(A.NEVER);break;case nv:A.depthFunc(A.ALWAYS);break;case rv:A.depthFunc(A.LESS);break;case uc:A.depthFunc(A.LEQUAL);break;case iv:A.depthFunc(A.EQUAL);break;case sv:A.depthFunc(A.GEQUAL);break;case av:A.depthFunc(A.GREATER);break;case ov:A.depthFunc(A.NOTEQUAL);break;default:A.depthFunc(A.LEQUAL)}K=de}},setLocked:function(de){R=de},setClear:function(de){se!==de&&(A.clearDepth(de),se=de)},reset:function(){R=!1,oe=null,K=null,se=null}}}function s(){let R=!1,oe=null,K=null,se=null,de=null,We=null,ut=null,mt=null,Rn=null;return{setTest:function(dt){R||(dt?he(A.STENCIL_TEST):Ee(A.STENCIL_TEST))},setMask:function(dt){oe!==dt&&!R&&(A.stencilMask(dt),oe=dt)},setFunc:function(dt,LA,Gt){(K!==dt||se!==LA||de!==Gt)&&(A.stencilFunc(dt,LA,Gt),K=dt,se=LA,de=Gt)},setOp:function(dt,LA,Gt){(We!==dt||ut!==LA||mt!==Gt)&&(A.stencilOp(dt,LA,Gt),We=dt,ut=LA,mt=Gt)},setLocked:function(dt){R=dt},setClear:function(dt){Rn!==dt&&(A.clearStencil(dt),Rn=dt)},reset:function(){R=!1,oe=null,K=null,se=null,de=null,We=null,ut=null,mt=null,Rn=null}}}const a=new r,o=new i,l=new s,c=new WeakMap,u=new WeakMap;let d={},h={},g=new WeakMap,m=[],p=null,f=!1,v=null,B=null,C=null,x=null,_=null,E=null,T=null,w=!1,y=null,I=null,L=null,U=null,Q=null;const D=A.getParameter(A.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,N=0;const W=A.getParameter(A.VERSION);W.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=N>=1):W.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=N>=2);let V=null,X={};const re=A.getParameter(A.SCISSOR_BOX),G=A.getParameter(A.VIEWPORT),Z=new ct().fromArray(re),ee=new ct().fromArray(G);function ne(R,oe,K,se){const de=new Uint8Array(4),We=A.createTexture();A.bindTexture(R,We),A.texParameteri(R,A.TEXTURE_MIN_FILTER,A.NEAREST),A.texParameteri(R,A.TEXTURE_MAG_FILTER,A.NEAREST);for(let ut=0;ut<K;ut++)n&&(R===A.TEXTURE_3D||R===A.TEXTURE_2D_ARRAY)?A.texImage3D(oe,0,A.RGBA,1,1,se,0,A.RGBA,A.UNSIGNED_BYTE,de):A.texImage2D(oe+ut,0,A.RGBA,1,1,0,A.RGBA,A.UNSIGNED_BYTE,de);return We}const ie={};ie[A.TEXTURE_2D]=ne(A.TEXTURE_2D,A.TEXTURE_2D,1),ie[A.TEXTURE_CUBE_MAP]=ne(A.TEXTURE_CUBE_MAP,A.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ie[A.TEXTURE_2D_ARRAY]=ne(A.TEXTURE_2D_ARRAY,A.TEXTURE_2D_ARRAY,1,1),ie[A.TEXTURE_3D]=ne(A.TEXTURE_3D,A.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),he(A.DEPTH_TEST),o.setFunc(uc),Me(!1),rt(qu),he(A.CULL_FACE),Se(Mn);function he(R){d[R]!==!0&&(A.enable(R),d[R]=!0)}function Ee(R){d[R]!==!1&&(A.disable(R),d[R]=!1)}function me(R,oe){return h[R]!==oe?(A.bindFramebuffer(R,oe),h[R]=oe,n&&(R===A.DRAW_FRAMEBUFFER&&(h[A.FRAMEBUFFER]=oe),R===A.FRAMEBUFFER&&(h[A.DRAW_FRAMEBUFFER]=oe)),!0):!1}function tt(R,oe){let K=m,se=!1;if(R)if(K=g.get(oe),K===void 0&&(K=[],g.set(oe,K)),R.isWebGLMultipleRenderTargets){const de=R.texture;if(K.length!==de.length||K[0]!==A.COLOR_ATTACHMENT0){for(let We=0,ut=de.length;We<ut;We++)K[We]=A.COLOR_ATTACHMENT0+We;K.length=de.length,se=!0}}else K[0]!==A.COLOR_ATTACHMENT0&&(K[0]=A.COLOR_ATTACHMENT0,se=!0);else K[0]!==A.BACK&&(K[0]=A.BACK,se=!0);se&&(t.isWebGL2?A.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ue(R){return p!==R?(A.useProgram(R),p=R,!0):!1}const H={[Nr]:A.FUNC_ADD,[KB]:A.FUNC_SUBTRACT,[WB]:A.FUNC_REVERSE_SUBTRACT};if(n)H[Ad]=A.MIN,H[nd]=A.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(H[Ad]=R.MIN_EXT,H[nd]=R.MAX_EXT)}const Tt={[XB]:A.ZERO,[jB]:A.ONE,[YB]:A.SRC_COLOR,[Wp]:A.SRC_ALPHA,[tv]:A.SRC_ALPHA_SATURATE,[ZB]:A.DST_COLOR,[JB]:A.DST_ALPHA,[$B]:A.ONE_MINUS_SRC_COLOR,[Xp]:A.ONE_MINUS_SRC_ALPHA,[ev]:A.ONE_MINUS_DST_COLOR,[qB]:A.ONE_MINUS_DST_ALPHA};function Se(R,oe,K,se,de,We,ut,mt){if(R===Mn){f===!0&&(Ee(A.BLEND),f=!1);return}if(f===!1&&(he(A.BLEND),f=!0),R!==zB){if(R!==v||mt!==w){if((B!==Nr||_!==Nr)&&(A.blendEquation(A.FUNC_ADD),B=Nr,_=Nr),mt)switch(R){case Xr:A.blendFuncSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA);break;case Zu:A.blendFunc(A.ONE,A.ONE);break;case ed:A.blendFuncSeparate(A.ZERO,A.ONE_MINUS_SRC_COLOR,A.ZERO,A.ONE);break;case td:A.blendFuncSeparate(A.ZERO,A.SRC_COLOR,A.ZERO,A.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Xr:A.blendFuncSeparate(A.SRC_ALPHA,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA);break;case Zu:A.blendFunc(A.SRC_ALPHA,A.ONE);break;case ed:A.blendFuncSeparate(A.ZERO,A.ONE_MINUS_SRC_COLOR,A.ZERO,A.ONE);break;case td:A.blendFunc(A.ZERO,A.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}C=null,x=null,E=null,T=null,v=R,w=mt}return}de=de||oe,We=We||K,ut=ut||se,(oe!==B||de!==_)&&(A.blendEquationSeparate(H[oe],H[de]),B=oe,_=de),(K!==C||se!==x||We!==E||ut!==T)&&(A.blendFuncSeparate(Tt[K],Tt[se],Tt[We],Tt[ut]),C=K,x=se,E=We,T=ut),v=R,w=!1}function Oe(R,oe){R.side===sn?Ee(A.CULL_FACE):he(A.CULL_FACE);let K=R.side===qt;oe&&(K=!K),Me(K),R.blending===Xr&&R.transparent===!1?Se(Mn):Se(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),a.setMask(R.colorWrite);const se=R.stencilWrite;l.setTest(se),se&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Qe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?he(A.SAMPLE_ALPHA_TO_COVERAGE):Ee(A.SAMPLE_ALPHA_TO_COVERAGE)}function Me(R){y!==R&&(R?A.frontFace(A.CW):A.frontFace(A.CCW),y=R)}function rt(R){R!==GB?(he(A.CULL_FACE),R!==I&&(R===qu?A.cullFace(A.BACK):R===VB?A.cullFace(A.FRONT):A.cullFace(A.FRONT_AND_BACK))):Ee(A.CULL_FACE),I=R}function ke(R){R!==L&&(z&&A.lineWidth(R),L=R)}function Qe(R,oe,K){R?(he(A.POLYGON_OFFSET_FILL),(U!==oe||Q!==K)&&(A.polygonOffset(oe,K),U=oe,Q=K)):Ee(A.POLYGON_OFFSET_FILL)}function et(R){R?he(A.SCISSOR_TEST):Ee(A.SCISSOR_TEST)}function It(R){R===void 0&&(R=A.TEXTURE0+D-1),V!==R&&(A.activeTexture(R),V=R)}function Rt(R,oe,K){K===void 0&&(V===null?K=A.TEXTURE0+D-1:K=V);let se=X[K];se===void 0&&(se={type:void 0,texture:void 0},X[K]=se),(se.type!==R||se.texture!==oe)&&(V!==K&&(A.activeTexture(K),V=K),A.bindTexture(R,oe||ie[R]),se.type=R,se.texture=oe)}function F(){const R=X[V];R!==void 0&&R.type!==void 0&&(A.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function S(){try{A.compressedTexImage2D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{A.compressedTexImage3D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{A.texSubImage2D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{A.texSubImage3D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{A.compressedTexSubImage2D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{A.compressedTexSubImage3D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{A.texStorage2D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{A.texStorage3D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{A.texImage2D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{A.texImage3D.apply(A,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(R){Z.equals(R)===!1&&(A.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function Be(R){ee.equals(R)===!1&&(A.viewport(R.x,R.y,R.z,R.w),ee.copy(R))}function ve(R,oe){let K=u.get(oe);K===void 0&&(K=new WeakMap,u.set(oe,K));let se=K.get(R);se===void 0&&(se=A.getUniformBlockIndex(oe,R.name),K.set(R,se))}function Ge(R,oe){const se=u.get(oe).get(R);c.get(oe)!==se&&(A.uniformBlockBinding(oe,se,R.__bindingPointIndex),c.set(oe,se))}function At(){A.disable(A.BLEND),A.disable(A.CULL_FACE),A.disable(A.DEPTH_TEST),A.disable(A.POLYGON_OFFSET_FILL),A.disable(A.SCISSOR_TEST),A.disable(A.STENCIL_TEST),A.disable(A.SAMPLE_ALPHA_TO_COVERAGE),A.blendEquation(A.FUNC_ADD),A.blendFunc(A.ONE,A.ZERO),A.blendFuncSeparate(A.ONE,A.ZERO,A.ONE,A.ZERO),A.colorMask(!0,!0,!0,!0),A.clearColor(0,0,0,0),A.depthMask(!0),A.depthFunc(A.LESS),A.clearDepth(1),A.stencilMask(4294967295),A.stencilFunc(A.ALWAYS,0,4294967295),A.stencilOp(A.KEEP,A.KEEP,A.KEEP),A.clearStencil(0),A.cullFace(A.BACK),A.frontFace(A.CCW),A.polygonOffset(0,0),A.activeTexture(A.TEXTURE0),A.bindFramebuffer(A.FRAMEBUFFER,null),n===!0&&(A.bindFramebuffer(A.DRAW_FRAMEBUFFER,null),A.bindFramebuffer(A.READ_FRAMEBUFFER,null)),A.useProgram(null),A.lineWidth(1),A.scissor(0,0,A.canvas.width,A.canvas.height),A.viewport(0,0,A.canvas.width,A.canvas.height),d={},V=null,X={},h={},g=new WeakMap,m=[],p=null,f=!1,v=null,B=null,C=null,x=null,_=null,E=null,T=null,w=!1,y=null,I=null,L=null,U=null,Q=null,Z.set(0,0,A.canvas.width,A.canvas.height),ee.set(0,0,A.canvas.width,A.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:he,disable:Ee,bindFramebuffer:me,drawBuffers:tt,useProgram:Ue,setBlending:Se,setMaterial:Oe,setFlipSided:Me,setCullFace:rt,setLineWidth:ke,setPolygonOffset:Qe,setScissorTest:et,activeTexture:It,bindTexture:Rt,unbindTexture:F,compressedTexImage2D:S,compressedTexImage3D:Y,texImage2D:xe,texImage3D:Ce,updateUBOMapping:ve,uniformBlockBinding:Ge,texStorage2D:ue,texStorage3D:J,texSubImage2D:te,texSubImage3D:Ae,compressedTexSubImage2D:le,compressedTexSubImage3D:we,scissor:ye,viewport:Be,reset:At}}function QE(A,e,t,n,r,i,s){const a=r.isWebGL2,o=r.maxTextures,l=r.maxCubemapSize,c=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,S){return f?new OffscreenCanvas(F,S):Ha("canvas")}function B(F,S,Y,te){let Ae=1;if((F.width>te||F.height>te)&&(Ae=te/Math.max(F.width,F.height)),Ae<1||S===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const le=S?Bc:Math.floor,we=le(Ae*F.width),ue=le(Ae*F.height);m===void 0&&(m=v(we,ue));const J=Y?v(we,ue):m;return J.width=we,J.height=ue,J.getContext("2d").drawImage(F,0,0,we,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+we+"x"+ue+")."),J}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function C(F){return Fd(F.width)&&Fd(F.height)}function x(F){return a?!1:F.wrapS!==UA||F.wrapT!==UA||F.minFilter!==Kt&&F.minFilter!==hA}function _(F,S){return F.generateMipmaps&&S&&F.minFilter!==Kt&&F.minFilter!==hA}function E(F){A.generateMipmap(F)}function T(F,S,Y,te,Ae=!1){if(a===!1)return S;if(F!==null){if(A[F]!==void 0)return A[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let le=S;return S===A.RED&&(Y===A.FLOAT&&(le=A.R32F),Y===A.HALF_FLOAT&&(le=A.R16F),Y===A.UNSIGNED_BYTE&&(le=A.R8)),S===A.RG&&(Y===A.FLOAT&&(le=A.RG32F),Y===A.HALF_FLOAT&&(le=A.RG16F),Y===A.UNSIGNED_BYTE&&(le=A.RG8)),S===A.RGBA&&(Y===A.FLOAT&&(le=A.RGBA32F),Y===A.HALF_FLOAT&&(le=A.RGBA16F),Y===A.UNSIGNED_BYTE&&(le=te===He&&Ae===!1?A.SRGB8_ALPHA8:A.RGBA8),Y===A.UNSIGNED_SHORT_4_4_4_4&&(le=A.RGBA4),Y===A.UNSIGNED_SHORT_5_5_5_1&&(le=A.RGB5_A1)),(le===A.R16F||le===A.R32F||le===A.RG16F||le===A.RG32F||le===A.RGBA16F||le===A.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function w(F,S,Y){return _(F,Y)===!0||F.isFramebufferTexture&&F.minFilter!==Kt&&F.minFilter!==hA?Math.log2(Math.max(S.width,S.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?S.mipmaps.length:1}function y(F){return F===Kt||F===rd||F===ko?A.NEAREST:A.LINEAR}function I(F){const S=F.target;S.removeEventListener("dispose",I),U(S),S.isVideoTexture&&g.delete(S)}function L(F){const S=F.target;S.removeEventListener("dispose",L),D(S)}function U(F){const S=n.get(F);if(S.__webglInit===void 0)return;const Y=F.source,te=p.get(Y);if(te){const Ae=te[S.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&Q(F),Object.keys(te).length===0&&p.delete(Y)}n.remove(F)}function Q(F){const S=n.get(F);A.deleteTexture(S.__webglTexture);const Y=F.source,te=p.get(Y);delete te[S.__cacheKey],s.memory.textures--}function D(F){const S=F.texture,Y=n.get(F),te=n.get(S);if(te.__webglTexture!==void 0&&(A.deleteTexture(te.__webglTexture),s.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let Ae=0;Ae<6;Ae++)A.deleteFramebuffer(Y.__webglFramebuffer[Ae]),Y.__webglDepthbuffer&&A.deleteRenderbuffer(Y.__webglDepthbuffer[Ae]);else{if(A.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&A.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&A.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let Ae=0;Ae<Y.__webglColorRenderbuffer.length;Ae++)Y.__webglColorRenderbuffer[Ae]&&A.deleteRenderbuffer(Y.__webglColorRenderbuffer[Ae]);Y.__webglDepthRenderbuffer&&A.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let Ae=0,le=S.length;Ae<le;Ae++){const we=n.get(S[Ae]);we.__webglTexture&&(A.deleteTexture(we.__webglTexture),s.memory.textures--),n.remove(S[Ae])}n.remove(S),n.remove(F)}let z=0;function N(){z=0}function W(){const F=z;return F>=o&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o),z+=1,F}function V(F){const S=[];return S.push(F.wrapS),S.push(F.wrapT),S.push(F.wrapR||0),S.push(F.magFilter),S.push(F.minFilter),S.push(F.anisotropy),S.push(F.internalFormat),S.push(F.format),S.push(F.type),S.push(F.generateMipmaps),S.push(F.premultiplyAlpha),S.push(F.flipY),S.push(F.unpackAlignment),S.push(F.colorSpace),S.join()}function X(F,S){const Y=n.get(F);if(F.isVideoTexture&&It(F),F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){const te=F.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(Y,F,S);return}}t.bindTexture(A.TEXTURE_2D,Y.__webglTexture,A.TEXTURE0+S)}function re(F,S){const Y=n.get(F);if(F.version>0&&Y.__version!==F.version){me(Y,F,S);return}t.bindTexture(A.TEXTURE_2D_ARRAY,Y.__webglTexture,A.TEXTURE0+S)}function G(F,S){const Y=n.get(F);if(F.version>0&&Y.__version!==F.version){me(Y,F,S);return}t.bindTexture(A.TEXTURE_3D,Y.__webglTexture,A.TEXTURE0+S)}function Z(F,S){const Y=n.get(F);if(F.version>0&&Y.__version!==F.version){tt(Y,F,S);return}t.bindTexture(A.TEXTURE_CUBE_MAP,Y.__webglTexture,A.TEXTURE0+S)}const ee={[hc]:A.REPEAT,[UA]:A.CLAMP_TO_EDGE,[pc]:A.MIRRORED_REPEAT},ne={[Kt]:A.NEAREST,[rd]:A.NEAREST_MIPMAP_NEAREST,[ko]:A.NEAREST_MIPMAP_LINEAR,[hA]:A.LINEAR,[gv]:A.LINEAR_MIPMAP_NEAREST,[$i]:A.LINEAR_MIPMAP_LINEAR},ie={[Fv]:A.NEVER,[Hv]:A.ALWAYS,[Tv]:A.LESS,[Qv]:A.LEQUAL,[Iv]:A.EQUAL,[Dv]:A.GEQUAL,[Lv]:A.GREATER,[Rv]:A.NOTEQUAL};function he(F,S,Y){if(Y?(A.texParameteri(F,A.TEXTURE_WRAP_S,ee[S.wrapS]),A.texParameteri(F,A.TEXTURE_WRAP_T,ee[S.wrapT]),(F===A.TEXTURE_3D||F===A.TEXTURE_2D_ARRAY)&&A.texParameteri(F,A.TEXTURE_WRAP_R,ee[S.wrapR]),A.texParameteri(F,A.TEXTURE_MAG_FILTER,ne[S.magFilter]),A.texParameteri(F,A.TEXTURE_MIN_FILTER,ne[S.minFilter])):(A.texParameteri(F,A.TEXTURE_WRAP_S,A.CLAMP_TO_EDGE),A.texParameteri(F,A.TEXTURE_WRAP_T,A.CLAMP_TO_EDGE),(F===A.TEXTURE_3D||F===A.TEXTURE_2D_ARRAY)&&A.texParameteri(F,A.TEXTURE_WRAP_R,A.CLAMP_TO_EDGE),(S.wrapS!==UA||S.wrapT!==UA)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),A.texParameteri(F,A.TEXTURE_MAG_FILTER,y(S.magFilter)),A.texParameteri(F,A.TEXTURE_MIN_FILTER,y(S.minFilter)),S.minFilter!==Kt&&S.minFilter!==hA&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(A.texParameteri(F,A.TEXTURE_COMPARE_MODE,A.COMPARE_REF_TO_TEXTURE),A.texParameteri(F,A.TEXTURE_COMPARE_FUNC,ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Kt||S.minFilter!==ko&&S.minFilter!==$i||S.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ji&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(A.texParameterf(F,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ee(F,S){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,S.addEventListener("dispose",I));const te=S.source;let Ae=p.get(te);Ae===void 0&&(Ae={},p.set(te,Ae));const le=V(S);if(le!==F.__cacheKey){Ae[le]===void 0&&(Ae[le]={texture:A.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),Ae[le].usedTimes++;const we=Ae[F.__cacheKey];we!==void 0&&(Ae[F.__cacheKey].usedTimes--,we.usedTimes===0&&Q(S)),F.__cacheKey=le,F.__webglTexture=Ae[le].texture}return Y}function me(F,S,Y){let te=A.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=A.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=A.TEXTURE_3D);const Ae=Ee(F,S),le=S.source;t.bindTexture(te,F.__webglTexture,A.TEXTURE0+Y);const we=n.get(le);if(le.version!==we.__version||Ae===!0){t.activeTexture(A.TEXTURE0+Y),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,S.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,S.unpackAlignment),A.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,A.NONE);const ue=x(S)&&C(S.image)===!1;let J=B(S.image,ue,!1,c);J=Rt(S,J);const xe=C(J)||a,Ce=i.convert(S.format,S.colorSpace);let ye=i.convert(S.type),Be=T(S.internalFormat,Ce,ye,S.colorSpace);he(te,S,xe);let ve;const Ge=S.mipmaps,At=a&&S.isVideoTexture!==!0,R=we.__version===void 0||Ae===!0,oe=w(S,J,xe);if(S.isDepthTexture)Be=A.DEPTH_COMPONENT,a?S.type===En?Be=A.DEPTH_COMPONENT32F:S.type===_n?Be=A.DEPTH_COMPONENT24:S.type===qn?Be=A.DEPTH24_STENCIL8:Be=A.DEPTH_COMPONENT16:S.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Zn&&Be===A.DEPTH_COMPONENT&&S.type!==uu&&S.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=_n,ye=i.convert(S.type)),S.format===Zr&&Be===A.DEPTH_COMPONENT&&(Be=A.DEPTH_STENCIL,S.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=qn,ye=i.convert(S.type))),R&&(At?t.texStorage2D(A.TEXTURE_2D,1,Be,J.width,J.height):t.texImage2D(A.TEXTURE_2D,0,Be,J.width,J.height,0,Ce,ye,null));else if(S.isDataTexture)if(Ge.length>0&&xe){At&&R&&t.texStorage2D(A.TEXTURE_2D,oe,Be,Ge[0].width,Ge[0].height);for(let K=0,se=Ge.length;K<se;K++)ve=Ge[K],At?t.texSubImage2D(A.TEXTURE_2D,K,0,0,ve.width,ve.height,Ce,ye,ve.data):t.texImage2D(A.TEXTURE_2D,K,Be,ve.width,ve.height,0,Ce,ye,ve.data);S.generateMipmaps=!1}else At?(R&&t.texStorage2D(A.TEXTURE_2D,oe,Be,J.width,J.height),t.texSubImage2D(A.TEXTURE_2D,0,0,0,J.width,J.height,Ce,ye,J.data)):t.texImage2D(A.TEXTURE_2D,0,Be,J.width,J.height,0,Ce,ye,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){At&&R&&t.texStorage3D(A.TEXTURE_2D_ARRAY,oe,Be,Ge[0].width,Ge[0].height,J.depth);for(let K=0,se=Ge.length;K<se;K++)ve=Ge[K],S.format!==MA?Ce!==null?At?t.compressedTexSubImage3D(A.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,J.depth,Ce,ve.data,0,0):t.compressedTexImage3D(A.TEXTURE_2D_ARRAY,K,Be,ve.width,ve.height,J.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage3D(A.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,J.depth,Ce,ye,ve.data):t.texImage3D(A.TEXTURE_2D_ARRAY,K,Be,ve.width,ve.height,J.depth,0,Ce,ye,ve.data)}else{At&&R&&t.texStorage2D(A.TEXTURE_2D,oe,Be,Ge[0].width,Ge[0].height);for(let K=0,se=Ge.length;K<se;K++)ve=Ge[K],S.format!==MA?Ce!==null?At?t.compressedTexSubImage2D(A.TEXTURE_2D,K,0,0,ve.width,ve.height,Ce,ve.data):t.compressedTexImage2D(A.TEXTURE_2D,K,Be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage2D(A.TEXTURE_2D,K,0,0,ve.width,ve.height,Ce,ye,ve.data):t.texImage2D(A.TEXTURE_2D,K,Be,ve.width,ve.height,0,Ce,ye,ve.data)}else if(S.isDataArrayTexture)At?(R&&t.texStorage3D(A.TEXTURE_2D_ARRAY,oe,Be,J.width,J.height,J.depth),t.texSubImage3D(A.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ce,ye,J.data)):t.texImage3D(A.TEXTURE_2D_ARRAY,0,Be,J.width,J.height,J.depth,0,Ce,ye,J.data);else if(S.isData3DTexture)At?(R&&t.texStorage3D(A.TEXTURE_3D,oe,Be,J.width,J.height,J.depth),t.texSubImage3D(A.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ce,ye,J.data)):t.texImage3D(A.TEXTURE_3D,0,Be,J.width,J.height,J.depth,0,Ce,ye,J.data);else if(S.isFramebufferTexture){if(R)if(At)t.texStorage2D(A.TEXTURE_2D,oe,Be,J.width,J.height);else{let K=J.width,se=J.height;for(let de=0;de<oe;de++)t.texImage2D(A.TEXTURE_2D,de,Be,K,se,0,Ce,ye,null),K>>=1,se>>=1}}else if(Ge.length>0&&xe){At&&R&&t.texStorage2D(A.TEXTURE_2D,oe,Be,Ge[0].width,Ge[0].height);for(let K=0,se=Ge.length;K<se;K++)ve=Ge[K],At?t.texSubImage2D(A.TEXTURE_2D,K,0,0,Ce,ye,ve):t.texImage2D(A.TEXTURE_2D,K,Be,Ce,ye,ve);S.generateMipmaps=!1}else At?(R&&t.texStorage2D(A.TEXTURE_2D,oe,Be,J.width,J.height),t.texSubImage2D(A.TEXTURE_2D,0,0,0,Ce,ye,J)):t.texImage2D(A.TEXTURE_2D,0,Be,Ce,ye,J);_(S,xe)&&E(te),we.__version=le.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function tt(F,S,Y){if(S.image.length!==6)return;const te=Ee(F,S),Ae=S.source;t.bindTexture(A.TEXTURE_CUBE_MAP,F.__webglTexture,A.TEXTURE0+Y);const le=n.get(Ae);if(Ae.version!==le.__version||te===!0){t.activeTexture(A.TEXTURE0+Y),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,S.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,S.unpackAlignment),A.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,A.NONE);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,ue=S.image[0]&&S.image[0].isDataTexture,J=[];for(let K=0;K<6;K++)!we&&!ue?J[K]=B(S.image[K],!1,!0,l):J[K]=ue?S.image[K].image:S.image[K],J[K]=Rt(S,J[K]);const xe=J[0],Ce=C(xe)||a,ye=i.convert(S.format,S.colorSpace),Be=i.convert(S.type),ve=T(S.internalFormat,ye,Be,S.colorSpace),Ge=a&&S.isVideoTexture!==!0,At=le.__version===void 0||te===!0;let R=w(S,xe,Ce);he(A.TEXTURE_CUBE_MAP,S,Ce);let oe;if(we){Ge&&At&&t.texStorage2D(A.TEXTURE_CUBE_MAP,R,ve,xe.width,xe.height);for(let K=0;K<6;K++){oe=J[K].mipmaps;for(let se=0;se<oe.length;se++){const de=oe[se];S.format!==MA?ye!==null?Ge?t.compressedTexSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,de.width,de.height,ye,de.data):t.compressedTexImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,ve,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,de.width,de.height,ye,Be,de.data):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,ve,de.width,de.height,0,ye,Be,de.data)}}}else{oe=S.mipmaps,Ge&&At&&(oe.length>0&&R++,t.texStorage2D(A.TEXTURE_CUBE_MAP,R,ve,J[0].width,J[0].height));for(let K=0;K<6;K++)if(ue){Ge?t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,J[K].width,J[K].height,ye,Be,J[K].data):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ve,J[K].width,J[K].height,0,ye,Be,J[K].data);for(let se=0;se<oe.length;se++){const We=oe[se].image[K].image;Ge?t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,We.width,We.height,ye,Be,We.data):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,ve,We.width,We.height,0,ye,Be,We.data)}}else{Ge?t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,Be,J[K]):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ve,ye,Be,J[K]);for(let se=0;se<oe.length;se++){const de=oe[se];Ge?t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,ye,Be,de.image[K]):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,ve,ye,Be,de.image[K])}}}_(S,Ce)&&E(A.TEXTURE_CUBE_MAP),le.__version=Ae.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function Ue(F,S,Y,te,Ae){const le=i.convert(Y.format,Y.colorSpace),we=i.convert(Y.type),ue=T(Y.internalFormat,le,we,Y.colorSpace);n.get(S).__hasExternalTextures||(Ae===A.TEXTURE_3D||Ae===A.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,ue,S.width,S.height,S.depth,0,le,we,null):t.texImage2D(Ae,0,ue,S.width,S.height,0,le,we,null)),t.bindFramebuffer(A.FRAMEBUFFER,F),et(S)?d.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,te,Ae,n.get(Y).__webglTexture,0,Qe(S)):(Ae===A.TEXTURE_2D||Ae>=A.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=A.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&A.framebufferTexture2D(A.FRAMEBUFFER,te,Ae,n.get(Y).__webglTexture,0),t.bindFramebuffer(A.FRAMEBUFFER,null)}function H(F,S,Y){if(A.bindRenderbuffer(A.RENDERBUFFER,F),S.depthBuffer&&!S.stencilBuffer){let te=A.DEPTH_COMPONENT16;if(Y||et(S)){const Ae=S.depthTexture;Ae&&Ae.isDepthTexture&&(Ae.type===En?te=A.DEPTH_COMPONENT32F:Ae.type===_n&&(te=A.DEPTH_COMPONENT24));const le=Qe(S);et(S)?d.renderbufferStorageMultisampleEXT(A.RENDERBUFFER,le,te,S.width,S.height):A.renderbufferStorageMultisample(A.RENDERBUFFER,le,te,S.width,S.height)}else A.renderbufferStorage(A.RENDERBUFFER,te,S.width,S.height);A.framebufferRenderbuffer(A.FRAMEBUFFER,A.DEPTH_ATTACHMENT,A.RENDERBUFFER,F)}else if(S.depthBuffer&&S.stencilBuffer){const te=Qe(S);Y&&et(S)===!1?A.renderbufferStorageMultisample(A.RENDERBUFFER,te,A.DEPTH24_STENCIL8,S.width,S.height):et(S)?d.renderbufferStorageMultisampleEXT(A.RENDERBUFFER,te,A.DEPTH24_STENCIL8,S.width,S.height):A.renderbufferStorage(A.RENDERBUFFER,A.DEPTH_STENCIL,S.width,S.height),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.DEPTH_STENCIL_ATTACHMENT,A.RENDERBUFFER,F)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Ae=0;Ae<te.length;Ae++){const le=te[Ae],we=i.convert(le.format,le.colorSpace),ue=i.convert(le.type),J=T(le.internalFormat,we,ue,le.colorSpace),xe=Qe(S);Y&&et(S)===!1?A.renderbufferStorageMultisample(A.RENDERBUFFER,xe,J,S.width,S.height):et(S)?d.renderbufferStorageMultisampleEXT(A.RENDERBUFFER,xe,J,S.width,S.height):A.renderbufferStorage(A.RENDERBUFFER,J,S.width,S.height)}}A.bindRenderbuffer(A.RENDERBUFFER,null)}function Tt(F,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(A.FRAMEBUFFER,F),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,Ae=Qe(S);if(S.depthTexture.format===Zn)et(S)?d.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,A.DEPTH_ATTACHMENT,A.TEXTURE_2D,te,0,Ae):A.framebufferTexture2D(A.FRAMEBUFFER,A.DEPTH_ATTACHMENT,A.TEXTURE_2D,te,0);else if(S.depthTexture.format===Zr)et(S)?d.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,A.DEPTH_STENCIL_ATTACHMENT,A.TEXTURE_2D,te,0,Ae):A.framebufferTexture2D(A.FRAMEBUFFER,A.DEPTH_STENCIL_ATTACHMENT,A.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Se(F){const S=n.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Tt(S.__webglFramebuffer,F)}else if(Y){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(A.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=A.createRenderbuffer(),H(S.__webglDepthbuffer[te],F,!1)}else t.bindFramebuffer(A.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=A.createRenderbuffer(),H(S.__webglDepthbuffer,F,!1);t.bindFramebuffer(A.FRAMEBUFFER,null)}function Oe(F,S,Y){const te=n.get(F);S!==void 0&&Ue(te.__webglFramebuffer,F,F.texture,A.COLOR_ATTACHMENT0,A.TEXTURE_2D),Y!==void 0&&Se(F)}function Me(F){const S=F.texture,Y=n.get(F),te=n.get(S);F.addEventListener("dispose",L),F.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=A.createTexture()),te.__version=S.version,s.memory.textures++);const Ae=F.isWebGLCubeRenderTarget===!0,le=F.isWebGLMultipleRenderTargets===!0,we=C(F)||a;if(Ae){Y.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)Y.__webglFramebuffer[ue]=A.createFramebuffer()}else{if(Y.__webglFramebuffer=A.createFramebuffer(),le)if(r.drawBuffers){const ue=F.texture;for(let J=0,xe=ue.length;J<xe;J++){const Ce=n.get(ue[J]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=A.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&F.samples>0&&et(F)===!1){const ue=le?S:[S];Y.__webglMultisampledFramebuffer=A.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(A.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let J=0;J<ue.length;J++){const xe=ue[J];Y.__webglColorRenderbuffer[J]=A.createRenderbuffer(),A.bindRenderbuffer(A.RENDERBUFFER,Y.__webglColorRenderbuffer[J]);const Ce=i.convert(xe.format,xe.colorSpace),ye=i.convert(xe.type),Be=T(xe.internalFormat,Ce,ye,xe.colorSpace,F.isXRRenderTarget===!0),ve=Qe(F);A.renderbufferStorageMultisample(A.RENDERBUFFER,ve,Be,F.width,F.height),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+J,A.RENDERBUFFER,Y.__webglColorRenderbuffer[J])}A.bindRenderbuffer(A.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=A.createRenderbuffer(),H(Y.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(A.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(A.TEXTURE_CUBE_MAP,te.__webglTexture),he(A.TEXTURE_CUBE_MAP,S,we);for(let ue=0;ue<6;ue++)Ue(Y.__webglFramebuffer[ue],F,S,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+ue);_(S,we)&&E(A.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const ue=F.texture;for(let J=0,xe=ue.length;J<xe;J++){const Ce=ue[J],ye=n.get(Ce);t.bindTexture(A.TEXTURE_2D,ye.__webglTexture),he(A.TEXTURE_2D,Ce,we),Ue(Y.__webglFramebuffer,F,Ce,A.COLOR_ATTACHMENT0+J,A.TEXTURE_2D),_(Ce,we)&&E(A.TEXTURE_2D)}t.unbindTexture()}else{let ue=A.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(a?ue=F.isWebGL3DRenderTarget?A.TEXTURE_3D:A.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,te.__webglTexture),he(ue,S,we),Ue(Y.__webglFramebuffer,F,S,A.COLOR_ATTACHMENT0,ue),_(S,we)&&E(ue),t.unbindTexture()}F.depthBuffer&&Se(F)}function rt(F){const S=C(F)||a,Y=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let te=0,Ae=Y.length;te<Ae;te++){const le=Y[te];if(_(le,S)){const we=F.isWebGLCubeRenderTarget?A.TEXTURE_CUBE_MAP:A.TEXTURE_2D,ue=n.get(le).__webglTexture;t.bindTexture(we,ue),E(we),t.unbindTexture()}}}function ke(F){if(a&&F.samples>0&&et(F)===!1){const S=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],Y=F.width,te=F.height;let Ae=A.COLOR_BUFFER_BIT;const le=[],we=F.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,ue=n.get(F),J=F.isWebGLMultipleRenderTargets===!0;if(J)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(A.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+xe,A.RENDERBUFFER,null),t.bindFramebuffer(A.FRAMEBUFFER,ue.__webglFramebuffer),A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0+xe,A.TEXTURE_2D,null,0);t.bindFramebuffer(A.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(A.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){le.push(A.COLOR_ATTACHMENT0+xe),F.depthBuffer&&le.push(we);const Ce=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ce===!1&&(F.depthBuffer&&(Ae|=A.DEPTH_BUFFER_BIT),F.stencilBuffer&&(Ae|=A.STENCIL_BUFFER_BIT)),J&&A.framebufferRenderbuffer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.RENDERBUFFER,ue.__webglColorRenderbuffer[xe]),Ce===!0&&(A.invalidateFramebuffer(A.READ_FRAMEBUFFER,[we]),A.invalidateFramebuffer(A.DRAW_FRAMEBUFFER,[we])),J){const ye=n.get(S[xe]).__webglTexture;A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ye,0)}A.blitFramebuffer(0,0,Y,te,0,0,Y,te,Ae,A.NEAREST),h&&A.invalidateFramebuffer(A.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(A.READ_FRAMEBUFFER,null),t.bindFramebuffer(A.DRAW_FRAMEBUFFER,null),J)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(A.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+xe,A.RENDERBUFFER,ue.__webglColorRenderbuffer[xe]);const Ce=n.get(S[xe]).__webglTexture;t.bindFramebuffer(A.FRAMEBUFFER,ue.__webglFramebuffer),A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0+xe,A.TEXTURE_2D,Ce,0)}t.bindFramebuffer(A.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Qe(F){return Math.min(u,F.samples)}function et(F){const S=n.get(F);return a&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(F){const S=s.render.frame;g.get(F)!==S&&(g.set(F,S),F.update())}function Rt(F,S){const Y=F.colorSpace,te=F.format,Ae=F.type;return F.isCompressedTexture===!0||F.format===gc||Y!==VA&&Y!==tr&&(Y===He?a===!1?e.has("EXT_sRGB")===!0&&te===MA?(F.format=gc,F.minFilter=hA,F.generateMipmaps=!1):S=rg.sRGBToLinear(S):(te!==MA||Ae!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}this.allocateTextureUnit=W,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=re,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Oe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=et}function LE(A,e,t){const n=t.isWebGL2;function r(i,s=tr){let a;if(i===Fn)return A.UNSIGNED_BYTE;if(i===$p)return A.UNSIGNED_SHORT_4_4_4_4;if(i===Jp)return A.UNSIGNED_SHORT_5_5_5_1;if(i===mv)return A.BYTE;if(i===Bv)return A.SHORT;if(i===uu)return A.UNSIGNED_SHORT;if(i===Yp)return A.INT;if(i===_n)return A.UNSIGNED_INT;if(i===En)return A.FLOAT;if(i===Ji)return n?A.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===vv)return A.ALPHA;if(i===MA)return A.RGBA;if(i===wv)return A.LUMINANCE;if(i===xv)return A.LUMINANCE_ALPHA;if(i===Zn)return A.DEPTH_COMPONENT;if(i===Zr)return A.DEPTH_STENCIL;if(i===gc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===Cv)return A.RED;if(i===qp)return A.RED_INTEGER;if(i===_v)return A.RG;if(i===Zp)return A.RG_INTEGER;if(i===eg)return A.RGBA_INTEGER;if(i===zo||i===Ko||i===Wo||i===Xo)if(s===He)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===zo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===zo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===id||i===sd||i===ad||i===od)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===id)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ad)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===od)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ev)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===ld||i===cd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ld)return s===He?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===cd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ud||i===dd||i===fd||i===hd||i===pd||i===gd||i===md||i===Bd||i===vd||i===wd||i===xd||i===Cd||i===_d||i===Ed)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ud)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cd)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_d)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ed)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===jo)return s===He?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(i===yv||i===yd||i===Sd||i===bd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===jo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===yd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qn?n?A.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):A[i]!==void 0?A[i]:null}return{convert:r}}class RE extends lA{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DE={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),f=this._getHandJoint(l,m);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DE)))}return a!==null&&(a.visible=r!==null),o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class HE extends cA{constructor(e,t,n,r,i,s,a,o,l,c){if(c=c!==void 0?c:Zn,c!==Zn&&c!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Zn&&(n=_n),n===void 0&&c===Zr&&(n=qn),super(null,r,i,s,a,o,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=o!==void 0?o:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class PE extends di{constructor(e,t){super();const n=this;let r=null,i=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,g=null;const m=t.getContextAttributes();let p=null,f=null;const v=[],B=[];let C=null;const x=new lA;x.layers.enable(1),x.viewport=new ct;const _=new lA;_.layers.enable(2),_.viewport=new ct;const E=[x,_],T=new RE;T.layers.enable(1),T.layers.enable(2);let w=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(G){C=G},this.getController=function(G){let Z=v[G];return Z===void 0&&(Z=new ml,v[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=v[G];return Z===void 0&&(Z=new ml,v[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=v[G];return Z===void 0&&(Z=new ml,v[G]=Z),Z.getHandSpace()};function I(G){const Z=B.indexOf(G.inputSource);if(Z===-1)return;const ee=v[Z];ee!==void 0&&(ee.update(G.inputSource,G.frame,l||s),ee.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",U);for(let G=0;G<v.length;G++){const Z=B[G];Z!==null&&(B[G]=null,v[G].disconnect(Z))}w=null,y=null,e.setRenderTarget(p),h=null,d=null,u=null,r=null,f=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){i=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",L),r.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};h=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:h}),f=new lr(h.framebufferWidth,h.framebufferHeight,{format:MA,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ee=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Zr:Zn,ee=m.stencil?qn:_n);const ie={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ie),r.updateRenderState({layers:[d]}),f=new lr(d.textureWidth,d.textureHeight,{format:MA,type:Fn,depthTexture:new HE(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const he=e.properties.get(f);he.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(a),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(G){for(let Z=0;Z<G.removed.length;Z++){const ee=G.removed[Z],ne=B.indexOf(ee);ne>=0&&(B[ne]=null,v[ne].disconnect(ee))}for(let Z=0;Z<G.added.length;Z++){const ee=G.added[Z];let ne=B.indexOf(ee);if(ne===-1){for(let he=0;he<v.length;he++)if(he>=B.length){B.push(ee),ne=he;break}else if(B[he]===null){B[he]=ee,ne=he;break}if(ne===-1)break}const ie=v[ne];ie&&ie.connect(ee)}}const Q=new P,D=new P;function z(G,Z,ee){Q.setFromMatrixPosition(Z.matrixWorld),D.setFromMatrixPosition(ee.matrixWorld);const ne=Q.distanceTo(D),ie=Z.projectionMatrix.elements,he=ee.projectionMatrix.elements,Ee=ie[14]/(ie[10]-1),me=ie[14]/(ie[10]+1),tt=(ie[9]+1)/ie[5],Ue=(ie[9]-1)/ie[5],H=(ie[8]-1)/ie[0],Tt=(he[8]+1)/he[0],Se=Ee*H,Oe=Ee*Tt,Me=ne/(-H+Tt),rt=Me*-H;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(rt),G.translateZ(Me),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const ke=Ee+Me,Qe=me+Me,et=Se-rt,It=Oe+(ne-rt),Rt=tt*me/Qe*ke,F=Ue*me/Qe*ke;G.projectionMatrix.makePerspective(et,It,Rt,F,ke,Qe),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function N(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCameraXR=function(G){if(r===null)return G;C&&(G=C),T.near=_.near=x.near=G.near,T.far=_.far=x.far=G.far,(w!==T.near||y!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),w=T.near,y=T.far);const Z=G.parent,ee=T.cameras;N(T,Z);for(let ne=0;ne<ee.length;ne++)N(ee[ne],Z);return ee.length===2?z(T,x,_):T.projectionMatrix.copy(x.projectionMatrix),C&&W(T,Z),T};function W(G,Z){const ee=C;Z===null?ee.matrix.copy(G.matrixWorld):(ee.matrix.copy(Z.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(G.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0);const ne=ee.children;for(let ie=0,he=ne.length;ie<he;ie++)ne[ie].updateMatrixWorld(!0);ee.projectionMatrix.copy(G.projectionMatrix),ee.projectionMatrixInverse.copy(G.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=mc*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(G){o=G,d!==null&&(d.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)};let V=null;function X(G,Z){if(c=Z.getViewerPose(l||s),g=Z,c!==null){const ee=c.views;h!==null&&(e.setRenderTargetFramebuffer(f,h.framebuffer),e.setRenderTarget(f));let ne=!1;ee.length!==T.cameras.length&&(T.cameras.length=0,ne=!0);for(let ie=0;ie<ee.length;ie++){const he=ee[ie];let Ee=null;if(h!==null)Ee=h.getViewport(he);else{const tt=u.getViewSubImage(d,he);Ee=tt.viewport,ie===0&&(e.setRenderTargetTextures(f,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(f))}let me=E[ie];me===void 0&&(me=new lA,me.layers.enable(ie),me.viewport=new ct,E[ie]=me),me.matrix.fromArray(he.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(he.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ie===0&&(T.matrix.copy(me.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ne===!0&&T.cameras.push(me)}}for(let ee=0;ee<v.length;ee++){const ne=B[ee],ie=v[ee];ne!==null&&ie!==void 0&&ie.update(ne,Z,l||s)}V&&V(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const re=new gg;re.setAnimationLoop(X),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}function NE(A,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,fg(A)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,v,B,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&h(p,f,C)):f.isMeshMatcapMaterial?(i(p,f),g(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),m(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,v,B):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===qt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===qt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const B=A.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*B,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,v,B){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=B*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function h(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function m(p,f){const v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function OE(A,e,t,n){let r={},i={},s=[];const a=t.isWebGL2?A.getParameter(A.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(v,B){const C=B.program;n.uniformBlockBinding(v,C)}function l(v,B){let C=r[v.id];C===void 0&&(g(v),C=c(v),r[v.id]=C,v.addEventListener("dispose",p));const x=B.program;n.updateUBOMapping(v,x);const _=e.render.frame;i[v.id]!==_&&(d(v),i[v.id]=_)}function c(v){const B=u();v.__bindingPointIndex=B;const C=A.createBuffer(),x=v.__size,_=v.usage;return A.bindBuffer(A.UNIFORM_BUFFER,C),A.bufferData(A.UNIFORM_BUFFER,x,_),A.bindBuffer(A.UNIFORM_BUFFER,null),A.bindBufferBase(A.UNIFORM_BUFFER,B,C),C}function u(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const B=r[v.id],C=v.uniforms,x=v.__cache;A.bindBuffer(A.UNIFORM_BUFFER,B);for(let _=0,E=C.length;_<E;_++){const T=C[_];if(h(T,_,x)===!0){const w=T.__offset,y=Array.isArray(T.value)?T.value:[T.value];let I=0;for(let L=0;L<y.length;L++){const U=y[L],Q=m(U);typeof U=="number"?(T.__data[0]=U,A.bufferSubData(A.UNIFORM_BUFFER,w+I,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=U.elements[0],T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=U.elements[0],T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=U.elements[0]):(U.toArray(T.__data,I),I+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}A.bufferSubData(A.UNIFORM_BUFFER,w,T.__data)}}A.bindBuffer(A.UNIFORM_BUFFER,null)}function h(v,B,C){const x=v.value;if(C[B]===void 0){if(typeof x=="number")C[B]=x;else{const _=Array.isArray(x)?x:[x],E=[];for(let T=0;T<_.length;T++)E.push(_[T].clone());C[B]=E}return!0}else if(typeof x=="number"){if(C[B]!==x)return C[B]=x,!0}else{const _=Array.isArray(C[B])?C[B]:[C[B]],E=Array.isArray(x)?x:[x];for(let T=0;T<_.length;T++){const w=_[T];if(w.equals(E[T])===!1)return w.copy(E[T]),!0}}return!1}function g(v){const B=v.uniforms;let C=0;const x=16;let _=0;for(let E=0,T=B.length;E<T;E++){const w=B[E],y={boundary:0,storage:0},I=Array.isArray(w.value)?w.value:[w.value];for(let L=0,U=I.length;L<U;L++){const Q=I[L],D=m(Q);y.boundary+=D.boundary,y.storage+=D.storage}if(w.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=C,E>0){_=C%x;const L=x-_;_!==0&&L-y.boundary<0&&(C+=x-_,w.__offset=C)}C+=y.storage}return _=C%x,_>0&&(C+=x-_),v.__size=C,v.__cache={},this}function m(v){const B={boundary:0,storage:0};return typeof v=="number"?(B.boundary=4,B.storage=4):v.isVector2?(B.boundary=8,B.storage=8):v.isVector3||v.isColor?(B.boundary=16,B.storage=12):v.isVector4?(B.boundary=16,B.storage=16):v.isMatrix3?(B.boundary=48,B.storage=48):v.isMatrix4?(B.boundary=64,B.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),B}function p(v){const B=v.target;B.removeEventListener("dispose",p);const C=s.indexOf(B.__bindingPointIndex);s.splice(C,1),A.deleteBuffer(r[B.id]),delete r[B.id],delete i[B.id]}function f(){for(const v in r)A.deleteBuffer(r[v]);s=[],r={},i={}}return{bind:o,update:l,dispose:f}}function GE(){const A=Ha("canvas");return A.style.display="block",A}class xg{constructor(e={}){const{canvas:t=GE(),context:n=null,depth:r=!0,stencil:i=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;const h=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=He,this.useLegacyLights=!0,this.toneMapping=ln,this.toneMappingExposure=1;const B=this;let C=!1,x=0,_=0,E=null,T=-1,w=null;const y=new ct,I=new ct;let L=null;const U=new Xe(0);let Q=0,D=t.width,z=t.height,N=1,W=null,V=null;const X=new ct(0,0,D,z),re=new ct(0,0,D,z);let G=!1;const Z=new fu;let ee=!1,ne=!1,ie=null;const he=new gt,Ee=new je,me=new P,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return E===null?N:1}let H=n;function Tt(b,k){for(let j=0;j<b.length;j++){const O=b[j],$=t.getContext(O,k);if($!==null)return $}return null}try{const b={alpha:!0,depth:r,stencil:i,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",se,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(B.isWebGL1Renderer===!0&&k.shift(),H=Tt(k,b),H===null)throw Tt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Se,Oe,Me,rt,ke,Qe,et,It,Rt,F,S,Y,te,Ae,le,we,ue,J,xe,Ce,ye,Be,ve,Ge;function At(){Se=new qC(H),Oe=new KC(H,Se,e),Se.init(Oe),Be=new LE(H,Se,Oe),Me=new IE(H,Se,Oe),rt=new t_(H),ke=new BE,Qe=new QE(H,Se,Me,ke,Oe,Be,rt),et=new XC(B),It=new JC(B),Rt=new dw(H,Oe),ve=new kC(H,Se,Rt,Oe),F=new ZC(H,Rt,rt,ve),S=new i_(H,F,Rt,rt),xe=new r_(H,Oe,Qe),we=new WC(ke),Y=new mE(B,et,It,Se,Oe,ve,we),te=new NE(B,ke),Ae=new wE,le=new SE(Se,Oe),J=new VC(B,et,It,Me,S,d,o),ue=new TE(B,S,Oe),Ge=new OE(H,rt,Oe,Me),Ce=new zC(H,Se,rt,Oe),ye=new e_(H,Se,rt,Oe),rt.programs=Y.programs,B.capabilities=Oe,B.extensions=Se,B.properties=ke,B.renderLists=Ae,B.shadowMap=ue,B.state=Me,B.info=rt}At();const R=new PE(B,H);this.xr=R,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=Se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(D,z,!1))},this.getSize=function(b){return b.set(D,z)},this.setSize=function(b,k,j=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,z=k,t.width=Math.floor(b*N),t.height=Math.floor(k*N),j===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(D*N,z*N).floor()},this.setDrawingBufferSize=function(b,k,j){D=b,z=k,N=j,t.width=Math.floor(b*j),t.height=Math.floor(k*j),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(X)},this.setViewport=function(b,k,j,O){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,k,j,O),Me.viewport(y.copy(X).multiplyScalar(N).floor())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,k,j,O){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,k,j,O),Me.scissor(I.copy(re).multiplyScalar(N).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(b){Me.setScissorTest(G=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){V=b},this.getClearColor=function(b){return b.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(b=!0,k=!0,j=!0){let O=0;if(b){let $=!1;if(E!==null){const ge=E.texture.format;$=ge===eg||ge===Zp||ge===qp}if($){const ge=E.texture.type,_e=ge===Fn||ge===_n||ge===uu||ge===qn||ge===$p||ge===Jp,be=J.getClearColor(),Fe=J.getClearAlpha(),Ve=be.r,Te=be.g,Le=be.b,it=ke.get(E).__webglFramebuffer;_e?(h[0]=Ve,h[1]=Te,h[2]=Le,h[3]=Fe,H.clearBufferuiv(H.COLOR,it,h)):(g[0]=Ve,g[1]=Te,g[2]=Le,g[3]=Fe,H.clearBufferiv(H.COLOR,it,g))}else O|=H.COLOR_BUFFER_BIT}k&&(O|=H.DEPTH_BUFFER_BIT),j&&(O|=H.STENCIL_BUFFER_BIT),H.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Ae.dispose(),le.dispose(),ke.dispose(),et.dispose(),It.dispose(),S.dispose(),ve.dispose(),Ge.dispose(),Y.dispose(),R.dispose(),R.removeEventListener("sessionstart",dt),R.removeEventListener("sessionend",LA),ie&&(ie.dispose(),ie=null),Gt.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=rt.autoReset,k=ue.enabled,j=ue.autoUpdate,O=ue.needsUpdate,$=ue.type;At(),rt.autoReset=b,ue.enabled=k,ue.autoUpdate=j,ue.needsUpdate=O,ue.type=$}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function de(b){const k=b.target;k.removeEventListener("dispose",de),We(k)}function We(b){ut(b),ke.remove(b)}function ut(b){const k=ke.get(b).programs;k!==void 0&&(k.forEach(function(j){Y.releaseProgram(j)}),b.isShaderMaterial&&Y.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,j,O,$,ge){k===null&&(k=tt);const _e=$.isMesh&&$.matrixWorld.determinant()<0,be=k0(b,k,j,O,$);Me.setMaterial(O,_e);let Fe=j.index,Ve=1;O.wireframe===!0&&(Fe=F.getWireframeAttribute(j),Ve=2);const Te=j.drawRange,Le=j.attributes.position;let it=Te.start*Ve,ft=(Te.start+Te.count)*Ve;ge!==null&&(it=Math.max(it,ge.start*Ve),ft=Math.min(ft,(ge.start+ge.count)*Ve)),Fe!==null?(it=Math.max(it,0),ft=Math.min(ft,Fe.count)):Le!=null&&(it=Math.max(it,0),ft=Math.min(ft,Le.count));const xA=ft-it;if(xA<0||xA===1/0)return;ve.setup($,O,be,j,Fe);let KA,Bt=Ce;if(Fe!==null&&(KA=Rt.get(Fe),Bt=ye,Bt.setIndex(KA)),$.isMesh)O.wireframe===!0?(Me.setLineWidth(O.wireframeLinewidth*Ue()),Bt.setMode(H.LINES)):Bt.setMode(H.TRIANGLES);else if($.isLine){let Ke=O.linewidth;Ke===void 0&&(Ke=1),Me.setLineWidth(Ke*Ue()),$.isLineSegments?Bt.setMode(H.LINES):$.isLineLoop?Bt.setMode(H.LINE_LOOP):Bt.setMode(H.LINE_STRIP)}else $.isPoints?Bt.setMode(H.POINTS):$.isSprite&&Bt.setMode(H.TRIANGLES);if($.isInstancedMesh)Bt.renderInstances(it,xA,$.count);else if(j.isInstancedBufferGeometry){const Ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,No=Math.min(j.instanceCount,Ke);Bt.renderInstances(it,xA,No)}else Bt.render(it,xA)},this.compile=function(b,k){function j(O,$,ge){O.transparent===!0&&O.side===sn&&O.forceSinglePass===!1?(O.side=qt,O.needsUpdate=!0,ds(O,$,ge),O.side=Qn,O.needsUpdate=!0,ds(O,$,ge),O.side=sn):ds(O,$,ge)}p=le.get(b),p.init(),v.push(p),b.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(B.useLegacyLights),b.traverse(function(O){const $=O.material;if($)if(Array.isArray($))for(let ge=0;ge<$.length;ge++){const _e=$[ge];j(_e,b,O)}else j($,b,O)}),v.pop(),p=null};let mt=null;function Rn(b){mt&&mt(b)}function dt(){Gt.stop()}function LA(){Gt.start()}const Gt=new gg;Gt.setAnimationLoop(Rn),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(b){mt=b,R.setAnimationLoop(b),b===null?Gt.stop():Gt.start()},R.addEventListener("sessionstart",dt),R.addEventListener("sessionend",LA),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(k=R.updateCameraXR(k)),b.isScene===!0&&b.onBeforeRender(B,b,k,E),p=le.get(b,v.length),p.init(),v.push(p),he.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z.setFromProjectionMatrix(he),ne=this.localClippingEnabled,ee=we.init(this.clippingPlanes,ne),m=Ae.get(b,f.length),m.init(),f.push(m),Hu(b,k,0,B.sortObjects),m.finish(),B.sortObjects===!0&&m.sort(W,V),ee===!0&&we.beginShadows();const j=p.state.shadowsArray;if(ue.render(j,b,k),ee===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,J.render(m,b),p.setupLights(B.useLegacyLights),k.isArrayCamera){const O=k.cameras;for(let $=0,ge=O.length;$<ge;$++){const _e=O[$];Pu(m,b,_e,_e.viewport)}}else Pu(m,b,k);E!==null&&(Qe.updateMultisampleRenderTarget(E),Qe.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(B,b,k),ve.resetDefaultState(),T=-1,w=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?m=f[f.length-1]:m=null};function Hu(b,k,j,O){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){O&&me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);const _e=S.update(b),be=b.material;be.visible&&m.push(b,_e,be,j,me.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){b.isSkinnedMesh&&b.skeleton.frame!==rt.render.frame&&(b.skeleton.update(),b.skeleton.frame=rt.render.frame);const _e=S.update(b),be=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),me.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),me.copy(_e.boundingSphere.center)),me.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(be)){const Fe=_e.groups;for(let Ve=0,Te=Fe.length;Ve<Te;Ve++){const Le=Fe[Ve],it=be[Le.materialIndex];it&&it.visible&&m.push(b,_e,it,j,me.z,Le)}}else be.visible&&m.push(b,_e,be,j,me.z,null)}}const ge=b.children;for(let _e=0,be=ge.length;_e<be;_e++)Hu(ge[_e],k,j,O)}function Pu(b,k,j,O){const $=b.opaque,ge=b.transmissive,_e=b.transparent;p.setupLightsView(j),ee===!0&&we.setGlobalState(B.clippingPlanes,j),ge.length>0&&V0($,ge,k,j),O&&Me.viewport(y.copy(O)),$.length>0&&us($,k,j),ge.length>0&&us(ge,k,j),_e.length>0&&us(_e,k,j),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function V0(b,k,j,O){const $=Oe.isWebGL2;ie===null&&(ie=new lr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ji:Fn,minFilter:$i,samples:$&&a===!0?4:0})),B.getDrawingBufferSize(Ee),$?ie.setSize(Ee.x,Ee.y):ie.setSize(Bc(Ee.x),Bc(Ee.y));const ge=B.getRenderTarget();B.setRenderTarget(ie),B.getClearColor(U),Q=B.getClearAlpha(),Q<1&&B.setClearColor(16777215,.5),B.clear();const _e=B.toneMapping;B.toneMapping=ln,us(b,j,O),Qe.updateMultisampleRenderTarget(ie),Qe.updateRenderTargetMipmap(ie);let be=!1;for(let Fe=0,Ve=k.length;Fe<Ve;Fe++){const Te=k[Fe],Le=Te.object,it=Te.geometry,ft=Te.material,xA=Te.group;if(ft.side===sn&&Le.layers.test(O.layers)){const KA=ft.side;ft.side=qt,ft.needsUpdate=!0,Nu(Le,j,O,it,ft,xA),ft.side=KA,ft.needsUpdate=!0,be=!0}}be===!0&&(Qe.updateMultisampleRenderTarget(ie),Qe.updateRenderTargetMipmap(ie)),B.setRenderTarget(ge),B.setClearColor(U,Q),B.toneMapping=_e}function us(b,k,j){const O=k.isScene===!0?k.overrideMaterial:null;for(let $=0,ge=b.length;$<ge;$++){const _e=b[$],be=_e.object,Fe=_e.geometry,Ve=O===null?_e.material:O,Te=_e.group;be.layers.test(j.layers)&&Nu(be,k,j,Fe,Ve,Te)}}function Nu(b,k,j,O,$,ge){b.onBeforeRender(B,k,j,O,$,ge),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(B,k,j,O,b,ge),$.transparent===!0&&$.side===sn&&$.forceSinglePass===!1?($.side=qt,$.needsUpdate=!0,B.renderBufferDirect(j,k,O,$,b,ge),$.side=Qn,$.needsUpdate=!0,B.renderBufferDirect(j,k,O,$,b,ge),$.side=sn):B.renderBufferDirect(j,k,O,$,b,ge),b.onAfterRender(B,k,j,O,$,ge)}function ds(b,k,j){k.isScene!==!0&&(k=tt);const O=ke.get(b),$=p.state.lights,ge=p.state.shadowsArray,_e=$.state.version,be=Y.getParameters(b,$.state,ge,k,j),Fe=Y.getProgramCacheKey(be);let Ve=O.programs;O.environment=b.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(b.isMeshStandardMaterial?It:et).get(b.envMap||O.environment),Ve===void 0&&(b.addEventListener("dispose",de),Ve=new Map,O.programs=Ve);let Te=Ve.get(Fe);if(Te!==void 0){if(O.currentProgram===Te&&O.lightsStateVersion===_e)return Ou(b,be),Te}else be.uniforms=Y.getUniforms(b),b.onBuild(j,be,B),b.onBeforeCompile(be,B),Te=Y.acquireProgram(be,Fe),Ve.set(Fe,Te),O.uniforms=be.uniforms;const Le=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=we.uniform),Ou(b,be),O.needsLights=K0(b),O.lightsStateVersion=_e,O.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.directionalShadowMap.value=$.state.directionalShadowMap,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotShadowMap.value=$.state.spotShadowMap,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMap.value=$.state.pointShadowMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix);const it=Te.getUniforms(),ft=ga.seqWithValue(it.seq,Le);return O.currentProgram=Te,O.uniformsList=ft,Te}function Ou(b,k){const j=ke.get(b);j.outputColorSpace=k.outputColorSpace,j.instancing=k.instancing,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function k0(b,k,j,O,$){k.isScene!==!0&&(k=tt),Qe.resetTextureUnits();const ge=k.fog,_e=O.isMeshStandardMaterial?k.environment:null,be=E===null?B.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:VA,Fe=(O.isMeshStandardMaterial?It:et).get(O.envMap||_e),Ve=O.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Te=!!j.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Le=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,ft=!!j.morphAttributes.color,xA=O.toneMapped?B.toneMapping:ln,KA=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Bt=KA!==void 0?KA.length:0,Ke=ke.get(O),No=p.state.lights;if(ee===!0&&(ne===!0||b!==w)){const eA=b===w&&O.id===T;we.setState(O,b,eA)}let St=!1;O.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==No.state.version||Ke.outputColorSpace!==be||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Fe||O.fog===!0&&Ke.fog!==ge||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==Ve||Ke.vertexTangents!==Te||Ke.morphTargets!==Le||Ke.morphNormals!==it||Ke.morphColors!==ft||Ke.toneMapping!==xA||Oe.isWebGL2===!0&&Ke.morphTargetsCount!==Bt)&&(St=!0):(St=!0,Ke.__version=O.version);let Dn=Ke.currentProgram;St===!0&&(Dn=ds(O,k,$));let Gu=!1,Bi=!1,Oo=!1;const Vt=Dn.getUniforms(),Hn=Ke.uniforms;if(Me.useProgram(Dn.program)&&(Gu=!0,Bi=!0,Oo=!0),O.id!==T&&(T=O.id,Bi=!0),Gu||w!==b){if(Vt.setValue(H,"projectionMatrix",b.projectionMatrix),Oe.logarithmicDepthBuffer&&Vt.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,Bi=!0,Oo=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const eA=Vt.map.cameraPosition;eA!==void 0&&eA.setValue(H,me.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Vt.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||$.isSkinnedMesh)&&Vt.setValue(H,"viewMatrix",b.matrixWorldInverse)}if($.isSkinnedMesh){Vt.setOptional(H,$,"bindMatrix"),Vt.setOptional(H,$,"bindMatrixInverse");const eA=$.skeleton;eA&&(Oe.floatVertexTextures?(eA.boneTexture===null&&eA.computeBoneTexture(),Vt.setValue(H,"boneTexture",eA.boneTexture,Qe),Vt.setValue(H,"boneTextureSize",eA.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Go=j.morphAttributes;if((Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0&&Oe.isWebGL2===!0)&&xe.update($,j,Dn),(Bi||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,Vt.setValue(H,"receiveShadow",$.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Hn.envMap.value=Fe,Hn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Bi&&(Vt.setValue(H,"toneMappingExposure",B.toneMappingExposure),Ke.needsLights&&z0(Hn,Oo),ge&&O.fog===!0&&te.refreshFogUniforms(Hn,ge),te.refreshMaterialUniforms(Hn,O,N,z,ie),ga.upload(H,Ke.uniformsList,Hn,Qe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ga.upload(H,Ke.uniformsList,Hn,Qe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Vt.setValue(H,"center",$.center),Vt.setValue(H,"modelViewMatrix",$.modelViewMatrix),Vt.setValue(H,"normalMatrix",$.normalMatrix),Vt.setValue(H,"modelMatrix",$.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const eA=O.uniformsGroups;for(let Vo=0,W0=eA.length;Vo<W0;Vo++)if(Oe.isWebGL2){const Vu=eA[Vo];Ge.update(Vu,Dn),Ge.bind(Vu,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function z0(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function K0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,k,j){ke.get(b.texture).__webglTexture=k,ke.get(b.depthTexture).__webglTexture=j;const O=ke.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=j===void 0,O.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const j=ke.get(b);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,j=0){E=b,x=k,_=j;let O=!0,$=null,ge=!1,_e=!1;if(b){const Fe=ke.get(b);Fe.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(H.FRAMEBUFFER,null),O=!1):Fe.__webglFramebuffer===void 0?Qe.setupRenderTarget(b):Fe.__hasExternalTextures&&Qe.rebindTextures(b,ke.get(b.texture).__webglTexture,ke.get(b.depthTexture).__webglTexture);const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(_e=!0);const Te=ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?($=Te[k],ge=!0):Oe.isWebGL2&&b.samples>0&&Qe.useMultisampledRTT(b)===!1?$=ke.get(b).__webglMultisampledFramebuffer:$=Te,y.copy(b.viewport),I.copy(b.scissor),L=b.scissorTest}else y.copy(X).multiplyScalar(N).floor(),I.copy(re).multiplyScalar(N).floor(),L=G;if(Me.bindFramebuffer(H.FRAMEBUFFER,$)&&Oe.drawBuffers&&O&&Me.drawBuffers(b,$),Me.viewport(y),Me.scissor(I),Me.setScissorTest(L),ge){const Fe=ke.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Fe.__webglTexture,j)}else if(_e){const Fe=ke.get(b.texture),Ve=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,j||0,Ve)}T=-1},this.readRenderTargetPixels=function(b,k,j,O,$,ge,_e){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){Me.bindFramebuffer(H.FRAMEBUFFER,be);try{const Fe=b.texture,Ve=Fe.format,Te=Fe.type;if(Ve!==MA&&Be.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Te===Ji&&(Se.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Te!==Fn&&Be.convert(Te)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Te===En&&(Oe.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-O&&j>=0&&j<=b.height-$&&H.readPixels(k,j,O,$,Be.convert(Ve),Be.convert(Te),ge)}finally{const Fe=E!==null?ke.get(E).__webglFramebuffer:null;Me.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(b,k,j=0){const O=Math.pow(2,-j),$=Math.floor(k.image.width*O),ge=Math.floor(k.image.height*O);Qe.setTexture2D(k,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,b.x,b.y,$,ge),Me.unbindTexture()},this.copyTextureToTexture=function(b,k,j,O=0){const $=k.image.width,ge=k.image.height,_e=Be.convert(j.format),be=Be.convert(j.type);Qe.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,O,b.x,b.y,$,ge,_e,be,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,O,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,_e,k.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,O,b.x,b.y,_e,be,k.image),O===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,k,j,O,$=0){if(B.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=b.max.x-b.min.x+1,_e=b.max.y-b.min.y+1,be=b.max.z-b.min.z+1,Fe=Be.convert(O.format),Ve=Be.convert(O.type);let Te;if(O.isData3DTexture)Qe.setTexture3D(O,0),Te=H.TEXTURE_3D;else if(O.isDataArrayTexture)Qe.setTexture2DArray(O,0),Te=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);const Le=H.getParameter(H.UNPACK_ROW_LENGTH),it=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ft=H.getParameter(H.UNPACK_SKIP_PIXELS),xA=H.getParameter(H.UNPACK_SKIP_ROWS),KA=H.getParameter(H.UNPACK_SKIP_IMAGES),Bt=j.isCompressedTexture?j.mipmaps[0]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,b.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,b.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,b.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(Te,$,k.x,k.y,k.z,ge,_e,be,Fe,Ve,Bt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Te,$,k.x,k.y,k.z,ge,_e,be,Fe,Bt.data)):H.texSubImage3D(Te,$,k.x,k.y,k.z,ge,_e,be,Fe,Ve,Bt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Le),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,it),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ft),H.pixelStorei(H.UNPACK_SKIP_ROWS,xA),H.pixelStorei(H.UNPACK_SKIP_IMAGES,KA),$===0&&O.generateMipmaps&&H.generateMipmap(Te),Me.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Qe.setTextureCube(b,0):b.isData3DTexture?Qe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Qe.setTexture2DArray(b,0):Qe.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){x=0,_=0,E=null,Me.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===He?er:tg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===er?He:VA}}class VE extends xg{}VE.prototype.isWebGL1Renderer=!0;class kE extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Cg extends fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pf=new P,gf=new P,mf=new gt,Bl=new ag,Rs=new uo;class zE extends Wt{constructor(e=new dn,t=new Cg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,i=t.count;r<i;r++)pf.fromBufferAttribute(t,r-1),gf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=pf.distanceTo(gf);e.setAttribute("lineDistance",new GA(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),Rs.radius+=i,e.ray.intersectsSphere(Rs)===!1)return;mf.copy(r).invert(),Bl.copy(e.ray).applyMatrix4(mf);const a=i/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new P,c=new P,u=new P,d=new P,h=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,s.start),v=Math.min(g.count,s.start+s.count);for(let B=f,C=v-1;B<C;B+=h){const x=g.getX(B),_=g.getX(B+1);if(l.fromBufferAttribute(p,x),c.fromBufferAttribute(p,_),Bl.distanceSqToSegment(l,c,d,u)>o)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:B,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),v=Math.min(p.count,s.start+s.count);for(let B=f,C=v-1;B<C;B+=h){if(l.fromBufferAttribute(p,B),c.fromBufferAttribute(p,B+1),Bl.distanceSqToSegment(l,c,d,u)>o)continue;d.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:B,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){const a=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}}const Bf=new P,vf=new P;class KE extends zE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,i=t.count;r<i;r+=2)Bf.fromBufferAttribute(t,r),vf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bf.distanceTo(vf);e.setAttribute("lineDistance",new GA(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Ds=new P,Hs=new P,vl=new P,Ps=new pA;class WE extends dn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),i=Math.cos(pa*t),s=e.getIndex(),a=e.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],c=["a","b","c"],u=new Array(3),d={},h=[];for(let g=0;g<o;g+=3){s?(l[0]=s.getX(g),l[1]=s.getX(g+1),l[2]=s.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:m,b:p,c:f}=Ps;if(m.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),Ps.getNormal(vl),u[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const B=(v+1)%3,C=u[v],x=u[B],_=Ps[c[v]],E=Ps[c[B]],T=`${C}_${x}`,w=`${x}_${C}`;w in d&&d[w]?(vl.dot(d[w].normal)<=i&&(h.push(_.x,_.y,_.z),h.push(E.x,E.y,E.z)),d[w]=null):T in d||(d[T]={index0:l[v],index1:l[B],normal:vl.clone()})}}for(const g in d)if(d[g]){const{index0:m,index1:p}=d[g];Ds.fromBufferAttribute(a,m),Hs.fromBufferAttribute(a,p),h.push(Ds.x,Ds.y,Ds.z),h.push(Hs.x,Hs.y,Hs.z)}this.setAttribute("position",new GA(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class XE extends fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jE extends fr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _g extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const wl=new gt,wf=new P,xf=new P;class YE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fu,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(wf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cf=new gt,_i=new P,xl=new P;class $E extends YE{constructor(){super(new lA(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),_i.setFromMatrixPosition(e.matrixWorld),n.position.copy(_i),xl.copy(n.position),xl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xl),n.updateMatrixWorld(),r.makeTranslation(-_i.x,-_i.y,-_i.z),Cf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cf)}}class JE extends _g{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new $E}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qE extends _g{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);const ZE=({})=>{const A=q.useRef();return q.useEffect(()=>{if(!A.current)return;const e=new kE,t=new lA(100,window.innerWidth/window.innerHeight,.1,1e3),n=new xg;n.setSize(window.innerWidth,window.innerHeight),A.current.appendChild(n.domElement);const i=[[-8,0,0],[-7,0,0],[-6,0,0],[-5,0,0],[-4,0,0],[-3,0,0],[-2,0,0],[-1,0,0],[0,0,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0],[5,0,0],[6,0,0],[7,0,0],[8,0,0]].map(d=>{const h=new cr(.1,10,10),g=new WE(h),m=new XE({color:"#82ADF4",metalness:.23}),p=new NA(h,m);p.position.set(d[0],d[1],d[2]),e.add(p);const f=new KE(g,new Cg({color:"transparent"}));return p.add(f),p}),s=new cr(5,5,5),a=new jE({color:"blue",opacity:0,transparent:!0}),o=new NA(s,a);e.add(o);const l=new qE;e.add(l);const c=new JE;c.position.set(10,10,10),e.add(c),t.position.z=10;function u(){requestAnimationFrame(u),i.forEach(d=>{d.rotation.x+=.01}),n.render(e,t)}return u(),()=>{A.current.removeChild(n.domElement)}},[]),M.jsx("div",{ref:A})},ey=({})=>M.jsx("div",{children:M.jsx(ZE,{})});var $t=function(){return $t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},$t.apply(this,arguments)};function Pa(A,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,i;n<r;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return A.concat(i||Array.prototype.slice.call(e))}var st="-ms-",Gi="-moz-",$e="-webkit-",Eg="comm",po="rule",gu="decl",ty="@import",yg="@keyframes",Ay="@layer",Sg=Math.abs,mu=String.fromCharCode,wc=Object.assign;function ny(A,e){return Mt(A,0)^45?(((e<<2^Mt(A,0))<<2^Mt(A,1))<<2^Mt(A,2))<<2^Mt(A,3):0}function bg(A){return A.trim()}function nn(A,e){return(A=e.exec(A))?A[0]:A}function Re(A,e,t){return A.replace(e,t)}function ma(A,e,t){return A.indexOf(e,t)}function Mt(A,e){return A.charCodeAt(e)|0}function ti(A,e,t){return A.slice(e,t)}function HA(A){return A.length}function Ug(A){return A.length}function Fi(A,e){return e.push(A),A}function ry(A,e){return A.map(e).join("")}function _f(A,e){return A.filter(function(t){return!nn(t,e)})}var go=1,Ai=1,Mg=0,vA=0,wt=0,hi="";function mo(A,e,t,n,r,i,s,a){return{value:A,root:e,parent:t,type:n,props:r,children:i,line:go,column:Ai,length:s,return:"",siblings:a}}function mn(A,e){return wc(mo("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Fr(A){for(;A.root;)A=mn(A.root,{children:[A]});Fi(A,A.siblings)}function iy(){return wt}function sy(){return wt=vA>0?Mt(hi,--vA):0,Ai--,wt===10&&(Ai=1,go--),wt}function TA(){return wt=vA<Mg?Mt(hi,vA++):0,Ai++,wt===10&&(Ai=1,go++),wt}function Ar(){return Mt(hi,vA)}function Ba(){return vA}function Bo(A,e){return ti(hi,A,e)}function xc(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ay(A){return go=Ai=1,Mg=HA(hi=A),vA=0,[]}function oy(A){return hi="",A}function Cl(A){return bg(Bo(vA-1,Cc(A===91?A+2:A===40?A+1:A)))}function ly(A){for(;(wt=Ar())&&wt<33;)TA();return xc(A)>2||xc(wt)>3?"":" "}function cy(A,e){for(;--e&&TA()&&!(wt<48||wt>102||wt>57&&wt<65||wt>70&&wt<97););return Bo(A,Ba()+(e<6&&Ar()==32&&TA()==32))}function Cc(A){for(;TA();)switch(wt){case A:return vA;case 34:case 39:A!==34&&A!==39&&Cc(wt);break;case 40:A===41&&Cc(A);break;case 92:TA();break}return vA}function uy(A,e){for(;TA()&&A+wt!==57;)if(A+wt===84&&Ar()===47)break;return"/*"+Bo(e,vA-1)+"*"+mu(A===47?A:TA())}function dy(A){for(;!xc(Ar());)TA();return Bo(A,vA)}function fy(A){return oy(va("",null,null,null,[""],A=ay(A),0,[0],A))}function va(A,e,t,n,r,i,s,a,o){for(var l=0,c=0,u=s,d=0,h=0,g=0,m=1,p=1,f=1,v=0,B="",C=r,x=i,_=n,E=B;p;)switch(g=v,v=TA()){case 40:if(g!=108&&Mt(E,u-1)==58){ma(E+=Re(Cl(v),"&","&\f"),"&\f",Sg(l?a[l-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:E+=Cl(v);break;case 9:case 10:case 13:case 32:E+=ly(g);break;case 92:E+=cy(Ba()-1,7);continue;case 47:switch(Ar()){case 42:case 47:Fi(hy(uy(TA(),Ba()),e,t,o),o);break;default:E+="/"}break;case 123*m:a[l++]=HA(E)*f;case 125*m:case 59:case 0:switch(v){case 0:case 125:p=0;case 59+c:f==-1&&(E=Re(E,/\f/g,"")),h>0&&HA(E)-u&&Fi(h>32?yf(E+";",n,t,u-1,o):yf(Re(E," ","")+";",n,t,u-2,o),o);break;case 59:E+=";";default:if(Fi(_=Ef(E,e,t,l,c,r,a,B,C=[],x=[],u,i),i),v===123)if(c===0)va(E,e,_,_,C,i,u,a,x);else switch(d===99&&Mt(E,3)===110?100:d){case 100:case 108:case 109:case 115:va(A,_,_,n&&Fi(Ef(A,_,_,0,0,r,a,B,r,C=[],u,x),x),r,x,u,a,n?C:x);break;default:va(E,_,_,_,[""],x,0,a,x)}}l=c=h=0,m=f=1,B=E="",u=s;break;case 58:u=1+HA(E),h=g;default:if(m<1){if(v==123)--m;else if(v==125&&m++==0&&sy()==125)continue}switch(E+=mu(v),v*m){case 38:f=c>0?1:(E+="\f",-1);break;case 44:a[l++]=(HA(E)-1)*f,f=1;break;case 64:Ar()===45&&(E+=Cl(TA())),d=Ar(),c=u=HA(B=E+=dy(Ba())),v++;break;case 45:g===45&&HA(E)==2&&(m=0)}}return i}function Ef(A,e,t,n,r,i,s,a,o,l,c,u){for(var d=r-1,h=r===0?i:[""],g=Ug(h),m=0,p=0,f=0;m<n;++m)for(var v=0,B=ti(A,d+1,d=Sg(p=s[m])),C=A;v<g;++v)(C=bg(p>0?h[v]+" "+B:Re(B,/&\f/g,h[v])))&&(o[f++]=C);return mo(A,e,t,r===0?po:a,o,l,c,u)}function hy(A,e,t,n){return mo(A,e,t,Eg,mu(iy()),ti(A,2,-2),0,n)}function yf(A,e,t,n,r){return mo(A,e,t,gu,ti(A,0,n),ti(A,n+1,-1),n,r)}function Fg(A,e,t){switch(ny(A,e)){case 5103:return $e+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $e+A+A;case 4789:return Gi+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return $e+A+Gi+A+st+A+A;case 5936:switch(Mt(A,e+11)){case 114:return $e+A+st+Re(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return $e+A+st+Re(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return $e+A+st+Re(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return $e+A+st+A+A;case 6165:return $e+A+st+"flex-"+A+A;case 5187:return $e+A+Re(A,/(\w+).+(:[^]+)/,$e+"box-$1$2"+st+"flex-$1$2")+A;case 5443:return $e+A+st+"flex-item-"+Re(A,/flex-|-self/g,"")+(nn(A,/flex-|baseline/)?"":st+"grid-row-"+Re(A,/flex-|-self/g,""))+A;case 4675:return $e+A+st+"flex-line-pack"+Re(A,/align-content|flex-|-self/g,"")+A;case 5548:return $e+A+st+Re(A,"shrink","negative")+A;case 5292:return $e+A+st+Re(A,"basis","preferred-size")+A;case 6060:return $e+"box-"+Re(A,"-grow","")+$e+A+st+Re(A,"grow","positive")+A;case 4554:return $e+Re(A,/([^-])(transform)/g,"$1"+$e+"$2")+A;case 6187:return Re(Re(Re(A,/(zoom-|grab)/,$e+"$1"),/(image-set)/,$e+"$1"),A,"")+A;case 5495:case 3959:return Re(A,/(image-set\([^]*)/,$e+"$1$`$1");case 4968:return Re(Re(A,/(.+:)(flex-)?(.*)/,$e+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$e+A+A;case 4200:if(!nn(A,/flex-|baseline/))return st+"grid-column-align"+ti(A,e)+A;break;case 2592:case 3360:return st+Re(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(n,r){return e=r,nn(n.props,/grid-\w+-end/)})?~ma(A+(t=t[e].value),"span",0)?A:st+Re(A,"-start","")+A+st+"grid-row-span:"+(~ma(t,"span",0)?nn(t,/\d+/):+nn(t,/\d+/)-+nn(A,/\d+/))+";":st+Re(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(n){return nn(n.props,/grid-\w+-start/)})?A:st+Re(Re(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return Re(A,/(.+)-inline(.+)/,$e+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(HA(A)-1-e>6)switch(Mt(A,e+1)){case 109:if(Mt(A,e+4)!==45)break;case 102:return Re(A,/(.+:)(.+)-([^]+)/,"$1"+$e+"$2-$3$1"+Gi+(Mt(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~ma(A,"stretch",0)?Fg(Re(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return Re(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,r,i,s,a,o,l){return st+r+":"+i+l+(s?st+r+"-span:"+(a?o:+o-+i)+l:"")+A});case 4949:if(Mt(A,e+6)===121)return Re(A,":",":"+$e)+A;break;case 6444:switch(Mt(A,Mt(A,14)===45?18:11)){case 120:return Re(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$e+(Mt(A,14)===45?"inline-":"")+"box$3$1"+$e+"$2$3$1"+st+"$2box$3")+A;case 100:return Re(A,":",":"+st)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Re(A,"scroll-","scroll-snap-")+A}return A}function Na(A,e){for(var t="",n=0;n<A.length;n++)t+=e(A[n],n,A,e)||"";return t}function py(A,e,t,n){switch(A.type){case Ay:if(A.children.length)break;case ty:case gu:return A.return=A.return||A.value;case Eg:return"";case yg:return A.return=A.value+"{"+Na(A.children,n)+"}";case po:if(!HA(A.value=A.props.join(",")))return""}return HA(t=Na(A.children,n))?A.return=A.value+"{"+t+"}":""}function gy(A){var e=Ug(A);return function(t,n,r,i){for(var s="",a=0;a<e;a++)s+=A[a](t,n,r,i)||"";return s}}function my(A){return function(e){e.root||(e=e.return)&&A(e)}}function By(A,e,t,n){if(A.length>-1&&!A.return)switch(A.type){case gu:A.return=Fg(A.value,A.length,t);return;case yg:return Na([mn(A,{value:Re(A.value,"@","@"+$e)})],n);case po:if(A.length)return ry(t=A.props,function(r){switch(nn(r,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fr(mn(A,{props:[Re(r,/:(read-\w+)/,":"+Gi+"$1")]})),Fr(mn(A,{props:[r]})),wc(A,{props:_f(t,n)});break;case"::placeholder":Fr(mn(A,{props:[Re(r,/:(plac\w+)/,":"+$e+"input-$1")]})),Fr(mn(A,{props:[Re(r,/:(plac\w+)/,":"+Gi+"$1")]})),Fr(mn(A,{props:[Re(r,/:(plac\w+)/,st+"input-$1")]})),Fr(mn(A,{props:[r]})),wc(A,{props:_f(t,n)});break}return""})}}var vy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sA={},ni=typeof process<"u"&&sA!==void 0&&(sA.REACT_APP_SC_ATTR||sA.SC_ATTR)||"data-styled",Tg="active",Ig="data-styled-version",vo="6.1.8",Bu=`/*!sc*/
`,vu=typeof window<"u"&&"HTMLElement"in window,wy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&sA!==void 0&&sA.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&sA.REACT_APP_SC_DISABLE_SPEEDY!==""?sA.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&sA.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&sA!==void 0&&sA.SC_DISABLE_SPEEDY!==void 0&&sA.SC_DISABLE_SPEEDY!==""&&sA.SC_DISABLE_SPEEDY!=="false"&&sA.SC_DISABLE_SPEEDY),wo=Object.freeze([]),ri=Object.freeze({});function xy(A,e,t){return t===void 0&&(t=ri),A.theme!==t.theme&&A.theme||e||t.theme}var Qg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_y=/(^-|-$)/g;function Sf(A){return A.replace(Cy,"-").replace(_y,"")}var Ey=/(a)(d)/gi,Ns=52,bf=function(A){return String.fromCharCode(A+(A>25?39:97))};function _c(A){var e,t="";for(e=Math.abs(A);e>Ns;e=e/Ns|0)t=bf(e%Ns)+t;return(bf(e%Ns)+t).replace(Ey,"$1-$2")}var _l,Lg=5381,kr=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},Rg=function(A){return kr(Lg,A)};function yy(A){return _c(Rg(A)>>>0)}function Sy(A){return A.displayName||A.name||"Component"}function El(A){return typeof A=="string"&&!0}var Dg=typeof Symbol=="function"&&Symbol.for,Hg=Dg?Symbol.for("react.memo"):60115,by=Dg?Symbol.for("react.forward_ref"):60112,Uy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},My={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fy=((_l={})[by]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_l[Hg]=Pg,_l);function Uf(A){return("type"in(e=A)&&e.type.$$typeof)===Hg?Pg:"$$typeof"in A?Fy[A.$$typeof]:Uy;var e}var Ty=Object.defineProperty,Iy=Object.getOwnPropertyNames,Mf=Object.getOwnPropertySymbols,Qy=Object.getOwnPropertyDescriptor,Ly=Object.getPrototypeOf,Ff=Object.prototype;function Ng(A,e,t){if(typeof e!="string"){if(Ff){var n=Ly(e);n&&n!==Ff&&Ng(A,n,t)}var r=Iy(e);Mf&&(r=r.concat(Mf(e)));for(var i=Uf(A),s=Uf(e),a=0;a<r.length;++a){var o=r[a];if(!(o in My||t&&t[o]||s&&o in s||i&&o in i)){var l=Qy(e,o);try{Ty(A,o,l)}catch{}}}}return A}function ii(A){return typeof A=="function"}function wu(A){return typeof A=="object"&&"styledComponentId"in A}function Yn(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function Tf(A,e){if(A.length===0)return"";for(var t=A[0],n=1;n<A.length;n++)t+=e?e+A[n]:A[n];return t}function qi(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function Ec(A,e,t){if(t===void 0&&(t=!1),!t&&!qi(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)A[n]=Ec(A[n],e[n]);else if(qi(e))for(var n in e)A[n]=Ec(A[n],e[n]);return A}function xu(A,e){Object.defineProperty(A,"toString",{value:e})}function as(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Ry=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw as(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=r;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),o=(s=0,t.length);s<o;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,s=r;s<i;s++)t+="".concat(this.tag.getRule(s)).concat(Bu);return t},A}(),wa=new Map,Oa=new Map,xa=1,Os=function(A){if(wa.has(A))return wa.get(A);for(;Oa.has(xa);)xa++;var e=xa++;return wa.set(A,e),Oa.set(e,A),e},Dy=function(A,e){xa=e+1,wa.set(A,e),Oa.set(e,A)},Hy="style[".concat(ni,"][").concat(Ig,'="').concat(vo,'"]'),Py=new RegExp("^".concat(ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ny=function(A,e,t){for(var n,r=t.split(","),i=0,s=r.length;i<s;i++)(n=r[i])&&A.registerName(e,n)},Oy=function(A,e){for(var t,n=((t=e.textContent)!==null&&t!==void 0?t:"").split(Bu),r=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var o=a.match(Py);if(o){var l=0|parseInt(o[1],10),c=o[2];l!==0&&(Dy(c,l),Ny(A,c,o[3]),A.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}};function Gy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Og=function(A){var e=document.head,t=A||e,n=document.createElement("style"),r=function(a){var o=Array.from(a.querySelectorAll("style[".concat(ni,"]")));return o[o.length-1]}(t),i=r!==void 0?r.nextSibling:null;n.setAttribute(ni,Tg),n.setAttribute(Ig,vo);var s=Gy();return s&&n.setAttribute("nonce",s),t.insertBefore(n,i),n},Vy=function(){function A(e){this.element=Og(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var n=document.styleSheets,r=0,i=n.length;r<i;r++){var s=n[r];if(s.ownerNode===t)return s}throw as(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),ky=function(){function A(e){this.element=Og(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),zy=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),If=vu,Ky={isServer:!vu,useCSSOMInjection:!wy},Gg=function(){function A(e,t,n){e===void 0&&(e=ri),t===void 0&&(t={});var r=this;this.options=$t($t({},Ky),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&vu&&If&&(If=!1,function(i){for(var s=document.querySelectorAll(Hy),a=0,o=s.length;a<o;a++){var l=s[a];l&&l.getAttribute(ni)!==Tg&&(Oy(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),xu(this,function(){return function(i){for(var s=i.getTag(),a=s.length,o="",l=function(u){var d=function(f){return Oa.get(f)}(u);if(d===void 0)return"continue";var h=i.names.get(d),g=s.getGroup(u);if(h===void 0||g.length===0)return"continue";var m="".concat(ni,".g").concat(u,'[id="').concat(d,'"]'),p="";h!==void 0&&h.forEach(function(f){f.length>0&&(p+="".concat(f,","))}),o+="".concat(g).concat(m,'{content:"').concat(p,'"}').concat(Bu)},c=0;c<a;c++)l(c);return o}(r)})}return A.registerId=function(e){return Os(e)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A($t($t({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var n=t.useCSSOMInjection,r=t.target;return t.isServer?new zy(r):n?new Vy(r):new ky(r)}(this.options),new Ry(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(Os(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},A.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Os(e),n)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(Os(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),Wy=/&/g,Xy=/^\s*\/\/.*$/gm;function Vg(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Vg(t.children,e)),t})}function jy(A){var e,t,n,r=A===void 0?ri:A,i=r.options,s=i===void 0?ri:i,a=r.plugins,o=a===void 0?wo:a,l=function(d,h,g){return g.startsWith(t)&&g.endsWith(t)&&g.replaceAll(t,"").length>0?".".concat(e):d},c=o.slice();c.push(function(d){d.type===po&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Wy,t).replace(n,l))}),s.prefix&&c.push(By),c.push(py);var u=function(d,h,g,m){h===void 0&&(h=""),g===void 0&&(g=""),m===void 0&&(m="&"),e=m,t=h,n=new RegExp("\\".concat(t,"\\b"),"g");var p=d.replace(Xy,""),f=fy(g||h?"".concat(g," ").concat(h," { ").concat(p," }"):p);s.namespace&&(f=Vg(f,s.namespace));var v=[];return Na(f,gy(c.concat(my(function(B){return v.push(B)})))),v};return u.hash=o.length?o.reduce(function(d,h){return h.name||as(15),kr(d,h.name)},Lg).toString():"",u}var Yy=new Gg,yc=jy(),kg=Ye.createContext({shouldForwardProp:void 0,styleSheet:Yy,stylis:yc});kg.Consumer;Ye.createContext(void 0);function Qf(){return q.useContext(kg)}var $y=function(){function A(e,t){var n=this;this.inject=function(r,i){i===void 0&&(i=yc);var s=n.name+i.hash;r.hasNameForId(n.id,s)||r.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,xu(this,function(){throw as(12,String(n.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=yc),this.name+e.hash},A}(),Jy=function(A){return A>="A"&&A<="Z"};function Lf(A){for(var e="",t=0;t<A.length;t++){var n=A[t];if(t===1&&n==="-"&&A[0]==="-")return A;Jy(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var zg=function(A){return A==null||A===!1||A===""},Kg=function(A){var e,t,n=[];for(var r in A){var i=A[r];A.hasOwnProperty(r)&&!zg(i)&&(Array.isArray(i)&&i.isCss||ii(i)?n.push("".concat(Lf(r),":"),i,";"):qi(i)?n.push.apply(n,Pa(Pa(["".concat(r," {")],Kg(i),!1),["}"],!1)):n.push("".concat(Lf(r),": ").concat((e=r,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in vy||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return n};function nr(A,e,t,n){if(zg(A))return[];if(wu(A))return[".".concat(A.styledComponentId)];if(ii(A)){if(!ii(i=A)||i.prototype&&i.prototype.isReactComponent||!e)return[A];var r=A(e);return nr(r,e,t,n)}var i;return A instanceof $y?t?(A.inject(t,n),[A.getName(n)]):[A]:qi(A)?Kg(A):Array.isArray(A)?Array.prototype.concat.apply(wo,A.map(function(s){return nr(s,e,t,n)})):[A.toString()]}function qy(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(ii(t)&&!wu(t))return!1}return!0}var Zy=Rg(vo),eS=function(){function A(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&qy(e),this.componentId=t,this.baseHash=kr(Zy,t),this.baseStyle=n,Gg.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Yn(r,this.staticRulesId);else{var i=Tf(nr(this.rules,e,t,n)),s=_c(kr(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,a)}r=Yn(r,s),this.staticRulesId=s}else{for(var o=kr(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var d=Tf(nr(u,e,t,n));o=kr(o,d+c),l+=d}}if(l){var h=_c(o>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),r=Yn(r,h)}}return r},A}(),Wg=Ye.createContext(void 0);Wg.Consumer;var yl={};function tS(A,e,t){var n=wu(A),r=A,i=!El(A),s=e.attrs,a=s===void 0?wo:s,o=e.componentId,l=o===void 0?function(C,x){var _=typeof C!="string"?"sc":Sf(C);yl[_]=(yl[_]||0)+1;var E="".concat(_,"-").concat(yy(vo+_+yl[_]));return x?"".concat(x,"-").concat(E):E}(e.displayName,e.parentComponentId):o,c=e.displayName,u=c===void 0?function(C){return El(C)?"styled.".concat(C):"Styled(".concat(Sy(C),")")}(A):c,d=e.displayName&&e.componentId?"".concat(Sf(e.displayName),"-").concat(e.componentId):e.componentId||l,h=n&&r.attrs?r.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(n&&r.shouldForwardProp){var m=r.shouldForwardProp;if(e.shouldForwardProp){var p=e.shouldForwardProp;g=function(C,x){return m(C,x)&&p(C,x)}}else g=m}var f=new eS(t,d,n?r.componentStyle:void 0);function v(C,x){return function(_,E,T){var w=_.attrs,y=_.componentStyle,I=_.defaultProps,L=_.foldedComponentIds,U=_.styledComponentId,Q=_.target,D=Ye.useContext(Wg),z=Qf(),N=_.shouldForwardProp||z.shouldForwardProp,W=xy(E,D,I)||ri,V=function(ne,ie,he){for(var Ee,me=$t($t({},ie),{className:void 0,theme:he}),tt=0;tt<ne.length;tt+=1){var Ue=ii(Ee=ne[tt])?Ee(me):Ee;for(var H in Ue)me[H]=H==="className"?Yn(me[H],Ue[H]):H==="style"?$t($t({},me[H]),Ue[H]):Ue[H]}return ie.className&&(me.className=Yn(me.className,ie.className)),me}(w,E,W),X=V.as||Q,re={};for(var G in V)V[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&V.theme===W||(G==="forwardedAs"?re.as=V.forwardedAs:N&&!N(G,X)||(re[G]=V[G]));var Z=function(ne,ie){var he=Qf(),Ee=ne.generateAndInjectStyles(ie,he.styleSheet,he.stylis);return Ee}(y,V),ee=Yn(L,U);return Z&&(ee+=" "+Z),V.className&&(ee+=" "+V.className),re[El(X)&&!Qg.has(X)?"class":"className"]=ee,re.ref=T,q.createElement(X,re)}(B,C,x)}v.displayName=u;var B=Ye.forwardRef(v);return B.attrs=h,B.componentStyle=f,B.displayName=u,B.shouldForwardProp=g,B.foldedComponentIds=n?Yn(r.foldedComponentIds,r.styledComponentId):"",B.styledComponentId=d,B.target=n?r.target:A,Object.defineProperty(B,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=n?function(x){for(var _=[],E=1;E<arguments.length;E++)_[E-1]=arguments[E];for(var T=0,w=_;T<w.length;T++)Ec(x,w[T],!0);return x}({},r.defaultProps,C):C}}),xu(B,function(){return".".concat(B.styledComponentId)}),i&&Ng(B,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),B}function Rf(A,e){for(var t=[A[0]],n=0,r=e.length;n<r;n+=1)t.push(e[n],A[n+1]);return t}var Df=function(A){return Object.assign(A,{isCss:!0})};function AS(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ii(A)||qi(A))return Df(nr(Rf(wo,Pa([A],e,!0))));var n=A;return e.length===0&&n.length===1&&typeof n[0]=="string"?nr(n):Df(nr(Rf(n,e)))}function Sc(A,e,t){if(t===void 0&&(t=ri),!e)throw as(1,e);var n=function(r){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return A(e,t,AS.apply(void 0,Pa([r],i,!1)))};return n.attrs=function(r){return Sc(A,e,$t($t({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},n.withConfig=function(r){return Sc(A,e,$t($t({},t),r))},n}var Xg=function(A){return Sc(tS,A)},Ie=Xg;Qg.forEach(function(A){Ie[A]=Xg(A)});const Ga=({children:A,style:e,className:t})=>M.jsx(nS,{className:t,style:e,children:A}),nS=Ie.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`,rS=({direction:A="row",size:e=1,lang:t="100%",margin:n=0,type:r="solid",color:i="var(--color-border-1)",content:s,align:a="center",style:o,className:l=""})=>M.jsxs(iS,{className:`land-divider ${l}`,style:{width:A==="row"?`${t}`:`${e}px`,height:A==="column"?`${t}`:`${e}px`,margin:A==="row"?`${n}px 0`:`0 ${n}px`,...o},direction:A,gap:s?"8px":"",children:[M.jsx("div",{style:{flex:a==="left"?"10%":a==="right"?"90%":1,height:"0px",borderBottom:A==="row"?`${e}px ${r} ${i}`:"none",borderLeft:A==="column"?`${e}px ${r} ${i}`:"none"}}),s&&M.jsxs(M.Fragment,{children:[M.jsx("div",{style:{fontSize:"12px",color:"#999",writingMode:A==="column"?"vertical-rl":"unset",textOrientation:A==="column"?"upright":"unset"},children:s}),M.jsx("div",{style:{flex:a==="left"?"90%":a==="right"?"10%":1,height:"0px",borderBottom:A==="row"?`${e}px ${r} ${i}`:"none",borderLeft:A==="column"?`${e}px ${r} ${i}`:"none"}})]})]}),iS=Ie.div`
  display: flex;
  flex-direction: ${A=>A.direction};
  align-items: center;
  gap: ${A=>A.gap};
`;var Zi=(A=>(A.SELF="self",A.OTHERS="others",A.SIMPLE="simple",A.DISABLED="disabled",A))(Zi||{});const sS=({actived:A,data:e,direction:t="row",theme:n="dot",border:r=!0,itemStyle:i,itemClassName:s,handleChangeTab:a,style:o,className:l})=>M.jsx(aS,{className:`land-menu ${l}`,style:o,direction:t,border:r,children:e==null?void 0:e.map(c=>M.jsx("div",{className:`land-nav-item ${c.clickType==="simple"?"simple":""} ${c.clickType==="disabled"?"disabled":""} ${A===c.key?"actived":""} ${n}`,children:M.jsxs("a",{role:"button",className:`land-nav-link ${s}`,style:i,onClick:()=>a==null?void 0:a(c.key,c.clickType),children:[typeof c.icon=="string"?M.jsx("img",{src:c.icon,className:"land-nav-icon"}):c.icon,M.jsx("p",{className:"land-nav-title","data-title":c.title,children:c.title}),M.jsx("span",{className:"land-nav-sub-title",children:c.subTitle}),c.isNew&&M.jsx("i",{className:"land-nav-new",children:typeof c.isNew=="boolean"?"NEW":c.isNew})]},c.key)}))}),aS=Ie.div`
  display: flex;
  flex-direction: ${A=>A.direction};
  gap: var(--gap-4);
  height: ${A=>A.direction==="row"?"100%":""};
  width: ${A=>A.direction==="column"?"100%":"fit-content"};
  border-bottom: ${A=>A.border&&A.direction==="row"?"var(--border-1) solid var(--color-border-1)":""};
  border-right: ${A=>A.border&&A.direction==="column"?"var(--border-1) solid var(--color-border-1)":""};
  .land-nav-item {
    position: relative;
    height: ${A=>A.direction==="row"?"100%":""};
    width: ${A=>A.direction==="column"?"100%":""};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-4);
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: ${A=>A.direction==="row"?"50%":"-4px"};
      bottom: ${A=>A.direction==="row"?"0":"50%"};
      width: 12px;
      height: 2px;
      transform: ${A=>A.direction==="row"?"translateX(50%)":"translateY(50%) rotate(90deg)"};
      transform-origin: center center;
      border-radius: 1px;
      background-color: var(--color-text-1);
      opacity: 0;
    }
    &:hover {
      background-color: var(--color-bg-1);
      .land-nav-title::before {
        color: var(--color-text-1);
        font-weight: 600;
      }
    }
    &.actived {
      .land-nav-title::before {
        color: var(--color-text-1);
        font-weight: 600;
      }
      &::after {
        opacity: 1;
        transition: opacity var(--transition-15) linear;
      }
    }
    &.background {
      &.actived {
        background-color: var(--color-bg-1);
      }
    }
    &.line {
      &:hover {
        background-color: unset;
      }
      &.actived {
        .land-nav-title::before {
          color: var(--color-primary-6);
        }
        &::after {
          background-color: var(--color-primary-6);
          width: ${A=>A.direction==="row"?"calc(100% - 32px)":"12px"};
        }
      }
    }
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }
  }
  .land-nav-link {
    padding: var(--padding-medium);
    display: flex;
    width: 100%;
    font-size: var(--font-content-large);
    white-space: nowrap;
    transition: background-color var(--transition-15) linear;
    cursor: pointer;
    .land-nav-title {
      position: relative;
      color: transparent;
      font-weight: 600;
      &::before {
        content: attr(data-title);
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        color: var(--color-text-3);
        font-weight: 400;
        text-align: center;
        line-height: 40px;
      }
    }

    .land-nav-icon {
      width: 14px;
      height: 14px;
    }
    .land-nav-sub-title {
      font-size: var(--font-content-small);
      opacity: var(--opacity-68);
    }
    .land-nav-new {
      position: absolute;
      padding: var(--padding-small);
      top: -12px;
      right: -8px;
      font-size: var(--font-content-small);
      background-color: var(--color-link-1);
      color: var(--color-link-6);
      font-weight: 600;
      border-radius: 3px;
      box-sizing: border-box;
      transform: scale(0.65);
    }
  }
`,Ca=({stroke:A="currentColor",size:e=16,strokeWidth:t=2,style:n,className:r})=>M.jsx("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",style:n,className:r,children:M.jsx("path",{d:"M36 18L24 30L12 18",stroke:A,strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"})}),Hf=({stroke:A="currentColor",size:e=16,strokeWidth:t=3,style:n,className:r})=>M.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",style:n,className:r,children:[M.jsx("path",{d:"M6 24.0083V42H42V24",stroke:A,strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"}),M.jsx("path",{d:"M33 23L24 32L15 23",stroke:A,strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"}),M.jsx("path",{d:"M23.9917 6V32",stroke:A,strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"})]}),oS=({fill:A="currentColor",stroke:e="currentColor",size:t=16,strokeWidth:n=2,style:r,className:i})=>M.jsx("svg",{width:t,height:t,viewBox:"0 0 48 48",fill:"none",style:r,className:i,children:M.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",fill:n===0?A:"none",stroke:n===0?"none":e,strokeWidth:n})}),lS=({size:A=16,stroke:e="currentColor",style:t,className:n})=>M.jsx("svg",{width:A,height:A,viewBox:"0 0 48 48",fill:"none",style:t,className:n,children:M.jsx("path",{d:"M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:e,strokeWidth:"2"})}),cS=({size:A=16,stroke:e="#999",strokeWidth:t=4,className:n="IconFile",style:r})=>M.jsxs("svg",{width:A,height:A,viewBox:"0 0 48 48",className:n,style:r,children:[M.jsx("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:"none",stroke:e,strokeWidth:t,strokeLinejoin:"round"}),M.jsx("path",{d:"M43 22H5",stroke:e,strokeWidth:"4",strokeLinejoin:"round"})]}),uS=({size:A=16,fill:e="#999",className:t="IconMore",style:n})=>M.jsxs("svg",{width:A,height:A,viewBox:"0 0 48 48",className:t,style:n,children:[M.jsx("circle",{cx:"12",cy:"24",r:"4",fill:e}),M.jsx("circle",{cx:"24",cy:"24",r:"4",fill:e}),M.jsx("circle",{cx:"36",cy:"24",r:"4",fill:e})]}),dS=({size:A=16,stroke:e="#999",strokeWidth:t,className:n="IconAdd",style:r})=>M.jsxs("svg",{width:A,height:A,viewBox:"0 0 48 48",className:n,style:r,children:[M.jsx("path",{d:"M24.0605 10L24.0239 38",stroke:e,strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"}),M.jsx("path",{d:"M10 24L38 24",stroke:e,strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"})]}),fS=({size:A=20,fill:e="currentColor"})=>M.jsxs("svg",{width:A,height:A,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("path",{d:"M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",fill:e}),M.jsx("path",{d:"M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",fill:e}),M.jsx("path",{d:"M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",fill:e}),M.jsx("path",{d:"M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",fill:e}),M.jsx("path",{d:"M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",fill:e}),M.jsx("path",{d:"M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",fill:e}),M.jsx("path",{d:"M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",fill:e}),M.jsx("path",{d:"M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",fill:e}),M.jsx("path",{d:"M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",fill:e})]}),hS=({size:A=20,stroke:e="currentColor",strokeWidth:t=3})=>M.jsxs("svg",{width:A,height:A,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("path",{d:"M6 24.0083V42H42V24",stroke:e,strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"}),M.jsx("path",{d:"M33 15L24 6L15 15",stroke:e,strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"}),M.jsx("path",{d:"M23.9917 32V6",stroke:e,strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"})]}),pS=({fill:A,stroke:e="currentColor",size:t=20,strokeWidth:n=2})=>M.jsxs("svg",{width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:A||"none",stroke:A||e,strokeWidth:n,strokeLinejoin:"round"}),M.jsx("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:A?"#fff":"none",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),M.jsx("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:A?"white":"none",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),gS=({fill:A="currentColor",size:e=20})=>M.jsx("svg",{width:e,height:e,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:M.jsx("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:A})}),jg=({h:A="64px",fixed:e,filter:t=0,borderBottom:n=!0,applications:r,logo:i,name:s,onLogoClick:a,divider:o=!0,align:l,menuProps:c,rightComponent:u,style:d,className:h=""})=>M.jsxs(mS,{className:`land-header ${e?"fixed":""} ${h}`,style:d,height:A,filter:t,borderBottom:n,applications:!!r,children:[M.jsxs("div",{className:"land-header-logo",onClick:a,children:[r&&M.jsxs("div",{className:"land-header-application",onClick:g=>g.stopPropagation(),children:[M.jsx(fS,{}),M.jsx("div",{className:"land-application-drop",children:r})]}),typeof i=="string"?M.jsx("img",{src:i}):i,i&&o&&M.jsx(rS,{direction:"column",lang:"24px"}),typeof s=="string"?M.jsx("img",{src:s}):s]}),M.jsx(BS,{className:"land-header-nav",align:l,children:c&&M.jsx(sS,{...c})}),u&&M.jsx("div",{className:"land-header-btns",children:u})]}),mS=Ie.header`
  display: flex;
  align-items: center;
  padding: 0 24px;
  padding-left: ${A=>A.applications?"0":""};
  gap: var(--gap-32);
  width: 100vw;
  height: ${A=>A.height};
  border-bottom: ${A=>A.borderBottom?"1px solid var(--color-border-2)":""};
  background: ${A=>A.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"};
  backdrop-filter: ${A=>A.filter?"var(--blur-small)":""};
  box-sizing: border-box;
  z-index: 1;
  &.fixed {
    position: absolute;
    top: 0;
    left: 0;
  }
  .land-header-logo {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
    height: 100%;
    cursor: pointer;
  }
  .land-header-application {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 100%;
    background-color: var(--color-bg-1);
    &:hover .land-application-drop {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  .land-application-drop {
    position: absolute;
    left: 12px;
    top: 100%;
    padding: var(--padding-medium);
    background-color: var(--color-bg-white);
    border-radius: var(--radius-8);
    border: var(--border-1) solid var(--color-border-1);
    transform: translate(-12px, -40%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-15);
    will-change: transform, opacity;
    z-index: -1;
  }
  .land-header-btns {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
  }
`,BS=Ie.div`
  display: flex;
  flex: 1;
  justify-content: ${A=>A.align};
  height: 100%;
`,Yg=({children:A,style:e,className:t})=>{const[n,r]=q.useState(132),i=document.querySelector(".land-header"),s=document.querySelector(".land-footer");return q.useEffect(()=>{!i||!s||r(i.getBoundingClientRect().height+s.getBoundingClientRect().height)},[A]),M.jsx(vS,{className:t,style:e,minHeight:n,children:A})},vS=Ie.main`
  flex: 1;
  padding-bottom: 24px;
  min-height: ${A=>`calc(100vh - ${A.minHeight}px)`};
  background: var(--color-bg-white);
`,$g=({children:A,style:e,className:t})=>M.jsx(wS,{className:`land-footer ${t}`,style:e,children:A}),wS=Ie.footer`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`,Wn=({title:A,type:e="h1",prefix:t,sub:n,style:r,className:i="",onClick:s})=>M.jsxs(xS,{className:`land-title ${i}`,style:r,onClick:()=>s==null?void 0:s(),children:[t&&M.jsx("span",{className:"land-title-prefix",children:t}),e==="h1"&&M.jsx("h1",{children:A}),e==="h2"&&M.jsx("h2",{children:A}),e==="h3"&&M.jsx("h3",{children:A}),e==="p"&&M.jsx("p",{children:A}),n&&typeof n=="string"?M.jsx("div",{className:"land-title-sub",children:n}):M.jsx(M.Fragment,{children:n})]}),xS=Ie.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  .land-title-sub{
    position: absolute;
    top: -30%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
`,CS=({desc:A,fileType:e,onUpload:t,children:n,style:r,className:i=""})=>{const s=q.useRef(null),[a,o]=q.useState(),[l,c]=q.useState(!1),u=(d,h)=>{d.preventDefault(),c(!0),h&&(new FileReader().readAsDataURL(h),o(URL.createObjectURL(h)),c(!1))};return q.useEffect(()=>{t==null||t(a)},[a]),M.jsxs(_S,{className:i,style:r,onDragOver:d=>d.preventDefault(),onDrop:d=>u(d,d.dataTransfer.files[0]),children:[M.jsx(ES,{ref:s,type:"file",accept:e,onChange:d=>{u(d,d.target.files[0])}}),n||(l?M.jsx(M.Fragment,{children:"上传中"}):M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"land-uploader-icon",children:M.jsx(hS,{})}),M.jsx("div",{className:"land-uploader-desc",children:A})]}))]})},_S=Ie.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
  padding: 16px;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-1);
  border: 1px dashed var(--color-border-2);
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  .land-uploader-icon {
    font-size: 20px;
    color: var(--color-text-5);
  }
  .land-uploader-desc {
    font-size: var(---font-content-large);
    color: var(--color-text-5);
  }
`,ES=Ie.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`,Va=({content:A,theme:e="light",style:t,className:n=""})=>M.jsxs(yS,{className:`land-pop ${e} ${n}`,style:t,children:[A,M.jsx("div",{className:"land-pop-arrow"})]}),yS=Ie.div`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  bottom: 100%;
  left: 50%;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-normal);
  border: var(--border-1) solid var(--color-border-1);
  transform: translate(-50%, -12px);
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s linear;
  .land-pop-arrow {
    display: block;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-bottom-right-radius: var(--radius-4);
    background-color: var(--color-bg-white);
  }
  &.dark {
    background-color: var(--color-text-2);
    color: var(--color-text-light);
    border: 0;
    .land-pop-arrow {
      background-color: var(--color-text-2);
      border: 0;
    }
  }
`,_a=({type:A="text",value:e,placeholder:t,prefix:n,suffix:r,w:i,min:s,max:a,onChange:o,className:l,wrapStyle:c,...u})=>M.jsxs(SS,{className:`land-input ${l}`,style:{width:typeof i=="number"?`${i}px`:i,...c},children:[n,M.jsx("input",{placeholder:t,type:A,value:e,min:s,max:a,onChange:d=>o==null?void 0:o(d.target.value),...u}),r]}),SS=Ie.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 4px;
  border: var(--border-1) solid var(--color-border-1);
  border-radius: var(--radius-4);
  input {
    width: 100%;
    height: 34px;
    background-color: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    caret-color: var(--color-primary-6);
    &:focus-within,
    &:focus,
    &:focus-visible,
    &:active {
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
    &::placeholder {
      color: var(--color-text-3);
    }
    &::selection {
      background-color: var(--color-primary-2);
    }
  }
`;function ka(A){"@babel/helpers - typeof";return ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ka(A)}var bS=/^\s+/,US=/\s+$/;function pe(A,e){if(A=A||"",e=e||{},A instanceof pe)return A;if(!(this instanceof pe))return new pe(A,e);var t=MS(A);this._originalInput=A,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}pe.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,n,r,i,s,a;return t=e.r/255,n=e.g/255,r=e.b/255,t<=.03928?i=t/12.92:i=Math.pow((t+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),r<=.03928?a=r/12.92:a=Math.pow((r+.055)/1.055,2.4),.2126*i+.7152*s+.0722*a},setAlpha:function(e){return this._a=Jg(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Nf(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Nf(this._r,this._g,this._b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Pf(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Pf(this._r,this._g,this._b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Of(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return QS(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(lt(this._r,255)*100)+"%",g:Math.round(lt(this._g,255)*100)+"%",b:Math.round(lt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(lt(this._r,255)*100)+"%, "+Math.round(lt(this._g,255)*100)+"%, "+Math.round(lt(this._b,255)*100)+"%)":"rgba("+Math.round(lt(this._r,255)*100)+"%, "+Math.round(lt(this._g,255)*100)+"%, "+Math.round(lt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:KS[Of(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Gf(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=pe(e);n="#"+Gf(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0,i=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return i?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},clone:function(){return pe(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(HS,arguments)},brighten:function(){return this._applyModification(PS,arguments)},darken:function(){return this._applyModification(NS,arguments)},desaturate:function(){return this._applyModification(LS,arguments)},saturate:function(){return this._applyModification(RS,arguments)},greyscale:function(){return this._applyModification(DS,arguments)},spin:function(){return this._applyModification(OS,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(kS,arguments)},complement:function(){return this._applyCombination(GS,arguments)},monochromatic:function(){return this._applyCombination(zS,arguments)},splitcomplement:function(){return this._applyCombination(VS,arguments)},triad:function(){return this._applyCombination(Vf,[3])},tetrad:function(){return this._applyCombination(Vf,[4])}};pe.fromRatio=function(A,e){if(ka(A)=="object"){var t={};for(var n in A)A.hasOwnProperty(n)&&(n==="a"?t[n]=A[n]:t[n]=Ti(A[n]));A=t}return pe(A,e)};function MS(A){var e={r:0,g:0,b:0},t=1,n=null,r=null,i=null,s=!1,a=!1;return typeof A=="string"&&(A=YS(A)),ka(A)=="object"&&(qA(A.r)&&qA(A.g)&&qA(A.b)?(e=FS(A.r,A.g,A.b),s=!0,a=String(A.r).substr(-1)==="%"?"prgb":"rgb"):qA(A.h)&&qA(A.s)&&qA(A.v)?(n=Ti(A.s),r=Ti(A.v),e=IS(A.h,n,r),s=!0,a="hsv"):qA(A.h)&&qA(A.s)&&qA(A.l)&&(n=Ti(A.s),i=Ti(A.l),e=TS(A.h,n,i),s=!0,a="hsl"),A.hasOwnProperty("a")&&(t=A.a)),t=Jg(t),{ok:s,format:A.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function FS(A,e,t){return{r:lt(A,255)*255,g:lt(e,255)*255,b:lt(t,255)*255}}function Pf(A,e,t){A=lt(A,255),e=lt(e,255),t=lt(t,255);var n=Math.max(A,e,t),r=Math.min(A,e,t),i,s,a=(n+r)/2;if(n==r)i=s=0;else{var o=n-r;switch(s=a>.5?o/(2-n-r):o/(n+r),n){case A:i=(e-t)/o+(e<t?6:0);break;case e:i=(t-A)/o+2;break;case t:i=(A-e)/o+4;break}i/=6}return{h:i,s,l:a}}function TS(A,e,t){var n,r,i;A=lt(A,360),e=lt(e,100),t=lt(t,100);function s(l,c,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?l+(c-l)*6*u:u<1/2?c:u<2/3?l+(c-l)*(2/3-u)*6:l}if(e===0)n=r=i=t;else{var a=t<.5?t*(1+e):t+e-t*e,o=2*t-a;n=s(o,a,A+1/3),r=s(o,a,A),i=s(o,a,A-1/3)}return{r:n*255,g:r*255,b:i*255}}function Nf(A,e,t){A=lt(A,255),e=lt(e,255),t=lt(t,255);var n=Math.max(A,e,t),r=Math.min(A,e,t),i,s,a=n,o=n-r;if(s=n===0?0:o/n,n==r)i=0;else{switch(n){case A:i=(e-t)/o+(e<t?6:0);break;case e:i=(t-A)/o+2;break;case t:i=(A-e)/o+4;break}i/=6}return{h:i,s,v:a}}function IS(A,e,t){A=lt(A,360)*6,e=lt(e,100),t=lt(t,100);var n=Math.floor(A),r=A-n,i=t*(1-e),s=t*(1-r*e),a=t*(1-(1-r)*e),o=n%6,l=[t,s,i,i,a,t][o],c=[a,t,t,s,i,i][o],u=[i,i,a,t,t,s][o];return{r:l*255,g:c*255,b:u*255}}function Of(A,e,t,n){var r=[FA(Math.round(A).toString(16)),FA(Math.round(e).toString(16)),FA(Math.round(t).toString(16))];return n&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function QS(A,e,t,n,r){var i=[FA(Math.round(A).toString(16)),FA(Math.round(e).toString(16)),FA(Math.round(t).toString(16)),FA(qg(n))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Gf(A,e,t,n){var r=[FA(qg(n)),FA(Math.round(A).toString(16)),FA(Math.round(e).toString(16)),FA(Math.round(t).toString(16))];return r.join("")}pe.equals=function(A,e){return!A||!e?!1:pe(A).toRgbString()==pe(e).toRgbString()};pe.random=function(){return pe.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function LS(A,e){e=e===0?0:e||10;var t=pe(A).toHsl();return t.s-=e/100,t.s=xo(t.s),pe(t)}function RS(A,e){e=e===0?0:e||10;var t=pe(A).toHsl();return t.s+=e/100,t.s=xo(t.s),pe(t)}function DS(A){return pe(A).desaturate(100)}function HS(A,e){e=e===0?0:e||10;var t=pe(A).toHsl();return t.l+=e/100,t.l=xo(t.l),pe(t)}function PS(A,e){e=e===0?0:e||10;var t=pe(A).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),pe(t)}function NS(A,e){e=e===0?0:e||10;var t=pe(A).toHsl();return t.l-=e/100,t.l=xo(t.l),pe(t)}function OS(A,e){var t=pe(A).toHsl(),n=(t.h+e)%360;return t.h=n<0?360+n:n,pe(t)}function GS(A){var e=pe(A).toHsl();return e.h=(e.h+180)%360,pe(e)}function Vf(A,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=pe(A).toHsl(),n=[pe(A)],r=360/e,i=1;i<e;i++)n.push(pe({h:(t.h+i*r)%360,s:t.s,l:t.l}));return n}function VS(A){var e=pe(A).toHsl(),t=e.h;return[pe(A),pe({h:(t+72)%360,s:e.s,l:e.l}),pe({h:(t+216)%360,s:e.s,l:e.l})]}function kS(A,e,t){e=e||6,t=t||30;var n=pe(A).toHsl(),r=360/t,i=[pe(A)];for(n.h=(n.h-(r*e>>1)+720)%360;--e;)n.h=(n.h+r)%360,i.push(pe(n));return i}function zS(A,e){e=e||6;for(var t=pe(A).toHsv(),n=t.h,r=t.s,i=t.v,s=[],a=1/e;e--;)s.push(pe({h:n,s:r,v:i})),i=(i+a)%1;return s}pe.mix=function(A,e,t){t=t===0?0:t||50;var n=pe(A).toRgb(),r=pe(e).toRgb(),i=t/100,s={r:(r.r-n.r)*i+n.r,g:(r.g-n.g)*i+n.g,b:(r.b-n.b)*i+n.b,a:(r.a-n.a)*i+n.a};return pe(s)};pe.readability=function(A,e){var t=pe(A),n=pe(e);return(Math.max(t.getLuminance(),n.getLuminance())+.05)/(Math.min(t.getLuminance(),n.getLuminance())+.05)};pe.isReadable=function(A,e,t){var n=pe.readability(A,e),r,i;switch(i=!1,r=$S(t),r.level+r.size){case"AAsmall":case"AAAlarge":i=n>=4.5;break;case"AAlarge":i=n>=3;break;case"AAAsmall":i=n>=7;break}return i};pe.mostReadable=function(A,e,t){var n=null,r=0,i,s,a,o;t=t||{},s=t.includeFallbackColors,a=t.level,o=t.size;for(var l=0;l<e.length;l++)i=pe.readability(A,e[l]),i>r&&(r=i,n=pe(e[l]));return pe.isReadable(A,n,{level:a,size:o})||!s?n:(t.includeFallbackColors=!1,pe.mostReadable(A,["#fff","#000"],t))};var bc=pe.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},KS=pe.hexNames=WS(bc);function WS(A){var e={};for(var t in A)A.hasOwnProperty(t)&&(e[A[t]]=t);return e}function Jg(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function lt(A,e){XS(A)&&(A="100%");var t=jS(A);return A=Math.min(e,Math.max(0,parseFloat(A))),t&&(A=parseInt(A*e,10)/100),Math.abs(A-e)<1e-6?1:A%e/parseFloat(e)}function xo(A){return Math.min(1,Math.max(0,A))}function rA(A){return parseInt(A,16)}function XS(A){return typeof A=="string"&&A.indexOf(".")!=-1&&parseFloat(A)===1}function jS(A){return typeof A=="string"&&A.indexOf("%")!=-1}function FA(A){return A.length==1?"0"+A:""+A}function Ti(A){return A<=1&&(A=A*100+"%"),A}function qg(A){return Math.round(parseFloat(A)*255).toString(16)}function kf(A){return rA(A)/255}var SA=function(){var A="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+A+")",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function qA(A){return!!SA.CSS_UNIT.exec(A)}function YS(A){A=A.replace(bS,"").replace(US,"").toLowerCase();var e=!1;if(bc[A])A=bc[A],e=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=SA.rgb.exec(A))?{r:t[1],g:t[2],b:t[3]}:(t=SA.rgba.exec(A))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=SA.hsl.exec(A))?{h:t[1],s:t[2],l:t[3]}:(t=SA.hsla.exec(A))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=SA.hsv.exec(A))?{h:t[1],s:t[2],v:t[3]}:(t=SA.hsva.exec(A))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=SA.hex8.exec(A))?{r:rA(t[1]),g:rA(t[2]),b:rA(t[3]),a:kf(t[4]),format:e?"name":"hex8"}:(t=SA.hex6.exec(A))?{r:rA(t[1]),g:rA(t[2]),b:rA(t[3]),format:e?"name":"hex"}:(t=SA.hex4.exec(A))?{r:rA(t[1]+""+t[1]),g:rA(t[2]+""+t[2]),b:rA(t[3]+""+t[3]),a:kf(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=SA.hex3.exec(A))?{r:rA(t[1]+""+t[1]),g:rA(t[2]+""+t[2]),b:rA(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function $S(A){var e,t;return A=A||{level:"AA",size:"small"},e=(A.level||"AA").toUpperCase(),t=(A.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}const rr=({w:A="100%",h:e,column:t,wrap:n,justify:r="start",align:i="start",gap:s,bothCenter:a,children:o,style:l,className:c=""})=>M.jsx(JS,{className:c,style:l,width:A,height:e,direction:t?"column":"row",gap:typeof s=="number"?`${s}px`:s,wrap:n,justify:a?"center":r,align:a?"center":i,children:o}),JS=Ie.div`
  display: flex;
  flex-direction: ${A=>A.direction};
  align-items: center;
  gap: ${A=>A.gap};
  flex-wrap: ${A=>A.wrap?"wrap":""};
  justify-content: ${A=>A.justify};
  align-items: ${A=>A.align};
  width: ${A=>A.width};
  height: ${A=>A.height};
`,Sl=[[{id:1,color:"#e9e9e9"},{id:2,color:"#d9d9d9"},{id:3,color:"#c4c4c4"},{id:4,color:"#9d9d9d"}],[{id:5,color:"#7b7b7b"},{id:6,color:"#5c5c5c"},{id:7,color:"#333333"},{id:8,color:"#262626"}],[{id:9,color:"#efccbd"},{id:10,color:"#d39f9d"},{id:11,color:"#c4726d"},{id:12,color:"#ac3526"}],[{id:13,color:"#f6e3bd"},{id:14,color:"#ebbd6f"},{id:15,color:"#df964a"},{id:16,color:"#c76336"}],[{id:17,color:"#fbf2d4"},{id:18,color:"#f7e7ab"},{id:19,color:"#f4db86"},{id:20,color:"#ebbc58"}],[{id:21,color:"#dee9d7"},{id:22,color:"#bdd992"},{id:23,color:"#9dbe56"},{id:24,color:"#758d3a"}],[{id:25,color:"#e7f6fd"},{id:26,color:"#9dd9f8"},{id:27,color:"#81bde5"},{id:28,color:"#4f84eb"}],[{id:29,color:"#cdc7ee"},{id:30,color:"#877cda"},{id:31,color:"#4249ac"},{id:32,color:"#313fa4"}],[{id:33,color:"#f6e6fb"},{id:34,color:"#d69aeb"},{id:35,color:"#b253d3"},{id:36,color:"#8a31c4"}]],zf=({value:A="#ffffff",size:e=48,showDrop:t=!0,onChange:n})=>{const[r,i]=q.useState(!1),[s,a]=q.useState(A?A==="transparent"?"transparent":A:"#ffffff"),[o,l]=q.useState(A.split("#")[1]),[c,u]=q.useState(100),[d,h]=q.useState(0),[g,m]=q.useState(0),[p,f]=q.useState(0),v=q.useCallback((I,L=100)=>{if(I!=="transparent"){const U=pe(I),{r:Q,g:D,b:z}=U.toRgb();return`rgba(${Q}, ${D}, ${z}, ${L/100})`}return I},[]);q.useEffect(()=>{if(A)if(A==="transparent")a("transparent");else{const{h:I,s:L,v:U}=pe(A).toHsv();h(I),!T&&m(L),!T&&f(U),a(A),l(A.split("#")[1])}},[A]);const B=q.useMemo(()=>`#${pe(`hsv(${d},1,1)`).toHex()}`,[d]),C=I=>{if(I==="transparent")a("transparent");else{const L=pe(I).toHsv();h(L.h),m(L.s),f(L.v)}},[x,_]=q.useState(!1);q.useEffect(()=>{const I=pe(`hsv(${d},${g},${p})`).toHex();!x&&l(I),a(`#${I}`)},[d,g,p]);const E=12,[T,w]=q.useState(!1),y=I=>{const L=I.target.getBoundingClientRect(),U=I.clientX-L.left,Q=I.clientY-L.top;U>=E/2&&U<=L.width-E?m((U-E/2)/(L.width-E)):U<E/2?m(0):m(1),Q>=E/2&&Q<=L.height-E?f(1-(Q-E/2)/(L.height-E)):Q<E/2?f(1):f(0),n==null||n(v(s,c))};return M.jsxs(qS,{className:"land-color-picker",color:A,size:typeof e=="string"?e:`${e}px`,children:[M.jsxs("div",{className:"land-color-trigger",onClick:()=>i(!r),children:[M.jsx("div",{className:"land-color-grid",style:{background:s==="transparent"?"transparent":v(s,c)}}),M.jsx(_a,{prefix:"#",maxLength:6,value:o,w:e,onFocus:()=>_(!0),onChange:I=>{l(I),C(`#${I}`)},onBlur:()=>{n==null||n(v(`#${o}`,c)),_(!1)},wrapStyle:{height:24,fontSize:"12px",border:"none",gap:0,padding:0},style:{fontSize:"10px",textAlign:"center"}})]}),t&&M.jsxs(ZS,{className:`land-color-drop ${r?"show":""}`,children:[M.jsx(eb,{className:"StyledColorGrid",svColor:B,onMouseMove:I=>T&&y(I),onMouseDown:I=>{I.preventDefault(),y(I),w(!0)},onMouseUp:()=>w(!1),onMouseLeave:()=>w(!1),children:M.jsx("div",{className:"color-thumb",style:{left:E/2+g*(180-E),top:E/2+(86-E)-p*(86-E)}})}),M.jsxs(rr,{gap:8,children:[M.jsx("div",{className:"radius-4 border",style:{width:"40px",aspectRatio:1,flexShrink:0,background:s==="transparent"?"transparent":v(s,c)}}),M.jsxs(rr,{column:!0,gap:8,children:[M.jsx(Kf,{type:"range",max:360,value:d,step:1,currentColor:s,onChange:I=>h(Number(I.target.value))}),M.jsx(tb,{children:M.jsx(Kf,{type:"range",step:1,max:100,value:c,className:"opacity",currentColor:B,onChange:I=>{u(I.target.value),n==null||n(v(s,c))}})})]})]}),M.jsxs("div",{className:"flex gap-8",children:[M.jsx(_a,{className:"flex-2",prefix:"#",maxLength:6,value:o,onFocus:()=>_(!0),onChange:I=>{l(I),C(`#${I}`)},onBlur:()=>{n==null||n(v(`#${o}`,c)),_(!1)}}),M.jsx(_a,{className:"flex-1",max:100,min:0,value:String(c),onChange:I=>{u(Number(I)),n==null||n(v(s,Number(p)))}})]}),M.jsx("div",{className:"width-100 flex",style:{gap:2},children:Sl==null?void 0:Sl.map((I,L)=>M.jsx("div",{className:"flex column",style:{gap:2},children:I.map(U=>M.jsx(Ab,{onClick:()=>{const{h:Q,s:D,v:z}=pe(U.color).toHsv();m(D),h(Q),f(z),n==null||n(v(U.color,c))},style:{"--tacc-color-item-bgColor":U.color}},U.id))},L))})]})]})},qS=Ie.div`
  position: relative;
  width: ${A=>A.size};
  cursor: pointer;
  .land-color-trigger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }
  .land-color-grid {
    width: 100%;
    aspect-ratio: 1;
    background-color: ${A=>A.color};
    border: 8px solid var(--color-bg-1);
    border-radius: 4px;
    transition: border-color var(--transition-15) linear;
    will-change: border-color;
    &:hover {
      border-color: var(--color-bg-2);
    }
    &:active {
      border-color: var(--color-bg-3);
    }
  }
`,ZS=Ie.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(--color-bg-white);
  width: 204px;
  border-radius: 4px;
  box-shadow: var(--boxshadow-medium);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity var(--transition-15) linear;
  z-index: 10;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
`,eb=Ie.div`
  position: relative;
  width: 100%;
  height: 86px;
  border-radius: 4px;
  background-color: ${A=>A.svColor};
  background-image: linear-gradient(0deg, rgb(0, 0, 0), transparent),
    linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  overflow: hidden;
  .color-thumb {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid var(--color-border-2);
    border-radius: 4px;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`,Kf=Ie.input`
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  width: 132px;
  height: 16px;
  border: 0px;
  outline: none;
  object-fit: contain;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    #ff0000,
    #ffd600,
    #52ff00,
    #00fff0,
    #0500ff,
    #c000ff,
    #ff0000
  );
  &.opacity {
    position: absolute;
    background: ${A=>`linear-gradient(to right, rgba(0,0,0,0), ${A.currentColor})`};
    &::-webkit-slider-thumb {
      background: transparent;
    }
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: ${A=>A.currentColor};
    border: 1px solid var(--color-border-1);
    outline: 1px solid var(--color-border-3);
    &:hover {
      cursor: ew-resize;
    }
  }
`,tb=Ie.div`
  padding: relative;
  width: 132px;
  height: 16px;
  border-radius: 4px;
  background-image: conic-gradient(
    var(--color-bg-2) 0 25%,
    transparent 0 50%,
    var(--color-bg-2) 0 75%,
    transparent 0
  );
  background-size: 8px 8px;
`,Ab=Ie.div`
  border: var(--tacc-color-item-border, var(--spaui-input-border));
  border-radius: var(--tacc-color-item-radius, 4px);
  background-color: var(--tacc-color-item-bgColor, transparent);
  width: 18px;
  height: 18px;
  transition: all 0.2s;
  &:hover {
    --tacc-color-item-border: 1px solid var(--od-gray-05);
  }
  &.active {
    --tacc-color-item-border: 1px solid var(--od-blue-06);
  }
  cursor: pointer;
  &.null {
    position: relative;
    background-color: transparent;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 10px;
      top: -4px;
      width: 2px;
      height: 30px;
      border-radius: 1px;
      background-color: var(--od-red-06);
      transform: rotate(-45deg);
    }
  }
`,bl=({text:A,subText:e,icon:t,width:n,height:r,justify:i="center",type:s="border",status:a="default",disabled:o,pop:l,PopProps:c,href:u,target:d="_blank",onClick:h,style:g,className:m=""})=>{const p=q.useMemo(()=>{if(t){if(!A&&!e)return!0}else return!1},[t,A,e]),f=q.useMemo(()=>{switch(a){case"success":return"var(--color-green-";case"warning":return"var(--color-orange-";case"danger":return"var(--color-red-";case"primary":return"var(--color-primary-";default:return""}},[a]);return M.jsx(M.Fragment,{children:u?M.jsxs(nb,{href:u,target:d,className:`land-button ${s} ${a} ${p?"iconOnly":""} ${o?"disabled":""} ${l?"hover-pop":""} ${m}`,style:g,width:n,height:r,justify:i,color:f,onClick:v=>h==null?void 0:h(v),children:[t,!p&&M.jsxs("div",{children:[M.jsx("span",{children:A}),M.jsx("span",{className:"subText",children:e})]}),l&&M.jsx(Va,{content:l,...c})]}):M.jsxs(Zg,{className:`land-button ${s} ${a} ${p?"iconOnly":""} ${o?"disabled":""} ${l?"hover-pop":""} ${m}`,style:g,width:n,height:r,justify:i,color:f,onClick:v=>h==null?void 0:h(v),children:[t,!p&&M.jsxs("div",{children:[M.jsx("span",{children:A}),e&&M.jsx("span",{className:"subText",children:e})]}),l&&M.jsx(Va,{content:l,...c})]})})},Zg=Ie.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${A=>A.justify};
  gap: var(--gap-4);
  padding: ${A=>A.width&&A.width!=="100%"?"":"var(--padding-medium)"};
  width: ${A=>A.width?A.width:"fit-content"};
  height: ${A=>A.height?A.height:"fit-content"};
  color: ${A=>A.color?`${A.color}6)`:"var(--color-text-2)"};
  &:hover {
    color: ${A=>A.color?`${A.color}5)`:"var(--color-text-3)"};
  }
  &:active {
    color: ${A=>A.color?`${A.color}7)`:"var(--color-text-1)"};
  }
  font-size: var(--font-content-medium);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  transition: all var(--transition-15) linear;
  cursor: pointer;
  .subText {
    margin-left: 4px;
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }

  &.text,
  &.border.default {
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:active {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: ${A=>`${A.color}6)`};
    &.default {
      background-color: var(--color-text-2);
      &:hover {
        background-color: var(--color-text-1);
      }
      &:active {
        background-color: var(--color-text-1);
      }
    }
    &:hover {
      background-color: ${A=>`${A.color}5)`};
    }
    &:active {
      background-color: ${A=>`${A.color}7)`};
    }
  }

  &.border {
    padding: 7px 15px;
    border: ${A=>`var(--border-1) solid ${A.color}4)`};
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover {
      background-color: ${A=>`${A.color}1)`};
    }
    &:active {
      background-color: ${A=>`${A.color}2)`};
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: ${A=>`${A.color}4)`};
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover {
      border-color: ${A=>`${A.color}5)`};
    }
    &:active {
      border-color: ${A=>`${A.color}7)`};
    }
  }

  &.iconOnly {
    padding: 0;
    width: 36px;
    height: 36px;
  }
  &.disabled {
    opacity: var(--opacity-68);
    cursor: default;
  }
`,nb=Ie.a`
  ${Zg};
  text-decoration: none;
`;/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Uc=function(A,e){return Uc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},Uc(A,e)};function QA(A,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Uc(A,e);function t(){this.constructor=A}A.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Mc=function(){return Mc=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Mc.apply(this,arguments)};function zt(A,e,t,n){function r(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function a(c){try{l(n.next(c))}catch(u){s(u)}}function o(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){c.done?i(c.value):r(c.value).then(a,o)}l((n=n.apply(A,e||[])).next())})}function Pt(A,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return o([l,c])}}function o(l){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(A,t)}catch(c){l=[6,c],r=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Gs(A,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,i;n<r;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return A.concat(i||e)}var un=function(){function A(e,t,n,r){this.left=e,this.top=t,this.width=n,this.height=r}return A.prototype.add=function(e,t,n,r){return new A(this.left+e,this.top+t,this.width+n,this.height+r)},A.fromClientRect=function(e,t){return new A(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},A.fromDOMRectList=function(e,t){var n=Array.from(t).find(function(r){return r.width!==0});return n?new A(n.left+e.windowBounds.left,n.top+e.windowBounds.top,n.width,n.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A}(),Co=function(A,e){return un.fromClientRect(A,e.getBoundingClientRect())},rb=function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var n=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),r=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new un(0,0,n,r)},_o=function(A){for(var e=[],t=0,n=A.length;t<n;){var r=A.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var i=A.charCodeAt(t++);(i&64512)===56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),t--)}else e.push(r)}return e},pt=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var n=[],r=-1,i="";++r<t;){var s=A[r];s<=65535?n.push(s):(s-=65536,n.push((s>>10)+55296,s%1024+56320)),(r+1===t||n.length>16384)&&(i+=String.fromCharCode.apply(String,n),n.length=0)}return i},Wf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ib=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Vs=0;Vs<Wf.length;Vs++)ib[Wf.charCodeAt(Vs)]=Vs;var Xf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ii=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ks=0;ks<Xf.length;ks++)Ii[Xf.charCodeAt(ks)]=ks;var sb=function(A){var e=A.length*.75,t=A.length,n,r=0,i,s,a,o;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(n=0;n<t;n+=4)i=Ii[A.charCodeAt(n)],s=Ii[A.charCodeAt(n+1)],a=Ii[A.charCodeAt(n+2)],o=Ii[A.charCodeAt(n+3)],c[r++]=i<<2|s>>4,c[r++]=(s&15)<<4|a>>2,c[r++]=(a&3)<<6|o&63;return l},ab=function(A){for(var e=A.length,t=[],n=0;n<e;n+=2)t.push(A[n+1]<<8|A[n]);return t},ob=function(A){for(var e=A.length,t=[],n=0;n<e;n+=4)t.push(A[n+3]<<24|A[n+2]<<16|A[n+1]<<8|A[n]);return t},ir=5,Cu=11,Ul=2,lb=Cu-ir,em=65536>>ir,cb=1<<ir,Ml=cb-1,ub=1024>>ir,db=em+ub,fb=db,hb=32,pb=fb+hb,gb=65536>>Cu,mb=1<<lb,Bb=mb-1,jf=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},vb=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},wb=function(A,e){var t=sb(A),n=Array.isArray(t)?ob(t):new Uint32Array(t),r=Array.isArray(t)?ab(t):new Uint16Array(t),i=24,s=jf(r,i/2,n[4]/2),a=n[5]===2?jf(r,(i+n[4])/2):vb(n,Math.ceil((i+n[4])/4));return new xb(n[0],n[1],n[2],n[3],s,a)},xb=function(){function A(e,t,n,r,i,s){this.initialValue=e,this.errorValue=t,this.highStart=n,this.highValueIndex=r,this.index=i,this.data=s}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>ir],t=(t<<Ul)+(e&Ml),this.data[t];if(e<=65535)return t=this.index[em+(e-55296>>ir)],t=(t<<Ul)+(e&Ml),this.data[t];if(e<this.highStart)return t=pb-gb+(e>>Cu),t=this.index[t],t+=e>>ir&Bb,t=this.index[t],t=(t<<Ul)+(e&Ml),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),Yf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Cb=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var zs=0;zs<Yf.length;zs++)Cb[Yf.charCodeAt(zs)]=zs;var _b="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",$f=50,Eb=1,tm=2,Am=3,yb=4,Sb=5,Jf=7,nm=8,qf=9,yn=10,Fc=11,Zf=12,Tc=13,bb=14,Qi=15,Ic=16,Ks=17,Ei=18,Ub=19,eh=20,Qc=21,yi=22,Fl=23,Tr=24,iA=25,Li=26,Ri=27,Ir=28,Mb=29,jn=30,Fb=31,Ws=32,Xs=33,Lc=34,Rc=35,Dc=36,es=37,Hc=38,Ea=39,ya=40,Tl=41,rm=42,Tb=43,Ib=[9001,65288],im="!",ze="×",js="÷",Pc=wb(_b),ZA=[jn,Dc],Nc=[Eb,tm,Am,Sb],sm=[yn,nm],th=[Ri,Li],Qb=Nc.concat(sm),Ah=[Hc,Ea,ya,Lc,Rc],Lb=[Qi,Tc],Rb=function(A,e){e===void 0&&(e="strict");var t=[],n=[],r=[];return A.forEach(function(i,s){var a=Pc.get(i);if(a>$f?(r.push(!0),a-=$f):r.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(i)!==-1)return n.push(s),t.push(Ic);if(a===yb||a===Fc){if(s===0)return n.push(s),t.push(jn);var o=t[s-1];return Qb.indexOf(o)===-1?(n.push(n[s-1]),t.push(o)):(n.push(s),t.push(jn))}if(n.push(s),a===Fb)return t.push(e==="strict"?Qc:es);if(a===rm||a===Mb)return t.push(jn);if(a===Tb)return i>=131072&&i<=196605||i>=196608&&i<=262141?t.push(es):t.push(jn);t.push(a)}),[n,t,r]},Il=function(A,e,t,n){var r=n[t];if(Array.isArray(A)?A.indexOf(r)!==-1:A===r)for(var i=t;i<=n.length;){i++;var s=n[i];if(s===e)return!0;if(s!==yn)break}if(r===yn)for(var i=t;i>0;){i--;var a=n[i];if(Array.isArray(A)?A.indexOf(a)!==-1:A===a)for(var o=t;o<=n.length;){o++;var s=n[o];if(s===e)return!0;if(s!==yn)break}if(a!==yn)break}return!1},nh=function(A,e){for(var t=A;t>=0;){var n=e[t];if(n===yn)t--;else return n}return 0},Db=function(A,e,t,n,r){if(t[n]===0)return ze;var i=n-1;if(Array.isArray(r)&&r[i]===!0)return ze;var s=i-1,a=i+1,o=e[i],l=s>=0?e[s]:0,c=e[a];if(o===tm&&c===Am)return ze;if(Nc.indexOf(o)!==-1)return im;if(Nc.indexOf(c)!==-1||sm.indexOf(c)!==-1)return ze;if(nh(i,e)===nm)return js;if(Pc.get(A[i])===Fc||(o===Ws||o===Xs)&&Pc.get(A[a])===Fc||o===Jf||c===Jf||o===qf||[yn,Tc,Qi].indexOf(o)===-1&&c===qf||[Ks,Ei,Ub,Tr,Ir].indexOf(c)!==-1||nh(i,e)===yi||Il(Fl,yi,i,e)||Il([Ks,Ei],Qc,i,e)||Il(Zf,Zf,i,e))return ze;if(o===yn)return js;if(o===Fl||c===Fl)return ze;if(c===Ic||o===Ic)return js;if([Tc,Qi,Qc].indexOf(c)!==-1||o===bb||l===Dc&&Lb.indexOf(o)!==-1||o===Ir&&c===Dc||c===eh||ZA.indexOf(c)!==-1&&o===iA||ZA.indexOf(o)!==-1&&c===iA||o===Ri&&[es,Ws,Xs].indexOf(c)!==-1||[es,Ws,Xs].indexOf(o)!==-1&&c===Li||ZA.indexOf(o)!==-1&&th.indexOf(c)!==-1||th.indexOf(o)!==-1&&ZA.indexOf(c)!==-1||[Ri,Li].indexOf(o)!==-1&&(c===iA||[yi,Qi].indexOf(c)!==-1&&e[a+1]===iA)||[yi,Qi].indexOf(o)!==-1&&c===iA||o===iA&&[iA,Ir,Tr].indexOf(c)!==-1)return ze;if([iA,Ir,Tr,Ks,Ei].indexOf(c)!==-1)for(var u=i;u>=0;){var d=e[u];if(d===iA)return ze;if([Ir,Tr].indexOf(d)!==-1)u--;else break}if([Ri,Li].indexOf(c)!==-1)for(var u=[Ks,Ei].indexOf(o)!==-1?s:i;u>=0;){var d=e[u];if(d===iA)return ze;if([Ir,Tr].indexOf(d)!==-1)u--;else break}if(Hc===o&&[Hc,Ea,Lc,Rc].indexOf(c)!==-1||[Ea,Lc].indexOf(o)!==-1&&[Ea,ya].indexOf(c)!==-1||[ya,Rc].indexOf(o)!==-1&&c===ya||Ah.indexOf(o)!==-1&&[eh,Li].indexOf(c)!==-1||Ah.indexOf(c)!==-1&&o===Ri||ZA.indexOf(o)!==-1&&ZA.indexOf(c)!==-1||o===Tr&&ZA.indexOf(c)!==-1||ZA.concat(iA).indexOf(o)!==-1&&c===yi&&Ib.indexOf(A[a])===-1||ZA.concat(iA).indexOf(c)!==-1&&o===Ei)return ze;if(o===Tl&&c===Tl){for(var h=t[i],g=1;h>0&&(h--,e[h]===Tl);)g++;if(g%2!==0)return ze}return o===Ws&&c===Xs?ze:js},Hb=function(A,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=Rb(A,e.lineBreak),n=t[0],r=t[1],i=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(r=r.map(function(a){return[iA,jn,rm].indexOf(a)!==-1?es:a}));var s=e.wordBreak==="keep-all"?i.map(function(a,o){return a&&A[o]>=19968&&A[o]<=40959}):void 0;return[n,r,s]},Pb=function(){function A(e,t,n,r){this.codePoints=e,this.required=t===im,this.start=n,this.end=r}return A.prototype.slice=function(){return pt.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),Nb=function(A,e){var t=_o(A),n=Hb(t,e),r=n[0],i=n[1],s=n[2],a=t.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=ze;l<a&&(c=Db(t,i,r,++l,s))===ze;);if(c!==ze||l===a){var u=new Pb(t,c,o,l);return o=l,{value:u,done:!1}}return{done:!0,value:null}}}},Ob=1,Gb=2,os=4,rh=8,za=10,ih=47,Vi=92,Vb=9,kb=32,Ys=34,Si=61,zb=35,Kb=36,Wb=37,$s=39,Js=40,bi=41,Xb=95,jt=45,jb=33,Yb=60,$b=62,Jb=64,qb=91,Zb=93,eU=61,tU=123,qs=63,AU=125,sh=124,nU=126,rU=128,ah=65533,Ql=42,$n=43,iU=44,sU=58,aU=59,ts=46,oU=0,lU=8,cU=11,uU=14,dU=31,fU=127,RA=-1,am=48,om=97,lm=101,hU=102,pU=117,gU=122,cm=65,um=69,dm=70,mU=85,BU=90,Nt=function(A){return A>=am&&A<=57},vU=function(A){return A>=55296&&A<=57343},Qr=function(A){return Nt(A)||A>=cm&&A<=dm||A>=om&&A<=hU},wU=function(A){return A>=om&&A<=gU},xU=function(A){return A>=cm&&A<=BU},CU=function(A){return wU(A)||xU(A)},_U=function(A){return A>=rU},Zs=function(A){return A===za||A===Vb||A===kb},Ka=function(A){return CU(A)||_U(A)||A===Xb},oh=function(A){return Ka(A)||Nt(A)||A===jt},EU=function(A){return A>=oU&&A<=lU||A===cU||A>=uU&&A<=dU||A===fU},xn=function(A,e){return A!==Vi?!1:e!==za},ea=function(A,e,t){return A===jt?Ka(e)||xn(e,t):Ka(A)?!0:!!(A===Vi&&xn(A,e))},Ll=function(A,e,t){return A===$n||A===jt?Nt(e)?!0:e===ts&&Nt(t):Nt(A===ts?e:A)},yU=function(A){var e=0,t=1;(A[e]===$n||A[e]===jt)&&(A[e]===jt&&(t=-1),e++);for(var n=[];Nt(A[e]);)n.push(A[e++]);var r=n.length?parseInt(pt.apply(void 0,n),10):0;A[e]===ts&&e++;for(var i=[];Nt(A[e]);)i.push(A[e++]);var s=i.length,a=s?parseInt(pt.apply(void 0,i),10):0;(A[e]===um||A[e]===lm)&&e++;var o=1;(A[e]===$n||A[e]===jt)&&(A[e]===jt&&(o=-1),e++);for(var l=[];Nt(A[e]);)l.push(A[e++]);var c=l.length?parseInt(pt.apply(void 0,l),10):0;return t*(r+a*Math.pow(10,-s))*Math.pow(10,o*c)},SU={type:2},bU={type:3},UU={type:4},MU={type:13},FU={type:8},TU={type:21},IU={type:9},QU={type:10},LU={type:11},RU={type:12},DU={type:14},ta={type:23},HU={type:1},PU={type:25},NU={type:24},OU={type:26},GU={type:27},VU={type:28},kU={type:29},zU={type:31},Oc={type:32},fm=function(){function A(){this._value=[]}return A.prototype.write=function(e){this._value=this._value.concat(_o(e))},A.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==Oc;)e.push(t),t=this.consumeToken();return e},A.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Ys:return this.consumeStringToken(Ys);case zb:var t=this.peekCodePoint(0),n=this.peekCodePoint(1),r=this.peekCodePoint(2);if(oh(t)||xn(n,r)){var i=ea(t,n,r)?Gb:Ob,s=this.consumeName();return{type:5,value:s,flags:i}}break;case Kb:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),MU;break;case $s:return this.consumeStringToken($s);case Js:return SU;case bi:return bU;case Ql:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),DU;break;case $n:if(Ll(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case iU:return UU;case jt:var a=e,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(Ll(a,o,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(ea(a,o,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(o===jt&&l===$b)return this.consumeCodePoint(),this.consumeCodePoint(),NU;break;case ts:if(Ll(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case ih:if(this.peekCodePoint(0)===Ql)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Ql&&(c=this.consumeCodePoint(),c===ih))return this.consumeToken();if(c===RA)return this.consumeToken()}break;case sU:return OU;case aU:return GU;case Yb:if(this.peekCodePoint(0)===jb&&this.peekCodePoint(1)===jt&&this.peekCodePoint(2)===jt)return this.consumeCodePoint(),this.consumeCodePoint(),PU;break;case Jb:var u=this.peekCodePoint(0),d=this.peekCodePoint(1),h=this.peekCodePoint(2);if(ea(u,d,h)){var s=this.consumeName();return{type:7,value:s}}break;case qb:return VU;case Vi:if(xn(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case Zb:return kU;case eU:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),FU;break;case tU:return LU;case AU:return RU;case pU:case mU:var g=this.peekCodePoint(0),m=this.peekCodePoint(1);return g===$n&&(Qr(m)||m===qs)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case sh:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),IU;if(this.peekCodePoint(0)===sh)return this.consumeCodePoint(),TU;break;case nU:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),QU;break;case RA:return Oc}return Zs(e)?(this.consumeWhiteSpace(),zU):Nt(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):Ka(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:pt(e)}},A.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},A.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},A.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},A.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();Qr(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var n=!1;t===qs&&e.length<6;)e.push(t),t=this.consumeCodePoint(),n=!0;if(n){var r=parseInt(pt.apply(void 0,e.map(function(o){return o===qs?am:o})),16),i=parseInt(pt.apply(void 0,e.map(function(o){return o===qs?dm:o})),16);return{type:30,start:r,end:i}}var s=parseInt(pt.apply(void 0,e),16);if(this.peekCodePoint(0)===jt&&Qr(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];Qr(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var i=parseInt(pt.apply(void 0,a),16);return{type:30,start:s,end:i}}else return{type:30,start:s,end:s}},A.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Js?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Js?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},A.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===RA)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===$s||t===Ys){var n=this.consumeStringToken(this.consumeCodePoint());return n.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===RA||this.peekCodePoint(0)===bi)?(this.consumeCodePoint(),{type:22,value:n.value}):(this.consumeBadUrlRemnants(),ta)}for(;;){var r=this.consumeCodePoint();if(r===RA||r===bi)return{type:22,value:pt.apply(void 0,e)};if(Zs(r))return this.consumeWhiteSpace(),this.peekCodePoint(0)===RA||this.peekCodePoint(0)===bi?(this.consumeCodePoint(),{type:22,value:pt.apply(void 0,e)}):(this.consumeBadUrlRemnants(),ta);if(r===Ys||r===$s||r===Js||EU(r))return this.consumeBadUrlRemnants(),ta;if(r===Vi)if(xn(r,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),ta;else e.push(r)}},A.prototype.consumeWhiteSpace=function(){for(;Zs(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===bi||e===RA)return;xn(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(e){for(var t=5e4,n="";e>0;){var r=Math.min(t,e);n+=pt.apply(void 0,this._value.splice(0,r)),e-=r}return this._value.shift(),n},A.prototype.consumeStringToken=function(e){var t="",n=0;do{var r=this._value[n];if(r===RA||r===void 0||r===e)return t+=this.consumeStringSlice(n),{type:0,value:t};if(r===za)return this._value.splice(0,n),HU;if(r===Vi){var i=this._value[n+1];i!==RA&&i!==void 0&&(i===za?(t+=this.consumeStringSlice(n),n=-1,this._value.shift()):xn(r,i)&&(t+=this.consumeStringSlice(n),t+=pt(this.consumeEscapedCodePoint()),n=-1))}n++}while(!0)},A.prototype.consumeNumber=function(){var e=[],t=os,n=this.peekCodePoint(0);for((n===$n||n===jt)&&e.push(this.consumeCodePoint());Nt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());n=this.peekCodePoint(0);var r=this.peekCodePoint(1);if(n===ts&&Nt(r))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=rh;Nt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());n=this.peekCodePoint(0),r=this.peekCodePoint(1);var i=this.peekCodePoint(2);if((n===um||n===lm)&&((r===$n||r===jt)&&Nt(i)||Nt(r)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=rh;Nt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[yU(e),t]},A.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],n=e[1],r=this.peekCodePoint(0),i=this.peekCodePoint(1),s=this.peekCodePoint(2);if(ea(r,i,s)){var a=this.consumeName();return{type:15,number:t,flags:n,unit:a}}return r===Wb?(this.consumeCodePoint(),{type:16,number:t,flags:n}):{type:17,number:t,flags:n}},A.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Qr(e)){for(var t=pt(e);Qr(this.peekCodePoint(0))&&t.length<6;)t+=pt(this.consumeCodePoint());Zs(this.peekCodePoint(0))&&this.consumeCodePoint();var n=parseInt(t,16);return n===0||vU(n)||n>1114111?ah:n}return e===RA?ah:e},A.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(oh(t))e+=pt(t);else if(xn(t,this.peekCodePoint(0)))e+=pt(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},A}(),hm=function(){function A(e){this._tokens=e}return A.create=function(e){var t=new fm;return t.write(e),new A(t.read())},A.parseValue=function(e){return A.create(e).parseComponentValue()},A.parseValues=function(e){return A.create(e).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},A.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},A.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},n=this.consumeToken();;){if(n.type===32||WU(n,e))return t;this.reconsumeToken(n),t.values.push(this.consumeComponentValue()),n=this.consumeToken()}},A.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var n=this.consumeToken();if(n.type===32||n.type===3)return t;this.reconsumeToken(n),t.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?Oc:e},A.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},A}(),ls=function(A){return A.type===15},pi=function(A){return A.type===17},Ze=function(A){return A.type===20},KU=function(A){return A.type===0},Gc=function(A,e){return Ze(A)&&A.value===e},pm=function(A){return A.type!==31},si=function(A){return A.type!==31&&A.type!==4},kA=function(A){var e=[],t=[];return A.forEach(function(n){if(n.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}n.type!==31&&t.push(n)}),t.length&&e.push(t),e},WU=function(A,e){return e===11&&A.type===12||e===28&&A.type===29?!0:e===2&&A.type===3},Ln=function(A){return A.type===17||A.type===15},xt=function(A){return A.type===16||Ln(A)},gm=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},Lt={type:17,number:0,flags:os},_u={type:16,number:50,flags:os},Sn={type:16,number:100,flags:os},Di=function(A,e,t){var n=A[0],r=A[1];return[nt(n,e),nt(typeof r<"u"?r:n,t)]},nt=function(A,e){if(A.type===16)return A.number/100*e;if(ls(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},mm="deg",Bm="grad",vm="rad",wm="turn",Eo={name:"angle",parse:function(A,e){if(e.type===15)switch(e.unit){case mm:return Math.PI*e.number/180;case Bm:return Math.PI/200*e.number;case vm:return e.number;case wm:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},xm=function(A){return A.type===15&&(A.unit===mm||A.unit===Bm||A.unit===vm||A.unit===wm)},Cm=function(A){var e=A.filter(Ze).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Lt,Lt];case"to top":case"bottom":return mA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Lt,Sn];case"to right":case"left":return mA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Sn,Sn];case"to bottom":case"top":return mA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Sn,Lt];case"to left":case"right":return mA(270)}return 0},mA=function(A){return Math.PI*A/180},Tn={name:"color",parse:function(A,e){if(e.type===18){var t=XU[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(e.type===5){if(e.value.length===3){var n=e.value.substring(0,1),r=e.value.substring(1,2),i=e.value.substring(2,3);return bn(parseInt(n+n,16),parseInt(r+r,16),parseInt(i+i,16),1)}if(e.value.length===4){var n=e.value.substring(0,1),r=e.value.substring(1,2),i=e.value.substring(2,3),s=e.value.substring(3,4);return bn(parseInt(n+n,16),parseInt(r+r,16),parseInt(i+i,16),parseInt(s+s,16)/255)}if(e.value.length===6){var n=e.value.substring(0,2),r=e.value.substring(2,4),i=e.value.substring(4,6);return bn(parseInt(n,16),parseInt(r,16),parseInt(i,16),1)}if(e.value.length===8){var n=e.value.substring(0,2),r=e.value.substring(2,4),i=e.value.substring(4,6),s=e.value.substring(6,8);return bn(parseInt(n,16),parseInt(r,16),parseInt(i,16),parseInt(s,16)/255)}}if(e.type===20){var a=cn[e.value.toUpperCase()];if(typeof a<"u")return a}return cn.TRANSPARENT}},In=function(A){return(255&A)===0},Ut=function(A){var e=255&A,t=255&A>>8,n=255&A>>16,r=255&A>>24;return e<255?"rgba("+r+","+n+","+t+","+e/255+")":"rgb("+r+","+n+","+t+")"},bn=function(A,e,t,n){return(A<<24|e<<16|t<<8|Math.round(n*255)<<0)>>>0},lh=function(A,e){if(A.type===17)return A.number;if(A.type===16){var t=e===3?1:255;return e===3?A.number/100*t:Math.round(A.number/100*t)}return 0},ch=function(A,e){var t=e.filter(si);if(t.length===3){var n=t.map(lh),r=n[0],i=n[1],s=n[2];return bn(r,i,s,1)}if(t.length===4){var a=t.map(lh),r=a[0],i=a[1],s=a[2],o=a[3];return bn(r,i,s,o)}return 0};function Rl(A,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-A)*t*6+A:t<1/2?e:t<2/3?(e-A)*6*(2/3-t)+A:A}var uh=function(A,e){var t=e.filter(si),n=t[0],r=t[1],i=t[2],s=t[3],a=(n.type===17?mA(n.number):Eo.parse(A,n))/(Math.PI*2),o=xt(r)?r.number/100:0,l=xt(i)?i.number/100:0,c=typeof s<"u"&&xt(s)?nt(s,1):1;if(o===0)return bn(l*255,l*255,l*255,1);var u=l<=.5?l*(o+1):l+o-l*o,d=l*2-u,h=Rl(d,u,a+1/3),g=Rl(d,u,a),m=Rl(d,u,a-1/3);return bn(h*255,g*255,m*255,c)},XU={hsl:uh,hsla:uh,rgb:ch,rgba:ch},ki=function(A,e){return Tn.parse(A,hm.create(e).parseComponentValue())},cn={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},jU={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(Ze(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},YU={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},yo=function(A,e){var t=Tn.parse(A,e[0]),n=e[1];return n&&xt(n)?{color:t,stop:n}:{color:t,stop:null}},dh=function(A,e){var t=A[0],n=A[A.length-1];t.stop===null&&(t.stop=Lt),n.stop===null&&(n.stop=Sn);for(var r=[],i=0,s=0;s<A.length;s++){var a=A[s].stop;if(a!==null){var o=nt(a,e);o>i?r.push(o):r.push(i),i=o}else r.push(null)}for(var l=null,s=0;s<r.length;s++){var c=r[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var u=s-l,d=r[l-1],h=(c-d)/(u+1),g=1;g<=u;g++)r[l+g-1]=h*g;l=null}}return A.map(function(m,p){var f=m.color;return{color:f,stop:Math.max(Math.min(1,r[p]/e),0)}})},$U=function(A,e,t){var n=e/2,r=t/2,i=nt(A[0],e)-n,s=r-nt(A[1],t);return(Math.atan2(s,i)+Math.PI*2)%(Math.PI*2)},JU=function(A,e,t){var n=typeof A=="number"?A:$U(A,e,t),r=Math.abs(e*Math.sin(n))+Math.abs(t*Math.cos(n)),i=e/2,s=t/2,a=r/2,o=Math.sin(n-Math.PI/2)*a,l=Math.cos(n-Math.PI/2)*a;return[r,i-l,i+l,s-o,s+o]},bA=function(A,e){return Math.sqrt(A*A+e*e)},fh=function(A,e,t,n,r){var i=[[0,0],[0,e],[A,0],[A,e]];return i.reduce(function(s,a){var o=a[0],l=a[1],c=bA(t-o,n-l);return(r?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:a,optimumDistance:c}:s},{optimumDistance:r?1/0:-1/0,optimumCorner:null}).optimumCorner},qU=function(A,e,t,n,r){var i=0,s=0;switch(A.size){case 0:A.shape===0?i=s=Math.min(Math.abs(e),Math.abs(e-n),Math.abs(t),Math.abs(t-r)):A.shape===1&&(i=Math.min(Math.abs(e),Math.abs(e-n)),s=Math.min(Math.abs(t),Math.abs(t-r)));break;case 2:if(A.shape===0)i=s=Math.min(bA(e,t),bA(e,t-r),bA(e-n,t),bA(e-n,t-r));else if(A.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-r))/Math.min(Math.abs(e),Math.abs(e-n)),o=fh(n,r,e,t,!0),l=o[0],c=o[1];i=bA(l-e,(c-t)/a),s=a*i}break;case 1:A.shape===0?i=s=Math.max(Math.abs(e),Math.abs(e-n),Math.abs(t),Math.abs(t-r)):A.shape===1&&(i=Math.max(Math.abs(e),Math.abs(e-n)),s=Math.max(Math.abs(t),Math.abs(t-r)));break;case 3:if(A.shape===0)i=s=Math.max(bA(e,t),bA(e,t-r),bA(e-n,t),bA(e-n,t-r));else if(A.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-r))/Math.max(Math.abs(e),Math.abs(e-n)),u=fh(n,r,e,t,!1),l=u[0],c=u[1];i=bA(l-e,(c-t)/a),s=a*i}break}return Array.isArray(A.size)&&(i=nt(A.size[0],n),s=A.size.length===2?nt(A.size[1],r):i),[i,s]},ZU=function(A,e){var t=mA(180),n=[];return kA(e).forEach(function(r,i){if(i===0){var s=r[0];if(s.type===20&&s.value==="to"){t=Cm(r);return}else if(xm(s)){t=Eo.parse(A,s);return}}var a=yo(A,r);n.push(a)}),{angle:t,stops:n,type:1}},Aa=function(A,e){var t=mA(180),n=[];return kA(e).forEach(function(r,i){if(i===0){var s=r[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){t=Cm(r);return}else if(xm(s)){t=(Eo.parse(A,s)+mA(270))%mA(360);return}}var a=yo(A,r);n.push(a)}),{angle:t,stops:n,type:1}},eM=function(A,e){var t=mA(180),n=[],r=1,i=0,s=3,a=[];return kA(e).forEach(function(o,l){var c=o[0];if(l===0){if(Ze(c)&&c.value==="linear"){r=1;return}else if(Ze(c)&&c.value==="radial"){r=2;return}}if(c.type===18){if(c.name==="from"){var u=Tn.parse(A,c.values[0]);n.push({stop:Lt,color:u})}else if(c.name==="to"){var u=Tn.parse(A,c.values[0]);n.push({stop:Sn,color:u})}else if(c.name==="color-stop"){var d=c.values.filter(si);if(d.length===2){var u=Tn.parse(A,d[1]),h=d[0];pi(h)&&n.push({stop:{type:16,number:h.number*100,flags:h.flags},color:u})}}}}),r===1?{angle:(t+mA(180))%mA(360),stops:n,type:r}:{size:s,shape:i,stops:n,position:a,type:r}},_m="closest-side",Em="farthest-side",ym="closest-corner",Sm="farthest-corner",bm="circle",Um="ellipse",Mm="cover",Fm="contain",tM=function(A,e){var t=0,n=3,r=[],i=[];return kA(e).forEach(function(s,a){var o=!0;if(a===0){var l=!1;o=s.reduce(function(u,d){if(l)if(Ze(d))switch(d.value){case"center":return i.push(_u),u;case"top":case"left":return i.push(Lt),u;case"right":case"bottom":return i.push(Sn),u}else(xt(d)||Ln(d))&&i.push(d);else if(Ze(d))switch(d.value){case bm:return t=0,!1;case Um:return t=1,!1;case"at":return l=!0,!1;case _m:return n=0,!1;case Mm:case Em:return n=1,!1;case Fm:case ym:return n=2,!1;case Sm:return n=3,!1}else if(Ln(d)||xt(d))return Array.isArray(n)||(n=[]),n.push(d),!1;return u},o)}if(o){var c=yo(A,s);r.push(c)}}),{size:n,shape:t,stops:r,position:i,type:2}},na=function(A,e){var t=0,n=3,r=[],i=[];return kA(e).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(c,u){if(Ze(u))switch(u.value){case"center":return i.push(_u),!1;case"top":case"left":return i.push(Lt),!1;case"right":case"bottom":return i.push(Sn),!1}else if(xt(u)||Ln(u))return i.push(u),!1;return c},o):a===1&&(o=s.reduce(function(c,u){if(Ze(u))switch(u.value){case bm:return t=0,!1;case Um:return t=1,!1;case Fm:case _m:return n=0,!1;case Em:return n=1,!1;case ym:return n=2,!1;case Mm:case Sm:return n=3,!1}else if(Ln(u)||xt(u))return Array.isArray(n)||(n=[]),n.push(u),!1;return c},o)),o){var l=yo(A,s);r.push(l)}}),{size:n,shape:t,stops:r,position:i,type:2}},AM=function(A){return A.type===1},nM=function(A){return A.type===2},Eu={name:"image",parse:function(A,e){if(e.type===22){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(e.type===18){var n=Tm[e.name];if(typeof n>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return n(A,e.values)}throw new Error("Unsupported image type "+e.type)}};function rM(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!Tm[A.name])}var Tm={"linear-gradient":ZU,"-moz-linear-gradient":Aa,"-ms-linear-gradient":Aa,"-o-linear-gradient":Aa,"-webkit-linear-gradient":Aa,"radial-gradient":tM,"-moz-radial-gradient":na,"-ms-radial-gradient":na,"-o-radial-gradient":na,"-webkit-radial-gradient":na,"-webkit-gradient":eM},iM={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(n){return si(n)&&rM(n)}).map(function(n){return Eu.parse(A,n)})}},sM={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(Ze(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},aM={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return kA(e).map(function(t){return t.filter(xt)}).map(gm)}},oM={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return kA(e).map(function(t){return t.filter(Ze).map(function(n){return n.value}).join(" ")}).map(lM)}},lM=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Yr;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(Yr||(Yr={}));var cM={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return kA(e).map(function(t){return t.filter(uM)})}},uM=function(A){return Ze(A)||xt(A)},So=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},dM=So("top"),fM=So("right"),hM=So("bottom"),pM=So("left"),bo=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return gm(t.filter(xt))}}},gM=bo("top-left"),mM=bo("top-right"),BM=bo("bottom-right"),vM=bo("bottom-left"),Uo=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},wM=Uo("top"),xM=Uo("right"),CM=Uo("bottom"),_M=Uo("left"),Mo=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return ls(t)?t.number:0}}},EM=Mo("top"),yM=Mo("right"),SM=Mo("bottom"),bM=Mo("left"),UM={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},MM={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},FM={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(Ze).reduce(function(t,n){return t|TM(n.value)},0)}},TM=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},IM={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},QM={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},Wa;(function(A){A.NORMAL="normal",A.STRICT="strict"})(Wa||(Wa={}));var LM={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"strict":return Wa.STRICT;case"normal":default:return Wa.NORMAL}}},RM={name:"line-height",initialValue:"normal",prefix:!1,type:4},hh=function(A,e){return Ze(A)&&A.value==="normal"?1.2*e:A.type===17?e*A.number:xt(A)?nt(A,e):e},DM={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return e.type===20&&e.value==="none"?null:Eu.parse(A,e)}},HM={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},Vc={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Fo=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},PM=Fo("top"),NM=Fo("right"),OM=Fo("bottom"),GM=Fo("left"),VM={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(Ze).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},kM={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},To=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},zM=To("top"),KM=To("right"),WM=To("bottom"),XM=To("left"),jM={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},YM={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},$M={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Gc(e[0],"none")?[]:kA(e).map(function(t){for(var n={color:cn.TRANSPARENT,offsetX:Lt,offsetY:Lt,blur:Lt},r=0,i=0;i<t.length;i++){var s=t[i];Ln(s)?(r===0?n.offsetX=s:r===1?n.offsetY=s:n.blur=s,r++):n.color=Tn.parse(A,s)}return n})}},JM={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},qM={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=t1[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},ZM=function(A){var e=A.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},e1=function(A){var e=A.filter(function(o){return o.type===17}).map(function(o){return o.number}),t=e[0],n=e[1];e[2],e[3];var r=e[4],i=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],a=e[13];return e[14],e[15],e.length===16?[t,n,r,i,s,a]:null},t1={matrix:ZM,matrix3d:e1},ph={type:16,number:50,flags:os},A1=[ph,ph],n1={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){var t=e.filter(xt);return t.length!==2?A1:[t[0],t[1]]}},r1={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},zi;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(zi||(zi={}));var i1={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return zi.BREAK_ALL;case"keep-all":return zi.KEEP_ALL;case"normal":default:return zi.NORMAL}}},s1={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(e.type===20)return{auto:!0,order:0};if(pi(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},Im={name:"time",parse:function(A,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},a1={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return pi(e)?e.number:1}},o1={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},l1={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(Ze).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},c1={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],n=[];return e.forEach(function(r){switch(r.type){case 20:case 0:t.push(r.value);break;case 17:t.push(r.number.toString());break;case 4:n.push(t.join(" ")),t.length=0;break}}),t.length&&n.push(t.join(" ")),n.map(function(r){return r.indexOf(" ")===-1?r:"'"+r+"'"})}},u1={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},d1={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){if(pi(e))return e.number;if(Ze(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},f1={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(Ze).map(function(t){return t.value})}},h1={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},_t=function(A,e){return(A&e)!==0},p1={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},g1={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var n=[],r=e.filter(pm),i=0;i<r.length;i++){var s=r[i],a=r[i+1];if(s.type===20){var o=a&&pi(a)?a.number:1;n.push({counter:s.value,increment:o})}}return n}},m1={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return[];for(var t=[],n=e.filter(pm),r=0;r<n.length;r++){var i=n[r],s=n[r+1];if(Ze(i)&&i.value!=="none"){var a=s&&pi(s)?s.number:0;t.push({counter:i.value,reset:a})}}return t}},B1={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,e){return e.filter(ls).map(function(t){return Im.parse(A,t)})}},v1={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var n=[],r=e.filter(KU);if(r.length%2!==0)return null;for(var i=0;i<r.length;i+=2){var s=r[i].value,a=r[i+1].value;n.push({open:s,close:a})}return n}},gh=function(A,e,t){if(!A)return"";var n=A[Math.min(e,A.length-1)];return n?t?n.open:n.close:""},w1={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Gc(e[0],"none")?[]:kA(e).map(function(t){for(var n={color:255,offsetX:Lt,offsetY:Lt,blur:Lt,spread:Lt,inset:!1},r=0,i=0;i<t.length;i++){var s=t[i];Gc(s,"inset")?n.inset=!0:Ln(s)?(r===0?n.offsetX=s:r===1?n.offsetY=s:r===2?n.blur=s:n.spread=s,r++):n.color=Tn.parse(A,s)}return n})}},x1={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[0,1,2],n=[];return e.filter(Ze).forEach(function(r){switch(r.value){case"stroke":n.push(1);break;case"fill":n.push(0);break;case"markers":n.push(2);break}}),t.forEach(function(r){n.indexOf(r)===-1&&n.push(r)}),n}},C1={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},_1={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return ls(e)?e.number:0}},E1=function(){function A(e,t){var n,r;this.animationDuration=fe(e,B1,t.animationDuration),this.backgroundClip=fe(e,jU,t.backgroundClip),this.backgroundColor=fe(e,YU,t.backgroundColor),this.backgroundImage=fe(e,iM,t.backgroundImage),this.backgroundOrigin=fe(e,sM,t.backgroundOrigin),this.backgroundPosition=fe(e,aM,t.backgroundPosition),this.backgroundRepeat=fe(e,oM,t.backgroundRepeat),this.backgroundSize=fe(e,cM,t.backgroundSize),this.borderTopColor=fe(e,dM,t.borderTopColor),this.borderRightColor=fe(e,fM,t.borderRightColor),this.borderBottomColor=fe(e,hM,t.borderBottomColor),this.borderLeftColor=fe(e,pM,t.borderLeftColor),this.borderTopLeftRadius=fe(e,gM,t.borderTopLeftRadius),this.borderTopRightRadius=fe(e,mM,t.borderTopRightRadius),this.borderBottomRightRadius=fe(e,BM,t.borderBottomRightRadius),this.borderBottomLeftRadius=fe(e,vM,t.borderBottomLeftRadius),this.borderTopStyle=fe(e,wM,t.borderTopStyle),this.borderRightStyle=fe(e,xM,t.borderRightStyle),this.borderBottomStyle=fe(e,CM,t.borderBottomStyle),this.borderLeftStyle=fe(e,_M,t.borderLeftStyle),this.borderTopWidth=fe(e,EM,t.borderTopWidth),this.borderRightWidth=fe(e,yM,t.borderRightWidth),this.borderBottomWidth=fe(e,SM,t.borderBottomWidth),this.borderLeftWidth=fe(e,bM,t.borderLeftWidth),this.boxShadow=fe(e,w1,t.boxShadow),this.color=fe(e,UM,t.color),this.direction=fe(e,MM,t.direction),this.display=fe(e,FM,t.display),this.float=fe(e,IM,t.cssFloat),this.fontFamily=fe(e,c1,t.fontFamily),this.fontSize=fe(e,u1,t.fontSize),this.fontStyle=fe(e,h1,t.fontStyle),this.fontVariant=fe(e,f1,t.fontVariant),this.fontWeight=fe(e,d1,t.fontWeight),this.letterSpacing=fe(e,QM,t.letterSpacing),this.lineBreak=fe(e,LM,t.lineBreak),this.lineHeight=fe(e,RM,t.lineHeight),this.listStyleImage=fe(e,DM,t.listStyleImage),this.listStylePosition=fe(e,HM,t.listStylePosition),this.listStyleType=fe(e,Vc,t.listStyleType),this.marginTop=fe(e,PM,t.marginTop),this.marginRight=fe(e,NM,t.marginRight),this.marginBottom=fe(e,OM,t.marginBottom),this.marginLeft=fe(e,GM,t.marginLeft),this.opacity=fe(e,a1,t.opacity);var i=fe(e,VM,t.overflow);this.overflowX=i[0],this.overflowY=i[i.length>1?1:0],this.overflowWrap=fe(e,kM,t.overflowWrap),this.paddingTop=fe(e,zM,t.paddingTop),this.paddingRight=fe(e,KM,t.paddingRight),this.paddingBottom=fe(e,WM,t.paddingBottom),this.paddingLeft=fe(e,XM,t.paddingLeft),this.paintOrder=fe(e,x1,t.paintOrder),this.position=fe(e,YM,t.position),this.textAlign=fe(e,jM,t.textAlign),this.textDecorationColor=fe(e,o1,(n=t.textDecorationColor)!==null&&n!==void 0?n:t.color),this.textDecorationLine=fe(e,l1,(r=t.textDecorationLine)!==null&&r!==void 0?r:t.textDecoration),this.textShadow=fe(e,$M,t.textShadow),this.textTransform=fe(e,JM,t.textTransform),this.transform=fe(e,qM,t.transform),this.transformOrigin=fe(e,n1,t.transformOrigin),this.visibility=fe(e,r1,t.visibility),this.webkitTextStrokeColor=fe(e,C1,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=fe(e,_1,t.webkitTextStrokeWidth),this.wordBreak=fe(e,i1,t.wordBreak),this.zIndex=fe(e,s1,t.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return In(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return _t(this.display,4)||_t(this.display,33554432)||_t(this.display,268435456)||_t(this.display,536870912)||_t(this.display,67108864)||_t(this.display,134217728)},A}(),y1=function(){function A(e,t){this.content=fe(e,p1,t.content),this.quotes=fe(e,v1,t.quotes)}return A}(),mh=function(){function A(e,t){this.counterIncrement=fe(e,g1,t.counterIncrement),this.counterReset=fe(e,m1,t.counterReset)}return A}(),fe=function(A,e,t){var n=new fm,r=t!==null&&typeof t<"u"?t.toString():e.initialValue;n.write(r);var i=new hm(n.read());switch(e.type){case 2:var s=i.parseComponentValue();return e.parse(A,Ze(s)?s.value:e.initialValue);case 0:return e.parse(A,i.parseComponentValue());case 1:return e.parse(A,i.parseComponentValues());case 4:return i.parseComponentValue();case 3:switch(e.format){case"angle":return Eo.parse(A,i.parseComponentValue());case"color":return Tn.parse(A,i.parseComponentValue());case"image":return Eu.parse(A,i.parseComponentValue());case"length":var a=i.parseComponentValue();return Ln(a)?a:Lt;case"length-percentage":var o=i.parseComponentValue();return xt(o)?o:Lt;case"time":return Im.parse(A,i.parseComponentValue())}break}},S1="data-html2canvas-debug",b1=function(A){var e=A.getAttribute(S1);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},kc=function(A,e){var t=b1(A);return t===1||e===t},zA=function(){function A(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,kc(t,3))debugger;this.styles=new E1(e,window.getComputedStyle(t,null)),Wc(t)&&(this.styles.animationDuration.some(function(n){return n>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=Co(this.context,t),kc(t,4)&&(this.flags|=16)}return A}(),U1="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Bh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Hi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ra=0;ra<Bh.length;ra++)Hi[Bh.charCodeAt(ra)]=ra;var M1=function(A){var e=A.length*.75,t=A.length,n,r=0,i,s,a,o;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(n=0;n<t;n+=4)i=Hi[A.charCodeAt(n)],s=Hi[A.charCodeAt(n+1)],a=Hi[A.charCodeAt(n+2)],o=Hi[A.charCodeAt(n+3)],c[r++]=i<<2|s>>4,c[r++]=(s&15)<<4|a>>2,c[r++]=(a&3)<<6|o&63;return l},F1=function(A){for(var e=A.length,t=[],n=0;n<e;n+=2)t.push(A[n+1]<<8|A[n]);return t},T1=function(A){for(var e=A.length,t=[],n=0;n<e;n+=4)t.push(A[n+3]<<24|A[n+2]<<16|A[n+1]<<8|A[n]);return t},sr=5,yu=11,Dl=2,I1=yu-sr,Qm=65536>>sr,Q1=1<<sr,Hl=Q1-1,L1=1024>>sr,R1=Qm+L1,D1=R1,H1=32,P1=D1+H1,N1=65536>>yu,O1=1<<I1,G1=O1-1,vh=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},V1=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},k1=function(A,e){var t=M1(A),n=Array.isArray(t)?T1(t):new Uint32Array(t),r=Array.isArray(t)?F1(t):new Uint16Array(t),i=24,s=vh(r,i/2,n[4]/2),a=n[5]===2?vh(r,(i+n[4])/2):V1(n,Math.ceil((i+n[4])/4));return new z1(n[0],n[1],n[2],n[3],s,a)},z1=function(){function A(e,t,n,r,i,s){this.initialValue=e,this.errorValue=t,this.highStart=n,this.highValueIndex=r,this.index=i,this.data=s}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>sr],t=(t<<Dl)+(e&Hl),this.data[t];if(e<=65535)return t=this.index[Qm+(e-55296>>sr)],t=(t<<Dl)+(e&Hl),this.data[t];if(e<this.highStart)return t=P1-N1+(e>>yu),t=this.index[t],t+=e>>sr&G1,t=this.index[t],t=(t<<Dl)+(e&Hl),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),wh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",K1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ia=0;ia<wh.length;ia++)K1[wh.charCodeAt(ia)]=ia;var W1=1,Pl=2,Nl=3,xh=4,Ch=5,X1=7,_h=8,Ol=9,Gl=10,Eh=11,yh=12,Sh=13,bh=14,Vl=15,j1=function(A){for(var e=[],t=0,n=A.length;t<n;){var r=A.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var i=A.charCodeAt(t++);(i&64512)===56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),t--)}else e.push(r)}return e},Y1=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var n=[],r=-1,i="";++r<t;){var s=A[r];s<=65535?n.push(s):(s-=65536,n.push((s>>10)+55296,s%1024+56320)),(r+1===t||n.length>16384)&&(i+=String.fromCharCode.apply(String,n),n.length=0)}return i},$1=k1(U1),fA="×",kl="÷",J1=function(A){return $1.get(A)},q1=function(A,e,t){var n=t-2,r=e[n],i=e[t-1],s=e[t];if(i===Pl&&s===Nl)return fA;if(i===Pl||i===Nl||i===xh||s===Pl||s===Nl||s===xh)return kl;if(i===_h&&[_h,Ol,Eh,yh].indexOf(s)!==-1||(i===Eh||i===Ol)&&(s===Ol||s===Gl)||(i===yh||i===Gl)&&s===Gl||s===Sh||s===Ch||s===X1||i===W1)return fA;if(i===Sh&&s===bh){for(;r===Ch;)r=e[--n];if(r===bh)return fA}if(i===Vl&&s===Vl){for(var a=0;r===Vl;)a++,r=e[--n];if(a%2===0)return fA}return kl},Z1=function(A){var e=j1(A),t=e.length,n=0,r=0,i=e.map(J1);return{next:function(){if(n>=t)return{done:!0,value:null};for(var s=fA;n<t&&(s=q1(e,i,++n))===fA;);if(s!==fA||n===t){var a=Y1.apply(null,e.slice(r,n));return r=n,{value:a,done:!1}}return{done:!0,value:null}}}},eF=function(A){for(var e=Z1(A),t=[],n;!(n=e.next()).done;)n.value&&t.push(n.value.slice());return t},tF=function(A){var e=123;if(A.createRange){var t=A.createRange();if(t.getBoundingClientRect){var n=A.createElement("boundtest");n.style.height=e+"px",n.style.display="block",A.body.appendChild(n),t.selectNode(n);var r=t.getBoundingClientRect(),i=Math.round(r.height);if(A.body.removeChild(n),i===e)return!0}}return!1},AF=function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var t=A.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var n=e.firstChild,r=_o(n.data).map(function(o){return pt(o)}),i=0,s={},a=r.every(function(o,l){t.setStart(n,i),t.setEnd(n,i+o.length);var c=t.getBoundingClientRect();i+=o.length;var u=c.x>s.x||c.y>s.y;return s=c,l===0?!0:u});return A.body.removeChild(e),a},nF=function(){return typeof new Image().crossOrigin<"u"},rF=function(){return typeof new XMLHttpRequest().responseType=="string"},iF=function(A){var e=new Image,t=A.createElement("canvas"),n=t.getContext("2d");if(!n)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{n.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},Uh=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},sF=function(A){var e=A.createElement("canvas"),t=100;e.width=t,e.height=t;var n=e.getContext("2d");if(!n)return Promise.reject(!1);n.fillStyle="rgb(0, 255, 0)",n.fillRect(0,0,t,t);var r=new Image,i=e.toDataURL();r.src=i;var s=zc(t,t,0,0,r);return n.fillStyle="red",n.fillRect(0,0,t,t),Mh(s).then(function(a){n.drawImage(a,0,0);var o=n.getImageData(0,0,t,t).data;n.fillStyle="red",n.fillRect(0,0,t,t);var l=A.createElement("div");return l.style.backgroundImage="url("+i+")",l.style.height=t+"px",Uh(o)?Mh(zc(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return n.drawImage(a,0,0),Uh(n.getImageData(0,0,t,t).data)}).catch(function(){return!1})},zc=function(A,e,t,n,r){var i="http://www.w3.org/2000/svg",s=document.createElementNS(i,"svg"),a=document.createElementNS(i,"foreignObject");return s.setAttributeNS(null,"width",A.toString()),s.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",n.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(r),s},Mh=function(A){return new Promise(function(e,t){var n=new Image;n.onload=function(){return e(n)},n.onerror=t,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},Qt={get SUPPORT_RANGE_BOUNDS(){var A=tF(document);return Object.defineProperty(Qt,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=Qt.SUPPORT_RANGE_BOUNDS&&AF(document);return Object.defineProperty(Qt,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=iF(document);return Object.defineProperty(Qt,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?sF(document):Promise.resolve(!1);return Object.defineProperty(Qt,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=nF();return Object.defineProperty(Qt,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=rF();return Object.defineProperty(Qt,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Qt,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Qt,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},Ki=function(){function A(e,t){this.text=e,this.bounds=t}return A}(),aF=function(A,e,t,n){var r=cF(e,t),i=[],s=0;return r.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(Qt.SUPPORT_RANGE_BOUNDS){var o=Fh(n,s,a.length).getClientRects();if(o.length>1){var l=Su(a),c=0;l.forEach(function(d){i.push(new Ki(d,un.fromDOMRectList(A,Fh(n,c+s,d.length).getClientRects()))),c+=d.length})}else i.push(new Ki(a,un.fromDOMRectList(A,o)))}else{var u=n.splitText(a.length);i.push(new Ki(a,oF(A,n))),n=u}else Qt.SUPPORT_RANGE_BOUNDS||(n=n.splitText(a.length));s+=a.length}),i},oF=function(A,e){var t=e.ownerDocument;if(t){var n=t.createElement("html2canvaswrapper");n.appendChild(e.cloneNode(!0));var r=e.parentNode;if(r){r.replaceChild(n,e);var i=Co(A,n);return n.firstChild&&r.replaceChild(n.firstChild,n),i}}return un.EMPTY},Fh=function(A,e,t){var n=A.ownerDocument;if(!n)throw new Error("Node has no owner document");var r=n.createRange();return r.setStart(A,e),r.setEnd(A,e+t),r},Su=function(A){if(Qt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(t){return t.segment})}return eF(A)},lF=function(A,e){if(Qt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(n){return n.segment})}return dF(A,e)},cF=function(A,e){return e.letterSpacing!==0?Su(A):lF(A,e)},uF=[32,160,4961,65792,65793,4153,4241],dF=function(A,e){for(var t=Nb(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),n=[],r,i=function(){if(r.value){var s=r.value.slice(),a=_o(s),o="";a.forEach(function(l){uF.indexOf(l)===-1?o+=pt(l):(o.length&&n.push(o),n.push(pt(l)),o="")}),o.length&&n.push(o)}};!(r=t.next()).done;)i();return n},fF=function(){function A(e,t,n){this.text=hF(t.data,n.textTransform),this.textBounds=aF(e,this.text,n,t)}return A}(),hF=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(pF,gF);case 2:return A.toUpperCase();default:return A}},pF=/(^|\s|:|-|\(|\))([a-z])/g,gF=function(A,e,t){return A.length>0?e+t.toUpperCase():A},Lm=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this;return r.src=n.currentSrc||n.src,r.intrinsicWidth=n.naturalWidth,r.intrinsicHeight=n.naturalHeight,r.context.cache.addImage(r.src),r}return e}(zA),Rm=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this;return r.canvas=n,r.intrinsicWidth=n.width,r.intrinsicHeight=n.height,r}return e}(zA),Dm=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this,i=new XMLSerializer,s=Co(t,n);return n.setAttribute("width",s.width+"px"),n.setAttribute("height",s.height+"px"),r.svg="data:image/svg+xml,"+encodeURIComponent(i.serializeToString(n)),r.intrinsicWidth=n.width.baseVal.value,r.intrinsicHeight=n.height.baseVal.value,r.context.cache.addImage(r.svg),r}return e}(zA),Hm=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this;return r.value=n.value,r}return e}(zA),Kc=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this;return r.start=n.start,r.reversed=typeof n.reversed=="boolean"&&n.reversed===!0,r}return e}(zA),mF=[{type:15,flags:0,unit:"px",number:3}],BF=[{type:16,flags:0,number:50}],vF=function(A){return A.width>A.height?new un(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new un(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},wF=function(A){var e=A.type===xF?new Array(A.value.length+1).join("•"):A.value;return e.length===0?A.placeholder||"":e},Xa="checkbox",ja="radio",xF="password",Th=707406591,bu=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this;switch(r.type=n.type.toLowerCase(),r.checked=n.checked,r.value=wF(n),(r.type===Xa||r.type===ja)&&(r.styles.backgroundColor=3739148031,r.styles.borderTopColor=r.styles.borderRightColor=r.styles.borderBottomColor=r.styles.borderLeftColor=2779096575,r.styles.borderTopWidth=r.styles.borderRightWidth=r.styles.borderBottomWidth=r.styles.borderLeftWidth=1,r.styles.borderTopStyle=r.styles.borderRightStyle=r.styles.borderBottomStyle=r.styles.borderLeftStyle=1,r.styles.backgroundClip=[0],r.styles.backgroundOrigin=[0],r.bounds=vF(r.bounds)),r.type){case Xa:r.styles.borderTopRightRadius=r.styles.borderTopLeftRadius=r.styles.borderBottomRightRadius=r.styles.borderBottomLeftRadius=mF;break;case ja:r.styles.borderTopRightRadius=r.styles.borderTopLeftRadius=r.styles.borderBottomRightRadius=r.styles.borderBottomLeftRadius=BF;break}return r}return e}(zA),Pm=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this,i=n.options[n.selectedIndex||0];return r.value=i&&i.text||"",r}return e}(zA),Nm=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this;return r.value=n.value,r}return e}(zA),Om=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this;r.src=n.src,r.width=parseInt(n.width,10)||0,r.height=parseInt(n.height,10)||0,r.backgroundColor=r.styles.backgroundColor;try{if(n.contentWindow&&n.contentWindow.document&&n.contentWindow.document.documentElement){r.tree=Vm(t,n.contentWindow.document.documentElement);var i=n.contentWindow.document.documentElement?ki(t,getComputedStyle(n.contentWindow.document.documentElement).backgroundColor):cn.TRANSPARENT,s=n.contentWindow.document.body?ki(t,getComputedStyle(n.contentWindow.document.body).backgroundColor):cn.TRANSPARENT;r.backgroundColor=In(i)?In(s)?r.styles.backgroundColor:s:i}}catch{}return r}return e}(zA),CF=["OL","UL","MENU"],Sa=function(A,e,t,n){for(var r=e.firstChild,i=void 0;r;r=i)if(i=r.nextSibling,km(r)&&r.data.trim().length>0)t.textNodes.push(new fF(A,r,t.styles));else if(zr(r))if(Xm(r)&&r.assignedNodes)r.assignedNodes().forEach(function(a){return Sa(A,a,t,n)});else{var s=Gm(A,r);s.styles.isVisible()&&(_F(r,s,n)?s.flags|=4:EF(s.styles)&&(s.flags|=2),CF.indexOf(r.tagName)!==-1&&(s.flags|=8),t.elements.push(s),r.slot,r.shadowRoot?Sa(A,r.shadowRoot,s,n):!Ya(r)&&!zm(r)&&!$a(r)&&Sa(A,r,s,n))}},Gm=function(A,e){return Xc(e)?new Lm(A,e):Km(e)?new Rm(A,e):zm(e)?new Dm(A,e):yF(e)?new Hm(A,e):SF(e)?new Kc(A,e):bF(e)?new bu(A,e):$a(e)?new Pm(A,e):Ya(e)?new Nm(A,e):Wm(e)?new Om(A,e):new zA(A,e)},Vm=function(A,e){var t=Gm(A,e);return t.flags|=4,Sa(A,e,t,t),t},_F=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||Uu(A)&&t.styles.isTransparent()},EF=function(A){return A.isPositioned()||A.isFloating()},km=function(A){return A.nodeType===Node.TEXT_NODE},zr=function(A){return A.nodeType===Node.ELEMENT_NODE},Wc=function(A){return zr(A)&&typeof A.style<"u"&&!ba(A)},ba=function(A){return typeof A.className=="object"},yF=function(A){return A.tagName==="LI"},SF=function(A){return A.tagName==="OL"},bF=function(A){return A.tagName==="INPUT"},UF=function(A){return A.tagName==="HTML"},zm=function(A){return A.tagName==="svg"},Uu=function(A){return A.tagName==="BODY"},Km=function(A){return A.tagName==="CANVAS"},Ih=function(A){return A.tagName==="VIDEO"},Xc=function(A){return A.tagName==="IMG"},Wm=function(A){return A.tagName==="IFRAME"},Qh=function(A){return A.tagName==="STYLE"},MF=function(A){return A.tagName==="SCRIPT"},Ya=function(A){return A.tagName==="TEXTAREA"},$a=function(A){return A.tagName==="SELECT"},Xm=function(A){return A.tagName==="SLOT"},Lh=function(A){return A.tagName.indexOf("-")>0},FF=function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},A.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},A.prototype.pop=function(e){var t=this;e.forEach(function(n){return t.counters[n].pop()})},A.prototype.parse=function(e){var t=this,n=e.counterIncrement,r=e.counterReset,i=!0;n!==null&&n.forEach(function(a){var o=t.counters[a.counter];o&&a.increment!==0&&(i=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return i&&r.forEach(function(a){var o=t.counters[a.counter];s.push(a.counter),o||(o=t.counters[a.counter]=[]),o.push(a.reset)}),s},A}(),Rh={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Dh={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},TF={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},IF={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Lr=function(A,e,t,n,r,i){return A<e||A>t?As(A,r,i.length>0):n.integers.reduce(function(s,a,o){for(;A>=a;)A-=a,s+=n.values[o];return s},"")+i},jm=function(A,e,t,n){var r="";do t||A--,r=n(A)+r,A/=e;while(A*e>=e);return r},ht=function(A,e,t,n,r){var i=t-e+1;return(A<0?"-":"")+(jm(Math.abs(A),i,n,function(s){return pt(Math.floor(s%i)+e)})+r)},Vn=function(A,e,t){t===void 0&&(t=". ");var n=e.length;return jm(Math.abs(A),n,!1,function(r){return e[Math.floor(r%n)]})+t},Or=1,Bn=2,vn=4,Pi=8,en=function(A,e,t,n,r,i){if(A<-9999||A>9999)return As(A,4,r.length>0);var s=Math.abs(A),a=r;if(s===0)return e[0]+a;for(var o=0;s>0&&o<=4;o++){var l=s%10;l===0&&_t(i,Or)&&a!==""?a=e[l]+a:l>1||l===1&&o===0||l===1&&o===1&&_t(i,Bn)||l===1&&o===1&&_t(i,vn)&&A>100||l===1&&o>1&&_t(i,Pi)?a=e[l]+(o>0?t[o-1]:"")+a:l===1&&o>0&&(a=t[o-1]+a),s=Math.floor(s/10)}return(A<0?n:"")+a},Hh="十百千萬",Ph="拾佰仟萬",Nh="マイナス",zl="마이너스",As=function(A,e,t){var n=t?". ":"",r=t?"、":"",i=t?", ":"",s=t?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=ht(A,48,57,!0,n);return a.length<4?"0"+a:a;case 4:return Vn(A,"〇一二三四五六七八九",r);case 6:return Lr(A,1,3999,Rh,3,n).toLowerCase();case 7:return Lr(A,1,3999,Rh,3,n);case 8:return ht(A,945,969,!1,n);case 9:return ht(A,97,122,!1,n);case 10:return ht(A,65,90,!1,n);case 11:return ht(A,1632,1641,!0,n);case 12:case 49:return Lr(A,1,9999,Dh,3,n);case 35:return Lr(A,1,9999,Dh,3,n).toLowerCase();case 13:return ht(A,2534,2543,!0,n);case 14:case 30:return ht(A,6112,6121,!0,n);case 15:return Vn(A,"子丑寅卯辰巳午未申酉戌亥",r);case 16:return Vn(A,"甲乙丙丁戊己庚辛壬癸",r);case 17:case 48:return en(A,"零一二三四五六七八九",Hh,"負",r,Bn|vn|Pi);case 47:return en(A,"零壹貳參肆伍陸柒捌玖",Ph,"負",r,Or|Bn|vn|Pi);case 42:return en(A,"零一二三四五六七八九",Hh,"负",r,Bn|vn|Pi);case 41:return en(A,"零壹贰叁肆伍陆柒捌玖",Ph,"负",r,Or|Bn|vn|Pi);case 26:return en(A,"〇一二三四五六七八九","十百千万",Nh,r,0);case 25:return en(A,"零壱弐参四伍六七八九","拾百千万",Nh,r,Or|Bn|vn);case 31:return en(A,"영일이삼사오육칠팔구","십백천만",zl,i,Or|Bn|vn);case 33:return en(A,"零一二三四五六七八九","十百千萬",zl,i,0);case 32:return en(A,"零壹貳參四五六七八九","拾百千",zl,i,Or|Bn|vn);case 18:return ht(A,2406,2415,!0,n);case 20:return Lr(A,1,19999,IF,3,n);case 21:return ht(A,2790,2799,!0,n);case 22:return ht(A,2662,2671,!0,n);case 22:return Lr(A,1,10999,TF,3,n);case 23:return Vn(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Vn(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return ht(A,3302,3311,!0,n);case 28:return Vn(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",r);case 29:return Vn(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",r);case 34:return ht(A,3792,3801,!0,n);case 37:return ht(A,6160,6169,!0,n);case 38:return ht(A,4160,4169,!0,n);case 39:return ht(A,2918,2927,!0,n);case 40:return ht(A,1776,1785,!0,n);case 43:return ht(A,3046,3055,!0,n);case 44:return ht(A,3174,3183,!0,n);case 45:return ht(A,3664,3673,!0,n);case 46:return ht(A,3872,3881,!0,n);case 3:default:return ht(A,48,57,!0,n)}},Ym="data-html2canvas-ignore",Oh=function(){function A(e,t,n){if(this.context=e,this.options=n,this.scrolledElements=[],this.referenceElement=t,this.counters=new FF,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(e,t){var n=this,r=QF(e,t);if(!r.contentWindow)return Promise.reject("Unable to find iframe window");var i=e.defaultView.pageXOffset,s=e.defaultView.pageYOffset,a=r.contentWindow,o=a.document,l=DF(r).then(function(){return zt(n,void 0,void 0,function(){var c,u;return Pt(this,function(d){switch(d.label){case 0:return this.scrolledElements.forEach(OF),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:d.sent(),d.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,RF(o)]:[3,4];case 3:d.sent(),d.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(o,u)}).then(function(){return r})]:[2,r]}})})});return o.open(),o.write(PF(document.doctype)+"<html></html>"),NF(this.referenceElement.ownerDocument,i,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},A.prototype.createElementClone=function(e){if(kc(e,2))debugger;if(Km(e))return this.createCanvasClone(e);if(Ih(e))return this.createVideoClone(e);if(Qh(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Xc(t)&&(Xc(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),Lh(t)?this.createCustomElementClone(t):t},A.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return Kl(e.style,t),t},A.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var n=[].slice.call(t.cssRules,0).reduce(function(i,s){return s&&typeof s.cssText=="string"?i+s.cssText:i},""),r=e.cloneNode(!1);return r.textContent=n,r}}catch(i){if(this.context.logger.error("Unable to access cssRules property",i),i.name!=="SecurityError")throw i}return e.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var n=e.ownerDocument.createElement("img");try{return n.src=e.toDataURL(),n}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var r=e.cloneNode(!1);try{r.width=e.width,r.height=e.height;var i=e.getContext("2d"),s=r.getContext("2d");if(s)if(!this.options.allowTaint&&i)s.putImageData(i.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var o=a.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}s.drawImage(e,0,0)}return r}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return r},A.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var n=t.getContext("2d");try{return n&&(n.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||n.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var r=e.ownerDocument.createElement("canvas");return r.width=e.offsetWidth,r.height=e.offsetHeight,r},A.prototype.appendChildNode=function(e,t,n){(!zr(t)||!MF(t)&&!t.hasAttribute(Ym)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!zr(t)||!Qh(t))&&e.appendChild(this.cloneNode(t,n))},A.prototype.cloneChildNodes=function(e,t,n){for(var r=this,i=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;i;i=i.nextSibling)if(zr(i)&&Xm(i)&&typeof i.assignedNodes=="function"){var s=i.assignedNodes();s.length&&s.forEach(function(a){return r.appendChildNode(t,a,n)})}else this.appendChildNode(t,i,n)},A.prototype.cloneNode=function(e,t){if(km(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var n=e.ownerDocument.defaultView;if(n&&zr(e)&&(Wc(e)||ba(e))){var r=this.createElementClone(e);r.style.transitionProperty="none";var i=n.getComputedStyle(e),s=n.getComputedStyle(e,":before"),a=n.getComputedStyle(e,":after");this.referenceElement===e&&Wc(r)&&(this.clonedReferenceElement=r),Uu(r)&&kF(r);var o=this.counters.parse(new mh(this.context,i)),l=this.resolvePseudoContent(e,r,s,Wi.BEFORE);Lh(e)&&(t=!0),Ih(e)||this.cloneChildNodes(e,r,t),l&&r.insertBefore(l,r.firstChild);var c=this.resolvePseudoContent(e,r,a,Wi.AFTER);return c&&r.appendChild(c),this.counters.pop(o),(i&&(this.options.copyStyles||ba(e))&&!Wm(e)||t)&&Kl(i,r),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([r,e.scrollLeft,e.scrollTop]),(Ya(e)||$a(e))&&(Ya(r)||$a(r))&&(r.value=e.value),r}return e.cloneNode(!1)},A.prototype.resolvePseudoContent=function(e,t,n,r){var i=this;if(n){var s=n.content,a=t.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||n.display==="none")){this.counters.parse(new mh(this.context,n));var o=new y1(this.context,n),l=a.createElement("html2canvaspseudoelement");Kl(n,l),o.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var d=a.createElement("img");d.src=u.value,d.style.opacity="1",l.appendChild(d)}else if(u.type===18){if(u.name==="attr"){var h=u.values.filter(Ze);h.length&&l.appendChild(a.createTextNode(e.getAttribute(h[0].value)||""))}else if(u.name==="counter"){var g=u.values.filter(si),m=g[0],p=g[1];if(m&&Ze(m)){var f=i.counters.getCounterValue(m.value),v=p&&Ze(p)?Vc.parse(i.context,p.value):3;l.appendChild(a.createTextNode(As(f,v,!1)))}}else if(u.name==="counters"){var B=u.values.filter(si),m=B[0],C=B[1],p=B[2];if(m&&Ze(m)){var x=i.counters.getCounterValues(m.value),_=p&&Ze(p)?Vc.parse(i.context,p.value):3,E=C&&C.type===0?C.value:"",T=x.map(function(I){return As(I,_,!1)}).join(E);l.appendChild(a.createTextNode(T))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(gh(o.quotes,i.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(gh(o.quotes,--i.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=jc+" "+Yc;var c=r===Wi.BEFORE?" "+jc:" "+Yc;return ba(t)?t.className.baseValue+=c:t.className+=c,l}}},A.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},A}(),Wi;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(Wi||(Wi={}));var QF=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(Ym,"true"),A.body.appendChild(t),t},LF=function(A){return new Promise(function(e){if(A.complete){e();return}if(!A.src){e();return}A.onload=e,A.onerror=e})},RF=function(A){return Promise.all([].slice.call(A.images,0).map(LF))},DF=function(A){return new Promise(function(e,t){var n=A.contentWindow;if(!n)return t("No window assigned for iframe");var r=n.document;n.onload=A.onload=function(){n.onload=A.onload=null;var i=setInterval(function(){r.body.childNodes.length>0&&r.readyState==="complete"&&(clearInterval(i),e(A))},50)}})},HF=["all","d","content"],Kl=function(A,e){for(var t=A.length-1;t>=0;t--){var n=A.item(t);HF.indexOf(n)===-1&&e.style.setProperty(n,A.getPropertyValue(n))}return e},PF=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},NF=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},OF=function(A){var e=A[0],t=A[1],n=A[2];e.scrollLeft=t,e.scrollTop=n},GF=":before",VF=":after",jc="___html2canvas___pseudoelement_before",Yc="___html2canvas___pseudoelement_after",Gh=`{
    content: "" !important;
    display: none !important;
}`,kF=function(A){zF(A,"."+jc+GF+Gh+`
         .`+Yc+VF+Gh)},zF=function(A,e){var t=A.ownerDocument;if(t){var n=t.createElement("style");n.textContent=e,A.appendChild(n)}},$m=function(){function A(){}return A.getOrigin=function(e){var t=A._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},A.isSameOrigin=function(e){return A.getOrigin(e)===A._origin},A.setContext=function(e){A._link=e.document.createElement("a"),A._origin=A.getOrigin(e.location.href)},A._origin="about:blank",A}(),KF=function(){function A(e,t){this.context=e,this._options=t,this._cache={}}return A.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(Xl(e)||YF(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},A.prototype.match=function(e){return this._cache[e]},A.prototype.loadImage=function(e){return zt(this,void 0,void 0,function(){var t,n,r,i,s=this;return Pt(this,function(a){switch(a.label){case 0:return t=$m.isSameOrigin(e),n=!Wl(e)&&this._options.useCORS===!0&&Qt.SUPPORT_CORS_IMAGES&&!t,r=!Wl(e)&&!t&&!Xl(e)&&typeof this._options.proxy=="string"&&Qt.SUPPORT_CORS_XHR&&!n,!t&&this._options.allowTaint===!1&&!Wl(e)&&!Xl(e)&&!r&&!n?[2]:(i=e,r?[4,this.proxy(i)]:[3,2]);case 1:i=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(o,l){var c=new Image;c.onload=function(){return o(c)},c.onerror=l,($F(i)||n)&&(c.crossOrigin="anonymous"),c.src=i,c.complete===!0&&setTimeout(function(){return o(c)},500),s._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},A.prototype.has=function(e){return typeof this._cache[e]<"u"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(e){var t=this,n=this._options.proxy;if(!n)throw new Error("No proxy defined");var r=e.substring(0,256);return new Promise(function(i,s){var a=Qt.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")i(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return i(u.result)},!1),u.addEventListener("error",function(d){return s(d)},!1),u.readAsDataURL(o.response)}else s("Failed to proxy resource "+r+" with status code "+o.status)},o.onerror=s;var l=n.indexOf("?")>-1?"&":"?";if(o.open("GET",""+n+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),t._options.imageTimeout){var c=t._options.imageTimeout;o.timeout=c,o.ontimeout=function(){return s("Timed out ("+c+"ms) proxying "+r)}}o.send()})},A}(),WF=/^data:image\/svg\+xml/i,XF=/^data:image\/.*;base64,/i,jF=/^data:image\/.*/i,YF=function(A){return Qt.SUPPORT_SVG_DRAWING||!JF(A)},Wl=function(A){return jF.test(A)},$F=function(A){return XF.test(A)},Xl=function(A){return A.substr(0,4)==="blob"},JF=function(A){return A.substr(-3).toLowerCase()==="svg"||WF.test(A)},ce=function(){function A(e,t){this.type=0,this.x=e,this.y=t}return A.prototype.add=function(e,t){return new A(this.x+e,this.y+t)},A}(),Rr=function(A,e,t){return new ce(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},sa=function(){function A(e,t,n,r){this.type=1,this.start=e,this.startControl=t,this.endControl=n,this.end=r}return A.prototype.subdivide=function(e,t){var n=Rr(this.start,this.startControl,e),r=Rr(this.startControl,this.endControl,e),i=Rr(this.endControl,this.end,e),s=Rr(n,r,e),a=Rr(r,i,e),o=Rr(s,a,e);return t?new A(this.start,n,s,o):new A(o,a,i,this.end)},A.prototype.add=function(e,t){return new A(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A}(),gA=function(A){return A.type===1},qF=function(){function A(e){var t=e.styles,n=e.bounds,r=Di(t.borderTopLeftRadius,n.width,n.height),i=r[0],s=r[1],a=Di(t.borderTopRightRadius,n.width,n.height),o=a[0],l=a[1],c=Di(t.borderBottomRightRadius,n.width,n.height),u=c[0],d=c[1],h=Di(t.borderBottomLeftRadius,n.width,n.height),g=h[0],m=h[1],p=[];p.push((i+o)/n.width),p.push((g+u)/n.width),p.push((s+m)/n.height),p.push((l+d)/n.height);var f=Math.max.apply(Math,p);f>1&&(i/=f,s/=f,o/=f,l/=f,u/=f,d/=f,g/=f,m/=f);var v=n.width-o,B=n.height-d,C=n.width-u,x=n.height-m,_=t.borderTopWidth,E=t.borderRightWidth,T=t.borderBottomWidth,w=t.borderLeftWidth,y=nt(t.paddingTop,e.bounds.width),I=nt(t.paddingRight,e.bounds.width),L=nt(t.paddingBottom,e.bounds.width),U=nt(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=i>0||s>0?ot(n.left+w/3,n.top+_/3,i-w/3,s-_/3,qe.TOP_LEFT):new ce(n.left+w/3,n.top+_/3),this.topRightBorderDoubleOuterBox=i>0||s>0?ot(n.left+v,n.top+_/3,o-E/3,l-_/3,qe.TOP_RIGHT):new ce(n.left+n.width-E/3,n.top+_/3),this.bottomRightBorderDoubleOuterBox=u>0||d>0?ot(n.left+C,n.top+B,u-E/3,d-T/3,qe.BOTTOM_RIGHT):new ce(n.left+n.width-E/3,n.top+n.height-T/3),this.bottomLeftBorderDoubleOuterBox=g>0||m>0?ot(n.left+w/3,n.top+x,g-w/3,m-T/3,qe.BOTTOM_LEFT):new ce(n.left+w/3,n.top+n.height-T/3),this.topLeftBorderDoubleInnerBox=i>0||s>0?ot(n.left+w*2/3,n.top+_*2/3,i-w*2/3,s-_*2/3,qe.TOP_LEFT):new ce(n.left+w*2/3,n.top+_*2/3),this.topRightBorderDoubleInnerBox=i>0||s>0?ot(n.left+v,n.top+_*2/3,o-E*2/3,l-_*2/3,qe.TOP_RIGHT):new ce(n.left+n.width-E*2/3,n.top+_*2/3),this.bottomRightBorderDoubleInnerBox=u>0||d>0?ot(n.left+C,n.top+B,u-E*2/3,d-T*2/3,qe.BOTTOM_RIGHT):new ce(n.left+n.width-E*2/3,n.top+n.height-T*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||m>0?ot(n.left+w*2/3,n.top+x,g-w*2/3,m-T*2/3,qe.BOTTOM_LEFT):new ce(n.left+w*2/3,n.top+n.height-T*2/3),this.topLeftBorderStroke=i>0||s>0?ot(n.left+w/2,n.top+_/2,i-w/2,s-_/2,qe.TOP_LEFT):new ce(n.left+w/2,n.top+_/2),this.topRightBorderStroke=i>0||s>0?ot(n.left+v,n.top+_/2,o-E/2,l-_/2,qe.TOP_RIGHT):new ce(n.left+n.width-E/2,n.top+_/2),this.bottomRightBorderStroke=u>0||d>0?ot(n.left+C,n.top+B,u-E/2,d-T/2,qe.BOTTOM_RIGHT):new ce(n.left+n.width-E/2,n.top+n.height-T/2),this.bottomLeftBorderStroke=g>0||m>0?ot(n.left+w/2,n.top+x,g-w/2,m-T/2,qe.BOTTOM_LEFT):new ce(n.left+w/2,n.top+n.height-T/2),this.topLeftBorderBox=i>0||s>0?ot(n.left,n.top,i,s,qe.TOP_LEFT):new ce(n.left,n.top),this.topRightBorderBox=o>0||l>0?ot(n.left+v,n.top,o,l,qe.TOP_RIGHT):new ce(n.left+n.width,n.top),this.bottomRightBorderBox=u>0||d>0?ot(n.left+C,n.top+B,u,d,qe.BOTTOM_RIGHT):new ce(n.left+n.width,n.top+n.height),this.bottomLeftBorderBox=g>0||m>0?ot(n.left,n.top+x,g,m,qe.BOTTOM_LEFT):new ce(n.left,n.top+n.height),this.topLeftPaddingBox=i>0||s>0?ot(n.left+w,n.top+_,Math.max(0,i-w),Math.max(0,s-_),qe.TOP_LEFT):new ce(n.left+w,n.top+_),this.topRightPaddingBox=o>0||l>0?ot(n.left+Math.min(v,n.width-E),n.top+_,v>n.width+E?0:Math.max(0,o-E),Math.max(0,l-_),qe.TOP_RIGHT):new ce(n.left+n.width-E,n.top+_),this.bottomRightPaddingBox=u>0||d>0?ot(n.left+Math.min(C,n.width-w),n.top+Math.min(B,n.height-T),Math.max(0,u-E),Math.max(0,d-T),qe.BOTTOM_RIGHT):new ce(n.left+n.width-E,n.top+n.height-T),this.bottomLeftPaddingBox=g>0||m>0?ot(n.left+w,n.top+Math.min(x,n.height-T),Math.max(0,g-w),Math.max(0,m-T),qe.BOTTOM_LEFT):new ce(n.left+w,n.top+n.height-T),this.topLeftContentBox=i>0||s>0?ot(n.left+w+U,n.top+_+y,Math.max(0,i-(w+U)),Math.max(0,s-(_+y)),qe.TOP_LEFT):new ce(n.left+w+U,n.top+_+y),this.topRightContentBox=o>0||l>0?ot(n.left+Math.min(v,n.width+w+U),n.top+_+y,v>n.width+w+U?0:o-w+U,l-(_+y),qe.TOP_RIGHT):new ce(n.left+n.width-(E+I),n.top+_+y),this.bottomRightContentBox=u>0||d>0?ot(n.left+Math.min(C,n.width-(w+U)),n.top+Math.min(B,n.height+_+y),Math.max(0,u-(E+I)),d-(T+L),qe.BOTTOM_RIGHT):new ce(n.left+n.width-(E+I),n.top+n.height-(T+L)),this.bottomLeftContentBox=g>0||m>0?ot(n.left+w+U,n.top+x,Math.max(0,g-(w+U)),m-(T+L),qe.BOTTOM_LEFT):new ce(n.left+w+U,n.top+n.height-(T+L))}return A}(),qe;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(qe||(qe={}));var ot=function(A,e,t,n,r){var i=4*((Math.sqrt(2)-1)/3),s=t*i,a=n*i,o=A+t,l=e+n;switch(r){case qe.TOP_LEFT:return new sa(new ce(A,l),new ce(A,l-a),new ce(o-s,e),new ce(o,e));case qe.TOP_RIGHT:return new sa(new ce(A,e),new ce(A+s,e),new ce(o,l-a),new ce(o,l));case qe.BOTTOM_RIGHT:return new sa(new ce(o,e),new ce(o,e+a),new ce(A+s,l),new ce(A,l));case qe.BOTTOM_LEFT:default:return new sa(new ce(o,l),new ce(o-s,l),new ce(A,e+a),new ce(A,e))}},Ja=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},ZF=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},qa=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},eT=function(){function A(e,t,n){this.offsetX=e,this.offsetY=t,this.matrix=n,this.type=0,this.target=6}return A}(),aa=function(){function A(e,t){this.path=e,this.target=t,this.type=1}return A}(),tT=function(){function A(e){this.opacity=e,this.type=2,this.target=6}return A}(),AT=function(A){return A.type===0},Jm=function(A){return A.type===1},nT=function(A){return A.type===2},Vh=function(A,e){return A.length===e.length?A.some(function(t,n){return t===e[n]}):!1},rT=function(A,e,t,n,r){return A.map(function(i,s){switch(s){case 0:return i.add(e,t);case 1:return i.add(e+n,t);case 2:return i.add(e+n,t+r);case 3:return i.add(e,t+r)}return i})},qm=function(){function A(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A}(),Zm=function(){function A(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new qF(this.container),this.container.styles.opacity<1&&this.effects.push(new tT(this.container.styles.opacity)),this.container.styles.transform!==null){var n=this.container.bounds.left+this.container.styles.transformOrigin[0].number,r=this.container.bounds.top+this.container.styles.transformOrigin[1].number,i=this.container.styles.transform;this.effects.push(new eT(n,r,i))}if(this.container.styles.overflowX!==0){var s=Ja(this.curves),a=qa(this.curves);Vh(s,a)?this.effects.push(new aa(s,6)):(this.effects.push(new aa(s,2)),this.effects.push(new aa(a,4)))}}return A.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,n=this.parent,r=this.effects.slice(0);n;){var i=n.effects.filter(function(o){return!Jm(o)});if(t||n.container.styles.position!==0||!n.parent){if(r.unshift.apply(r,i),t=[2,3].indexOf(n.container.styles.position)===-1,n.container.styles.overflowX!==0){var s=Ja(n.curves),a=qa(n.curves);Vh(s,a)||r.unshift(new aa(a,6))}}else r.unshift.apply(r,i);n=n.parent}return r.filter(function(o){return _t(o.target,e)})},A}(),$c=function(A,e,t,n){A.container.elements.forEach(function(r){var i=_t(r.flags,4),s=_t(r.flags,2),a=new Zm(r,A);_t(r.styles.display,2048)&&n.push(a);var o=_t(r.flags,8)?[]:n;if(i||s){var l=i||r.styles.isPositioned()?t:e,c=new qm(a);if(r.styles.isPositioned()||r.styles.opacity<1||r.styles.isTransformed()){var u=r.styles.zIndex.order;if(u<0){var d=0;l.negativeZIndex.some(function(g,m){return u>g.element.container.styles.zIndex.order?(d=m,!1):d>0}),l.negativeZIndex.splice(d,0,c)}else if(u>0){var h=0;l.positiveZIndex.some(function(g,m){return u>=g.element.container.styles.zIndex.order?(h=m+1,!1):h>0}),l.positiveZIndex.splice(h,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else r.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);$c(a,c,i?c:t,o)}else r.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),$c(a,e,t,o);_t(r.flags,8)&&e0(r,o)})},e0=function(A,e){for(var t=A instanceof Kc?A.start:1,n=A instanceof Kc?A.reversed:!1,r=0;r<e.length;r++){var i=e[r];i.container instanceof Hm&&typeof i.container.value=="number"&&i.container.value!==0&&(t=i.container.value),i.listValue=As(t,i.container.styles.listStyleType,!0),t+=n?-1:1}},iT=function(A){var e=new Zm(A,null),t=new qm(e),n=[];return $c(e,t,t,n),e0(e.container,n),t},kh=function(A,e){switch(e){case 0:return BA(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return BA(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return BA(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return BA(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},sT=function(A,e){switch(e){case 0:return BA(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return BA(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return BA(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return BA(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},aT=function(A,e){switch(e){case 0:return BA(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return BA(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return BA(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return BA(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},oT=function(A,e){switch(e){case 0:return oa(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return oa(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return oa(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return oa(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},oa=function(A,e){var t=[];return gA(A)?t.push(A.subdivide(.5,!1)):t.push(A),gA(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},BA=function(A,e,t,n){var r=[];return gA(A)?r.push(A.subdivide(.5,!1)):r.push(A),gA(t)?r.push(t.subdivide(.5,!0)):r.push(t),gA(n)?r.push(n.subdivide(.5,!0).reverse()):r.push(n),gA(e)?r.push(e.subdivide(.5,!1).reverse()):r.push(e),r},t0=function(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Za=function(A){var e=A.styles,t=A.bounds,n=nt(e.paddingLeft,t.width),r=nt(e.paddingRight,t.width),i=nt(e.paddingTop,t.width),s=nt(e.paddingBottom,t.width);return t.add(n+e.borderLeftWidth,i+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+n+r),-(e.borderTopWidth+e.borderBottomWidth+i+s))},lT=function(A,e){return A===0?e.bounds:A===2?Za(e):t0(e)},cT=function(A,e){return A===0?e.bounds:A===2?Za(e):t0(e)},jl=function(A,e,t){var n=lT(Gr(A.styles.backgroundOrigin,e),A),r=cT(Gr(A.styles.backgroundClip,e),A),i=uT(Gr(A.styles.backgroundSize,e),t,n),s=i[0],a=i[1],o=Di(Gr(A.styles.backgroundPosition,e),n.width-s,n.height-a),l=dT(Gr(A.styles.backgroundRepeat,e),o,i,n,r),c=Math.round(n.left+o[0]),u=Math.round(n.top+o[1]);return[l,c,u,s,a]},Dr=function(A){return Ze(A)&&A.value===Yr.AUTO},la=function(A){return typeof A=="number"},uT=function(A,e,t){var n=e[0],r=e[1],i=e[2],s=A[0],a=A[1];if(!s)return[0,0];if(xt(s)&&a&&xt(a))return[nt(s,t.width),nt(a,t.height)];var o=la(i);if(Ze(s)&&(s.value===Yr.CONTAIN||s.value===Yr.COVER)){if(la(i)){var l=t.width/t.height;return l<i!=(s.value===Yr.COVER)?[t.width,t.width/i]:[t.height*i,t.height]}return[t.width,t.height]}var c=la(n),u=la(r),d=c||u;if(Dr(s)&&(!a||Dr(a))){if(c&&u)return[n,r];if(!o&&!d)return[t.width,t.height];if(d&&o){var h=c?n:r*i,g=u?r:n/i;return[h,g]}var m=c?n:t.width,p=u?r:t.height;return[m,p]}if(o){var f=0,v=0;return xt(s)?f=nt(s,t.width):xt(a)&&(v=nt(a,t.height)),Dr(s)?f=v*i:(!a||Dr(a))&&(v=f/i),[f,v]}var B=null,C=null;if(xt(s)?B=nt(s,t.width):a&&xt(a)&&(C=nt(a,t.height)),B!==null&&(!a||Dr(a))&&(C=c&&u?B/n*r:t.height),C!==null&&Dr(s)&&(B=c&&u?C/r*n:t.width),B!==null&&C!==null)return[B,C];throw new Error("Unable to calculate background-size for element")},Gr=function(A,e){var t=A[e];return typeof t>"u"?A[0]:t},dT=function(A,e,t,n,r){var i=e[0],s=e[1],a=t[0],o=t[1];switch(A){case 2:return[new ce(Math.round(n.left),Math.round(n.top+s)),new ce(Math.round(n.left+n.width),Math.round(n.top+s)),new ce(Math.round(n.left+n.width),Math.round(o+n.top+s)),new ce(Math.round(n.left),Math.round(o+n.top+s))];case 3:return[new ce(Math.round(n.left+i),Math.round(n.top)),new ce(Math.round(n.left+i+a),Math.round(n.top)),new ce(Math.round(n.left+i+a),Math.round(n.height+n.top)),new ce(Math.round(n.left+i),Math.round(n.height+n.top))];case 1:return[new ce(Math.round(n.left+i),Math.round(n.top+s)),new ce(Math.round(n.left+i+a),Math.round(n.top+s)),new ce(Math.round(n.left+i+a),Math.round(n.top+s+o)),new ce(Math.round(n.left+i),Math.round(n.top+s+o))];default:return[new ce(Math.round(r.left),Math.round(r.top)),new ce(Math.round(r.left+r.width),Math.round(r.top)),new ce(Math.round(r.left+r.width),Math.round(r.height+r.top)),new ce(Math.round(r.left),Math.round(r.height+r.top))]}},fT="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",zh="Hidden Text",hT=function(){function A(e){this._data={},this._document=e}return A.prototype.parseMetrics=function(e,t){var n=this._document.createElement("div"),r=this._document.createElement("img"),i=this._document.createElement("span"),s=this._document.body;n.style.visibility="hidden",n.style.fontFamily=e,n.style.fontSize=t,n.style.margin="0",n.style.padding="0",n.style.whiteSpace="nowrap",s.appendChild(n),r.src=fT,r.width=1,r.height=1,r.style.margin="0",r.style.padding="0",r.style.verticalAlign="baseline",i.style.fontFamily=e,i.style.fontSize=t,i.style.margin="0",i.style.padding="0",i.appendChild(this._document.createTextNode(zh)),n.appendChild(i),n.appendChild(r);var a=r.offsetTop-i.offsetTop+2;n.removeChild(i),n.appendChild(this._document.createTextNode(zh)),n.style.lineHeight="normal",r.style.verticalAlign="super";var o=r.offsetTop-n.offsetTop+2;return s.removeChild(n),{baseline:a,middle:o}},A.prototype.getMetrics=function(e,t){var n=e+" "+t;return typeof this._data[n]>"u"&&(this._data[n]=this.parseMetrics(e,t)),this._data[n]},A}(),A0=function(){function A(e,t){this.context=e,this.options=t}return A}(),pT=1e4,gT=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this;return r._activeEffects=[],r.canvas=n.canvas?n.canvas:document.createElement("canvas"),r.ctx=r.canvas.getContext("2d"),n.canvas||(r.canvas.width=Math.floor(n.width*n.scale),r.canvas.height=Math.floor(n.height*n.scale),r.canvas.style.width=n.width+"px",r.canvas.style.height=n.height+"px"),r.fontMetrics=new hT(document),r.ctx.scale(r.options.scale,r.options.scale),r.ctx.translate(-n.x,-n.y),r.ctx.textBaseline="bottom",r._activeEffects=[],r.context.logger.debug("Canvas renderer initialized ("+n.width+"x"+n.height+") with scale "+n.scale),r}return e.prototype.applyEffects=function(t){for(var n=this;this._activeEffects.length;)this.popEffect();t.forEach(function(r){return n.applyEffect(r)})},e.prototype.applyEffect=function(t){this.ctx.save(),nT(t)&&(this.ctx.globalAlpha=t.opacity),AT(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),Jm(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return zt(this,void 0,void 0,function(){var n;return Pt(this,function(r){switch(r.label){case 0:return n=t.element.container.styles,n.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return zt(this,void 0,void 0,function(){return Pt(this,function(n){switch(n.label){case 0:if(_t(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return n.sent(),[4,this.renderNodeContent(t)];case 2:n.sent(),n.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,n,r){var i=this;if(n===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+r);else{var s=Su(t.text);s.reduce(function(a,o){return i.ctx.fillText(o,a,t.bounds.top+r),a+i.ctx.measureText(o).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var n=t.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),r=xT(t.fontFamily).join(", "),i=ls(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,n,t.fontWeight,i,r].join(" "),r,i]},e.prototype.renderTextNode=function(t,n){return zt(this,void 0,void 0,function(){var r,i,s,a,o,l,c,u,d=this;return Pt(this,function(h){return r=this.createFontStyle(n),i=r[0],s=r[1],a=r[2],this.ctx.font=i,this.ctx.direction=n.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),l=o.baseline,c=o.middle,u=n.paintOrder,t.textBounds.forEach(function(g){u.forEach(function(m){switch(m){case 0:d.ctx.fillStyle=Ut(n.color),d.renderTextWithLetterSpacing(g,n.letterSpacing,l);var p=n.textShadow;p.length&&g.text.trim().length&&(p.slice(0).reverse().forEach(function(f){d.ctx.shadowColor=Ut(f.color),d.ctx.shadowOffsetX=f.offsetX.number*d.options.scale,d.ctx.shadowOffsetY=f.offsetY.number*d.options.scale,d.ctx.shadowBlur=f.blur.number,d.renderTextWithLetterSpacing(g,n.letterSpacing,l)}),d.ctx.shadowColor="",d.ctx.shadowOffsetX=0,d.ctx.shadowOffsetY=0,d.ctx.shadowBlur=0),n.textDecorationLine.length&&(d.ctx.fillStyle=Ut(n.textDecorationColor||n.color),n.textDecorationLine.forEach(function(f){switch(f){case 1:d.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+l),g.bounds.width,1);break;case 2:d.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:d.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+c),g.bounds.width,1);break}}));break;case 1:n.webkitTextStrokeWidth&&g.text.trim().length&&(d.ctx.strokeStyle=Ut(n.webkitTextStrokeColor),d.ctx.lineWidth=n.webkitTextStrokeWidth,d.ctx.lineJoin=window.chrome?"miter":"round",d.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+l)),d.ctx.strokeStyle="",d.ctx.lineWidth=0,d.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,n,r){if(r&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var i=Za(t),s=qa(n);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(r,0,0,t.intrinsicWidth,t.intrinsicHeight,i.left,i.top,i.width,i.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return zt(this,void 0,void 0,function(){var n,r,i,s,a,o,v,v,l,c,u,d,C,h,g,x,m,p,f,v,B,C,x;return Pt(this,function(_){switch(_.label){case 0:this.applyEffects(t.getEffects(4)),n=t.container,r=t.curves,i=n.styles,s=0,a=n.textNodes,_.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,i)]):[3,4];case 2:_.sent(),_.label=3;case 3:return s++,[3,1];case 4:if(!(n instanceof Lm))return[3,8];_.label=5;case 5:return _.trys.push([5,7,,8]),[4,this.context.cache.match(n.src)];case 6:return v=_.sent(),this.renderReplacedElement(n,r,v),[3,8];case 7:return _.sent(),this.context.logger.error("Error loading image "+n.src),[3,8];case 8:if(n instanceof Rm&&this.renderReplacedElement(n,r,n.canvas),!(n instanceof Dm))return[3,12];_.label=9;case 9:return _.trys.push([9,11,,12]),[4,this.context.cache.match(n.svg)];case 10:return v=_.sent(),this.renderReplacedElement(n,r,v),[3,12];case 11:return _.sent(),this.context.logger.error("Error loading svg "+n.svg.substring(0,255)),[3,12];case 12:return n instanceof Om&&n.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:n.backgroundColor,x:0,y:0,width:n.width,height:n.height}),[4,l.render(n.tree)]):[3,14];case 13:c=_.sent(),n.width&&n.height&&this.ctx.drawImage(c,0,0,n.width,n.height,n.bounds.left,n.bounds.top,n.bounds.width,n.bounds.height),_.label=14;case 14:if(n instanceof bu&&(u=Math.min(n.bounds.width,n.bounds.height),n.type===Xa?n.checked&&(this.ctx.save(),this.path([new ce(n.bounds.left+u*.39363,n.bounds.top+u*.79),new ce(n.bounds.left+u*.16,n.bounds.top+u*.5549),new ce(n.bounds.left+u*.27347,n.bounds.top+u*.44071),new ce(n.bounds.left+u*.39694,n.bounds.top+u*.5649),new ce(n.bounds.left+u*.72983,n.bounds.top+u*.23),new ce(n.bounds.left+u*.84,n.bounds.top+u*.34085),new ce(n.bounds.left+u*.39363,n.bounds.top+u*.79)]),this.ctx.fillStyle=Ut(Th),this.ctx.fill(),this.ctx.restore()):n.type===ja&&n.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(n.bounds.left+u/2,n.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=Ut(Th),this.ctx.fill(),this.ctx.restore())),mT(n)&&n.value.length){switch(d=this.createFontStyle(i),C=d[0],h=d[1],g=this.fontMetrics.getMetrics(C,h).baseline,this.ctx.font=C,this.ctx.fillStyle=Ut(i.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=vT(n.styles.textAlign),x=Za(n),m=0,n.styles.textAlign){case 1:m+=x.width/2;break;case 2:m+=x.width;break}p=x.add(m,0,0,-x.height/2+1),this.ctx.save(),this.path([new ce(x.left,x.top),new ce(x.left+x.width,x.top),new ce(x.left+x.width,x.top+x.height),new ce(x.left,x.top+x.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Ki(n.value,p),i.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!_t(n.styles.display,2048))return[3,20];if(n.styles.listStyleImage===null)return[3,19];if(f=n.styles.listStyleImage,f.type!==0)return[3,18];v=void 0,B=f.url,_.label=15;case 15:return _.trys.push([15,17,,18]),[4,this.context.cache.match(B)];case 16:return v=_.sent(),this.ctx.drawImage(v,n.bounds.left-(v.width+10),n.bounds.top),[3,18];case 17:return _.sent(),this.context.logger.error("Error loading list-style-image "+B),[3,18];case 18:return[3,20];case 19:t.listValue&&n.styles.listStyleType!==-1&&(C=this.createFontStyle(i)[0],this.ctx.font=C,this.ctx.fillStyle=Ut(i.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",x=new un(n.bounds.left,n.bounds.top+nt(n.styles.paddingTop,n.bounds.width),n.bounds.width,hh(i.lineHeight,i.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Ki(t.listValue,x),i.letterSpacing,hh(i.lineHeight,i.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),_.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return zt(this,void 0,void 0,function(){var n,r,f,i,s,f,a,o,f,l,c,f,u,d,f,h,g,f,m,p,f;return Pt(this,function(v){switch(v.label){case 0:if(_t(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:v.sent(),n=0,r=t.negativeZIndex,v.label=2;case 2:return n<r.length?(f=r[n],[4,this.renderStack(f)]):[3,5];case 3:v.sent(),v.label=4;case 4:return n++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:v.sent(),i=0,s=t.nonInlineLevel,v.label=7;case 7:return i<s.length?(f=s[i],[4,this.renderNode(f)]):[3,10];case 8:v.sent(),v.label=9;case 9:return i++,[3,7];case 10:a=0,o=t.nonPositionedFloats,v.label=11;case 11:return a<o.length?(f=o[a],[4,this.renderStack(f)]):[3,14];case 12:v.sent(),v.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,v.label=15;case 15:return l<c.length?(f=c[l],[4,this.renderStack(f)]):[3,18];case 16:v.sent(),v.label=17;case 17:return l++,[3,15];case 18:u=0,d=t.inlineLevel,v.label=19;case 19:return u<d.length?(f=d[u],[4,this.renderNode(f)]):[3,22];case 20:v.sent(),v.label=21;case 21:return u++,[3,19];case 22:h=0,g=t.zeroOrAutoZIndexOrTransformedOrOpacity,v.label=23;case 23:return h<g.length?(f=g[h],[4,this.renderStack(f)]):[3,26];case 24:v.sent(),v.label=25;case 25:return h++,[3,23];case 26:m=0,p=t.positiveZIndex,v.label=27;case 27:return m<p.length?(f=p[m],[4,this.renderStack(f)]):[3,30];case 28:v.sent(),v.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var n=this;t.forEach(function(r,i){var s=gA(r)?r.start:r;i===0?n.ctx.moveTo(s.x,s.y):n.ctx.lineTo(s.x,s.y),gA(r)&&n.ctx.bezierCurveTo(r.startControl.x,r.startControl.y,r.endControl.x,r.endControl.y,r.end.x,r.end.y)})},e.prototype.renderRepeat=function(t,n,r,i){this.path(t),this.ctx.fillStyle=n,this.ctx.translate(r,i),this.ctx.fill(),this.ctx.translate(-r,-i)},e.prototype.resizeImage=function(t,n,r){var i;if(t.width===n&&t.height===r)return t;var s=(i=this.canvas.ownerDocument)!==null&&i!==void 0?i:document,a=s.createElement("canvas");a.width=Math.max(1,n),a.height=Math.max(1,r);var o=a.getContext("2d");return o.drawImage(t,0,0,t.width,t.height,0,0,n,r),a},e.prototype.renderBackgroundImage=function(t){return zt(this,void 0,void 0,function(){var n,r,i,s,a,o;return Pt(this,function(l){switch(l.label){case 0:n=t.styles.backgroundImage.length-1,r=function(c){var u,d,h,y,z,N,U,Q,T,g,y,z,N,U,Q,m,p,f,v,B,C,x,_,E,T,w,y,I,L,U,Q,D,z,N,W,V,X,re,G,Z,ee,ne;return Pt(this,function(ie){switch(ie.label){case 0:if(c.type!==0)return[3,5];u=void 0,d=c.url,ie.label=1;case 1:return ie.trys.push([1,3,,4]),[4,i.context.cache.match(d)];case 2:return u=ie.sent(),[3,4];case 3:return ie.sent(),i.context.logger.error("Error loading background-image "+d),[3,4];case 4:return u&&(h=jl(t,n,[u.width,u.height,u.width/u.height]),y=h[0],z=h[1],N=h[2],U=h[3],Q=h[4],T=i.ctx.createPattern(i.resizeImage(u,U,Q),"repeat"),i.renderRepeat(y,T,z,N)),[3,6];case 5:AM(c)?(g=jl(t,n,[null,null,null]),y=g[0],z=g[1],N=g[2],U=g[3],Q=g[4],m=JU(c.angle,U,Q),p=m[0],f=m[1],v=m[2],B=m[3],C=m[4],x=document.createElement("canvas"),x.width=U,x.height=Q,_=x.getContext("2d"),E=_.createLinearGradient(f,B,v,C),dh(c.stops,p).forEach(function(he){return E.addColorStop(he.stop,Ut(he.color))}),_.fillStyle=E,_.fillRect(0,0,U,Q),U>0&&Q>0&&(T=i.ctx.createPattern(x,"repeat"),i.renderRepeat(y,T,z,N))):nM(c)&&(w=jl(t,n,[null,null,null]),y=w[0],I=w[1],L=w[2],U=w[3],Q=w[4],D=c.position.length===0?[_u]:c.position,z=nt(D[0],U),N=nt(D[D.length-1],Q),W=qU(c,z,N,U,Q),V=W[0],X=W[1],V>0&&X>0&&(re=i.ctx.createRadialGradient(I+z,L+N,0,I+z,L+N,V),dh(c.stops,V*2).forEach(function(he){return re.addColorStop(he.stop,Ut(he.color))}),i.path(y),i.ctx.fillStyle=re,V!==X?(G=t.bounds.left+.5*t.bounds.width,Z=t.bounds.top+.5*t.bounds.height,ee=X/V,ne=1/ee,i.ctx.save(),i.ctx.translate(G,Z),i.ctx.transform(1,0,0,ee,0,0),i.ctx.translate(-G,-Z),i.ctx.fillRect(I,ne*(L-Z)+Z,U,Q*ne),i.ctx.restore()):i.ctx.fill())),ie.label=6;case 6:return n--,[2]}})},i=this,s=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<a.length?(o=a[s],[5,r(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,n,r){return zt(this,void 0,void 0,function(){return Pt(this,function(i){return this.path(kh(r,n)),this.ctx.fillStyle=Ut(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,n,r,i){return zt(this,void 0,void 0,function(){var s,a;return Pt(this,function(o){switch(o.label){case 0:return n<3?[4,this.renderSolidBorder(t,r,i)]:[3,2];case 1:return o.sent(),[2];case 2:return s=sT(i,r),this.path(s),this.ctx.fillStyle=Ut(t),this.ctx.fill(),a=aT(i,r),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return zt(this,void 0,void 0,function(){var n,r,i,s,a,o,l,c,u=this;return Pt(this,function(d){switch(d.label){case 0:return this.applyEffects(t.getEffects(2)),n=t.container.styles,r=!In(n.backgroundColor)||n.backgroundImage.length,i=[{style:n.borderTopStyle,color:n.borderTopColor,width:n.borderTopWidth},{style:n.borderRightStyle,color:n.borderRightColor,width:n.borderRightWidth},{style:n.borderBottomStyle,color:n.borderBottomColor,width:n.borderBottomWidth},{style:n.borderLeftStyle,color:n.borderLeftColor,width:n.borderLeftWidth}],s=BT(Gr(n.backgroundClip,0),t.curves),r||n.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),In(n.backgroundColor)||(this.ctx.fillStyle=Ut(n.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:d.sent(),this.ctx.restore(),n.boxShadow.slice(0).reverse().forEach(function(h){u.ctx.save();var g=Ja(t.curves),m=h.inset?0:pT,p=rT(g,-m+(h.inset?1:-1)*h.spread.number,(h.inset?1:-1)*h.spread.number,h.spread.number*(h.inset?-2:2),h.spread.number*(h.inset?-2:2));h.inset?(u.path(g),u.ctx.clip(),u.mask(p)):(u.mask(g),u.ctx.clip(),u.path(p)),u.ctx.shadowOffsetX=h.offsetX.number+m,u.ctx.shadowOffsetY=h.offsetY.number,u.ctx.shadowColor=Ut(h.color),u.ctx.shadowBlur=h.blur.number,u.ctx.fillStyle=h.inset?Ut(h.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),d.label=2;case 2:a=0,o=0,l=i,d.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!In(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return d.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return d.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return d.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:d.sent(),d.label=11;case 11:a++,d.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,n,r,i,s){return zt(this,void 0,void 0,function(){var a,o,l,c,u,d,h,g,m,p,f,v,B,C,x,_,x,_;return Pt(this,function(E){return this.ctx.save(),a=oT(i,r),o=kh(i,r),s===2&&(this.path(o),this.ctx.clip()),gA(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),gA(o[1])?(u=o[1].end.x,d=o[1].end.y):(u=o[1].x,d=o[1].y),r===0||r===2?h=Math.abs(l-u):h=Math.abs(c-d),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=n<3?n*3:n*2,m=n<3?n*2:n,s===3&&(g=n,m=n),p=!0,h<=g*2?p=!1:h<=g*2+m?(f=h/(2*g+m),g*=f,m*=f):(v=Math.floor((h+m)/(g+m)),B=(h-v*g)/(v-1),C=(h-(v+1)*g)/v,m=C<=0||Math.abs(m-B)<Math.abs(m-C)?B:C),p&&(s===3?this.ctx.setLineDash([0,g+m]):this.ctx.setLineDash([g,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=n):this.ctx.lineWidth=n*2+1.1,this.ctx.strokeStyle=Ut(t),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(gA(o[0])&&(x=o[3],_=o[0],this.ctx.beginPath(),this.formatPath([new ce(x.end.x,x.end.y),new ce(_.start.x,_.start.y)]),this.ctx.stroke()),gA(o[1])&&(x=o[1],_=o[2],this.ctx.beginPath(),this.formatPath([new ce(x.end.x,x.end.y),new ce(_.start.x,_.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return zt(this,void 0,void 0,function(){var n;return Pt(this,function(r){switch(r.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Ut(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),n=iT(t),[4,this.renderStack(n)];case 1:return r.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(A0),mT=function(A){return A instanceof Nm||A instanceof Pm?!0:A instanceof bu&&A.type!==ja&&A.type!==Xa},BT=function(A,e){switch(A){case 0:return Ja(e);case 2:return ZF(e);case 1:default:return qa(e)}},vT=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},wT=["-apple-system","system-ui"],xT=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(e){return wT.indexOf(e)===-1}):A},CT=function(A){QA(e,A);function e(t,n){var r=A.call(this,t,n)||this;return r.canvas=n.canvas?n.canvas:document.createElement("canvas"),r.ctx=r.canvas.getContext("2d"),r.options=n,r.canvas.width=Math.floor(n.width*n.scale),r.canvas.height=Math.floor(n.height*n.scale),r.canvas.style.width=n.width+"px",r.canvas.style.height=n.height+"px",r.ctx.scale(r.options.scale,r.options.scale),r.ctx.translate(-n.x,-n.y),r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+n.width+"x"+n.height+" at "+n.x+","+n.y+") with scale "+n.scale),r}return e.prototype.render=function(t){return zt(this,void 0,void 0,function(){var n,r;return Pt(this,function(i){switch(i.label){case 0:return n=zc(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,_T(n)];case 1:return r=i.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Ut(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(r,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(A0),_T=function(A){return new Promise(function(e,t){var n=new Image;n.onload=function(){e(n)},n.onerror=t,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},ET=function(){function A(e){var t=e.id,n=e.enabled;this.id=t,this.enabled=n,this.start=Date.now()}return A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Gs([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Gs([this.id,this.getTime()+"ms"],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Gs([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Gs([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.instances={},A}(),yT=function(){function A(e,t){var n;this.windowBounds=t,this.instanceName="#"+A.instanceCount++,this.logger=new ET({id:this.instanceName,enabled:e.logging}),this.cache=(n=e.cache)!==null&&n!==void 0?n:new KF(this,e)}return A.instanceCount=1,A}(),ST=function(A,e){return e===void 0&&(e={}),bT(A,e)};typeof window<"u"&&$m.setContext(window);var bT=function(A,e){return zt(void 0,void 0,void 0,function(){var t,n,r,i,s,a,o,l,c,u,d,h,g,m,p,f,v,B,C,x,E,_,E,T,w,y,I,L,U,Q,D,z,N,W,V,X,re,G,Z,ee;return Pt(this,function(ne){switch(ne.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=A.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(n=t.defaultView,!n)throw new Error("Document is not attached to a Window");return r={allowTaint:(T=e.allowTaint)!==null&&T!==void 0?T:!1,imageTimeout:(w=e.imageTimeout)!==null&&w!==void 0?w:15e3,proxy:e.proxy,useCORS:(y=e.useCORS)!==null&&y!==void 0?y:!1},i=Mc({logging:(I=e.logging)!==null&&I!==void 0?I:!0,cache:e.cache},r),s={windowWidth:(L=e.windowWidth)!==null&&L!==void 0?L:n.innerWidth,windowHeight:(U=e.windowHeight)!==null&&U!==void 0?U:n.innerHeight,scrollX:(Q=e.scrollX)!==null&&Q!==void 0?Q:n.pageXOffset,scrollY:(D=e.scrollY)!==null&&D!==void 0?D:n.pageYOffset},a=new un(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new yT(i,a),l=(z=e.foreignObjectRendering)!==null&&z!==void 0?z:!1,c={allowTaint:(N=e.allowTaint)!==null&&N!==void 0?N:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new Oh(o,A,c),d=u.clonedReferenceElement,d?[4,u.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return h=ne.sent(),g=Uu(d)||UF(d)?rb(d.ownerDocument):Co(o,d),m=g.width,p=g.height,f=g.left,v=g.top,B=UT(o,d,e.backgroundColor),C={canvas:e.canvas,backgroundColor:B,scale:(V=(W=e.scale)!==null&&W!==void 0?W:n.devicePixelRatio)!==null&&V!==void 0?V:1,x:((X=e.x)!==null&&X!==void 0?X:0)+f,y:((re=e.y)!==null&&re!==void 0?re:0)+v,width:(G=e.width)!==null&&G!==void 0?G:Math.ceil(m),height:(Z=e.height)!==null&&Z!==void 0?Z:Math.ceil(p)},l?(o.logger.debug("Document cloned, using foreign object rendering"),E=new CT(o,C),[4,E.render(d)]):[3,3];case 2:return x=ne.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+f+","+v+" with size "+m+"x"+p+" using computed rendering"),o.logger.debug("Starting DOM parsing"),_=Vm(o,d),B===_.styles.backgroundColor&&(_.styles.backgroundColor=cn.TRANSPARENT),o.logger.debug("Starting renderer for element at "+C.x+","+C.y+" with size "+C.width+"x"+C.height),E=new gT(o,C),[4,E.render(_)];case 4:x=ne.sent(),ne.label=5;case 5:return(!((ee=e.removeContainer)!==null&&ee!==void 0)||ee)&&(Oh.destroy(h)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,x]}})})},UT=function(A,e,t){var n=e.ownerDocument,r=n.documentElement?ki(A,getComputedStyle(n.documentElement).backgroundColor):cn.TRANSPARENT,i=n.body?ki(A,getComputedStyle(n.body).backgroundColor):cn.TRANSPARENT,s=typeof t=="string"?ki(A,t):t===null?cn.TRANSPARENT:4294967295;return e===n.documentElement?In(r)?In(i)?s:i:r:s};const MT=A=>{ST(A).then(function(e){const t=e.toDataURL("image/png"),n=document.createElement("a");n.href=t,n.download="color-card.png",n.click()})},FT=({checked:A=!1,text:e="选项",pop:t,onChange:n})=>M.jsxs(TT,{children:[M.jsxs(IT,{onClick:()=>{n==null||n()},children:[M.jsx(QT,{className:`${A?"checked":""}`,children:M.jsx(oS,{size:10,strokeWidth:0,fill:"var(--color-bg-white)"})}),e]}),t&&M.jsxs(LT,{className:"hover-pop",children:[M.jsx(lS,{stroke:"var(--color-text-4)"}),M.jsx(Va,{content:t,theme:"dark",style:{maxWidth:"200px"}})]})]}),TT=Ie.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`,IT=Ie.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`,QT=Ie.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`,LT=Ie.div`
  position: relative;
  height: 16px;
`,RT=({data:A,label:e="请选择",selected:t="0",width:n="100px",prefix:r,onChange:i})=>{const[s,a]=q.useState(!1),[o,l]=q.useState(t);return M.jsxs(DT,{style:{width:typeof n=="number"?`${n}px`:n},children:[r&&M.jsx("p",{className:"land-select-prefix",children:r}),M.jsxs(HT,{className:`${s?"show":""}`,onClick:()=>a(!s),children:[M.jsx("p",{children:o==="0"?e:A==null?void 0:A.filter(c=>c.id===o)[0].value}),M.jsx(Ca,{})]}),M.jsx(PT,{className:`land-select-results ${s?"show":""}`,children:M.jsx(NT,{children:A==null?void 0:A.map(c=>M.jsx(OT,{onClick:()=>{l(c.id),i==null||i(c.id,c.value)},children:c.value},c.id))})})]})},DT=Ie.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-prefix {
    font-size: var(--font-content-medium);
  }
`,HT=Ie.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
  p {
    flex: 1;
  }
  svg {
    transition: transform var(--transition-15) ease;
  }
  &.show svg {
    transform: rotate(180deg);
  }
`,PT=Ie.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`,NT=Ie.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`,OT=Ie.li`
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
`,GT="colorcard.jpeg",ca=[{id:"1",value:"#b9a78f"},{id:"2",value:"#7e6d5b"},{id:"3",value:"#e5e6eb"},{id:"4",value:"#473f3c"},{id:"5",value:"#623726"},{id:"6",value:"#cab8ba"}],VT=({})=>{const A=q.useRef(null),e=q.useRef(null),[t,n]=q.useState(""),[r,i]=q.useState([]),[s,a]=q.useState(),[o,l]=q.useState();q.useEffect(()=>{let L={w:200,h:200,ratio:1};if(A.current){const U=A.current.getBoundingClientRect();L={w:U.width,h:U.height,ratio:U.width/U.height}}a(L)},[t]),q.useEffect(()=>{const L=Q=>{Q.forEach(D=>{const{width:z,height:N}=D.contentRect;l(z/N)})},U=new ResizeObserver(L);return U.observe(e.current),()=>U.disconnect()},[e]);const c=()=>{if(r.length>=0)if(r.length<8){let L="";window.EyeDropper||p(!0,"你的浏览器不支持此功能"),new EyeDropper().open().then(Q=>{L=Q.sRGBHex,i([...r,{id:`${L}`,value:L}])}).catch(()=>{p(!0,"出错了～")})}else p(!0,"已达上限～长按删除后重试");else p(!0,"请先上传图片～")},u=L=>{const U=r.filter(Q=>Q.id!==L);i(U)},[d,h]=q.useState(!1),[g,m]=q.useState(""),p=(L,U)=>{m(U),h(L);const Q=setTimeout(()=>{h(!1),clearTimeout(Q)},1e3)},[f,v]=q.useState(10),[B,C]=q.useState(!0);q.useEffect(()=>{f>0?C(!0):C(!1)},[f]),q.useEffect(()=>{v(B?f||10:0)},[B]);const[x,_]=q.useState(6);q.useEffect(()=>{I(t)},[f,B,x]);const E=L=>{const U=pe(`rgb(${L[0]},${L[1]},${L[2]})`).toHsv();return U.s<=f/100||U.v<=f/100};function T(L,U,Q=32){if(E(L))return!0;const D=L[0]-U[0],z=L[1]-U[1],N=L[2]-U[2];return Math.sqrt(D*D+z*z+N*N)<Q}const w=L=>{const U=document.createElement("canvas"),Q=U.getContext("2d");return U.width=L.width,U.height=L.height,Q==null||Q.drawImage(L,0,0,L.width,L.height),Q==null?void 0:Q.getImageData(0,0,L.width,L.height).data},y=L=>{const U=w(L);if(!U)return;const Q=new Map;for(let N=0;N<U.length;N+=4){const V=[U[N],U[N+1],U[N+2]].join(",");Q.has(V)?Q.set(V,Q.get(V)+1):Q.set(V,1)}let D=Array.from(Q.entries()).sort((N,W)=>W[1]-N[1]).map(N=>N[0].split(",").map(W=>parseInt(W)));const z=[];for(const N of D)if(!z.some(W=>T(N,W,32))&&!E(N)&&z.push(N),z.length>=x)break;return z},I=L=>{const U=new Image;U.src=L,U.onload=()=>{var D;const Q=(D=y(U))==null?void 0:D.map(z=>({id:z[0]+z[1]+z[2],value:`#${pe(`rgb(${z[0]},${z[1]},${z[2]})`).toHex()}`}));i(Q)}};return q.useEffect(()=>{console.log(f,"filter")},[f]),M.jsxs("div",{className:"flex column items-start gap-32 px-24 pt-32",children:[M.jsxs(rr,{column:!0,gap:24,children:[M.jsxs(rr,{column:!0,gap:8,children:[M.jsx(Wn,{title:"Step 01: 上传图片",type:"h3"}),M.jsx(Wn,{title:"点击或拖拽来上传图片，以像素为单位对颜色计",type:"p",className:"color-gray-4"})]}),M.jsx("div",{ref:e,className:"width-100",style:{height:"240px"},children:M.jsx(CS,{fileType:"image/*",onUpload:L=>{n(L),i([])},desc:"点击上传图片或将图片拖拽于此",className:"radius-12",children:t&&M.jsx("img",{ref:A,src:t,className:`radius-8 ${o>s.ratio?"height-100":"width-100"}`})})})]}),M.jsxs("div",{className:"flex flex-wrap width-100",children:[M.jsxs("div",{children:[M.jsx(Wn,{title:"Step 02: 取色配置",type:"h3"}),M.jsx(Wn,{title:M.jsxs(M.Fragment,{children:["【过滤颜色】设置过滤中性色的范围",M.jsx("br",{}),"【提取数量】可一次提取6、8、10个颜色",M.jsx("br",{}),"【编辑颜色】支持删除、添加、修改提取的颜色列表"]}),type:"p",className:"color-gray-4 mt-8"}),(r==null?void 0:r.length)!==0&&M.jsxs("div",{className:"flex gap-24 mt-12",children:[M.jsxs("div",{className:"flex column gap-8",style:{width:"124px"},children:[M.jsx(FT,{text:"过滤中性色",checked:B,onChange:()=>{C(!B)},pop:"勾选后将自动过滤饱和度或纯度低于 10 的颜色<br/>支持输入自定义过滤范围（≤35）"}),M.jsx(_a,{type:"number",max:35,min:0,step:5,value:String(f),onChange:L=>v(Number(L))})]}),M.jsx(RT,{prefix:"数量",width:124,data:[{id:"1",value:"4"},{id:"2",value:"6"},{id:"3",value:"8"}],selected:"2",onChange:(L,U)=>{_(Number(U))}})]})]}),M.jsxs("div",{className:"relative flex items-center justify-center flex-wrap gap-12 p-24 flex-1",style:{minWidth:"325px"},children:[r.length===0&&t&&M.jsx("div",{className:"absolute",style:{zIndex:1},children:M.jsx(bl,{text:"提取颜色",type:"background",onClick:()=>{I(t)}})}),r.length===0?ca==null?void 0:ca.map((L,U)=>M.jsx(Kh,{className:"flex column relative justify-center gap-4 disabled",children:M.jsx(zf,{value:L.value,showDrop:!1})},U)):r==null?void 0:r.map((L,U)=>M.jsxs(Kh,{className:"flex column relative justify-center gap-4",children:[M.jsx(zf,{value:L.value,showDrop:!1,onChange:Q=>{const D=r.map(z=>({id:z.id,value:z.id==L.id?`#${pe(Q).toHex()}`:z.value}));i(D)}}),M.jsx("div",{className:"absolute cursor-pointer close-icon",onClick:()=>u(L.id),children:M.jsx(pS,{fill:"var(--color-red-6)"})})]},U)),r.length!==0&&r.length<8&&M.jsxs(kT,{className:"StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop",onClick:()=>c(),children:[M.jsx(gS,{}),M.jsx(Va,{content:"点击吸取颜色",theme:"dark"})]})]})]}),M.jsxs(rr,{column:!0,gap:8,children:[M.jsx(Wn,{title:"Step 03: 下载 & 保存色卡",type:"h3"}),M.jsx(Wn,{title:"调整颜色至满意值后，点击下载色卡，即可保存到本地",type:"p",className:"color-gray-4"})]}),(r==null?void 0:r.length)===0?M.jsx(Wh,{className:"grid mx-32 gap-24 disabled",length:6,children:Array.from({length:6}).map((L,U)=>M.jsxs("div",{className:"flex column items-center gap-12",children:[M.jsxs(Xh,{className:`relative p-24 flex gap-4 width-100 border color-card card-${U} column`,width:1e3,height:667,ratio:1.5,children:[M.jsx("div",{className:"color-img",children:M.jsx("img",{src:GT})}),M.jsx("div",{className:"color-list grid gap-4",children:(r==null?void 0:r.length)===0?ca.map(Q=>M.jsxs("div",{className:"color-item flex column items-center gap-4",children:[M.jsx("div",{style:{background:Q.value},className:"width-100 flex-1"},Q.id),M.jsx("p",{children:Q.value})]})):r.map(Q=>M.jsxs("div",{className:"color-item flex column items-center gap-4",children:[M.jsx("div",{style:{background:Q.value},className:"width-100 flex-1"},Q.id),M.jsx("p",{children:Q.value})]}))})]}),M.jsx(bl,{type:"background",className:"width-100",text:"下载色卡",icon:M.jsx(Hf,{})})]}))}):M.jsx(Wh,{className:"grid mx-32 gap-24",length:r.length,children:Array.from({length:6}).map((L,U)=>M.jsxs("div",{className:"flex column items-center gap-12",children:[M.jsxs(Xh,{className:`relative p-24 flex gap-4 width-100 border color-card card-${U} ${s.ratio>1?"column":""}`,width:s.w,height:s.h,ratio:s.ratio,children:[M.jsx("div",{className:"color-img",children:M.jsx("img",{src:t})}),M.jsx("div",{className:"color-list grid gap-4",children:r.map(Q=>M.jsxs("div",{className:"color-item flex column items-center gap-4",children:[M.jsx("div",{style:{background:Q.value},className:"width-100 flex-1"},Q.id),M.jsx("p",{children:Q.value})]}))})]}),M.jsx(bl,{type:"background",className:"width-100",text:"下载色卡",icon:M.jsx(Hf,{}),onClick:()=>{const Q=document.querySelectorAll(".color-card");MT(Q[U])}})]}))})]})},Kh=Ie.div`
  .close-icon {
    top: -6px;
    right: -6px;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-15) linear;
    will-change: opacity;
  }
  &:hover .close-icon {
    opacity: 1;
    pointer-events: all;
  }
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,kT=Ie.div`
  width: 48px;
  height: 48px;
  color: var(--color-text-3);
`,Wh=Ie.div`
  width: 100%;
  grid-template-columns: ${A=>`repeat(auto-fit, minmax(${A.length*40+48}px, 1fr))`};
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,Xh=Ie.div`
  box-sizing: border-box;
  min-width: 240px;
  p {
    color: var(--color-text-4);
    font-size: 8px;
  }
  &.card-0,
  &.card-1,
  &.card-2,
  &.card-3,
  &.card-4,
  &.card-5 {
    .color-img {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .color-list {
      grid-auto-flow: ${A=>A.ratio>1?"column":"row"};
      width: ${A=>A.ratio>1?"auto":"64px"};
      height: ${A=>A.ratio>1?"32px":"auto"};
      flex-shrink: 0;
    }
  }
  &.card-1 {
    img,
    .color-item div {
      border-radius: 4px;
    }
  }
  &.card-2 {
    .card-img {
      height: 80%;
    }
    .color-item {
      height: ${A=>A.ratio>1?"20px":"auto"};
    }
  }
  &.card-3 {
    padding-bottom: ${A=>A.ratio>1?"60px":"24px"};
    .color-img {
      width: ${A=>A.ratio>1?"100%":"calc(100% - 68px)"};
    }
    .color-list {
      position: absolute;
      left: ${A=>A.ratio>1?"50%":""};
      bottom: ${A=>A.ratio>1?"12px":""};
      right: ${A=>A.ratio>1?"":"12px"};
      top: ${A=>A.ratio>1?"":"50%"};
      padding: 12px;
      width: ${A=>A.ratio>1?"60%":"120px"};
      height: ${A=>A.ratio>1?"84px":"60%"};
      border-radius: var(--radius-4);
      background-color: var(--color-bg-white);
      transform: ${A=>A.ratio>1?"translateX(-50%)":"translateY(-50%)"};
    }
    .color-item div {
      border-radius: 4px;
    }
    .color-item {
      position: relative;
    }
    p {
      position: absolute;
      left: 4px;
      top: 0;
      transform: ${A=>A.ratio>1?"rotate(90deg)":""};
      transform-origin: left bottom;
      color: var(--color-text-light);
    }
  }
  &.card-4 {
    .color-item div {
      width: unset;
      border-radius: 50%;
      aspect-ratio: 1;
      outline: 2px solid var(--color-bg-white);
      overflow: hidden;
    }
  }
  &.card-5 {
    justify-content: center;
    padding: ${A=>A.ratio>1?"42px 24px":"24px 36px"};
    .color-img {
      width: ${A=>A.ratio>1?"100%":"calc(100% - 44px)"};
    }
    .color-list {
      display: flex;
      justify-content: center;
      flex-direction: ${A=>A.ratio>1?"row":"column"};
      gap: 0;
      position: absolute;
      left: ${A=>A.ratio>1?"":"50%"};
      bottom: ${A=>A.ratio>1?"64px":"50%"};
      height: 40px;
      width: ${A=>A.ratio>1?"calc(100% - 48px)":"48px"};
      transform: ${A=>A.ratio>1?"translateX(4px)":"translate(-50%,50%)"};
    }
    .color-item div {
      border-radius: 50%;
      aspect-ratio: 1;
      outline: 2px solid var(--color-bg-white);
      overflow: hidden;
    }
    .color-item {
      position: relative;
      margin-left: -4px;
      width: 40px;
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--color-text-light);
    }
  }
`,jh=({})=>{const[A,e]=q.useState(1);return M.jsxs(Ga,{children:[M.jsx(jg,{logo:M.jsx("p",{children:"❤️💛🩵💜"}),name:M.jsx(Wn,{title:"Colors",type:"h2"}),align:"end",menuProps:{data:[{key:1,title:"ColorPicker",clickType:Zi.SELF}],actived:A,handleChangeTab:(t,n)=>n===Zi.SELF&&e(t)}}),M.jsx(Ga,{children:M.jsx(Yg,{children:A===1&&M.jsx(VT,{})})}),M.jsx($g,{children:M.jsx(rr,{bothCenter:!0,className:"width-100 color-gray-4",children:"@suminhan"})})]})};var aA={},Xi=function(){return Xi=Object.assign||function(A){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(A[r]=e[r])}return A},Xi.apply(this,arguments)};function Xt(A,e){return Object.defineProperty?Object.defineProperty(A,"raw",{value:e}):A.raw=e,A}var Io={exports:{}},Ui={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function zT(){if(Yh)return Ui;Yh=1;var A=Ye,e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(a,o,l){var c,u={},d=null,h=null;l!==void 0&&(d=""+l),o.key!==void 0&&(d=""+o.key),o.ref!==void 0&&(h=o.ref);for(c in o)n.call(o,c)&&!i.hasOwnProperty(c)&&(u[c]=o[c]);if(a&&a.defaultProps)for(c in o=a.defaultProps,o)u[c]===void 0&&(u[c]=o[c]);return{$$typeof:e,type:a,key:d,ref:h,props:u,_owner:r.current}}return Ui.Fragment=t,Ui.jsx=s,Ui.jsxs=s,Ui}(function(A){A.exports=zT()})(Io);const KT=Io.exports.Fragment,kn=Io.exports.jsx,WT=Io.exports.jsxs;var Jt=function(){return Jt=Object.assign||function(A){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(A[r]=e[r])}return A},Jt.apply(this,arguments)};function eo(A,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,i;n<r;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return A.concat(i||Array.prototype.slice.call(e))}var at="-ms-",ji="-moz-",Je="-webkit-",n0="comm",Qo="rule",Mu="decl",XT="@import",r0="@keyframes",jT="@layer",i0=Math.abs,Fu=String.fromCharCode,Jc=Object.assign;function YT(A,e){return Ft(A,0)^45?(((e<<2^Ft(A,0))<<2^Ft(A,1))<<2^Ft(A,2))<<2^Ft(A,3):0}function s0(A){return A.trim()}function rn(A,e){return(A=e.exec(A))?A[0]:A}function De(A,e,t){return A.replace(e,t)}function Ua(A,e,t){return A.indexOf(e,t)}function Ft(A,e){return A.charCodeAt(e)|0}function ai(A,e,t){return A.slice(e,t)}function PA(A){return A.length}function a0(A){return A.length}function Ni(A,e){return e.push(A),A}function $T(A,e){return A.map(e).join("")}function $h(A,e){return A.filter(function(t){return!rn(t,e)})}var Lo=1,oi=1,o0=0,wA=0,Ct=0,gi="";function Ro(A,e,t,n,r,i,s,a){return{value:A,root:e,parent:t,type:n,props:r,children:i,line:Lo,column:oi,length:s,return:"",siblings:a}}function wn(A,e){return Jc(Ro("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Hr(A){for(;A.root;)A=wn(A.root,{children:[A]});Ni(A,A.siblings)}function JT(){return Ct}function qT(){return Ct=wA>0?Ft(gi,--wA):0,oi--,Ct===10&&(oi=1,Lo--),Ct}function IA(){return Ct=wA<o0?Ft(gi,wA++):0,oi++,Ct===10&&(oi=1,Lo++),Ct}function ar(){return Ft(gi,wA)}function Ma(){return wA}function Do(A,e){return ai(gi,A,e)}function qc(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ZT(A){return Lo=oi=1,o0=PA(gi=A),wA=0,[]}function eI(A){return gi="",A}function Yl(A){return s0(Do(wA-1,Zc(A===91?A+2:A===40?A+1:A)))}function tI(A){for(;(Ct=ar())&&Ct<33;)IA();return qc(A)>2||qc(Ct)>3?"":" "}function AI(A,e){for(;--e&&IA()&&!(Ct<48||Ct>102||Ct>57&&Ct<65||Ct>70&&Ct<97););return Do(A,Ma()+(e<6&&ar()==32&&IA()==32))}function Zc(A){for(;IA();)switch(Ct){case A:return wA;case 34:case 39:A!==34&&A!==39&&Zc(Ct);break;case 40:A===41&&Zc(A);break;case 92:IA();break}return wA}function nI(A,e){for(;IA()&&A+Ct!==57&&!(A+Ct===84&&ar()===47););return"/*"+Do(e,wA-1)+"*"+Fu(A===47?A:IA())}function rI(A){for(;!qc(ar());)IA();return Do(A,wA)}function iI(A){return eI(Fa("",null,null,null,[""],A=ZT(A),0,[0],A))}function Fa(A,e,t,n,r,i,s,a,o){for(var l=0,c=0,u=s,d=0,h=0,g=0,m=1,p=1,f=1,v=0,B="",C=r,x=i,_=n,E=B;p;)switch(g=v,v=IA()){case 40:if(g!=108&&Ft(E,u-1)==58){Ua(E+=De(Yl(v),"&","&\f"),"&\f",i0(l?a[l-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:E+=Yl(v);break;case 9:case 10:case 13:case 32:E+=tI(g);break;case 92:E+=AI(Ma()-1,7);continue;case 47:switch(ar()){case 42:case 47:Ni(sI(nI(IA(),Ma()),e,t,o),o);break;default:E+="/"}break;case 123*m:a[l++]=PA(E)*f;case 125*m:case 59:case 0:switch(v){case 0:case 125:p=0;case 59+c:f==-1&&(E=De(E,/\f/g,"")),h>0&&PA(E)-u&&Ni(h>32?qh(E+";",n,t,u-1,o):qh(De(E," ","")+";",n,t,u-2,o),o);break;case 59:E+=";";default:if(Ni(_=Jh(E,e,t,l,c,r,a,B,C=[],x=[],u,i),i),v===123)if(c===0)Fa(E,e,_,_,C,i,u,a,x);else switch(d===99&&Ft(E,3)===110?100:d){case 100:case 108:case 109:case 115:Fa(A,_,_,n&&Ni(Jh(A,_,_,0,0,r,a,B,r,C=[],u,x),x),r,x,u,a,n?C:x);break;default:Fa(E,_,_,_,[""],x,0,a,x)}}l=c=h=0,m=f=1,B=E="",u=s;break;case 58:u=1+PA(E),h=g;default:if(m<1){if(v==123)--m;else if(v==125&&m++==0&&qT()==125)continue}switch(E+=Fu(v),v*m){case 38:f=c>0?1:(E+="\f",-1);break;case 44:a[l++]=(PA(E)-1)*f,f=1;break;case 64:ar()===45&&(E+=Yl(IA())),d=ar(),c=u=PA(B=E+=rI(Ma())),v++;break;case 45:g===45&&PA(E)==2&&(m=0)}}return i}function Jh(A,e,t,n,r,i,s,a,o,l,c,u){for(var d=r-1,h=r===0?i:[""],g=a0(h),m=0,p=0,f=0;m<n;++m)for(var v=0,B=ai(A,d+1,d=i0(p=s[m])),C=A;v<g;++v)(C=s0(p>0?h[v]+" "+B:De(B,/&\f/g,h[v])))&&(o[f++]=C);return Ro(A,e,t,r===0?Qo:a,o,l,c,u)}function sI(A,e,t,n){return Ro(A,e,t,n0,Fu(JT()),ai(A,2,-2),0,n)}function qh(A,e,t,n,r){return Ro(A,e,t,Mu,ai(A,0,n),ai(A,n+1,-1),n,r)}function l0(A,e,t){switch(YT(A,e)){case 5103:return Je+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Je+A+A;case 4789:return ji+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return Je+A+ji+A+at+A+A;case 5936:switch(Ft(A,e+11)){case 114:return Je+A+at+De(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return Je+A+at+De(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return Je+A+at+De(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return Je+A+at+A+A;case 6165:return Je+A+at+"flex-"+A+A;case 5187:return Je+A+De(A,/(\w+).+(:[^]+)/,Je+"box-$1$2"+at+"flex-$1$2")+A;case 5443:return Je+A+at+"flex-item-"+De(A,/flex-|-self/g,"")+(rn(A,/flex-|baseline/)?"":at+"grid-row-"+De(A,/flex-|-self/g,""))+A;case 4675:return Je+A+at+"flex-line-pack"+De(A,/align-content|flex-|-self/g,"")+A;case 5548:return Je+A+at+De(A,"shrink","negative")+A;case 5292:return Je+A+at+De(A,"basis","preferred-size")+A;case 6060:return Je+"box-"+De(A,"-grow","")+Je+A+at+De(A,"grow","positive")+A;case 4554:return Je+De(A,/([^-])(transform)/g,"$1"+Je+"$2")+A;case 6187:return De(De(De(A,/(zoom-|grab)/,Je+"$1"),/(image-set)/,Je+"$1"),A,"")+A;case 5495:case 3959:return De(A,/(image-set\([^]*)/,Je+"$1$`$1");case 4968:return De(De(A,/(.+:)(flex-)?(.*)/,Je+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Je+A+A;case 4200:if(!rn(A,/flex-|baseline/))return at+"grid-column-align"+ai(A,e)+A;break;case 2592:case 3360:return at+De(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(n,r){return e=r,rn(n.props,/grid-\w+-end/)})?~Ua(A+(t=t[e].value),"span",0)?A:at+De(A,"-start","")+A+at+"grid-row-span:"+(~Ua(t,"span",0)?rn(t,/\d+/):+rn(t,/\d+/)-+rn(A,/\d+/))+";":at+De(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(n){return rn(n.props,/grid-\w+-start/)})?A:at+De(De(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return De(A,/(.+)-inline(.+)/,Je+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(PA(A)-1-e>6)switch(Ft(A,e+1)){case 109:if(Ft(A,e+4)!==45)break;case 102:return De(A,/(.+:)(.+)-([^]+)/,"$1"+Je+"$2-$3$1"+ji+(Ft(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~Ua(A,"stretch",0)?l0(De(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return De(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,r,i,s,a,o,l){return at+r+":"+i+l+(s?at+r+"-span:"+(a?o:+o-+i)+l:"")+A});case 4949:if(Ft(A,e+6)===121)return De(A,":",":"+Je)+A;break;case 6444:switch(Ft(A,Ft(A,14)===45?18:11)){case 120:return De(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Je+(Ft(A,14)===45?"inline-":"")+"box$3$1"+Je+"$2$3$1"+at+"$2box$3")+A;case 100:return De(A,":",":"+at)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(A,"scroll-","scroll-snap-")+A}return A}function to(A,e){for(var t="",n=0;n<A.length;n++)t+=e(A[n],n,A,e)||"";return t}function aI(A,e,t,n){switch(A.type){case jT:if(A.children.length)break;case XT:case Mu:return A.return=A.return||A.value;case n0:return"";case r0:return A.return=A.value+"{"+to(A.children,n)+"}";case Qo:if(!PA(A.value=A.props.join(",")))return""}return PA(t=to(A.children,n))?A.return=A.value+"{"+t+"}":""}function oI(A){var e=a0(A);return function(t,n,r,i){for(var s="",a=0;a<e;a++)s+=A[a](t,n,r,i)||"";return s}}function lI(A){return function(e){e.root||(e=e.return)&&A(e)}}function cI(A,e,t,n){if(A.length>-1&&!A.return)switch(A.type){case Mu:A.return=l0(A.value,A.length,t);return;case r0:return to([wn(A,{value:De(A.value,"@","@"+Je)})],n);case Qo:if(A.length)return $T(t=A.props,function(r){switch(rn(r,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hr(wn(A,{props:[De(r,/:(read-\w+)/,":"+ji+"$1")]})),Hr(wn(A,{props:[r]})),Jc(A,{props:$h(t,n)});break;case"::placeholder":Hr(wn(A,{props:[De(r,/:(plac\w+)/,":"+Je+"input-$1")]})),Hr(wn(A,{props:[De(r,/:(plac\w+)/,":"+ji+"$1")]})),Hr(wn(A,{props:[De(r,/:(plac\w+)/,at+"input-$1")]})),Hr(wn(A,{props:[r]})),Jc(A,{props:$h(t,n)});break}return""})}}var uI={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},li=typeof process<"u"&&aA!==void 0&&(aA.REACT_APP_SC_ATTR||aA.SC_ATTR)||"data-styled",c0="active",u0="data-styled-version",Ho="6.1.8",Tu=`/*!sc*/
`,Iu=typeof window<"u"&&"HTMLElement"in window,dI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&aA!==void 0&&aA.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&aA.REACT_APP_SC_DISABLE_SPEEDY!==""?aA.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&aA.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&aA!==void 0&&aA.SC_DISABLE_SPEEDY!==void 0&&aA.SC_DISABLE_SPEEDY!==""&&aA.SC_DISABLE_SPEEDY!=="false"&&aA.SC_DISABLE_SPEEDY),Po=Object.freeze([]),ci=Object.freeze({});function fI(A,e,t){return t===void 0&&(t=ci),A.theme!==t.theme&&A.theme||e||t.theme}var d0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pI=/(^-|-$)/g;function Zh(A){return A.replace(hI,"-").replace(pI,"")}var gI=/(a)(d)/gi,ua=52,ep=function(A){return String.fromCharCode(A+(A>25?39:97))};function eu(A){var e,t="";for(e=Math.abs(A);e>ua;e=e/ua|0)t=ep(e%ua)+t;return(ep(e%ua)+t).replace(gI,"$1-$2")}var $l,f0=5381,Kr=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},h0=function(A){return Kr(f0,A)};function mI(A){return eu(h0(A)>>>0)}function BI(A){return A.displayName||A.name||"Component"}function Jl(A){return typeof A=="string"&&!0}var p0=typeof Symbol=="function"&&Symbol.for,g0=p0?Symbol.for("react.memo"):60115,vI=p0?Symbol.for("react.forward_ref"):60112,wI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},CI=(($l={})[vI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$l[g0]=m0,$l);function tp(A){return("type"in(e=A)&&e.type.$$typeof)===g0?m0:"$$typeof"in A?CI[A.$$typeof]:wI;var e}var _I=Object.defineProperty,EI=Object.getOwnPropertyNames,Ap=Object.getOwnPropertySymbols,yI=Object.getOwnPropertyDescriptor,SI=Object.getPrototypeOf,np=Object.prototype;function B0(A,e,t){if(typeof e!="string"){if(np){var n=SI(e);n&&n!==np&&B0(A,n,t)}var r=EI(e);Ap&&(r=r.concat(Ap(e)));for(var i=tp(A),s=tp(e),a=0;a<r.length;++a){var o=r[a];if(!(o in xI||t&&t[o]||s&&o in s||i&&o in i)){var l=yI(e,o);try{_I(A,o,l)}catch{}}}}return A}function ui(A){return typeof A=="function"}function Qu(A){return typeof A=="object"&&"styledComponentId"in A}function Jn(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function rp(A,e){if(A.length===0)return"";for(var t=A[0],n=1;n<A.length;n++)t+=e?e+A[n]:A[n];return t}function ns(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function tu(A,e,t){if(t===void 0&&(t=!1),!t&&!ns(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)A[n]=tu(A[n],e[n]);else if(ns(e))for(var n in e)A[n]=tu(A[n],e[n]);return A}function Lu(A,e){Object.defineProperty(A,"toString",{value:e})}function cs(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var bI=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw cs(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=r;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),o=(s=0,t.length);s<o;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,s=r;s<i;s++)t+="".concat(this.tag.getRule(s)).concat(Tu);return t},A}(),Ta=new Map,Ao=new Map,Ia=1,da=function(A){if(Ta.has(A))return Ta.get(A);for(;Ao.has(Ia);)Ia++;var e=Ia++;return Ta.set(A,e),Ao.set(e,A),e},UI=function(A,e){Ia=e+1,Ta.set(A,e),Ao.set(e,A)},MI="style[".concat(li,"][").concat(u0,'="').concat(Ho,'"]'),FI=new RegExp("^".concat(li,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),TI=function(A,e,t){for(var n,r=t.split(","),i=0,s=r.length;i<s;i++)(n=r[i])&&A.registerName(e,n)},II=function(A,e){for(var t,n=((t=e.textContent)!==null&&t!==void 0?t:"").split(Tu),r=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var o=a.match(FI);if(o){var l=0|parseInt(o[1],10),c=o[2];l!==0&&(UI(c,l),TI(A,c,o[3]),A.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}};function QI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var v0=function(A){var e=document.head,t=A||e,n=document.createElement("style"),r=function(a){var o=Array.from(a.querySelectorAll("style[".concat(li,"]")));return o[o.length-1]}(t),i=r!==void 0?r.nextSibling:null;n.setAttribute(li,c0),n.setAttribute(u0,Ho);var s=QI();return s&&n.setAttribute("nonce",s),t.insertBefore(n,i),n},LI=function(){function A(e){this.element=v0(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var n=document.styleSheets,r=0,i=n.length;r<i;r++){var s=n[r];if(s.ownerNode===t)return s}throw cs(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),RI=function(){function A(e){this.element=v0(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),DI=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),ip=Iu,HI={isServer:!Iu,useCSSOMInjection:!dI},w0=function(){function A(e,t,n){e===void 0&&(e=ci),t===void 0&&(t={});var r=this;this.options=Jt(Jt({},HI),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Iu&&ip&&(ip=!1,function(i){for(var s=document.querySelectorAll(MI),a=0,o=s.length;a<o;a++){var l=s[a];l&&l.getAttribute(li)!==c0&&(II(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),Lu(this,function(){return function(i){for(var s=i.getTag(),a=s.length,o="",l=function(u){var d=function(f){return Ao.get(f)}(u);if(d===void 0)return"continue";var h=i.names.get(d),g=s.getGroup(u);if(h===void 0||g.length===0)return"continue";var m="".concat(li,".g").concat(u,'[id="').concat(d,'"]'),p="";h!==void 0&&h.forEach(function(f){f.length>0&&(p+="".concat(f,","))}),o+="".concat(g).concat(m,'{content:"').concat(p,'"}').concat(Tu)},c=0;c<a;c++)l(c);return o}(r)})}return A.registerId=function(e){return da(e)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(Jt(Jt({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var n=t.useCSSOMInjection,r=t.target;return t.isServer?new DI(r):n?new LI(r):new RI(r)}(this.options),new bI(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(da(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},A.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(da(e),n)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(da(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),PI=/&/g,NI=/^\s*\/\/.*$/gm;function x0(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=x0(t.children,e)),t})}function OI(A){var e,t,n,r=A===void 0?ci:A,i=r.options,s=i===void 0?ci:i,a=r.plugins,o=a===void 0?Po:a,l=function(d,h,g){return g.startsWith(t)&&g.endsWith(t)&&g.replaceAll(t,"").length>0?".".concat(e):d},c=o.slice();c.push(function(d){d.type===Qo&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(PI,t).replace(n,l))}),s.prefix&&c.push(cI),c.push(aI);var u=function(d,h,g,m){h===void 0&&(h=""),g===void 0&&(g=""),m===void 0&&(m="&"),e=m,t=h,n=new RegExp("\\".concat(t,"\\b"),"g");var p=d.replace(NI,""),f=iI(g||h?"".concat(g," ").concat(h," { ").concat(p," }"):p);s.namespace&&(f=x0(f,s.namespace));var v=[];return to(f,oI(c.concat(lI(function(B){return v.push(B)})))),v};return u.hash=o.length?o.reduce(function(d,h){return h.name||cs(15),Kr(d,h.name)},f0).toString():"",u}var GI=new w0,Au=OI(),C0=Ye.createContext({shouldForwardProp:void 0,styleSheet:GI,stylis:Au});C0.Consumer;Ye.createContext(void 0);function sp(){return q.useContext(C0)}var VI=function(){function A(e,t){var n=this;this.inject=function(r,i){i===void 0&&(i=Au);var s=n.name+i.hash;r.hasNameForId(n.id,s)||r.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Lu(this,function(){throw cs(12,String(n.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=Au),this.name+e.hash},A}(),kI=function(A){return A>="A"&&A<="Z"};function ap(A){for(var e="",t=0;t<A.length;t++){var n=A[t];if(t===1&&n==="-"&&A[0]==="-")return A;kI(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var _0=function(A){return A==null||A===!1||A===""},E0=function(A){var e,t,n=[];for(var r in A){var i=A[r];A.hasOwnProperty(r)&&!_0(i)&&(Array.isArray(i)&&i.isCss||ui(i)?n.push("".concat(ap(r),":"),i,";"):ns(i)?n.push.apply(n,eo(eo(["".concat(r," {")],E0(i),!1),["}"],!1)):n.push("".concat(ap(r),": ").concat((e=r,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in uI||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return n};function or(A,e,t,n){if(_0(A))return[];if(Qu(A))return[".".concat(A.styledComponentId)];if(ui(A)){if(!ui(i=A)||i.prototype&&i.prototype.isReactComponent||!e)return[A];var r=A(e);return or(r,e,t,n)}var i;return A instanceof VI?t?(A.inject(t,n),[A.getName(n)]):[A]:ns(A)?E0(A):Array.isArray(A)?Array.prototype.concat.apply(Po,A.map(function(s){return or(s,e,t,n)})):[A.toString()]}function zI(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(ui(t)&&!Qu(t))return!1}return!0}var KI=h0(Ho),WI=function(){function A(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&zI(e),this.componentId=t,this.baseHash=Kr(KI,t),this.baseStyle=n,w0.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Jn(r,this.staticRulesId);else{var i=rp(or(this.rules,e,t,n)),s=eu(Kr(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,a)}r=Jn(r,s),this.staticRulesId=s}else{for(var o=Kr(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var d=rp(or(u,e,t,n));o=Kr(o,d+c),l+=d}}if(l){var h=eu(o>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),r=Jn(r,h)}}return r},A}(),y0=Ye.createContext(void 0);y0.Consumer;var ql={};function XI(A,e,t){var n=Qu(A),r=A,i=!Jl(A),s=e.attrs,a=s===void 0?Po:s,o=e.componentId,l=o===void 0?function(C,x){var _=typeof C!="string"?"sc":Zh(C);ql[_]=(ql[_]||0)+1;var E="".concat(_,"-").concat(mI(Ho+_+ql[_]));return x?"".concat(x,"-").concat(E):E}(e.displayName,e.parentComponentId):o,c=e.displayName,u=c===void 0?function(C){return Jl(C)?"styled.".concat(C):"Styled(".concat(BI(C),")")}(A):c,d=e.displayName&&e.componentId?"".concat(Zh(e.displayName),"-").concat(e.componentId):e.componentId||l,h=n&&r.attrs?r.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(n&&r.shouldForwardProp){var m=r.shouldForwardProp;if(e.shouldForwardProp){var p=e.shouldForwardProp;g=function(C,x){return m(C,x)&&p(C,x)}}else g=m}var f=new WI(t,d,n?r.componentStyle:void 0);function v(C,x){return function(_,E,T){var w=_.attrs,y=_.componentStyle,I=_.defaultProps,L=_.foldedComponentIds,U=_.styledComponentId,Q=_.target,D=Ye.useContext(y0),z=sp(),N=_.shouldForwardProp||z.shouldForwardProp,W=fI(E,D,I)||ci,V=function(ne,ie,he){for(var Ee,me=Jt(Jt({},ie),{className:void 0,theme:he}),tt=0;tt<ne.length;tt+=1){var Ue=ui(Ee=ne[tt])?Ee(me):Ee;for(var H in Ue)me[H]=H==="className"?Jn(me[H],Ue[H]):H==="style"?Jt(Jt({},me[H]),Ue[H]):Ue[H]}return ie.className&&(me.className=Jn(me.className,ie.className)),me}(w,E,W),X=V.as||Q,re={};for(var G in V)V[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&V.theme===W||(G==="forwardedAs"?re.as=V.forwardedAs:N&&!N(G,X)||(re[G]=V[G]));var Z=function(ne,ie){var he=sp(),Ee=ne.generateAndInjectStyles(ie,he.styleSheet,he.stylis);return Ee}(y,V),ee=Jn(L,U);return Z&&(ee+=" "+Z),V.className&&(ee+=" "+V.className),re[Jl(X)&&!d0.has(X)?"class":"className"]=ee,re.ref=T,q.createElement(X,re)}(B,C,x)}v.displayName=u;var B=Ye.forwardRef(v);return B.attrs=h,B.componentStyle=f,B.displayName=u,B.shouldForwardProp=g,B.foldedComponentIds=n?Jn(r.foldedComponentIds,r.styledComponentId):"",B.styledComponentId=d,B.target=n?r.target:A,Object.defineProperty(B,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=n?function(x){for(var _=[],E=1;E<arguments.length;E++)_[E-1]=arguments[E];for(var T=0,w=_;T<w.length;T++)tu(x,w[T],!0);return x}({},r.defaultProps,C):C}}),Lu(B,function(){return".".concat(B.styledComponentId)}),i&&B0(B,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),B}function op(A,e){for(var t=[A[0]],n=0,r=e.length;n<r;n+=1)t.push(e[n],A[n+1]);return t}var lp=function(A){return Object.assign(A,{isCss:!0})};function jI(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ui(A)||ns(A))return lp(or(op(Po,eo([A],e,!0))));var n=A;return e.length===0&&n.length===1&&typeof n[0]=="string"?or(n):lp(or(op(n,e)))}function nu(A,e,t){if(t===void 0&&(t=ci),!e)throw cs(1,e);var n=function(r){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return A(e,t,jI.apply(void 0,eo([r],i,!1)))};return n.attrs=function(r){return nu(A,e,Jt(Jt({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},n.withConfig=function(r){return nu(A,e,Jt(Jt({},t),r))},n}var S0=function(A){return nu(XI,A)},Ot=S0;d0.forEach(function(A){Ot[A]=S0(A)});var cp;(function(A){A.BG="background",A.BORDER="border"})(cp||(cp={}));var up;(function(A){A.LIGHT="light",A.DARK="dark"})(up||(up={}));Ot.div(dp||(dp=Xt([`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  top: -48px;
  left: 50%;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-normal);
  border: var(--border-1) solid var(--color-border-1);
  transform: translate(-50%,20%);
  opacity: 0;
  transform-origin: bottom center;
  pointer-events: none;
  transition: all .15s linear;
  .land-pop-arrow {
    display: block;
    position: absolute;
    left: 50%;
    bottom: -50%;
    transform: translate(-50%,-75%) rotate(45deg);
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-radius: var(--radius-2);
    background-color: var(--color-bg-white);
  }
`],[`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  top: -48px;
  left: 50%;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-normal);
  border: var(--border-1) solid var(--color-border-1);
  transform: translate(-50%,20%);
  opacity: 0;
  transform-origin: bottom center;
  pointer-events: none;
  transition: all .15s linear;
  .land-pop-arrow {
    display: block;
    position: absolute;
    left: 50%;
    bottom: -50%;
    transform: translate(-50%,-75%) rotate(45deg);
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-radius: var(--radius-2);
    background-color: var(--color-bg-white);
  }
`])));var dp,YI=Ot.div(fp||(fp=Xt([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: `,`;
  gap: var(--gap-8);
  padding: `,`;
  width: `,`;
  height: `,`;
  color: `,`;
  &:hover {
    color: `,`;
  }
  &:active {
    color: `,`;
  }
  font-size: var(--font-content-medium);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  transition: all var(--transition-15) linear;
  cursor: pointer;
  .subText {
    margin-left: 4px;
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }

  &.text,
  &.border.default {
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:active {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: `,`;
    &.default {
      background-color: var(--color-text-2);
      &:hover {
        background-color: var(--color-text-1);
      }
      &:active {
        background-color: var(--color-text-1);
      }
    }
    &:hover {
      background-color: `,`;
    }
    &:active {
      background-color: `,`;
    }
  }

  &.border {
    padding: 7px 15px;
    border: `,`;
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover {
      background-color: `,`;
    }
    &:active {
      background-color: `,`;
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: `,`;
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover {
      border-color: `,`;
    }
    &:active {
      border-color: `,`;
    }
  }

  &.iconOnly {
    padding: 0;
    width: 36px;
    height: 36px;
  }
  &.disabled {
    opacity: var(--opacity-68);
    cursor: default;
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: `,`;
  gap: var(--gap-8);
  padding: `,`;
  width: `,`;
  height: `,`;
  color: `,`;
  &:hover {
    color: `,`;
  }
  &:active {
    color: `,`;
  }
  font-size: var(--font-content-medium);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  transition: all var(--transition-15) linear;
  cursor: pointer;
  .subText {
    margin-left: 4px;
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }

  &.text,
  &.border.default {
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:active {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: `,`;
    &.default {
      background-color: var(--color-text-2);
      &:hover {
        background-color: var(--color-text-1);
      }
      &:active {
        background-color: var(--color-text-1);
      }
    }
    &:hover {
      background-color: `,`;
    }
    &:active {
      background-color: `,`;
    }
  }

  &.border {
    padding: 7px 15px;
    border: `,`;
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover {
      background-color: `,`;
    }
    &:active {
      background-color: `,`;
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: `,`;
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover {
      border-color: `,`;
    }
    &:active {
      border-color: `,`;
    }
  }

  &.iconOnly {
    padding: 0;
    width: 36px;
    height: 36px;
  }
  &.disabled {
    opacity: var(--opacity-68);
    cursor: default;
  }
`])),function(A){return A.justify},function(A){return A.width&&A.width!=="100%"?"":"var(--padding-medium)"},function(A){return A.width?A.width:"fit-content"},function(A){return A.height?A.height:"fit-content"},function(A){return A.color?"".concat(A.color,"6)"):"var(--color-text-2)"},function(A){return A.color?"".concat(A.color,"5)"):"var(--color-text-3)"},function(A){return A.color?"".concat(A.color,"7)"):"var(--color-text-1)"},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"5)")},function(A){return"".concat(A.color,"7)")},function(A){return"var(--border-1) solid ".concat(A.color,"4)")},function(A){return"".concat(A.color,"1)")},function(A){return"".concat(A.color,"2)")},function(A){return"".concat(A.color,"4)")},function(A){return"".concat(A.color,"5)")},function(A){return"".concat(A.color,"7)")});Ot.a(hp||(hp=Xt([`
  `,`;
  text-decoration: none;
`],[`
  `,`;
  text-decoration: none;
`])),YI);var fp,hp;Ot.a(pp||(pp=Xt([`
    position: relative;
    width: fit-content;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: `,`;
        opacity: 0;
        transition: opacity 0.15s linear;
    }
    &:hover{
        color: `,`;
        &::before {
            opacity: 1;
            background-color: `,`;
        }
    }
    &:active,
    &.actived {
        color: `,`;
        &::before {
            background-color: `,`;
        }
    }
    &.disabled {
        cursor: default;
        color: `,`;
        &:hover::before {
            opacity: 0;
        }
    }
`],[`
    position: relative;
    width: fit-content;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: `,`;
        opacity: 0;
        transition: opacity 0.15s linear;
    }
    &:hover{
        color: `,`;
        &::before {
            opacity: 1;
            background-color: `,`;
        }
    }
    &:active,
    &.actived {
        color: `,`;
        &::before {
            background-color: `,`;
        }
    }
    &.disabled {
        cursor: default;
        color: `,`;
        &:hover::before {
            opacity: 0;
        }
    }
`])),function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"2)")});var pp;Ot.div(gp||(gp=Xt([`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`],[`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`])),function(A){return A.direction},function(A){return A.gap});var gp;Ot.div(mp||(mp=Xt([`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
  flex-wrap: `,`;
  justify-content: `,`;
  align-items: `,`;
  width: `,`;
  height: `,`;
`],[`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
  flex-wrap: `,`;
  justify-content: `,`;
  align-items: `,`;
  width: `,`;
  height: `,`;
`])),function(A){return A.direction},function(A){return A.gap},function(A){return A.wrap?"wrap":""},function(A){return A.justify},function(A){return A.align},function(A){return A.width},function(A){return A.height});var mp,Bp;(function(A){A.SELF="self",A.OTHERS="others",A.SIMPLE="simple",A.DISABLED="disabled"})(Bp||(Bp={}));Ot.div(vp||(vp=Xt([`
  display: flex;
  flex-direction: `,`;
  gap: var(--gap-4);
  height: `,`;
  width: `,`;
  border-bottom: `,`;
  border-right: `,`;
  .land-nav-item {
    position: relative;
    height: `,`;
    width: `,`;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-4);
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: `,`;
      bottom: `,`;
      width: 12px;
      height: 2px;
      transform: `,`;
      transform-origin: center center;
      border-radius: 1px;
      background-color: var(--color-text-1);
      opacity: 0;
    }
    &:hover {
      background-color: var(--color-bg-1);
      .land-nav-title::before {
        color: var(--color-text-1);
        font-weight: 600;
      }
    }
    &.actived {
      .land-nav-title::before {
        color: var(--color-text-1);
        font-weight: 600;
      }
      &::after {
        opacity: 1;
        transition: opacity var(--transition-15) linear;
      }
    }
    &.background {
      &.actived {
        background-color: var(--color-bg-1);
      }
    }
    &.line {
      &:hover {
        background-color: unset;
      }
      &.actived {
        .land-nav-title::before {
          color: var(--color-primary-6);
        }
        &::after {
          background-color: var(--color-primary-6);
          width: `,`;
        }
      }
    }
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }
  }
  .land-nav-link {
    padding: var(--padding-medium);
    display: flex;
    width: 100%;
    font-size: var(--font-content-large);
    white-space: nowrap;
    transition: background-color var(--transition-15) linear;
    cursor: pointer;
    .land-nav-title {
      position: relative;
      color: transparent;
      font-weight: 600;
      &::before {
        content: attr(data-title);
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        color: var(--color-text-3);
        font-weight: 400;
        text-align: center;
        line-height: 40px;
      }
    }

    .land-nav-icon {
      width: 14px;
      height: 14px;
    }
    .land-nav-sub-title {
      font-size: var(--font-content-small);
      opacity: var(--opacity-68);
    }
    .land-nav-new {
      position: absolute;
      padding: var(--padding-small);
      top: -12px;
      right: -8px;
      font-size: var(--font-content-small);
      background-color: var(--color-link-1);
      color: var(--color-link-6);
      font-weight: 600;
      border-radius: 3px;
      box-sizing: border-box;
      transform: scale(0.65);
    }
  }
`],[`
  display: flex;
  flex-direction: `,`;
  gap: var(--gap-4);
  height: `,`;
  width: `,`;
  border-bottom: `,`;
  border-right: `,`;
  .land-nav-item {
    position: relative;
    height: `,`;
    width: `,`;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-4);
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: `,`;
      bottom: `,`;
      width: 12px;
      height: 2px;
      transform: `,`;
      transform-origin: center center;
      border-radius: 1px;
      background-color: var(--color-text-1);
      opacity: 0;
    }
    &:hover {
      background-color: var(--color-bg-1);
      .land-nav-title::before {
        color: var(--color-text-1);
        font-weight: 600;
      }
    }
    &.actived {
      .land-nav-title::before {
        color: var(--color-text-1);
        font-weight: 600;
      }
      &::after {
        opacity: 1;
        transition: opacity var(--transition-15) linear;
      }
    }
    &.background {
      &.actived {
        background-color: var(--color-bg-1);
      }
    }
    &.line {
      &:hover {
        background-color: unset;
      }
      &.actived {
        .land-nav-title::before {
          color: var(--color-primary-6);
        }
        &::after {
          background-color: var(--color-primary-6);
          width: `,`;
        }
      }
    }
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }
  }
  .land-nav-link {
    padding: var(--padding-medium);
    display: flex;
    width: 100%;
    font-size: var(--font-content-large);
    white-space: nowrap;
    transition: background-color var(--transition-15) linear;
    cursor: pointer;
    .land-nav-title {
      position: relative;
      color: transparent;
      font-weight: 600;
      &::before {
        content: attr(data-title);
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        color: var(--color-text-3);
        font-weight: 400;
        text-align: center;
        line-height: 40px;
      }
    }

    .land-nav-icon {
      width: 14px;
      height: 14px;
    }
    .land-nav-sub-title {
      font-size: var(--font-content-small);
      opacity: var(--opacity-68);
    }
    .land-nav-new {
      position: absolute;
      padding: var(--padding-small);
      top: -12px;
      right: -8px;
      font-size: var(--font-content-small);
      background-color: var(--color-link-1);
      color: var(--color-link-6);
      font-weight: 600;
      border-radius: 3px;
      box-sizing: border-box;
      transform: scale(0.65);
    }
  }
`])),function(A){return A.direction},function(A){return A.direction==="row"?"100%":""},function(A){return A.direction==="column"?"100%":"fit-content"},function(A){return A.border&&A.direction==="row"?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.border&&A.direction==="column"?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.direction==="row"?"100%":""},function(A){return A.direction==="column"?"100%":""},function(A){return A.direction==="row"?"50%":"-4px"},function(A){return A.direction==="row"?"0":"50%"},function(A){return A.direction==="row"?"translateX(50%)":"translateY(50%) rotate(90deg)"},function(A){return A.direction==="row"?"calc(100% - 32px)":"12px"});var vp;Ot.header(wp||(wp=Xt([`
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: var(--gap-20);
  width: 100%;
  height: `,`;
  border-bottom: `,`;
  background: `,`;
  backdrop-filter: `,`;
  box-sizing: border-box;
  z-index: 1;
  &.fixed {
    position: absolute;
    top: 0;
    left: 0;
  }
  .land-header-logo {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
    height: 100%;
  }
  .land-header-user {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
  }
`],[`
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: var(--gap-20);
  width: 100%;
  height: `,`;
  border-bottom: `,`;
  background: `,`;
  backdrop-filter: `,`;
  box-sizing: border-box;
  z-index: 1;
  &.fixed {
    position: absolute;
    top: 0;
    left: 0;
  }
  .land-header-logo {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
    height: 100%;
  }
  .land-header-user {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
  }
`])),function(A){return A.height},function(A){return A.borderBottom?"1px solid var(--color-border-2)":""},function(A){return A.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"},function(A){return A.filter?"var(--blur-small)":""});Ot.div(xp||(xp=Xt([`
  display: flex;
  flex: 1;
  justify-content: `,`;
  height: 100%;
`],[`
  display: flex;
  flex: 1;
  justify-content: `,`;
  height: 100%;
`])),function(A){return A.align});var wp,xp;Ot.aside(Cp||(Cp=Xt([`
  padding: 24px;
  position: `,`;
  width: `,`;
  background: var(--color-bg-white);
  border-left: `,`;
  border-right: `,`;
`],[`
  padding: 24px;
  position: `,`;
  width: `,`;
  background: var(--color-bg-white);
  border-left: `,`;
  border-right: `,`;
`])),function(A){return A.fixed?"fixed":""},function(A){return A.collapsed?"0px":A.width},function(A){return A.placement==="right"?"var(--border-1) solid var(--color-border-2)":""},function(A){return A.placement==="left"?"var(--border-1) solid var(--color-border-2)":""});var Cp;Ot.main(_p||(_p=Xt([`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`],[`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`])),function(A){return"calc(100vh - ".concat(A.minHeight,"px)")});var _p;Ot.footer(Ep||(Ep=Xt([`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`],[`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`])));var Ep;Ot.div(yp||(yp=Xt([`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`],[`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`])));var yp;Ot.table(Sp||(Sp=Xt([`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: var(--font-content-medium);
    overflow: hidden;
    thead {
        background-color: #f9f9f9;
        td {
            text-align: center;
        }
    }
    tbody tr td{
        border-top: 1px solid #eaeaea;
    }
    thead tr th:not(:last-child),
    tbody tr td:not(:last-child) {
        border-right: 1px solid #eaeaea;
    }
    td,th {
        padding: var(--padding-medium);
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`],[`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: var(--font-content-medium);
    overflow: hidden;
    thead {
        background-color: #f9f9f9;
        td {
            text-align: center;
        }
    }
    tbody tr td{
        border-top: 1px solid #eaeaea;
    }
    thead tr th:not(:last-child),
    tbody tr td:not(:last-child) {
        border-right: 1px solid #eaeaea;
    }
    td,th {
        padding: var(--padding-medium);
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`])));var Sp,$I=function(A){var e=A.title,t=A.type,n=t===void 0?"h1":t,r=A.prefix,i=A.sub,s=A.style,a=A.className,o=a===void 0?"":a,l=A.onClick;return WT(JI,Xi({className:"land-title ".concat(o),style:s,onClick:function(){return l==null?void 0:l()}},{children:[r&&kn("span",Xi({className:"land-title-prefix"},{children:r})),n==="h1"&&kn("h1",{children:e}),n==="h2"&&kn("h2",{children:e}),n==="h3"&&kn("h3",{children:e}),n==="p"&&kn("p",{children:e}),i&&typeof i=="string"?kn("div",Xi({className:"land-title-sub"},{children:i})):kn(KT,{children:i})]}))},JI=Ot.div(bp||(bp=Xt([`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  .land-title-sub{
    position: absolute;
    top: -30%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  .land-title-sub{
    position: absolute;
    top: -30%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
`]))),bp;const qI=({})=>{const[A,e]=q.useState(1),[t,n]=q.useState(),r=i=>{console.log(i),n(i.target)};return M.jsxs(Ga,{children:[M.jsx(jg,{logo:M.jsx("p",{children:"📖📖"}),name:M.jsx($I,{title:"PPTs",type:"h2"}),align:"end",menuProps:{data:[{key:1,title:"PPTEditor",clickType:Zi.SELF}],actived:A,handleChangeTab:(i,s)=>s===Zi.SELF&&e(i)}}),M.jsx(Ga,{children:M.jsx(Yg,{children:M.jsxs("div",{children:[M.jsx("input",{type:"file",accept:".pdf, .md, .doc, .docx",onChange:i=>r(i)}),M.jsx("img",{src:t,alt:""})]})})}),M.jsx($g,{children:M.jsx(rr,{bothCenter:!0,className:"width-100 color-gray-4",children:"@suminhan"})})]})};function Up(A){return A!==null&&typeof A=="object"&&"constructor"in A&&A.constructor===Object}function Ru(A,e){A===void 0&&(A={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof A[t]>"u"?A[t]=e[t]:Up(e[t])&&Up(A[t])&&Object.keys(e[t]).length>0&&Ru(A[t],e[t])})}const b0={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function mi(){const A=typeof document<"u"?document:{};return Ru(A,b0),A}const ZI={document:b0,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(A){return typeof setTimeout>"u"?(A(),null):setTimeout(A,0)},cancelAnimationFrame(A){typeof setTimeout>"u"||clearTimeout(A)}};function uA(){const A=typeof window<"u"?window:{};return Ru(A,ZI),A}function eQ(A){return A===void 0&&(A=""),A.trim().split(" ").filter(e=>!!e.trim())}function tQ(A){const e=A;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function ru(A,e){return e===void 0&&(e=0),setTimeout(A,e)}function no(){return Date.now()}function AQ(A){const e=uA();let t;return e.getComputedStyle&&(t=e.getComputedStyle(A,null)),!t&&A.currentStyle&&(t=A.currentStyle),t||(t=A.style),t}function nQ(A,e){e===void 0&&(e="x");const t=uA();let n,r,i;const s=AQ(A);return t.WebKitCSSMatrix?(r=s.transform||s.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),i=new t.WebKitCSSMatrix(r==="none"?"":r)):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=i.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=i.m41:n.length===16?r=parseFloat(n[12]):r=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?r=i.m42:n.length===16?r=parseFloat(n[13]):r=parseFloat(n[5])),r||0}function fa(A){return typeof A=="object"&&A!==null&&A.constructor&&Object.prototype.toString.call(A).slice(8,-1)==="Object"}function rQ(A){return typeof window<"u"&&typeof window.HTMLElement<"u"?A instanceof HTMLElement:A&&(A.nodeType===1||A.nodeType===11)}function oA(){const A=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const n=t<0||arguments.length<=t?void 0:arguments[t];if(n!=null&&!rQ(n)){const r=Object.keys(Object(n)).filter(i=>e.indexOf(i)<0);for(let i=0,s=r.length;i<s;i+=1){const a=r[i],o=Object.getOwnPropertyDescriptor(n,a);o!==void 0&&o.enumerable&&(fa(A[a])&&fa(n[a])?n[a].__swiper__?A[a]=n[a]:oA(A[a],n[a]):!fa(A[a])&&fa(n[a])?(A[a]={},n[a].__swiper__?A[a]=n[a]:oA(A[a],n[a])):A[a]=n[a])}}}return A}function ha(A,e,t){A.style.setProperty(e,t)}function U0(A){let{swiper:e,targetPosition:t,side:n}=A;const r=uA(),i=-e.translate;let s=null,a;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const l=t>i?"next":"prev",c=(d,h)=>l==="next"&&d>=h||l==="prev"&&d<=h,u=()=>{a=new Date().getTime(),s===null&&(s=a);const d=Math.max(Math.min((a-s)/o,1),0),h=.5-Math.cos(d*Math.PI)/2;let g=i+h*(t-i);if(c(g,t)&&(g=t),e.wrapperEl.scrollTo({[n]:g}),c(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function on(A,e){return e===void 0&&(e=""),[...A.children].filter(t=>t.matches(e))}function ro(A){try{console.warn(A);return}catch{}}function iu(A,e){e===void 0&&(e=[]);const t=document.createElement(A);return t.classList.add(...Array.isArray(e)?e:eQ(e)),t}function iQ(A,e){const t=[];for(;A.previousElementSibling;){const n=A.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),A=n}return t}function sQ(A,e){const t=[];for(;A.nextElementSibling;){const n=A.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),A=n}return t}function Un(A,e){return uA().getComputedStyle(A,null).getPropertyValue(e)}function Mp(A){let e=A,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function aQ(A,e){const t=[];let n=A.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function Fp(A,e,t){const n=uA();return t?A[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(A,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(A,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):A.offsetWidth}let Zl;function oQ(){const A=uA(),e=mi();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in A||A.DocumentTouch&&e instanceof A.DocumentTouch)}}function M0(){return Zl||(Zl=oQ()),Zl}let ec;function lQ(A){let{userAgent:e}=A===void 0?{}:A;const t=M0(),n=uA(),r=n.navigator.platform,i=e||n.navigator.userAgent,s={ios:!1,android:!1},a=n.screen.width,o=n.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=r==="Win32";let g=r==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&g&&t.touch&&m.indexOf(`${a}x${o}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),g=!1),l&&!h&&(s.os="android",s.android=!0),(c||d||u)&&(s.os="ios",s.ios=!0),s}function F0(A){return A===void 0&&(A={}),ec||(ec=lQ(A)),ec}let tc;function cQ(){const A=uA(),e=F0();let t=!1;function n(){const a=A.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(n()){const a=String(A.navigator.userAgent);if(a.includes("Version/")){const[o,l]=a.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));t=o<16||o===16&&l<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(A.navigator.userAgent),i=n(),s=i||r&&e.ios;return{isSafari:t||i,needPerspectiveFix:t,need3dFix:s,isWebView:r}}function uQ(){return tc||(tc=cQ()),tc}function dQ(A){let{swiper:e,on:t,emit:n}=A;const r=uA();let i=null,s=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},o=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(u=>{s=r.requestAnimationFrame(()=>{const{width:d,height:h}=e;let g=d,m=h;u.forEach(p=>{let{contentBoxSize:f,contentRect:v,target:B}=p;B&&B!==e.el||(g=v?v.width:(f[0]||f).inlineSize,m=v?v.height:(f[0]||f).blockSize)}),(g!==d||m!==h)&&a()})}),i.observe(e.el))},l=()=>{s&&r.cancelAnimationFrame(s),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){o();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{l(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function fQ(A){let{swiper:e,extendParams:t,on:n,emit:r}=A;const i=[],s=uA(),a=function(c,u){u===void 0&&(u={});const d=s.MutationObserver||s.WebkitMutationObserver,h=new d(g=>{if(e.__preventObserver__)return;if(g.length===1){r("observerUpdate",g[0]);return}const m=function(){r("observerUpdate",g[0])};s.requestAnimationFrame?s.requestAnimationFrame(m):s.setTimeout(m,0)});h.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(h)},o=()=>{if(e.params.observer){if(e.params.observeParents){const c=aQ(e.hostEl);for(let u=0;u<c.length;u+=1)a(c[u])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},l=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",o),n("destroy",l)}var hQ={on(A,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return A.split(" ").forEach(i=>{n.eventsListeners[i]||(n.eventsListeners[i]=[]),n.eventsListeners[i][r](e)}),n},once(A,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function r(){n.off(A,r),r.__emitterProxy&&delete r.__emitterProxy;for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];e.apply(n,s)}return r.__emitterProxy=e,n.on(A,r,t)},onAny(A,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof A!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(A)<0&&t.eventsAnyListeners[n](A),t},offAny(A){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(A);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(A,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||A.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((r,i)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[n].splice(i,1)})}),t},emit(){const A=this;if(!A.eventsListeners||A.destroyed||!A.eventsListeners)return A;let e,t,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return typeof i[0]=="string"||Array.isArray(i[0])?(e=i[0],t=i.slice(1,i.length),n=A):(e=i[0].events,t=i[0].data,n=i[0].context||A),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(o=>{A.eventsAnyListeners&&A.eventsAnyListeners.length&&A.eventsAnyListeners.forEach(l=>{l.apply(n,[o,...t])}),A.eventsListeners&&A.eventsListeners[o]&&A.eventsListeners[o].forEach(l=>{l.apply(n,t)})}),A}};function pQ(){const A=this;let e,t;const n=A.el;typeof A.params.width<"u"&&A.params.width!==null?e=A.params.width:e=n.clientWidth,typeof A.params.height<"u"&&A.params.height!==null?t=A.params.height:t=n.clientHeight,!(e===0&&A.isHorizontal()||t===0&&A.isVertical())&&(e=e-parseInt(Un(n,"padding-left")||0,10)-parseInt(Un(n,"padding-right")||0,10),t=t-parseInt(Un(n,"padding-top")||0,10)-parseInt(Un(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(A,{width:e,height:t,size:A.isHorizontal()?e:t}))}function gQ(){const A=this;function e(y,I){return parseFloat(y.getPropertyValue(A.getDirectionLabel(I))||0)}const t=A.params,{wrapperEl:n,slidesEl:r,size:i,rtlTranslate:s,wrongRTL:a}=A,o=A.virtual&&t.virtual.enabled,l=o?A.virtual.slides.length:A.slides.length,c=on(r,`.${A.params.slideClass}, swiper-slide`),u=o?A.virtual.slides.length:c.length;let d=[];const h=[],g=[];let m=t.slidesOffsetBefore;typeof m=="function"&&(m=t.slidesOffsetBefore.call(A));let p=t.slidesOffsetAfter;typeof p=="function"&&(p=t.slidesOffsetAfter.call(A));const f=A.snapGrid.length,v=A.slidesGrid.length;let B=t.spaceBetween,C=-m,x=0,_=0;if(typeof i>"u")return;typeof B=="string"&&B.indexOf("%")>=0?B=parseFloat(B.replace("%",""))/100*i:typeof B=="string"&&(B=parseFloat(B)),A.virtualSize=-B,c.forEach(y=>{s?y.style.marginLeft="":y.style.marginRight="",y.style.marginBottom="",y.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(ha(n,"--swiper-centered-offset-before",""),ha(n,"--swiper-centered-offset-after",""));const E=t.grid&&t.grid.rows>1&&A.grid;E?A.grid.initSlides(c):A.grid&&A.grid.unsetSlides();let T;const w=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(y=>typeof t.breakpoints[y].slidesPerView<"u").length>0;for(let y=0;y<u;y+=1){T=0;let I;if(c[y]&&(I=c[y]),E&&A.grid.updateSlide(y,I,c),!(c[y]&&Un(I,"display")==="none")){if(t.slidesPerView==="auto"){w&&(c[y].style[A.getDirectionLabel("width")]="");const L=getComputedStyle(I),U=I.style.transform,Q=I.style.webkitTransform;if(U&&(I.style.transform="none"),Q&&(I.style.webkitTransform="none"),t.roundLengths)T=A.isHorizontal()?Fp(I,"width",!0):Fp(I,"height",!0);else{const D=e(L,"width"),z=e(L,"padding-left"),N=e(L,"padding-right"),W=e(L,"margin-left"),V=e(L,"margin-right"),X=L.getPropertyValue("box-sizing");if(X&&X==="border-box")T=D+W+V;else{const{clientWidth:re,offsetWidth:G}=I;T=D+z+N+W+V+(G-re)}}U&&(I.style.transform=U),Q&&(I.style.webkitTransform=Q),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*B)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),c[y]&&(c[y].style[A.getDirectionLabel("width")]=`${T}px`);c[y]&&(c[y].swiperSlideSize=T),g.push(T),t.centeredSlides?(C=C+T/2+x/2+B,x===0&&y!==0&&(C=C-i/2-B),y===0&&(C=C-i/2-B),Math.abs(C)<1/1e3&&(C=0),t.roundLengths&&(C=Math.floor(C)),_%t.slidesPerGroup===0&&d.push(C),h.push(C)):(t.roundLengths&&(C=Math.floor(C)),(_-Math.min(A.params.slidesPerGroupSkip,_))%A.params.slidesPerGroup===0&&d.push(C),h.push(C),C=C+T+B),A.virtualSize+=T+B,x=T,_+=1}}if(A.virtualSize=Math.max(A.virtualSize,i)+p,s&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${A.virtualSize+B}px`),t.setWrapperSize&&(n.style[A.getDirectionLabel("width")]=`${A.virtualSize+B}px`),E&&A.grid.updateWrapperSize(T,d),!t.centeredSlides){const y=[];for(let I=0;I<d.length;I+=1){let L=d[I];t.roundLengths&&(L=Math.floor(L)),d[I]<=A.virtualSize-i&&y.push(L)}d=y,Math.floor(A.virtualSize-i)-Math.floor(d[d.length-1])>1&&d.push(A.virtualSize-i)}if(o&&t.loop){const y=g[0]+B;if(t.slidesPerGroup>1){const I=Math.ceil((A.virtual.slidesBefore+A.virtual.slidesAfter)/t.slidesPerGroup),L=y*t.slidesPerGroup;for(let U=0;U<I;U+=1)d.push(d[d.length-1]+L)}for(let I=0;I<A.virtual.slidesBefore+A.virtual.slidesAfter;I+=1)t.slidesPerGroup===1&&d.push(d[d.length-1]+y),h.push(h[h.length-1]+y),A.virtualSize+=y}if(d.length===0&&(d=[0]),B!==0){const y=A.isHorizontal()&&s?"marginLeft":A.getDirectionLabel("marginRight");c.filter((I,L)=>!t.cssMode||t.loop?!0:L!==c.length-1).forEach(I=>{I.style[y]=`${B}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let y=0;g.forEach(L=>{y+=L+(B||0)}),y-=B;const I=y-i;d=d.map(L=>L<=0?-m:L>I?I+p:L)}if(t.centerInsufficientSlides){let y=0;if(g.forEach(I=>{y+=I+(B||0)}),y-=B,y<i){const I=(i-y)/2;d.forEach((L,U)=>{d[U]=L-I}),h.forEach((L,U)=>{h[U]=L+I})}}if(Object.assign(A,{slides:c,snapGrid:d,slidesGrid:h,slidesSizesGrid:g}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){ha(n,"--swiper-centered-offset-before",`${-d[0]}px`),ha(n,"--swiper-centered-offset-after",`${A.size/2-g[g.length-1]/2}px`);const y=-A.snapGrid[0],I=-A.slidesGrid[0];A.snapGrid=A.snapGrid.map(L=>L+y),A.slidesGrid=A.slidesGrid.map(L=>L+I)}if(u!==l&&A.emit("slidesLengthChange"),d.length!==f&&(A.params.watchOverflow&&A.checkOverflow(),A.emit("snapGridLengthChange")),h.length!==v&&A.emit("slidesGridLengthChange"),t.watchSlidesProgress&&A.updateSlidesOffset(),A.emit("slidesUpdated"),!o&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const y=`${t.containerModifierClass}backface-hidden`,I=A.el.classList.contains(y);u<=t.maxBackfaceHiddenSlides?I||A.el.classList.add(y):I&&A.el.classList.remove(y)}}function mQ(A){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let r=0,i;typeof A=="number"?e.setTransition(A):A===!0&&e.setTransition(e.params.speed);const s=a=>n?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(i=0;i<Math.ceil(e.params.slidesPerView);i+=1){const a=e.activeIndex+i;if(a>e.slides.length&&!n)break;t.push(s(a))}else t.push(s(e.activeIndex));for(i=0;i<t.length;i+=1)if(typeof t[i]<"u"){const a=t[i].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function BQ(){const A=this,e=A.slides,t=A.isElement?A.isHorizontal()?A.wrapperEl.offsetLeft:A.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(A.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-A.cssOverflowAdjustment()}function vQ(A){A===void 0&&(A=this&&this.translate||0);const e=this,t=e.params,{slides:n,rtlTranslate:r,snapGrid:i}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let s=-A;r&&(s=A),n.forEach(o=>{o.classList.remove(t.slideVisibleClass,t.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let o=0;o<n.length;o+=1){const l=n[o];let c=l.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(c-=n[0].swiperSlideOffset);const u=(s+(t.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+a),d=(s-i[0]+(t.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+a),h=-(s-c),g=h+e.slidesSizesGrid[o],m=h>=0&&h<=e.size-e.slidesSizesGrid[o];(h>=0&&h<e.size-1||g>1&&g<=e.size||h<=0&&g>=e.size)&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(o),n[o].classList.add(t.slideVisibleClass)),m&&n[o].classList.add(t.slideFullyVisibleClass),l.progress=r?-u:u,l.originalProgress=r?-d:d}}function wQ(A){const e=this;if(typeof A>"u"){const c=e.rtlTranslate?-1:1;A=e&&e.translate&&e.translate*c||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:i,isEnd:s,progressLoop:a}=e;const o=i,l=s;if(n===0)r=0,i=!0,s=!0;else{r=(A-e.minTranslate())/n;const c=Math.abs(A-e.minTranslate())<1,u=Math.abs(A-e.maxTranslate())<1;i=c||r<=0,s=u||r>=1,c&&(r=0),u&&(r=1)}if(t.loop){const c=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),d=e.slidesGrid[c],h=e.slidesGrid[u],g=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(A);m>=d?a=(m-d)/g:a=(m+g-h)/g,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:i,isEnd:s}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(A),i&&!o&&e.emit("reachBeginning toEdge"),s&&!l&&e.emit("reachEnd toEdge"),(o&&!i||l&&!s)&&e.emit("fromEdge"),e.emit("progress",r)}const Ac=(A,e,t)=>{e&&!A.classList.contains(t)?A.classList.add(t):!e&&A.classList.contains(t)&&A.classList.remove(t)};function xQ(){const A=this,{slides:e,params:t,slidesEl:n,activeIndex:r}=A,i=A.virtual&&t.virtual.enabled,s=A.grid&&t.grid&&t.grid.rows>1,a=u=>on(n,`.${t.slideClass}${u}, swiper-slide${u}`)[0];let o,l,c;if(i)if(t.loop){let u=r-A.virtual.slidesBefore;u<0&&(u=A.virtual.slides.length+u),u>=A.virtual.slides.length&&(u-=A.virtual.slides.length),o=a(`[data-swiper-slide-index="${u}"]`)}else o=a(`[data-swiper-slide-index="${r}"]`);else s?(o=e.filter(u=>u.column===r)[0],c=e.filter(u=>u.column===r+1)[0],l=e.filter(u=>u.column===r-1)[0]):o=e[r];o&&(s||(c=sQ(o,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c&&(c=e[0]),l=iQ(o,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!l===0&&(l=e[e.length-1]))),e.forEach(u=>{Ac(u,u===o,t.slideActiveClass),Ac(u,u===c,t.slideNextClass),Ac(u,u===l,t.slidePrevClass)}),A.emitSlidesClasses()}const Qa=(A,e)=>{if(!A||A.destroyed||!A.params)return;const t=()=>A.isElement?"swiper-slide":`.${A.params.slideClass}`,n=e.closest(t());if(n){let r=n.querySelector(`.${A.params.lazyPreloaderClass}`);!r&&A.isElement&&(n.shadowRoot?r=n.shadowRoot.querySelector(`.${A.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(r=n.shadowRoot.querySelector(`.${A.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},nc=(A,e)=>{if(!A.slides[e])return;const t=A.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},su=A=>{if(!A||A.destroyed||!A.params)return;let e=A.params.lazyPreloadPrevNext;const t=A.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=A.params.slidesPerView==="auto"?A.slidesPerViewDynamic():Math.ceil(A.params.slidesPerView),r=A.activeIndex;if(A.params.grid&&A.params.grid.rows>1){const s=r,a=[s-e];a.push(...Array.from({length:e}).map((o,l)=>s+n+l)),A.slides.forEach((o,l)=>{a.includes(o.column)&&nc(A,l)});return}const i=r+n-1;if(A.params.rewind||A.params.loop)for(let s=r-e;s<=i+e;s+=1){const a=(s%t+t)%t;(a<r||a>i)&&nc(A,a)}else for(let s=Math.max(r-e,0);s<=Math.min(i+e,t-1);s+=1)s!==r&&(s>i||s<r)&&nc(A,s)};function CQ(A){const{slidesGrid:e,params:t}=A,n=A.rtlTranslate?A.translate:-A.translate;let r;for(let i=0;i<e.length;i+=1)typeof e[i+1]<"u"?n>=e[i]&&n<e[i+1]-(e[i+1]-e[i])/2?r=i:n>=e[i]&&n<e[i+1]&&(r=i+1):n>=e[i]&&(r=i);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function _Q(A){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:r,activeIndex:i,realIndex:s,snapIndex:a}=e;let o=A,l;const c=h=>{let g=h-e.virtual.slidesBefore;return g<0&&(g=e.virtual.slides.length+g),g>=e.virtual.slides.length&&(g-=e.virtual.slides.length),g};if(typeof o>"u"&&(o=CQ(e)),n.indexOf(t)>=0)l=n.indexOf(t);else{const h=Math.min(r.slidesPerGroupSkip,o);l=h+Math.floor((o-h)/r.slidesPerGroup)}if(l>=n.length&&(l=n.length-1),o===i&&!e.params.loop){l!==a&&(e.snapIndex=l,e.emit("snapIndexChange"));return}if(o===i&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=c(o);return}const u=e.grid&&r.grid&&r.grid.rows>1;let d;if(e.virtual&&r.virtual.enabled&&r.loop)d=c(o);else if(u){const h=e.slides.filter(m=>m.column===o)[0];let g=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(e.slides.indexOf(h),0)),d=Math.floor(g/r.grid.rows)}else if(e.slides[o]){const h=e.slides[o].getAttribute("data-swiper-slide-index");h?d=parseInt(h,10):d=o}else d=o;Object.assign(e,{previousSnapIndex:a,snapIndex:l,previousRealIndex:s,realIndex:d,previousIndex:i,activeIndex:o}),e.initialized&&su(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(s!==d&&e.emit("realIndexChange"),e.emit("slideChange"))}function EQ(A,e){const t=this,n=t.params;let r=A.closest(`.${n.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(A)&&[...e.slice(e.indexOf(A)+1,e.length)].forEach(a=>{!r&&a.matches&&a.matches(`.${n.slideClass}, swiper-slide`)&&(r=a)});let i=!1,s;if(r){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===r){i=!0,s=a;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=s;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var yQ={updateSize:pQ,updateSlides:gQ,updateAutoHeight:mQ,updateSlidesOffset:BQ,updateSlidesProgress:vQ,updateProgress:wQ,updateSlidesClasses:xQ,updateActiveIndex:_Q,updateClickedSlide:EQ};function SQ(A){A===void 0&&(A=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:n,translate:r,wrapperEl:i}=e;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let s=nQ(i,A);return s+=e.cssOverflowAdjustment(),n&&(s=-s),s||0}function bQ(A,e){const t=this,{rtlTranslate:n,params:r,wrapperEl:i,progress:s}=t;let a=0,o=0;const l=0;t.isHorizontal()?a=n?-A:A:o=A,r.roundLengths&&(a=Math.floor(a),o=Math.floor(o)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:o,r.cssMode?i[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-o:r.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():o-=t.cssOverflowAdjustment(),i.style.transform=`translate3d(${a}px, ${o}px, ${l}px)`);let c;const u=t.maxTranslate()-t.minTranslate();u===0?c=0:c=(A-t.minTranslate())/u,c!==s&&t.updateProgress(A),t.emit("setTranslate",t.translate,e)}function UQ(){return-this.snapGrid[0]}function MQ(){return-this.snapGrid[this.snapGrid.length-1]}function FQ(A,e,t,n,r){A===void 0&&(A=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=!0);const i=this,{params:s,wrapperEl:a}=i;if(i.animating&&s.preventInteractionOnTransition)return!1;const o=i.minTranslate(),l=i.maxTranslate();let c;if(n&&A>o?c=o:n&&A<l?c=l:c=A,i.updateProgress(c),s.cssMode){const u=i.isHorizontal();if(e===0)a[u?"scrollLeft":"scrollTop"]=-c;else{if(!i.support.smoothScroll)return U0({swiper:i,targetPosition:-c,side:u?"left":"top"}),!0;a.scrollTo({[u?"left":"top"]:-c,behavior:"smooth"})}return!0}return e===0?(i.setTransition(0),i.setTranslate(c),t&&(i.emit("beforeTransitionStart",e,r),i.emit("transitionEnd"))):(i.setTransition(e),i.setTranslate(c),t&&(i.emit("beforeTransitionStart",e,r),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(d){!i||i.destroyed||d.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,t&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var TQ={getTranslate:SQ,setTranslate:bQ,minTranslate:UQ,maxTranslate:MQ,translateTo:FQ};function IQ(A,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${A}ms`,t.wrapperEl.style.transitionDelay=A===0?"0ms":""),t.emit("setTransition",A,e)}function T0(A){let{swiper:e,runCallbacks:t,direction:n,step:r}=A;const{activeIndex:i,previousIndex:s}=e;let a=n;if(a||(i>s?a="next":i<s?a="prev":a="reset"),e.emit(`transition${r}`),t&&i!==s){if(a==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function QQ(A,e){A===void 0&&(A=!0);const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),T0({swiper:t,runCallbacks:A,direction:e,step:"Start"}))}function LQ(A,e){A===void 0&&(A=!0);const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),T0({swiper:t,runCallbacks:A,direction:e,step:"End"}))}var RQ={setTransition:IQ,transitionStart:QQ,transitionEnd:LQ};function DQ(A,e,t,n,r){A===void 0&&(A=0),t===void 0&&(t=!0),typeof A=="string"&&(A=parseInt(A,10));const i=this;let s=A;s<0&&(s=0);const{params:a,snapGrid:o,slidesGrid:l,previousIndex:c,activeIndex:u,rtlTranslate:d,wrapperEl:h,enabled:g}=i;if(!g&&!n&&!r||i.destroyed||i.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=i.params.speed);const m=Math.min(i.params.slidesPerGroupSkip,s);let p=m+Math.floor((s-m)/i.params.slidesPerGroup);p>=o.length&&(p=o.length-1);const f=-o[p];if(a.normalizeSlideIndex)for(let B=0;B<l.length;B+=1){const C=-Math.floor(f*100),x=Math.floor(l[B]*100),_=Math.floor(l[B+1]*100);typeof l[B+1]<"u"?C>=x&&C<_-(_-x)/2?s=B:C>=x&&C<_&&(s=B+1):C>=x&&(s=B)}if(i.initialized&&s!==u&&(!i.allowSlideNext&&(d?f>i.translate&&f>i.minTranslate():f<i.translate&&f<i.minTranslate())||!i.allowSlidePrev&&f>i.translate&&f>i.maxTranslate()&&(u||0)!==s))return!1;s!==(c||0)&&t&&i.emit("beforeSlideChangeStart"),i.updateProgress(f);let v;if(s>u?v="next":s<u?v="prev":v="reset",d&&-f===i.translate||!d&&f===i.translate)return i.updateActiveIndex(s),a.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),a.effect!=="slide"&&i.setTranslate(f),v!=="reset"&&(i.transitionStart(t,v),i.transitionEnd(t,v)),!1;if(a.cssMode){const B=i.isHorizontal(),C=d?f:-f;if(e===0){const x=i.virtual&&i.params.virtual.enabled;x&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),x&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[B?"scrollLeft":"scrollTop"]=C})):h[B?"scrollLeft":"scrollTop"]=C,x&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1})}else{if(!i.support.smoothScroll)return U0({swiper:i,targetPosition:C,side:B?"left":"top"}),!0;h.scrollTo({[B?"left":"top"]:C,behavior:"smooth"})}return!0}return i.setTransition(e),i.setTranslate(f),i.updateActiveIndex(s),i.updateSlidesClasses(),i.emit("beforeTransitionStart",e,n),i.transitionStart(t,v),e===0?i.transitionEnd(t,v):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(C){!i||i.destroyed||C.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(t,v))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function HQ(A,e,t,n){A===void 0&&(A=0),t===void 0&&(t=!0),typeof A=="string"&&(A=parseInt(A,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const i=r.grid&&r.params.grid&&r.params.grid.rows>1;let s=A;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)s=s+r.virtual.slidesBefore;else{let a;if(i){const d=s*r.params.grid.rows;a=r.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===d)[0].column}else a=r.getSlideIndexByData(s);const o=i?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:l}=r.params;let c=r.params.slidesPerView;c==="auto"?c=r.slidesPerViewDynamic():(c=Math.ceil(parseFloat(r.params.slidesPerView,10)),l&&c%2===0&&(c=c+1));let u=o-a<c;if(l&&(u=u||a<Math.ceil(c/2)),n&&l&&r.params.slidesPerView!=="auto"&&!i&&(u=!1),u){const d=l?a<r.activeIndex?"prev":"next":a-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:d,slideTo:!0,activeSlideIndex:d==="next"?a+1:a-o+1,slideRealIndex:d==="next"?r.realIndex:void 0})}if(i){const d=s*r.params.grid.rows;s=r.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===d)[0].column}else s=r.getSlideIndexByData(s)}return requestAnimationFrame(()=>{r.slideTo(s,e,t,n)}),r}function PQ(A,e,t){e===void 0&&(e=!0);const n=this,{enabled:r,params:i,animating:s}=n;if(!r||n.destroyed)return n;typeof A>"u"&&(A=n.params.speed);let a=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(a=Math.max(n.slidesPerViewDynamic("current",!0),1));const o=n.activeIndex<i.slidesPerGroupSkip?1:a,l=n.virtual&&i.virtual.enabled;if(i.loop){if(s&&!l&&i.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+o,A,e,t)}),!0}return i.rewind&&n.isEnd?n.slideTo(0,A,e,t):n.slideTo(n.activeIndex+o,A,e,t)}function NQ(A,e,t){e===void 0&&(e=!0);const n=this,{params:r,snapGrid:i,slidesGrid:s,rtlTranslate:a,enabled:o,animating:l}=n;if(!o||n.destroyed)return n;typeof A>"u"&&(A=n.params.speed);const c=n.virtual&&r.virtual.enabled;if(r.loop){if(l&&!c&&r.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const u=a?n.translate:-n.translate;function d(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const h=d(u),g=i.map(f=>d(f));let m=i[g.indexOf(h)-1];if(typeof m>"u"&&r.cssMode){let f;i.forEach((v,B)=>{h>=v&&(f=B)}),typeof f<"u"&&(m=i[f>0?f-1:f])}let p=0;if(typeof m<"u"&&(p=s.indexOf(m),p<0&&(p=n.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(p=p-n.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),r.rewind&&n.isBeginning){const f=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(f,A,e,t)}else if(r.loop&&n.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(p,A,e,t)}),!0;return n.slideTo(p,A,e,t)}function OQ(A,e,t){e===void 0&&(e=!0);const n=this;if(!n.destroyed)return typeof A>"u"&&(A=n.params.speed),n.slideTo(n.activeIndex,A,e,t)}function GQ(A,e,t,n){e===void 0&&(e=!0),n===void 0&&(n=.5);const r=this;if(r.destroyed)return;typeof A>"u"&&(A=r.params.speed);let i=r.activeIndex;const s=Math.min(r.params.slidesPerGroupSkip,i),a=s+Math.floor((i-s)/r.params.slidesPerGroup),o=r.rtlTranslate?r.translate:-r.translate;if(o>=r.snapGrid[a]){const l=r.snapGrid[a],c=r.snapGrid[a+1];o-l>(c-l)*n&&(i+=r.params.slidesPerGroup)}else{const l=r.snapGrid[a-1],c=r.snapGrid[a];o-l<=(c-l)*n&&(i-=r.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,r.slidesGrid.length-1),r.slideTo(i,A,e,t)}function VQ(){const A=this;if(A.destroyed)return;const{params:e,slidesEl:t}=A,n=e.slidesPerView==="auto"?A.slidesPerViewDynamic():e.slidesPerView;let r=A.clickedIndex,i;const s=A.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(A.animating)return;i=parseInt(A.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<A.loopedSlides-n/2||r>A.slides.length-A.loopedSlides+n/2?(A.loopFix(),r=A.getSlideIndex(on(t,`${s}[data-swiper-slide-index="${i}"]`)[0]),ru(()=>{A.slideTo(r)})):A.slideTo(r):r>A.slides.length-n?(A.loopFix(),r=A.getSlideIndex(on(t,`${s}[data-swiper-slide-index="${i}"]`)[0]),ru(()=>{A.slideTo(r)})):A.slideTo(r)}else A.slideTo(r)}var kQ={slideTo:DQ,slideToLoop:HQ,slideNext:PQ,slidePrev:NQ,slideReset:OQ,slideToClosest:GQ,slideToClickedSlide:VQ};function zQ(A){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{on(n,`.${t.slideClass}, swiper-slide`).forEach((u,d)=>{u.setAttribute("data-swiper-slide-index",d)})},i=e.grid&&t.grid&&t.grid.rows>1,s=t.slidesPerGroup*(i?t.grid.rows:1),a=e.slides.length%s!==0,o=i&&e.slides.length%t.grid.rows!==0,l=c=>{for(let u=0;u<c;u+=1){const d=e.isElement?iu("swiper-slide",[t.slideBlankClass]):iu("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(d)}};if(a){if(t.loopAddBlankSlides){const c=s-e.slides.length%s;l(c),e.recalcSlides(),e.updateSlides()}else ro("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(o){if(t.loopAddBlankSlides){const c=t.grid.rows-e.slides.length%t.grid.rows;l(c),e.recalcSlides(),e.updateSlides()}else ro("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:A,direction:t.centeredSlides?void 0:"next"})}function KQ(A){let{slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,byController:s,byMousewheel:a}=A===void 0?{}:A;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:d,params:h}=o,{centeredSlides:g}=h;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&h.virtual.enabled){t&&(!h.centeredSlides&&o.snapIndex===0?o.slideTo(o.virtual.slides.length,0,!1,!0):h.centeredSlides&&o.snapIndex<h.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0)),o.allowSlidePrev=c,o.allowSlideNext=u,o.emit("loopFix");return}let m=h.slidesPerView;m==="auto"?m=o.slidesPerViewDynamic():(m=Math.ceil(parseFloat(h.slidesPerView,10)),g&&m%2===0&&(m=m+1));const p=h.slidesPerGroupAuto?m:h.slidesPerGroup;let f=p;f%p!==0&&(f+=p-f%p),f+=h.loopAdditionalSlides,o.loopedSlides=f;const v=o.grid&&h.grid&&h.grid.rows>1;l.length<m+f?ro("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):v&&h.grid.fill==="row"&&ro("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const B=[],C=[];let x=o.activeIndex;typeof i>"u"?i=o.getSlideIndex(l.filter(U=>U.classList.contains(h.slideActiveClass))[0]):x=i;const _=n==="next"||!n,E=n==="prev"||!n;let T=0,w=0;const y=v?Math.ceil(l.length/h.grid.rows):l.length,L=(v?l[i].column:i)+(g&&typeof r>"u"?-m/2+.5:0);if(L<f){T=Math.max(f-L,p);for(let U=0;U<f-L;U+=1){const Q=U-Math.floor(U/y)*y;if(v){const D=y-Q-1;for(let z=l.length-1;z>=0;z-=1)l[z].column===D&&B.push(z)}else B.push(y-Q-1)}}else if(L+m>y-f){w=Math.max(L-(y-f*2),p);for(let U=0;U<w;U+=1){const Q=U-Math.floor(U/y)*y;v?l.forEach((D,z)=>{D.column===Q&&C.push(z)}):C.push(Q)}}if(o.__preventObserver__=!0,requestAnimationFrame(()=>{o.__preventObserver__=!1}),E&&B.forEach(U=>{l[U].swiperLoopMoveDOM=!0,d.prepend(l[U]),l[U].swiperLoopMoveDOM=!1}),_&&C.forEach(U=>{l[U].swiperLoopMoveDOM=!0,d.append(l[U]),l[U].swiperLoopMoveDOM=!1}),o.recalcSlides(),h.slidesPerView==="auto"?o.updateSlides():v&&(B.length>0&&E||C.length>0&&_)&&o.slides.forEach((U,Q)=>{o.grid.updateSlide(Q,U,o.slides)}),h.watchSlidesProgress&&o.updateSlidesOffset(),t){if(B.length>0&&E){if(typeof e>"u"){const U=o.slidesGrid[x],D=o.slidesGrid[x+T]-U;a?o.setTranslate(o.translate-D):(o.slideTo(x+Math.ceil(T),0,!1,!0),r&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-D,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-D))}else if(r){const U=v?B.length/h.grid.rows:B.length;o.slideTo(o.activeIndex+U,0,!1,!0),o.touchEventsData.currentTranslate=o.translate}}else if(C.length>0&&_)if(typeof e>"u"){const U=o.slidesGrid[x],D=o.slidesGrid[x-w]-U;a?o.setTranslate(o.translate-D):(o.slideTo(x-w,0,!1,!0),r&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-D,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-D))}else{const U=v?C.length/h.grid.rows:C.length;o.slideTo(o.activeIndex-U,0,!1,!0)}}if(o.allowSlidePrev=c,o.allowSlideNext=u,o.controller&&o.controller.control&&!s){const U={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach(Q=>{!Q.destroyed&&Q.params.loop&&Q.loopFix({...U,slideTo:Q.params.slidesPerView===h.slidesPerView?t:!1})}):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...U,slideTo:o.controller.control.params.slidesPerView===h.slidesPerView?t:!1})}o.emit("loopFix")}function WQ(){const A=this,{params:e,slidesEl:t}=A;if(!e.loop||A.virtual&&A.params.virtual.enabled)return;A.recalcSlides();const n=[];A.slides.forEach(r=>{const i=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;n[i]=r}),A.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),n.forEach(r=>{t.append(r)}),A.recalcSlides(),A.slideTo(A.realIndex,0)}var XQ={loopCreate:zQ,loopFix:KQ,loopDestroy:WQ};function jQ(A){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=A?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function YQ(){const A=this;A.params.watchOverflow&&A.isLocked||A.params.cssMode||(A.isElement&&(A.__preventObserver__=!0),A[A.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",A.isElement&&requestAnimationFrame(()=>{A.__preventObserver__=!1}))}var $Q={setGrabCursor:jQ,unsetGrabCursor:YQ};function JQ(A,e){e===void 0&&(e=this);function t(n){if(!n||n===mi()||n===uA())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(A);return!r&&!n.getRootNode?null:r||t(n.getRootNode().host)}return t(e)}function Tp(A,e,t){const n=uA(),{params:r}=A,i=r.edgeSwipeDetection,s=r.edgeSwipeThreshold;return i&&(t<=s||t>=n.innerWidth-s)?i==="prevent"?(e.preventDefault(),!0):!1:!0}function qQ(A){const e=this,t=mi();let n=A;n.originalEvent&&(n=n.originalEvent);const r=e.touchEventsData;if(n.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==n.pointerId)return;r.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(r.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){Tp(e,n,n.targetTouches[0].pageX);return}const{params:i,touches:s,enabled:a}=e;if(!a||!i.simulateTouch&&n.pointerType==="mouse"||e.animating&&i.preventInteractionOnTransition)return;!e.animating&&i.cssMode&&i.loop&&e.loopFix();let o=n.target;if(i.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(o)||"which"in n&&n.which===3||"button"in n&&n.button>0||r.isTouched&&r.isMoved)return;const l=!!i.noSwipingClass&&i.noSwipingClass!=="",c=n.composedPath?n.composedPath():n.path;l&&n.target&&n.target.shadowRoot&&c&&(o=c[0]);const u=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,d=!!(n.target&&n.target.shadowRoot);if(i.noSwiping&&(d?JQ(u,o):o.closest(u))){e.allowClick=!0;return}if(i.swipeHandler&&!o.closest(i.swipeHandler))return;s.currentX=n.pageX,s.currentY=n.pageY;const h=s.currentX,g=s.currentY;if(!Tp(e,n,h))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=h,s.startY=g,r.touchStartTime=no(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,i.threshold>0&&(r.allowThresholdMove=!1);let m=!0;o.matches(r.focusableElements)&&(m=!1,o.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==o&&t.activeElement.blur();const p=m&&e.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||p)&&!o.isContentEditable&&n.preventDefault(),i.freeMode&&i.freeMode.enabled&&e.freeMode&&e.animating&&!i.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function ZQ(A){const e=mi(),t=this,n=t.touchEventsData,{params:r,touches:i,rtlTranslate:s,enabled:a}=t;if(!a||!r.simulateTouch&&A.pointerType==="mouse")return;let o=A;if(o.originalEvent&&(o=o.originalEvent),o.type==="pointermove"&&(n.touchId!==null||o.pointerId!==n.pointerId))return;let l;if(o.type==="touchmove"){if(l=[...o.changedTouches].filter(_=>_.identifier===n.touchId)[0],!l||l.identifier!==n.touchId)return}else l=o;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",o);return}const c=l.pageX,u=l.pageY;if(o.preventedByNestedSwiper){i.startX=c,i.startY=u;return}if(!t.allowTouchMove){o.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(i,{startX:c,startY:u,currentX:c,currentY:u}),n.touchStartTime=no());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(u<i.startY&&t.translate<=t.maxTranslate()||u>i.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(c<i.startX&&t.translate<=t.maxTranslate()||c>i.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&o.target===e.activeElement&&o.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",o),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=c,i.currentY=u;const d=i.currentX-i.startX,h=i.currentY-i.startY;if(t.params.threshold&&Math.sqrt(d**2+h**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let _;t.isHorizontal()&&i.currentY===i.startY||t.isVertical()&&i.currentX===i.startX?n.isScrolling=!1:d*d+h*h>=25&&(_=Math.atan2(Math.abs(h),Math.abs(d))*180/Math.PI,n.isScrolling=t.isHorizontal()?_>r.touchAngle:90-_>r.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",o),typeof n.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(n.startMoving=!0),n.isScrolling){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&o.cancelable&&o.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&o.stopPropagation();let g=t.isHorizontal()?d:h,m=t.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;r.oneWayMovement&&(g=Math.abs(g)*(s?1:-1),m=Math.abs(m)*(s?1:-1)),i.diff=g,g*=r.touchRatio,s&&(g=-g,m=-m);const p=t.touchesDirection;t.swipeDirection=g>0?"prev":"next",t.touchesDirection=m>0?"prev":"next";const f=t.params.loop&&!r.cssMode,v=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(f&&v&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const _=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(_)}n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",o)}let B;if(new Date().getTime(),n.isMoved&&n.allowThresholdMove&&p!==t.touchesDirection&&f&&v&&Math.abs(g)>=1){Object.assign(i,{startX:c,startY:u,currentX:c,currentY:u,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",o),n.isMoved=!0,n.currentTranslate=g+n.startTranslate;let C=!0,x=r.resistanceRatio;if(r.touchReleaseOnEdges&&(x=0),g>0?(f&&v&&!B&&n.allowThresholdMove&&n.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(C=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+g)**x))):g<0&&(f&&v&&!B&&n.allowThresholdMove&&n.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(C=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-g)**x))),C&&(o.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),r.threshold>0)if(Math.abs(g)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,n.currentTranslate=n.startTranslate,i.diff=t.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function eL(A){const e=this,t=e.touchEventsData;let n=A;n.originalEvent&&(n=n.originalEvent);let r;if(n.type==="touchend"||n.type==="touchcancel"){if(r=[...n.changedTouches].filter(x=>x.identifier===t.touchId)[0],!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;r=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:s,touches:a,rtlTranslate:o,slidesGrid:l,enabled:c}=e;if(!c||!s.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&s.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}s.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=no(),d=u-t.touchStartTime;if(e.allowClick){const x=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(x&&x[0]||n.target,x),e.emit("tap click",n),d<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=no(),ru(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(s.followFinger?h=o?e.translate:-e.translate:h=-t.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const g=h>=-e.maxTranslate()&&!e.params.loop;let m=0,p=e.slidesSizesGrid[0];for(let x=0;x<l.length;x+=x<s.slidesPerGroupSkip?1:s.slidesPerGroup){const _=x<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof l[x+_]<"u"?(g||h>=l[x]&&h<l[x+_])&&(m=x,p=l[x+_]-l[x]):(g||h>=l[x])&&(m=x,p=l[l.length-1]-l[l.length-2])}let f=null,v=null;s.rewind&&(e.isBeginning?v=s.virtual&&s.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const B=(h-l[m])/p,C=m<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(d>s.longSwipesMs){if(!s.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(B>=s.longSwipesRatio?e.slideTo(s.rewind&&e.isEnd?f:m+C):e.slideTo(m)),e.swipeDirection==="prev"&&(B>1-s.longSwipesRatio?e.slideTo(m+C):v!==null&&B<0&&Math.abs(B)>s.longSwipesRatio?e.slideTo(v):e.slideTo(m))}else{if(!s.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(m+C):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:m+C),e.swipeDirection==="prev"&&e.slideTo(v!==null?v:m))}}function Ip(){const A=this,{params:e,el:t}=A;if(t&&t.offsetWidth===0)return;e.breakpoints&&A.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:r,snapGrid:i}=A,s=A.virtual&&A.params.virtual.enabled;A.allowSlideNext=!0,A.allowSlidePrev=!0,A.updateSize(),A.updateSlides(),A.updateSlidesClasses();const a=s&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&A.isEnd&&!A.isBeginning&&!A.params.centeredSlides&&!a?A.slideTo(A.slides.length-1,0,!1,!0):A.params.loop&&!s?A.slideToLoop(A.realIndex,0,!1,!0):A.slideTo(A.activeIndex,0,!1,!0),A.autoplay&&A.autoplay.running&&A.autoplay.paused&&(clearTimeout(A.autoplay.resizeTimeout),A.autoplay.resizeTimeout=setTimeout(()=>{A.autoplay&&A.autoplay.running&&A.autoplay.paused&&A.autoplay.resume()},500)),A.allowSlidePrev=r,A.allowSlideNext=n,A.params.watchOverflow&&i!==A.snapGrid&&A.checkOverflow()}function tL(A){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&A.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(A.stopPropagation(),A.stopImmediatePropagation())))}function AL(){const A=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=A;if(!n)return;A.previousTranslate=A.translate,A.isHorizontal()?A.translate=-e.scrollLeft:A.translate=-e.scrollTop,A.translate===0&&(A.translate=0),A.updateActiveIndex(),A.updateSlidesClasses();let r;const i=A.maxTranslate()-A.minTranslate();i===0?r=0:r=(A.translate-A.minTranslate())/i,r!==A.progress&&A.updateProgress(t?-A.translate:A.translate),A.emit("setTranslate",A.translate,!1)}function nL(A){const e=this;Qa(e,A.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function rL(){const A=this;A.documentTouchHandlerProceeded||(A.documentTouchHandlerProceeded=!0,A.params.touchReleaseOnEdges&&(A.el.style.touchAction="auto"))}const I0=(A,e)=>{const t=mi(),{params:n,el:r,wrapperEl:i,device:s}=A,a=!!n.nested,o=e==="on"?"addEventListener":"removeEventListener",l=e;t[o]("touchstart",A.onDocumentTouchStart,{passive:!1,capture:a}),r[o]("touchstart",A.onTouchStart,{passive:!1}),r[o]("pointerdown",A.onTouchStart,{passive:!1}),t[o]("touchmove",A.onTouchMove,{passive:!1,capture:a}),t[o]("pointermove",A.onTouchMove,{passive:!1,capture:a}),t[o]("touchend",A.onTouchEnd,{passive:!0}),t[o]("pointerup",A.onTouchEnd,{passive:!0}),t[o]("pointercancel",A.onTouchEnd,{passive:!0}),t[o]("touchcancel",A.onTouchEnd,{passive:!0}),t[o]("pointerout",A.onTouchEnd,{passive:!0}),t[o]("pointerleave",A.onTouchEnd,{passive:!0}),t[o]("contextmenu",A.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[o]("click",A.onClick,!0),n.cssMode&&i[o]("scroll",A.onScroll),n.updateOnWindowResize?A[l](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ip,!0):A[l]("observerUpdate",Ip,!0),r[o]("load",A.onLoad,{capture:!0})};function iL(){const A=this,{params:e}=A;A.onTouchStart=qQ.bind(A),A.onTouchMove=ZQ.bind(A),A.onTouchEnd=eL.bind(A),A.onDocumentTouchStart=rL.bind(A),e.cssMode&&(A.onScroll=AL.bind(A)),A.onClick=tL.bind(A),A.onLoad=nL.bind(A),I0(A,"on")}function sL(){I0(this,"off")}var aL={attachEvents:iL,detachEvents:sL};const Qp=(A,e)=>A.grid&&e.grid&&e.grid.rows>1;function oL(){const A=this,{realIndex:e,initialized:t,params:n,el:r}=A,i=n.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const s=A.getBreakpoint(i,A.params.breakpointsBase,A.el);if(!s||A.currentBreakpoint===s)return;const o=(s in i?i[s]:void 0)||A.originalParams,l=Qp(A,n),c=Qp(A,o),u=A.params.grabCursor,d=o.grabCursor,h=n.enabled;l&&!c?(r.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),A.emitContainerClasses()):!l&&c&&(r.classList.add(`${n.containerModifierClass}grid`),(o.grid.fill&&o.grid.fill==="column"||!o.grid.fill&&n.grid.fill==="column")&&r.classList.add(`${n.containerModifierClass}grid-column`),A.emitContainerClasses()),u&&!d?A.unsetGrabCursor():!u&&d&&A.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(B=>{if(typeof o[B]>"u")return;const C=n[B]&&n[B].enabled,x=o[B]&&o[B].enabled;C&&!x&&A[B].disable(),!C&&x&&A[B].enable()});const g=o.direction&&o.direction!==n.direction,m=n.loop&&(o.slidesPerView!==n.slidesPerView||g),p=n.loop;g&&t&&A.changeDirection(),oA(A.params,o);const f=A.params.enabled,v=A.params.loop;Object.assign(A,{allowTouchMove:A.params.allowTouchMove,allowSlideNext:A.params.allowSlideNext,allowSlidePrev:A.params.allowSlidePrev}),h&&!f?A.disable():!h&&f&&A.enable(),A.currentBreakpoint=s,A.emit("_beforeBreakpoint",o),t&&(m?(A.loopDestroy(),A.loopCreate(e),A.updateSlides()):!p&&v?(A.loopCreate(e),A.updateSlides()):p&&!v&&A.loopDestroy()),A.emit("breakpoint",o)}function lL(A,e,t){if(e===void 0&&(e="window"),!A||e==="container"&&!t)return;let n=!1;const r=uA(),i=e==="window"?r.innerHeight:t.clientHeight,s=Object.keys(A).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const o=parseFloat(a.substr(1));return{value:i*o,point:a}}return{value:a,point:a}});s.sort((a,o)=>parseInt(a.value,10)-parseInt(o.value,10));for(let a=0;a<s.length;a+=1){const{point:o,value:l}=s[a];e==="window"?r.matchMedia(`(min-width: ${l}px)`).matches&&(n=o):l<=t.clientWidth&&(n=o)}return n||"max"}var cL={setBreakpoint:oL,getBreakpoint:lL};function uL(A,e){const t=[];return A.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(r=>{n[r]&&t.push(e+r)}):typeof n=="string"&&t.push(e+n)}),t}function dL(){const A=this,{classNames:e,params:t,rtl:n,el:r,device:i}=A,s=uL(["initialized",t.direction,{"free-mode":A.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...s),r.classList.add(...e),A.emitContainerClasses()}function fL(){const A=this,{el:e,classNames:t}=A;e.classList.remove(...t),A.emitContainerClasses()}var hL={addClasses:dL,removeClasses:fL};function pL(){const A=this,{isLocked:e,params:t}=A,{slidesOffsetBefore:n}=t;if(n){const r=A.slides.length-1,i=A.slidesGrid[r]+A.slidesSizesGrid[r]+n*2;A.isLocked=A.size>i}else A.isLocked=A.snapGrid.length===1;t.allowSlideNext===!0&&(A.allowSlideNext=!A.isLocked),t.allowSlidePrev===!0&&(A.allowSlidePrev=!A.isLocked),e&&e!==A.isLocked&&(A.isEnd=!1),e!==A.isLocked&&A.emit(A.isLocked?"lock":"unlock")}var gL={checkOverflow:pL},au={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function mL(A,e){return function(n){n===void 0&&(n={});const r=Object.keys(n)[0],i=n[r];if(typeof i!="object"||i===null){oA(e,n);return}if(A[r]===!0&&(A[r]={enabled:!0}),r==="navigation"&&A[r]&&A[r].enabled&&!A[r].prevEl&&!A[r].nextEl&&(A[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&A[r]&&A[r].enabled&&!A[r].el&&(A[r].auto=!0),!(r in A&&"enabled"in i)){oA(e,n);return}typeof A[r]=="object"&&!("enabled"in A[r])&&(A[r].enabled=!0),A[r]||(A[r]={enabled:!1}),oA(e,n)}}const rc={eventsEmitter:hQ,update:yQ,translate:TQ,transition:RQ,slide:kQ,loop:XQ,grabCursor:$Q,events:aL,breakpoints:cL,checkOverflow:gL,classes:hL},ic={};let Du=class An{constructor(){let e,t;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=oA({},t),e&&!t.el&&(t.el=e);const s=mi();if(t.el&&typeof t.el=="string"&&s.querySelectorAll(t.el).length>1){const c=[];return s.querySelectorAll(t.el).forEach(u=>{const d=oA({},t,{el:u});c.push(new An(d))}),c}const a=this;a.__swiper__=!0,a.support=M0(),a.device=F0({userAgent:t.userAgent}),a.browser=uQ(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const o={};a.modules.forEach(c=>{c({params:t,swiper:a,extendParams:mL(t,o),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const l=oA({},au,o);return a.params=oA({},l,ic,t),a.originalParams=oA({},a.params),a.passedParams=oA({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(c=>{a.on(c,a.params.on[c])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,r=on(t,`.${n.slideClass}, swiper-slide`),i=Mp(r[0]);return Mp(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=on(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),s=(n.maxTranslate()-r)*e+r;n.translateTo(s,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const n=this,{params:r,slides:i,slidesGrid:s,slidesSizesGrid:a,size:o,activeIndex:l}=n;let c=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let u=i[l]?Math.ceil(i[l].swiperSlideSize):0,d;for(let h=l+1;h<i.length;h+=1)i[h]&&!d&&(u+=Math.ceil(i[h].swiperSlideSize),c+=1,u>o&&(d=!0));for(let h=l-1;h>=0;h-=1)i[h]&&!d&&(u+=i[h].swiperSlideSize,c+=1,u>o&&(d=!0))}else if(e==="current")for(let u=l+1;u<i.length;u+=1)(t?s[u]+a[u]-s[l]<o:s[u]-s[l]<o)&&(c+=1);else for(let u=l-1;u>=0;u-=1)s[l]-s[u]<o&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Qa(e,s)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const s=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(s,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const s=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(s.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const n=this,r=n.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(i=>{e==="vertical"?i.style.width="":i.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):on(n,r())[0];return!s&&t.params.createElements&&(s=iu("div",t.params.wrapperClass),n.append(s),on(n,`.${t.params.slideClass}`).forEach(a=>{s.append(a)})),Object.assign(t,{el:n,wrapperEl:s,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:s,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Un(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Un(n,"direction")==="rtl"),wrongRTL:Un(s,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(i=>{i.complete?Qa(t,i):i.addEventListener("load",s=>{Qa(t,s.target)})}),su(t),t.initialized=!0,su(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const n=this,{params:r,el:i,wrapperEl:s,slides:a}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i.removeAttribute("style"),s.removeAttribute("style"),a&&a.length&&a.forEach(o=>{o.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),o.removeAttribute("style"),o.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(o=>{n.off(o)}),e!==!1&&(n.el.swiper=null,tQ(n)),n.destroyed=!0),null}static extendDefaults(e){oA(ic,e)}static get extendedDefaults(){return ic}static get defaults(){return au}static installModule(e){An.prototype.__modules__||(An.prototype.__modules__=[]);const t=An.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>An.installModule(t)),An):(An.installModule(e),An)}};Object.keys(rc).forEach(A=>{Object.keys(rc[A]).forEach(e=>{Du.prototype[e]=rc[A][e]})});Du.use([dQ,fQ]);const Q0=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function dr(A){return typeof A=="object"&&A!==null&&A.constructor&&Object.prototype.toString.call(A).slice(8,-1)==="Object"&&!A.__swiper__}function $r(A,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof A[n]>"u"?A[n]=e[n]:dr(e[n])&&dr(A[n])&&Object.keys(e[n]).length>0?e[n].__swiper__?A[n]=e[n]:$r(A[n],e[n]):A[n]=e[n]})}function L0(A){return A===void 0&&(A={}),A.navigation&&typeof A.navigation.nextEl>"u"&&typeof A.navigation.prevEl>"u"}function R0(A){return A===void 0&&(A={}),A.pagination&&typeof A.pagination.el>"u"}function D0(A){return A===void 0&&(A={}),A.scrollbar&&typeof A.scrollbar.el>"u"}function H0(A){A===void 0&&(A="");const e=A.split(" ").map(n=>n.trim()).filter(n=>!!n),t=[];return e.forEach(n=>{t.indexOf(n)<0&&t.push(n)}),t.join(" ")}function BL(A){return A===void 0&&(A=""),A?A.includes("swiper-wrapper")?A:`swiper-wrapper ${A}`:"swiper-wrapper"}function vL(A){let{swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:s,scrollbarEl:a,paginationEl:o}=A;const l=r.filter(w=>w!=="children"&&w!=="direction"&&w!=="wrapperClass"),{params:c,pagination:u,navigation:d,scrollbar:h,virtual:g,thumbs:m}=e;let p,f,v,B,C,x,_,E;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(p=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(f=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||o)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(v=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&h&&!h.el&&(B=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||s)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(C=!0);const T=w=>{e[w]&&(e[w].destroy(),w==="navigation"?(e.isElement&&(e[w].prevEl.remove(),e[w].nextEl.remove()),c[w].prevEl=void 0,c[w].nextEl=void 0,e[w].prevEl=void 0,e[w].nextEl=void 0):(e.isElement&&e[w].el.remove(),c[w].el=void 0,e[w].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?x=!0:!c.loop&&n.loop?_=!0:E=!0),l.forEach(w=>{if(dr(c[w])&&dr(n[w]))Object.assign(c[w],n[w]),(w==="navigation"||w==="pagination"||w==="scrollbar")&&"enabled"in n[w]&&!n[w].enabled&&T(w);else{const y=n[w];(y===!0||y===!1)&&(w==="navigation"||w==="pagination"||w==="scrollbar")?y===!1&&T(w):c[w]=n[w]}}),l.includes("controller")&&!f&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&g&&c.virtual.enabled?(g.slides=t,g.update(!0)):r.includes("virtual")&&g&&c.virtual.enabled&&(t&&(g.slides=t),g.update(!0)),r.includes("children")&&t&&c.loop&&(E=!0),p&&m.init()&&m.update(!0),f&&(e.controller.control=c.controller.control),v&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-pagination"),o.part.add("pagination"),e.el.appendChild(o)),o&&(c.pagination.el=o),u.init(),u.render(),u.update()),B&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),h.init(),h.updateSize(),h.setTranslate()),C&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),i.innerHTML=e.hostEl.constructor.nextButtonSvg,i.part.add("button-next"),e.el.appendChild(i)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=e.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),e.el.appendChild(s))),i&&(c.navigation.nextEl=i),s&&(c.navigation.prevEl=s),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(x||E)&&e.loopDestroy(),(_||E)&&e.loopCreate(),e.update()}function wL(A,e){A===void 0&&(A={}),e===void 0&&(e=!0);const t={on:{}},n={},r={};$r(t,au),t._emitClasses=!0,t.init=!1;const i={},s=Q0.map(o=>o.replace(/_/,"")),a=Object.assign({},A);return Object.keys(a).forEach(o=>{typeof A[o]>"u"||(s.indexOf(o)>=0?dr(A[o])?(t[o]={},r[o]={},$r(t[o],A[o]),$r(r[o],A[o])):(t[o]=A[o],r[o]=A[o]):o.search(/on[A-Z]/)===0&&typeof A[o]=="function"?e?n[`${o[2].toLowerCase()}${o.substr(3)}`]=A[o]:t.on[`${o[2].toLowerCase()}${o.substr(3)}`]=A[o]:i[o]=A[o])}),["navigation","pagination","scrollbar"].forEach(o=>{t[o]===!0&&(t[o]={}),t[o]===!1&&delete t[o]}),{params:t,passedParams:r,rest:i,events:n}}function xL(A,e){let{el:t,nextEl:n,prevEl:r,paginationEl:i,scrollbarEl:s,swiper:a}=A;L0(e)&&n&&r&&(a.params.navigation.nextEl=n,a.originalParams.navigation.nextEl=n,a.params.navigation.prevEl=r,a.originalParams.navigation.prevEl=r),R0(e)&&i&&(a.params.pagination.el=i,a.originalParams.pagination.el=i),D0(e)&&s&&(a.params.scrollbar.el=s,a.originalParams.scrollbar.el=s),a.init(t)}function CL(A,e,t,n,r){const i=[];if(!e)return i;const s=o=>{i.indexOf(o)<0&&i.push(o)};if(t&&n){const o=n.map(r),l=t.map(r);o.join("")!==l.join("")&&s("children"),n.length!==t.length&&s("children")}return Q0.filter(o=>o[0]==="_").map(o=>o.replace(/_/,"")).forEach(o=>{if(o in A&&o in e)if(dr(A[o])&&dr(e[o])){const l=Object.keys(A[o]),c=Object.keys(e[o]);l.length!==c.length?s(o):(l.forEach(u=>{A[o][u]!==e[o][u]&&s(o)}),c.forEach(u=>{A[o][u]!==e[o][u]&&s(o)}))}else A[o]!==e[o]&&s(o)}),i}const _L=A=>{!A||A.destroyed||!A.params.virtual||A.params.virtual&&!A.params.virtual.enabled||(A.updateSlides(),A.updateProgress(),A.updateSlidesClasses(),A.parallax&&A.params.parallax&&A.params.parallax.enabled&&A.parallax.setTranslate())};function io(){return io=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},io.apply(this,arguments)}function P0(A){return A.type&&A.type.displayName&&A.type.displayName.includes("SwiperSlide")}function N0(A){const e=[];return Ye.Children.toArray(A).forEach(t=>{P0(t)?e.push(t):t.props&&t.props.children&&N0(t.props.children).forEach(n=>e.push(n))}),e}function EL(A){const e=[],t={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ye.Children.toArray(A).forEach(n=>{if(P0(n))e.push(n);else if(n.props&&n.props.slot&&t[n.props.slot])t[n.props.slot].push(n);else if(n.props&&n.props.children){const r=N0(n.props.children);r.length>0?r.forEach(i=>e.push(i)):t["container-end"].push(n)}else t["container-end"].push(n)}),{slides:e,slots:t}}function yL(A,e,t){if(!t)return null;const n=c=>{let u=c;return c<0?u=e.length+c:u>=e.length&&(u=u-e.length),u},r=A.isHorizontal()?{[A.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:i,to:s}=t,a=A.params.loop?-e.length:0,o=A.params.loop?e.length*2:e.length,l=[];for(let c=a;c<o;c+=1)c>=i&&c<=s&&l.push(e[n(c)]);return l.map((c,u)=>Ye.cloneElement(c,{swiper:A,style:r,key:c.props.virtualIndex||c.key||`slide-${u}`}))}function Yi(A,e){return typeof window>"u"?q.useEffect(A,e):q.useLayoutEffect(A,e)}const Lp=q.createContext(null),SL=q.createContext(null),O0=q.forwardRef(function(A,e){let{className:t,tag:n="div",wrapperTag:r="div",children:i,onSwiper:s,...a}=A===void 0?{}:A,o=!1;const[l,c]=q.useState("swiper"),[u,d]=q.useState(null),[h,g]=q.useState(!1),m=q.useRef(!1),p=q.useRef(null),f=q.useRef(null),v=q.useRef(null),B=q.useRef(null),C=q.useRef(null),x=q.useRef(null),_=q.useRef(null),E=q.useRef(null),{params:T,passedParams:w,rest:y,events:I}=wL(a),{slides:L,slots:U}=EL(i),Q=()=>{g(!h)};Object.assign(T.on,{_containerClasses(V,X){c(X)}});const D=()=>{Object.assign(T.on,I),o=!0;const V={...T};if(delete V.wrapperClass,f.current=new Du(V),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=L;const X={cache:!1,slides:L,renderExternal:d,renderExternalUpdate:!1};$r(f.current.params.virtual,X),$r(f.current.originalParams.virtual,X)}};p.current||D(),f.current&&f.current.on("_beforeBreakpoint",Q);const z=()=>{o||!I||!f.current||Object.keys(I).forEach(V=>{f.current.on(V,I[V])})},N=()=>{!I||!f.current||Object.keys(I).forEach(V=>{f.current.off(V,I[V])})};q.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",Q)}),q.useEffect(()=>{!m.current&&f.current&&(f.current.emitSlidesClasses(),m.current=!0)}),Yi(()=>{if(e&&(e.current=p.current),!!p.current)return f.current.destroyed&&D(),xL({el:p.current,nextEl:C.current,prevEl:x.current,paginationEl:_.current,scrollbarEl:E.current,swiper:f.current},T),s&&!f.current.destroyed&&s(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),Yi(()=>{z();const V=CL(w,v.current,L,B.current,X=>X.key);return v.current=w,B.current=L,V.length&&f.current&&!f.current.destroyed&&vL({swiper:f.current,slides:L,passedParams:w,changedParams:V,nextEl:C.current,prevEl:x.current,scrollbarEl:E.current,paginationEl:_.current}),()=>{N()}}),Yi(()=>{_L(f.current)},[u]);function W(){return T.virtual?yL(f.current,L,u):L.map((V,X)=>Ye.cloneElement(V,{swiper:f.current,swiperSlideIndex:X}))}return Ye.createElement(n,io({ref:p,className:H0(`${l}${t?` ${t}`:""}`)},y),Ye.createElement(SL.Provider,{value:f.current},U["container-start"],Ye.createElement(r,{className:BL(T.wrapperClass)},U["wrapper-start"],W(),U["wrapper-end"]),L0(T)&&Ye.createElement(Ye.Fragment,null,Ye.createElement("div",{ref:x,className:"swiper-button-prev"}),Ye.createElement("div",{ref:C,className:"swiper-button-next"})),D0(T)&&Ye.createElement("div",{ref:E,className:"swiper-scrollbar"}),R0(T)&&Ye.createElement("div",{ref:_,className:"swiper-pagination"}),U["container-end"]))});O0.displayName="Swiper";const G0=q.forwardRef(function(A,e){let{tag:t="div",children:n,className:r="",swiper:i,zoom:s,lazy:a,virtualIndex:o,swiperSlideIndex:l,...c}=A===void 0?{}:A;const u=q.useRef(null),[d,h]=q.useState("swiper-slide"),[g,m]=q.useState(!1);function p(C,x,_){x===u.current&&h(_)}Yi(()=>{if(typeof l<"u"&&(u.current.swiperSlideIndex=l),e&&(e.current=u.current),!(!u.current||!i)){if(i.destroyed){d!=="swiper-slide"&&h("swiper-slide");return}return i.on("_slideClass",p),()=>{i&&i.off("_slideClass",p)}}}),Yi(()=>{i&&u.current&&!i.destroyed&&h(i.getSlideClasses(u.current))},[i]);const f={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},v=()=>typeof n=="function"?n(f):n,B=()=>{m(!0)};return Ye.createElement(t,io({ref:u,className:H0(`${d}${r?` ${r}`:""}`),"data-swiper-slide-index":o,onLoad:B},c),s&&Ye.createElement(Lp.Provider,{value:f},Ye.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},v(),a&&!g&&Ye.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&Ye.createElement(Lp.Provider,{value:f},v(),a&&!g&&Ye.createElement("div",{className:"swiper-lazy-preloader"})))});G0.displayName="SwiperSlide";const bL=[{id:1,title:"标题1",children:[{secondTitle:"标题1.1",children:[{thirdTitle:"标题1.1.1"}]},{secondTitle:"标题标题标题标题标题标题1.2",children:[{thirdTitle:"标题标题标题标题标题标题1.1.1",children:[{forthTitle:"标题标题标题标题标题1.1.1.1"}]}]}]},{id:2,title:"标题标题标题标题标题标题标题2",children:[{secondTitle:"标题2.1",children:[{thirdTitle:"标题2.1.1"}]},{secondTitle:"标题2.2",children:[{thirdTitle:"标题2.1.1"}]}]}],UL=({})=>{const[A,e]=q.useState([]),t=n=>{let r=A;r.includes(n)?r.splice(n,1):r.splice(n,0,n),e(r),console.log(A,A.includes(n))};return M.jsxs(ML,{className:"StyleContentWrap flex",children:[M.jsx(FL,{className:"StyleLeftWrap p-16 border overflow-auto",children:bL.map((n,r)=>{var i;return M.jsxs(IL,{className:"StyleNavItem color-gray-3 fs-14 transition pointer",children:[M.jsxs(sc,{className:`StyleTitleItem first ${A.includes(0)?"open":""}`,onClick:()=>t(r),children:[M.jsx(Ca,{}),M.jsx(cS,{}),M.jsx("p",{children:n.title}),M.jsx(uS,{size:24}),M.jsx(dS,{size:24})]}),(i=n.children)==null?void 0:i.map((s,a)=>{var o;return M.jsxs(M.Fragment,{children:[M.jsxs(sc,{className:"StyleTitleItem second",children:[M.jsx(Ca,{}),M.jsx("p",{children:s.secondTitle})]},a),(o=s.children)==null?void 0:o.map((l,c)=>M.jsx(M.Fragment,{children:M.jsxs(sc,{className:"StyleTitleItem third",children:[M.jsx(Ca,{}),M.jsx("p",{children:l.thirdTitle})]},c)}))]})})]},r)})}),M.jsx(TL,{className:"StyleRightWrap flex-1 px-24 border",children:M.jsx(O0,{children:M.jsx(QL,{className:"StyleSwiperSlide",children:"1"})})})]})},ML=Ie.div`
    height: 100vh;
`,FL=Ie.div`
    width: 320px;
    flex-shrink: 0;
`,TL=Ie.div`
    min-width: 800px;
`,IL=Ie.div`
    
`,sc=Ie.div`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px 8px 0;
    border-radius: 4px;
    p{
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .IconArrow{
        transition: all 0.2s;
        transform: rotate(-90deg);
    }
    .IconAdd,
    .IconMore{
        padding: 4px;
        border-radius: 4px;
        &:hover{
            background-color: #f1f1f1;
        }
    }
    &.first{
        padding-left: 12px;
        &:hover{
            background-color: #f8f8f8;
        }
    }
    &.second{
        padding-left: 24px;
    }
    &.third{
        padding-left: 36px;
    }
    &.forth{
        padding-left: 48px;
    }
    &.open{
        .IconArrow{
            transform: rotate(0);
        }
    }
`,QL=Ie(G0)`
    
`;function LL(){return M.jsx(M.Fragment,{children:M.jsxs(HB,{children:[M.jsx(Pr,{path:"/",element:M.jsx(jh,{})}),M.jsx(Pr,{path:"/home",element:M.jsx(ey,{})}),M.jsx(Pr,{path:"/md",element:M.jsx(UL,{})}),M.jsx(Pr,{path:"/ppt",element:M.jsx(qI,{})}),M.jsx(Pr,{path:"/colors",element:M.jsx(jh,{})})]})})}ac.createRoot(document.getElementById("root")).render(M.jsx(Ye.StrictMode,{children:M.jsx(OB,{children:M.jsx(LL,{})})}));
