import{r as W,a as p0,R as g0,b as BA}from"./react-DRHEsIiv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function A(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=A(r);fetch(r.href,i)}})();var mp={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=W,B0=Symbol.for("react.element"),v0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,x0=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_0={key:!0,ref:!0,__self:!0,__source:!0};function Bp(t,e,A){var n,r={},i=null,s=null;A!==void 0&&(i=""+A),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)w0.call(e,n)&&!_0.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:B0,type:t,key:i,ref:s,props:r,_owner:x0.current}}Ao.Fragment=v0;Ao.jsx=Bp;Ao.jsxs=Bp;mp.exports=Ao;var w=mp.exports,$c={},Tu=p0;$c.createRoot=Tu.createRoot,$c.hydrateRoot=Tu.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var A=arguments[e];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(t[n]=A[n])}return t},Fa.apply(this,arguments)}var xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xn||(xn={}));const Qu="popstate";function C0(t){t===void 0&&(t={});function e(n,r){let{pathname:i,search:s,hash:a}=n.location;return Jc("",{pathname:i,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function A(n,r){return typeof r=="string"?r:wp(r)}return y0(e,A,null,t)}function tA(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function E0(){return Math.random().toString(36).substr(2,8)}function Iu(t,e){return{usr:t.state,key:t.key,idx:e}}function Jc(t,e,A,n){return A===void 0&&(A=null),Fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?no(e):e,{state:A,key:e&&e.key||n||E0()})}function wp(t){let{pathname:e="/",search:A="",hash:n=""}=t;return A&&A!=="?"&&(e+=A.charAt(0)==="?"?A:"?"+A),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function no(t){let e={};if(t){let A=t.indexOf("#");A>=0&&(e.hash=t.substr(A),t=t.substr(0,A));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function y0(t,e,A,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:i=!1}=n,s=r.history,a=xn.Pop,o=null,c=l();c==null&&(c=0,s.replaceState(Fa({},s.state,{idx:c}),""));function l(){return(s.state||{idx:null}).idx}function u(){a=xn.Pop;let d=l(),f=d==null?null:d-c;c=d,o&&o({action:a,location:m.location,delta:f})}function h(d,f){a=xn.Push;let x=Jc(m.location,d,f);A&&A(x,d),c=l()+1;let v=Iu(x,c),y=m.createHref(x);try{s.pushState(v,"",y)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(y)}i&&o&&o({action:a,location:m.location,delta:1})}function p(d,f){a=xn.Replace;let x=Jc(m.location,d,f);A&&A(x,d),c=l();let v=Iu(x,c),y=m.createHref(x);s.replaceState(v,"",y),i&&o&&o({action:a,location:m.location,delta:0})}function g(d){let f=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof d=="string"?d:wp(d);return x=x.replace(/ $/,"%20"),tA(f,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,f)}let m={get action(){return a},get location(){return t(r,s)},listen(d){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Qu,u),o=d,()=>{r.removeEventListener(Qu,u),o=null}},createHref(d){return e(r,d)},createURL:g,encodeLocation(d){let f=g(d);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(d){return s.go(d)}};return m}var Ru;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ru||(Ru={}));function U0(t,e,A){A===void 0&&(A="/");let n=typeof e=="string"?no(e):e,r=Cp(n.pathname||"/",A);if(r==null)return null;let i=xp(t);S0(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let o=N0(r);s=D0(i[a],o)}return s}function xp(t,e,A,n){e===void 0&&(e=[]),A===void 0&&(A=[]),n===void 0&&(n="");let r=(i,s,a)=>{let o={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(tA(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let c=zr([n,o.relativePath]),l=A.concat(o);i.children&&i.children.length>0&&(tA(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xp(i.children,e,l,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:R0(c,i.index),routesMeta:l})};return t.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))r(i,s);else for(let o of _p(i.path))r(i,s,o)}),e}function _p(t){let e=t.split("/");if(e.length===0)return[];let[A,...n]=e,r=A.endsWith("?"),i=A.replace(/\?$/,"");if(n.length===0)return r?[i,""]:[i];let s=_p(n.join("/")),a=[];return a.push(...s.map(o=>o===""?i:[i,o].join("/"))),r&&a.push(...s),a.map(o=>t.startsWith("/")&&o===""?"/":o)}function S0(t){t.sort((e,A)=>e.score!==A.score?A.score-e.score:L0(e.routesMeta.map(n=>n.childrenIndex),A.routesMeta.map(n=>n.childrenIndex)))}const b0=/^:[\w-]+$/,M0=3,F0=2,T0=1,Q0=10,I0=-2,Lu=t=>t==="*";function R0(t,e){let A=t.split("/"),n=A.length;return A.some(Lu)&&(n+=I0),e&&(n+=F0),A.filter(r=>!Lu(r)).reduce((r,i)=>r+(b0.test(i)?M0:i===""?T0:Q0),n)}function L0(t,e){return t.length===e.length&&t.slice(0,-1).every((n,r)=>n===e[r])?t[t.length-1]-e[e.length-1]:0}function D0(t,e){let{routesMeta:A}=t,n={},r="/",i=[];for(let s=0;s<A.length;++s){let a=A[s],o=s===A.length-1,c=r==="/"?e:e.slice(r.length)||"/",l=H0({path:a.relativePath,caseSensitive:a.caseSensitive,end:o},c);if(!l)return null;Object.assign(n,l.params);let u=a.route;i.push({params:n,pathname:zr([r,l.pathname]),pathnameBase:O0(zr([r,l.pathnameBase])),route:u}),l.pathnameBase!=="/"&&(r=zr([r,l.pathnameBase]))}return i}function H0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[A,n]=P0(t.path,t.caseSensitive,t.end),r=e.match(A);if(!r)return null;let i=r[0],s=i.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:n.reduce((c,l,u)=>{let{paramName:h,isOptional:p}=l;if(h==="*"){let m=a[u]||"";s=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const g=a[u];return p&&!g?c[h]=void 0:c[h]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:t}}function P0(t,e,A){e===void 0&&(e=!1),A===void 0&&(A=!0),vp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,o)=>(n.push({paramName:a,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):A?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function N0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let A=e.endsWith("/")?e.length-1:e.length,n=t.charAt(A);return n&&n!=="/"?null:t.slice(A)||"/"}const zr=t=>t.join("/").replace(/\/\/+/g,"/"),O0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function k0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ep=["post","put","patch","delete"];new Set(Ep);const G0=["get",...Ep];new Set(G0);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var A=arguments[e];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(t[n]=A[n])}return t},Ta.apply(this,arguments)}const V0=W.createContext(null),K0=W.createContext(null),yp=W.createContext(null),ro=W.createContext(null),io=W.createContext({outlet:null,matches:[],isDataRoute:!1}),Up=W.createContext(null);function Xl(){return W.useContext(ro)!=null}function z0(){return Xl()||tA(!1),W.useContext(ro).location}function W0(t,e){return X0(t,e)}function X0(t,e,A,n){Xl()||tA(!1);let{navigator:r}=W.useContext(yp),{matches:i}=W.useContext(io),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let o=s?s.pathnameBase:"/";s&&s.route;let c=z0(),l;if(e){var u;let d=typeof e=="string"?no(e):e;o==="/"||(u=d.pathname)!=null&&u.startsWith(o)||tA(!1),l=d}else l=c;let h=l.pathname||"/",p=h;if(o!=="/"){let d=o.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=U0(t,{pathname:p}),m=q0(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},a,d.params),pathname:zr([o,r.encodeLocation?r.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:zr([o,r.encodeLocation?r.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),i,A,n);return e&&m?W.createElement(ro.Provider,{value:{location:Ta({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:xn.Pop}},m):m}function j0(){let t=AB(),e=k0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),A=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),A?W.createElement("pre",{style:r},A):null,null)}const Y0=W.createElement(j0,null);class $0 extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,A){return A.location!==e.location||A.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:A.error,location:A.location,revalidation:e.revalidation||A.revalidation}}componentDidCatch(e,A){console.error("React Router caught the following error during render",e,A)}render(){return this.state.error!==void 0?W.createElement(io.Provider,{value:this.props.routeContext},W.createElement(Up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function J0(t){let{routeContext:e,match:A,children:n}=t,r=W.useContext(V0);return r&&r.static&&r.staticContext&&(A.route.errorElement||A.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=A.route.id),W.createElement(io.Provider,{value:e},n)}function q0(t,e,A,n){var r;if(e===void 0&&(e=[]),A===void 0&&(A=null),n===void 0&&(n=null),t==null){var i;if((i=A)!=null&&i.errors)t=A.matches;else return null}let s=t,a=(r=A)==null?void 0:r.errors;if(a!=null){let l=s.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));l>=0||tA(!1),s=s.slice(0,Math.min(s.length,l+1))}let o=!1,c=-1;if(A&&n&&n.v7_partialHydration)for(let l=0;l<s.length;l++){let u=s[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=l),u.route.id){let{loaderData:h,errors:p}=A,g=u.route.loader&&h[u.route.id]===void 0&&(!p||p[u.route.id]===void 0);if(u.route.lazy||g){o=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((l,u,h)=>{let p,g=!1,m=null,d=null;A&&(p=a&&u.route.id?a[u.route.id]:void 0,m=u.route.errorElement||Y0,o&&(c<0&&h===0?(nB("route-fallback",!1),g=!0,d=null):c===h&&(g=!0,d=u.route.hydrateFallbackElement||null)));let f=e.concat(s.slice(0,h+1)),x=()=>{let v;return p?v=m:g?v=d:u.route.Component?v=W.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=l,W.createElement(J0,{match:u,routeContext:{outlet:l,matches:f,isDataRoute:A!=null},children:v})};return A&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?W.createElement($0,{location:A.location,revalidation:A.revalidation,component:m,error:p,children:x(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):x()},null)}var qc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(qc||{});function Z0(t){let e=W.useContext(K0);return e||tA(!1),e}function eB(t){let e=W.useContext(io);return e||tA(!1),e}function tB(t){let e=eB(),A=e.matches[e.matches.length-1];return A.route.id||tA(!1),A.route.id}function AB(){var t;let e=W.useContext(Up),A=Z0(qc.UseRouteError),n=tB(qc.UseRouteError);return e!==void 0?e:(t=A.errors)==null?void 0:t[n]}const Du={};function nB(t,e,A){!e&&!Du[t]&&(Du[t]=!0)}function Pr(t){tA(!1)}function rB(t){let{basename:e="/",children:A=null,location:n,navigationType:r=xn.Pop,navigator:i,static:s=!1,future:a}=t;Xl()&&tA(!1);let o=e.replace(/^\/*/,"/"),c=W.useMemo(()=>({basename:o,navigator:i,static:s,future:Ta({v7_relativeSplatPath:!1},a)}),[o,a,i,s]);typeof n=="string"&&(n=no(n));let{pathname:l="/",search:u="",hash:h="",state:p=null,key:g="default"}=n,m=W.useMemo(()=>{let d=Cp(l,o);return d==null?null:{location:{pathname:d,search:u,hash:h,state:p,key:g},navigationType:r}},[o,l,u,h,p,g,r]);return m==null?null:W.createElement(yp.Provider,{value:c},W.createElement(ro.Provider,{children:A,value:m}))}function iB(t){let{children:e,location:A}=t;return W0(Zc(e),A)}new Promise(()=>{});function Zc(t,e){e===void 0&&(e=[]);let A=[];return W.Children.forEach(t,(n,r)=>{if(!W.isValidElement(n))return;let i=[...e,r];if(n.type===W.Fragment){A.push.apply(A,Zc(n.props.children,i));return}n.type!==Pr&&tA(!1),!n.props.index||!n.props.children||tA(!1);let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Zc(n.props.children,i)),A.push(s)}),A}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const sB="6";try{window.__reactRouterVersion=sB}catch{}const aB="startTransition",Hu=g0[aB];function oB(t){let{basename:e,children:A,future:n,window:r}=t,i=W.useRef();i.current==null&&(i.current=C0({window:r,v5Compat:!0}));let s=i.current,[a,o]=W.useState({action:s.action,location:s.location}),{v7_startTransition:c}=n||{},l=W.useCallback(u=>{c&&Hu?Hu(()=>o(u)):o(u)},[o,c]);return W.useLayoutEffect(()=>s.listen(l),[s,l]),W.createElement(rB,{basename:e,children:A,location:a.location,navigationType:a.action,navigator:s,future:n})}var Pu;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Pu||(Pu={}));var Nu;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Nu||(Nu={}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="163",cB=0,Ou=1,lB=2,Yl=1,uB=2,tn=3,In=0,Wt=1,NA=2,Un=0,Wr=1,ku=2,Gu=3,Vu=4,hB=5,$n=100,fB=101,dB=102,pB=103,gB=104,mB=200,BB=201,vB=202,wB=203,el=204,tl=205,xB=206,_B=207,CB=208,EB=209,yB=210,UB=211,SB=212,bB=213,MB=214,FB=0,TB=1,QB=2,Qa=3,IB=4,RB=5,LB=6,DB=7,$l=0,HB=1,PB=2,Sn=0,NB=1,OB=2,kB=3,GB=4,VB=5,KB=6,zB=7,Sp=300,$r=301,Jr=302,Al=303,nl=304,so=306,rl=1e3,Zn=1001,il=1002,pA=1003,WB=1004,ds=1005,UA=1006,No=1007,er=1008,bn=1009,XB=1010,jB=1011,bp=1012,Mp=1013,qr=1014,_n=1015,Ia=1016,Fp=1017,Tp=1018,ns=1020,YB=35902,$B=1021,JB=1022,OA=1023,qB=1024,ZB=1025,Xr=1026,Ji=1027,ev=1028,Qp=1029,tv=1030,Ip=1031,Rp=1033,Oo=33776,ko=33777,Go=33778,Vo=33779,Ku=35840,zu=35841,Wu=35842,Xu=35843,Lp=36196,ju=37492,Yu=37496,$u=37808,Ju=37809,qu=37810,Zu=37811,eh=37812,th=37813,Ah=37814,nh=37815,rh=37816,ih=37817,sh=37818,ah=37819,oh=37820,ch=37821,Ko=36492,lh=36494,uh=36495,Av=36283,hh=36284,fh=36285,dh=36286,nv=3200,rv=3201,Dp=0,iv=1,wn="",LA="srgb",Dn="srgb-linear",Jl="display-p3",ao="display-p3-linear",Ra="linear",at="srgb",La="rec709",Da="p3",fr=7680,ph=519,sv=512,av=513,ov=514,Hp=515,cv=516,lv=517,uv=518,hv=519,gh=35044,mh="300 es",rn=2e3,Ha=2001;class hi{addEventListener(e,A){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(A)===-1&&n[e].push(A)}hasEventListener(e,A){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(A)!==-1}removeEventListener(e,A){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const i=r.indexOf(A);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let i=0,s=r.length;i<s;i++)r[i].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fa=Math.PI/180,sl=180/Math.PI;function rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,A=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[A&63|128]+Nt[A>>8&255]+"-"+Nt[A>>16&255]+Nt[A>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function $t(t,e,A){return Math.max(e,Math.min(A,t))}function fv(t,e){return(t%e+e)%e}function zo(t,e,A){return(1-A)*t+A*e}function vi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,A=0){Ke.prototype.isVector2=!0,this.x=e,this.y=A}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,A){return this.x=e,this.y=A,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,A){switch(e){case 0:this.x=A;break;case 1:this.y=A;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,A){return this.x=e.x+A.x,this.y=e.y+A.y,this}addScaledVector(e,A){return this.x+=e.x*A,this.y+=e.y*A,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,A){return this.x=e.x-A.x,this.y=e.y-A.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const A=this.x,n=this.y,r=e.elements;return this.x=r[0]*A+r[3]*n+r[6],this.y=r[1]*A+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,A){return this.x=Math.max(e.x,Math.min(A.x,this.x)),this.y=Math.max(e.y,Math.min(A.y,this.y)),this}clampScalar(e,A){return this.x=Math.max(e,Math.min(A,this.x)),this.y=Math.max(e,Math.min(A,this.y)),this}clampLength(e,A){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(A,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const A=Math.sqrt(this.lengthSq()*e.lengthSq());if(A===0)return Math.PI/2;const n=this.dot(e)/A;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const A=this.x-e.x,n=this.y-e.y;return A*A+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,A){return this.x+=(e.x-this.x)*A,this.y+=(e.y-this.y)*A,this}lerpVectors(e,A,n){return this.x=e.x+(A.x-e.x)*n,this.y=e.y+(A.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,A=0){return this.x=e[A],this.y=e[A+1],this}toArray(e=[],A=0){return e[A]=this.x,e[A+1]=this.y,e}fromBufferAttribute(e,A){return this.x=e.getX(A),this.y=e.getY(A),this}rotateAround(e,A){const n=Math.cos(A),r=Math.sin(A),i=this.x-e.x,s=this.y-e.y;return this.x=i*n-s*r+e.x,this.y=i*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,A,n,r,i,s,a,o,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,A,n,r,i,s,a,o,c)}set(e,A,n,r,i,s,a,o,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=A,l[4]=i,l[5]=o,l[6]=n,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const A=this.elements,n=e.elements;return A[0]=n[0],A[1]=n[1],A[2]=n[2],A[3]=n[3],A[4]=n[4],A[5]=n[5],A[6]=n[6],A[7]=n[7],A[8]=n[8],this}extractBasis(e,A,n){return e.setFromMatrix3Column(this,0),A.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const A=e.elements;return this.set(A[0],A[4],A[8],A[1],A[5],A[9],A[2],A[6],A[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,A){const n=e.elements,r=A.elements,i=this.elements,s=n[0],a=n[3],o=n[6],c=n[1],l=n[4],u=n[7],h=n[2],p=n[5],g=n[8],m=r[0],d=r[3],f=r[6],x=r[1],v=r[4],y=r[7],b=r[2],E=r[5],U=r[8];return i[0]=s*m+a*x+o*b,i[3]=s*d+a*v+o*E,i[6]=s*f+a*y+o*U,i[1]=c*m+l*x+u*b,i[4]=c*d+l*v+u*E,i[7]=c*f+l*y+u*U,i[2]=h*m+p*x+g*b,i[5]=h*d+p*v+g*E,i[8]=h*f+p*y+g*U,this}multiplyScalar(e){const A=this.elements;return A[0]*=e,A[3]*=e,A[6]*=e,A[1]*=e,A[4]*=e,A[7]*=e,A[2]*=e,A[5]*=e,A[8]*=e,this}determinant(){const e=this.elements,A=e[0],n=e[1],r=e[2],i=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8];return A*s*l-A*a*c-n*i*l+n*a*o+r*i*c-r*s*o}invert(){const e=this.elements,A=e[0],n=e[1],r=e[2],i=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=l*s-a*c,h=a*o-l*i,p=c*i-s*o,g=A*u+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(a*n-r*s)*m,e[3]=h*m,e[4]=(l*A-r*o)*m,e[5]=(r*i-a*A)*m,e[6]=p*m,e[7]=(n*o-c*A)*m,e[8]=(s*A-n*i)*m,this}transpose(){let e;const A=this.elements;return e=A[1],A[1]=A[3],A[3]=e,e=A[2],A[2]=A[6],A[6]=e,e=A[5],A[5]=A[7],A[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const A=this.elements;return e[0]=A[0],e[1]=A[3],e[2]=A[6],e[3]=A[1],e[4]=A[4],e[5]=A[7],e[6]=A[2],e[7]=A[5],e[8]=A[8],this}setUvTransform(e,A,n,r,i,s,a){const o=Math.cos(i),c=Math.sin(i);return this.set(n*o,n*c,-n*(o*s+c*a)+s+e,-r*c,r*o,-r*(-c*s+o*a)+a+A,0,0,1),this}scale(e,A){return this.premultiply(Wo.makeScale(e,A)),this}rotate(e){return this.premultiply(Wo.makeRotation(-e)),this}translate(e,A){return this.premultiply(Wo.makeTranslation(e,A)),this}makeTranslation(e,A){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,A,0,0,1),this}makeRotation(e){const A=Math.cos(e),n=Math.sin(e);return this.set(A,-n,0,n,A,0,0,0,1),this}makeScale(e,A){return this.set(e,0,0,0,A,0,0,0,1),this}equals(e){const A=this.elements,n=e.elements;for(let r=0;r<9;r++)if(A[r]!==n[r])return!1;return!0}fromArray(e,A=0){for(let n=0;n<9;n++)this.elements[n]=e[n+A];return this}toArray(e=[],A=0){const n=this.elements;return e[A]=n[0],e[A+1]=n[1],e[A+2]=n[2],e[A+3]=n[3],e[A+4]=n[4],e[A+5]=n[5],e[A+6]=n[6],e[A+7]=n[7],e[A+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Ge;function Pp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dv(){const t=Pa("canvas");return t.style.display="block",t}const Bh={};function pv(t){t in Bh||(Bh[t]=!0,console.warn(t))}const vh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[Dn]:{transfer:Ra,primaries:La,toReference:t=>t,fromReference:t=>t},[LA]:{transfer:at,primaries:La,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ao]:{transfer:Ra,primaries:Da,toReference:t=>t.applyMatrix3(wh),fromReference:t=>t.applyMatrix3(vh)},[Jl]:{transfer:at,primaries:Da,toReference:t=>t.convertSRGBToLinear().applyMatrix3(wh),fromReference:t=>t.applyMatrix3(vh).convertLinearToSRGB()}},gv=new Set([Dn,ao]),Ze={enabled:!0,_workingColorSpace:Dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!gv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,A){if(this.enabled===!1||e===A||!e||!A)return t;const n=ps[e].toReference,r=ps[A].fromReference;return r(n(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ps[t].primaries},getTransfer:function(t){return t===wn?Ra:ps[t].transfer}};function jr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let dr;class mv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let A;if(e instanceof HTMLCanvasElement)A=e;else{dr===void 0&&(dr=Pa("canvas")),dr.width=e.width,dr.height=e.height;const n=dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),A=dr}return A.width>2048||A.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),A.toDataURL("image/jpeg",.6)):A.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const A=Pa("canvas");A.width=e.width,A.height=e.height;const n=A.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let s=0;s<i.length;s++)i[s]=jr(i[s]/255)*255;return n.putImageData(r,0,0),A}else if(e.data){const A=e.data.slice(0);for(let n=0;n<A.length;n++)A instanceof Uint8Array||A instanceof Uint8ClampedArray?A[n]=Math.floor(jr(A[n]/255)*255):A[n]=jr(A[n]);return{data:A,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bv=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const A=e===void 0||typeof e=="string";if(!A&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?i.push(jo(r[s].image)):i.push(jo(r[s]))}else i=jo(r);n.url=i}return A||(e.images[this.uuid]=n),n}}function jo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vv=0;class Zt extends hi{constructor(e=Zt.DEFAULT_IMAGE,A=Zt.DEFAULT_MAPPING,n=Zn,r=Zn,i=UA,s=er,a=OA,o=bn,c=Zt.DEFAULT_ANISOTROPY,l=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=rs(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=A,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const A=e===void 0||typeof e=="string";if(!A&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),A||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rl:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rl:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Sp;Zt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,A=0,n=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=A,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,A,n,r){return this.x=e,this.y=A,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,A){switch(e){case 0:this.x=A;break;case 1:this.y=A;break;case 2:this.z=A;break;case 3:this.w=A;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,A){return this.x=e.x+A.x,this.y=e.y+A.y,this.z=e.z+A.z,this.w=e.w+A.w,this}addScaledVector(e,A){return this.x+=e.x*A,this.y+=e.y*A,this.z+=e.z*A,this.w+=e.w*A,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,A){return this.x=e.x-A.x,this.y=e.y-A.y,this.z=e.z-A.z,this.w=e.w-A.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const A=this.x,n=this.y,r=this.z,i=this.w,s=e.elements;return this.x=s[0]*A+s[4]*n+s[8]*r+s[12]*i,this.y=s[1]*A+s[5]*n+s[9]*r+s[13]*i,this.z=s[2]*A+s[6]*n+s[10]*r+s[14]*i,this.w=s[3]*A+s[7]*n+s[11]*r+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const A=Math.sqrt(1-e.w*e.w);return A<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/A,this.y=e.y/A,this.z=e.z/A),this}setAxisAngleFromRotationMatrix(e){let A,n,r,i;const o=e.elements,c=o[0],l=o[4],u=o[8],h=o[1],p=o[5],g=o[9],m=o[2],d=o[6],f=o[10];if(Math.abs(l-h)<.01&&Math.abs(u-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;A=Math.PI;const v=(c+1)/2,y=(p+1)/2,b=(f+1)/2,E=(l+h)/4,U=(u+m)/4,I=(g+d)/4;return v>y&&v>b?v<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(v),r=E/n,i=U/n):y>b?y<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(y),n=E/r,i=I/r):b<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(b),n=U/i,r=I/i),this.set(n,r,i,A),this}let x=Math.sqrt((d-g)*(d-g)+(u-m)*(u-m)+(h-l)*(h-l));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(u-m)/x,this.z=(h-l)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,A){return this.x=Math.max(e.x,Math.min(A.x,this.x)),this.y=Math.max(e.y,Math.min(A.y,this.y)),this.z=Math.max(e.z,Math.min(A.z,this.z)),this.w=Math.max(e.w,Math.min(A.w,this.w)),this}clampScalar(e,A){return this.x=Math.max(e,Math.min(A,this.x)),this.y=Math.max(e,Math.min(A,this.y)),this.z=Math.max(e,Math.min(A,this.z)),this.w=Math.max(e,Math.min(A,this.w)),this}clampLength(e,A){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(A,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,A){return this.x+=(e.x-this.x)*A,this.y+=(e.y-this.y)*A,this.z+=(e.z-this.z)*A,this.w+=(e.w-this.w)*A,this}lerpVectors(e,A,n){return this.x=e.x+(A.x-e.x)*n,this.y=e.y+(A.y-e.y)*n,this.z=e.z+(A.z-e.z)*n,this.w=e.w+(A.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,A=0){return this.x=e[A],this.y=e[A+1],this.z=e[A+2],this.w=e[A+3],this}toArray(e=[],A=0){return e[A]=this.x,e[A+1]=this.y,e[A+2]=this.z,e[A+3]=this.w,e}fromBufferAttribute(e,A){return this.x=e.getX(A),this.y=e.getY(A),this.z=e.getZ(A),this.w=e.getW(A),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wv extends hi{constructor(e=1,A=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=A,this.depth=1,this.scissor=new ft(0,0,e,A),this.scissorTest=!1,this.viewport=new ft(0,0,e,A);const r={width:e,height:A,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:UA,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const i=new Zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=i.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,A,n=1){if(this.width!==e||this.height!==A||this.depth!==n){this.width=e,this.height=A,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=A,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,A),this.scissor.set(0,0,e,A)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const A=Object.assign({},e.texture.image);return this.texture.source=new Np(A),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends wv{constructor(e=1,A=1,n={}){super(e,A,n),this.isWebGLRenderTarget=!0}}class Op extends Zt{constructor(e=null,A=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:A,height:n,depth:r},this.magFilter=pA,this.minFilter=pA,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xv extends Zt{constructor(e=null,A=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:A,height:n,depth:r},this.magFilter=pA,this.minFilter=pA,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,A=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=A,this._z=n,this._w=r}static slerpFlat(e,A,n,r,i,s,a){let o=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3];const h=i[s+0],p=i[s+1],g=i[s+2],m=i[s+3];if(a===0){e[A+0]=o,e[A+1]=c,e[A+2]=l,e[A+3]=u;return}if(a===1){e[A+0]=h,e[A+1]=p,e[A+2]=g,e[A+3]=m;return}if(u!==m||o!==h||c!==p||l!==g){let d=1-a;const f=o*h+c*p+l*g+u*m,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),E=Math.atan2(b,f*x);d=Math.sin(d*E)/b,a=Math.sin(a*E)/b}const y=a*x;if(o=o*d+h*y,c=c*d+p*y,l=l*d+g*y,u=u*d+m*y,d===1-a){const b=1/Math.sqrt(o*o+c*c+l*l+u*u);o*=b,c*=b,l*=b,u*=b}}e[A]=o,e[A+1]=c,e[A+2]=l,e[A+3]=u}static multiplyQuaternionsFlat(e,A,n,r,i,s){const a=n[r],o=n[r+1],c=n[r+2],l=n[r+3],u=i[s],h=i[s+1],p=i[s+2],g=i[s+3];return e[A]=a*g+l*u+o*p-c*h,e[A+1]=o*g+l*h+c*u-a*p,e[A+2]=c*g+l*p+a*h-o*u,e[A+3]=l*g-a*u-o*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,A,n,r){return this._x=e,this._y=A,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,A=!0){const n=e._x,r=e._y,i=e._z,s=e._order,a=Math.cos,o=Math.sin,c=a(n/2),l=a(r/2),u=a(i/2),h=o(n/2),p=o(r/2),g=o(i/2);switch(s){case"XYZ":this._x=h*l*u+c*p*g,this._y=c*p*u-h*l*g,this._z=c*l*g+h*p*u,this._w=c*l*u-h*p*g;break;case"YXZ":this._x=h*l*u+c*p*g,this._y=c*p*u-h*l*g,this._z=c*l*g-h*p*u,this._w=c*l*u+h*p*g;break;case"ZXY":this._x=h*l*u-c*p*g,this._y=c*p*u+h*l*g,this._z=c*l*g+h*p*u,this._w=c*l*u-h*p*g;break;case"ZYX":this._x=h*l*u-c*p*g,this._y=c*p*u+h*l*g,this._z=c*l*g-h*p*u,this._w=c*l*u+h*p*g;break;case"YZX":this._x=h*l*u+c*p*g,this._y=c*p*u+h*l*g,this._z=c*l*g-h*p*u,this._w=c*l*u-h*p*g;break;case"XZY":this._x=h*l*u-c*p*g,this._y=c*p*u-h*l*g,this._z=c*l*g+h*p*u,this._w=c*l*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return A===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,A){const n=A/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const A=e.elements,n=A[0],r=A[4],i=A[8],s=A[1],a=A[5],o=A[9],c=A[2],l=A[6],u=A[10],h=n+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(l-o)*p,this._y=(i-c)*p,this._z=(s-r)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(l-o)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(i+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(i-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(o+l)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(s-r)/p,this._x=(i+c)/p,this._y=(o+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,A){let n=e.dot(A)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*A.z-e.z*A.y,this._y=e.z*A.x-e.x*A.z,this._z=e.x*A.y-e.y*A.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,A){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,A/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,A){const n=e._x,r=e._y,i=e._z,s=e._w,a=A._x,o=A._y,c=A._z,l=A._w;return this._x=n*l+s*a+r*c-i*o,this._y=r*l+s*o+i*a-n*c,this._z=i*l+s*c+n*o-r*a,this._w=s*l-n*a-r*o-i*c,this._onChangeCallback(),this}slerp(e,A){if(A===0)return this;if(A===1)return this.copy(e);const n=this._x,r=this._y,i=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=i,this;const o=1-a*a;if(o<=Number.EPSILON){const p=1-A;return this._w=p*s+A*this._w,this._x=p*n+A*this._x,this._y=p*r+A*this._y,this._z=p*i+A*this._z,this.normalize(),this}const c=Math.sqrt(o),l=Math.atan2(c,a),u=Math.sin((1-A)*l)/c,h=Math.sin(A*l)/c;return this._w=s*u+this._w*h,this._x=n*u+this._x*h,this._y=r*u+this._y*h,this._z=i*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,A,n){return this.copy(e).slerp(A,n)}random(){const e=2*Math.PI*Math.random(),A=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(A),i*Math.cos(A))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,A=0){return this._x=e[A],this._y=e[A+1],this._z=e[A+2],this._w=e[A+3],this._onChangeCallback(),this}toArray(e=[],A=0){return e[A]=this._x,e[A+1]=this._y,e[A+2]=this._z,e[A+3]=this._w,e}fromBufferAttribute(e,A){return this._x=e.getX(A),this._y=e.getY(A),this._z=e.getZ(A),this._w=e.getW(A),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,A=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=A,this.z=n}set(e,A,n){return n===void 0&&(n=this.z),this.x=e,this.y=A,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,A){switch(e){case 0:this.x=A;break;case 1:this.y=A;break;case 2:this.z=A;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,A){return this.x=e.x+A.x,this.y=e.y+A.y,this.z=e.z+A.z,this}addScaledVector(e,A){return this.x+=e.x*A,this.y+=e.y*A,this.z+=e.z*A,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,A){return this.x=e.x-A.x,this.y=e.y-A.y,this.z=e.z-A.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,A){return this.x=e.x*A.x,this.y=e.y*A.y,this.z=e.z*A.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,A){return this.applyQuaternion(xh.setFromAxisAngle(e,A))}applyMatrix3(e){const A=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*A+i[3]*n+i[6]*r,this.y=i[1]*A+i[4]*n+i[7]*r,this.z=i[2]*A+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const A=this.x,n=this.y,r=this.z,i=e.elements,s=1/(i[3]*A+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*A+i[4]*n+i[8]*r+i[12])*s,this.y=(i[1]*A+i[5]*n+i[9]*r+i[13])*s,this.z=(i[2]*A+i[6]*n+i[10]*r+i[14])*s,this}applyQuaternion(e){const A=this.x,n=this.y,r=this.z,i=e.x,s=e.y,a=e.z,o=e.w,c=2*(s*r-a*n),l=2*(a*A-i*r),u=2*(i*n-s*A);return this.x=A+o*c+s*u-a*l,this.y=n+o*l+a*c-i*u,this.z=r+o*u+i*l-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const A=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*A+i[4]*n+i[8]*r,this.y=i[1]*A+i[5]*n+i[9]*r,this.z=i[2]*A+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,A){return this.x=Math.max(e.x,Math.min(A.x,this.x)),this.y=Math.max(e.y,Math.min(A.y,this.y)),this.z=Math.max(e.z,Math.min(A.z,this.z)),this}clampScalar(e,A){return this.x=Math.max(e,Math.min(A,this.x)),this.y=Math.max(e,Math.min(A,this.y)),this.z=Math.max(e,Math.min(A,this.z)),this}clampLength(e,A){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(A,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,A){return this.x+=(e.x-this.x)*A,this.y+=(e.y-this.y)*A,this.z+=(e.z-this.z)*A,this}lerpVectors(e,A,n){return this.x=e.x+(A.x-e.x)*n,this.y=e.y+(A.y-e.y)*n,this.z=e.z+(A.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,A){const n=e.x,r=e.y,i=e.z,s=A.x,a=A.y,o=A.z;return this.x=r*o-i*a,this.y=i*s-n*o,this.z=n*a-r*s,this}projectOnVector(e){const A=e.lengthSq();if(A===0)return this.set(0,0,0);const n=e.dot(this)/A;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const A=Math.sqrt(this.lengthSq()*e.lengthSq());if(A===0)return Math.PI/2;const n=this.dot(e)/A;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const A=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return A*A+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,A,n){const r=Math.sin(A)*e;return this.x=r*Math.sin(n),this.y=Math.cos(A)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,A,n){return this.x=e*Math.sin(A),this.y=n,this.z=e*Math.cos(A),this}setFromMatrixPosition(e){const A=e.elements;return this.x=A[12],this.y=A[13],this.z=A[14],this}setFromMatrixScale(e){const A=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=A,this.y=n,this.z=r,this}setFromMatrixColumn(e,A){return this.fromArray(e.elements,A*4)}setFromMatrix3Column(e,A){return this.fromArray(e.elements,A*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,A=0){return this.x=e[A],this.y=e[A+1],this.z=e[A+2],this}toArray(e=[],A=0){return e[A]=this.x,e[A+1]=this.y,e[A+2]=this.z,e}fromBufferAttribute(e,A){return this.x=e.getX(A),this.y=e.getY(A),this.z=e.getZ(A),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,A=Math.random()*2-1,n=Math.sqrt(1-A*A);return this.x=n*Math.cos(e),this.y=A,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new P,xh=new is;class ss{constructor(e=new P(1/0,1/0,1/0),A=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=A}set(e,A){return this.min.copy(e),this.max.copy(A),this}setFromArray(e){this.makeEmpty();for(let A=0,n=e.length;A<n;A+=3)this.expandByPoint(xA.fromArray(e,A));return this}setFromBufferAttribute(e){this.makeEmpty();for(let A=0,n=e.count;A<n;A++)this.expandByPoint(xA.fromBufferAttribute(e,A));return this}setFromPoints(e){this.makeEmpty();for(let A=0,n=e.length;A<n;A++)this.expandByPoint(e[A]);return this}setFromCenterAndSize(e,A){const n=xA.copy(A).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,A=!1){return this.makeEmpty(),this.expandByObject(e,A)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,A=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const i=n.getAttribute("position");if(A===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=i.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,xA):xA.fromBufferAttribute(i,s),xA.applyMatrix4(e.matrixWorld),this.expandByPoint(xA);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const r=e.children;for(let i=0,s=r.length;i<s;i++)this.expandByObject(r[i],A);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,A){return A.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xA),xA.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let A,n;return e.normal.x>0?(A=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(A=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(A+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(A+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(A+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(A+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),A<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),ms.subVectors(this.max,wi),pr.subVectors(e.a,wi),gr.subVectors(e.b,wi),mr.subVectors(e.c,wi),cn.subVectors(gr,pr),ln.subVectors(mr,gr),On.subVectors(pr,mr);let A=[0,-cn.z,cn.y,0,-ln.z,ln.y,0,-On.z,On.y,cn.z,0,-cn.x,ln.z,0,-ln.x,On.z,0,-On.x,-cn.y,cn.x,0,-ln.y,ln.x,0,-On.y,On.x,0];return!$o(A,pr,gr,mr,ms)||(A=[1,0,0,0,1,0,0,0,1],!$o(A,pr,gr,mr,ms))?!1:(Bs.crossVectors(cn,ln),A=[Bs.x,Bs.y,Bs.z],$o(A,pr,gr,mr,ms))}clampPoint(e,A){return A.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xA).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xA).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(XA[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),XA[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),XA[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),XA[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),XA[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),XA[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),XA[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),XA[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(XA),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const XA=[new P,new P,new P,new P,new P,new P,new P,new P],xA=new P,gs=new ss,pr=new P,gr=new P,mr=new P,cn=new P,ln=new P,On=new P,wi=new P,ms=new P,Bs=new P,kn=new P;function $o(t,e,A,n,r){for(let i=0,s=t.length-3;i<=s;i+=3){kn.fromArray(t,i);const a=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),o=e.dot(kn),c=A.dot(kn),l=n.dot(kn);if(Math.max(-Math.max(o,c,l),Math.min(o,c,l))>a)return!1}return!0}const _v=new ss,xi=new P,Jo=new P;class ql{constructor(e=new P,A=-1){this.isSphere=!0,this.center=e,this.radius=A}set(e,A){return this.center.copy(e),this.radius=A,this}setFromPoints(e,A){const n=this.center;A!==void 0?n.copy(A):_v.setFromPoints(e).getCenter(n);let r=0;for(let i=0,s=e.length;i<s;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const A=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=A*A}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,A){const n=this.center.distanceToSquared(e);return A.copy(e),n>this.radius*this.radius&&(A.sub(this.center).normalize(),A.multiplyScalar(this.radius).add(this.center)),A}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const A=xi.lengthSq();if(A>this.radius*this.radius){const n=Math.sqrt(A),r=(n-this.radius)*.5;this.center.addScaledVector(xi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(Jo)),this.expandByPoint(xi.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jA=new P,qo=new P,vs=new P,un=new P,Zo=new P,ws=new P,ec=new P;class Cv{constructor(e=new P,A=new P(0,0,-1)){this.origin=e,this.direction=A}set(e,A){return this.origin.copy(e),this.direction.copy(A),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,A){return A.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jA)),this}closestPointToPoint(e,A){A.subVectors(e,this.origin);const n=A.dot(this.direction);return n<0?A.copy(this.origin):A.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const A=jA.subVectors(e,this.origin).dot(this.direction);return A<0?this.origin.distanceToSquared(e):(jA.copy(this.origin).addScaledVector(this.direction,A),jA.distanceToSquared(e))}distanceSqToSegment(e,A,n,r){qo.copy(e).add(A).multiplyScalar(.5),vs.copy(A).sub(e).normalize(),un.copy(this.origin).sub(qo);const i=e.distanceTo(A)*.5,s=-this.direction.dot(vs),a=un.dot(this.direction),o=-un.dot(vs),c=un.lengthSq(),l=Math.abs(1-s*s);let u,h,p,g;if(l>0)if(u=s*o-a,h=s*a-o,g=i*l,u>=0)if(h>=-g)if(h<=g){const m=1/l;u*=m,h*=m,p=u*(u+s*h+2*a)+h*(s*u+h+2*o)+c}else h=i,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+c;else h=-i,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+c;else h<=-g?(u=Math.max(0,-(-s*i+a)),h=u>0?-i:Math.min(Math.max(-i,-o),i),p=-u*u+h*(h+2*o)+c):h<=g?(u=0,h=Math.min(Math.max(-i,-o),i),p=h*(h+2*o)+c):(u=Math.max(0,-(s*i+a)),h=u>0?i:Math.min(Math.max(-i,-o),i),p=-u*u+h*(h+2*o)+c);else h=s>0?-i:i,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qo).addScaledVector(vs,h),p}intersectSphere(e,A){jA.subVectors(e.center,this.origin);const n=jA.dot(this.direction),r=jA.dot(jA)-n*n,i=e.radius*e.radius;if(r>i)return null;const s=Math.sqrt(i-r),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,A):this.at(a,A)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const A=e.normal.dot(this.direction);if(A===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/A;return n>=0?n:null}intersectPlane(e,A){const n=this.distanceToPlane(e);return n===null?null:this.at(n,A)}intersectsPlane(e){const A=e.distanceToPoint(this.origin);return A===0||e.normal.dot(this.direction)*A<0}intersectBox(e,A){let n,r,i,s,a,o;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),l>=0?(i=(e.min.y-h.y)*l,s=(e.max.y-h.y)*l):(i=(e.max.y-h.y)*l,s=(e.min.y-h.y)*l),n>s||i>r||((i>n||isNaN(n))&&(n=i),(s<r||isNaN(r))&&(r=s),u>=0?(a=(e.min.z-h.z)*u,o=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,o=(e.min.z-h.z)*u),n>o||a>r)||((a>n||n!==n)&&(n=a),(o<r||r!==r)&&(r=o),r<0)?null:this.at(n>=0?n:r,A)}intersectsBox(e){return this.intersectBox(e,jA)!==null}intersectTriangle(e,A,n,r,i){Zo.subVectors(A,e),ws.subVectors(n,e),ec.crossVectors(Zo,ws);let s=this.direction.dot(ec),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;un.subVectors(this.origin,e);const o=a*this.direction.dot(ws.crossVectors(un,ws));if(o<0)return null;const c=a*this.direction.dot(Zo.cross(un));if(c<0||o+c>s)return null;const l=-a*un.dot(ec);return l<0?null:this.at(l/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,A,n,r,i,s,a,o,c,l,u,h,p,g,m,d){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,A,n,r,i,s,a,o,c,l,u,h,p,g,m,d)}set(e,A,n,r,i,s,a,o,c,l,u,h,p,g,m,d){const f=this.elements;return f[0]=e,f[4]=A,f[8]=n,f[12]=r,f[1]=i,f[5]=s,f[9]=a,f[13]=o,f[2]=c,f[6]=l,f[10]=u,f[14]=h,f[3]=p,f[7]=g,f[11]=m,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const A=this.elements,n=e.elements;return A[0]=n[0],A[1]=n[1],A[2]=n[2],A[3]=n[3],A[4]=n[4],A[5]=n[5],A[6]=n[6],A[7]=n[7],A[8]=n[8],A[9]=n[9],A[10]=n[10],A[11]=n[11],A[12]=n[12],A[13]=n[13],A[14]=n[14],A[15]=n[15],this}copyPosition(e){const A=this.elements,n=e.elements;return A[12]=n[12],A[13]=n[13],A[14]=n[14],this}setFromMatrix3(e){const A=e.elements;return this.set(A[0],A[3],A[6],0,A[1],A[4],A[7],0,A[2],A[5],A[8],0,0,0,0,1),this}extractBasis(e,A,n){return e.setFromMatrixColumn(this,0),A.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,A,n){return this.set(e.x,A.x,n.x,0,e.y,A.y,n.y,0,e.z,A.z,n.z,0,0,0,0,1),this}extractRotation(e){const A=this.elements,n=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),i=1/Br.setFromMatrixColumn(e,1).length(),s=1/Br.setFromMatrixColumn(e,2).length();return A[0]=n[0]*r,A[1]=n[1]*r,A[2]=n[2]*r,A[3]=0,A[4]=n[4]*i,A[5]=n[5]*i,A[6]=n[6]*i,A[7]=0,A[8]=n[8]*s,A[9]=n[9]*s,A[10]=n[10]*s,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,this}makeRotationFromEuler(e){const A=this.elements,n=e.x,r=e.y,i=e.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const h=s*l,p=s*u,g=a*l,m=a*u;A[0]=o*l,A[4]=-o*u,A[8]=c,A[1]=p+g*c,A[5]=h-m*c,A[9]=-a*o,A[2]=m-h*c,A[6]=g+p*c,A[10]=s*o}else if(e.order==="YXZ"){const h=o*l,p=o*u,g=c*l,m=c*u;A[0]=h+m*a,A[4]=g*a-p,A[8]=s*c,A[1]=s*u,A[5]=s*l,A[9]=-a,A[2]=p*a-g,A[6]=m+h*a,A[10]=s*o}else if(e.order==="ZXY"){const h=o*l,p=o*u,g=c*l,m=c*u;A[0]=h-m*a,A[4]=-s*u,A[8]=g+p*a,A[1]=p+g*a,A[5]=s*l,A[9]=m-h*a,A[2]=-s*c,A[6]=a,A[10]=s*o}else if(e.order==="ZYX"){const h=s*l,p=s*u,g=a*l,m=a*u;A[0]=o*l,A[4]=g*c-p,A[8]=h*c+m,A[1]=o*u,A[5]=m*c+h,A[9]=p*c-g,A[2]=-c,A[6]=a*o,A[10]=s*o}else if(e.order==="YZX"){const h=s*o,p=s*c,g=a*o,m=a*c;A[0]=o*l,A[4]=m-h*u,A[8]=g*u+p,A[1]=u,A[5]=s*l,A[9]=-a*l,A[2]=-c*l,A[6]=p*u+g,A[10]=h-m*u}else if(e.order==="XZY"){const h=s*o,p=s*c,g=a*o,m=a*c;A[0]=o*l,A[4]=-u,A[8]=c*l,A[1]=h*u+m,A[5]=s*l,A[9]=p*u-g,A[2]=g*u-p,A[6]=a*l,A[10]=m*u+h}return A[3]=0,A[7]=0,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ev,e,yv)}lookAt(e,A,n){const r=this.elements;return nA.subVectors(e,A),nA.lengthSq()===0&&(nA.z=1),nA.normalize(),hn.crossVectors(n,nA),hn.lengthSq()===0&&(Math.abs(n.z)===1?nA.x+=1e-4:nA.z+=1e-4,nA.normalize(),hn.crossVectors(n,nA)),hn.normalize(),xs.crossVectors(nA,hn),r[0]=hn.x,r[4]=xs.x,r[8]=nA.x,r[1]=hn.y,r[5]=xs.y,r[9]=nA.y,r[2]=hn.z,r[6]=xs.z,r[10]=nA.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,A){const n=e.elements,r=A.elements,i=this.elements,s=n[0],a=n[4],o=n[8],c=n[12],l=n[1],u=n[5],h=n[9],p=n[13],g=n[2],m=n[6],d=n[10],f=n[14],x=n[3],v=n[7],y=n[11],b=n[15],E=r[0],U=r[4],I=r[8],C=r[12],B=r[1],Q=r[5],R=r[9],T=r[13],D=r[2],N=r[6],X=r[10],q=r[14],k=r[3],j=r[7],J=r[11],ie=r[15];return i[0]=s*E+a*B+o*D+c*k,i[4]=s*U+a*Q+o*N+c*j,i[8]=s*I+a*R+o*X+c*J,i[12]=s*C+a*T+o*q+c*ie,i[1]=l*E+u*B+h*D+p*k,i[5]=l*U+u*Q+h*N+p*j,i[9]=l*I+u*R+h*X+p*J,i[13]=l*C+u*T+h*q+p*ie,i[2]=g*E+m*B+d*D+f*k,i[6]=g*U+m*Q+d*N+f*j,i[10]=g*I+m*R+d*X+f*J,i[14]=g*C+m*T+d*q+f*ie,i[3]=x*E+v*B+y*D+b*k,i[7]=x*U+v*Q+y*N+b*j,i[11]=x*I+v*R+y*X+b*J,i[15]=x*C+v*T+y*q+b*ie,this}multiplyScalar(e){const A=this.elements;return A[0]*=e,A[4]*=e,A[8]*=e,A[12]*=e,A[1]*=e,A[5]*=e,A[9]*=e,A[13]*=e,A[2]*=e,A[6]*=e,A[10]*=e,A[14]*=e,A[3]*=e,A[7]*=e,A[11]*=e,A[15]*=e,this}determinant(){const e=this.elements,A=e[0],n=e[4],r=e[8],i=e[12],s=e[1],a=e[5],o=e[9],c=e[13],l=e[2],u=e[6],h=e[10],p=e[14],g=e[3],m=e[7],d=e[11],f=e[15];return g*(+i*o*u-r*c*u-i*a*h+n*c*h+r*a*p-n*o*p)+m*(+A*o*p-A*c*h+i*s*h-r*s*p+r*c*l-i*o*l)+d*(+A*c*u-A*a*p-i*s*u+n*s*p+i*a*l-n*c*l)+f*(-r*a*l-A*o*u+A*a*h+r*s*u-n*s*h+n*o*l)}transpose(){const e=this.elements;let A;return A=e[1],e[1]=e[4],e[4]=A,A=e[2],e[2]=e[8],e[8]=A,A=e[6],e[6]=e[9],e[9]=A,A=e[3],e[3]=e[12],e[12]=A,A=e[7],e[7]=e[13],e[13]=A,A=e[11],e[11]=e[14],e[14]=A,this}setPosition(e,A,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=A,r[14]=n),this}invert(){const e=this.elements,A=e[0],n=e[1],r=e[2],i=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],h=e[10],p=e[11],g=e[12],m=e[13],d=e[14],f=e[15],x=u*d*c-m*h*c+m*o*p-a*d*p-u*o*f+a*h*f,v=g*h*c-l*d*c-g*o*p+s*d*p+l*o*f-s*h*f,y=l*m*c-g*u*c+g*a*p-s*m*p-l*a*f+s*u*f,b=g*u*o-l*m*o-g*a*h+s*m*h+l*a*d-s*u*d,E=A*x+n*v+r*y+i*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/E;return e[0]=x*U,e[1]=(m*h*i-u*d*i-m*r*p+n*d*p+u*r*f-n*h*f)*U,e[2]=(a*d*i-m*o*i+m*r*c-n*d*c-a*r*f+n*o*f)*U,e[3]=(u*o*i-a*h*i-u*r*c+n*h*c+a*r*p-n*o*p)*U,e[4]=v*U,e[5]=(l*d*i-g*h*i+g*r*p-A*d*p-l*r*f+A*h*f)*U,e[6]=(g*o*i-s*d*i-g*r*c+A*d*c+s*r*f-A*o*f)*U,e[7]=(s*h*i-l*o*i+l*r*c-A*h*c-s*r*p+A*o*p)*U,e[8]=y*U,e[9]=(g*u*i-l*m*i-g*n*p+A*m*p+l*n*f-A*u*f)*U,e[10]=(s*m*i-g*a*i+g*n*c-A*m*c-s*n*f+A*a*f)*U,e[11]=(l*a*i-s*u*i-l*n*c+A*u*c+s*n*p-A*a*p)*U,e[12]=b*U,e[13]=(l*m*r-g*u*r+g*n*h-A*m*h-l*n*d+A*u*d)*U,e[14]=(g*a*r-s*m*r-g*n*o+A*m*o+s*n*d-A*a*d)*U,e[15]=(s*u*r-l*a*r+l*n*o-A*u*o-s*n*h+A*a*h)*U,this}scale(e){const A=this.elements,n=e.x,r=e.y,i=e.z;return A[0]*=n,A[4]*=r,A[8]*=i,A[1]*=n,A[5]*=r,A[9]*=i,A[2]*=n,A[6]*=r,A[10]*=i,A[3]*=n,A[7]*=r,A[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,A=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(A,n,r))}makeTranslation(e,A,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,A,0,0,1,n,0,0,0,1),this}makeRotationX(e){const A=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,A,-n,0,0,n,A,0,0,0,0,1),this}makeRotationY(e){const A=Math.cos(e),n=Math.sin(e);return this.set(A,0,n,0,0,1,0,0,-n,0,A,0,0,0,0,1),this}makeRotationZ(e){const A=Math.cos(e),n=Math.sin(e);return this.set(A,-n,0,0,n,A,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,A){const n=Math.cos(A),r=Math.sin(A),i=1-n,s=e.x,a=e.y,o=e.z,c=i*s,l=i*a;return this.set(c*s+n,c*a-r*o,c*o+r*a,0,c*a+r*o,l*a+n,l*o-r*s,0,c*o-r*a,l*o+r*s,i*o*o+n,0,0,0,0,1),this}makeScale(e,A,n){return this.set(e,0,0,0,0,A,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,A,n,r,i,s){return this.set(1,n,i,0,e,1,s,0,A,r,1,0,0,0,0,1),this}compose(e,A,n){const r=this.elements,i=A._x,s=A._y,a=A._z,o=A._w,c=i+i,l=s+s,u=a+a,h=i*c,p=i*l,g=i*u,m=s*l,d=s*u,f=a*u,x=o*c,v=o*l,y=o*u,b=n.x,E=n.y,U=n.z;return r[0]=(1-(m+f))*b,r[1]=(p+y)*b,r[2]=(g-v)*b,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(h+f))*E,r[6]=(d+x)*E,r[7]=0,r[8]=(g+v)*U,r[9]=(d-x)*U,r[10]=(1-(h+m))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,A,n){const r=this.elements;let i=Br.set(r[0],r[1],r[2]).length();const s=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],_A.copy(this);const c=1/i,l=1/s,u=1/a;return _A.elements[0]*=c,_A.elements[1]*=c,_A.elements[2]*=c,_A.elements[4]*=l,_A.elements[5]*=l,_A.elements[6]*=l,_A.elements[8]*=u,_A.elements[9]*=u,_A.elements[10]*=u,A.setFromRotationMatrix(_A),n.x=i,n.y=s,n.z=a,this}makePerspective(e,A,n,r,i,s,a=rn){const o=this.elements,c=2*i/(A-e),l=2*i/(n-r),u=(A+e)/(A-e),h=(n+r)/(n-r);let p,g;if(a===rn)p=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(a===Ha)p=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,A,n,r,i,s,a=rn){const o=this.elements,c=1/(A-e),l=1/(n-r),u=1/(s-i),h=(A+e)*c,p=(n+r)*l;let g,m;if(a===rn)g=(s+i)*u,m=-2*u;else if(a===Ha)g=i*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=m,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const A=this.elements,n=e.elements;for(let r=0;r<16;r++)if(A[r]!==n[r])return!1;return!0}fromArray(e,A=0){for(let n=0;n<16;n++)this.elements[n]=e[n+A];return this}toArray(e=[],A=0){const n=this.elements;return e[A]=n[0],e[A+1]=n[1],e[A+2]=n[2],e[A+3]=n[3],e[A+4]=n[4],e[A+5]=n[5],e[A+6]=n[6],e[A+7]=n[7],e[A+8]=n[8],e[A+9]=n[9],e[A+10]=n[10],e[A+11]=n[11],e[A+12]=n[12],e[A+13]=n[13],e[A+14]=n[14],e[A+15]=n[15],e}}const Br=new P,_A=new gt,Ev=new P(0,0,0),yv=new P(1,1,1),hn=new P,xs=new P,nA=new P,_h=new gt,Ch=new is;class VA{constructor(e=0,A=0,n=0,r=VA.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=A,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,A,n,r=this._order){return this._x=e,this._y=A,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,A=this._order,n=!0){const r=e.elements,i=r[0],s=r[4],a=r[8],o=r[1],c=r[5],l=r[9],u=r[2],h=r[6],p=r[10];switch(A){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(o,i));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+A)}return this._order=A,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,A,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,A,n)}setFromVector3(e,A=this._order){return this.set(e.x,e.y,e.z,A)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],A=0){return e[A]=this._x,e[A+1]=this._y,e[A+2]=this._z,e[A+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}VA.DEFAULT_ORDER="XYZ";class kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uv=0;const Eh=new P,vr=new is,YA=new gt,_s=new P,_i=new P,Sv=new P,bv=new is,yh=new P(1,0,0),Uh=new P(0,1,0),Sh=new P(0,0,1),bh={type:"added"},Mv={type:"removed"},wr={type:"childadded",child:null},tc={type:"childremoved",child:null};class eA extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=eA.DEFAULT_UP.clone();const e=new P,A=new VA,n=new is,r=new P(1,1,1);function i(){n.setFromEuler(A,!1)}function s(){A.setFromQuaternion(n,void 0,!1)}A._onChange(i),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:A},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ge}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=eA.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=eA.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,A){this.quaternion.setFromAxisAngle(e,A)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,A){return vr.setFromAxisAngle(e,A),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,A){return vr.setFromAxisAngle(e,A),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,A){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(A)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(YA.copy(this.matrixWorld).invert())}lookAt(e,A,n){e.isVector3?_s.copy(e):_s.set(e,A,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?YA.lookAt(_i,_s,this.up):YA.lookAt(_s,_i,this.up),this.quaternion.setFromRotationMatrix(YA),r&&(YA.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(YA),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.add(arguments[A]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bh),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const A=this.children.indexOf(e);return A!==-1&&(e.parent=null,this.children.splice(A,1),e.dispatchEvent(Mv),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),YA.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),YA.multiply(e.parent.matrixWorld)),e.applyMatrix4(YA),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bh),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,A){if(this[e]===A)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,A);if(s!==void 0)return s}}getObjectsByProperty(e,A,n=[]){this[e]===A&&n.push(this);const r=this.children;for(let i=0,s=r.length;i<s;i++)r[i].getObjectsByProperty(e,A,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,Sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,bv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const A=this.matrixWorld.elements;return e.set(A[8],A[9],A[10]).normalize()}raycast(){}traverse(e){e(this);const A=this.children;for(let n=0,r=A.length;n<r;n++)A[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const A=this.children;for(let n=0,r=A.length;n<r;n++)A[n].traverseVisible(e)}traverseAncestors(e){const A=this.parent;A!==null&&(e(A),A.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const A=this.children;for(let n=0,r=A.length;n<r;n++){const i=A[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,A){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),A===!0){const r=this.children;for(let i=0,s=r.length;i<s;i++){const a=r[i];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const A=e===void 0||typeof e=="string",n={};A&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let c=0,l=o.length;c<l;c++){const u=o[c];i(e.shapes,u)}else i(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(i(e.materials,this.material[o]));r.material=a}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];r.animations.push(i(e.animations,o))}}if(A){const a=s(e.geometries),o=s(e.materials),c=s(e.textures),l=s(e.images),u=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(a){const o=[];for(const c in a){const l=a[c];delete l.metadata,o.push(l)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,A=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),A===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}eA.DEFAULT_UP=new P(0,1,0);eA.DEFAULT_MATRIX_AUTO_UPDATE=!0;eA.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const CA=new P,$A=new P,Ac=new P,JA=new P,xr=new P,_r=new P,Mh=new P,nc=new P,rc=new P,ic=new P;class SA{constructor(e=new P,A=new P,n=new P){this.a=e,this.b=A,this.c=n}static getNormal(e,A,n,r){r.subVectors(n,A),CA.subVectors(e,A),r.cross(CA);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,A,n,r,i){CA.subVectors(r,A),$A.subVectors(n,A),Ac.subVectors(e,A);const s=CA.dot(CA),a=CA.dot($A),o=CA.dot(Ac),c=$A.dot($A),l=$A.dot(Ac),u=s*c-a*a;if(u===0)return i.set(0,0,0),null;const h=1/u,p=(c*o-a*l)*h,g=(s*l-a*o)*h;return i.set(1-p-g,g,p)}static containsPoint(e,A,n,r){return this.getBarycoord(e,A,n,r,JA)===null?!1:JA.x>=0&&JA.y>=0&&JA.x+JA.y<=1}static getInterpolation(e,A,n,r,i,s,a,o){return this.getBarycoord(e,A,n,r,JA)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(i,JA.x),o.addScaledVector(s,JA.y),o.addScaledVector(a,JA.z),o)}static isFrontFacing(e,A,n,r){return CA.subVectors(n,A),$A.subVectors(e,A),CA.cross($A).dot(r)<0}set(e,A,n){return this.a.copy(e),this.b.copy(A),this.c.copy(n),this}setFromPointsAndIndices(e,A,n,r){return this.a.copy(e[A]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,A,n,r){return this.a.fromBufferAttribute(e,A),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return CA.subVectors(this.c,this.b),$A.subVectors(this.a,this.b),CA.cross($A).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return SA.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,A){return SA.getBarycoord(e,this.a,this.b,this.c,A)}getInterpolation(e,A,n,r,i){return SA.getInterpolation(e,this.a,this.b,this.c,A,n,r,i)}containsPoint(e){return SA.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return SA.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,A){const n=this.a,r=this.b,i=this.c;let s,a;xr.subVectors(r,n),_r.subVectors(i,n),nc.subVectors(e,n);const o=xr.dot(nc),c=_r.dot(nc);if(o<=0&&c<=0)return A.copy(n);rc.subVectors(e,r);const l=xr.dot(rc),u=_r.dot(rc);if(l>=0&&u<=l)return A.copy(r);const h=o*u-l*c;if(h<=0&&o>=0&&l<=0)return s=o/(o-l),A.copy(n).addScaledVector(xr,s);ic.subVectors(e,i);const p=xr.dot(ic),g=_r.dot(ic);if(g>=0&&p<=g)return A.copy(i);const m=p*c-o*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),A.copy(n).addScaledVector(_r,a);const d=l*g-p*u;if(d<=0&&u-l>=0&&p-g>=0)return Mh.subVectors(i,r),a=(u-l)/(u-l+(p-g)),A.copy(r).addScaledVector(Mh,a);const f=1/(d+m+h);return s=m*f,a=h*f,A.copy(n).addScaledVector(xr,s).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function sc(t,e,A){return A<0&&(A+=1),A>1&&(A-=1),A<1/6?t+(e-t)*6*A:A<1/2?e:A<2/3?t+(e-t)*6*(2/3-A):t}class Xe{constructor(e,A,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,A,n)}set(e,A,n){if(A===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,A,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,A=LA){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,A),this}setRGB(e,A,n,r=Ze.workingColorSpace){return this.r=e,this.g=A,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,A,n,r=Ze.workingColorSpace){if(e=fv(e,1),A=$t(A,0,1),n=$t(n,0,1),A===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+A):n+A-n*A,s=2*n-i;this.r=sc(s,i,e+1/3),this.g=sc(s,i,e),this.b=sc(s,i,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,A=LA){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,A);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,A);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,A);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,A);if(s===6)return this.setHex(parseInt(i,16),A);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,A);return this}setColorName(e,A=LA){const n=Gp[e.toLowerCase()];return n!==void 0?this.setHex(n,A):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=LA){return Ze.fromWorkingColorSpace(Ot.copy(this),e),Math.round($t(Ot.r*255,0,255))*65536+Math.round($t(Ot.g*255,0,255))*256+Math.round($t(Ot.b*255,0,255))}getHexString(e=LA){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,A=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ot.copy(this),A);const n=Ot.r,r=Ot.g,i=Ot.b,s=Math.max(n,r,i),a=Math.min(n,r,i);let o,c;const l=(a+s)/2;if(a===s)o=0,c=0;else{const u=s-a;switch(c=l<=.5?u/(s+a):u/(2-s-a),s){case n:o=(r-i)/u+(r<i?6:0);break;case r:o=(i-n)/u+2;break;case i:o=(n-r)/u+4;break}o/=6}return e.h=o,e.s=c,e.l=l,e}getRGB(e,A=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ot.copy(this),A),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=LA){Ze.fromWorkingColorSpace(Ot.copy(this),e);const A=Ot.r,n=Ot.g,r=Ot.b;return e!==LA?`color(${e} ${A.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(A*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,A,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+A,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,A){return this.r=e.r+A.r,this.g=e.g+A.g,this.b=e.b+A.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,A){return this.r+=(e.r-this.r)*A,this.g+=(e.g-this.g)*A,this.b+=(e.b-this.b)*A,this}lerpColors(e,A,n){return this.r=e.r+(A.r-e.r)*n,this.g=e.g+(A.g-e.g)*n,this.b=e.b+(A.b-e.b)*n,this}lerpHSL(e,A){this.getHSL(fn),e.getHSL(Cs);const n=zo(fn.h,Cs.h,A),r=zo(fn.s,Cs.s,A),i=zo(fn.l,Cs.l,A);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const A=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*A+i[3]*n+i[6]*r,this.g=i[1]*A+i[4]*n+i[7]*r,this.b=i[2]*A+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,A=0){return this.r=e[A],this.g=e[A+1],this.b=e[A+2],this}toArray(e=[],A=0){return e[A]=this.r,e[A+1]=this.g,e[A+2]=this.b,e}fromBufferAttribute(e,A){return this.r=e.getX(A),this.g=e.getY(A),this.b=e.getZ(A),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Xe;Xe.NAMES=Gp;let Fv=0;class as extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Wr,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const A in e){const n=e[A];if(n===void 0){console.warn(`THREE.Material: parameter '${A}' has value of undefined.`);continue}const r=this[A];if(r===void 0){console.warn(`THREE.Material: '${A}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[A]=n}}toJSON(e){const A=e===void 0||typeof e=="string";A&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==tl&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const s=[];for(const a in i){const o=i[a];delete o.metadata,s.push(o)}return s}if(A){const i=r(e.textures),s=r(e.images);i.length>0&&(n.textures=i),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const A=e.clippingPlanes;let n=null;if(A!==null){const r=A.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=A[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vp extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new VA,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new P,Es=new Ke;class GA{constructor(e,A,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=A,this.count=e!==void 0?e.length/A:0,this.normalized=n,this.usage=gh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,A){this.updateRanges.push({start:e,count:A})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,A,n){e*=this.itemSize,n*=A.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=A.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let A=0,n=this.count;A<n;A++)Es.fromBufferAttribute(this,A),Es.applyMatrix3(e),this.setXY(A,Es.x,Es.y);else if(this.itemSize===3)for(let A=0,n=this.count;A<n;A++)xt.fromBufferAttribute(this,A),xt.applyMatrix3(e),this.setXYZ(A,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let A=0,n=this.count;A<n;A++)xt.fromBufferAttribute(this,A),xt.applyMatrix4(e),this.setXYZ(A,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let A=0,n=this.count;A<n;A++)xt.fromBufferAttribute(this,A),xt.applyNormalMatrix(e),this.setXYZ(A,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let A=0,n=this.count;A<n;A++)xt.fromBufferAttribute(this,A),xt.transformDirection(e),this.setXYZ(A,xt.x,xt.y,xt.z);return this}set(e,A=0){return this.array.set(e,A),this}getComponent(e,A){let n=this.array[e*this.itemSize+A];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,A,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+A]=n,this}getX(e){let A=this.array[e*this.itemSize];return this.normalized&&(A=vi(A,this.array)),A}setX(e,A){return this.normalized&&(A=jt(A,this.array)),this.array[e*this.itemSize]=A,this}getY(e){let A=this.array[e*this.itemSize+1];return this.normalized&&(A=vi(A,this.array)),A}setY(e,A){return this.normalized&&(A=jt(A,this.array)),this.array[e*this.itemSize+1]=A,this}getZ(e){let A=this.array[e*this.itemSize+2];return this.normalized&&(A=vi(A,this.array)),A}setZ(e,A){return this.normalized&&(A=jt(A,this.array)),this.array[e*this.itemSize+2]=A,this}getW(e){let A=this.array[e*this.itemSize+3];return this.normalized&&(A=vi(A,this.array)),A}setW(e,A){return this.normalized&&(A=jt(A,this.array)),this.array[e*this.itemSize+3]=A,this}setXY(e,A,n){return e*=this.itemSize,this.normalized&&(A=jt(A,this.array),n=jt(n,this.array)),this.array[e+0]=A,this.array[e+1]=n,this}setXYZ(e,A,n,r){return e*=this.itemSize,this.normalized&&(A=jt(A,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=A,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,A,n,r,i){return e*=this.itemSize,this.normalized&&(A=jt(A,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=A,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),e}}class Kp extends GA{constructor(e,A,n){super(new Uint16Array(e),A,n)}}class zp extends GA{constructor(e,A,n){super(new Uint32Array(e),A,n)}}class Mn extends GA{constructor(e,A,n){super(new Float32Array(e),A,n)}}let Tv=0;const hA=new gt,ac=new eA,Cr=new P,rA=new ss,Ci=new ss,Ft=new P;class Hn extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pp(e)?zp:Kp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,A){return this.attributes[e]=A,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,A,n=0){this.groups.push({start:e,count:A,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,A){this.drawRange.start=e,this.drawRange.count=A}applyMatrix4(e){const A=this.attributes.position;A!==void 0&&(A.applyMatrix4(e),A.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Ge().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hA.makeRotationFromQuaternion(e),this.applyMatrix4(hA),this}rotateX(e){return hA.makeRotationX(e),this.applyMatrix4(hA),this}rotateY(e){return hA.makeRotationY(e),this.applyMatrix4(hA),this}rotateZ(e){return hA.makeRotationZ(e),this.applyMatrix4(hA),this}translate(e,A,n){return hA.makeTranslation(e,A,n),this.applyMatrix4(hA),this}scale(e,A,n){return hA.makeScale(e,A,n),this.applyMatrix4(hA),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const A=[];for(let n=0,r=e.length;n<r;n++){const i=e[n];A.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Mn(A,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,A=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),A)for(let n=0,r=A.length;n<r;n++){const i=A[n];rA.setFromBufferAttribute(i),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,rA.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,rA.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(rA.min),this.boundingBox.expandByPoint(rA.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,A=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(rA.setFromBufferAttribute(e),A)for(let i=0,s=A.length;i<s;i++){const a=A[i];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(rA.min,Ci.min),rA.expandByPoint(Ft),Ft.addVectors(rA.max,Ci.max),rA.expandByPoint(Ft)):(rA.expandByPoint(Ci.min),rA.expandByPoint(Ci.max))}rA.getCenter(n);let r=0;for(let i=0,s=e.count;i<s;i++)Ft.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Ft));if(A)for(let i=0,s=A.length;i<s;i++){const a=A[i],o=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Ft.fromBufferAttribute(a,c),o&&(Cr.fromBufferAttribute(e,c),Ft.add(Cr)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,A=this.attributes;if(e===null||A.position===void 0||A.normal===void 0||A.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=A.position,r=A.normal,i=A.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new GA(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],o=[];for(let I=0;I<n.count;I++)a[I]=new P,o[I]=new P;const c=new P,l=new P,u=new P,h=new Ke,p=new Ke,g=new Ke,m=new P,d=new P;function f(I,C,B){c.fromBufferAttribute(n,I),l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,B),h.fromBufferAttribute(i,I),p.fromBufferAttribute(i,C),g.fromBufferAttribute(i,B),l.sub(c),u.sub(c),p.sub(h),g.sub(h);const Q=1/(p.x*g.y-g.x*p.y);isFinite(Q)&&(m.copy(l).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(Q),d.copy(u).multiplyScalar(p.x).addScaledVector(l,-g.x).multiplyScalar(Q),a[I].add(m),a[C].add(m),a[B].add(m),o[I].add(d),o[C].add(d),o[B].add(d))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,C=x.length;I<C;++I){const B=x[I],Q=B.start,R=B.count;for(let T=Q,D=Q+R;T<D;T+=3)f(e.getX(T+0),e.getX(T+1),e.getX(T+2))}const v=new P,y=new P,b=new P,E=new P;function U(I){b.fromBufferAttribute(r,I),E.copy(b);const C=a[I];v.copy(C),v.sub(b.multiplyScalar(b.dot(C))).normalize(),y.crossVectors(E,C);const Q=y.dot(o[I])<0?-1:1;s.setXYZW(I,v.x,v.y,v.z,Q)}for(let I=0,C=x.length;I<C;++I){const B=x[I],Q=B.start,R=B.count;for(let T=Q,D=Q+R;T<D;T+=3)U(e.getX(T+0)),U(e.getX(T+1)),U(e.getX(T+2))}}computeVertexNormals(){const e=this.index,A=this.getAttribute("position");if(A!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new GA(new Float32Array(A.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new P,i=new P,s=new P,a=new P,o=new P,c=new P,l=new P,u=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(A,g),i.fromBufferAttribute(A,m),s.fromBufferAttribute(A,d),l.subVectors(s,i),u.subVectors(r,i),l.cross(u),a.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(l),o.add(l),c.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=A.count;h<p;h+=3)r.fromBufferAttribute(A,h+0),i.fromBufferAttribute(A,h+1),s.fromBufferAttribute(A,h+2),l.subVectors(s,i),u.subVectors(r,i),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let A=0,n=e.count;A<n;A++)Ft.fromBufferAttribute(e,A),Ft.normalize(),e.setXYZ(A,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,o){const c=a.array,l=a.itemSize,u=a.normalized,h=new c.constructor(o.length*l);let p=0,g=0;for(let m=0,d=o.length;m<d;m++){a.isInterleavedBufferAttribute?p=o[m]*a.data.stride+a.offset:p=o[m]*l;for(let f=0;f<l;f++)h[g++]=c[p++]}return new GA(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const A=new Hn,n=this.index.array,r=this.attributes;for(const a in r){const o=r[a],c=e(o,n);A.setAttribute(a,c)}const i=this.morphAttributes;for(const a in i){const o=[],c=i[a];for(let l=0,u=c.length;l<u;l++){const h=c[l],p=e(h,n);o.push(p)}A.morphAttributes[a]=o}A.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const c=s[a];A.addGroup(c.start,c.count,c.materialIndex)}return A}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const A=this.index;A!==null&&(e.data.index={type:A.array.constructor.name,array:Array.prototype.slice.call(A.array)});const n=this.attributes;for(const o in n){const c=n[o];e.data.attributes[o]=c.toJSON(e.data)}const r={};let i=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],l=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];l.push(p.toJSON(e.data))}l.length>0&&(r[o]=l,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const A={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(A));const r=e.attributes;for(const c in r){const l=r[c];this.setAttribute(c,l.clone(A))}const i=e.morphAttributes;for(const c in i){const l=[],u=i[c];for(let h=0,p=u.length;h<p;h++)l.push(u[h].clone(A));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new gt,Gn=new Cv,ys=new ql,Th=new P,Er=new P,yr=new P,Ur=new P,oc=new P,Us=new P,Ss=new Ke,bs=new Ke,Ms=new Ke,Qh=new P,Ih=new P,Rh=new P,Fs=new P,Ts=new P;class kA extends eA{constructor(e=new Hn,A=new Vp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=A,this.updateMorphTargets()}copy(e,A){return super.copy(e,A),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,n=Object.keys(A);if(n.length>0){const r=A[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){const a=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,A){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,s=n.morphTargetsRelative;A.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(i&&a){Us.set(0,0,0);for(let o=0,c=i.length;o<c;o++){const l=a[o],u=i[o];l!==0&&(oc.fromBufferAttribute(u,e),s?Us.addScaledVector(oc,l):Us.addScaledVector(oc.sub(A),l))}A.add(Us)}return A}raycast(e,A){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(i),Gn.copy(e.ray).recast(e.near),!(ys.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ys,Th)===null||Gn.origin.distanceToSquared(Th)>(e.far-e.near)**2))&&(Fh.copy(i).invert(),Gn.copy(e.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,A,Gn)))}_computeIntersections(e,A,n){let r;const i=this.geometry,s=this.material,a=i.index,o=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,h=i.groups,p=i.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const d=h[g],f=s[d.materialIndex],x=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let y=x,b=v;y<b;y+=3){const E=a.getX(y),U=a.getX(y+1),I=a.getX(y+2);r=Qs(this,f,e,n,c,l,u,E,U,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=d.materialIndex,A.push(r))}}else{const g=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let d=g,f=m;d<f;d+=3){const x=a.getX(d),v=a.getX(d+1),y=a.getX(d+2);r=Qs(this,s,e,n,c,l,u,x,v,y),r&&(r.faceIndex=Math.floor(d/3),A.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const d=h[g],f=s[d.materialIndex],x=Math.max(d.start,p.start),v=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let y=x,b=v;y<b;y+=3){const E=y,U=y+1,I=y+2;r=Qs(this,f,e,n,c,l,u,E,U,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=d.materialIndex,A.push(r))}}else{const g=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let d=g,f=m;d<f;d+=3){const x=d,v=d+1,y=d+2;r=Qs(this,s,e,n,c,l,u,x,v,y),r&&(r.faceIndex=Math.floor(d/3),A.push(r))}}}}function Qv(t,e,A,n,r,i,s,a){let o;if(e.side===Wt?o=n.intersectTriangle(s,i,r,!0,a):o=n.intersectTriangle(r,i,s,e.side===In,a),o===null)return null;Ts.copy(a),Ts.applyMatrix4(t.matrixWorld);const c=A.ray.origin.distanceTo(Ts);return c<A.near||c>A.far?null:{distance:c,point:Ts.clone(),object:t}}function Qs(t,e,A,n,r,i,s,a,o,c){t.getVertexPosition(a,Er),t.getVertexPosition(o,yr),t.getVertexPosition(c,Ur);const l=Qv(t,e,A,n,Er,yr,Ur,Fs);if(l){r&&(Ss.fromBufferAttribute(r,a),bs.fromBufferAttribute(r,o),Ms.fromBufferAttribute(r,c),l.uv=SA.getInterpolation(Fs,Er,yr,Ur,Ss,bs,Ms,new Ke)),i&&(Ss.fromBufferAttribute(i,a),bs.fromBufferAttribute(i,o),Ms.fromBufferAttribute(i,c),l.uv1=SA.getInterpolation(Fs,Er,yr,Ur,Ss,bs,Ms,new Ke)),s&&(Qh.fromBufferAttribute(s,a),Ih.fromBufferAttribute(s,o),Rh.fromBufferAttribute(s,c),l.normal=SA.getInterpolation(Fs,Er,yr,Ur,Qh,Ih,Rh,new P),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:o,c,normal:new P,materialIndex:0};SA.getNormal(Er,yr,Ur,u.normal),l.face=u}return l}class fi extends Hn{constructor(e=1,A=1,n=1,r=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:A,depth:n,widthSegments:r,heightSegments:i,depthSegments:s};const a=this;r=Math.floor(r),i=Math.floor(i),s=Math.floor(s);const o=[],c=[],l=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,n,A,e,s,i,0),g("z","y","x",1,-1,n,A,-e,s,i,1),g("x","z","y",1,1,e,n,A,r,s,2),g("x","z","y",1,-1,e,n,-A,r,s,3),g("x","y","z",1,-1,e,A,n,r,i,4),g("x","y","z",-1,-1,e,A,-n,r,i,5),this.setIndex(o),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(l,3)),this.setAttribute("uv",new Mn(u,2));function g(m,d,f,x,v,y,b,E,U,I,C){const B=y/U,Q=b/I,R=y/2,T=b/2,D=E/2,N=U+1,X=I+1;let q=0,k=0;const j=new P;for(let J=0;J<X;J++){const ie=J*Q-T;for(let Z=0;Z<N;Z++){const pe=Z*B-R;j[m]=pe*x,j[d]=ie*v,j[f]=D,c.push(j.x,j.y,j.z),j[m]=0,j[d]=0,j[f]=E>0?1:-1,l.push(j.x,j.y,j.z),u.push(Z/U),u.push(1-J/I),q+=1}}for(let J=0;J<I;J++)for(let ie=0;ie<U;ie++){const Z=h+ie+N*J,pe=h+ie+N*(J+1),O=h+(ie+1)+N*(J+1),Y=h+(ie+1)+N*J;o.push(Z,pe,Y),o.push(pe,O,Y),k+=6}a.addGroup(p,k,C),p+=k,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(t){const e={};for(const A in t){e[A]={};for(const n in t[A]){const r=t[A][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[A][n]=null):e[A][n]=r.clone():Array.isArray(r)?e[A][n]=r.slice():e[A][n]=r}}return e}function Kt(t){const e={};for(let A=0;A<t.length;A++){const n=Zr(t[A]);for(const r in n)e[r]=n[r]}return e}function Iv(t){const e=[];for(let A=0;A<t.length;A++)e.push(t[A].clone());return e}function Wp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Rv={clone:Zr,merge:Kt};var Lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lv,this.fragmentShader=Dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=Iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const A=super.toJSON(e);A.glslVersion=this.glslVersion,A.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?A.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?A.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?A.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?A.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?A.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?A.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?A.uniforms[r]={type:"m4",value:s.toArray()}:A.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(A.defines=this.defines),A.vertexShader=this.vertexShader,A.fragmentShader=this.fragmentShader,A.lights=this.lights,A.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(A.extensions=n),A}}class Xp extends eA{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=rn}copy(e,A){return super.copy(e,A),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,A){super.updateWorldMatrix(e,A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dn=new P,Lh=new Ke,Dh=new Ke;class cA extends Xp{constructor(e=50,A=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=A,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,A){return super.copy(e,A),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const A=.5*this.getFilmHeight()/e;this.fov=sl*2*Math.atan(A),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,A,n){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(dn.x,dn.y).multiplyScalar(-e/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dn.x,dn.y).multiplyScalar(-e/dn.z)}getViewSize(e,A){return this.getViewBounds(e,Lh,Dh),A.subVectors(Dh,Lh)}setViewOffset(e,A,n,r,i,s){this.aspect=e/A,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=A,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let A=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*A,r=this.aspect*n,i=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;i+=s.offsetX*r/o,A-=s.offsetY*n/c,r*=s.width/o,n*=s.height/c}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,A,A-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const A=super.toJSON(e);return A.object.fov=this.fov,A.object.zoom=this.zoom,A.object.near=this.near,A.object.far=this.far,A.object.focus=this.focus,A.object.aspect=this.aspect,this.view!==null&&(A.object.view=Object.assign({},this.view)),A.object.filmGauge=this.filmGauge,A.object.filmOffset=this.filmOffset,A}}const Sr=-90,br=1;class Hv extends eA{constructor(e,A,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cA(Sr,br,e,A);r.layers=this.layers,this.add(r);const i=new cA(Sr,br,e,A);i.layers=this.layers,this.add(i);const s=new cA(Sr,br,e,A);s.layers=this.layers,this.add(s);const a=new cA(Sr,br,e,A);a.layers=this.layers,this.add(a);const o=new cA(Sr,br,e,A);o.layers=this.layers,this.add(o);const c=new cA(Sr,br,e,A);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,A=this.children.concat(),[n,r,i,s,a,o]=A;for(const c of A)this.remove(c);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of A)this.add(c),c.updateMatrixWorld()}update(e,A){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(A,i),e.setRenderTarget(n,1,r),e.render(A,s),e.setRenderTarget(n,2,r),e.render(A,a),e.setRenderTarget(n,3,r),e.render(A,o),e.setRenderTarget(n,4,r),e.render(A,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(A,l),e.setRenderTarget(u,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jp extends Zt{constructor(e,A,n,r,i,s,a,o,c,l){e=e!==void 0?e:[],A=A!==void 0?A:$r,super(e,A,n,r,i,s,a,o,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pv extends ur{constructor(e=1,A={}){super(e,e,A),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new jp(r,A.mapping,A.wrapS,A.wrapT,A.magFilter,A.minFilter,A.format,A.type,A.anisotropy,A.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=A.generateMipmaps!==void 0?A.generateMipmaps:!1,this.texture.minFilter=A.minFilter!==void 0?A.minFilter:UA}fromEquirectangularTexture(e,A){this.texture.type=A.type,this.texture.colorSpace=A.colorSpace,this.texture.generateMipmaps=A.generateMipmaps,this.texture.minFilter=A.minFilter,this.texture.magFilter=A.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fi(5,5,5),i=new Rn({name:"CubemapFromEquirect",uniforms:Zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Un});i.uniforms.tEquirect.value=A;const s=new kA(r,i),a=A.minFilter;return A.minFilter===er&&(A.minFilter=UA),new Hv(1,10,this).update(e,s),A.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,A,n,r){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(A,n,r);e.setRenderTarget(i)}}const cc=new P,Nv=new P,Ov=new Ge;class jn{constructor(e=new P(1,0,0),A=0){this.isPlane=!0,this.normal=e,this.constant=A}set(e,A){return this.normal.copy(e),this.constant=A,this}setComponents(e,A,n,r){return this.normal.set(e,A,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,A){return this.normal.copy(e),this.constant=-A.dot(this.normal),this}setFromCoplanarPoints(e,A,n){const r=cc.subVectors(n,A).cross(Nv.subVectors(e,A)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,A){return A.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,A){const n=e.delta(cc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?A.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:A.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const A=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return A<0&&n>0||n<0&&A>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,A){const n=A||Ov.getNormalMatrix(e),r=this.coplanarPoint(cc).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new ql,Is=new P;class Zl{constructor(e=new jn,A=new jn,n=new jn,r=new jn,i=new jn,s=new jn){this.planes=[e,A,n,r,i,s]}set(e,A,n,r,i,s){const a=this.planes;return a[0].copy(e),a[1].copy(A),a[2].copy(n),a[3].copy(r),a[4].copy(i),a[5].copy(s),this}copy(e){const A=this.planes;for(let n=0;n<6;n++)A[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,A=rn){const n=this.planes,r=e.elements,i=r[0],s=r[1],a=r[2],o=r[3],c=r[4],l=r[5],u=r[6],h=r[7],p=r[8],g=r[9],m=r[10],d=r[11],f=r[12],x=r[13],v=r[14],y=r[15];if(n[0].setComponents(o-i,h-c,d-p,y-f).normalize(),n[1].setComponents(o+i,h+c,d+p,y+f).normalize(),n[2].setComponents(o+s,h+l,d+g,y+x).normalize(),n[3].setComponents(o-s,h-l,d-g,y-x).normalize(),n[4].setComponents(o-a,h-u,d-m,y-v).normalize(),A===rn)n[5].setComponents(o+a,h+u,d+m,y+v).normalize();else if(A===Ha)n[5].setComponents(a,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+A);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const A=e.geometry;A.boundingSphere===null&&A.computeBoundingSphere(),Vn.copy(A.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const A=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(A[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const A=this.planes;for(let n=0;n<6;n++){const r=A[n];if(Is.x=r.normal.x>0?e.max.x:e.min.x,Is.y=r.normal.y>0?e.max.y:e.min.y,Is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const A=this.planes;for(let n=0;n<6;n++)if(A[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yp(){let t=null,e=!1,A=null,n=null;function r(i,s){A(i,s),n=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&A!==null&&(n=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){A=i},setContext:function(i){t=i}}}function kv(t){const e=new WeakMap;function A(a,o){const c=a.array,l=a.usage,u=c.byteLength,h=t.createBuffer();t.bindBuffer(o,h),t.bufferData(o,c,l),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,o,c){const l=o.array,u=o._updateRange,h=o.updateRanges;if(t.bindBuffer(c,a),u.count===-1&&h.length===0&&t.bufferSubData(c,0,l),h.length!==0){for(let p=0,g=h.length;p<g;p++){const m=h[p];t.bufferSubData(c,m.start*l.BYTES_PER_ELEMENT,l,m.start,m.count)}o.clearUpdateRanges()}u.count!==-1&&(t.bufferSubData(c,u.offset*l.BYTES_PER_ELEMENT,l,u.offset,u.count),u.count=-1),o.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function i(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=e.get(a);o&&(t.deleteBuffer(o.buffer),e.delete(a))}function s(a,o){if(a.isGLBufferAttribute){const l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,A(a,o));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,o),c.version=a.version}}return{get:r,remove:i,update:s}}class oo extends Hn{constructor(e=1,A=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:A,widthSegments:n,heightSegments:r};const i=e/2,s=A/2,a=Math.floor(n),o=Math.floor(r),c=a+1,l=o+1,u=e/a,h=A/o,p=[],g=[],m=[],d=[];for(let f=0;f<l;f++){const x=f*h-s;for(let v=0;v<c;v++){const y=v*u-i;g.push(y,-x,0),m.push(0,0,1),d.push(v/a),d.push(1-f/o)}}for(let f=0;f<o;f++)for(let x=0;x<a;x++){const v=x+c*f,y=x+c*(f+1),b=x+1+c*(f+1),E=x+1+c*f;p.push(v,y,E),p.push(y,b,E)}this.setIndex(p),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(m,3)),this.setAttribute("uv",new Mn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$v=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ew=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tw=`#ifdef USE_IRIDESCENCE
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
#endif`,Aw=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uw=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,hw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,fw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bw="gl_FragColor = linearToOutputTexel( gl_FragColor );",vw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ww=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_w=`#ifdef USE_ENVMAP
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
#endif`,Cw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ew=`#ifdef USE_ENVMAP
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
#endif`,yw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mw=`#ifdef USE_GRADIENTMAP
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
}`,Fw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Lw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Dw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ow=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kw=`struct PhysicalMaterial {
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Gw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qw=`#if defined( USE_POINTS_UV )
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
#endif`,Zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ax=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
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
#endif`,rx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
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
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sx=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$x=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Jx=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,n_=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,i_=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,a_=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,c_=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,u_=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,f_=`#define STANDARD
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,p_=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,v_=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w_=`uniform float rotation;
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
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Gv,alphahash_pars_fragment:Vv,alphamap_fragment:Kv,alphamap_pars_fragment:zv,alphatest_fragment:Wv,alphatest_pars_fragment:Xv,aomap_fragment:jv,aomap_pars_fragment:Yv,batching_pars_vertex:$v,batching_vertex:Jv,begin_vertex:qv,beginnormal_vertex:Zv,bsdfs:ew,iridescence_fragment:tw,bumpmap_pars_fragment:Aw,clipping_planes_fragment:nw,clipping_planes_pars_fragment:rw,clipping_planes_pars_vertex:iw,clipping_planes_vertex:sw,color_fragment:aw,color_pars_fragment:ow,color_pars_vertex:cw,color_vertex:lw,common:uw,cube_uv_reflection_fragment:hw,defaultnormal_vertex:fw,displacementmap_pars_vertex:dw,displacementmap_vertex:pw,emissivemap_fragment:gw,emissivemap_pars_fragment:mw,colorspace_fragment:Bw,colorspace_pars_fragment:vw,envmap_fragment:ww,envmap_common_pars_fragment:xw,envmap_pars_fragment:_w,envmap_pars_vertex:Cw,envmap_physical_pars_fragment:Lw,envmap_vertex:Ew,fog_vertex:yw,fog_pars_vertex:Uw,fog_fragment:Sw,fog_pars_fragment:bw,gradientmap_pars_fragment:Mw,lightmap_fragment:Fw,lightmap_pars_fragment:Tw,lights_lambert_fragment:Qw,lights_lambert_pars_fragment:Iw,lights_pars_begin:Rw,lights_toon_fragment:Dw,lights_toon_pars_fragment:Hw,lights_phong_fragment:Pw,lights_phong_pars_fragment:Nw,lights_physical_fragment:Ow,lights_physical_pars_fragment:kw,lights_fragment_begin:Gw,lights_fragment_maps:Vw,lights_fragment_end:Kw,logdepthbuf_fragment:zw,logdepthbuf_pars_fragment:Ww,logdepthbuf_pars_vertex:Xw,logdepthbuf_vertex:jw,map_fragment:Yw,map_pars_fragment:$w,map_particle_fragment:Jw,map_particle_pars_fragment:qw,metalnessmap_fragment:Zw,metalnessmap_pars_fragment:ex,morphinstance_vertex:tx,morphcolor_vertex:Ax,morphnormal_vertex:nx,morphtarget_pars_vertex:rx,morphtarget_vertex:ix,normal_fragment_begin:sx,normal_fragment_maps:ax,normal_pars_fragment:ox,normal_pars_vertex:cx,normal_vertex:lx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:dx,iridescence_pars_fragment:px,opaque_fragment:gx,packing:mx,premultiplied_alpha_fragment:Bx,project_vertex:vx,dithering_fragment:wx,dithering_pars_fragment:xx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Ex,shadowmap_pars_vertex:yx,shadowmap_vertex:Ux,shadowmask_pars_fragment:Sx,skinbase_vertex:bx,skinning_pars_vertex:Mx,skinning_vertex:Fx,skinnormal_vertex:Tx,specularmap_fragment:Qx,specularmap_pars_fragment:Ix,tonemapping_fragment:Rx,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Hx,uv_pars_fragment:Px,uv_pars_vertex:Nx,uv_vertex:Ox,worldpos_vertex:kx,background_vert:Gx,background_frag:Vx,backgroundCube_vert:Kx,backgroundCube_frag:zx,cube_vert:Wx,cube_frag:Xx,depth_vert:jx,depth_frag:Yx,distanceRGBA_vert:$x,distanceRGBA_frag:Jx,equirect_vert:qx,equirect_frag:Zx,linedashed_vert:e_,linedashed_frag:t_,meshbasic_vert:A_,meshbasic_frag:n_,meshlambert_vert:r_,meshlambert_frag:i_,meshmatcap_vert:s_,meshmatcap_frag:a_,meshnormal_vert:o_,meshnormal_frag:c_,meshphong_vert:l_,meshphong_frag:u_,meshphysical_vert:h_,meshphysical_frag:f_,meshtoon_vert:d_,meshtoon_frag:p_,points_vert:g_,points_frag:m_,shadow_vert:B_,shadow_frag:v_,sprite_vert:w_,sprite_frag:x_},ce={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},DA={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};DA.physical={uniforms:Kt([DA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Rs={r:0,b:0,g:0},Kn=new VA,__=new gt;function C_(t,e,A,n,r,i,s){const a=new Xe(0);let o=i===!0?0:1,c,l,u=null,h=0,p=null;function g(d,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?A:e).get(v)),v===null?m(a,o):v&&v.isColor&&(m(v,1),x=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===so)?(l===void 0&&(l=new kA(new fi(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Zr(DA.backgroundCube.uniforms),vertexShader:DA.backgroundCube.vertexShader,fragmentShader:DA.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),Kn.copy(f.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(Kn)),l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==at,(u!==v||h!==v.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,p=t.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new kA(new oo(2,2),new Rn({name:"BackgroundMaterial",uniforms:Zr(DA.background.uniforms),vertexShader:DA.background.vertexShader,fragmentShader:DA.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,p=t.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,f){d.getRGB(Rs,Wp(t)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(d,f=1){a.set(d),o=f,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,m(a,o)},render:g}}function E_(t,e){const A=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},r=h(null);let i=r,s=!1;function a(B,Q,R,T,D){let N=!1;const X=u(T,R,Q);i!==X&&(i=X,c(i.object)),N=p(B,T,R,D),N&&g(B,T,R,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(N||s)&&(s=!1,y(B,Q,R,T),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function o(){return t.createVertexArray()}function c(B){return t.bindVertexArray(B)}function l(B){return t.deleteVertexArray(B)}function u(B,Q,R){const T=R.wireframe===!0;let D=n[B.id];D===void 0&&(D={},n[B.id]=D);let N=D[Q.id];N===void 0&&(N={},D[Q.id]=N);let X=N[T];return X===void 0&&(X=h(o()),N[T]=X),X}function h(B){const Q=[],R=[],T=[];for(let D=0;D<A;D++)Q[D]=0,R[D]=0,T[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:R,attributeDivisors:T,object:B,attributes:{},index:null}}function p(B,Q,R,T){const D=i.attributes,N=Q.attributes;let X=0;const q=R.getAttributes();for(const k in q)if(q[k].location>=0){const J=D[k];let ie=N[k];if(ie===void 0&&(k==="instanceMatrix"&&B.instanceMatrix&&(ie=B.instanceMatrix),k==="instanceColor"&&B.instanceColor&&(ie=B.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;X++}return i.attributesNum!==X||i.index!==T}function g(B,Q,R,T){const D={},N=Q.attributes;let X=0;const q=R.getAttributes();for(const k in q)if(q[k].location>=0){let J=N[k];J===void 0&&(k==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),k==="instanceColor"&&B.instanceColor&&(J=B.instanceColor));const ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),D[k]=ie,X++}i.attributes=D,i.attributesNum=X,i.index=T}function m(){const B=i.newAttributes;for(let Q=0,R=B.length;Q<R;Q++)B[Q]=0}function d(B){f(B,0)}function f(B,Q){const R=i.newAttributes,T=i.enabledAttributes,D=i.attributeDivisors;R[B]=1,T[B]===0&&(t.enableVertexAttribArray(B),T[B]=1),D[B]!==Q&&(t.vertexAttribDivisor(B,Q),D[B]=Q)}function x(){const B=i.newAttributes,Q=i.enabledAttributes;for(let R=0,T=Q.length;R<T;R++)Q[R]!==B[R]&&(t.disableVertexAttribArray(R),Q[R]=0)}function v(B,Q,R,T,D,N,X){X===!0?t.vertexAttribIPointer(B,Q,R,D,N):t.vertexAttribPointer(B,Q,R,T,D,N)}function y(B,Q,R,T){m();const D=T.attributes,N=R.getAttributes(),X=Q.defaultAttributeValues;for(const q in N){const k=N[q];if(k.location>=0){let j=D[q];if(j===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(j=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(j=B.instanceColor)),j!==void 0){const J=j.normalized,ie=j.itemSize,Z=e.get(j);if(Z===void 0)continue;const pe=Z.buffer,O=Z.type,Y=Z.bytesPerElement,re=O===t.INT||O===t.UNSIGNED_INT||j.gpuType===Mp;if(j.isInterleavedBufferAttribute){const Ae=j.data,Ee=Ae.stride,we=j.offset;if(Ae.isInstancedInterleavedBuffer){for(let Le=0;Le<k.locationSize;Le++)f(k.location+Le,Ae.meshPerAttribute);B.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Le=0;Le<k.locationSize;Le++)d(k.location+Le);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Le=0;Le<k.locationSize;Le++)v(k.location+Le,ie/k.locationSize,O,J,Ee*Y,(we+ie/k.locationSize*Le)*Y,re)}else{if(j.isInstancedBufferAttribute){for(let Ae=0;Ae<k.locationSize;Ae++)f(k.location+Ae,j.meshPerAttribute);B.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ae=0;Ae<k.locationSize;Ae++)d(k.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Ae=0;Ae<k.locationSize;Ae++)v(k.location+Ae,ie/k.locationSize,O,J,ie*Y,ie/k.locationSize*Ae*Y,re)}}else if(X!==void 0){const J=X[q];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(k.location,J);break;case 3:t.vertexAttrib3fv(k.location,J);break;case 4:t.vertexAttrib4fv(k.location,J);break;default:t.vertexAttrib1fv(k.location,J)}}}}x()}function b(){I();for(const B in n){const Q=n[B];for(const R in Q){const T=Q[R];for(const D in T)l(T[D].object),delete T[D];delete Q[R]}delete n[B]}}function E(B){if(n[B.id]===void 0)return;const Q=n[B.id];for(const R in Q){const T=Q[R];for(const D in T)l(T[D].object),delete T[D];delete Q[R]}delete n[B.id]}function U(B){for(const Q in n){const R=n[Q];if(R[B.id]===void 0)continue;const T=R[B.id];for(const D in T)l(T[D].object),delete T[D];delete R[B.id]}}function I(){C(),s=!0,i!==r&&(i=r,c(i.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:d,disableUnusedAttributes:x}}function y_(t,e,A){let n;function r(o){n=o}function i(o,c){t.drawArrays(n,o,c),A.update(c,n,1)}function s(o,c,l){l!==0&&(t.drawArraysInstanced(n,o,c,l),A.update(c,n,l))}function a(o,c,l){if(l===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<l;h++)this.render(o[h],c[h]);else{u.multiDrawArraysWEBGL(n,o,0,c,0,l);let h=0;for(let p=0;p<l;p++)h+=c[p];A.update(h,n,1)}}this.setMode=r,this.render=i,this.renderInstances=s,this.renderMultiDraw=a}function U_(t,e,A){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=A.precision!==void 0?A.precision:"highp";const a=i(s);a!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",a,"instead."),s=a);const o=A.logarithmicDepthBuffer===!0,c=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),l=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),m=t.getParameter(t.MAX_VARYING_VECTORS),d=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),f=l>0,x=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:i,precision:s,logarithmicDepthBuffer:o,maxTextures:c,maxVertexTextures:l,maxTextureSize:u,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:d,vertexTextures:f,maxSamples:x}}function S_(t){const e=this;let A=null,n=0,r=!1,i=!1;const s=new jn,a=new Ge,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||n!==0||r;return r=h,n=u.length,p},this.beginShadows=function(){i=!0,l(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,h){A=l(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,m=u.clipIntersection,d=u.clipShadows,f=t.get(u);if(!r||g===null||g.length===0||i&&!d)i?l(null):c();else{const x=i?0:n,v=x*4;let y=f.clippingState||null;o.value=y,y=l(g,h,v,p);for(let b=0;b!==v;++b)y[b]=A[b];f.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){o.value!==A&&(o.value=A,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,h,p,g){const m=u!==null?u.length:0;let d=null;if(m!==0){if(d=o.value,g!==!0||d===null){const f=p+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(d===null||d.length<f)&&(d=new Float32Array(f));for(let v=0,y=p;v!==m;++v,y+=4)s.copy(u[v]).applyMatrix4(x,a),s.normal.toArray(d,y),d[y+3]=s.constant}o.value=d,o.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function b_(t){let e=new WeakMap;function A(s,a){return a===Al?s.mapping=$r:a===nl&&(s.mapping=Jr),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Al||a===nl)if(e.has(s)){const o=e.get(s).texture;return A(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const c=new Pv(o.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),A(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class M_ extends Xp{constructor(e=-1,A=1,n=1,r=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=A,this.top=n,this.bottom=r,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,A){return super.copy(e,A),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,A,n,r,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=A,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),A=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-e,s=n+e,a=r+A,o=r-A;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(i,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const A=super.toJSON(e);return A.object.zoom=this.zoom,A.object.left=this.left,A.object.right=this.right,A.object.top=this.top,A.object.bottom=this.bottom,A.object.near=this.near,A.object.far=this.far,this.view!==null&&(A.object.view=Object.assign({},this.view)),A}}const kr=4,Hh=[.125,.215,.35,.446,.526,.582],Jn=20,lc=new M_,Ph=new Xe;let uc=null,hc=0,fc=0,dc=!1;const Yn=(1+Math.sqrt(5))/2,Mr=1/Yn,Nh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Yn,Mr),new P(0,Yn,-Mr),new P(Mr,0,Yn),new P(-Mr,0,Yn),new P(Yn,Mr,0),new P(-Yn,Mr,0)];class Oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,A=0,n=.1,r=100){uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),A>0&&this._blur(i,0,0,A),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,A=null){return this._fromTexture(e,A)}fromCubemap(e,A=null){return this._fromTexture(e,A)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,hc,fc),this._renderer.xr.enabled=dc,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,A){e.mapping===$r||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=A||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),A=4*this._cubeSize,n={magFilter:UA,minFilter:UA,generateMipmaps:!1,type:Ia,format:OA,colorSpace:Dn,depthBuffer:!1},r=kh(e,A,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,A,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F_(i)),this._blurMaterial=T_(i,e,A)}return r}_compileMaterial(e){const A=new kA(this._lodPlanes[0],e);this._renderer.compile(A,lc)}_sceneToCubeUV(e,A,n,r){const a=new cA(90,1,A,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,h=l.toneMapping;l.getClearColor(Ph),l.toneMapping=Sn,l.autoClear=!1;const p=new Vp({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new kA(new fi,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Ph),m=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,o[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,o[f]),a.lookAt(0,c[f],0)):(a.up.set(0,o[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Ls(r,x*v,f>2?v:0,v,v),l.setRenderTarget(r),m&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=h,l.autoClear=u,e.background=d}_textureToCubeUV(e,A){const n=this._renderer,r=e.mapping===$r||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());const i=r?this._cubemapMaterial:this._equirectMaterial,s=new kA(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const o=this._cubeSize;Ls(A,0,0,3*o,2*o),n.setRenderTarget(A),n.render(s,lc)}_applyPMREM(e){const A=this._renderer,n=A.autoClear;A.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Nh[(r-1)%Nh.length];this._blur(e,r-1,r,i,s)}A.autoClear=n}_blur(e,A,n,r,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,A,n,r,"latitudinal",i),this._halfBlur(s,e,n,n,r,"longitudinal",i)}_halfBlur(e,A,n,r,i,s,a){const o=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new kA(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(i)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),m=i/g,d=isFinite(i)?1+Math.floor(l*m):Jn;d>Jn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Jn}`);const f=[];let x=0;for(let U=0;U<Jn;++U){const I=U/m,C=Math.exp(-I*I/2);f.push(C),U===0?x+=C:U<d&&(x+=2*C)}for(let U=0;U<f.length;U++)f[U]=f[U]/x;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const y=this._sizeLods[r],b=3*y*(r>v-kr?r-v+kr:0),E=4*(this._cubeSize-y);Ls(A,b,E,3*y,2*y),o.setRenderTarget(A),o.render(u,lc)}}function F_(t){const e=[],A=[],n=[];let r=t;const i=t-kr+1+Hh.length;for(let s=0;s<i;s++){const a=Math.pow(2,r);A.push(a);let o=1/a;s>t-kr?o=Hh[s-t+kr-1]:s===0&&(o=0),n.push(o);const c=1/(a-2),l=-c,u=1+c,h=[l,l,u,l,u,u,l,l,u,u,l,u],p=6,g=6,m=3,d=2,f=1,x=new Float32Array(m*g*p),v=new Float32Array(d*g*p),y=new Float32Array(f*g*p);for(let E=0;E<p;E++){const U=E%3*2/3-1,I=E>2?0:-1,C=[U,I,0,U+2/3,I,0,U+2/3,I+1,0,U,I,0,U+2/3,I+1,0,U,I+1,0];x.set(C,m*g*E),v.set(h,d*g*E);const B=[E,E,E,E,E,E];y.set(B,f*g*E)}const b=new Hn;b.setAttribute("position",new GA(x,m)),b.setAttribute("uv",new GA(v,d)),b.setAttribute("faceIndex",new GA(y,f)),e.push(b),r>kr&&r--}return{lodPlanes:e,sizeLods:A,sigmas:n}}function kh(t,e,A){const n=new ur(t,e,A);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(t,e,A,n,r){t.viewport.set(e,A,n,r),t.scissor.set(e,A,n,r)}function T_(t,e,A){const n=new Float32Array(Jn),r=new P(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/A,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Gh(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Vh(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function Q_(t){let e=new WeakMap,A=null;function n(a){if(a&&a.isTexture){const o=a.mapping,c=o===Al||o===nl,l=o===$r||o===Jr;if(c||l){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return A===null&&(A=new Oh(t)),u=c?A.fromEquirectangular(a,u):A.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||l&&p&&r(p)?(A===null&&(A=new Oh(t)),u=c?A.fromEquirectangular(a):A.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",i),u.texture):null}}}return a}function r(a){let o=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&o++;return o===c}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap,A!==null&&(A.dispose(),A=null)}return{get:n,dispose:s}}function I_(t){const e={};function A(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(n)}return e[n]=r,r}return{has:function(n){return A(n)!==null},init:function(){A("EXT_color_buffer_float"),A("WEBGL_clip_cull_distance"),A("OES_texture_float_linear"),A("EXT_color_buffer_half_float"),A("WEBGL_multisampled_render_to_texture"),A("WEBGL_render_shared_exponent")},get:function(n){const r=A(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function R_(t,e,A,n){const r={},i=new WeakMap;function s(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const m=h.morphAttributes[g];for(let d=0,f=m.length;d<f;d++)e.remove(m[d])}h.removeEventListener("dispose",s),delete r[h.id];const p=i.get(h);p&&(e.remove(p),i.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,A.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,A.memory.geometries++),h}function o(u){const h=u.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let d=0,f=m.length;d<f;d++)e.update(m[d],t.ARRAY_BUFFER)}}function c(u){const h=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let v=0,y=x.length;v<y;v+=3){const b=x[v+0],E=x[v+1],U=x[v+2];h.push(b,E,E,U,U,b)}}else if(g!==void 0){const x=g.array;m=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const b=v+0,E=v+1,U=v+2;h.push(b,E,E,U,U,b)}}else return;const d=new(Pp(h)?zp:Kp)(h,1);d.version=m;const f=i.get(u);f&&e.remove(f),i.set(u,d)}function l(u){const h=i.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return i.get(u)}return{get:a,update:o,getWireframeAttribute:l}}function L_(t,e,A){let n;function r(u){n=u}let i,s;function a(u){i=u.type,s=u.bytesPerElement}function o(u,h){t.drawElements(n,h,i,u*s),A.update(h,n,1)}function c(u,h,p){p!==0&&(t.drawElementsInstanced(n,h,i,u*s,p),A.update(h,n,p))}function l(u,h,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p;m++)this.render(u[m]/s,h[m]);else{g.multiDrawElementsWEBGL(n,h,0,i,u,0,p);let m=0;for(let d=0;d<p;d++)m+=h[d];A.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function D_(t){const e={geometries:0,textures:0},A={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,s,a){switch(A.calls++,s){case t.TRIANGLES:A.triangles+=a*(i/3);break;case t.LINES:A.lines+=a*(i/2);break;case t.LINE_STRIP:A.lines+=a*(i-1);break;case t.LINE_LOOP:A.lines+=a*i;break;case t.POINTS:A.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){A.calls=0,A.triangles=0,A.points=0,A.lines=0}return{memory:e,render:A,programs:null,autoReset:!0,reset:r,update:n}}function H_(t,e,A){const n=new WeakMap,r=new ft;function i(s,a,o){const c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let C=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*b*4*u),U=new Op(E,y,b,u);U.type=_n,U.needsUpdate=!0;const I=v*4;for(let B=0;B<u;B++){const Q=d[B],R=f[B],T=x[B],D=y*b*4*B;for(let N=0;N<Q.count;N++){const X=N*I;p===!0&&(r.fromBufferAttribute(Q,N),E[D+X+0]=r.x,E[D+X+1]=r.y,E[D+X+2]=r.z,E[D+X+3]=0),g===!0&&(r.fromBufferAttribute(R,N),E[D+X+4]=r.x,E[D+X+5]=r.y,E[D+X+6]=r.z,E[D+X+7]=0),m===!0&&(r.fromBufferAttribute(T,N),E[D+X+8]=r.x,E[D+X+9]=r.y,E[D+X+10]=r.z,E[D+X+11]=T.itemSize===4?r.w:1)}}h={count:u,texture:U,size:new Ke(y,b)},n.set(a,h),a.addEventListener("dispose",C)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",s.morphTexture,A);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const g=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(t,"morphTargetBaseInfluence",g),o.getUniforms().setValue(t,"morphTargetInfluences",c)}o.getUniforms().setValue(t,"morphTargetsTexture",h.texture,A),o.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:i}}function P_(t,e,A,n){let r=new WeakMap;function i(o){const c=n.render.frame,l=o.geometry,u=e.get(o,l);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),r.get(o)!==c&&(A.update(o.instanceMatrix,t.ARRAY_BUFFER),o.instanceColor!==null&&A.update(o.instanceColor,t.ARRAY_BUFFER),r.set(o,c))),o.isSkinnedMesh){const h=o.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function s(){r=new WeakMap}function a(o){const c=o.target;c.removeEventListener("dispose",a),A.remove(c.instanceMatrix),c.instanceColor!==null&&A.remove(c.instanceColor)}return{update:i,dispose:s}}class $p extends Zt{constructor(e,A,n,r,i,s,a,o,c,l){if(l=l!==void 0?l:Xr,l!==Xr&&l!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Xr&&(n=qr),n===void 0&&l===Ji&&(n=ns),super(null,r,i,s,a,o,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:A},this.magFilter=a!==void 0?a:pA,this.minFilter=o!==void 0?o:pA,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const A=super.toJSON(e);return this.compareFunction!==null&&(A.compareFunction=this.compareFunction),A}}const Jp=new Zt,qp=new $p(1,1);qp.compareFunction=Hp;const Zp=new Op,eg=new xv,tg=new jp,Kh=[],zh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),jh=new Float32Array(4);function di(t,e,A){const n=t[0];if(n<=0||n>0)return t;const r=e*A;let i=Kh[r];if(i===void 0&&(i=new Float32Array(r),Kh[r]=i),e!==0){n.toArray(i,0);for(let s=1,a=0;s!==e;++s)a+=A,t[s].toArray(i,a)}return i}function St(t,e){if(t.length!==e.length)return!1;for(let A=0,n=t.length;A<n;A++)if(t[A]!==e[A])return!1;return!0}function bt(t,e){for(let A=0,n=e.length;A<n;A++)t[A]=e[A]}function co(t,e){let A=zh[e];A===void 0&&(A=new Int32Array(e),zh[e]=A);for(let n=0;n!==e;++n)A[n]=t.allocateTextureUnit();return A}function N_(t,e){const A=this.cache;A[0]!==e&&(t.uniform1f(this.addr,e),A[0]=e)}function O_(t,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(St(A,e))return;t.uniform2fv(this.addr,e),bt(A,e)}}function k_(t,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else if(e.r!==void 0)(A[0]!==e.r||A[1]!==e.g||A[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),A[0]=e.r,A[1]=e.g,A[2]=e.b);else{if(St(A,e))return;t.uniform3fv(this.addr,e),bt(A,e)}}function G_(t,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z||A[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(St(A,e))return;t.uniform4fv(this.addr,e),bt(A,e)}}function V_(t,e){const A=this.cache,n=e.elements;if(n===void 0){if(St(A,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(A,e)}else{if(St(A,n))return;jh.set(n),t.uniformMatrix2fv(this.addr,!1,jh),bt(A,n)}}function K_(t,e){const A=this.cache,n=e.elements;if(n===void 0){if(St(A,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(A,e)}else{if(St(A,n))return;Xh.set(n),t.uniformMatrix3fv(this.addr,!1,Xh),bt(A,n)}}function z_(t,e){const A=this.cache,n=e.elements;if(n===void 0){if(St(A,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(A,e)}else{if(St(A,n))return;Wh.set(n),t.uniformMatrix4fv(this.addr,!1,Wh),bt(A,n)}}function W_(t,e){const A=this.cache;A[0]!==e&&(t.uniform1i(this.addr,e),A[0]=e)}function X_(t,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(St(A,e))return;t.uniform2iv(this.addr,e),bt(A,e)}}function j_(t,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else{if(St(A,e))return;t.uniform3iv(this.addr,e),bt(A,e)}}function Y_(t,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z||A[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(St(A,e))return;t.uniform4iv(this.addr,e),bt(A,e)}}function $_(t,e){const A=this.cache;A[0]!==e&&(t.uniform1ui(this.addr,e),A[0]=e)}function J_(t,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(St(A,e))return;t.uniform2uiv(this.addr,e),bt(A,e)}}function q_(t,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else{if(St(A,e))return;t.uniform3uiv(this.addr,e),bt(A,e)}}function Z_(t,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z||A[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(St(A,e))return;t.uniform4uiv(this.addr,e),bt(A,e)}}function eC(t,e,A){const n=this.cache,r=A.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r);const i=this.type===t.SAMPLER_2D_SHADOW?qp:Jp;A.setTexture2D(e||i,r)}function tC(t,e,A){const n=this.cache,r=A.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),A.setTexture3D(e||eg,r)}function AC(t,e,A){const n=this.cache,r=A.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),A.setTextureCube(e||tg,r)}function nC(t,e,A){const n=this.cache,r=A.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),A.setTexture2DArray(e||Zp,r)}function rC(t){switch(t){case 5126:return N_;case 35664:return O_;case 35665:return k_;case 35666:return G_;case 35674:return V_;case 35675:return K_;case 35676:return z_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return j_;case 35669:case 35673:return Y_;case 5125:return $_;case 36294:return J_;case 36295:return q_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return eC;case 35679:case 36299:case 36307:return tC;case 35680:case 36300:case 36308:case 36293:return AC;case 36289:case 36303:case 36311:case 36292:return nC}}function iC(t,e){t.uniform1fv(this.addr,e)}function sC(t,e){const A=di(e,this.size,2);t.uniform2fv(this.addr,A)}function aC(t,e){const A=di(e,this.size,3);t.uniform3fv(this.addr,A)}function oC(t,e){const A=di(e,this.size,4);t.uniform4fv(this.addr,A)}function cC(t,e){const A=di(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,A)}function lC(t,e){const A=di(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,A)}function uC(t,e){const A=di(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,A)}function hC(t,e){t.uniform1iv(this.addr,e)}function fC(t,e){t.uniform2iv(this.addr,e)}function dC(t,e){t.uniform3iv(this.addr,e)}function pC(t,e){t.uniform4iv(this.addr,e)}function gC(t,e){t.uniform1uiv(this.addr,e)}function mC(t,e){t.uniform2uiv(this.addr,e)}function BC(t,e){t.uniform3uiv(this.addr,e)}function vC(t,e){t.uniform4uiv(this.addr,e)}function wC(t,e,A){const n=this.cache,r=e.length,i=co(A,r);St(n,i)||(t.uniform1iv(this.addr,i),bt(n,i));for(let s=0;s!==r;++s)A.setTexture2D(e[s]||Jp,i[s])}function xC(t,e,A){const n=this.cache,r=e.length,i=co(A,r);St(n,i)||(t.uniform1iv(this.addr,i),bt(n,i));for(let s=0;s!==r;++s)A.setTexture3D(e[s]||eg,i[s])}function _C(t,e,A){const n=this.cache,r=e.length,i=co(A,r);St(n,i)||(t.uniform1iv(this.addr,i),bt(n,i));for(let s=0;s!==r;++s)A.setTextureCube(e[s]||tg,i[s])}function CC(t,e,A){const n=this.cache,r=e.length,i=co(A,r);St(n,i)||(t.uniform1iv(this.addr,i),bt(n,i));for(let s=0;s!==r;++s)A.setTexture2DArray(e[s]||Zp,i[s])}function EC(t){switch(t){case 5126:return iC;case 35664:return sC;case 35665:return aC;case 35666:return oC;case 35674:return cC;case 35675:return lC;case 35676:return uC;case 5124:case 35670:return hC;case 35667:case 35671:return fC;case 35668:case 35672:return dC;case 35669:case 35673:return pC;case 5125:return gC;case 36294:return mC;case 36295:return BC;case 36296:return vC;case 35678:case 36198:case 36298:case 36306:case 35682:return wC;case 35679:case 36299:case 36307:return xC;case 35680:case 36300:case 36308:case 36293:return _C;case 36289:case 36303:case 36311:case 36292:return CC}}class yC{constructor(e,A,n){this.id=e,this.addr=n,this.cache=[],this.type=A.type,this.setValue=rC(A.type)}}class UC{constructor(e,A,n){this.id=e,this.addr=n,this.cache=[],this.type=A.type,this.size=A.size,this.setValue=EC(A.type)}}class SC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,A,n){const r=this.seq;for(let i=0,s=r.length;i!==s;++i){const a=r[i];a.setValue(e,A[a.id],n)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function Yh(t,e){t.seq.push(e),t.map[e.id]=e}function bC(t,e,A){const n=t.name,r=n.length;for(pc.lastIndex=0;;){const i=pc.exec(n),s=pc.lastIndex;let a=i[1];const o=i[2]==="]",c=i[3];if(o&&(a=a|0),c===void 0||c==="["&&s+2===r){Yh(A,c===void 0?new yC(a,t,e):new UC(a,t,e));break}else{let u=A.map[a];u===void 0&&(u=new SC(a),Yh(A,u)),A=u}}}class da{constructor(e,A){this.seq=[],this.map={};const n=e.getProgramParameter(A,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=e.getActiveUniform(A,r),s=e.getUniformLocation(A,i.name);bC(i,s,this)}}setValue(e,A,n,r){const i=this.map[A];i!==void 0&&i.setValue(e,n,r)}setOptional(e,A,n){const r=A[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,A,n,r){for(let i=0,s=A.length;i!==s;++i){const a=A[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,A){const n=[];for(let r=0,i=e.length;r!==i;++r){const s=e[r];s.id in A&&n.push(s)}return n}}function $h(t,e,A){const n=t.createShader(e);return t.shaderSource(n,A),t.compileShader(n),n}const MC=37297;let FC=0;function TC(t,e){const A=t.split(`
`),n=[],r=Math.max(e-6,0),i=Math.min(e+6,A.length);for(let s=r;s<i;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${A[s]}`)}return n.join(`
`)}function QC(t){const e=Ze.getPrimaries(Ze.workingColorSpace),A=Ze.getPrimaries(t);let n;switch(e===A?n="":e===Da&&A===La?n="LinearDisplayP3ToLinearSRGB":e===La&&A===Da&&(n="LinearSRGBToLinearDisplayP3"),t){case Dn:case ao:return[n,"LinearTransferOETF"];case LA:case Jl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[n,"LinearTransferOETF"]}}function Jh(t,e,A){const n=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const s=parseInt(i[1]);return A.toUpperCase()+`

`+r+`

`+TC(t.getShaderSource(e),s)}else return r}function IC(t,e){const A=QC(e);return`vec4 ${t}( vec4 value ) { return ${A[0]}( ${A[1]}( value ) ); }`}function RC(t,e){let A;switch(e){case NB:A="Linear";break;case OB:A="Reinhard";break;case kB:A="OptimizedCineon";break;case GB:A="ACESFilmic";break;case KB:A="AgX";break;case zB:A="Neutral";break;case VB:A="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),A="Linear"}return"vec3 "+t+"( vec3 color ) { return "+A+"ToneMapping( color ); }"}function LC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function DC(t){const e=[];for(const A in t){const n=t[A];n!==!1&&e.push("#define "+A+" "+n)}return e.join(`
`)}function HC(t,e){const A={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=t.getActiveAttrib(e,r),s=i.name;let a=1;i.type===t.FLOAT_MAT2&&(a=2),i.type===t.FLOAT_MAT3&&(a=3),i.type===t.FLOAT_MAT4&&(a=4),A[s]={type:i.type,location:t.getAttribLocation(e,s),locationSize:a}}return A}function Fi(t){return t!==""}function qh(t,e){const A=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,A).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PC=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(t){return t.replace(PC,OC)}const NC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function OC(t,e){let A=Ne[e];if(A===void 0){const n=NC.get(e);if(n!==void 0)A=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return al(A)}const kC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(t){return t.replace(kC,GC)}function GC(t,e,A,n){let r="";for(let i=parseInt(e);i<parseInt(A);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function tf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uB?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function KC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $r:case Jr:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function WC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $l:e="ENVMAP_BLENDING_MULTIPLY";break;case HB:e="ENVMAP_BLENDING_MIX";break;case PB:e="ENVMAP_BLENDING_ADD";break}return e}function XC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const A=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,A),7*16)),texelHeight:n,maxMip:A}}function jC(t,e,A,n){const r=t.getContext(),i=A.defines;let s=A.vertexShader,a=A.fragmentShader;const o=VC(A),c=KC(A),l=zC(A),u=WC(A),h=XC(A),p=LC(A),g=DC(i),m=r.createProgram();let d,f,x=A.glslVersion?"#version "+A.glslVersion+`
`:"";A.isRawShaderMaterial?(d=["#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,g].filter(Fi).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,g].filter(Fi).join(`
`),f.length>0&&(f+=`
`)):(d=[tf(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,g,A.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",A.batching?"#define USE_BATCHING":"",A.instancing?"#define USE_INSTANCING":"",A.instancingColor?"#define USE_INSTANCING_COLOR":"",A.instancingMorph?"#define USE_INSTANCING_MORPH":"",A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.map?"#define USE_MAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+l:"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.displacementMap?"#define USE_DISPLACEMENTMAP":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.mapUv?"#define MAP_UV "+A.mapUv:"",A.alphaMapUv?"#define ALPHAMAP_UV "+A.alphaMapUv:"",A.lightMapUv?"#define LIGHTMAP_UV "+A.lightMapUv:"",A.aoMapUv?"#define AOMAP_UV "+A.aoMapUv:"",A.emissiveMapUv?"#define EMISSIVEMAP_UV "+A.emissiveMapUv:"",A.bumpMapUv?"#define BUMPMAP_UV "+A.bumpMapUv:"",A.normalMapUv?"#define NORMALMAP_UV "+A.normalMapUv:"",A.displacementMapUv?"#define DISPLACEMENTMAP_UV "+A.displacementMapUv:"",A.metalnessMapUv?"#define METALNESSMAP_UV "+A.metalnessMapUv:"",A.roughnessMapUv?"#define ROUGHNESSMAP_UV "+A.roughnessMapUv:"",A.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+A.anisotropyMapUv:"",A.clearcoatMapUv?"#define CLEARCOATMAP_UV "+A.clearcoatMapUv:"",A.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+A.clearcoatNormalMapUv:"",A.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+A.clearcoatRoughnessMapUv:"",A.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+A.iridescenceMapUv:"",A.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+A.iridescenceThicknessMapUv:"",A.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+A.sheenColorMapUv:"",A.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+A.sheenRoughnessMapUv:"",A.specularMapUv?"#define SPECULARMAP_UV "+A.specularMapUv:"",A.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+A.specularColorMapUv:"",A.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+A.specularIntensityMapUv:"",A.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+A.transmissionMapUv:"",A.thicknessMapUv?"#define THICKNESSMAP_UV "+A.thicknessMapUv:"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.flatShading?"#define FLAT_SHADED":"",A.skinning?"#define USE_SKINNING":"",A.morphTargets?"#define USE_MORPHTARGETS":"",A.morphNormals&&A.flatShading===!1?"#define USE_MORPHNORMALS":"",A.morphColors?"#define USE_MORPHCOLORS":"",A.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",A.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+A.morphTextureStride:"",A.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+A.morphTargetsCount:"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+o:"",A.sizeAttenuation?"#define USE_SIZEATTENUATION":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),f=[tf(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,g,A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",A.map?"#define USE_MAP":"",A.matcap?"#define USE_MATCAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+c:"",A.envMap?"#define "+l:"",A.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoat?"#define USE_CLEARCOAT":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.iridescence?"#define USE_IRIDESCENCE":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaTest?"#define USE_ALPHATEST":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.sheen?"#define USE_SHEEN":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors||A.instancingColor?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.gradientMap?"#define USE_GRADIENTMAP":"",A.flatShading?"#define FLAT_SHADED":"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+o:"",A.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",A.toneMapping!==Sn?"#define TONE_MAPPING":"",A.toneMapping!==Sn?Ne.tonemapping_pars_fragment:"",A.toneMapping!==Sn?RC("toneMapping",A.toneMapping):"",A.dithering?"#define DITHERING":"",A.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,IC("linearToOutputTexel",A.outputColorSpace),A.useDepthPacking?"#define DEPTH_PACKING "+A.depthPacking:"",`
`].filter(Fi).join(`
`)),s=al(s),s=qh(s,A),s=Zh(s,A),a=al(a),a=qh(a,A),a=Zh(a,A),s=ef(s),a=ef(a),A.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",A.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",A.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+d+s,y=x+f+a,b=$h(r,r.VERTEX_SHADER,v),E=$h(r,r.FRAGMENT_SHADER,y);r.attachShader(m,b),r.attachShader(m,E),A.index0AttributeName!==void 0?r.bindAttribLocation(m,0,A.index0AttributeName):A.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function U(Q){if(t.debug.checkShaderErrors){const R=r.getProgramInfoLog(m).trim(),T=r.getShaderInfoLog(b).trim(),D=r.getShaderInfoLog(E).trim();let N=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,E);else{const q=Jh(r,b,"vertex"),k=Jh(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+R+`
`+q+`
`+k)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(T===""||D==="")&&(X=!1);X&&(Q.diagnostics={runnable:N,programLog:R,vertexShader:{log:T,prefix:d},fragmentShader:{log:D,prefix:f}})}r.deleteShader(b),r.deleteShader(E),I=new da(r,m),C=HC(r,m)}let I;this.getUniforms=function(){return I===void 0&&U(this),I};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let B=A.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(m,MC)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=A.shaderType,this.name=A.shaderName,this.id=FC++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=E,this}let YC=0;class $C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const A=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(A),i=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const A=this.materialCache.get(e);for(const n of A)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const A=this.materialCache;let n=A.get(e);return n===void 0&&(n=new Set,A.set(e,n)),n}_getShaderStage(e){const A=this.shaderCache;let n=A.get(e);return n===void 0&&(n=new JC(e),A.set(e,n)),n}}class JC{constructor(e){this.id=YC++,this.code=e,this.usedTimes=0}}function qC(t,e,A,n,r,i,s){const a=new kp,o=new $C,c=new Set,l=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(C){return c.add(C),C===0?"uv":`uv${C}`}function d(C,B,Q,R,T){const D=R.fog,N=T.geometry,X=C.isMeshStandardMaterial?R.environment:null,q=(C.isMeshStandardMaterial?A:e).get(C.envMap||X),k=q&&q.mapping===so?q.image.height:null,j=g[C.type];C.precision!==null&&(p=r.getMaxPrecision(C.precision),p!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",p,"instead."));const J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ie=J!==void 0?J.length:0;let Z=0;N.morphAttributes.position!==void 0&&(Z=1),N.morphAttributes.normal!==void 0&&(Z=2),N.morphAttributes.color!==void 0&&(Z=3);let pe,O,Y,re;if(j){const Ht=DA[j];pe=Ht.vertexShader,O=Ht.fragmentShader}else pe=C.vertexShader,O=C.fragmentShader,o.update(C),Y=o.getVertexShaderID(C),re=o.getFragmentShaderID(C);const Ae=t.getRenderTarget(),Ee=T.isInstancedMesh===!0,we=T.isBatchedMesh===!0,Le=!!C.map,H=!!C.matcap,xe=!!q,Fe=!!C.aoMap,yt=!!C.lightMap,Qe=!!C.bumpMap,tt=!!C.normalMap,M=!!C.displacementMap,_=!!C.emissiveMap,z=!!C.metalnessMap,$=!!C.roughnessMap,ee=C.anisotropy>0,te=C.clearcoat>0,be=C.iridescence>0,ne=C.sheen>0,ye=C.transmission>0,Me=ee&&!!C.anisotropyMap,oe=te&&!!C.clearcoatMap,de=te&&!!C.clearcoatNormalMap,Ie=te&&!!C.clearcoatRoughnessMap,me=be&&!!C.iridescenceMap,Be=be&&!!C.iridescenceThicknessMap,ze=ne&&!!C.sheenColorMap,We=ne&&!!C.sheenRoughnessMap,qe=!!C.specularMap,je=!!C.specularColorMap,ot=!!C.specularIntensityMap,_e=ye&&!!C.transmissionMap,F=ye&&!!C.thicknessMap,ae=!!C.gradientMap,se=!!C.alphaMap,Ce=C.alphaTest>0,Ue=!!C.alphaHash,At=!!C.extensions;let ct=Sn;C.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ct=t.toneMapping);const dt={shaderID:j,shaderType:C.type,shaderName:C.name,vertexShader:pe,fragmentShader:O,defines:C.defines,customVertexShaderID:Y,customFragmentShaderID:re,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:p,batching:we,instancing:Ee,instancingColor:Ee&&T.instanceColor!==null,instancingMorph:Ee&&T.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Dn,alphaToCoverage:!!C.alphaToCoverage,map:Le,matcap:H,envMap:xe,envMapMode:xe&&q.mapping,envMapCubeUVHeight:k,aoMap:Fe,lightMap:yt,bumpMap:Qe,normalMap:tt,displacementMap:h&&M,emissiveMap:_,normalMapObjectSpace:tt&&C.normalMapType===iv,normalMapTangentSpace:tt&&C.normalMapType===Dp,metalnessMap:z,roughnessMap:$,anisotropy:ee,anisotropyMap:Me,clearcoat:te,clearcoatMap:oe,clearcoatNormalMap:de,clearcoatRoughnessMap:Ie,iridescence:be,iridescenceMap:me,iridescenceThicknessMap:Be,sheen:ne,sheenColorMap:ze,sheenRoughnessMap:We,specularMap:qe,specularColorMap:je,specularIntensityMap:ot,transmission:ye,transmissionMap:_e,thicknessMap:F,gradientMap:ae,opaque:C.transparent===!1&&C.blending===Wr&&C.alphaToCoverage===!1,alphaMap:se,alphaTest:Ce,alphaHash:Ue,combine:C.combine,mapUv:Le&&m(C.map.channel),aoMapUv:Fe&&m(C.aoMap.channel),lightMapUv:yt&&m(C.lightMap.channel),bumpMapUv:Qe&&m(C.bumpMap.channel),normalMapUv:tt&&m(C.normalMap.channel),displacementMapUv:M&&m(C.displacementMap.channel),emissiveMapUv:_&&m(C.emissiveMap.channel),metalnessMapUv:z&&m(C.metalnessMap.channel),roughnessMapUv:$&&m(C.roughnessMap.channel),anisotropyMapUv:Me&&m(C.anisotropyMap.channel),clearcoatMapUv:oe&&m(C.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&m(C.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(C.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(C.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&m(C.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(C.sheenRoughnessMap.channel),specularMapUv:qe&&m(C.specularMap.channel),specularColorMapUv:je&&m(C.specularColorMap.channel),specularIntensityMapUv:ot&&m(C.specularIntensityMap.channel),transmissionMapUv:_e&&m(C.transmissionMap.channel),thicknessMapUv:F&&m(C.thicknessMap.channel),alphaMapUv:se&&m(C.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(tt||ee),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!N.attributes.uv&&(Le||se),fog:!!D,useFog:C.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:T.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Z,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:C.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:ct,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Le&&C.map.isVideoTexture===!0&&Ze.getTransfer(C.map.colorSpace)===at,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===NA,flipSided:C.side===Wt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:At&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:At&&C.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function f(C){const B=[];if(C.shaderID?B.push(C.shaderID):(B.push(C.customVertexShaderID),B.push(C.customFragmentShaderID)),C.defines!==void 0)for(const Q in C.defines)B.push(Q),B.push(C.defines[Q]);return C.isRawShaderMaterial===!1&&(x(B,C),v(B,C),B.push(t.outputColorSpace)),B.push(C.customProgramCacheKey),B.join()}function x(C,B){C.push(B.precision),C.push(B.outputColorSpace),C.push(B.envMapMode),C.push(B.envMapCubeUVHeight),C.push(B.mapUv),C.push(B.alphaMapUv),C.push(B.lightMapUv),C.push(B.aoMapUv),C.push(B.bumpMapUv),C.push(B.normalMapUv),C.push(B.displacementMapUv),C.push(B.emissiveMapUv),C.push(B.metalnessMapUv),C.push(B.roughnessMapUv),C.push(B.anisotropyMapUv),C.push(B.clearcoatMapUv),C.push(B.clearcoatNormalMapUv),C.push(B.clearcoatRoughnessMapUv),C.push(B.iridescenceMapUv),C.push(B.iridescenceThicknessMapUv),C.push(B.sheenColorMapUv),C.push(B.sheenRoughnessMapUv),C.push(B.specularMapUv),C.push(B.specularColorMapUv),C.push(B.specularIntensityMapUv),C.push(B.transmissionMapUv),C.push(B.thicknessMapUv),C.push(B.combine),C.push(B.fogExp2),C.push(B.sizeAttenuation),C.push(B.morphTargetsCount),C.push(B.morphAttributeCount),C.push(B.numDirLights),C.push(B.numPointLights),C.push(B.numSpotLights),C.push(B.numSpotLightMaps),C.push(B.numHemiLights),C.push(B.numRectAreaLights),C.push(B.numDirLightShadows),C.push(B.numPointLightShadows),C.push(B.numSpotLightShadows),C.push(B.numSpotLightShadowsWithMaps),C.push(B.numLightProbes),C.push(B.shadowMapType),C.push(B.toneMapping),C.push(B.numClippingPlanes),C.push(B.numClipIntersection),C.push(B.depthPacking)}function v(C,B){a.disableAll(),B.supportsVertexTextures&&a.enable(0),B.instancing&&a.enable(1),B.instancingColor&&a.enable(2),B.instancingMorph&&a.enable(3),B.matcap&&a.enable(4),B.envMap&&a.enable(5),B.normalMapObjectSpace&&a.enable(6),B.normalMapTangentSpace&&a.enable(7),B.clearcoat&&a.enable(8),B.iridescence&&a.enable(9),B.alphaTest&&a.enable(10),B.vertexColors&&a.enable(11),B.vertexAlphas&&a.enable(12),B.vertexUv1s&&a.enable(13),B.vertexUv2s&&a.enable(14),B.vertexUv3s&&a.enable(15),B.vertexTangents&&a.enable(16),B.anisotropy&&a.enable(17),B.alphaHash&&a.enable(18),B.batching&&a.enable(19),C.push(a.mask),a.disableAll(),B.fog&&a.enable(0),B.useFog&&a.enable(1),B.flatShading&&a.enable(2),B.logarithmicDepthBuffer&&a.enable(3),B.skinning&&a.enable(4),B.morphTargets&&a.enable(5),B.morphNormals&&a.enable(6),B.morphColors&&a.enable(7),B.premultipliedAlpha&&a.enable(8),B.shadowMapEnabled&&a.enable(9),B.useLegacyLights&&a.enable(10),B.doubleSided&&a.enable(11),B.flipSided&&a.enable(12),B.useDepthPacking&&a.enable(13),B.dithering&&a.enable(14),B.transmission&&a.enable(15),B.sheen&&a.enable(16),B.opaque&&a.enable(17),B.pointsUvs&&a.enable(18),B.decodeVideoTexture&&a.enable(19),B.alphaToCoverage&&a.enable(20),C.push(a.mask)}function y(C){const B=g[C.type];let Q;if(B){const R=DA[B];Q=Rv.clone(R.uniforms)}else Q=C.uniforms;return Q}function b(C,B){let Q;for(let R=0,T=l.length;R<T;R++){const D=l[R];if(D.cacheKey===B){Q=D,++Q.usedTimes;break}}return Q===void 0&&(Q=new jC(t,B,C,i),l.push(Q)),Q}function E(C){if(--C.usedTimes===0){const B=l.indexOf(C);l[B]=l[l.length-1],l.pop(),C.destroy()}}function U(C){o.remove(C)}function I(){o.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:U,programs:l,dispose:I}}function ZC(){let t=new WeakMap;function e(i){let s=t.get(i);return s===void 0&&(s={},t.set(i,s)),s}function A(i){t.delete(i)}function n(i,s,a){t.get(i)[s]=a}function r(){t=new WeakMap}return{get:e,remove:A,update:n,dispose:r}}function eE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Af(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nf(){const t=[];let e=0;const A=[],n=[],r=[];function i(){e=0,A.length=0,n.length=0,r.length=0}function s(u,h,p,g,m,d){let f=t[e];return f===void 0?(f={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:d},t[e]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=m,f.group=d),e++,f}function a(u,h,p,g,m,d){const f=s(u,h,p,g,m,d);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):A.push(f)}function o(u,h,p,g,m,d){const f=s(u,h,p,g,m,d);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):A.unshift(f)}function c(u,h){A.length>1&&A.sort(u||eE),n.length>1&&n.sort(h||Af),r.length>1&&r.sort(h||Af)}function l(){for(let u=e,h=t.length;u<h;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:A,transmissive:n,transparent:r,init:i,push:a,unshift:o,finish:l,sort:c}}function tE(){let t=new WeakMap;function e(n,r){const i=t.get(n);let s;return i===void 0?(s=new nf,t.set(n,[s])):r>=i.length?(s=new nf,i.push(s)):s=i[r],s}function A(){t=new WeakMap}return{get:e,dispose:A}}function AE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let A;switch(e.type){case"DirectionalLight":A={direction:new P,color:new Xe};break;case"SpotLight":A={position:new P,direction:new P,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":A={position:new P,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":A={direction:new P,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":A={color:new Xe,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=A,A}}}function nE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let A;switch(e.type){case"DirectionalLight":A={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":A={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":A={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=A,A}}}let rE=0;function iE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sE(t){const e=new AE,A=nE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const r=new P,i=new gt,s=new gt;function a(c,l){let u=0,h=0,p=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let g=0,m=0,d=0,f=0,x=0,v=0,y=0,b=0,E=0,U=0,I=0;c.sort(iE);const C=l===!0?Math.PI:1;for(let Q=0,R=c.length;Q<R;Q++){const T=c[Q],D=T.color,N=T.intensity,X=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=D.r*N*C,h+=D.g*N*C,p+=D.b*N*C;else if(T.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(T.sh.coefficients[k],N);I++}else if(T.isDirectionalLight){const k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity*C),T.castShadow){const j=T.shadow,J=A.get(T);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=T.shadow.matrix,v++}n.directional[g]=k,g++}else if(T.isSpotLight){const k=e.get(T);k.position.setFromMatrixPosition(T.matrixWorld),k.color.copy(D).multiplyScalar(N*C),k.distance=X,k.coneCos=Math.cos(T.angle),k.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),k.decay=T.decay,n.spot[d]=k;const j=T.shadow;if(T.map&&(n.spotLightMap[E]=T.map,E++,j.updateMatrices(T),T.castShadow&&U++),n.spotLightMatrix[d]=j.matrix,T.castShadow){const J=A.get(T);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,n.spotShadow[d]=J,n.spotShadowMap[d]=q,b++}d++}else if(T.isRectAreaLight){const k=e.get(T);k.color.copy(D).multiplyScalar(N),k.halfWidth.set(T.width*.5,0,0),k.halfHeight.set(0,T.height*.5,0),n.rectArea[f]=k,f++}else if(T.isPointLight){const k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity*C),k.distance=T.distance,k.decay=T.decay,T.castShadow){const j=T.shadow,J=A.get(T);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=T.shadow.matrix,y++}n.point[m]=k,m++}else if(T.isHemisphereLight){const k=e.get(T);k.skyColor.copy(T.color).multiplyScalar(N*C),k.groundColor.copy(T.groundColor).multiplyScalar(N*C),n.hemi[x]=k,x++}}f>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const B=n.hash;(B.directionalLength!==g||B.pointLength!==m||B.spotLength!==d||B.rectAreaLength!==f||B.hemiLength!==x||B.numDirectionalShadows!==v||B.numPointShadows!==y||B.numSpotShadows!==b||B.numSpotMaps!==E||B.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=d,n.rectArea.length=f,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+E-U,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=I,B.directionalLength=g,B.pointLength=m,B.spotLength=d,B.rectAreaLength=f,B.hemiLength=x,B.numDirectionalShadows=v,B.numPointShadows=y,B.numSpotShadows=b,B.numSpotMaps=E,B.numLightProbes=I,n.version=rE++)}function o(c,l){let u=0,h=0,p=0,g=0,m=0;const d=l.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const v=c[f];if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),u++}else if(v.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),p++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(d),s.identity(),i.copy(v.matrixWorld),i.premultiply(d),s.extractRotation(i),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(d),h++}else if(v.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:a,setupView:o,state:n}}function rf(t){const e=new sE(t),A=[],n=[];function r(){A.length=0,n.length=0}function i(l){A.push(l)}function s(l){n.push(l)}function a(l){e.setup(A,l)}function o(l){e.setupView(A,l)}return{init:r,state:{lightsArray:A,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:o,pushLight:i,pushShadow:s}}function aE(t){let e=new WeakMap;function A(r,i=0){const s=e.get(r);let a;return s===void 0?(a=new rf(t),e.set(r,[a])):i>=s.length?(a=new rf(t),s.push(a)):a=s[i],a}function n(){e=new WeakMap}return{get:A,dispose:n}}class oE extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uE=`uniform sampler2D shadow_pass;
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
}`;function hE(t,e,A){let n=new Zl;const r=new Ke,i=new Ke,s=new ft,a=new oE({depthPacking:rv}),o=new cE,c={},l=A.maxTextureSize,u={[In]:Wt,[Wt]:In,[NA]:NA},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:lE,fragmentShader:uE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new GA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new kA(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let f=this.type;this.render=function(E,U,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const C=t.getRenderTarget(),B=t.getActiveCubeFace(),Q=t.getActiveMipmapLevel(),R=t.state;R.setBlending(Un),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const T=f!==tn&&this.type===tn,D=f===tn&&this.type!==tn;for(let N=0,X=E.length;N<X;N++){const q=E[N],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const j=k.getFrameExtents();if(r.multiply(j),i.copy(k.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(i.x=Math.floor(l/j.x),r.x=i.x*j.x,k.mapSize.x=i.x),r.y>l&&(i.y=Math.floor(l/j.y),r.y=i.y*j.y,k.mapSize.y=i.y)),k.map===null||T===!0||D===!0){const ie=this.type!==tn?{minFilter:pA,magFilter:pA}:{};k.map!==null&&k.map.dispose(),k.map=new ur(r.x,r.y,ie),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const J=k.getViewportCount();for(let ie=0;ie<J;ie++){const Z=k.getViewport(ie);s.set(i.x*Z.x,i.y*Z.y,i.x*Z.z,i.y*Z.w),R.viewport(s),k.updateMatrices(q,ie),n=k.getFrustum(),y(U,I,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===tn&&x(k,I),k.needsUpdate=!1}f=this.type,d.needsUpdate=!1,t.setRenderTarget(C,B,Q)};function x(E,U){const I=e.update(m);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ur(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(U,null,I,h,m,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(U,null,I,p,m,null)}function v(E,U,I,C){let B=null;const Q=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(Q!==void 0)B=Q;else if(B=I.isPointLight===!0?o:a,t.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const R=B.uuid,T=U.uuid;let D=c[R];D===void 0&&(D={},c[R]=D);let N=D[T];N===void 0&&(N=B.clone(),D[T]=N,U.addEventListener("dispose",b)),B=N}if(B.visible=U.visible,B.wireframe=U.wireframe,C===tn?B.side=U.shadowSide!==null?U.shadowSide:U.side:B.side=U.shadowSide!==null?U.shadowSide:u[U.side],B.alphaMap=U.alphaMap,B.alphaTest=U.alphaTest,B.map=U.map,B.clipShadows=U.clipShadows,B.clippingPlanes=U.clippingPlanes,B.clipIntersection=U.clipIntersection,B.displacementMap=U.displacementMap,B.displacementScale=U.displacementScale,B.displacementBias=U.displacementBias,B.wireframeLinewidth=U.wireframeLinewidth,B.linewidth=U.linewidth,I.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const R=t.properties.get(B);R.light=I}return B}function y(E,U,I,C,B){if(E.visible===!1)return;if(E.layers.test(U.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&B===tn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const T=e.update(E),D=E.material;if(Array.isArray(D)){const N=T.groups;for(let X=0,q=N.length;X<q;X++){const k=N[X],j=D[k.materialIndex];if(j&&j.visible){const J=v(E,j,C,B);E.onBeforeShadow(t,E,U,I,T,J,k),t.renderBufferDirect(I,null,T,J,E,k),E.onAfterShadow(t,E,U,I,T,J,k)}}}else if(D.visible){const N=v(E,D,C,B);E.onBeforeShadow(t,E,U,I,T,N,null),t.renderBufferDirect(I,null,T,N,E,null),E.onAfterShadow(t,E,U,I,T,N,null)}}const R=E.children;for(let T=0,D=R.length;T<D;T++)y(R[T],U,I,C,B)}function b(E){E.target.removeEventListener("dispose",b);for(const I in c){const C=c[I],B=E.target.uuid;B in C&&(C[B].dispose(),delete C[B])}}}function fE(t){function e(){let F=!1;const ae=new ft;let se=null;const Ce=new ft(0,0,0,0);return{setMask:function(Ue){se!==Ue&&!F&&(t.colorMask(Ue,Ue,Ue,Ue),se=Ue)},setLocked:function(Ue){F=Ue},setClear:function(Ue,At,ct,dt,Ht){Ht===!0&&(Ue*=dt,At*=dt,ct*=dt),ae.set(Ue,At,ct,dt),Ce.equals(ae)===!1&&(t.clearColor(Ue,At,ct,dt),Ce.copy(ae))},reset:function(){F=!1,se=null,Ce.set(-1,0,0,0)}}}function A(){let F=!1,ae=null,se=null,Ce=null;return{setTest:function(Ue){Ue?re(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Ue){ae!==Ue&&!F&&(t.depthMask(Ue),ae=Ue)},setFunc:function(Ue){if(se!==Ue){switch(Ue){case FB:t.depthFunc(t.NEVER);break;case TB:t.depthFunc(t.ALWAYS);break;case QB:t.depthFunc(t.LESS);break;case Qa:t.depthFunc(t.LEQUAL);break;case IB:t.depthFunc(t.EQUAL);break;case RB:t.depthFunc(t.GEQUAL);break;case LB:t.depthFunc(t.GREATER);break;case DB:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=Ue}},setLocked:function(Ue){F=Ue},setClear:function(Ue){Ce!==Ue&&(t.clearDepth(Ue),Ce=Ue)},reset:function(){F=!1,ae=null,se=null,Ce=null}}}function n(){let F=!1,ae=null,se=null,Ce=null,Ue=null,At=null,ct=null,dt=null,Ht=null;return{setTest:function(rt){F||(rt?re(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(rt){ae!==rt&&!F&&(t.stencilMask(rt),ae=rt)},setFunc:function(rt,QA,IA){(se!==rt||Ce!==QA||Ue!==IA)&&(t.stencilFunc(rt,QA,IA),se=rt,Ce=QA,Ue=IA)},setOp:function(rt,QA,IA){(At!==rt||ct!==QA||dt!==IA)&&(t.stencilOp(rt,QA,IA),At=rt,ct=QA,dt=IA)},setLocked:function(rt){F=rt},setClear:function(rt){Ht!==rt&&(t.clearStencil(rt),Ht=rt)},reset:function(){F=!1,ae=null,se=null,Ce=null,Ue=null,At=null,ct=null,dt=null,Ht=null}}}const r=new e,i=new A,s=new n,a=new WeakMap,o=new WeakMap;let c={},l={},u=new WeakMap,h=[],p=null,g=!1,m=null,d=null,f=null,x=null,v=null,y=null,b=null,E=new Xe(0,0,0),U=0,I=!1,C=null,B=null,Q=null,R=null,T=null;const D=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),N=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),N=X>=2);let k=null,j={};const J=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Z=new ft().fromArray(J),pe=new ft().fromArray(ie);function O(F,ae,se,Ce){const Ue=new Uint8Array(4),At=t.createTexture();t.bindTexture(F,At),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<se;ct++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Ue):t.texImage2D(ae+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ue);return At}const Y={};Y[t.TEXTURE_2D]=O(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=O(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=O(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=O(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),i.setClear(1),s.setClear(0),re(t.DEPTH_TEST),i.setFunc(Qa),Qe(!1),tt(Ou),re(t.CULL_FACE),Fe(Un);function re(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function Ae(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function Ee(F,ae){return l[F]!==ae?(t.bindFramebuffer(F,ae),l[F]=ae,F===t.DRAW_FRAMEBUFFER&&(l[t.FRAMEBUFFER]=ae),F===t.FRAMEBUFFER&&(l[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function we(F,ae){let se=h,Ce=!1;if(F){se=u.get(ae),se===void 0&&(se=[],u.set(ae,se));const Ue=F.textures;if(se.length!==Ue.length||se[0]!==t.COLOR_ATTACHMENT0){for(let At=0,ct=Ue.length;At<ct;At++)se[At]=t.COLOR_ATTACHMENT0+At;se.length=Ue.length,Ce=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,Ce=!0);Ce&&t.drawBuffers(se)}function Le(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const H={[$n]:t.FUNC_ADD,[fB]:t.FUNC_SUBTRACT,[dB]:t.FUNC_REVERSE_SUBTRACT};H[pB]=t.MIN,H[gB]=t.MAX;const xe={[mB]:t.ZERO,[BB]:t.ONE,[vB]:t.SRC_COLOR,[el]:t.SRC_ALPHA,[yB]:t.SRC_ALPHA_SATURATE,[CB]:t.DST_COLOR,[xB]:t.DST_ALPHA,[wB]:t.ONE_MINUS_SRC_COLOR,[tl]:t.ONE_MINUS_SRC_ALPHA,[EB]:t.ONE_MINUS_DST_COLOR,[_B]:t.ONE_MINUS_DST_ALPHA,[UB]:t.CONSTANT_COLOR,[SB]:t.ONE_MINUS_CONSTANT_COLOR,[bB]:t.CONSTANT_ALPHA,[MB]:t.ONE_MINUS_CONSTANT_ALPHA};function Fe(F,ae,se,Ce,Ue,At,ct,dt,Ht,rt){if(F===Un){g===!0&&(Ae(t.BLEND),g=!1);return}if(g===!1&&(re(t.BLEND),g=!0),F!==hB){if(F!==m||rt!==I){if((d!==$n||v!==$n)&&(t.blendEquation(t.FUNC_ADD),d=$n,v=$n),rt)switch(F){case Wr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ku:t.blendFunc(t.ONE,t.ONE);break;case Gu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Wr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ku:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,x=null,y=null,b=null,E.set(0,0,0),U=0,m=F,I=rt}return}Ue=Ue||ae,At=At||se,ct=ct||Ce,(ae!==d||Ue!==v)&&(t.blendEquationSeparate(H[ae],H[Ue]),d=ae,v=Ue),(se!==f||Ce!==x||At!==y||ct!==b)&&(t.blendFuncSeparate(xe[se],xe[Ce],xe[At],xe[ct]),f=se,x=Ce,y=At,b=ct),(dt.equals(E)===!1||Ht!==U)&&(t.blendColor(dt.r,dt.g,dt.b,Ht),E.copy(dt),U=Ht),m=F,I=!1}function yt(F,ae){F.side===NA?Ae(t.CULL_FACE):re(t.CULL_FACE);let se=F.side===Wt;ae&&(se=!se),Qe(se),F.blending===Wr&&F.transparent===!1?Fe(Un):Fe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),i.setFunc(F.depthFunc),i.setTest(F.depthTest),i.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ce=F.stencilWrite;s.setTest(Ce),Ce&&(s.setMask(F.stencilWriteMask),s.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),s.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),_(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(F){C!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),C=F)}function tt(F){F!==cB?(re(t.CULL_FACE),F!==B&&(F===Ou?t.cullFace(t.BACK):F===lB?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),B=F}function M(F){F!==Q&&(N&&t.lineWidth(F),Q=F)}function _(F,ae,se){F?(re(t.POLYGON_OFFSET_FILL),(R!==ae||T!==se)&&(t.polygonOffset(ae,se),R=ae,T=se)):Ae(t.POLYGON_OFFSET_FILL)}function z(F){F?re(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function $(F){F===void 0&&(F=t.TEXTURE0+D-1),k!==F&&(t.activeTexture(F),k=F)}function ee(F,ae,se){se===void 0&&(k===null?se=t.TEXTURE0+D-1:se=k);let Ce=j[se];Ce===void 0&&(Ce={type:void 0,texture:void 0},j[se]=Ce),(Ce.type!==F||Ce.texture!==ae)&&(k!==se&&(t.activeTexture(se),k=se),t.bindTexture(F,ae||Y[F]),Ce.type=F,Ce.texture=ae)}function te(){const F=j[k];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function be(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(F){Z.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function qe(F){pe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),pe.copy(F))}function je(F,ae){let se=o.get(ae);se===void 0&&(se=new WeakMap,o.set(ae,se));let Ce=se.get(F);Ce===void 0&&(Ce=t.getUniformBlockIndex(ae,F.name),se.set(F,Ce))}function ot(F,ae){const Ce=o.get(ae).get(F);a.get(ae)!==Ce&&(t.uniformBlockBinding(ae,Ce,F.__bindingPointIndex),a.set(ae,Ce))}function _e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},k=null,j={},l={},u=new WeakMap,h=[],p=null,g=!1,m=null,d=null,f=null,x=null,v=null,y=null,b=null,E=new Xe(0,0,0),U=0,I=!1,C=null,B=null,Q=null,R=null,T=null,Z.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),i.reset(),s.reset()}return{buffers:{color:r,depth:i,stencil:s},enable:re,disable:Ae,bindFramebuffer:Ee,drawBuffers:we,useProgram:Le,setBlending:Fe,setMaterial:yt,setFlipSided:Qe,setCullFace:tt,setLineWidth:M,setPolygonOffset:_,setScissorTest:z,activeTexture:$,bindTexture:ee,unbindTexture:te,compressedTexImage2D:be,compressedTexImage3D:ne,texImage2D:Be,texImage3D:ze,updateUBOMapping:je,uniformBlockBinding:ot,texStorage2D:Ie,texStorage3D:me,texSubImage2D:ye,texSubImage3D:Me,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:We,viewport:qe,reset:_e}}function dE(t,e,A,n,r,i,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,l=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):Pa("canvas")}function m(M,_,z){let $=1;const ee=tt(M);if((ee.width>z||ee.height>z)&&($=z/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const te=Math.floor($*ee.width),be=Math.floor($*ee.height);u===void 0&&(u=g(te,be));const ne=_?g(te,be):u;return ne.width=te,ne.height=be,ne.getContext("2d").drawImage(M,0,0,te,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+be+")."),ne}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),M;return M}function d(M){return M.generateMipmaps&&M.minFilter!==pA&&M.minFilter!==UA}function f(M){t.generateMipmap(M)}function x(M,_,z,$,ee=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let te=_;if(_===t.RED&&(z===t.FLOAT&&(te=t.R32F),z===t.HALF_FLOAT&&(te=t.R16F),z===t.UNSIGNED_BYTE&&(te=t.R8)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.R8UI),z===t.UNSIGNED_SHORT&&(te=t.R16UI),z===t.UNSIGNED_INT&&(te=t.R32UI),z===t.BYTE&&(te=t.R8I),z===t.SHORT&&(te=t.R16I),z===t.INT&&(te=t.R32I)),_===t.RG&&(z===t.FLOAT&&(te=t.RG32F),z===t.HALF_FLOAT&&(te=t.RG16F),z===t.UNSIGNED_BYTE&&(te=t.RG8)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.RG8UI),z===t.UNSIGNED_SHORT&&(te=t.RG16UI),z===t.UNSIGNED_INT&&(te=t.RG32UI),z===t.BYTE&&(te=t.RG8I),z===t.SHORT&&(te=t.RG16I),z===t.INT&&(te=t.RG32I)),_===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),_===t.RGBA){const be=ee?Ra:Ze.getTransfer($);z===t.FLOAT&&(te=t.RGBA32F),z===t.HALF_FLOAT&&(te=t.RGBA16F),z===t.UNSIGNED_BYTE&&(te=be===at?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(M,_){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==pA&&M.minFilter!==UA?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function y(M){const _=M.target;_.removeEventListener("dispose",y),E(_),_.isVideoTexture&&l.delete(_)}function b(M){const _=M.target;_.removeEventListener("dispose",b),I(_)}function E(M){const _=n.get(M);if(_.__webglInit===void 0)return;const z=M.source,$=h.get(z);if($){const ee=$[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&U(M),Object.keys($).length===0&&h.delete(z)}n.remove(M)}function U(M){const _=n.get(M);t.deleteTexture(_.__webglTexture);const z=M.source,$=h.get(z);delete $[_.__cacheKey],s.memory.textures--}function I(M){const _=n.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let ee=0;ee<_.__webglFramebuffer[$].length;ee++)t.deleteFramebuffer(_.__webglFramebuffer[$][ee]);else t.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)t.deleteFramebuffer(_.__webglFramebuffer[$]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=M.textures;for(let $=0,ee=z.length;$<ee;$++){const te=n.get(z[$]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),n.remove(z[$])}n.remove(M)}let C=0;function B(){C=0}function Q(){const M=C;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),C+=1,M}function R(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function T(M,_){const z=n.get(M);if(M.isVideoTexture&&yt(M),M.isRenderTargetTexture===!1&&M.version>0&&z.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,M,_);return}}A.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function D(M,_){const z=n.get(M);if(M.version>0&&z.__version!==M.version){Z(z,M,_);return}A.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function N(M,_){const z=n.get(M);if(M.version>0&&z.__version!==M.version){Z(z,M,_);return}A.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function X(M,_){const z=n.get(M);if(M.version>0&&z.__version!==M.version){pe(z,M,_);return}A.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const q={[rl]:t.REPEAT,[Zn]:t.CLAMP_TO_EDGE,[il]:t.MIRRORED_REPEAT},k={[pA]:t.NEAREST,[WB]:t.NEAREST_MIPMAP_NEAREST,[ds]:t.NEAREST_MIPMAP_LINEAR,[UA]:t.LINEAR,[No]:t.LINEAR_MIPMAP_NEAREST,[er]:t.LINEAR_MIPMAP_LINEAR},j={[sv]:t.NEVER,[hv]:t.ALWAYS,[av]:t.LESS,[Hp]:t.LEQUAL,[ov]:t.EQUAL,[uv]:t.GEQUAL,[cv]:t.GREATER,[lv]:t.NOTEQUAL};function J(M,_){if(_.type===_n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===UA||_.magFilter===No||_.magFilter===ds||_.magFilter===er||_.minFilter===UA||_.minFilter===No||_.minFilter===ds||_.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,q[_.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,q[_.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,q[_.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,k[_.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,k[_.minFilter]),_.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,j[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===pA||_.minFilter!==ds&&_.minFilter!==er||_.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ie(M,_){let z=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",y));const $=_.source;let ee=h.get($);ee===void 0&&(ee={},h.set($,ee));const te=R(_);if(te!==M.__cacheKey){ee[te]===void 0&&(ee[te]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ee[te].usedTimes++;const be=ee[M.__cacheKey];be!==void 0&&(ee[M.__cacheKey].usedTimes--,be.usedTimes===0&&U(_)),M.__cacheKey=te,M.__webglTexture=ee[te].texture}return z}function Z(M,_,z){let $=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=t.TEXTURE_3D);const ee=ie(M,_),te=_.source;A.bindTexture($,M.__webglTexture,t.TEXTURE0+z);const be=n.get(te);if(te.version!==be.__version||ee===!0){A.activeTexture(t.TEXTURE0+z);const ne=Ze.getPrimaries(Ze.workingColorSpace),ye=_.colorSpace===wn?null:Ze.getPrimaries(_.colorSpace),Me=_.colorSpace===wn||ne===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let oe=m(_.image,!1,r.maxTextureSize);oe=Qe(_,oe);const de=i.convert(_.format,_.colorSpace),Ie=i.convert(_.type);let me=x(_.internalFormat,de,Ie,_.colorSpace,_.isVideoTexture);J($,_);let Be;const ze=_.mipmaps,We=_.isVideoTexture!==!0&&me!==Lp,qe=be.__version===void 0||ee===!0,je=te.dataReady,ot=v(_,oe);if(_.isDepthTexture)me=t.DEPTH_COMPONENT16,_.type===_n?me=t.DEPTH_COMPONENT32F:_.type===qr?me=t.DEPTH_COMPONENT24:_.type===ns&&(me=t.DEPTH24_STENCIL8),qe&&(We?A.texStorage2D(t.TEXTURE_2D,1,me,oe.width,oe.height):A.texImage2D(t.TEXTURE_2D,0,me,oe.width,oe.height,0,de,Ie,null));else if(_.isDataTexture)if(ze.length>0){We&&qe&&A.texStorage2D(t.TEXTURE_2D,ot,me,ze[0].width,ze[0].height);for(let _e=0,F=ze.length;_e<F;_e++)Be=ze[_e],We?je&&A.texSubImage2D(t.TEXTURE_2D,_e,0,0,Be.width,Be.height,de,Ie,Be.data):A.texImage2D(t.TEXTURE_2D,_e,me,Be.width,Be.height,0,de,Ie,Be.data);_.generateMipmaps=!1}else We?(qe&&A.texStorage2D(t.TEXTURE_2D,ot,me,oe.width,oe.height),je&&A.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,de,Ie,oe.data)):A.texImage2D(t.TEXTURE_2D,0,me,oe.width,oe.height,0,de,Ie,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){We&&qe&&A.texStorage3D(t.TEXTURE_2D_ARRAY,ot,me,ze[0].width,ze[0].height,oe.depth);for(let _e=0,F=ze.length;_e<F;_e++)Be=ze[_e],_.format!==OA?de!==null?We?je&&A.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Be.width,Be.height,oe.depth,de,Be.data,0,0):A.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,me,Be.width,Be.height,oe.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?je&&A.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Be.width,Be.height,oe.depth,de,Ie,Be.data):A.texImage3D(t.TEXTURE_2D_ARRAY,_e,me,Be.width,Be.height,oe.depth,0,de,Ie,Be.data)}else{We&&qe&&A.texStorage2D(t.TEXTURE_2D,ot,me,ze[0].width,ze[0].height);for(let _e=0,F=ze.length;_e<F;_e++)Be=ze[_e],_.format!==OA?de!==null?We?je&&A.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Be.width,Be.height,de,Be.data):A.compressedTexImage2D(t.TEXTURE_2D,_e,me,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?je&&A.texSubImage2D(t.TEXTURE_2D,_e,0,0,Be.width,Be.height,de,Ie,Be.data):A.texImage2D(t.TEXTURE_2D,_e,me,Be.width,Be.height,0,de,Ie,Be.data)}else if(_.isDataArrayTexture)We?(qe&&A.texStorage3D(t.TEXTURE_2D_ARRAY,ot,me,oe.width,oe.height,oe.depth),je&&A.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,de,Ie,oe.data)):A.texImage3D(t.TEXTURE_2D_ARRAY,0,me,oe.width,oe.height,oe.depth,0,de,Ie,oe.data);else if(_.isData3DTexture)We?(qe&&A.texStorage3D(t.TEXTURE_3D,ot,me,oe.width,oe.height,oe.depth),je&&A.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,de,Ie,oe.data)):A.texImage3D(t.TEXTURE_3D,0,me,oe.width,oe.height,oe.depth,0,de,Ie,oe.data);else if(_.isFramebufferTexture){if(qe)if(We)A.texStorage2D(t.TEXTURE_2D,ot,me,oe.width,oe.height);else{let _e=oe.width,F=oe.height;for(let ae=0;ae<ot;ae++)A.texImage2D(t.TEXTURE_2D,ae,me,_e,F,0,de,Ie,null),_e>>=1,F>>=1}}else if(ze.length>0){if(We&&qe){const _e=tt(ze[0]);A.texStorage2D(t.TEXTURE_2D,ot,me,_e.width,_e.height)}for(let _e=0,F=ze.length;_e<F;_e++)Be=ze[_e],We?je&&A.texSubImage2D(t.TEXTURE_2D,_e,0,0,de,Ie,Be):A.texImage2D(t.TEXTURE_2D,_e,me,de,Ie,Be);_.generateMipmaps=!1}else if(We){if(qe){const _e=tt(oe);A.texStorage2D(t.TEXTURE_2D,ot,me,_e.width,_e.height)}je&&A.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ie,oe)}else A.texImage2D(t.TEXTURE_2D,0,me,de,Ie,oe);d(_)&&f($),be.__version=te.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function pe(M,_,z){if(_.image.length!==6)return;const $=ie(M,_),ee=_.source;A.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+z);const te=n.get(ee);if(ee.version!==te.__version||$===!0){A.activeTexture(t.TEXTURE0+z);const be=Ze.getPrimaries(Ze.workingColorSpace),ne=_.colorSpace===wn?null:Ze.getPrimaries(_.colorSpace),ye=_.colorSpace===wn||be===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,de=[];for(let F=0;F<6;F++)!Me&&!oe?de[F]=m(_.image[F],!0,r.maxCubemapSize):de[F]=oe?_.image[F].image:_.image[F],de[F]=Qe(_,de[F]);const Ie=de[0],me=i.convert(_.format,_.colorSpace),Be=i.convert(_.type),ze=x(_.internalFormat,me,Be,_.colorSpace),We=_.isVideoTexture!==!0,qe=te.__version===void 0||$===!0,je=ee.dataReady;let ot=v(_,Ie);J(t.TEXTURE_CUBE_MAP,_);let _e;if(Me){We&&qe&&A.texStorage2D(t.TEXTURE_CUBE_MAP,ot,ze,Ie.width,Ie.height);for(let F=0;F<6;F++){_e=de[F].mipmaps;for(let ae=0;ae<_e.length;ae++){const se=_e[ae];_.format!==OA?me!==null?We?je&&A.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,0,0,se.width,se.height,me,se.data):A.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,ze,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?je&&A.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,0,0,se.width,se.height,me,Be,se.data):A.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,ze,se.width,se.height,0,me,Be,se.data)}}}else{if(_e=_.mipmaps,We&&qe){_e.length>0&&ot++;const F=tt(de[0]);A.texStorage2D(t.TEXTURE_CUBE_MAP,ot,ze,F.width,F.height)}for(let F=0;F<6;F++)if(oe){We?je&&A.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,de[F].width,de[F].height,me,Be,de[F].data):A.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ze,de[F].width,de[F].height,0,me,Be,de[F].data);for(let ae=0;ae<_e.length;ae++){const Ce=_e[ae].image[F].image;We?je&&A.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,0,0,Ce.width,Ce.height,me,Be,Ce.data):A.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,ze,Ce.width,Ce.height,0,me,Be,Ce.data)}}else{We?je&&A.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,me,Be,de[F]):A.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ze,me,Be,de[F]);for(let ae=0;ae<_e.length;ae++){const se=_e[ae];We?je&&A.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,0,0,me,Be,se.image[F]):A.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,ze,me,Be,se.image[F])}}}d(_)&&f(t.TEXTURE_CUBE_MAP),te.__version=ee.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function O(M,_,z,$,ee,te){const be=i.convert(z.format,z.colorSpace),ne=i.convert(z.type),ye=x(z.internalFormat,be,ne,z.colorSpace);if(!n.get(_).__hasExternalTextures){const oe=Math.max(1,_.width>>te),de=Math.max(1,_.height>>te);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?A.texImage3D(ee,te,ye,oe,de,_.depth,0,be,ne,null):A.texImage2D(ee,te,ye,oe,de,0,be,ne,null)}A.bindFramebuffer(t.FRAMEBUFFER,M),Fe(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ee,n.get(z).__webglTexture,0,xe(_)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ee,n.get(z).__webglTexture,te),A.bindFramebuffer(t.FRAMEBUFFER,null)}function Y(M,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let $=t.DEPTH_COMPONENT24;if(z||Fe(_)){const ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===_n?$=t.DEPTH_COMPONENT32F:ee.type===qr&&($=t.DEPTH_COMPONENT24));const te=xe(_);Fe(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,$,_.width,_.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,$,_.width,_.height)}else t.renderbufferStorage(t.RENDERBUFFER,$,_.width,_.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){const $=xe(_);z&&Fe(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$,t.DEPTH24_STENCIL8,_.width,_.height):Fe(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$,t.DEPTH24_STENCIL8,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,M)}else{const $=_.textures;for(let ee=0;ee<$.length;ee++){const te=$[ee],be=i.convert(te.format,te.colorSpace),ne=i.convert(te.type),ye=x(te.internalFormat,be,ne,te.colorSpace),Me=xe(_);z&&Fe(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ye,_.width,_.height):Fe(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,ye,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ye,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(A.bindFramebuffer(t.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),T(_.depthTexture,0);const $=n.get(_.depthTexture).__webglTexture,ee=xe(_);if(_.depthTexture.format===Xr)Fe(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(_.depthTexture.format===Ji)Fe(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ae(M){const _=n.get(M),z=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");re(_.__webglFramebuffer,M)}else if(z){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)A.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=t.createRenderbuffer(),Y(_.__webglDepthbuffer[$],M,!1)}else A.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=t.createRenderbuffer(),Y(_.__webglDepthbuffer,M,!1);A.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(M,_,z){const $=n.get(M);_!==void 0&&O($.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ae(M)}function we(M){const _=M.texture,z=n.get(M),$=n.get(_);M.addEventListener("dispose",b);const ee=M.textures,te=M.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=_.version,s.memory.textures++),te){z.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ne]=[];for(let ye=0;ye<_.mipmaps.length;ye++)z.__webglFramebuffer[ne][ye]=t.createFramebuffer()}else z.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)z.__webglFramebuffer[ne]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(be)for(let ne=0,ye=ee.length;ne<ye;ne++){const Me=n.get(ee[ne]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),s.memory.textures++)}if(M.samples>0&&Fe(M)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],A.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){const ye=ee[ne];z.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);const Me=i.convert(ye.format,ye.colorSpace),oe=i.convert(ye.type),de=x(ye.internalFormat,Me,oe,ye.colorSpace,M.isXRRenderTarget===!0),Ie=xe(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,de,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,z.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Y(z.__webglDepthRenderbuffer,M,!0)),A.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){A.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),J(t.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)O(z.__webglFramebuffer[ne][ye],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye);else O(z.__webglFramebuffer[ne],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(_)&&f(t.TEXTURE_CUBE_MAP),A.unbindTexture()}else if(be){for(let ne=0,ye=ee.length;ne<ye;ne++){const Me=ee[ne],oe=n.get(Me);A.bindTexture(t.TEXTURE_2D,oe.__webglTexture),J(t.TEXTURE_2D,Me),O(z.__webglFramebuffer,M,Me,t.COLOR_ATTACHMENT0+ne,t.TEXTURE_2D,0),d(Me)&&f(t.TEXTURE_2D)}A.unbindTexture()}else{let ne=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ne=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),A.bindTexture(ne,$.__webglTexture),J(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)O(z.__webglFramebuffer[ye],M,_,t.COLOR_ATTACHMENT0,ne,ye);else O(z.__webglFramebuffer,M,_,t.COLOR_ATTACHMENT0,ne,0);d(_)&&f(ne),A.unbindTexture()}M.depthBuffer&&Ae(M)}function Le(M){const _=M.textures;for(let z=0,$=_.length;z<$;z++){const ee=_[z];if(d(ee)){const te=M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=n.get(ee).__webglTexture;A.bindTexture(te,be),f(te),A.unbindTexture()}}}function H(M){if(M.samples>0&&Fe(M)===!1){const _=M.textures,z=M.width,$=M.height;let ee=t.COLOR_BUFFER_BIT;const te=[],be=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=n.get(M),ye=_.length>1;if(ye)for(let Me=0;Me<_.length;Me++)A.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),A.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);A.bindFramebuffer(t.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),A.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let Me=0;Me<_.length;Me++){te.push(t.COLOR_ATTACHMENT0+Me),M.depthBuffer&&te.push(be);const oe=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(oe===!1&&(M.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&ne.__isTransmissionRenderTarget!==!0&&(ee|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ne.__webglColorRenderbuffer[Me]),oe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),ye){const de=n.get(_[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,z,$,0,0,z,$,ee,t.NEAREST),o&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(A.bindFramebuffer(t.READ_FRAMEBUFFER,null),A.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let Me=0;Me<_.length;Me++){A.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,ne.__webglColorRenderbuffer[Me]);const oe=n.get(_[Me]).__webglTexture;A.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,oe,0)}A.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function xe(M){return Math.min(r.maxSamples,M.samples)}function Fe(M){const _=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function yt(M){const _=s.render.frame;l.get(M)!==_&&(l.set(M,_),M.update())}function Qe(M,_){const z=M.colorSpace,$=M.format,ee=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||z!==Dn&&z!==wn&&(Ze.getTransfer(z)===at?($!==OA||ee!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function tt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=B,this.setTexture2D=T,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=X,this.rebindTextures=Ee,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=O,this.useMultisampledRTT=Fe}function pE(t,e){function A(n,r=wn){let i;const s=Ze.getTransfer(r);if(n===bn)return t.UNSIGNED_BYTE;if(n===Fp)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Tp)return t.UNSIGNED_SHORT_5_5_5_1;if(n===YB)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===XB)return t.BYTE;if(n===jB)return t.SHORT;if(n===bp)return t.UNSIGNED_SHORT;if(n===Mp)return t.INT;if(n===qr)return t.UNSIGNED_INT;if(n===_n)return t.FLOAT;if(n===Ia)return t.HALF_FLOAT;if(n===$B)return t.ALPHA;if(n===JB)return t.RGB;if(n===OA)return t.RGBA;if(n===qB)return t.LUMINANCE;if(n===ZB)return t.LUMINANCE_ALPHA;if(n===Xr)return t.DEPTH_COMPONENT;if(n===Ji)return t.DEPTH_STENCIL;if(n===ev)return t.RED;if(n===Qp)return t.RED_INTEGER;if(n===tv)return t.RG;if(n===Ip)return t.RG_INTEGER;if(n===Rp)return t.RGBA_INTEGER;if(n===Oo||n===ko||n===Go||n===Vo)if(s===at)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===Oo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===Oo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ku||n===zu||n===Wu||n===Xu)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===Ku)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zu)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wu)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xu)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lp)return i=e.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ju||n===Yu)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(n===ju)return s===at?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===Yu)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$u||n===Ju||n===qu||n===Zu||n===eh||n===th||n===Ah||n===nh||n===rh||n===ih||n===sh||n===ah||n===oh||n===ch)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(n===$u)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ju)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qu)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zu)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eh)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===th)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ah)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nh)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rh)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ih)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sh)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ah)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oh)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ch)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===lh||n===uh)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(n===Ko)return s===at?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lh)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uh)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Av||n===hh||n===fh||n===dh)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(n===Ko)return i.COMPRESSED_RED_RGTC1_EXT;if(n===hh)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fh)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dh)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:A}}class gE extends cA{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ti extends eA{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mE={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const A=this._hand;if(A)for(const n of e.hand.values())this._getHandJoint(A,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,A,n){let r=null,i=null,s=null;const a=this._targetRay,o=this._grip,c=this._hand;if(e&&A.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const d=A.getJointPose(m,n),f=this._getHandJoint(c,m);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=l.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(i=A.getPose(e.gripSpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(r=A.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mE)))}return a!==null&&(a.visible=r!==null),o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,A){if(e.joints[A.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[A.jointName]=n,e.add(n)}return e.joints[A.jointName]}}const BE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,A,n){if(this.texture===null){const r=new Zt,i=e.properties.get(r);i.__webglTexture=A.texture,(A.depthNear!=n.depthNear||A.depthFar!=n.depthFar)&&(this.depthNear=A.depthNear,this.depthFar=A.depthFar),this.texture=r}}render(e,A){if(this.texture!==null){if(this.mesh===null){const n=A.cameras[0].viewport,r=new Rn({vertexShader:BE,fragmentShader:vE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kA(new oo(20,20),r)}e.render(this.mesh,A)}}reset(){this.texture=null,this.mesh=null}}class xE extends hi{constructor(e,A){super();const n=this;let r=null,i=1,s=null,a="local-floor",o=1,c=null,l=null,u=null,h=null,p=null,g=null;const m=new wE,d=A.getContextAttributes();let f=null,x=null;const v=[],y=[],b=new Ke;let E=null;const U=new cA;U.layers.enable(1),U.viewport=new ft;const I=new cA;I.layers.enable(2),I.viewport=new ft;const C=[U,I],B=new gE;B.layers.enable(1),B.layers.enable(2);let Q=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Y=v[O];return Y===void 0&&(Y=new gc,v[O]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(O){let Y=v[O];return Y===void 0&&(Y=new gc,v[O]=Y),Y.getGripSpace()},this.getHand=function(O){let Y=v[O];return Y===void 0&&(Y=new gc,v[O]=Y),Y.getHandSpace()};function T(O){const Y=y.indexOf(O.inputSource);if(Y===-1)return;const re=v[Y];re!==void 0&&(re.update(O.inputSource,O.frame,c||s),re.dispatchEvent({type:O.type,data:O.inputSource}))}function D(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",N);for(let O=0;O<v.length;O++){const Y=y[O];Y!==null&&(y[O]=null,v[O].disconnect(Y))}Q=null,R=null,m.reset(),e.setRenderTarget(f),p=null,h=null,u=null,r=null,x=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){i=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",D),r.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await A.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const Y={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,A,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ur(p.framebufferWidth,p.framebufferHeight,{format:OA,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let Y=null,re=null,Ae=null;d.depth&&(Ae=d.stencil?A.DEPTH24_STENCIL8:A.DEPTH_COMPONENT24,Y=d.stencil?Ji:Xr,re=d.stencil?ns:qr);const Ee={colorFormat:A.RGBA8,depthFormat:Ae,scaleFactor:i};u=new XRWebGLBinding(r,A),h=u.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ur(h.textureWidth,h.textureHeight,{format:OA,type:bn,depthTexture:new $p(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const we=e.properties.get(x);we.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(o),c=null,s=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(O){for(let Y=0;Y<O.removed.length;Y++){const re=O.removed[Y],Ae=y.indexOf(re);Ae>=0&&(y[Ae]=null,v[Ae].disconnect(re))}for(let Y=0;Y<O.added.length;Y++){const re=O.added[Y];let Ae=y.indexOf(re);if(Ae===-1){for(let we=0;we<v.length;we++)if(we>=y.length){y.push(re),Ae=we;break}else if(y[we]===null){y[we]=re,Ae=we;break}if(Ae===-1)break}const Ee=v[Ae];Ee&&Ee.connect(re)}}const X=new P,q=new P;function k(O,Y,re){X.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(re.matrixWorld);const Ae=X.distanceTo(q),Ee=Y.projectionMatrix.elements,we=re.projectionMatrix.elements,Le=Ee[14]/(Ee[10]-1),H=Ee[14]/(Ee[10]+1),xe=(Ee[9]+1)/Ee[5],Fe=(Ee[9]-1)/Ee[5],yt=(Ee[8]-1)/Ee[0],Qe=(we[8]+1)/we[0],tt=Le*yt,M=Le*Qe,_=Ae/(-yt+Qe),z=_*-yt;Y.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(z),O.translateZ(_),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const $=Le+_,ee=H+_,te=tt-z,be=M+(Ae-z),ne=xe*H/ee*$,ye=Fe*H/ee*$;O.projectionMatrix.makePerspective(te,be,ne,ye,$,ee),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function j(O,Y){Y===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Y.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;m.texture!==null&&(O.near=m.depthNear,O.far=m.depthFar),B.near=I.near=U.near=O.near,B.far=I.far=U.far=O.far,(Q!==B.near||R!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),Q=B.near,R=B.far,U.near=Q,U.far=R,I.near=Q,I.far=R,U.updateProjectionMatrix(),I.updateProjectionMatrix(),O.updateProjectionMatrix());const Y=O.parent,re=B.cameras;j(B,Y);for(let Ae=0;Ae<re.length;Ae++)j(re[Ae],Y);re.length===2?k(B,U,I):B.projectionMatrix.copy(U.projectionMatrix),J(O,B,Y)};function J(O,Y,re){re===null?O.matrix.copy(Y.matrixWorld):(O.matrix.copy(re.matrixWorld),O.matrix.invert(),O.matrix.multiply(Y.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=sl*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(O){o=O,h!==null&&(h.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null};let ie=null;function Z(O,Y){if(l=Y.getViewerPose(c||s),g=Y,l!==null){const re=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ae=!1;re.length!==B.cameras.length&&(B.cameras.length=0,Ae=!0);for(let we=0;we<re.length;we++){const Le=re[we];let H=null;if(p!==null)H=p.getViewport(Le);else{const Fe=u.getViewSubImage(h,Le);H=Fe.viewport,we===0&&(e.setRenderTargetTextures(x,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(x))}let xe=C[we];xe===void 0&&(xe=new cA,xe.layers.enable(we),xe.viewport=new ft,C[we]=xe),xe.matrix.fromArray(Le.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Le.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(H.x,H.y,H.width,H.height),we===0&&(B.matrix.copy(xe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ae===!0&&B.cameras.push(xe)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const we=u.getDepthInformation(re[0]);we&&we.isValid&&we.texture&&m.init(e,we,r.renderState)}}for(let re=0;re<v.length;re++){const Ae=y[re],Ee=v[re];Ae!==null&&Ee!==void 0&&Ee.update(Ae,Y,c||s)}m.render(e,B),ie&&ie(O,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const pe=new Yp;pe.setAnimationLoop(Z),this.setAnimationLoop=function(O){ie=O},this.dispose=function(){}}}const zn=new VA,_E=new gt;function CE(t,e){function A(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,Wp(t)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,x,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(d,f):f.isMeshToonMaterial?(i(d,f),u(d,f)):f.isMeshPhongMaterial?(i(d,f),l(d,f)):f.isMeshStandardMaterial?(i(d,f),h(d,f),f.isMeshPhysicalMaterial&&p(d,f,y)):f.isMeshMatcapMaterial?(i(d,f),g(d,f)):f.isMeshDepthMaterial?i(d,f):f.isMeshDistanceMaterial?(i(d,f),m(d,f)):f.isMeshNormalMaterial?i(d,f):f.isLineBasicMaterial?(s(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?o(d,f,x,v):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,A(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,A(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,A(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Wt&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,A(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Wt&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,A(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,A(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,A(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const x=e.get(f),v=x.envMap,y=x.envMapRotation;if(v&&(d.envMap.value=v,zn.copy(y),zn.x*=-1,zn.y*=-1,zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),d.envMapRotation.value.setFromMatrix4(_E.makeRotationFromEuler(zn)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const b=t._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*b,A(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,A(f.aoMap,d.aoMapTransform))}function s(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,A(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function o(d,f,x,v){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*x,d.scale.value=v*.5,f.map&&(d.map.value=f.map,A(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,A(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,A(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,A(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,A(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,A(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function p(d,f,x){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,A(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,A(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,A(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,A(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,A(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,A(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,A(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,A(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,A(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,A(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,A(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,A(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function m(d,f){const x=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function EE(t,e,A,n){let r={},i={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function o(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(g(x),y=l(x),r[x.id]=y,x.addEventListener("dispose",d));const b=v.program;n.updateUBOMapping(x,b);const E=e.render.frame;i[x.id]!==E&&(h(x),i[x.id]=E)}function l(x){const v=u();x.__bindingPointIndex=v;const y=t.createBuffer(),b=x.__size,E=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],y=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let E=0,U=y.length;E<U;E++){const I=Array.isArray(y[E])?y[E]:[y[E]];for(let C=0,B=I.length;C<B;C++){const Q=I[C];if(p(Q,E,C,b)===!0){const R=Q.__offset,T=Array.isArray(Q.value)?Q.value:[Q.value];let D=0;for(let N=0;N<T.length;N++){const X=T[N],q=m(X);typeof X=="number"||typeof X=="boolean"?(Q.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,R+D,Q.__data)):X.isMatrix3?(Q.__data[0]=X.elements[0],Q.__data[1]=X.elements[1],Q.__data[2]=X.elements[2],Q.__data[3]=0,Q.__data[4]=X.elements[3],Q.__data[5]=X.elements[4],Q.__data[6]=X.elements[5],Q.__data[7]=0,Q.__data[8]=X.elements[6],Q.__data[9]=X.elements[7],Q.__data[10]=X.elements[8],Q.__data[11]=0):(X.toArray(Q.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,R,Q.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,y,b){const E=x.value,U=v+"_"+y;if(b[U]===void 0)return typeof E=="number"||typeof E=="boolean"?b[U]=E:b[U]=E.clone(),!0;{const I=b[U];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return b[U]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(x){const v=x.uniforms;let y=0;const b=16;for(let U=0,I=v.length;U<I;U++){const C=Array.isArray(v[U])?v[U]:[v[U]];for(let B=0,Q=C.length;B<Q;B++){const R=C[B],T=Array.isArray(R.value)?R.value:[R.value];for(let D=0,N=T.length;D<N;D++){const X=T[D],q=m(X),k=y%b;k!==0&&b-k<q.boundary&&(y+=b-k),R.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=q.storage}}}const E=y%b;return E>0&&(y+=b-E),x.__size=y,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function d(x){const v=x.target;v.removeEventListener("dispose",d);const y=s.indexOf(v.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete i[v.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},i={}}return{bind:o,update:c,dispose:f}}class yE{constructor(e={}){const{canvas:A=dv(),context:n=null,depth:r=!0,stencil:i=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=s;const p=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const f=[],x=[];this.domElement=A,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=LA,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const v=this;let y=!1,b=0,E=0,U=null,I=-1,C=null;const B=new ft,Q=new ft;let R=null;const T=new Xe(0);let D=0,N=A.width,X=A.height,q=1,k=null,j=null;const J=new ft(0,0,N,X),ie=new ft(0,0,N,X);let Z=!1;const pe=new Zl;let O=!1,Y=!1;const re=new gt,Ae=new Ke,Ee=new P,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return U===null?q:1}let H=n;function xe(S,L){const V=A.getContext(S,L);return V!==null?V:null}try{const S={alpha:!0,depth:r,stencil:i,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in A&&A.setAttribute("data-engine",`three.js r${jl}`),A.addEventListener("webglcontextlost",ae,!1),A.addEventListener("webglcontextrestored",se,!1),A.addEventListener("webglcontextcreationerror",Ce,!1),H===null){const L="webgl2";if(H=xe(L,S),H===null)throw xe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Fe,yt,Qe,tt,M,_,z,$,ee,te,be,ne,ye,Me,oe,de,Ie,me,Be,ze,We,qe,je,ot;function _e(){Fe=new I_(H),Fe.init(),yt=new U_(H,Fe,e),qe=new pE(H,Fe),Qe=new fE(H),tt=new D_(H),M=new ZC,_=new dE(H,Fe,Qe,M,yt,qe,tt),z=new b_(v),$=new Q_(v),ee=new kv(H),je=new E_(H,ee),te=new R_(H,ee,tt,je),be=new P_(H,te,ee,tt),Be=new H_(H,yt,_),de=new S_(M),ne=new qC(v,z,$,Fe,yt,je,de),ye=new CE(v,M),Me=new tE,oe=new aE(Fe),me=new C_(v,z,$,Qe,be,h,o),Ie=new hE(v,be,yt),ot=new EE(H,tt,yt,Qe),ze=new y_(H,Fe,tt),We=new L_(H,Fe,tt),tt.programs=ne.programs,v.capabilities=yt,v.extensions=Fe,v.properties=M,v.renderLists=Me,v.shadowMap=Ie,v.state=Qe,v.info=tt}_e();const F=new xE(v,H);this.xr=F,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const S=Fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(N,X,!1))},this.getSize=function(S){return S.set(N,X)},this.setSize=function(S,L,V=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,X=L,A.width=Math.floor(S*q),A.height=Math.floor(L*q),V===!0&&(A.style.width=S+"px",A.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(N*q,X*q).floor()},this.setDrawingBufferSize=function(S,L,V){N=S,X=L,q=V,A.width=Math.floor(S*V),A.height=Math.floor(L*V),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(B)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,L,V,K){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,L,V,K),Qe.viewport(B.copy(J).multiplyScalar(q).round())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,L,V,K){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,L,V,K),Qe.scissor(Q.copy(ie).multiplyScalar(q).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(S){Qe.setScissorTest(Z=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(S=!0,L=!0,V=!0){let K=0;if(S){let G=!1;if(U!==null){const ue=U.texture.format;G=ue===Rp||ue===Ip||ue===Qp}if(G){const ue=U.texture.type,ve=ue===bn||ue===qr||ue===bp||ue===ns||ue===Fp||ue===Tp,Se=me.getClearColor(),Te=me.getClearAlpha(),De=Se.r,Re=Se.g,He=Se.b;ve?(p[0]=De,p[1]=Re,p[2]=He,p[3]=Te,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=De,g[1]=Re,g[2]=He,g[3]=Te,H.clearBufferiv(H.COLOR,0,g))}else K|=H.COLOR_BUFFER_BIT}L&&(K|=H.DEPTH_BUFFER_BIT),V&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",ae,!1),A.removeEventListener("webglcontextrestored",se,!1),A.removeEventListener("webglcontextcreationerror",Ce,!1),Me.dispose(),oe.dispose(),M.dispose(),z.dispose(),$.dispose(),be.dispose(),je.dispose(),ot.dispose(),ne.dispose(),F.dispose(),F.removeEventListener("sessionstart",QA),F.removeEventListener("sessionend",IA),Pn.stop()};function ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=tt.autoReset,L=Ie.enabled,V=Ie.autoUpdate,K=Ie.needsUpdate,G=Ie.type;_e(),tt.autoReset=S,Ie.enabled=L,Ie.autoUpdate=V,Ie.needsUpdate=K,Ie.type=G}function Ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ue(S){const L=S.target;L.removeEventListener("dispose",Ue),At(L)}function At(S){ct(S),M.remove(S)}function ct(S){const L=M.get(S).programs;L!==void 0&&(L.forEach(function(V){ne.releaseProgram(V)}),S.isShaderMaterial&&ne.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,V,K,G,ue){L===null&&(L=we);const ve=G.isMesh&&G.matrixWorld.determinant()<0,Se=u0(S,L,V,K,G);Qe.setMaterial(K,ve);let Te=V.index,De=1;if(K.wireframe===!0){if(Te=te.getWireframeAttribute(V),Te===void 0)return;De=2}const Re=V.drawRange,He=V.attributes.position;let mt=Re.start*De,AA=(Re.start+Re.count)*De;ue!==null&&(mt=Math.max(mt,ue.start*De),AA=Math.min(AA,(ue.start+ue.count)*De)),Te!==null?(mt=Math.max(mt,0),AA=Math.min(AA,Te.count)):He!=null&&(mt=Math.max(mt,0),AA=Math.min(AA,He.count));const Mt=AA-mt;if(Mt<0||Mt===1/0)return;je.setup(G,K,Se,V,Te);let WA,pt=ze;if(Te!==null&&(WA=ee.get(Te),pt=We,pt.setIndex(WA)),G.isMesh)K.wireframe===!0?(Qe.setLineWidth(K.wireframeLinewidth*Le()),pt.setMode(H.LINES)):pt.setMode(H.TRIANGLES);else if(G.isLine){let Pe=K.linewidth;Pe===void 0&&(Pe=1),Qe.setLineWidth(Pe*Le()),G.isLineSegments?pt.setMode(H.LINES):G.isLineLoop?pt.setMode(H.LINE_LOOP):pt.setMode(H.LINE_STRIP)}else G.isPoints?pt.setMode(H.POINTS):G.isSprite&&pt.setMode(H.TRIANGLES);if(G.isBatchedMesh)pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)pt.renderInstances(mt,Mt,G.count);else if(V.isInstancedBufferGeometry){const Pe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Lo=Math.min(V.instanceCount,Pe);pt.renderInstances(mt,Mt,Lo)}else pt.render(mt,Mt)};function dt(S,L,V){S.transparent===!0&&S.side===NA&&S.forceSinglePass===!1?(S.side=Wt,S.needsUpdate=!0,fs(S,L,V),S.side=In,S.needsUpdate=!0,fs(S,L,V),S.side=NA):fs(S,L,V)}this.compile=function(S,L,V=null){V===null&&(V=S),d=oe.get(V),d.init(),x.push(d),V.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights(v._useLegacyLights);const K=new Set;return S.traverse(function(G){const ue=G.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Se=ue[ve];dt(Se,V,G),K.add(Se)}else dt(ue,V,G),K.add(ue)}),x.pop(),d=null,K},this.compileAsync=function(S,L,V=null){const K=this.compile(S,L,V);return new Promise(G=>{function ue(){if(K.forEach(function(ve){M.get(ve).currentProgram.isReady()&&K.delete(ve)}),K.size===0){G(S);return}setTimeout(ue,10)}Fe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ht=null;function rt(S){Ht&&Ht(S)}function QA(){Pn.stop()}function IA(){Pn.start()}const Pn=new Yp;Pn.setAnimationLoop(rt),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(S){Ht=S,F.setAnimationLoop(S),S===null?Pn.stop():Pn.start()},F.addEventListener("sessionstart",QA),F.addEventListener("sessionend",IA),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(L),L=F.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,L,U),d=oe.get(S,x.length),d.init(),x.push(d),re.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),pe.setFromProjectionMatrix(re),Y=this.localClippingEnabled,O=de.init(this.clippingPlanes,Y),m=Me.get(S,f.length),m.init(),f.push(m),Eu(S,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(k,j),this.info.render.frame++,O===!0&&de.beginShadows();const V=d.state.shadowsArray;if(Ie.render(V,S,L),O===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1)&&me.render(m,S),d.setupLights(v._useLegacyLights),L.isArrayCamera){const K=L.cameras;for(let G=0,ue=K.length;G<ue;G++){const ve=K[G];yu(m,S,ve,ve.viewport)}}else yu(m,S,L);U!==null&&(_.updateMultisampleRenderTarget(U),_.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(v,S,L),je.resetDefaultState(),I=-1,C=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,f.pop(),f.length>0?m=f[f.length-1]:m=null};function Eu(S,L,V,K){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||pe.intersectsSprite(S)){K&&Ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(re);const ve=be.update(S),Se=S.material;Se.visible&&m.push(S,ve,Se,V,Ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||pe.intersectsObject(S))){const ve=be.update(S),Se=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ee.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ee.copy(ve.boundingSphere.center)),Ee.applyMatrix4(S.matrixWorld).applyMatrix4(re)),Array.isArray(Se)){const Te=ve.groups;for(let De=0,Re=Te.length;De<Re;De++){const He=Te[De],mt=Se[He.materialIndex];mt&&mt.visible&&m.push(S,ve,mt,V,Ee.z,He)}}else Se.visible&&m.push(S,ve,Se,V,Ee.z,null)}}const ue=S.children;for(let ve=0,Se=ue.length;ve<Se;ve++)Eu(ue[ve],L,V,K)}function yu(S,L,V,K){const G=S.opaque,ue=S.transmissive,ve=S.transparent;d.setupLightsView(V),O===!0&&de.setGlobalState(v.clippingPlanes,V),ue.length>0&&l0(G,ue,L,V),K&&Qe.viewport(B.copy(K)),G.length>0&&hs(G,L,V),ue.length>0&&hs(ue,L,V),ve.length>0&&hs(ve,L,V),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function l0(S,L,V,K){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(d.state.transmissionRenderTarget===null){d.state.transmissionRenderTarget=new ur(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ia:bn,minFilter:er,samples:4,stencilBuffer:i});const De=M.get(d.state.transmissionRenderTarget);De.__isTransmissionRenderTarget=!0}const ue=d.state.transmissionRenderTarget;v.getDrawingBufferSize(Ae),ue.setSize(Ae.x,Ae.y);const ve=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(T),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Se=v.toneMapping;v.toneMapping=Sn,hs(S,V,K),_.updateMultisampleRenderTarget(ue),_.updateRenderTargetMipmap(ue);let Te=!1;for(let De=0,Re=L.length;De<Re;De++){const He=L[De],mt=He.object,AA=He.geometry,Mt=He.material,WA=He.group;if(Mt.side===NA&&mt.layers.test(K.layers)){const pt=Mt.side;Mt.side=Wt,Mt.needsUpdate=!0,Uu(mt,V,K,AA,Mt,WA),Mt.side=pt,Mt.needsUpdate=!0,Te=!0}}Te===!0&&(_.updateMultisampleRenderTarget(ue),_.updateRenderTargetMipmap(ue)),v.setRenderTarget(ve),v.setClearColor(T,D),v.toneMapping=Se}function hs(S,L,V){const K=L.isScene===!0?L.overrideMaterial:null;for(let G=0,ue=S.length;G<ue;G++){const ve=S[G],Se=ve.object,Te=ve.geometry,De=K===null?ve.material:K,Re=ve.group;Se.layers.test(V.layers)&&Uu(Se,L,V,Te,De,Re)}}function Uu(S,L,V,K,G,ue){S.onBeforeRender(v,L,V,K,G,ue),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(v,L,V,K,S,ue),G.transparent===!0&&G.side===NA&&G.forceSinglePass===!1?(G.side=Wt,G.needsUpdate=!0,v.renderBufferDirect(V,L,K,G,S,ue),G.side=In,G.needsUpdate=!0,v.renderBufferDirect(V,L,K,G,S,ue),G.side=NA):v.renderBufferDirect(V,L,K,G,S,ue),S.onAfterRender(v,L,V,K,G,ue)}function fs(S,L,V){L.isScene!==!0&&(L=we);const K=M.get(S),G=d.state.lights,ue=d.state.shadowsArray,ve=G.state.version,Se=ne.getParameters(S,G.state,ue,L,V),Te=ne.getProgramCacheKey(Se);let De=K.programs;K.environment=S.isMeshStandardMaterial?L.environment:null,K.fog=L.fog,K.envMap=(S.isMeshStandardMaterial?$:z).get(S.envMap||K.environment),K.envMapRotation=K.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,De===void 0&&(S.addEventListener("dispose",Ue),De=new Map,K.programs=De);let Re=De.get(Te);if(Re!==void 0){if(K.currentProgram===Re&&K.lightsStateVersion===ve)return bu(S,Se),Re}else Se.uniforms=ne.getUniforms(S),S.onBuild(V,Se,v),S.onBeforeCompile(Se,v),Re=ne.acquireProgram(Se,Te),De.set(Te,Re),K.uniforms=Se.uniforms;const He=K.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=de.uniform),bu(S,Se),K.needsLights=f0(S),K.lightsStateVersion=ve,K.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Re,K.uniformsList=null,Re}function Su(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=da.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function bu(S,L){const V=M.get(S);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function u0(S,L,V,K,G){L.isScene!==!0&&(L=we),_.resetTextureUnits();const ue=L.fog,ve=K.isMeshStandardMaterial?L.environment:null,Se=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Dn,Te=(K.isMeshStandardMaterial?$:z).get(K.envMap||ve),De=K.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Re=!!V.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!V.morphAttributes.position,mt=!!V.morphAttributes.normal,AA=!!V.morphAttributes.color;let Mt=Sn;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const WA=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=WA!==void 0?WA.length:0,Pe=M.get(K),Lo=d.state.lights;if(O===!0&&(Y===!0||S!==C)){const uA=S===C&&K.id===I;de.setState(K,S,uA)}let lt=!1;K.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Lo.state.version||Pe.outputColorSpace!==Se||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==Te||K.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==de.numPlanes||Pe.numIntersection!==de.numIntersection)||Pe.vertexAlphas!==De||Pe.vertexTangents!==Re||Pe.morphTargets!==He||Pe.morphNormals!==mt||Pe.morphColors!==AA||Pe.toneMapping!==Mt||Pe.morphTargetsCount!==pt)&&(lt=!0):(lt=!0,Pe.__version=K.version);let Nn=Pe.currentProgram;lt===!0&&(Nn=fs(K,L,G));let Mu=!1,Bi=!1,Do=!1;const Pt=Nn.getUniforms(),on=Pe.uniforms;if(Qe.useProgram(Nn.program)&&(Mu=!0,Bi=!0,Do=!0),K.id!==I&&(I=K.id,Bi=!0),Mu||C!==S){Pt.setValue(H,"projectionMatrix",S.projectionMatrix),Pt.setValue(H,"viewMatrix",S.matrixWorldInverse);const uA=Pt.map.cameraPosition;uA!==void 0&&uA.setValue(H,Ee.setFromMatrixPosition(S.matrixWorld)),yt.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",S.isOrthographicCamera===!0),C!==S&&(C=S,Bi=!0,Do=!0)}if(G.isSkinnedMesh){Pt.setOptional(H,G,"bindMatrix"),Pt.setOptional(H,G,"bindMatrixInverse");const uA=G.skeleton;uA&&(uA.boneTexture===null&&uA.computeBoneTexture(),Pt.setValue(H,"boneTexture",uA.boneTexture,_))}G.isBatchedMesh&&(Pt.setOptional(H,G,"batchingTexture"),Pt.setValue(H,"batchingTexture",G._matricesTexture,_));const Ho=V.morphAttributes;if((Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0)&&Be.update(G,V,Nn),(Bi||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,Pt.setValue(H,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(on.envMap.value=Te,on.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&L.environment!==null&&(on.envMapIntensity.value=L.environmentIntensity),Bi&&(Pt.setValue(H,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&h0(on,Do),ue&&K.fog===!0&&ye.refreshFogUniforms(on,ue),ye.refreshMaterialUniforms(on,K,q,X,d.state.transmissionRenderTarget),da.upload(H,Su(Pe),on,_)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(da.upload(H,Su(Pe),on,_),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Pt.setValue(H,"center",G.center),Pt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(H,"normalMatrix",G.normalMatrix),Pt.setValue(H,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const uA=K.uniformsGroups;for(let Po=0,d0=uA.length;Po<d0;Po++){const Fu=uA[Po];ot.update(Fu,Nn),ot.bind(Fu,Nn)}}return Nn}function h0(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function f0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,L,V){M.get(S.texture).__webglTexture=L,M.get(S.depthTexture).__webglTexture=V;const K=M.get(S);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=V===void 0,K.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const V=M.get(S);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,V=0){U=S,b=L,E=V;let K=!0,G=null,ue=!1,ve=!1;if(S){const Te=M.get(S);Te.__useDefaultFramebuffer!==void 0?(Qe.bindFramebuffer(H.FRAMEBUFFER,null),K=!1):Te.__webglFramebuffer===void 0?_.setupRenderTarget(S):Te.__hasExternalTextures&&_.rebindTextures(S,M.get(S.texture).__webglTexture,M.get(S.depthTexture).__webglTexture);const De=S.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ve=!0);const Re=M.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?G=Re[L][V]:G=Re[L],ue=!0):S.samples>0&&_.useMultisampledRTT(S)===!1?G=M.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[V]:G=Re,B.copy(S.viewport),Q.copy(S.scissor),R=S.scissorTest}else B.copy(J).multiplyScalar(q).floor(),Q.copy(ie).multiplyScalar(q).floor(),R=Z;if(Qe.bindFramebuffer(H.FRAMEBUFFER,G)&&K&&Qe.drawBuffers(S,G),Qe.viewport(B),Qe.scissor(Q),Qe.setScissorTest(R),ue){const Te=M.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+L,Te.__webglTexture,V)}else if(ve){const Te=M.get(S.texture),De=L||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Te.__webglTexture,V||0,De)}I=-1},this.readRenderTargetPixels=function(S,L,V,K,G,ue,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=M.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Qe.bindFramebuffer(H.FRAMEBUFFER,Se);try{const Te=S.texture,De=Te.format,Re=Te.type;if(De!==OA&&qe.convert(De)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Re===Ia&&(Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float"));if(Re!==bn&&qe.convert(Re)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&Re!==_n&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-K&&V>=0&&V<=S.height-G&&H.readPixels(L,V,K,G,qe.convert(De),qe.convert(Re),ue)}finally{const Te=U!==null?M.get(U).__webglFramebuffer:null;Qe.bindFramebuffer(H.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(S,L,V=0){const K=Math.pow(2,-V),G=Math.floor(L.image.width*K),ue=Math.floor(L.image.height*K);_.setTexture2D(L,0),H.copyTexSubImage2D(H.TEXTURE_2D,V,0,0,S.x,S.y,G,ue),Qe.unbindTexture()},this.copyTextureToTexture=function(S,L,V,K=0){const G=L.image.width,ue=L.image.height,ve=qe.convert(V.format),Se=qe.convert(V.type);_.setTexture2D(V,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment),L.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,K,S.x,S.y,G,ue,ve,Se,L.image.data):L.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,K,S.x,S.y,L.mipmaps[0].width,L.mipmaps[0].height,ve,L.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,K,S.x,S.y,ve,Se,L.image),K===0&&V.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Qe.unbindTexture()},this.copyTextureToTexture3D=function(S,L,V,K,G=0){const ue=Math.round(S.max.x-S.min.x),ve=Math.round(S.max.y-S.min.y),Se=S.max.z-S.min.z+1,Te=qe.convert(K.format),De=qe.convert(K.type);let Re;if(K.isData3DTexture)_.setTexture3D(K,0),Re=H.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)_.setTexture2DArray(K,0),Re=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const He=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),AA=H.getParameter(H.UNPACK_SKIP_PIXELS),Mt=H.getParameter(H.UNPACK_SKIP_ROWS),WA=H.getParameter(H.UNPACK_SKIP_IMAGES),pt=V.isCompressedTexture?V.mipmaps[G]:V.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,pt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,S.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,S.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,S.min.z),V.isDataTexture||V.isData3DTexture?H.texSubImage3D(Re,G,L.x,L.y,L.z,ue,ve,Se,Te,De,pt.data):K.isCompressedArrayTexture?H.compressedTexSubImage3D(Re,G,L.x,L.y,L.z,ue,ve,Se,Te,pt.data):H.texSubImage3D(Re,G,L.x,L.y,L.z,ue,ve,Se,Te,De,pt),H.pixelStorei(H.UNPACK_ROW_LENGTH,He),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,AA),H.pixelStorei(H.UNPACK_SKIP_ROWS,Mt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,WA),G===0&&K.generateMipmaps&&H.generateMipmap(Re),Qe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?_.setTextureCube(S,0):S.isData3DTexture?_.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?_.setTexture2DArray(S,0):_.setTexture2D(S,0),Qe.unbindTexture()},this.resetState=function(){b=0,E=0,U=null,Qe.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const A=this.getContext();A.drawingBufferColorSpace=e===Jl?"display-p3":"srgb",A.unpackColorSpace=Ze.workingColorSpace===ao?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class UE extends eA{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new VA,this.environmentIntensity=1,this.environmentRotation=new VA,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,A){return super.copy(e,A),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const A=super.toJSON(e);return this.fog!==null&&(A.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(A.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(A.object.backgroundIntensity=this.backgroundIntensity),A.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(A.object.environmentIntensity=this.environmentIntensity),A.object.environmentRotation=this.environmentRotation.toArray(),A}}const Ds=new P,Hs=new P,mc=new P,Ps=new SA;class SE extends Hn{constructor(e=null,A=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:A},e!==null){const r=Math.pow(10,4),i=Math.cos(fa*A),s=e.getIndex(),a=e.getAttribute("position"),o=s?s.count:a.count,c=[0,0,0],l=["a","b","c"],u=new Array(3),h={},p=[];for(let g=0;g<o;g+=3){s?(c[0]=s.getX(g),c[1]=s.getX(g+1),c[2]=s.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:d,c:f}=Ps;if(m.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Ps.getNormal(mc),u[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[1]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=u[x],b=u[v],E=Ps[l[x]],U=Ps[l[v]],I=`${y}_${b}`,C=`${b}_${y}`;C in h&&h[C]?(mc.dot(h[C].normal)<=i&&(p.push(E.x,E.y,E.z),p.push(U.x,U.y,U.z)),h[C]=null):I in h||(h[I]={index0:c[x],index1:c[v],normal:mc.clone()})}}for(const g in h)if(h[g]){const{index0:m,index1:d}=h[g];Ds.fromBufferAttribute(a,m),Hs.fromBufferAttribute(a,d),p.push(Ds.x,Ds.y,Ds.z),p.push(Hs.x,Hs.y,Hs.z)}this.setAttribute("position",new Mn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class bE extends as{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new VA,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ag extends eA{constructor(e,A=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=A}dispose(){}copy(e,A){return super.copy(e,A),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const A=super.toJSON(e);return A.object.color=this.color.getHex(),A.object.intensity=this.intensity,this.groundColor!==void 0&&(A.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(A.object.distance=this.distance),this.angle!==void 0&&(A.object.angle=this.angle),this.decay!==void 0&&(A.object.decay=this.decay),this.penumbra!==void 0&&(A.object.penumbra=this.penumbra),this.shadow!==void 0&&(A.object.shadow=this.shadow.toJSON()),A}}const Bc=new gt,sf=new P,af=new P;class ME{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const A=this.camera,n=this.matrix;sf.setFromMatrixPosition(e.matrixWorld),A.position.copy(sf),af.setFromMatrixPosition(e.target.matrixWorld),A.lookAt(af),A.updateMatrixWorld(),Bc.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const of=new gt,Ei=new P,vc=new P;class FE extends ME{constructor(){super(new cA(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,A=0){const n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ei),vc.copy(n.position),vc.add(this._cubeDirections[A]),n.up.copy(this._cubeUps[A]),n.lookAt(vc),n.updateMatrixWorld(),r.makeTranslation(-Ei.x,-Ei.y,-Ei.z),of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of)}}class cf extends Ag{constructor(e,A,n=0,r=2){super(e,A),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new FE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,A){return super.copy(e,A),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TE extends Ag{constructor(e,A){super(e,A),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);const QE=({})=>{const t=W.useRef();return W.useEffect(()=>{if(!t.current)return;const e=new UE,A=new cA(100,window.innerWidth/window.innerHeight,.1,1e3);A.position.set(-1.2,.4,1),A.lookAt(0,0,0);const n=new yE;n.shadowMap.enabled=!0,n.shadowMap.type=Yl,n.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(n.domElement);const r=[[-.8,0,0],[-.7,0,0],[-.6,0,0],[-.5,0,0],[-.4,0,0],[-.3,0,0],[-.2,0,0],[-.1,0,0],[0,0,0],[.1,0,0],[.2,0,0],[.3,0,0],[.4,0,0],[.5,0,0],[.6,0,0],[.7,0,0],[.8,0,0]],i=new Ti;r.map((c,l)=>{const u=new fi(.02,1,1);new SE(u);const h=new bE({color:"#504FE7",metalness:1,roughness:.244,shininess:100,side:NA,shadowSide:Wt}),p=new kA(u,h);return p.receiveShadow=!0,p.castShadow=!0,p.position.set(c[0],c[1],c[2]),i.add(p),p}),e.add(i),e.background=new Xe(4210752);const s=new TE(16777215);e.add(s);const a=new cf(16777215,1);a.position.set(-2,2,2),a.castShadow=!0,a.shadow.radius=.2,e.add(a);const o=new cf(16777215,10);return o.position.set(-3,1,2),o.castShadow=!0,e.add(o),n.render(e,A),()=>{t.current.removeChild(n.domElement)}},[]),w.jsx("div",{ref:t})},IE=({})=>w.jsx("div",{children:w.jsx(QE,{})});var Jt=function(){return Jt=Object.assign||function(e){for(var A,n=1,r=arguments.length;n<r;n++){A=arguments[n];for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(e[i]=A[i])}return e},Jt.apply(this,arguments)};function Na(t,e,A){if(A||arguments.length===2)for(var n=0,r=e.length,i;n<r;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}var it="-ms-",Gi="-moz-",Ye="-webkit-",ng="comm",lo="rule",tu="decl",RE="@import",rg="@keyframes",LE="@layer",ig=Math.abs,Au=String.fromCharCode,ol=Object.assign;function DE(t,e){return Qt(t,0)^45?(((e<<2^Qt(t,0))<<2^Qt(t,1))<<2^Qt(t,2))<<2^Qt(t,3):0}function sg(t){return t.trim()}function An(t,e){return(t=e.exec(t))?t[0]:t}function Oe(t,e,A){return t.replace(e,A)}function pa(t,e,A){return t.indexOf(e,A)}function Qt(t,e){return t.charCodeAt(e)|0}function ei(t,e,A){return t.slice(e,A)}function HA(t){return t.length}function ag(t){return t.length}function Qi(t,e){return e.push(t),t}function HE(t,e){return t.map(e).join("")}function lf(t,e){return t.filter(function(A){return!An(A,e)})}var uo=1,ti=1,og=0,vA=0,_t=0,pi="";function ho(t,e,A,n,r,i,s,a){return{value:t,root:e,parent:A,type:n,props:r,children:i,line:uo,column:ti,length:s,return:"",siblings:a}}function pn(t,e){return ol(ho("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Fr(t){for(;t.root;)t=pn(t.root,{children:[t]});Qi(t,t.siblings)}function PE(){return _t}function NE(){return _t=vA>0?Qt(pi,--vA):0,ti--,_t===10&&(ti=1,uo--),_t}function MA(){return _t=vA<og?Qt(pi,vA++):0,ti++,_t===10&&(ti=1,uo++),_t}function rr(){return Qt(pi,vA)}function ga(){return vA}function fo(t,e){return ei(pi,t,e)}function cl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function OE(t){return uo=ti=1,og=HA(pi=t),vA=0,[]}function kE(t){return pi="",t}function wc(t){return sg(fo(vA-1,ll(t===91?t+2:t===40?t+1:t)))}function GE(t){for(;(_t=rr())&&_t<33;)MA();return cl(t)>2||cl(_t)>3?"":" "}function VE(t,e){for(;--e&&MA()&&!(_t<48||_t>102||_t>57&&_t<65||_t>70&&_t<97););return fo(t,ga()+(e<6&&rr()==32&&MA()==32))}function ll(t){for(;MA();)switch(_t){case t:return vA;case 34:case 39:t!==34&&t!==39&&ll(_t);break;case 40:t===41&&ll(t);break;case 92:MA();break}return vA}function KE(t,e){for(;MA()&&t+_t!==57;)if(t+_t===84&&rr()===47)break;return"/*"+fo(e,vA-1)+"*"+Au(t===47?t:MA())}function zE(t){for(;!cl(rr());)MA();return fo(t,vA)}function WE(t){return kE(ma("",null,null,null,[""],t=OE(t),0,[0],t))}function ma(t,e,A,n,r,i,s,a,o){for(var c=0,l=0,u=s,h=0,p=0,g=0,m=1,d=1,f=1,x=0,v="",y=r,b=i,E=n,U=v;d;)switch(g=x,x=MA()){case 40:if(g!=108&&Qt(U,u-1)==58){pa(U+=Oe(wc(x),"&","&\f"),"&\f",ig(c?a[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:U+=wc(x);break;case 9:case 10:case 13:case 32:U+=GE(g);break;case 92:U+=VE(ga()-1,7);continue;case 47:switch(rr()){case 42:case 47:Qi(XE(KE(MA(),ga()),e,A,o),o);break;default:U+="/"}break;case 123*m:a[c++]=HA(U)*f;case 125*m:case 59:case 0:switch(x){case 0:case 125:d=0;case 59+l:f==-1&&(U=Oe(U,/\f/g,"")),p>0&&HA(U)-u&&Qi(p>32?hf(U+";",n,A,u-1,o):hf(Oe(U," ","")+";",n,A,u-2,o),o);break;case 59:U+=";";default:if(Qi(E=uf(U,e,A,c,l,r,a,v,y=[],b=[],u,i),i),x===123)if(l===0)ma(U,e,E,E,y,i,u,a,b);else switch(h===99&&Qt(U,3)===110?100:h){case 100:case 108:case 109:case 115:ma(t,E,E,n&&Qi(uf(t,E,E,0,0,r,a,v,r,y=[],u,b),b),r,b,u,a,n?y:b);break;default:ma(U,E,E,E,[""],b,0,a,b)}}c=l=p=0,m=f=1,v=U="",u=s;break;case 58:u=1+HA(U),p=g;default:if(m<1){if(x==123)--m;else if(x==125&&m++==0&&NE()==125)continue}switch(U+=Au(x),x*m){case 38:f=l>0?1:(U+="\f",-1);break;case 44:a[c++]=(HA(U)-1)*f,f=1;break;case 64:rr()===45&&(U+=wc(MA())),h=rr(),l=u=HA(v=U+=zE(ga())),x++;break;case 45:g===45&&HA(U)==2&&(m=0)}}return i}function uf(t,e,A,n,r,i,s,a,o,c,l,u){for(var h=r-1,p=r===0?i:[""],g=ag(p),m=0,d=0,f=0;m<n;++m)for(var x=0,v=ei(t,h+1,h=ig(d=s[m])),y=t;x<g;++x)(y=sg(d>0?p[x]+" "+v:Oe(v,/&\f/g,p[x])))&&(o[f++]=y);return ho(t,e,A,r===0?lo:a,o,c,l,u)}function XE(t,e,A,n){return ho(t,e,A,ng,Au(PE()),ei(t,2,-2),0,n)}function hf(t,e,A,n,r){return ho(t,e,A,tu,ei(t,0,n),ei(t,n+1,-1),n,r)}function cg(t,e,A){switch(DE(t,e)){case 5103:return Ye+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ye+t+t;case 4789:return Gi+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ye+t+Gi+t+it+t+t;case 5936:switch(Qt(t,e+11)){case 114:return Ye+t+it+Oe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ye+t+it+Oe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ye+t+it+Oe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ye+t+it+t+t;case 6165:return Ye+t+it+"flex-"+t+t;case 5187:return Ye+t+Oe(t,/(\w+).+(:[^]+)/,Ye+"box-$1$2"+it+"flex-$1$2")+t;case 5443:return Ye+t+it+"flex-item-"+Oe(t,/flex-|-self/g,"")+(An(t,/flex-|baseline/)?"":it+"grid-row-"+Oe(t,/flex-|-self/g,""))+t;case 4675:return Ye+t+it+"flex-line-pack"+Oe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ye+t+it+Oe(t,"shrink","negative")+t;case 5292:return Ye+t+it+Oe(t,"basis","preferred-size")+t;case 6060:return Ye+"box-"+Oe(t,"-grow","")+Ye+t+it+Oe(t,"grow","positive")+t;case 4554:return Ye+Oe(t,/([^-])(transform)/g,"$1"+Ye+"$2")+t;case 6187:return Oe(Oe(Oe(t,/(zoom-|grab)/,Ye+"$1"),/(image-set)/,Ye+"$1"),t,"")+t;case 5495:case 3959:return Oe(t,/(image-set\([^]*)/,Ye+"$1$`$1");case 4968:return Oe(Oe(t,/(.+:)(flex-)?(.*)/,Ye+"box-pack:$3"+it+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ye+t+t;case 4200:if(!An(t,/flex-|baseline/))return it+"grid-column-align"+ei(t,e)+t;break;case 2592:case 3360:return it+Oe(t,"template-","")+t;case 4384:case 3616:return A&&A.some(function(n,r){return e=r,An(n.props,/grid-\w+-end/)})?~pa(t+(A=A[e].value),"span",0)?t:it+Oe(t,"-start","")+t+it+"grid-row-span:"+(~pa(A,"span",0)?An(A,/\d+/):+An(A,/\d+/)-+An(t,/\d+/))+";":it+Oe(t,"-start","")+t;case 4896:case 4128:return A&&A.some(function(n){return An(n.props,/grid-\w+-start/)})?t:it+Oe(Oe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Oe(t,/(.+)-inline(.+)/,Ye+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(HA(t)-1-e>6)switch(Qt(t,e+1)){case 109:if(Qt(t,e+4)!==45)break;case 102:return Oe(t,/(.+:)(.+)-([^]+)/,"$1"+Ye+"$2-$3$1"+Gi+(Qt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~pa(t,"stretch",0)?cg(Oe(t,"stretch","fill-available"),e,A)+t:t}break;case 5152:case 5920:return Oe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,r,i,s,a,o,c){return it+r+":"+i+c+(s?it+r+"-span:"+(a?o:+o-+i)+c:"")+t});case 4949:if(Qt(t,e+6)===121)return Oe(t,":",":"+Ye)+t;break;case 6444:switch(Qt(t,Qt(t,14)===45?18:11)){case 120:return Oe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ye+(Qt(t,14)===45?"inline-":"")+"box$3$1"+Ye+"$2$3$1"+it+"$2box$3")+t;case 100:return Oe(t,":",":"+it)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(t,"scroll-","scroll-snap-")+t}return t}function Oa(t,e){for(var A="",n=0;n<t.length;n++)A+=e(t[n],n,t,e)||"";return A}function jE(t,e,A,n){switch(t.type){case LE:if(t.children.length)break;case RE:case tu:return t.return=t.return||t.value;case ng:return"";case rg:return t.return=t.value+"{"+Oa(t.children,n)+"}";case lo:if(!HA(t.value=t.props.join(",")))return""}return HA(A=Oa(t.children,n))?t.return=t.value+"{"+A+"}":""}function YE(t){var e=ag(t);return function(A,n,r,i){for(var s="",a=0;a<e;a++)s+=t[a](A,n,r,i)||"";return s}}function $E(t){return function(e){e.root||(e=e.return)&&t(e)}}function JE(t,e,A,n){if(t.length>-1&&!t.return)switch(t.type){case tu:t.return=cg(t.value,t.length,A);return;case rg:return Oa([pn(t,{value:Oe(t.value,"@","@"+Ye)})],n);case lo:if(t.length)return HE(A=t.props,function(r){switch(An(r,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fr(pn(t,{props:[Oe(r,/:(read-\w+)/,":"+Gi+"$1")]})),Fr(pn(t,{props:[r]})),ol(t,{props:lf(A,n)});break;case"::placeholder":Fr(pn(t,{props:[Oe(r,/:(plac\w+)/,":"+Ye+"input-$1")]})),Fr(pn(t,{props:[Oe(r,/:(plac\w+)/,":"+Gi+"$1")]})),Fr(pn(t,{props:[Oe(r,/:(plac\w+)/,it+"input-$1")]})),Fr(pn(t,{props:[r]})),ol(t,{props:lf(A,n)});break}return""})}}var qE={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},aA={},Ai=typeof process<"u"&&aA!==void 0&&(aA.REACT_APP_SC_ATTR||aA.SC_ATTR)||"data-styled",lg="active",ug="data-styled-version",po="6.1.8",nu=`/*!sc*/
`,ru=typeof window<"u"&&"HTMLElement"in window,ZE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&aA!==void 0&&aA.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&aA.REACT_APP_SC_DISABLE_SPEEDY!==""?aA.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&aA.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&aA!==void 0&&aA.SC_DISABLE_SPEEDY!==void 0&&aA.SC_DISABLE_SPEEDY!==""&&aA.SC_DISABLE_SPEEDY!=="false"&&aA.SC_DISABLE_SPEEDY),go=Object.freeze([]),ni=Object.freeze({});function ey(t,e,A){return A===void 0&&(A=ni),t.theme!==A.theme&&t.theme||e||A.theme}var hg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ty=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ay=/(^-|-$)/g;function ff(t){return t.replace(ty,"-").replace(Ay,"")}var ny=/(a)(d)/gi,Ns=52,df=function(t){return String.fromCharCode(t+(t>25?39:97))};function ul(t){var e,A="";for(e=Math.abs(t);e>Ns;e=e/Ns|0)A=df(e%Ns)+A;return(df(e%Ns)+A).replace(ny,"$1-$2")}var xc,fg=5381,Gr=function(t,e){for(var A=e.length;A;)t=33*t^e.charCodeAt(--A);return t},dg=function(t){return Gr(fg,t)};function ry(t){return ul(dg(t)>>>0)}function iy(t){return t.displayName||t.name||"Component"}function _c(t){return typeof t=="string"&&!0}var pg=typeof Symbol=="function"&&Symbol.for,gg=pg?Symbol.for("react.memo"):60115,sy=pg?Symbol.for("react.forward_ref"):60112,ay={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cy=((xc={})[sy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xc[gg]=mg,xc);function pf(t){return("type"in(e=t)&&e.type.$$typeof)===gg?mg:"$$typeof"in t?cy[t.$$typeof]:ay;var e}var ly=Object.defineProperty,uy=Object.getOwnPropertyNames,gf=Object.getOwnPropertySymbols,hy=Object.getOwnPropertyDescriptor,fy=Object.getPrototypeOf,mf=Object.prototype;function Bg(t,e,A){if(typeof e!="string"){if(mf){var n=fy(e);n&&n!==mf&&Bg(t,n,A)}var r=uy(e);gf&&(r=r.concat(gf(e)));for(var i=pf(t),s=pf(e),a=0;a<r.length;++a){var o=r[a];if(!(o in oy||A&&A[o]||s&&o in s||i&&o in i)){var c=hy(e,o);try{ly(t,o,c)}catch{}}}}return t}function ri(t){return typeof t=="function"}function iu(t){return typeof t=="object"&&"styledComponentId"in t}function tr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Bf(t,e){if(t.length===0)return"";for(var A=t[0],n=1;n<t.length;n++)A+=e?e+t[n]:t[n];return A}function qi(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function hl(t,e,A){if(A===void 0&&(A=!1),!A&&!qi(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=hl(t[n],e[n]);else if(qi(e))for(var n in e)t[n]=hl(t[n],e[n]);return t}function su(t,e){Object.defineProperty(t,"toString",{value:e})}function os(t){for(var e=[],A=1;A<arguments.length;A++)e[A-1]=arguments[A];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var dy=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var A=0,n=0;n<e;n++)A+=this.groupSizes[n];return A},t.prototype.insertRules=function(e,A){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw os(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=r;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),o=(s=0,A.length);s<o;s++)this.tag.insertRule(a,A[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var A=this.groupSizes[e],n=this.indexOfGroup(e),r=n+A;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var A="";if(e>=this.length||this.groupSizes[e]===0)return A;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,s=r;s<i;s++)A+="".concat(this.tag.getRule(s)).concat(nu);return A},t}(),Ba=new Map,ka=new Map,va=1,Os=function(t){if(Ba.has(t))return Ba.get(t);for(;ka.has(va);)va++;var e=va++;return Ba.set(t,e),ka.set(e,t),e},py=function(t,e){va=e+1,Ba.set(t,e),ka.set(e,t)},gy="style[".concat(Ai,"][").concat(ug,'="').concat(po,'"]'),my=new RegExp("^".concat(Ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),By=function(t,e,A){for(var n,r=A.split(","),i=0,s=r.length;i<s;i++)(n=r[i])&&t.registerName(e,n)},vy=function(t,e){for(var A,n=((A=e.textContent)!==null&&A!==void 0?A:"").split(nu),r=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var o=a.match(my);if(o){var c=0|parseInt(o[1],10),l=o[2];c!==0&&(py(l,c),By(t,l,o[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}};function wy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vg=function(t){var e=document.head,A=t||e,n=document.createElement("style"),r=function(a){var o=Array.from(a.querySelectorAll("style[".concat(Ai,"]")));return o[o.length-1]}(A),i=r!==void 0?r.nextSibling:null;n.setAttribute(Ai,lg),n.setAttribute(ug,po);var s=wy();return s&&n.setAttribute("nonce",s),A.insertBefore(n,i),n},xy=function(){function t(e){this.element=vg(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(A){if(A.sheet)return A.sheet;for(var n=document.styleSheets,r=0,i=n.length;r<i;r++){var s=n[r];if(s.ownerNode===A)return s}throw os(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,A){try{return this.sheet.insertRule(A,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var A=this.sheet.cssRules[e];return A&&A.cssText?A.cssText:""},t}(),_y=function(){function t(e){this.element=vg(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,A){if(e<=this.length&&e>=0){var n=document.createTextNode(A);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Cy=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,A){return e<=this.length&&(this.rules.splice(e,0,A),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),vf=ru,Ey={isServer:!ru,useCSSOMInjection:!ZE},wg=function(){function t(e,A,n){e===void 0&&(e=ni),A===void 0&&(A={});var r=this;this.options=Jt(Jt({},Ey),e),this.gs=A,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ru&&vf&&(vf=!1,function(i){for(var s=document.querySelectorAll(gy),a=0,o=s.length;a<o;a++){var c=s[a];c&&c.getAttribute(Ai)!==lg&&(vy(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),su(this,function(){return function(i){for(var s=i.getTag(),a=s.length,o="",c=function(u){var h=function(f){return ka.get(f)}(u);if(h===void 0)return"continue";var p=i.names.get(h),g=s.getGroup(u);if(p===void 0||g.length===0)return"continue";var m="".concat(Ai,".g").concat(u,'[id="').concat(h,'"]'),d="";p!==void 0&&p.forEach(function(f){f.length>0&&(d+="".concat(f,","))}),o+="".concat(g).concat(m,'{content:"').concat(d,'"}').concat(nu)},l=0;l<a;l++)c(l);return o}(r)})}return t.registerId=function(e){return Os(e)},t.prototype.reconstructWithOptions=function(e,A){return A===void 0&&(A=!0),new t(Jt(Jt({},this.options),e),this.gs,A&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(A){var n=A.useCSSOMInjection,r=A.target;return A.isServer?new Cy(r):n?new xy(r):new _y(r)}(this.options),new dy(e)));var e},t.prototype.hasNameForId=function(e,A){return this.names.has(e)&&this.names.get(e).has(A)},t.prototype.registerName=function(e,A){if(Os(e),this.names.has(e))this.names.get(e).add(A);else{var n=new Set;n.add(A),this.names.set(e,n)}},t.prototype.insertRules=function(e,A,n){this.registerName(e,A),this.getTag().insertRules(Os(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Os(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),yy=/&/g,Uy=/^\s*\/\/.*$/gm;function xg(t,e){return t.map(function(A){return A.type==="rule"&&(A.value="".concat(e," ").concat(A.value),A.value=A.value.replaceAll(",",",".concat(e," ")),A.props=A.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(A.children)&&A.type!=="@keyframes"&&(A.children=xg(A.children,e)),A})}function Sy(t){var e,A,n,r=t===void 0?ni:t,i=r.options,s=i===void 0?ni:i,a=r.plugins,o=a===void 0?go:a,c=function(h,p,g){return g.startsWith(A)&&g.endsWith(A)&&g.replaceAll(A,"").length>0?".".concat(e):h},l=o.slice();l.push(function(h){h.type===lo&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(yy,A).replace(n,c))}),s.prefix&&l.push(JE),l.push(jE);var u=function(h,p,g,m){p===void 0&&(p=""),g===void 0&&(g=""),m===void 0&&(m="&"),e=m,A=p,n=new RegExp("\\".concat(A,"\\b"),"g");var d=h.replace(Uy,""),f=WE(g||p?"".concat(g," ").concat(p," { ").concat(d," }"):d);s.namespace&&(f=xg(f,s.namespace));var x=[];return Oa(f,YE(l.concat($E(function(v){return x.push(v)})))),x};return u.hash=o.length?o.reduce(function(h,p){return p.name||os(15),Gr(h,p.name)},fg).toString():"",u}var by=new wg,fl=Sy(),_g=BA.createContext({shouldForwardProp:void 0,styleSheet:by,stylis:fl});_g.Consumer;BA.createContext(void 0);function wf(){return W.useContext(_g)}var My=function(){function t(e,A){var n=this;this.inject=function(r,i){i===void 0&&(i=fl);var s=n.name+i.hash;r.hasNameForId(n.id,s)||r.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=A,su(this,function(){throw os(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=fl),this.name+e.hash},t}(),Fy=function(t){return t>="A"&&t<="Z"};function xf(t){for(var e="",A=0;A<t.length;A++){var n=t[A];if(A===1&&n==="-"&&t[0]==="-")return t;Fy(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Cg=function(t){return t==null||t===!1||t===""},Eg=function(t){var e,A,n=[];for(var r in t){var i=t[r];t.hasOwnProperty(r)&&!Cg(i)&&(Array.isArray(i)&&i.isCss||ri(i)?n.push("".concat(xf(r),":"),i,";"):qi(i)?n.push.apply(n,Na(Na(["".concat(r," {")],Eg(i),!1),["}"],!1)):n.push("".concat(xf(r),": ").concat((e=r,(A=i)==null||typeof A=="boolean"||A===""?"":typeof A!="number"||A===0||e in qE||e.startsWith("--")?String(A).trim():"".concat(A,"px")),";")))}return n};function ir(t,e,A,n){if(Cg(t))return[];if(iu(t))return[".".concat(t.styledComponentId)];if(ri(t)){if(!ri(i=t)||i.prototype&&i.prototype.isReactComponent||!e)return[t];var r=t(e);return ir(r,e,A,n)}var i;return t instanceof My?A?(t.inject(A,n),[t.getName(n)]):[t]:qi(t)?Eg(t):Array.isArray(t)?Array.prototype.concat.apply(go,t.map(function(s){return ir(s,e,A,n)})):[t.toString()]}function Ty(t){for(var e=0;e<t.length;e+=1){var A=t[e];if(ri(A)&&!iu(A))return!1}return!0}var Qy=dg(po),Iy=function(){function t(e,A,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Ty(e),this.componentId=A,this.baseHash=Gr(Qy,A),this.baseStyle=n,wg.registerId(A)}return t.prototype.generateAndInjectStyles=function(e,A,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,A,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&A.hasNameForId(this.componentId,this.staticRulesId))r=tr(r,this.staticRulesId);else{var i=Bf(ir(this.rules,e,A,n)),s=ul(Gr(this.baseHash,i)>>>0);if(!A.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);A.insertRules(this.componentId,s,a)}r=tr(r,s),this.staticRulesId=s}else{for(var o=Gr(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u=="string")c+=u;else if(u){var h=Bf(ir(u,e,A,n));o=Gr(o,h+l),c+=h}}if(c){var p=ul(o>>>0);A.hasNameForId(this.componentId,p)||A.insertRules(this.componentId,p,n(c,".".concat(p),void 0,this.componentId)),r=tr(r,p)}}return r},t}(),yg=BA.createContext(void 0);yg.Consumer;var Cc={};function Ry(t,e,A){var n=iu(t),r=t,i=!_c(t),s=e.attrs,a=s===void 0?go:s,o=e.componentId,c=o===void 0?function(y,b){var E=typeof y!="string"?"sc":ff(y);Cc[E]=(Cc[E]||0)+1;var U="".concat(E,"-").concat(ry(po+E+Cc[E]));return b?"".concat(b,"-").concat(U):U}(e.displayName,e.parentComponentId):o,l=e.displayName,u=l===void 0?function(y){return _c(y)?"styled.".concat(y):"Styled(".concat(iy(y),")")}(t):l,h=e.displayName&&e.componentId?"".concat(ff(e.displayName),"-").concat(e.componentId):e.componentId||c,p=n&&r.attrs?r.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(n&&r.shouldForwardProp){var m=r.shouldForwardProp;if(e.shouldForwardProp){var d=e.shouldForwardProp;g=function(y,b){return m(y,b)&&d(y,b)}}else g=m}var f=new Iy(A,h,n?r.componentStyle:void 0);function x(y,b){return function(E,U,I){var C=E.attrs,B=E.componentStyle,Q=E.defaultProps,R=E.foldedComponentIds,T=E.styledComponentId,D=E.target,N=BA.useContext(yg),X=wf(),q=E.shouldForwardProp||X.shouldForwardProp,k=ey(U,N,Q)||ni,j=function(Y,re,Ae){for(var Ee,we=Jt(Jt({},re),{className:void 0,theme:Ae}),Le=0;Le<Y.length;Le+=1){var H=ri(Ee=Y[Le])?Ee(we):Ee;for(var xe in H)we[xe]=xe==="className"?tr(we[xe],H[xe]):xe==="style"?Jt(Jt({},we[xe]),H[xe]):H[xe]}return re.className&&(we.className=tr(we.className,re.className)),we}(C,U,k),J=j.as||D,ie={};for(var Z in j)j[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&j.theme===k||(Z==="forwardedAs"?ie.as=j.forwardedAs:q&&!q(Z,J)||(ie[Z]=j[Z]));var pe=function(Y,re){var Ae=wf(),Ee=Y.generateAndInjectStyles(re,Ae.styleSheet,Ae.stylis);return Ee}(B,j),O=tr(R,T);return pe&&(O+=" "+pe),j.className&&(O+=" "+j.className),ie[_c(J)&&!hg.has(J)?"class":"className"]=O,ie.ref=I,W.createElement(J,ie)}(v,y,b)}x.displayName=u;var v=BA.forwardRef(x);return v.attrs=p,v.componentStyle=f,v.displayName=u,v.shouldForwardProp=g,v.foldedComponentIds=n?tr(r.foldedComponentIds,r.styledComponentId):"",v.styledComponentId=h,v.target=n?r.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=n?function(b){for(var E=[],U=1;U<arguments.length;U++)E[U-1]=arguments[U];for(var I=0,C=E;I<C.length;I++)hl(b,C[I],!0);return b}({},r.defaultProps,y):y}}),su(v,function(){return".".concat(v.styledComponentId)}),i&&Bg(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function _f(t,e){for(var A=[t[0]],n=0,r=e.length;n<r;n+=1)A.push(e[n],t[n+1]);return A}var Cf=function(t){return Object.assign(t,{isCss:!0})};function Ly(t){for(var e=[],A=1;A<arguments.length;A++)e[A-1]=arguments[A];if(ri(t)||qi(t))return Cf(ir(_f(go,Na([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?ir(n):Cf(ir(_f(n,e)))}function dl(t,e,A){if(A===void 0&&(A=ni),!e)throw os(1,e);var n=function(r){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return t(e,A,Ly.apply(void 0,Na([r],i,!1)))};return n.attrs=function(r){return dl(t,e,Jt(Jt({},A),{attrs:Array.prototype.concat(A.attrs,r).filter(Boolean)}))},n.withConfig=function(r){return dl(t,e,Jt(Jt({},A),r))},n}var Ug=function(t){return dl(Ry,t)},ge=Ug;hg.forEach(function(t){ge[t]=Ug(t)});const ii=({children:t,style:e,className:A})=>w.jsx(Dy,{className:A,style:e,children:t}),Dy=ge.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`,Hy=({direction:t="row",size:e=1,lang:A="100%",margin:n=0,type:r="solid",color:i="var(--color-border-1)",content:s,align:a="center",style:o,className:c=""})=>w.jsxs(Py,{className:`land-divider ${c}`,style:{width:t==="row"?`${A}`:`${e}px`,height:t==="column"?`${A}`:`${e}px`,margin:t==="row"?`${n}px 0`:`0 ${n}px`,...o},direction:t,gap:s?"8px":"",children:[w.jsx("div",{style:{flex:a==="left"?"10%":a==="right"?"90%":1,height:"0px",borderBottom:t==="row"?`${e}px ${r} ${i}`:"none",borderLeft:t==="column"?`${e}px ${r} ${i}`:"none"}}),s&&w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{fontSize:"12px",color:"#999",writingMode:t==="column"?"vertical-rl":"unset",textOrientation:t==="column"?"upright":"unset"},children:s}),w.jsx("div",{style:{flex:a==="left"?"90%":a==="right"?"10%":1,height:"0px",borderBottom:t==="row"?`${e}px ${r} ${i}`:"none",borderLeft:t==="column"?`${e}px ${r} ${i}`:"none"}})]})]}),Py=ge.div`
  display: flex;
  flex-direction: ${t=>t.direction};
  align-items: center;
  gap: ${t=>t.gap};
`;var lA=(t=>(t.SELF="self",t.OTHERS="others",t.SIMPLE="simple",t.DISABLED="disabled",t))(lA||{});const Ny=({actived:t,data:e,direction:A="row",theme:n="dot",border:r=!0,itemStyle:i,itemClassName:s,handleChangeTab:a,style:o,className:c})=>w.jsx(Oy,{className:`land-menu ${c}`,style:o,direction:A,border:r,children:e==null?void 0:e.map(l=>w.jsx("div",{className:`land-nav-item ${l.clickType==="simple"?"simple":""} ${l.clickType==="disabled"?"disabled":""} ${t===l.key?"actived":""} ${n}`,children:w.jsxs("a",{role:"button",className:`land-nav-link ${s}`,style:i,onClick:()=>a==null?void 0:a(l.key,l.clickType),children:[typeof l.icon=="string"?w.jsx("img",{src:l.icon,className:"land-nav-icon"}):l.icon,w.jsx("p",{className:"land-nav-title","data-title":l.title,children:l.title}),w.jsx("span",{className:"land-nav-sub-title",children:l.subTitle}),l.isNew&&w.jsx("i",{className:"land-nav-new",children:typeof l.isNew=="boolean"?"NEW":l.isNew})]},l.key)}))}),Oy=ge.div`
  display: flex;
  flex-direction: ${t=>t.direction};
  gap: var(--gap-4);
  height: ${t=>t.direction==="row"?"100%":""};
  width: ${t=>t.direction==="column"?"100%":"fit-content"};
  border-bottom: ${t=>t.border&&t.direction==="row"?"var(--border-1) solid var(--color-border-1)":""};
  border-right: ${t=>t.border&&t.direction==="column"?"var(--border-1) solid var(--color-border-1)":""};
  .land-nav-item {
    position: relative;
    height: ${t=>t.direction==="row"?"100%":""};
    width: ${t=>t.direction==="column"?"100%":""};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-4);
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: ${t=>t.direction==="row"?"50%":"-4px"};
      bottom: ${t=>t.direction==="row"?"0":"50%"};
      width: 12px;
      height: 2px;
      transform: ${t=>t.direction==="row"?"translateX(50%)":"translateY(50%) rotate(90deg)"};
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
          width: ${t=>t.direction==="row"?"calc(100% - 32px)":"12px"};
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
    padding: var(--padding-medium-xy);
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
`,Sg=({stroke:t="currentcolor",size:e=16,strokeWidth:A=2,style:n,className:r})=>w.jsx("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",style:n,className:r,children:w.jsx("path",{d:"M36 18L24 30L12 18",stroke:t,strokeWidth:A,strokeLinecap:"round",strokeLinejoin:"round"})}),Ef=({stroke:t="currentcolor",size:e=16,strokeWidth:A=3,style:n,className:r})=>w.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",style:n,className:r,children:[w.jsx("path",{d:"M6 24.0083V42H42V24",stroke:t,strokeWidth:A,strokeLinecap:"round",strokeLinejoin:"round"}),w.jsx("path",{d:"M33 23L24 32L15 23",stroke:t,strokeWidth:A,strokeLinecap:"round",strokeLinejoin:"round"}),w.jsx("path",{d:"M23.9917 6V32",stroke:t,strokeWidth:A,strokeLinecap:"round",strokeLinejoin:"round"})]}),bg=({fill:t="currentcolor",stroke:e="currentcolor",size:A=16,strokeWidth:n=2,style:r,className:i})=>w.jsx("svg",{width:A,height:A,viewBox:"0 0 48 48",fill:"none",style:r,className:i,children:w.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",fill:n===0?t:"none",stroke:n===0?"none":e,strokeWidth:n})}),au=({size:t=16,stroke:e="currentcolor",style:A,className:n})=>w.jsx("svg",{width:t,height:t,viewBox:"0 0 48 48",fill:"none",style:A,className:n,children:w.jsx("path",{d:"M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:e,strokeWidth:"2"})}),ky=({size:t=16,stroke:e="currentcolor",strokeWidth:A=4,className:n="IconFileLine",style:r})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 48 48",className:n,style:r,children:[w.jsx("path",{d:"M7.94971 11.9497H39.9497",stroke:e,"stroke-width":A,strokeLinecap:"round",strokeLinejoin:"round"}),w.jsx("path",{d:"M7.94971 23.9497H39.9497",stroke:e,"stroke-width":A,strokeLinecap:"round",strokeLinejoin:"round"}),w.jsx("path",{d:"M7.94971 35.9497H39.9497",stroke:e,"stroke-width":A,strokeLinecap:"round",strokeLinejoin:"round"})]}),Gy=({size:t=16,stroke:e="currentcolor",strokeWidth:A,className:n="IconAdd",style:r})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 48 48",className:n,style:r,children:[w.jsx("path",{d:"M24.0605 10L24.0239 38",stroke:e,strokeWidth:A,strokeLinecap:"round",strokeLinejoin:"round"}),w.jsx("path",{d:"M10 24L38 24",stroke:e,strokeWidth:A,strokeLinecap:"round",strokeLinejoin:"round"})]}),Vy=({size:t=20,fill:e="currentcolor"})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[w.jsx("path",{d:"M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",fill:e}),w.jsx("path",{d:"M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",fill:e}),w.jsx("path",{d:"M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",fill:e}),w.jsx("path",{d:"M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",fill:e}),w.jsx("path",{d:"M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",fill:e}),w.jsx("path",{d:"M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",fill:e}),w.jsx("path",{d:"M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",fill:e}),w.jsx("path",{d:"M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",fill:e}),w.jsx("path",{d:"M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",fill:e})]}),Ky=({size:t=20,stroke:e="currentcolor",strokeWidth:A=3})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[w.jsx("path",{d:"M6 24.0083V42H42V24",stroke:e,strokeWidth:A,strokeLinecap:"round",strokeLinejoin:"round"}),w.jsx("path",{d:"M33 15L24 6L15 15",stroke:e,strokeWidth:A,strokeLinecap:"round",strokeLinejoin:"round"}),w.jsx("path",{d:"M23.9917 32V6",stroke:e,strokeWidth:A,strokeLinecap:"round",strokeLinejoin:"round"})]}),Mg=({fill:t,stroke:e="currentcolor",size:A=20,strokeWidth:n=2})=>w.jsxs("svg",{width:A,height:A,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[w.jsx("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:t||"none",stroke:t||e,strokeWidth:n,strokeLinejoin:"round"}),w.jsx("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:t?"#fff":"none",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),w.jsx("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:t?"white":"none",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),zy=({fill:t="currentcolor",size:e=20})=>w.jsx("svg",{width:e,height:e,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:t})}),Wy=({fill:t,stroke:e="currentcolor",size:A=16,strokeWidth:n=2,className:r="IconCopy"})=>w.jsxs("svg",{width:A,height:A,viewBox:"0 0 48 48",fill:"none",className:r,children:[w.jsx("path",{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",fill:t||"none",stroke:t||e,strokeWidth:n,"stroke-linecap":"round","stroke-linejoin":"round"}),w.jsx("path",{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:t||"none",stroke:t||e,strokeWidth:n,"stroke-width":"2","stroke-linejoin":"round"})]}),hr=({content:t,theme:e="light",style:A,className:n=""})=>w.jsxs(Xy,{className:`land-pop ${e} ${n}`,style:A,children:[t,w.jsx("div",{className:"land-pop-arrow"})]}),Xy=ge.div`
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
  z-index: var(--zIndex-4);
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
`,sr=({text:t,subText:e,icon:A,width:n,height:r,justify:i="center",type:s="border",status:a="default",disabled:o,pop:c,PopProps:l,href:u,target:h="_blank",onClick:p,style:g,className:m=""})=>{const d=W.useMemo(()=>{if(A){if(!t&&!e)return!0}else return!1},[A,t,e]),f=W.useMemo(()=>{switch(a){case"success":return"var(--color-green-";case"warning":return"var(--color-orange-";case"danger":return"var(--color-red-";case"primary":return"var(--color-primary-";default:return""}},[a]);return w.jsx(w.Fragment,{children:u?w.jsxs(jy,{href:u,target:h,className:`land-button ${s} ${a} ${d?"iconOnly":""} ${o?"disabled":""} ${c?"hover-pop":""} ${m}`,style:g,width:n,height:r,justify:i,color:f,onClick:x=>p==null?void 0:p(x),children:[A,!d&&w.jsxs("div",{children:[w.jsx("span",{children:t}),w.jsx("span",{className:"subText",children:e})]}),c&&w.jsx(hr,{content:c,...l})]}):w.jsxs(Fg,{className:`land-button ${s} ${a} ${d?"iconOnly":""} ${o?"disabled":""} ${c?"hover-pop":""} ${m}`,style:g,width:n,height:r,justify:i,color:f,onClick:x=>p==null?void 0:p(x),children:[A,!d&&w.jsxs("div",{children:[w.jsx("span",{children:t}),e&&w.jsx("span",{className:"subText",children:e})]}),c&&w.jsx(hr,{content:c,...l})]})})},Fg=ge.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${t=>t.justify};
  gap: var(--gap-4);
  padding: ${t=>t.width&&t.width!=="100%"?"":"var(--padding-medium)"};
  width: ${t=>t.width?t.width:"fit-content"};
  height: ${t=>t.height?t.height:"fit-content"};
  color: ${t=>t.color?`${t.color}6)`:"var(--color-text-2)"};
  &:hover {
    color: ${t=>t.color?`${t.color}5)`:"var(--color-text-3)"};
  }
  &:active {
    color: ${t=>t.color?`${t.color}7)`:"var(--color-text-1)"};
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
    background-color: ${t=>`${t.color}6)`};
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
      background-color: ${t=>`${t.color}5)`};
    }
    &:active {
      background-color: ${t=>`${t.color}7)`};
    }
  }

  &.border {
    padding: 7px 15px;
    border: ${t=>`var(--border-1) solid ${t.color}4)`};
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover {
      background-color: ${t=>`${t.color}1)`};
    }
    &:active {
      background-color: ${t=>`${t.color}2)`};
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: ${t=>`${t.color}4)`};
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover {
      border-color: ${t=>`${t.color}5)`};
    }
    &:active {
      border-color: ${t=>`${t.color}7)`};
    }
  }

  &.iconOnly {
    padding: 0;
    width: 36px;
    height: 36px;
  }
  &.disabled {
    background-color: ${t=>`${t.color}3)`};
    cursor: default;
    &:hover,
    &:active{
      background-color: ${t=>`${t.color}3)`};
    }
  }
`,jy=ge.a`
  ${Fg};
  text-decoration: none;
`,ou=({h:t="64px",fixed:e,filter:A=0,borderBottom:n=!0,applications:r,logo:i,name:s,onLogoClick:a,divider:o=!0,align:c,menuProps:l,rightComponent:u,style:h,className:p=""})=>{const[g,m]=W.useState(!1);return W.useEffect(()=>{window.onscroll=()=>m(!1),window.onresize=()=>m(!1)}),w.jsxs(Yy,{className:`land-header ${e?"fixed":""} ${p}`,style:h,height:t,filter:A,borderBottom:n,applications:!!r,children:[w.jsxs("div",{className:"land-header-logo",onClick:a,children:[r&&w.jsxs("button",{className:"land-header-application",onClick:d=>d.stopPropagation(),children:[w.jsx(Vy,{}),w.jsx("div",{className:"land-application-drop",children:r})]}),typeof i=="string"?w.jsx("img",{src:i}):i,i&&o&&w.jsx(Hy,{direction:"column",lang:"24px"}),typeof s=="string"?w.jsx("img",{src:s}):s]}),w.jsx($y,{className:"land-header-nav",align:c,showMobileNav:g,children:l&&w.jsx(Ny,{border:!1,...l})}),u&&w.jsx("div",{className:"land-header-btns",children:u}),w.jsx(sr,{icon:w.jsx(ky,{}),type:"text",onClick:()=>m(!g)})]})},Yy=ge.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  padding-left: ${t=>t.applications?"0":""};
  gap: var(--gap-32);
  width: 100vw;
  height: ${t=>t.height};
  border-bottom: ${t=>t.borderBottom?"1px solid var(--color-border-2)":""};
  background: ${t=>t.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"};
  backdrop-filter: ${t=>t.filter?"var(--blur-small)":""};
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
  .land-button{
    display: none;
  }
  @media screen and (max-width: 800px){
    .land-button{
      display: flex;
    }
  }
`,$y=ge.div`
  display: flex;
  flex: 1;
  justify-content: ${t=>t.align};
  height: 100%;
  @media screen and (max-width: 800px) {
    position: relative;
    flex: none;
    width: 48px;
    .land-menu {
      flex-direction: column;
      position: fixed;
      top: 64px;
      right: 0px;
      padding: 12px 4px;
      background: #fff;
      height: fit-content;
      border: 1px solid var(--color-border-1);
      transition: opacity 0.2 linear;
      opacity: ${t=>t.showMobileNav?"1":"0"};
      pointer-events: ${t=>t.showMobileNav?"all":"none"};
    }
  }
`,cu=({children:t,style:e,className:A})=>{const[n,r]=W.useState(132),i=document.querySelector(".land-header"),s=document.querySelector(".land-footer");return W.useEffect(()=>{!i||!s||r(i.getBoundingClientRect().height+s.getBoundingClientRect().height)},[t]),w.jsx(Jy,{className:A,style:e,minHeight:n,children:t})},Jy=ge.main`
  flex: 1;
  min-height: ${t=>`calc(100vh - ${t.minHeight}px)`};
  background: var(--color-bg-white);
`,Rt=({title:t,type:e="h1",prefix:A,sub:n,info:r,style:i,className:s="",onClick:a})=>w.jsxs(qy,{className:`land-title ${s}`,style:i,onClick:()=>a==null?void 0:a(),children:[A&&w.jsx("span",{className:"land-title-prefix",children:A}),e==="h1"&&w.jsx("h1",{children:t}),e==="h2"&&w.jsx("h2",{children:t}),e==="h3"&&w.jsx("h3",{children:t}),e==="p"&&w.jsx("p",{children:t}),r&&w.jsxs("div",{className:"land-title-info hover-pop",children:[w.jsx(au,{stroke:"var(--color-text-4)"}),w.jsx(hr,{content:r,style:{maxWidth:"200px"}})]}),n&&typeof n=="string"?w.jsx("div",{className:"land-title-sub",children:n}):w.jsx(w.Fragment,{children:n})]}),qy=ge.div`
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
    font-size: 14px;
    font-weight: 400;
  }
  .land-title-sub {
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
  .land-title-info {
    position: relative;
    display: flex;
    align-items: center;
  }
`,lu=({desc:t,fileType:e,onUpload:A,children:n,style:r,className:i=""})=>{const s=W.useRef(null),[a,o]=W.useState(),[c,l]=W.useState(!1),u=(h,p)=>{h.preventDefault(),l(!0),p&&(new FileReader().readAsDataURL(p),o(URL.createObjectURL(p)),l(!1))};return W.useEffect(()=>{A==null||A(a)},[a]),w.jsxs(Zy,{className:i,style:r,onDragOver:h=>h.preventDefault(),onDrop:h=>u(h,h.dataTransfer.files[0]),children:[w.jsx(eU,{ref:s,type:"file",accept:e,onChange:h=>{u(h,h.target.files[0])}}),n||(c?w.jsx(w.Fragment,{children:"上传中"}):w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"land-uploader-icon",children:w.jsx(Ky,{})}),w.jsx("div",{className:"land-uploader-desc",children:t})]}))]})},Zy=ge.label`
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
`,eU=ge.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`,Vi=({type:t="text",value:e,placeholder:A,prefix:n,suffix:r,w:i,min:s,max:a,onChange:o,className:c,wrapStyle:l,...u})=>w.jsxs(tU,{className:`land-input ${c}`,style:{width:typeof i=="number"?`${i}px`:i,...l},children:[n,w.jsx("input",{placeholder:A,type:t,value:e,min:s,max:a,onChange:h=>o==null?void 0:o(h.target.value),...u}),r]}),tU=ge.div`
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
`;function Ga(t){"@babel/helpers - typeof";return Ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ga(t)}var AU=/^\s+/,nU=/\s+$/;function fe(t,e){if(t=t||"",e=e||{},t instanceof fe)return t;if(!(this instanceof fe))return new fe(t,e);var A=rU(t);this._originalInput=t,this._r=A.r,this._g=A.g,this._b=A.b,this._a=A.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||A.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=A.ok}fe.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),A,n,r,i,s,a;return A=e.r/255,n=e.g/255,r=e.b/255,A<=.03928?i=A/12.92:i=Math.pow((A+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),r<=.03928?a=r/12.92:a=Math.pow((r+.055)/1.055,2.4),.2126*i+.7152*s+.0722*a},setAlpha:function(e){return this._a=Tg(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Uf(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Uf(this._r,this._g,this._b),A=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+A+", "+n+"%, "+r+"%)":"hsva("+A+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=yf(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=yf(this._r,this._g,this._b),A=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+A+", "+n+"%, "+r+"%)":"hsla("+A+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Sf(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return oU(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(ht(this._r,255)*100)+"%",g:Math.round(ht(this._g,255)*100)+"%",b:Math.round(ht(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(ht(this._r,255)*100)+"%, "+Math.round(ht(this._g,255)*100)+"%, "+Math.round(ht(this._b,255)*100)+"%)":"rgba("+Math.round(ht(this._r,255)*100)+"%, "+Math.round(ht(this._g,255)*100)+"%, "+Math.round(ht(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:wU[Sf(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var A="#"+bf(this._r,this._g,this._b,this._a),n=A,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=fe(e);n="#"+bf(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+A+",endColorstr="+n+")"},toString:function(e){var A=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0,i=!A&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return i?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},clone:function(){return fe(this.toString())},_applyModification:function(e,A){var n=e.apply(null,[this].concat([].slice.call(A)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(hU,arguments)},brighten:function(){return this._applyModification(fU,arguments)},darken:function(){return this._applyModification(dU,arguments)},desaturate:function(){return this._applyModification(cU,arguments)},saturate:function(){return this._applyModification(lU,arguments)},greyscale:function(){return this._applyModification(uU,arguments)},spin:function(){return this._applyModification(pU,arguments)},_applyCombination:function(e,A){return e.apply(null,[this].concat([].slice.call(A)))},analogous:function(){return this._applyCombination(BU,arguments)},complement:function(){return this._applyCombination(gU,arguments)},monochromatic:function(){return this._applyCombination(vU,arguments)},splitcomplement:function(){return this._applyCombination(mU,arguments)},triad:function(){return this._applyCombination(Mf,[3])},tetrad:function(){return this._applyCombination(Mf,[4])}};fe.fromRatio=function(t,e){if(Ga(t)=="object"){var A={};for(var n in t)t.hasOwnProperty(n)&&(n==="a"?A[n]=t[n]:A[n]=Ii(t[n]));t=A}return fe(t,e)};function rU(t){var e={r:0,g:0,b:0},A=1,n=null,r=null,i=null,s=!1,a=!1;return typeof t=="string"&&(t=EU(t)),Ga(t)=="object"&&(qA(t.r)&&qA(t.g)&&qA(t.b)?(e=iU(t.r,t.g,t.b),s=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):qA(t.h)&&qA(t.s)&&qA(t.v)?(n=Ii(t.s),r=Ii(t.v),e=aU(t.h,n,r),s=!0,a="hsv"):qA(t.h)&&qA(t.s)&&qA(t.l)&&(n=Ii(t.s),i=Ii(t.l),e=sU(t.h,n,i),s=!0,a="hsl"),t.hasOwnProperty("a")&&(A=t.a)),A=Tg(A),{ok:s,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:A}}function iU(t,e,A){return{r:ht(t,255)*255,g:ht(e,255)*255,b:ht(A,255)*255}}function yf(t,e,A){t=ht(t,255),e=ht(e,255),A=ht(A,255);var n=Math.max(t,e,A),r=Math.min(t,e,A),i,s,a=(n+r)/2;if(n==r)i=s=0;else{var o=n-r;switch(s=a>.5?o/(2-n-r):o/(n+r),n){case t:i=(e-A)/o+(e<A?6:0);break;case e:i=(A-t)/o+2;break;case A:i=(t-e)/o+4;break}i/=6}return{h:i,s,l:a}}function sU(t,e,A){var n,r,i;t=ht(t,360),e=ht(e,100),A=ht(A,100);function s(c,l,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?c+(l-c)*6*u:u<1/2?l:u<2/3?c+(l-c)*(2/3-u)*6:c}if(e===0)n=r=i=A;else{var a=A<.5?A*(1+e):A+e-A*e,o=2*A-a;n=s(o,a,t+1/3),r=s(o,a,t),i=s(o,a,t-1/3)}return{r:n*255,g:r*255,b:i*255}}function Uf(t,e,A){t=ht(t,255),e=ht(e,255),A=ht(A,255);var n=Math.max(t,e,A),r=Math.min(t,e,A),i,s,a=n,o=n-r;if(s=n===0?0:o/n,n==r)i=0;else{switch(n){case t:i=(e-A)/o+(e<A?6:0);break;case e:i=(A-t)/o+2;break;case A:i=(t-e)/o+4;break}i/=6}return{h:i,s,v:a}}function aU(t,e,A){t=ht(t,360)*6,e=ht(e,100),A=ht(A,100);var n=Math.floor(t),r=t-n,i=A*(1-e),s=A*(1-r*e),a=A*(1-(1-r)*e),o=n%6,c=[A,s,i,i,a,A][o],l=[a,A,A,s,i,i][o],u=[i,i,a,A,A,s][o];return{r:c*255,g:l*255,b:u*255}}function Sf(t,e,A,n){var r=[bA(Math.round(t).toString(16)),bA(Math.round(e).toString(16)),bA(Math.round(A).toString(16))];return n&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function oU(t,e,A,n,r){var i=[bA(Math.round(t).toString(16)),bA(Math.round(e).toString(16)),bA(Math.round(A).toString(16)),bA(Qg(n))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function bf(t,e,A,n){var r=[bA(Qg(n)),bA(Math.round(t).toString(16)),bA(Math.round(e).toString(16)),bA(Math.round(A).toString(16))];return r.join("")}fe.equals=function(t,e){return!t||!e?!1:fe(t).toRgbString()==fe(e).toRgbString()};fe.random=function(){return fe.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function cU(t,e){e=e===0?0:e||10;var A=fe(t).toHsl();return A.s-=e/100,A.s=mo(A.s),fe(A)}function lU(t,e){e=e===0?0:e||10;var A=fe(t).toHsl();return A.s+=e/100,A.s=mo(A.s),fe(A)}function uU(t){return fe(t).desaturate(100)}function hU(t,e){e=e===0?0:e||10;var A=fe(t).toHsl();return A.l+=e/100,A.l=mo(A.l),fe(A)}function fU(t,e){e=e===0?0:e||10;var A=fe(t).toRgb();return A.r=Math.max(0,Math.min(255,A.r-Math.round(255*-(e/100)))),A.g=Math.max(0,Math.min(255,A.g-Math.round(255*-(e/100)))),A.b=Math.max(0,Math.min(255,A.b-Math.round(255*-(e/100)))),fe(A)}function dU(t,e){e=e===0?0:e||10;var A=fe(t).toHsl();return A.l-=e/100,A.l=mo(A.l),fe(A)}function pU(t,e){var A=fe(t).toHsl(),n=(A.h+e)%360;return A.h=n<0?360+n:n,fe(A)}function gU(t){var e=fe(t).toHsl();return e.h=(e.h+180)%360,fe(e)}function Mf(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var A=fe(t).toHsl(),n=[fe(t)],r=360/e,i=1;i<e;i++)n.push(fe({h:(A.h+i*r)%360,s:A.s,l:A.l}));return n}function mU(t){var e=fe(t).toHsl(),A=e.h;return[fe(t),fe({h:(A+72)%360,s:e.s,l:e.l}),fe({h:(A+216)%360,s:e.s,l:e.l})]}function BU(t,e,A){e=e||6,A=A||30;var n=fe(t).toHsl(),r=360/A,i=[fe(t)];for(n.h=(n.h-(r*e>>1)+720)%360;--e;)n.h=(n.h+r)%360,i.push(fe(n));return i}function vU(t,e){e=e||6;for(var A=fe(t).toHsv(),n=A.h,r=A.s,i=A.v,s=[],a=1/e;e--;)s.push(fe({h:n,s:r,v:i})),i=(i+a)%1;return s}fe.mix=function(t,e,A){A=A===0?0:A||50;var n=fe(t).toRgb(),r=fe(e).toRgb(),i=A/100,s={r:(r.r-n.r)*i+n.r,g:(r.g-n.g)*i+n.g,b:(r.b-n.b)*i+n.b,a:(r.a-n.a)*i+n.a};return fe(s)};fe.readability=function(t,e){var A=fe(t),n=fe(e);return(Math.max(A.getLuminance(),n.getLuminance())+.05)/(Math.min(A.getLuminance(),n.getLuminance())+.05)};fe.isReadable=function(t,e,A){var n=fe.readability(t,e),r,i;switch(i=!1,r=yU(A),r.level+r.size){case"AAsmall":case"AAAlarge":i=n>=4.5;break;case"AAlarge":i=n>=3;break;case"AAAsmall":i=n>=7;break}return i};fe.mostReadable=function(t,e,A){var n=null,r=0,i,s,a,o;A=A||{},s=A.includeFallbackColors,a=A.level,o=A.size;for(var c=0;c<e.length;c++)i=fe.readability(t,e[c]),i>r&&(r=i,n=fe(e[c]));return fe.isReadable(t,n,{level:a,size:o})||!s?n:(A.includeFallbackColors=!1,fe.mostReadable(t,["#fff","#000"],A))};var pl=fe.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},wU=fe.hexNames=xU(pl);function xU(t){var e={};for(var A in t)t.hasOwnProperty(A)&&(e[t[A]]=A);return e}function Tg(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function ht(t,e){_U(t)&&(t="100%");var A=CU(t);return t=Math.min(e,Math.max(0,parseFloat(t))),A&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function mo(t){return Math.min(1,Math.max(0,t))}function iA(t){return parseInt(t,16)}function _U(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function CU(t){return typeof t=="string"&&t.indexOf("%")!=-1}function bA(t){return t.length==1?"0"+t:""+t}function Ii(t){return t<=1&&(t=t*100+"%"),t}function Qg(t){return Math.round(parseFloat(t)*255).toString(16)}function Ff(t){return iA(t)/255}var EA=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",A="(?:"+e+")|(?:"+t+")",n="[\\s|\\(]+("+A+")[,|\\s]+("+A+")[,|\\s]+("+A+")\\s*\\)?",r="[\\s|\\(]+("+A+")[,|\\s]+("+A+")[,|\\s]+("+A+")[,|\\s]+("+A+")\\s*\\)?";return{CSS_UNIT:new RegExp(A),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function qA(t){return!!EA.CSS_UNIT.exec(t)}function EU(t){t=t.replace(AU,"").replace(nU,"").toLowerCase();var e=!1;if(pl[t])t=pl[t],e=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var A;return(A=EA.rgb.exec(t))?{r:A[1],g:A[2],b:A[3]}:(A=EA.rgba.exec(t))?{r:A[1],g:A[2],b:A[3],a:A[4]}:(A=EA.hsl.exec(t))?{h:A[1],s:A[2],l:A[3]}:(A=EA.hsla.exec(t))?{h:A[1],s:A[2],l:A[3],a:A[4]}:(A=EA.hsv.exec(t))?{h:A[1],s:A[2],v:A[3]}:(A=EA.hsva.exec(t))?{h:A[1],s:A[2],v:A[3],a:A[4]}:(A=EA.hex8.exec(t))?{r:iA(A[1]),g:iA(A[2]),b:iA(A[3]),a:Ff(A[4]),format:e?"name":"hex8"}:(A=EA.hex6.exec(t))?{r:iA(A[1]),g:iA(A[2]),b:iA(A[3]),format:e?"name":"hex"}:(A=EA.hex4.exec(t))?{r:iA(A[1]+""+A[1]),g:iA(A[2]+""+A[2]),b:iA(A[3]+""+A[3]),a:Ff(A[4]+""+A[4]),format:e?"name":"hex8"}:(A=EA.hex3.exec(t))?{r:iA(A[1]+""+A[1]),g:iA(A[2]+""+A[2]),b:iA(A[3]+""+A[3]),format:e?"name":"hex"}:!1}function yU(t){var e,A;return t=t||{level:"AA",size:"small"},e=(t.level||"AA").toUpperCase(),A=(t.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),A!=="small"&&A!=="large"&&(A="small"),{level:e,size:A}}const wt=({w:t="100%",h:e,column:A,wrap:n,justify:r="start",align:i="start",gap:s,bothCenter:a,children:o,style:c,className:l=""})=>w.jsx(UU,{className:l,style:c,width:t,height:e,direction:A?"column":"row",gap:typeof s=="number"?`${s}px`:s,wrap:n,justify:a?"center":r,align:a?"center":i,children:o}),UU=ge.div`
  display: flex;
  flex-direction: ${t=>t.direction};
  align-items: center;
  gap: ${t=>t.gap};
  flex-wrap: ${t=>t.wrap?"wrap":""};
  justify-content: ${t=>t.justify};
  align-items: ${t=>t.align};
  width: ${t=>t.width};
  height: ${t=>t.height};
`,Ig=({show:t=!1,type:e="default",text:A="咕噜咕噜～",style:n,className:r=""})=>{const[i,s]=W.useState(t);W.useEffect(()=>{s(t)},[t]),W.useEffect(()=>{if(i){const o=setTimeout(()=>{s(!1)},1e3);return()=>clearTimeout(o)}},[i]);const a=W.useMemo(()=>{switch(e){case"default":return{color:"white",background:"black",icon:null}}},[e]);return w.jsx(SU,{className:`StyleToastContainer fixed radius-6 px-12 py-4 fs-14 ${i?"show":"close"} ${r}`,style:{color:a==null?void 0:a.color,backgroundColor:a==null?void 0:a.background,...n},children:A})},SU=ge.div`
  z-index: var(--zIndex-5);
  left: 50%;
  transform: translateX(-50%);
  transition: opacity var(--transition-2) linear, top var(--transition-2) linear;
  &.show {
    top: 24px;
    opacity: 0.9;
  }
  &.close {
    top: 32px;
    opacity: 0;
  }
`,Ec=[[{id:1,color:"#e9e9e9"},{id:2,color:"#d9d9d9"},{id:3,color:"#c4c4c4"},{id:4,color:"#9d9d9d"}],[{id:5,color:"#7b7b7b"},{id:6,color:"#5c5c5c"},{id:7,color:"#333333"},{id:8,color:"#262626"}],[{id:9,color:"#efccbd"},{id:10,color:"#d39f9d"},{id:11,color:"#c4726d"},{id:12,color:"#ac3526"}],[{id:13,color:"#f6e3bd"},{id:14,color:"#ebbd6f"},{id:15,color:"#df964a"},{id:16,color:"#c76336"}],[{id:17,color:"#fbf2d4"},{id:18,color:"#f7e7ab"},{id:19,color:"#f4db86"},{id:20,color:"#ebbc58"}],[{id:21,color:"#dee9d7"},{id:22,color:"#bdd992"},{id:23,color:"#9dbe56"},{id:24,color:"#758d3a"}],[{id:25,color:"#e7f6fd"},{id:26,color:"#9dd9f8"},{id:27,color:"#81bde5"},{id:28,color:"#4f84eb"}],[{id:29,color:"#cdc7ee"},{id:30,color:"#877cda"},{id:31,color:"#4249ac"},{id:32,color:"#313fa4"}],[{id:33,color:"#f6e6fb"},{id:34,color:"#d69aeb"},{id:35,color:"#b253d3"},{id:36,color:"#8a31c4"}]],Fn=({value:t="#ffffff",size:e=48,showDrop:A=!0,showList:n=!0,showOpacity:r=!0,input:i=!0,pop:s,active:a=!1,onChange:o,children:c,className:l,style:u})=>{const[h,p]=W.useState(!1),[g,m]=W.useState(t?t==="transparent"?"transparent":t:"#ffffff"),[d,f]=W.useState(t.split("#")[1]),[x,v]=W.useState(100),[y,b]=W.useState(0),[E,U]=W.useState(0),[I,C]=W.useState(0),B=W.useCallback((Z,pe=100)=>{if(Z!=="transparent"){const O=fe(Z),{r:Y,g:re,b:Ae}=O.toRgb();return`rgba(${Y}, ${re}, ${Ae}, ${pe/100})`}return Z},[]);W.useEffect(()=>{if(t)if(t==="transparent")m("transparent");else{const{h:Z,s:pe,v:O}=fe(t).toHsv();b(Z),!X&&U(pe),!X&&C(O),m(t),f(t.split("#")[1])}},[t]);const Q=W.useMemo(()=>`#${fe(`hsv(${y},1,1)`).toHex()}`,[y]),R=Z=>{if(Z==="transparent")m("transparent");else{const pe=fe(Z).toHsv();b(pe.h),U(pe.s),C(pe.v)}},[T,D]=W.useState(!1);W.useEffect(()=>{const Z=fe(`hsv(${y},${E},${I})`).toHex();!T&&f(Z),m(`#${Z}`)},[y,E,I]);const N=12,[X,q]=W.useState(!1),k=Z=>{const pe=Z.target.getBoundingClientRect(),O=Z.clientX-pe.left,Y=Z.clientY-pe.top;O>=N/2&&O<=pe.width-N?U((O-N/2)/(pe.width-N)):O<N/2?U(0):U(1),Y>=N/2&&Y<=pe.height-N?C(1-(Y-N/2)/(pe.height-N)):Y<N/2?C(1):C(0),o==null||o(B(g,x))},[j,J]=W.useState(""),ie=Z=>{navigator.clipboard.writeText(Z),J(`已复制～${Z}`)};return w.jsxs(bU,{className:`land-color-picker ${l}`,style:u,color:t,size:typeof e=="string"?e:`${e}px`,children:[w.jsx(Ig,{show:!!j,text:j}),w.jsx("div",{className:"land-color-trigger",onClick:()=>p(!h),children:c||w.jsxs(w.Fragment,{children:[w.jsx("div",{className:`land-color-grid hover-pop ${a?"active":""}`,style:{background:g==="transparent"?"transparent":B(g,x)},children:s&&w.jsx(hr,{content:s,theme:"dark"})}),typeof i=="string"?w.jsxs("div",{className:"land-color-label copy flex items-center justify-center",onClick:()=>ie==null?void 0:ie(t),children:[i,w.jsx(Wy,{size:12,stroke:"var(--color-text-5)"})]}):i?w.jsx(Vi,{prefix:"#",maxLength:6,value:d,w:e,onFocus:()=>D(!0),onChange:Z=>{f(Z),R(`#${Z}`)},onBlur:()=>{o==null||o(B(`#${d}`,x)),D(!1)},wrapStyle:{height:24,fontSize:"12px",border:"none",gap:0,padding:0},style:{fontSize:"10px",textAlign:"center"}}):w.jsxs("p",{className:"land-color-label",children:["#",d]})]})}),A&&w.jsxs(MU,{className:`land-color-drop ${h?"show":""}`,children:[w.jsx(FU,{className:"StyledColorGrid",svColor:Q,onMouseMove:Z=>X&&k(Z),onMouseDown:Z=>{Z.preventDefault(),k(Z),q(!0)},onMouseUp:()=>q(!1),onMouseLeave:()=>q(!1),children:w.jsx("div",{className:"color-thumb",style:{left:N/2+E*(180-N),top:N/2+(86-N)-I*(86-N)}})}),w.jsxs(wt,{gap:8,children:[w.jsx("div",{className:"radius-4 border",style:{width:"40px",aspectRatio:1,flexShrink:0,background:g==="transparent"?"transparent":B(g,x)}}),w.jsxs(wt,{column:!0,gap:8,children:[w.jsx(Tf,{type:"range",max:360,value:y,step:1,currentColor:g,onChange:Z=>b(Number(Z.target.value))}),r&&w.jsx(TU,{children:w.jsx(Tf,{type:"range",step:1,max:100,value:x,className:"opacity",currentColor:Q,onChange:Z=>{v(Z.target.value),o==null||o(B(g,x))}})})]})]}),w.jsxs("div",{className:"flex gap-8",children:[w.jsx(Vi,{className:"flex-2",prefix:"#",maxLength:6,value:d,onFocus:()=>D(!0),onChange:Z=>{f(Z),R(`#${Z}`)},onBlur:()=>{o==null||o(B(`#${d}`,x)),D(!1)}}),r&&w.jsx(Vi,{className:"flex-1",max:100,min:0,value:String(x),onChange:Z=>{v(Number(Z)),o==null||o(B(g,Number(I)))}})]}),n&&w.jsx("div",{className:"width-100 flex",style:{gap:2},children:Ec==null?void 0:Ec.map((Z,pe)=>w.jsx("div",{className:"flex column",style:{gap:2},children:Z.map(O=>w.jsx(QU,{onClick:()=>{const{h:Y,s:re,v:Ae}=fe(O.color).toHsv();U(re),b(Y),C(Ae),o==null||o(B(O.color,x))},style:{"--tacc-color-item-bgColor":O.color}},O.id))},pe))})]})]})},bU=ge.div`
  position: relative;
  width: ${t=>t.size};
  cursor: pointer;
  .land-color-trigger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    .land-color-label {
      font-size: 12px;
      color: var(--color-text-3);
      text-align: center;
      &.copy{
        .IconCopy{
          width: 0;
          overflow: hidden;
          transition: width 0.2s ease;
        }
        &:hover{
          .IconCopy{
            width: 12px;
          }
        }
      }
    }
  }
  .land-color-grid {
    width: 100%;
    aspect-ratio: 1;
    background-color: ${t=>t.color};
    border: 8px solid var(--color-bg-3);
    border-radius: 4px;
    transition: border-color var(--transition-15) linear;
    will-change: border-color;
    &:hover {
      border-color: var(--color-bg-2);
    }
    &:active {
      border-color: var(--color-bg-3);
    }
    &.active {
      outline: 1px solid var(--color-primary-6);
    }
  }
`,MU=ge.div`
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
`,FU=ge.div`
  position: relative;
  width: 100%;
  height: 86px;
  border-radius: 4px;
  background-color: ${t=>t.svColor};
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
`,Tf=ge.input`
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
    background: ${t=>`linear-gradient(to right, rgba(0,0,0,0), ${t.currentColor})`};
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
    background: ${t=>t.currentColor};
    border: 1px solid var(--color-border-1);
    outline: 1px solid var(--color-border-3);
    &:hover {
      cursor: ew-resize;
    }
  }
`,TU=ge.div`
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
`,QU=ge.div`
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
***************************************************************************** */var gl=function(t,e){return gl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,n){A.__proto__=n}||function(A,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(A[r]=n[r])},gl(t,e)};function TA(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");gl(t,e);function A(){this.constructor=t}t.prototype=e===null?Object.create(e):(A.prototype=e.prototype,new A)}var ml=function(){return ml=Object.assign||function(e){for(var A,n=1,r=arguments.length;n<r;n++){A=arguments[n];for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(e[i]=A[i])}return e},ml.apply(this,arguments)};function zt(t,e,A,n){function r(i){return i instanceof A?i:new A(function(s){s(i)})}return new(A||(A=Promise))(function(i,s){function a(l){try{c(n.next(l))}catch(u){s(u)}}function o(l){try{c(n.throw(l))}catch(u){s(u)}}function c(l){l.done?i(l.value):r(l.value).then(a,o)}c((n=n.apply(t,e||[])).next())})}function kt(t,e){var A={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(l){return o([c,l])}}function o(c){if(n)throw new TypeError("Generator is already executing.");for(;A;)try{if(n=1,r&&(i=c[0]&2?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return A.label++,{value:c[1],done:!1};case 5:A.label++,r=c[1],c=[0];continue;case 7:c=A.ops.pop(),A.trys.pop();continue;default:if(i=A.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){A=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){A.label=c[1];break}if(c[0]===6&&A.label<i[1]){A.label=i[1],i=c;break}if(i&&A.label<i[2]){A.label=i[2],A.ops.push(c);break}i[2]&&A.ops.pop(),A.trys.pop();continue}c=e.call(t,A)}catch(l){c=[6,l],r=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function ks(t,e,A){if(A||arguments.length===2)for(var n=0,r=e.length,i;n<r;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||e)}var an=function(){function t(e,A,n,r){this.left=e,this.top=A,this.width=n,this.height=r}return t.prototype.add=function(e,A,n,r){return new t(this.left+e,this.top+A,this.width+n,this.height+r)},t.fromClientRect=function(e,A){return new t(A.left+e.windowBounds.left,A.top+e.windowBounds.top,A.width,A.height)},t.fromDOMRectList=function(e,A){var n=Array.from(A).find(function(r){return r.width!==0});return n?new t(n.left+e.windowBounds.left,n.top+e.windowBounds.top,n.width,n.height):t.EMPTY},t.EMPTY=new t(0,0,0,0),t}(),Bo=function(t,e){return an.fromClientRect(t,e.getBoundingClientRect())},IU=function(t){var e=t.body,A=t.documentElement;if(!e||!A)throw new Error("Unable to get document size");var n=Math.max(Math.max(e.scrollWidth,A.scrollWidth),Math.max(e.offsetWidth,A.offsetWidth),Math.max(e.clientWidth,A.clientWidth)),r=Math.max(Math.max(e.scrollHeight,A.scrollHeight),Math.max(e.offsetHeight,A.offsetHeight),Math.max(e.clientHeight,A.clientHeight));return new an(0,0,n,r)},vo=function(t){for(var e=[],A=0,n=t.length;A<n;){var r=t.charCodeAt(A++);if(r>=55296&&r<=56319&&A<n){var i=t.charCodeAt(A++);(i&64512)===56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),A--)}else e.push(r)}return e},vt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,t);var A=t.length;if(!A)return"";for(var n=[],r=-1,i="";++r<A;){var s=t[r];s<=65535?n.push(s):(s-=65536,n.push((s>>10)+55296,s%1024+56320)),(r+1===A||n.length>16384)&&(i+=String.fromCharCode.apply(String,n),n.length=0)}return i},Qf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",RU=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Gs=0;Gs<Qf.length;Gs++)RU[Qf.charCodeAt(Gs)]=Gs;var If="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ri=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Vs=0;Vs<If.length;Vs++)Ri[If.charCodeAt(Vs)]=Vs;var LU=function(t){var e=t.length*.75,A=t.length,n,r=0,i,s,a,o;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),l=Array.isArray(c)?c:new Uint8Array(c);for(n=0;n<A;n+=4)i=Ri[t.charCodeAt(n)],s=Ri[t.charCodeAt(n+1)],a=Ri[t.charCodeAt(n+2)],o=Ri[t.charCodeAt(n+3)],l[r++]=i<<2|s>>4,l[r++]=(s&15)<<4|a>>2,l[r++]=(a&3)<<6|o&63;return c},DU=function(t){for(var e=t.length,A=[],n=0;n<e;n+=2)A.push(t[n+1]<<8|t[n]);return A},HU=function(t){for(var e=t.length,A=[],n=0;n<e;n+=4)A.push(t[n+3]<<24|t[n+2]<<16|t[n+1]<<8|t[n]);return A},ar=5,uu=11,yc=2,PU=uu-ar,Rg=65536>>ar,NU=1<<ar,Uc=NU-1,OU=1024>>ar,kU=Rg+OU,GU=kU,VU=32,KU=GU+VU,zU=65536>>uu,WU=1<<PU,XU=WU-1,Rf=function(t,e,A){return t.slice?t.slice(e,A):new Uint16Array(Array.prototype.slice.call(t,e,A))},jU=function(t,e,A){return t.slice?t.slice(e,A):new Uint32Array(Array.prototype.slice.call(t,e,A))},YU=function(t,e){var A=LU(t),n=Array.isArray(A)?HU(A):new Uint32Array(A),r=Array.isArray(A)?DU(A):new Uint16Array(A),i=24,s=Rf(r,i/2,n[4]/2),a=n[5]===2?Rf(r,(i+n[4])/2):jU(n,Math.ceil((i+n[4])/4));return new $U(n[0],n[1],n[2],n[3],s,a)},$U=function(){function t(e,A,n,r,i,s){this.initialValue=e,this.errorValue=A,this.highStart=n,this.highValueIndex=r,this.index=i,this.data=s}return t.prototype.get=function(e){var A;if(e>=0){if(e<55296||e>56319&&e<=65535)return A=this.index[e>>ar],A=(A<<yc)+(e&Uc),this.data[A];if(e<=65535)return A=this.index[Rg+(e-55296>>ar)],A=(A<<yc)+(e&Uc),this.data[A];if(e<this.highStart)return A=KU-zU+(e>>uu),A=this.index[A],A+=e>>ar&XU,A=this.index[A],A=(A<<yc)+(e&Uc),this.data[A];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},t}(),Lf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",JU=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ks=0;Ks<Lf.length;Ks++)JU[Lf.charCodeAt(Ks)]=Ks;var qU="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Df=50,ZU=1,Lg=2,Dg=3,eS=4,tS=5,Hf=7,Hg=8,Pf=9,Cn=10,Bl=11,Nf=12,vl=13,AS=14,Li=15,wl=16,zs=17,yi=18,nS=19,Of=20,xl=21,Ui=22,Sc=23,Tr=24,sA=25,Di=26,Hi=27,Qr=28,rS=29,qn=30,iS=31,Ws=32,Xs=33,_l=34,Cl=35,El=36,Zi=37,yl=38,wa=39,xa=40,bc=41,Pg=42,sS=43,aS=[9001,65288],Ng="!",Ve="×",js="÷",Ul=YU(qU),ZA=[qn,El],Sl=[ZU,Lg,Dg,tS],Og=[Cn,Hg],kf=[Hi,Di],oS=Sl.concat(Og),Gf=[yl,wa,xa,_l,Cl],cS=[Li,vl],lS=function(t,e){e===void 0&&(e="strict");var A=[],n=[],r=[];return t.forEach(function(i,s){var a=Ul.get(i);if(a>Df?(r.push(!0),a-=Df):r.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(i)!==-1)return n.push(s),A.push(wl);if(a===eS||a===Bl){if(s===0)return n.push(s),A.push(qn);var o=A[s-1];return oS.indexOf(o)===-1?(n.push(n[s-1]),A.push(o)):(n.push(s),A.push(qn))}if(n.push(s),a===iS)return A.push(e==="strict"?xl:Zi);if(a===Pg||a===rS)return A.push(qn);if(a===sS)return i>=131072&&i<=196605||i>=196608&&i<=262141?A.push(Zi):A.push(qn);A.push(a)}),[n,A,r]},Mc=function(t,e,A,n){var r=n[A];if(Array.isArray(t)?t.indexOf(r)!==-1:t===r)for(var i=A;i<=n.length;){i++;var s=n[i];if(s===e)return!0;if(s!==Cn)break}if(r===Cn)for(var i=A;i>0;){i--;var a=n[i];if(Array.isArray(t)?t.indexOf(a)!==-1:t===a)for(var o=A;o<=n.length;){o++;var s=n[o];if(s===e)return!0;if(s!==Cn)break}if(a!==Cn)break}return!1},Vf=function(t,e){for(var A=t;A>=0;){var n=e[A];if(n===Cn)A--;else return n}return 0},uS=function(t,e,A,n,r){if(A[n]===0)return Ve;var i=n-1;if(Array.isArray(r)&&r[i]===!0)return Ve;var s=i-1,a=i+1,o=e[i],c=s>=0?e[s]:0,l=e[a];if(o===Lg&&l===Dg)return Ve;if(Sl.indexOf(o)!==-1)return Ng;if(Sl.indexOf(l)!==-1||Og.indexOf(l)!==-1)return Ve;if(Vf(i,e)===Hg)return js;if(Ul.get(t[i])===Bl||(o===Ws||o===Xs)&&Ul.get(t[a])===Bl||o===Hf||l===Hf||o===Pf||[Cn,vl,Li].indexOf(o)===-1&&l===Pf||[zs,yi,nS,Tr,Qr].indexOf(l)!==-1||Vf(i,e)===Ui||Mc(Sc,Ui,i,e)||Mc([zs,yi],xl,i,e)||Mc(Nf,Nf,i,e))return Ve;if(o===Cn)return js;if(o===Sc||l===Sc)return Ve;if(l===wl||o===wl)return js;if([vl,Li,xl].indexOf(l)!==-1||o===AS||c===El&&cS.indexOf(o)!==-1||o===Qr&&l===El||l===Of||ZA.indexOf(l)!==-1&&o===sA||ZA.indexOf(o)!==-1&&l===sA||o===Hi&&[Zi,Ws,Xs].indexOf(l)!==-1||[Zi,Ws,Xs].indexOf(o)!==-1&&l===Di||ZA.indexOf(o)!==-1&&kf.indexOf(l)!==-1||kf.indexOf(o)!==-1&&ZA.indexOf(l)!==-1||[Hi,Di].indexOf(o)!==-1&&(l===sA||[Ui,Li].indexOf(l)!==-1&&e[a+1]===sA)||[Ui,Li].indexOf(o)!==-1&&l===sA||o===sA&&[sA,Qr,Tr].indexOf(l)!==-1)return Ve;if([sA,Qr,Tr,zs,yi].indexOf(l)!==-1)for(var u=i;u>=0;){var h=e[u];if(h===sA)return Ve;if([Qr,Tr].indexOf(h)!==-1)u--;else break}if([Hi,Di].indexOf(l)!==-1)for(var u=[zs,yi].indexOf(o)!==-1?s:i;u>=0;){var h=e[u];if(h===sA)return Ve;if([Qr,Tr].indexOf(h)!==-1)u--;else break}if(yl===o&&[yl,wa,_l,Cl].indexOf(l)!==-1||[wa,_l].indexOf(o)!==-1&&[wa,xa].indexOf(l)!==-1||[xa,Cl].indexOf(o)!==-1&&l===xa||Gf.indexOf(o)!==-1&&[Of,Di].indexOf(l)!==-1||Gf.indexOf(l)!==-1&&o===Hi||ZA.indexOf(o)!==-1&&ZA.indexOf(l)!==-1||o===Tr&&ZA.indexOf(l)!==-1||ZA.concat(sA).indexOf(o)!==-1&&l===Ui&&aS.indexOf(t[a])===-1||ZA.concat(sA).indexOf(l)!==-1&&o===yi)return Ve;if(o===bc&&l===bc){for(var p=A[i],g=1;p>0&&(p--,e[p]===bc);)g++;if(g%2!==0)return Ve}return o===Ws&&l===Xs?Ve:js},hS=function(t,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var A=lS(t,e.lineBreak),n=A[0],r=A[1],i=A[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(r=r.map(function(a){return[sA,qn,Pg].indexOf(a)!==-1?Zi:a}));var s=e.wordBreak==="keep-all"?i.map(function(a,o){return a&&t[o]>=19968&&t[o]<=40959}):void 0;return[n,r,s]},fS=function(){function t(e,A,n,r){this.codePoints=e,this.required=A===Ng,this.start=n,this.end=r}return t.prototype.slice=function(){return vt.apply(void 0,this.codePoints.slice(this.start,this.end))},t}(),dS=function(t,e){var A=vo(t),n=hS(A,e),r=n[0],i=n[1],s=n[2],a=A.length,o=0,c=0;return{next:function(){if(c>=a)return{done:!0,value:null};for(var l=Ve;c<a&&(l=uS(A,i,r,++c,s))===Ve;);if(l!==Ve||c===a){var u=new fS(A,l,o,c);return o=c,{value:u,done:!1}}return{done:!0,value:null}}}},pS=1,gS=2,cs=4,Kf=8,Va=10,zf=47,Ki=92,mS=9,BS=32,Ys=34,Si=61,vS=35,wS=36,xS=37,$s=39,Js=40,bi=41,_S=95,Yt=45,CS=33,ES=60,yS=62,US=64,SS=91,bS=93,MS=61,FS=123,qs=63,TS=125,Wf=124,QS=126,IS=128,Xf=65533,Fc=42,Ar=43,RS=44,LS=58,DS=59,es=46,HS=0,PS=8,NS=11,OS=14,kS=31,GS=127,RA=-1,kg=48,Gg=97,Vg=101,VS=102,KS=117,zS=122,Kg=65,zg=69,Wg=70,WS=85,XS=90,Gt=function(t){return t>=kg&&t<=57},jS=function(t){return t>=55296&&t<=57343},Ir=function(t){return Gt(t)||t>=Kg&&t<=Wg||t>=Gg&&t<=VS},YS=function(t){return t>=Gg&&t<=zS},$S=function(t){return t>=Kg&&t<=XS},JS=function(t){return YS(t)||$S(t)},qS=function(t){return t>=IS},Zs=function(t){return t===Va||t===mS||t===BS},Ka=function(t){return JS(t)||qS(t)||t===_S},jf=function(t){return Ka(t)||Gt(t)||t===Yt},ZS=function(t){return t>=HS&&t<=PS||t===NS||t>=OS&&t<=kS||t===GS},vn=function(t,e){return t!==Ki?!1:e!==Va},ea=function(t,e,A){return t===Yt?Ka(e)||vn(e,A):Ka(t)?!0:!!(t===Ki&&vn(t,e))},Tc=function(t,e,A){return t===Ar||t===Yt?Gt(e)?!0:e===es&&Gt(A):Gt(t===es?e:t)},eb=function(t){var e=0,A=1;(t[e]===Ar||t[e]===Yt)&&(t[e]===Yt&&(A=-1),e++);for(var n=[];Gt(t[e]);)n.push(t[e++]);var r=n.length?parseInt(vt.apply(void 0,n),10):0;t[e]===es&&e++;for(var i=[];Gt(t[e]);)i.push(t[e++]);var s=i.length,a=s?parseInt(vt.apply(void 0,i),10):0;(t[e]===zg||t[e]===Vg)&&e++;var o=1;(t[e]===Ar||t[e]===Yt)&&(t[e]===Yt&&(o=-1),e++);for(var c=[];Gt(t[e]);)c.push(t[e++]);var l=c.length?parseInt(vt.apply(void 0,c),10):0;return A*(r+a*Math.pow(10,-s))*Math.pow(10,o*l)},tb={type:2},Ab={type:3},nb={type:4},rb={type:13},ib={type:8},sb={type:21},ab={type:9},ob={type:10},cb={type:11},lb={type:12},ub={type:14},ta={type:23},hb={type:1},fb={type:25},db={type:24},pb={type:26},gb={type:27},mb={type:28},Bb={type:29},vb={type:31},bl={type:32},Xg=function(){function t(){this._value=[]}return t.prototype.write=function(e){this._value=this._value.concat(vo(e))},t.prototype.read=function(){for(var e=[],A=this.consumeToken();A!==bl;)e.push(A),A=this.consumeToken();return e},t.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Ys:return this.consumeStringToken(Ys);case vS:var A=this.peekCodePoint(0),n=this.peekCodePoint(1),r=this.peekCodePoint(2);if(jf(A)||vn(n,r)){var i=ea(A,n,r)?gS:pS,s=this.consumeName();return{type:5,value:s,flags:i}}break;case wS:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),rb;break;case $s:return this.consumeStringToken($s);case Js:return tb;case bi:return Ab;case Fc:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),ub;break;case Ar:if(Tc(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case RS:return nb;case Yt:var a=e,o=this.peekCodePoint(0),c=this.peekCodePoint(1);if(Tc(a,o,c))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(ea(a,o,c))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(o===Yt&&c===yS)return this.consumeCodePoint(),this.consumeCodePoint(),db;break;case es:if(Tc(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case zf:if(this.peekCodePoint(0)===Fc)for(this.consumeCodePoint();;){var l=this.consumeCodePoint();if(l===Fc&&(l=this.consumeCodePoint(),l===zf))return this.consumeToken();if(l===RA)return this.consumeToken()}break;case LS:return pb;case DS:return gb;case ES:if(this.peekCodePoint(0)===CS&&this.peekCodePoint(1)===Yt&&this.peekCodePoint(2)===Yt)return this.consumeCodePoint(),this.consumeCodePoint(),fb;break;case US:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),p=this.peekCodePoint(2);if(ea(u,h,p)){var s=this.consumeName();return{type:7,value:s}}break;case SS:return mb;case Ki:if(vn(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case bS:return Bb;case MS:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),ib;break;case FS:return cb;case TS:return lb;case KS:case WS:var g=this.peekCodePoint(0),m=this.peekCodePoint(1);return g===Ar&&(Ir(m)||m===qs)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case Wf:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),ab;if(this.peekCodePoint(0)===Wf)return this.consumeCodePoint(),sb;break;case QS:if(this.peekCodePoint(0)===Si)return this.consumeCodePoint(),ob;break;case RA:return bl}return Zs(e)?(this.consumeWhiteSpace(),vb):Gt(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):Ka(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:vt(e)}},t.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},t.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},t.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},t.prototype.consumeUnicodeRangeToken=function(){for(var e=[],A=this.consumeCodePoint();Ir(A)&&e.length<6;)e.push(A),A=this.consumeCodePoint();for(var n=!1;A===qs&&e.length<6;)e.push(A),A=this.consumeCodePoint(),n=!0;if(n){var r=parseInt(vt.apply(void 0,e.map(function(o){return o===qs?kg:o})),16),i=parseInt(vt.apply(void 0,e.map(function(o){return o===qs?Wg:o})),16);return{type:30,start:r,end:i}}var s=parseInt(vt.apply(void 0,e),16);if(this.peekCodePoint(0)===Yt&&Ir(this.peekCodePoint(1))){this.consumeCodePoint(),A=this.consumeCodePoint();for(var a=[];Ir(A)&&a.length<6;)a.push(A),A=this.consumeCodePoint();var i=parseInt(vt.apply(void 0,a),16);return{type:30,start:s,end:i}}else return{type:30,start:s,end:s}},t.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Js?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Js?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},t.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===RA)return{type:22,value:""};var A=this.peekCodePoint(0);if(A===$s||A===Ys){var n=this.consumeStringToken(this.consumeCodePoint());return n.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===RA||this.peekCodePoint(0)===bi)?(this.consumeCodePoint(),{type:22,value:n.value}):(this.consumeBadUrlRemnants(),ta)}for(;;){var r=this.consumeCodePoint();if(r===RA||r===bi)return{type:22,value:vt.apply(void 0,e)};if(Zs(r))return this.consumeWhiteSpace(),this.peekCodePoint(0)===RA||this.peekCodePoint(0)===bi?(this.consumeCodePoint(),{type:22,value:vt.apply(void 0,e)}):(this.consumeBadUrlRemnants(),ta);if(r===Ys||r===$s||r===Js||ZS(r))return this.consumeBadUrlRemnants(),ta;if(r===Ki)if(vn(r,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),ta;else e.push(r)}},t.prototype.consumeWhiteSpace=function(){for(;Zs(this.peekCodePoint(0));)this.consumeCodePoint()},t.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===bi||e===RA)return;vn(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},t.prototype.consumeStringSlice=function(e){for(var A=5e4,n="";e>0;){var r=Math.min(A,e);n+=vt.apply(void 0,this._value.splice(0,r)),e-=r}return this._value.shift(),n},t.prototype.consumeStringToken=function(e){var A="",n=0;do{var r=this._value[n];if(r===RA||r===void 0||r===e)return A+=this.consumeStringSlice(n),{type:0,value:A};if(r===Va)return this._value.splice(0,n),hb;if(r===Ki){var i=this._value[n+1];i!==RA&&i!==void 0&&(i===Va?(A+=this.consumeStringSlice(n),n=-1,this._value.shift()):vn(r,i)&&(A+=this.consumeStringSlice(n),A+=vt(this.consumeEscapedCodePoint()),n=-1))}n++}while(!0)},t.prototype.consumeNumber=function(){var e=[],A=cs,n=this.peekCodePoint(0);for((n===Ar||n===Yt)&&e.push(this.consumeCodePoint());Gt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());n=this.peekCodePoint(0);var r=this.peekCodePoint(1);if(n===es&&Gt(r))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),A=Kf;Gt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());n=this.peekCodePoint(0),r=this.peekCodePoint(1);var i=this.peekCodePoint(2);if((n===zg||n===Vg)&&((r===Ar||r===Yt)&&Gt(i)||Gt(r)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),A=Kf;Gt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[eb(e),A]},t.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),A=e[0],n=e[1],r=this.peekCodePoint(0),i=this.peekCodePoint(1),s=this.peekCodePoint(2);if(ea(r,i,s)){var a=this.consumeName();return{type:15,number:A,flags:n,unit:a}}return r===xS?(this.consumeCodePoint(),{type:16,number:A,flags:n}):{type:17,number:A,flags:n}},t.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Ir(e)){for(var A=vt(e);Ir(this.peekCodePoint(0))&&A.length<6;)A+=vt(this.consumeCodePoint());Zs(this.peekCodePoint(0))&&this.consumeCodePoint();var n=parseInt(A,16);return n===0||jS(n)||n>1114111?Xf:n}return e===RA?Xf:e},t.prototype.consumeName=function(){for(var e="";;){var A=this.consumeCodePoint();if(jf(A))e+=vt(A);else if(vn(A,this.peekCodePoint(0)))e+=vt(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(A),e}},t}(),jg=function(){function t(e){this._tokens=e}return t.create=function(e){var A=new Xg;return A.write(e),new t(A.read())},t.parseValue=function(e){return t.create(e).parseComponentValue()},t.parseValues=function(e){return t.create(e).parseComponentValues()},t.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var A=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return A;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},t.prototype.parseComponentValues=function(){for(var e=[];;){var A=this.consumeComponentValue();if(A.type===32)return e;e.push(A),e.push()}},t.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},t.prototype.consumeSimpleBlock=function(e){for(var A={type:e,values:[]},n=this.consumeToken();;){if(n.type===32||xb(n,e))return A;this.reconsumeToken(n),A.values.push(this.consumeComponentValue()),n=this.consumeToken()}},t.prototype.consumeFunction=function(e){for(var A={name:e.value,values:[],type:18};;){var n=this.consumeToken();if(n.type===32||n.type===3)return A;this.reconsumeToken(n),A.values.push(this.consumeComponentValue())}},t.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?bl:e},t.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},t}(),ls=function(t){return t.type===15},gi=function(t){return t.type===17},et=function(t){return t.type===20},wb=function(t){return t.type===0},Ml=function(t,e){return et(t)&&t.value===e},Yg=function(t){return t.type!==31},si=function(t){return t.type!==31&&t.type!==4},KA=function(t){var e=[],A=[];return t.forEach(function(n){if(n.type===4){if(A.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(A),A=[];return}n.type!==31&&A.push(n)}),A.length&&e.push(A),e},xb=function(t,e){return e===11&&t.type===12||e===28&&t.type===29?!0:e===2&&t.type===3},Ln=function(t){return t.type===17||t.type===15},Ct=function(t){return t.type===16||Ln(t)},$g=function(t){return t.length>1?[t[0],t[1]]:[t[0]]},Dt={type:17,number:0,flags:cs},hu={type:16,number:50,flags:cs},En={type:16,number:100,flags:cs},Pi=function(t,e,A){var n=t[0],r=t[1];return[nt(n,e),nt(typeof r<"u"?r:n,A)]},nt=function(t,e){if(t.type===16)return t.number/100*e;if(ls(t))switch(t.unit){case"rem":case"em":return 16*t.number;case"px":default:return t.number}return t.number},Jg="deg",qg="grad",Zg="rad",em="turn",wo={name:"angle",parse:function(t,e){if(e.type===15)switch(e.unit){case Jg:return Math.PI*e.number/180;case qg:return Math.PI/200*e.number;case Zg:return e.number;case em:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},tm=function(t){return t.type===15&&(t.unit===Jg||t.unit===qg||t.unit===Zg||t.unit===em)},Am=function(t){var e=t.filter(et).map(function(A){return A.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Dt,Dt];case"to top":case"bottom":return gA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Dt,En];case"to right":case"left":return gA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[En,En];case"to bottom":case"top":return gA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[En,Dt];case"to left":case"right":return gA(270)}return 0},gA=function(t){return Math.PI*t/180},Tn={name:"color",parse:function(t,e){if(e.type===18){var A=_b[e.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return A(t,e.values)}if(e.type===5){if(e.value.length===3){var n=e.value.substring(0,1),r=e.value.substring(1,2),i=e.value.substring(2,3);return yn(parseInt(n+n,16),parseInt(r+r,16),parseInt(i+i,16),1)}if(e.value.length===4){var n=e.value.substring(0,1),r=e.value.substring(1,2),i=e.value.substring(2,3),s=e.value.substring(3,4);return yn(parseInt(n+n,16),parseInt(r+r,16),parseInt(i+i,16),parseInt(s+s,16)/255)}if(e.value.length===6){var n=e.value.substring(0,2),r=e.value.substring(2,4),i=e.value.substring(4,6);return yn(parseInt(n,16),parseInt(r,16),parseInt(i,16),1)}if(e.value.length===8){var n=e.value.substring(0,2),r=e.value.substring(2,4),i=e.value.substring(4,6),s=e.value.substring(6,8);return yn(parseInt(n,16),parseInt(r,16),parseInt(i,16),parseInt(s,16)/255)}}if(e.type===20){var a=sn[e.value.toUpperCase()];if(typeof a<"u")return a}return sn.TRANSPARENT}},Qn=function(t){return(255&t)===0},Tt=function(t){var e=255&t,A=255&t>>8,n=255&t>>16,r=255&t>>24;return e<255?"rgba("+r+","+n+","+A+","+e/255+")":"rgb("+r+","+n+","+A+")"},yn=function(t,e,A,n){return(t<<24|e<<16|A<<8|Math.round(n*255)<<0)>>>0},Yf=function(t,e){if(t.type===17)return t.number;if(t.type===16){var A=e===3?1:255;return e===3?t.number/100*A:Math.round(t.number/100*A)}return 0},$f=function(t,e){var A=e.filter(si);if(A.length===3){var n=A.map(Yf),r=n[0],i=n[1],s=n[2];return yn(r,i,s,1)}if(A.length===4){var a=A.map(Yf),r=a[0],i=a[1],s=a[2],o=a[3];return yn(r,i,s,o)}return 0};function Qc(t,e,A){return A<0&&(A+=1),A>=1&&(A-=1),A<1/6?(e-t)*A*6+t:A<1/2?e:A<2/3?(e-t)*6*(2/3-A)+t:t}var Jf=function(t,e){var A=e.filter(si),n=A[0],r=A[1],i=A[2],s=A[3],a=(n.type===17?gA(n.number):wo.parse(t,n))/(Math.PI*2),o=Ct(r)?r.number/100:0,c=Ct(i)?i.number/100:0,l=typeof s<"u"&&Ct(s)?nt(s,1):1;if(o===0)return yn(c*255,c*255,c*255,1);var u=c<=.5?c*(o+1):c+o-c*o,h=c*2-u,p=Qc(h,u,a+1/3),g=Qc(h,u,a),m=Qc(h,u,a-1/3);return yn(p*255,g*255,m*255,l)},_b={hsl:Jf,hsla:Jf,rgb:$f,rgba:$f},zi=function(t,e){return Tn.parse(t,jg.create(e).parseComponentValue())},sn={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Cb={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(t,e){return e.map(function(A){if(et(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Eb={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},xo=function(t,e){var A=Tn.parse(t,e[0]),n=e[1];return n&&Ct(n)?{color:A,stop:n}:{color:A,stop:null}},qf=function(t,e){var A=t[0],n=t[t.length-1];A.stop===null&&(A.stop=Dt),n.stop===null&&(n.stop=En);for(var r=[],i=0,s=0;s<t.length;s++){var a=t[s].stop;if(a!==null){var o=nt(a,e);o>i?r.push(o):r.push(i),i=o}else r.push(null)}for(var c=null,s=0;s<r.length;s++){var l=r[s];if(l===null)c===null&&(c=s);else if(c!==null){for(var u=s-c,h=r[c-1],p=(l-h)/(u+1),g=1;g<=u;g++)r[c+g-1]=p*g;c=null}}return t.map(function(m,d){var f=m.color;return{color:f,stop:Math.max(Math.min(1,r[d]/e),0)}})},yb=function(t,e,A){var n=e/2,r=A/2,i=nt(t[0],e)-n,s=r-nt(t[1],A);return(Math.atan2(s,i)+Math.PI*2)%(Math.PI*2)},Ub=function(t,e,A){var n=typeof t=="number"?t:yb(t,e,A),r=Math.abs(e*Math.sin(n))+Math.abs(A*Math.cos(n)),i=e/2,s=A/2,a=r/2,o=Math.sin(n-Math.PI/2)*a,c=Math.cos(n-Math.PI/2)*a;return[r,i-c,i+c,s-o,s+o]},yA=function(t,e){return Math.sqrt(t*t+e*e)},Zf=function(t,e,A,n,r){var i=[[0,0],[0,e],[t,0],[t,e]];return i.reduce(function(s,a){var o=a[0],c=a[1],l=yA(A-o,n-c);return(r?l<s.optimumDistance:l>s.optimumDistance)?{optimumCorner:a,optimumDistance:l}:s},{optimumDistance:r?1/0:-1/0,optimumCorner:null}).optimumCorner},Sb=function(t,e,A,n,r){var i=0,s=0;switch(t.size){case 0:t.shape===0?i=s=Math.min(Math.abs(e),Math.abs(e-n),Math.abs(A),Math.abs(A-r)):t.shape===1&&(i=Math.min(Math.abs(e),Math.abs(e-n)),s=Math.min(Math.abs(A),Math.abs(A-r)));break;case 2:if(t.shape===0)i=s=Math.min(yA(e,A),yA(e,A-r),yA(e-n,A),yA(e-n,A-r));else if(t.shape===1){var a=Math.min(Math.abs(A),Math.abs(A-r))/Math.min(Math.abs(e),Math.abs(e-n)),o=Zf(n,r,e,A,!0),c=o[0],l=o[1];i=yA(c-e,(l-A)/a),s=a*i}break;case 1:t.shape===0?i=s=Math.max(Math.abs(e),Math.abs(e-n),Math.abs(A),Math.abs(A-r)):t.shape===1&&(i=Math.max(Math.abs(e),Math.abs(e-n)),s=Math.max(Math.abs(A),Math.abs(A-r)));break;case 3:if(t.shape===0)i=s=Math.max(yA(e,A),yA(e,A-r),yA(e-n,A),yA(e-n,A-r));else if(t.shape===1){var a=Math.max(Math.abs(A),Math.abs(A-r))/Math.max(Math.abs(e),Math.abs(e-n)),u=Zf(n,r,e,A,!1),c=u[0],l=u[1];i=yA(c-e,(l-A)/a),s=a*i}break}return Array.isArray(t.size)&&(i=nt(t.size[0],n),s=t.size.length===2?nt(t.size[1],r):i),[i,s]},bb=function(t,e){var A=gA(180),n=[];return KA(e).forEach(function(r,i){if(i===0){var s=r[0];if(s.type===20&&s.value==="to"){A=Am(r);return}else if(tm(s)){A=wo.parse(t,s);return}}var a=xo(t,r);n.push(a)}),{angle:A,stops:n,type:1}},Aa=function(t,e){var A=gA(180),n=[];return KA(e).forEach(function(r,i){if(i===0){var s=r[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){A=Am(r);return}else if(tm(s)){A=(wo.parse(t,s)+gA(270))%gA(360);return}}var a=xo(t,r);n.push(a)}),{angle:A,stops:n,type:1}},Mb=function(t,e){var A=gA(180),n=[],r=1,i=0,s=3,a=[];return KA(e).forEach(function(o,c){var l=o[0];if(c===0){if(et(l)&&l.value==="linear"){r=1;return}else if(et(l)&&l.value==="radial"){r=2;return}}if(l.type===18){if(l.name==="from"){var u=Tn.parse(t,l.values[0]);n.push({stop:Dt,color:u})}else if(l.name==="to"){var u=Tn.parse(t,l.values[0]);n.push({stop:En,color:u})}else if(l.name==="color-stop"){var h=l.values.filter(si);if(h.length===2){var u=Tn.parse(t,h[1]),p=h[0];gi(p)&&n.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),r===1?{angle:(A+gA(180))%gA(360),stops:n,type:r}:{size:s,shape:i,stops:n,position:a,type:r}},nm="closest-side",rm="farthest-side",im="closest-corner",sm="farthest-corner",am="circle",om="ellipse",cm="cover",lm="contain",Fb=function(t,e){var A=0,n=3,r=[],i=[];return KA(e).forEach(function(s,a){var o=!0;if(a===0){var c=!1;o=s.reduce(function(u,h){if(c)if(et(h))switch(h.value){case"center":return i.push(hu),u;case"top":case"left":return i.push(Dt),u;case"right":case"bottom":return i.push(En),u}else(Ct(h)||Ln(h))&&i.push(h);else if(et(h))switch(h.value){case am:return A=0,!1;case om:return A=1,!1;case"at":return c=!0,!1;case nm:return n=0,!1;case cm:case rm:return n=1,!1;case lm:case im:return n=2,!1;case sm:return n=3,!1}else if(Ln(h)||Ct(h))return Array.isArray(n)||(n=[]),n.push(h),!1;return u},o)}if(o){var l=xo(t,s);r.push(l)}}),{size:n,shape:A,stops:r,position:i,type:2}},na=function(t,e){var A=0,n=3,r=[],i=[];return KA(e).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(l,u){if(et(u))switch(u.value){case"center":return i.push(hu),!1;case"top":case"left":return i.push(Dt),!1;case"right":case"bottom":return i.push(En),!1}else if(Ct(u)||Ln(u))return i.push(u),!1;return l},o):a===1&&(o=s.reduce(function(l,u){if(et(u))switch(u.value){case am:return A=0,!1;case om:return A=1,!1;case lm:case nm:return n=0,!1;case rm:return n=1,!1;case im:return n=2,!1;case cm:case sm:return n=3,!1}else if(Ln(u)||Ct(u))return Array.isArray(n)||(n=[]),n.push(u),!1;return l},o)),o){var c=xo(t,s);r.push(c)}}),{size:n,shape:A,stops:r,position:i,type:2}},Tb=function(t){return t.type===1},Qb=function(t){return t.type===2},fu={name:"image",parse:function(t,e){if(e.type===22){var A={url:e.value,type:0};return t.cache.addImage(e.value),A}if(e.type===18){var n=um[e.name];if(typeof n>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return n(t,e.values)}throw new Error("Unsupported image type "+e.type)}};function Ib(t){return!(t.type===20&&t.value==="none")&&(t.type!==18||!!um[t.name])}var um={"linear-gradient":bb,"-moz-linear-gradient":Aa,"-ms-linear-gradient":Aa,"-o-linear-gradient":Aa,"-webkit-linear-gradient":Aa,"radial-gradient":Fb,"-moz-radial-gradient":na,"-ms-radial-gradient":na,"-o-radial-gradient":na,"-webkit-radial-gradient":na,"-webkit-gradient":Mb},Rb={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(t,e){if(e.length===0)return[];var A=e[0];return A.type===20&&A.value==="none"?[]:e.filter(function(n){return si(n)&&Ib(n)}).map(function(n){return fu.parse(t,n)})}},Lb={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(t,e){return e.map(function(A){if(et(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Db={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(t,e){return KA(e).map(function(A){return A.filter(Ct)}).map($g)}},Hb={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(t,e){return KA(e).map(function(A){return A.filter(et).map(function(n){return n.value}).join(" ")}).map(Pb)}},Pb=function(t){switch(t){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Yr;(function(t){t.AUTO="auto",t.CONTAIN="contain",t.COVER="cover"})(Yr||(Yr={}));var Nb={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(t,e){return KA(e).map(function(A){return A.filter(Ob)})}},Ob=function(t){return et(t)||Ct(t)},_o=function(t){return{name:"border-"+t+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},kb=_o("top"),Gb=_o("right"),Vb=_o("bottom"),Kb=_o("left"),Co=function(t){return{name:"border-radius-"+t,initialValue:"0 0",prefix:!1,type:1,parse:function(e,A){return $g(A.filter(Ct))}}},zb=Co("top-left"),Wb=Co("top-right"),Xb=Co("bottom-right"),jb=Co("bottom-left"),Eo=function(t){return{name:"border-"+t+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,A){switch(A){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},Yb=Eo("top"),$b=Eo("right"),Jb=Eo("bottom"),qb=Eo("left"),yo=function(t){return{name:"border-"+t+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,A){return ls(A)?A.number:0}}},Zb=yo("top"),e1=yo("right"),t1=yo("bottom"),A1=yo("left"),n1={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},r1={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(t,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},i1={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(t,e){return e.filter(et).reduce(function(A,n){return A|s1(n.value)},0)}},s1=function(t){switch(t){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},a1={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(t,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},o1={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(t,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},za;(function(t){t.NORMAL="normal",t.STRICT="strict"})(za||(za={}));var c1={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(t,e){switch(e){case"strict":return za.STRICT;case"normal":default:return za.NORMAL}}},l1={name:"line-height",initialValue:"normal",prefix:!1,type:4},ed=function(t,e){return et(t)&&t.value==="normal"?1.2*e:t.type===17?e*t.number:Ct(t)?nt(t,e):e},u1={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(t,e){return e.type===20&&e.value==="none"?null:fu.parse(t,e)}},h1={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(t,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},Fl={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(t,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Uo=function(t){return{name:"margin-"+t,initialValue:"0",prefix:!1,type:4}},f1=Uo("top"),d1=Uo("right"),p1=Uo("bottom"),g1=Uo("left"),m1={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(t,e){return e.filter(et).map(function(A){switch(A.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},B1={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(t,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},So=function(t){return{name:"padding-"+t,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},v1=So("top"),w1=So("right"),x1=So("bottom"),_1=So("left"),C1={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(t,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},E1={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(t,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},y1={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(t,e){return e.length===1&&Ml(e[0],"none")?[]:KA(e).map(function(A){for(var n={color:sn.TRANSPARENT,offsetX:Dt,offsetY:Dt,blur:Dt},r=0,i=0;i<A.length;i++){var s=A[i];Ln(s)?(r===0?n.offsetX=s:r===1?n.offsetY=s:n.blur=s,r++):n.color=Tn.parse(t,s)}return n})}},U1={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(t,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},S1={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(t,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var A=F1[e.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return A(e.values)}return null}},b1=function(t){var e=t.filter(function(A){return A.type===17}).map(function(A){return A.number});return e.length===6?e:null},M1=function(t){var e=t.filter(function(o){return o.type===17}).map(function(o){return o.number}),A=e[0],n=e[1];e[2],e[3];var r=e[4],i=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],a=e[13];return e[14],e[15],e.length===16?[A,n,r,i,s,a]:null},F1={matrix:b1,matrix3d:M1},td={type:16,number:50,flags:cs},T1=[td,td],Q1={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(t,e){var A=e.filter(Ct);return A.length!==2?T1:[A[0],A[1]]}},I1={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(t,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Wi;(function(t){t.NORMAL="normal",t.BREAK_ALL="break-all",t.KEEP_ALL="keep-all"})(Wi||(Wi={}));var R1={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(t,e){switch(e){case"break-all":return Wi.BREAK_ALL;case"keep-all":return Wi.KEEP_ALL;case"normal":default:return Wi.NORMAL}}},L1={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(t,e){if(e.type===20)return{auto:!0,order:0};if(gi(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},hm={name:"time",parse:function(t,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},D1={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(t,e){return gi(e)?e.number:1}},H1={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},P1={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(t,e){return e.filter(et).map(function(A){switch(A.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(A){return A!==0})}},N1={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(t,e){var A=[],n=[];return e.forEach(function(r){switch(r.type){case 20:case 0:A.push(r.value);break;case 17:A.push(r.number.toString());break;case 4:n.push(A.join(" ")),A.length=0;break}}),A.length&&n.push(A.join(" ")),n.map(function(r){return r.indexOf(" ")===-1?r:"'"+r+"'"})}},O1={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},k1={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(t,e){if(gi(e))return e.number;if(et(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},G1={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(t,e){return e.filter(et).map(function(A){return A.value})}},V1={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(t,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},Ut=function(t,e){return(t&e)!==0},K1={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(t,e){if(e.length===0)return[];var A=e[0];return A.type===20&&A.value==="none"?[]:e}},z1={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(t,e){if(e.length===0)return null;var A=e[0];if(A.type===20&&A.value==="none")return null;for(var n=[],r=e.filter(Yg),i=0;i<r.length;i++){var s=r[i],a=r[i+1];if(s.type===20){var o=a&&gi(a)?a.number:1;n.push({counter:s.value,increment:o})}}return n}},W1={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(t,e){if(e.length===0)return[];for(var A=[],n=e.filter(Yg),r=0;r<n.length;r++){var i=n[r],s=n[r+1];if(et(i)&&i.value!=="none"){var a=s&&gi(s)?s.number:0;A.push({counter:i.value,reset:a})}}return A}},X1={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(t,e){return e.filter(ls).map(function(A){return hm.parse(t,A)})}},j1={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(t,e){if(e.length===0)return null;var A=e[0];if(A.type===20&&A.value==="none")return null;var n=[],r=e.filter(wb);if(r.length%2!==0)return null;for(var i=0;i<r.length;i+=2){var s=r[i].value,a=r[i+1].value;n.push({open:s,close:a})}return n}},Ad=function(t,e,A){if(!t)return"";var n=t[Math.min(e,t.length-1)];return n?A?n.open:n.close:""},Y1={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(t,e){return e.length===1&&Ml(e[0],"none")?[]:KA(e).map(function(A){for(var n={color:255,offsetX:Dt,offsetY:Dt,blur:Dt,spread:Dt,inset:!1},r=0,i=0;i<A.length;i++){var s=A[i];Ml(s,"inset")?n.inset=!0:Ln(s)?(r===0?n.offsetX=s:r===1?n.offsetY=s:r===2?n.blur=s:n.spread=s,r++):n.color=Tn.parse(t,s)}return n})}},$1={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(t,e){var A=[0,1,2],n=[];return e.filter(et).forEach(function(r){switch(r.value){case"stroke":n.push(1);break;case"fill":n.push(0);break;case"markers":n.push(2);break}}),A.forEach(function(r){n.indexOf(r)===-1&&n.push(r)}),n}},J1={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},q1={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(t,e){return ls(e)?e.number:0}},Z1=function(){function t(e,A){var n,r;this.animationDuration=he(e,X1,A.animationDuration),this.backgroundClip=he(e,Cb,A.backgroundClip),this.backgroundColor=he(e,Eb,A.backgroundColor),this.backgroundImage=he(e,Rb,A.backgroundImage),this.backgroundOrigin=he(e,Lb,A.backgroundOrigin),this.backgroundPosition=he(e,Db,A.backgroundPosition),this.backgroundRepeat=he(e,Hb,A.backgroundRepeat),this.backgroundSize=he(e,Nb,A.backgroundSize),this.borderTopColor=he(e,kb,A.borderTopColor),this.borderRightColor=he(e,Gb,A.borderRightColor),this.borderBottomColor=he(e,Vb,A.borderBottomColor),this.borderLeftColor=he(e,Kb,A.borderLeftColor),this.borderTopLeftRadius=he(e,zb,A.borderTopLeftRadius),this.borderTopRightRadius=he(e,Wb,A.borderTopRightRadius),this.borderBottomRightRadius=he(e,Xb,A.borderBottomRightRadius),this.borderBottomLeftRadius=he(e,jb,A.borderBottomLeftRadius),this.borderTopStyle=he(e,Yb,A.borderTopStyle),this.borderRightStyle=he(e,$b,A.borderRightStyle),this.borderBottomStyle=he(e,Jb,A.borderBottomStyle),this.borderLeftStyle=he(e,qb,A.borderLeftStyle),this.borderTopWidth=he(e,Zb,A.borderTopWidth),this.borderRightWidth=he(e,e1,A.borderRightWidth),this.borderBottomWidth=he(e,t1,A.borderBottomWidth),this.borderLeftWidth=he(e,A1,A.borderLeftWidth),this.boxShadow=he(e,Y1,A.boxShadow),this.color=he(e,n1,A.color),this.direction=he(e,r1,A.direction),this.display=he(e,i1,A.display),this.float=he(e,a1,A.cssFloat),this.fontFamily=he(e,N1,A.fontFamily),this.fontSize=he(e,O1,A.fontSize),this.fontStyle=he(e,V1,A.fontStyle),this.fontVariant=he(e,G1,A.fontVariant),this.fontWeight=he(e,k1,A.fontWeight),this.letterSpacing=he(e,o1,A.letterSpacing),this.lineBreak=he(e,c1,A.lineBreak),this.lineHeight=he(e,l1,A.lineHeight),this.listStyleImage=he(e,u1,A.listStyleImage),this.listStylePosition=he(e,h1,A.listStylePosition),this.listStyleType=he(e,Fl,A.listStyleType),this.marginTop=he(e,f1,A.marginTop),this.marginRight=he(e,d1,A.marginRight),this.marginBottom=he(e,p1,A.marginBottom),this.marginLeft=he(e,g1,A.marginLeft),this.opacity=he(e,D1,A.opacity);var i=he(e,m1,A.overflow);this.overflowX=i[0],this.overflowY=i[i.length>1?1:0],this.overflowWrap=he(e,B1,A.overflowWrap),this.paddingTop=he(e,v1,A.paddingTop),this.paddingRight=he(e,w1,A.paddingRight),this.paddingBottom=he(e,x1,A.paddingBottom),this.paddingLeft=he(e,_1,A.paddingLeft),this.paintOrder=he(e,$1,A.paintOrder),this.position=he(e,E1,A.position),this.textAlign=he(e,C1,A.textAlign),this.textDecorationColor=he(e,H1,(n=A.textDecorationColor)!==null&&n!==void 0?n:A.color),this.textDecorationLine=he(e,P1,(r=A.textDecorationLine)!==null&&r!==void 0?r:A.textDecoration),this.textShadow=he(e,y1,A.textShadow),this.textTransform=he(e,U1,A.textTransform),this.transform=he(e,S1,A.transform),this.transformOrigin=he(e,Q1,A.transformOrigin),this.visibility=he(e,I1,A.visibility),this.webkitTextStrokeColor=he(e,J1,A.webkitTextStrokeColor),this.webkitTextStrokeWidth=he(e,q1,A.webkitTextStrokeWidth),this.wordBreak=he(e,R1,A.wordBreak),this.zIndex=he(e,L1,A.zIndex)}return t.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},t.prototype.isTransparent=function(){return Qn(this.backgroundColor)},t.prototype.isTransformed=function(){return this.transform!==null},t.prototype.isPositioned=function(){return this.position!==0},t.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},t.prototype.isFloating=function(){return this.float!==0},t.prototype.isInlineLevel=function(){return Ut(this.display,4)||Ut(this.display,33554432)||Ut(this.display,268435456)||Ut(this.display,536870912)||Ut(this.display,67108864)||Ut(this.display,134217728)},t}(),eM=function(){function t(e,A){this.content=he(e,K1,A.content),this.quotes=he(e,j1,A.quotes)}return t}(),nd=function(){function t(e,A){this.counterIncrement=he(e,z1,A.counterIncrement),this.counterReset=he(e,W1,A.counterReset)}return t}(),he=function(t,e,A){var n=new Xg,r=A!==null&&typeof A<"u"?A.toString():e.initialValue;n.write(r);var i=new jg(n.read());switch(e.type){case 2:var s=i.parseComponentValue();return e.parse(t,et(s)?s.value:e.initialValue);case 0:return e.parse(t,i.parseComponentValue());case 1:return e.parse(t,i.parseComponentValues());case 4:return i.parseComponentValue();case 3:switch(e.format){case"angle":return wo.parse(t,i.parseComponentValue());case"color":return Tn.parse(t,i.parseComponentValue());case"image":return fu.parse(t,i.parseComponentValue());case"length":var a=i.parseComponentValue();return Ln(a)?a:Dt;case"length-percentage":var o=i.parseComponentValue();return Ct(o)?o:Dt;case"time":return hm.parse(t,i.parseComponentValue())}break}},tM="data-html2canvas-debug",AM=function(t){var e=t.getAttribute(tM);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Tl=function(t,e){var A=AM(t);return A===1||e===A},zA=function(){function t(e,A){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Tl(A,3))debugger;this.styles=new Z1(e,window.getComputedStyle(A,null)),Rl(A)&&(this.styles.animationDuration.some(function(n){return n>0})&&(A.style.animationDuration="0s"),this.styles.transform!==null&&(A.style.transform="none")),this.bounds=Bo(this.context,A),Tl(A,4)&&(this.flags|=16)}return t}(),nM="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",rd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ni=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ra=0;ra<rd.length;ra++)Ni[rd.charCodeAt(ra)]=ra;var rM=function(t){var e=t.length*.75,A=t.length,n,r=0,i,s,a,o;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),l=Array.isArray(c)?c:new Uint8Array(c);for(n=0;n<A;n+=4)i=Ni[t.charCodeAt(n)],s=Ni[t.charCodeAt(n+1)],a=Ni[t.charCodeAt(n+2)],o=Ni[t.charCodeAt(n+3)],l[r++]=i<<2|s>>4,l[r++]=(s&15)<<4|a>>2,l[r++]=(a&3)<<6|o&63;return c},iM=function(t){for(var e=t.length,A=[],n=0;n<e;n+=2)A.push(t[n+1]<<8|t[n]);return A},sM=function(t){for(var e=t.length,A=[],n=0;n<e;n+=4)A.push(t[n+3]<<24|t[n+2]<<16|t[n+1]<<8|t[n]);return A},or=5,du=11,Ic=2,aM=du-or,fm=65536>>or,oM=1<<or,Rc=oM-1,cM=1024>>or,lM=fm+cM,uM=lM,hM=32,fM=uM+hM,dM=65536>>du,pM=1<<aM,gM=pM-1,id=function(t,e,A){return t.slice?t.slice(e,A):new Uint16Array(Array.prototype.slice.call(t,e,A))},mM=function(t,e,A){return t.slice?t.slice(e,A):new Uint32Array(Array.prototype.slice.call(t,e,A))},BM=function(t,e){var A=rM(t),n=Array.isArray(A)?sM(A):new Uint32Array(A),r=Array.isArray(A)?iM(A):new Uint16Array(A),i=24,s=id(r,i/2,n[4]/2),a=n[5]===2?id(r,(i+n[4])/2):mM(n,Math.ceil((i+n[4])/4));return new vM(n[0],n[1],n[2],n[3],s,a)},vM=function(){function t(e,A,n,r,i,s){this.initialValue=e,this.errorValue=A,this.highStart=n,this.highValueIndex=r,this.index=i,this.data=s}return t.prototype.get=function(e){var A;if(e>=0){if(e<55296||e>56319&&e<=65535)return A=this.index[e>>or],A=(A<<Ic)+(e&Rc),this.data[A];if(e<=65535)return A=this.index[fm+(e-55296>>or)],A=(A<<Ic)+(e&Rc),this.data[A];if(e<this.highStart)return A=fM-dM+(e>>du),A=this.index[A],A+=e>>or&gM,A=this.index[A],A=(A<<Ic)+(e&Rc),this.data[A];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},t}(),sd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wM=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ia=0;ia<sd.length;ia++)wM[sd.charCodeAt(ia)]=ia;var xM=1,Lc=2,Dc=3,ad=4,od=5,_M=7,cd=8,Hc=9,Pc=10,ld=11,ud=12,hd=13,fd=14,Nc=15,CM=function(t){for(var e=[],A=0,n=t.length;A<n;){var r=t.charCodeAt(A++);if(r>=55296&&r<=56319&&A<n){var i=t.charCodeAt(A++);(i&64512)===56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),A--)}else e.push(r)}return e},EM=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,t);var A=t.length;if(!A)return"";for(var n=[],r=-1,i="";++r<A;){var s=t[r];s<=65535?n.push(s):(s-=65536,n.push((s>>10)+55296,s%1024+56320)),(r+1===A||n.length>16384)&&(i+=String.fromCharCode.apply(String,n),n.length=0)}return i},yM=BM(nM),fA="×",Oc="÷",UM=function(t){return yM.get(t)},SM=function(t,e,A){var n=A-2,r=e[n],i=e[A-1],s=e[A];if(i===Lc&&s===Dc)return fA;if(i===Lc||i===Dc||i===ad||s===Lc||s===Dc||s===ad)return Oc;if(i===cd&&[cd,Hc,ld,ud].indexOf(s)!==-1||(i===ld||i===Hc)&&(s===Hc||s===Pc)||(i===ud||i===Pc)&&s===Pc||s===hd||s===od||s===_M||i===xM)return fA;if(i===hd&&s===fd){for(;r===od;)r=e[--n];if(r===fd)return fA}if(i===Nc&&s===Nc){for(var a=0;r===Nc;)a++,r=e[--n];if(a%2===0)return fA}return Oc},bM=function(t){var e=CM(t),A=e.length,n=0,r=0,i=e.map(UM);return{next:function(){if(n>=A)return{done:!0,value:null};for(var s=fA;n<A&&(s=SM(e,i,++n))===fA;);if(s!==fA||n===A){var a=EM.apply(null,e.slice(r,n));return r=n,{value:a,done:!1}}return{done:!0,value:null}}}},MM=function(t){for(var e=bM(t),A=[],n;!(n=e.next()).done;)n.value&&A.push(n.value.slice());return A},FM=function(t){var e=123;if(t.createRange){var A=t.createRange();if(A.getBoundingClientRect){var n=t.createElement("boundtest");n.style.height=e+"px",n.style.display="block",t.body.appendChild(n),A.selectNode(n);var r=A.getBoundingClientRect(),i=Math.round(r.height);if(t.body.removeChild(n),i===e)return!0}}return!1},TM=function(t){var e=t.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",t.body.appendChild(e);var A=t.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var n=e.firstChild,r=vo(n.data).map(function(o){return vt(o)}),i=0,s={},a=r.every(function(o,c){A.setStart(n,i),A.setEnd(n,i+o.length);var l=A.getBoundingClientRect();i+=o.length;var u=l.x>s.x||l.y>s.y;return s=l,c===0?!0:u});return t.body.removeChild(e),a},QM=function(){return typeof new Image().crossOrigin<"u"},IM=function(){return typeof new XMLHttpRequest().responseType=="string"},RM=function(t){var e=new Image,A=t.createElement("canvas"),n=A.getContext("2d");if(!n)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{n.drawImage(e,0,0),A.toDataURL()}catch{return!1}return!0},dd=function(t){return t[0]===0&&t[1]===255&&t[2]===0&&t[3]===255},LM=function(t){var e=t.createElement("canvas"),A=100;e.width=A,e.height=A;var n=e.getContext("2d");if(!n)return Promise.reject(!1);n.fillStyle="rgb(0, 255, 0)",n.fillRect(0,0,A,A);var r=new Image,i=e.toDataURL();r.src=i;var s=Ql(A,A,0,0,r);return n.fillStyle="red",n.fillRect(0,0,A,A),pd(s).then(function(a){n.drawImage(a,0,0);var o=n.getImageData(0,0,A,A).data;n.fillStyle="red",n.fillRect(0,0,A,A);var c=t.createElement("div");return c.style.backgroundImage="url("+i+")",c.style.height=A+"px",dd(o)?pd(Ql(A,A,0,0,c)):Promise.reject(!1)}).then(function(a){return n.drawImage(a,0,0),dd(n.getImageData(0,0,A,A).data)}).catch(function(){return!1})},Ql=function(t,e,A,n,r){var i="http://www.w3.org/2000/svg",s=document.createElementNS(i,"svg"),a=document.createElementNS(i,"foreignObject");return s.setAttributeNS(null,"width",t.toString()),s.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",A.toString()),a.setAttributeNS(null,"y",n.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(r),s},pd=function(t){return new Promise(function(e,A){var n=new Image;n.onload=function(){return e(n)},n.onerror=A,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(t))})},Lt={get SUPPORT_RANGE_BOUNDS(){var t=FM(document);return Object.defineProperty(Lt,"SUPPORT_RANGE_BOUNDS",{value:t}),t},get SUPPORT_WORD_BREAKING(){var t=Lt.SUPPORT_RANGE_BOUNDS&&TM(document);return Object.defineProperty(Lt,"SUPPORT_WORD_BREAKING",{value:t}),t},get SUPPORT_SVG_DRAWING(){var t=RM(document);return Object.defineProperty(Lt,"SUPPORT_SVG_DRAWING",{value:t}),t},get SUPPORT_FOREIGNOBJECT_DRAWING(){var t=typeof Array.from=="function"&&typeof window.fetch=="function"?LM(document):Promise.resolve(!1);return Object.defineProperty(Lt,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:t}),t},get SUPPORT_CORS_IMAGES(){var t=QM();return Object.defineProperty(Lt,"SUPPORT_CORS_IMAGES",{value:t}),t},get SUPPORT_RESPONSE_TYPE(){var t=IM();return Object.defineProperty(Lt,"SUPPORT_RESPONSE_TYPE",{value:t}),t},get SUPPORT_CORS_XHR(){var t="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Lt,"SUPPORT_CORS_XHR",{value:t}),t},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var t=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Lt,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:t}),t}},Xi=function(){function t(e,A){this.text=e,this.bounds=A}return t}(),DM=function(t,e,A,n){var r=NM(e,A),i=[],s=0;return r.forEach(function(a){if(A.textDecorationLine.length||a.trim().length>0)if(Lt.SUPPORT_RANGE_BOUNDS){var o=gd(n,s,a.length).getClientRects();if(o.length>1){var c=pu(a),l=0;c.forEach(function(h){i.push(new Xi(h,an.fromDOMRectList(t,gd(n,l+s,h.length).getClientRects()))),l+=h.length})}else i.push(new Xi(a,an.fromDOMRectList(t,o)))}else{var u=n.splitText(a.length);i.push(new Xi(a,HM(t,n))),n=u}else Lt.SUPPORT_RANGE_BOUNDS||(n=n.splitText(a.length));s+=a.length}),i},HM=function(t,e){var A=e.ownerDocument;if(A){var n=A.createElement("html2canvaswrapper");n.appendChild(e.cloneNode(!0));var r=e.parentNode;if(r){r.replaceChild(n,e);var i=Bo(t,n);return n.firstChild&&r.replaceChild(n.firstChild,n),i}}return an.EMPTY},gd=function(t,e,A){var n=t.ownerDocument;if(!n)throw new Error("Node has no owner document");var r=n.createRange();return r.setStart(t,e),r.setEnd(t,e+A),r},pu=function(t){if(Lt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(t)).map(function(A){return A.segment})}return MM(t)},PM=function(t,e){if(Lt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var A=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(A.segment(t)).map(function(n){return n.segment})}return kM(t,e)},NM=function(t,e){return e.letterSpacing!==0?pu(t):PM(t,e)},OM=[32,160,4961,65792,65793,4153,4241],kM=function(t,e){for(var A=dS(t,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),n=[],r,i=function(){if(r.value){var s=r.value.slice(),a=vo(s),o="";a.forEach(function(c){OM.indexOf(c)===-1?o+=vt(c):(o.length&&n.push(o),n.push(vt(c)),o="")}),o.length&&n.push(o)}};!(r=A.next()).done;)i();return n},GM=function(){function t(e,A,n){this.text=VM(A.data,n.textTransform),this.textBounds=DM(e,this.text,n,A)}return t}(),VM=function(t,e){switch(e){case 1:return t.toLowerCase();case 3:return t.replace(KM,zM);case 2:return t.toUpperCase();default:return t}},KM=/(^|\s|:|-|\(|\))([a-z])/g,zM=function(t,e,A){return t.length>0?e+A.toUpperCase():t},dm=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this;return r.src=n.currentSrc||n.src,r.intrinsicWidth=n.naturalWidth,r.intrinsicHeight=n.naturalHeight,r.context.cache.addImage(r.src),r}return e}(zA),pm=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this;return r.canvas=n,r.intrinsicWidth=n.width,r.intrinsicHeight=n.height,r}return e}(zA),gm=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this,i=new XMLSerializer,s=Bo(A,n);return n.setAttribute("width",s.width+"px"),n.setAttribute("height",s.height+"px"),r.svg="data:image/svg+xml,"+encodeURIComponent(i.serializeToString(n)),r.intrinsicWidth=n.width.baseVal.value,r.intrinsicHeight=n.height.baseVal.value,r.context.cache.addImage(r.svg),r}return e}(zA),mm=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this;return r.value=n.value,r}return e}(zA),Il=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this;return r.start=n.start,r.reversed=typeof n.reversed=="boolean"&&n.reversed===!0,r}return e}(zA),WM=[{type:15,flags:0,unit:"px",number:3}],XM=[{type:16,flags:0,number:50}],jM=function(t){return t.width>t.height?new an(t.left+(t.width-t.height)/2,t.top,t.height,t.height):t.width<t.height?new an(t.left,t.top+(t.height-t.width)/2,t.width,t.width):t},YM=function(t){var e=t.type===$M?new Array(t.value.length+1).join("•"):t.value;return e.length===0?t.placeholder||"":e},Wa="checkbox",Xa="radio",$M="password",md=707406591,gu=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this;switch(r.type=n.type.toLowerCase(),r.checked=n.checked,r.value=YM(n),(r.type===Wa||r.type===Xa)&&(r.styles.backgroundColor=3739148031,r.styles.borderTopColor=r.styles.borderRightColor=r.styles.borderBottomColor=r.styles.borderLeftColor=2779096575,r.styles.borderTopWidth=r.styles.borderRightWidth=r.styles.borderBottomWidth=r.styles.borderLeftWidth=1,r.styles.borderTopStyle=r.styles.borderRightStyle=r.styles.borderBottomStyle=r.styles.borderLeftStyle=1,r.styles.backgroundClip=[0],r.styles.backgroundOrigin=[0],r.bounds=jM(r.bounds)),r.type){case Wa:r.styles.borderTopRightRadius=r.styles.borderTopLeftRadius=r.styles.borderBottomRightRadius=r.styles.borderBottomLeftRadius=WM;break;case Xa:r.styles.borderTopRightRadius=r.styles.borderTopLeftRadius=r.styles.borderBottomRightRadius=r.styles.borderBottomLeftRadius=XM;break}return r}return e}(zA),Bm=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this,i=n.options[n.selectedIndex||0];return r.value=i&&i.text||"",r}return e}(zA),vm=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this;return r.value=n.value,r}return e}(zA),wm=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this;r.src=n.src,r.width=parseInt(n.width,10)||0,r.height=parseInt(n.height,10)||0,r.backgroundColor=r.styles.backgroundColor;try{if(n.contentWindow&&n.contentWindow.document&&n.contentWindow.document.documentElement){r.tree=_m(A,n.contentWindow.document.documentElement);var i=n.contentWindow.document.documentElement?zi(A,getComputedStyle(n.contentWindow.document.documentElement).backgroundColor):sn.TRANSPARENT,s=n.contentWindow.document.body?zi(A,getComputedStyle(n.contentWindow.document.body).backgroundColor):sn.TRANSPARENT;r.backgroundColor=Qn(i)?Qn(s)?r.styles.backgroundColor:s:i}}catch{}return r}return e}(zA),JM=["OL","UL","MENU"],_a=function(t,e,A,n){for(var r=e.firstChild,i=void 0;r;r=i)if(i=r.nextSibling,Cm(r)&&r.data.trim().length>0)A.textNodes.push(new GM(t,r,A.styles));else if(Vr(r))if(Sm(r)&&r.assignedNodes)r.assignedNodes().forEach(function(a){return _a(t,a,A,n)});else{var s=xm(t,r);s.styles.isVisible()&&(qM(r,s,n)?s.flags|=4:ZM(s.styles)&&(s.flags|=2),JM.indexOf(r.tagName)!==-1&&(s.flags|=8),A.elements.push(s),r.slot,r.shadowRoot?_a(t,r.shadowRoot,s,n):!ja(r)&&!Em(r)&&!Ya(r)&&_a(t,r,s,n))}},xm=function(t,e){return Ll(e)?new dm(t,e):ym(e)?new pm(t,e):Em(e)?new gm(t,e):eF(e)?new mm(t,e):tF(e)?new Il(t,e):AF(e)?new gu(t,e):Ya(e)?new Bm(t,e):ja(e)?new vm(t,e):Um(e)?new wm(t,e):new zA(t,e)},_m=function(t,e){var A=xm(t,e);return A.flags|=4,_a(t,e,A,A),A},qM=function(t,e,A){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||mu(t)&&A.styles.isTransparent()},ZM=function(t){return t.isPositioned()||t.isFloating()},Cm=function(t){return t.nodeType===Node.TEXT_NODE},Vr=function(t){return t.nodeType===Node.ELEMENT_NODE},Rl=function(t){return Vr(t)&&typeof t.style<"u"&&!Ca(t)},Ca=function(t){return typeof t.className=="object"},eF=function(t){return t.tagName==="LI"},tF=function(t){return t.tagName==="OL"},AF=function(t){return t.tagName==="INPUT"},nF=function(t){return t.tagName==="HTML"},Em=function(t){return t.tagName==="svg"},mu=function(t){return t.tagName==="BODY"},ym=function(t){return t.tagName==="CANVAS"},Bd=function(t){return t.tagName==="VIDEO"},Ll=function(t){return t.tagName==="IMG"},Um=function(t){return t.tagName==="IFRAME"},vd=function(t){return t.tagName==="STYLE"},rF=function(t){return t.tagName==="SCRIPT"},ja=function(t){return t.tagName==="TEXTAREA"},Ya=function(t){return t.tagName==="SELECT"},Sm=function(t){return t.tagName==="SLOT"},wd=function(t){return t.tagName.indexOf("-")>0},iF=function(){function t(){this.counters={}}return t.prototype.getCounterValue=function(e){var A=this.counters[e];return A&&A.length?A[A.length-1]:1},t.prototype.getCounterValues=function(e){var A=this.counters[e];return A||[]},t.prototype.pop=function(e){var A=this;e.forEach(function(n){return A.counters[n].pop()})},t.prototype.parse=function(e){var A=this,n=e.counterIncrement,r=e.counterReset,i=!0;n!==null&&n.forEach(function(a){var o=A.counters[a.counter];o&&a.increment!==0&&(i=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return i&&r.forEach(function(a){var o=A.counters[a.counter];s.push(a.counter),o||(o=A.counters[a.counter]=[]),o.push(a.reset)}),s},t}(),xd={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},_d={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},sF={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},aF={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Rr=function(t,e,A,n,r,i){return t<e||t>A?ts(t,r,i.length>0):n.integers.reduce(function(s,a,o){for(;t>=a;)t-=a,s+=n.values[o];return s},"")+i},bm=function(t,e,A,n){var r="";do A||t--,r=n(t)+r,t/=e;while(t*e>=e);return r},Bt=function(t,e,A,n,r){var i=A-e+1;return(t<0?"-":"")+(bm(Math.abs(t),i,n,function(s){return vt(Math.floor(s%i)+e)})+r)},Wn=function(t,e,A){A===void 0&&(A=". ");var n=e.length;return bm(Math.abs(t),n,!1,function(r){return e[Math.floor(r%n)]})+A},Nr=1,gn=2,mn=4,Oi=8,en=function(t,e,A,n,r,i){if(t<-9999||t>9999)return ts(t,4,r.length>0);var s=Math.abs(t),a=r;if(s===0)return e[0]+a;for(var o=0;s>0&&o<=4;o++){var c=s%10;c===0&&Ut(i,Nr)&&a!==""?a=e[c]+a:c>1||c===1&&o===0||c===1&&o===1&&Ut(i,gn)||c===1&&o===1&&Ut(i,mn)&&t>100||c===1&&o>1&&Ut(i,Oi)?a=e[c]+(o>0?A[o-1]:"")+a:c===1&&o>0&&(a=A[o-1]+a),s=Math.floor(s/10)}return(t<0?n:"")+a},Cd="十百千萬",Ed="拾佰仟萬",yd="マイナス",kc="마이너스",ts=function(t,e,A){var n=A?". ":"",r=A?"、":"",i=A?", ":"",s=A?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=Bt(t,48,57,!0,n);return a.length<4?"0"+a:a;case 4:return Wn(t,"〇一二三四五六七八九",r);case 6:return Rr(t,1,3999,xd,3,n).toLowerCase();case 7:return Rr(t,1,3999,xd,3,n);case 8:return Bt(t,945,969,!1,n);case 9:return Bt(t,97,122,!1,n);case 10:return Bt(t,65,90,!1,n);case 11:return Bt(t,1632,1641,!0,n);case 12:case 49:return Rr(t,1,9999,_d,3,n);case 35:return Rr(t,1,9999,_d,3,n).toLowerCase();case 13:return Bt(t,2534,2543,!0,n);case 14:case 30:return Bt(t,6112,6121,!0,n);case 15:return Wn(t,"子丑寅卯辰巳午未申酉戌亥",r);case 16:return Wn(t,"甲乙丙丁戊己庚辛壬癸",r);case 17:case 48:return en(t,"零一二三四五六七八九",Cd,"負",r,gn|mn|Oi);case 47:return en(t,"零壹貳參肆伍陸柒捌玖",Ed,"負",r,Nr|gn|mn|Oi);case 42:return en(t,"零一二三四五六七八九",Cd,"负",r,gn|mn|Oi);case 41:return en(t,"零壹贰叁肆伍陆柒捌玖",Ed,"负",r,Nr|gn|mn|Oi);case 26:return en(t,"〇一二三四五六七八九","十百千万",yd,r,0);case 25:return en(t,"零壱弐参四伍六七八九","拾百千万",yd,r,Nr|gn|mn);case 31:return en(t,"영일이삼사오육칠팔구","십백천만",kc,i,Nr|gn|mn);case 33:return en(t,"零一二三四五六七八九","十百千萬",kc,i,0);case 32:return en(t,"零壹貳參四五六七八九","拾百千",kc,i,Nr|gn|mn);case 18:return Bt(t,2406,2415,!0,n);case 20:return Rr(t,1,19999,aF,3,n);case 21:return Bt(t,2790,2799,!0,n);case 22:return Bt(t,2662,2671,!0,n);case 22:return Rr(t,1,10999,sF,3,n);case 23:return Wn(t,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Wn(t,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Bt(t,3302,3311,!0,n);case 28:return Wn(t,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",r);case 29:return Wn(t,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",r);case 34:return Bt(t,3792,3801,!0,n);case 37:return Bt(t,6160,6169,!0,n);case 38:return Bt(t,4160,4169,!0,n);case 39:return Bt(t,2918,2927,!0,n);case 40:return Bt(t,1776,1785,!0,n);case 43:return Bt(t,3046,3055,!0,n);case 44:return Bt(t,3174,3183,!0,n);case 45:return Bt(t,3664,3673,!0,n);case 46:return Bt(t,3872,3881,!0,n);case 3:default:return Bt(t,48,57,!0,n)}},Mm="data-html2canvas-ignore",Ud=function(){function t(e,A,n){if(this.context=e,this.options=n,this.scrolledElements=[],this.referenceElement=A,this.counters=new iF,this.quoteDepth=0,!A.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(A.ownerDocument.documentElement,!1)}return t.prototype.toIFrame=function(e,A){var n=this,r=oF(e,A);if(!r.contentWindow)return Promise.reject("Unable to find iframe window");var i=e.defaultView.pageXOffset,s=e.defaultView.pageYOffset,a=r.contentWindow,o=a.document,c=uF(r).then(function(){return zt(n,void 0,void 0,function(){var l,u;return kt(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(pF),a&&(a.scrollTo(A.left,A.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==A.top||a.scrollX!==A.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-A.left,a.scrollY-A.top,0,0))),l=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,lF(o)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof l=="function"?[2,Promise.resolve().then(function(){return l(o,u)}).then(function(){return r})]:[2,r]}})})});return o.open(),o.write(fF(document.doctype)+"<html></html>"),dF(this.referenceElement.ownerDocument,i,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),c},t.prototype.createElementClone=function(e){if(Tl(e,2))debugger;if(ym(e))return this.createCanvasClone(e);if(Bd(e))return this.createVideoClone(e);if(vd(e))return this.createStyleClone(e);var A=e.cloneNode(!1);return Ll(A)&&(Ll(e)&&e.currentSrc&&e.currentSrc!==e.src&&(A.src=e.currentSrc,A.srcset=""),A.loading==="lazy"&&(A.loading="eager")),wd(A)?this.createCustomElementClone(A):A},t.prototype.createCustomElementClone=function(e){var A=document.createElement("html2canvascustomelement");return Gc(e.style,A),A},t.prototype.createStyleClone=function(e){try{var A=e.sheet;if(A&&A.cssRules){var n=[].slice.call(A.cssRules,0).reduce(function(i,s){return s&&typeof s.cssText=="string"?i+s.cssText:i},""),r=e.cloneNode(!1);return r.textContent=n,r}}catch(i){if(this.context.logger.error("Unable to access cssRules property",i),i.name!=="SecurityError")throw i}return e.cloneNode(!1)},t.prototype.createCanvasClone=function(e){var A;if(this.options.inlineImages&&e.ownerDocument){var n=e.ownerDocument.createElement("img");try{return n.src=e.toDataURL(),n}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var r=e.cloneNode(!1);try{r.width=e.width,r.height=e.height;var i=e.getContext("2d"),s=r.getContext("2d");if(s)if(!this.options.allowTaint&&i)s.putImageData(i.getImageData(0,0,e.width,e.height),0,0);else{var a=(A=e.getContext("webgl2"))!==null&&A!==void 0?A:e.getContext("webgl");if(a){var o=a.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}s.drawImage(e,0,0)}return r}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return r},t.prototype.createVideoClone=function(e){var A=e.ownerDocument.createElement("canvas");A.width=e.offsetWidth,A.height=e.offsetHeight;var n=A.getContext("2d");try{return n&&(n.drawImage(e,0,0,A.width,A.height),this.options.allowTaint||n.getImageData(0,0,A.width,A.height)),A}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var r=e.ownerDocument.createElement("canvas");return r.width=e.offsetWidth,r.height=e.offsetHeight,r},t.prototype.appendChildNode=function(e,A,n){(!Vr(A)||!rF(A)&&!A.hasAttribute(Mm)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(A)))&&(!this.options.copyStyles||!Vr(A)||!vd(A))&&e.appendChild(this.cloneNode(A,n))},t.prototype.cloneChildNodes=function(e,A,n){for(var r=this,i=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;i;i=i.nextSibling)if(Vr(i)&&Sm(i)&&typeof i.assignedNodes=="function"){var s=i.assignedNodes();s.length&&s.forEach(function(a){return r.appendChildNode(A,a,n)})}else this.appendChildNode(A,i,n)},t.prototype.cloneNode=function(e,A){if(Cm(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var n=e.ownerDocument.defaultView;if(n&&Vr(e)&&(Rl(e)||Ca(e))){var r=this.createElementClone(e);r.style.transitionProperty="none";var i=n.getComputedStyle(e),s=n.getComputedStyle(e,":before"),a=n.getComputedStyle(e,":after");this.referenceElement===e&&Rl(r)&&(this.clonedReferenceElement=r),mu(r)&&BF(r);var o=this.counters.parse(new nd(this.context,i)),c=this.resolvePseudoContent(e,r,s,ji.BEFORE);wd(e)&&(A=!0),Bd(e)||this.cloneChildNodes(e,r,A),c&&r.insertBefore(c,r.firstChild);var l=this.resolvePseudoContent(e,r,a,ji.AFTER);return l&&r.appendChild(l),this.counters.pop(o),(i&&(this.options.copyStyles||Ca(e))&&!Um(e)||A)&&Gc(i,r),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([r,e.scrollLeft,e.scrollTop]),(ja(e)||Ya(e))&&(ja(r)||Ya(r))&&(r.value=e.value),r}return e.cloneNode(!1)},t.prototype.resolvePseudoContent=function(e,A,n,r){var i=this;if(n){var s=n.content,a=A.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||n.display==="none")){this.counters.parse(new nd(this.context,n));var o=new eM(this.context,n),c=a.createElement("html2canvaspseudoelement");Gc(n,c),o.content.forEach(function(u){if(u.type===0)c.appendChild(a.createTextNode(u.value));else if(u.type===22){var h=a.createElement("img");h.src=u.value,h.style.opacity="1",c.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(et);p.length&&c.appendChild(a.createTextNode(e.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var g=u.values.filter(si),m=g[0],d=g[1];if(m&&et(m)){var f=i.counters.getCounterValue(m.value),x=d&&et(d)?Fl.parse(i.context,d.value):3;c.appendChild(a.createTextNode(ts(f,x,!1)))}}else if(u.name==="counters"){var v=u.values.filter(si),m=v[0],y=v[1],d=v[2];if(m&&et(m)){var b=i.counters.getCounterValues(m.value),E=d&&et(d)?Fl.parse(i.context,d.value):3,U=y&&y.type===0?y.value:"",I=b.map(function(Q){return ts(Q,E,!1)}).join(U);c.appendChild(a.createTextNode(I))}}}else if(u.type===20)switch(u.value){case"open-quote":c.appendChild(a.createTextNode(Ad(o.quotes,i.quoteDepth++,!0)));break;case"close-quote":c.appendChild(a.createTextNode(Ad(o.quotes,--i.quoteDepth,!1)));break;default:c.appendChild(a.createTextNode(u.value))}}),c.className=Dl+" "+Hl;var l=r===ji.BEFORE?" "+Dl:" "+Hl;return Ca(A)?A.className.baseValue+=l:A.className+=l,c}}},t.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},t}(),ji;(function(t){t[t.BEFORE=0]="BEFORE",t[t.AFTER=1]="AFTER"})(ji||(ji={}));var oF=function(t,e){var A=t.createElement("iframe");return A.className="html2canvas-container",A.style.visibility="hidden",A.style.position="fixed",A.style.left="-10000px",A.style.top="0px",A.style.border="0",A.width=e.width.toString(),A.height=e.height.toString(),A.scrolling="no",A.setAttribute(Mm,"true"),t.body.appendChild(A),A},cF=function(t){return new Promise(function(e){if(t.complete){e();return}if(!t.src){e();return}t.onload=e,t.onerror=e})},lF=function(t){return Promise.all([].slice.call(t.images,0).map(cF))},uF=function(t){return new Promise(function(e,A){var n=t.contentWindow;if(!n)return A("No window assigned for iframe");var r=n.document;n.onload=t.onload=function(){n.onload=t.onload=null;var i=setInterval(function(){r.body.childNodes.length>0&&r.readyState==="complete"&&(clearInterval(i),e(t))},50)}})},hF=["all","d","content"],Gc=function(t,e){for(var A=t.length-1;A>=0;A--){var n=t.item(A);hF.indexOf(n)===-1&&e.style.setProperty(n,t.getPropertyValue(n))}return e},fF=function(t){var e="";return t&&(e+="<!DOCTYPE ",t.name&&(e+=t.name),t.internalSubset&&(e+=t.internalSubset),t.publicId&&(e+='"'+t.publicId+'"'),t.systemId&&(e+='"'+t.systemId+'"'),e+=">"),e},dF=function(t,e,A){t&&t.defaultView&&(e!==t.defaultView.pageXOffset||A!==t.defaultView.pageYOffset)&&t.defaultView.scrollTo(e,A)},pF=function(t){var e=t[0],A=t[1],n=t[2];e.scrollLeft=A,e.scrollTop=n},gF=":before",mF=":after",Dl="___html2canvas___pseudoelement_before",Hl="___html2canvas___pseudoelement_after",Sd=`{
    content: "" !important;
    display: none !important;
}`,BF=function(t){vF(t,"."+Dl+gF+Sd+`
         .`+Hl+mF+Sd)},vF=function(t,e){var A=t.ownerDocument;if(A){var n=A.createElement("style");n.textContent=e,t.appendChild(n)}},Fm=function(){function t(){}return t.getOrigin=function(e){var A=t._link;return A?(A.href=e,A.href=A.href,A.protocol+A.hostname+A.port):"about:blank"},t.isSameOrigin=function(e){return t.getOrigin(e)===t._origin},t.setContext=function(e){t._link=e.document.createElement("a"),t._origin=t.getOrigin(e.location.href)},t._origin="about:blank",t}(),wF=function(){function t(e,A){this.context=e,this._options=A,this._cache={}}return t.prototype.addImage=function(e){var A=Promise.resolve();return this.has(e)||(Kc(e)||EF(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),A},t.prototype.match=function(e){return this._cache[e]},t.prototype.loadImage=function(e){return zt(this,void 0,void 0,function(){var A,n,r,i,s=this;return kt(this,function(a){switch(a.label){case 0:return A=Fm.isSameOrigin(e),n=!Vc(e)&&this._options.useCORS===!0&&Lt.SUPPORT_CORS_IMAGES&&!A,r=!Vc(e)&&!A&&!Kc(e)&&typeof this._options.proxy=="string"&&Lt.SUPPORT_CORS_XHR&&!n,!A&&this._options.allowTaint===!1&&!Vc(e)&&!Kc(e)&&!r&&!n?[2]:(i=e,r?[4,this.proxy(i)]:[3,2]);case 1:i=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(o,c){var l=new Image;l.onload=function(){return o(l)},l.onerror=c,(yF(i)||n)&&(l.crossOrigin="anonymous"),l.src=i,l.complete===!0&&setTimeout(function(){return o(l)},500),s._options.imageTimeout>0&&setTimeout(function(){return c("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},t.prototype.has=function(e){return typeof this._cache[e]<"u"},t.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},t.prototype.proxy=function(e){var A=this,n=this._options.proxy;if(!n)throw new Error("No proxy defined");var r=e.substring(0,256);return new Promise(function(i,s){var a=Lt.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")i(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return i(u.result)},!1),u.addEventListener("error",function(h){return s(h)},!1),u.readAsDataURL(o.response)}else s("Failed to proxy resource "+r+" with status code "+o.status)},o.onerror=s;var c=n.indexOf("?")>-1?"&":"?";if(o.open("GET",""+n+c+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),A._options.imageTimeout){var l=A._options.imageTimeout;o.timeout=l,o.ontimeout=function(){return s("Timed out ("+l+"ms) proxying "+r)}}o.send()})},t}(),xF=/^data:image\/svg\+xml/i,_F=/^data:image\/.*;base64,/i,CF=/^data:image\/.*/i,EF=function(t){return Lt.SUPPORT_SVG_DRAWING||!UF(t)},Vc=function(t){return CF.test(t)},yF=function(t){return _F.test(t)},Kc=function(t){return t.substr(0,4)==="blob"},UF=function(t){return t.substr(-3).toLowerCase()==="svg"||xF.test(t)},le=function(){function t(e,A){this.type=0,this.x=e,this.y=A}return t.prototype.add=function(e,A){return new t(this.x+e,this.y+A)},t}(),Lr=function(t,e,A){return new le(t.x+(e.x-t.x)*A,t.y+(e.y-t.y)*A)},sa=function(){function t(e,A,n,r){this.type=1,this.start=e,this.startControl=A,this.endControl=n,this.end=r}return t.prototype.subdivide=function(e,A){var n=Lr(this.start,this.startControl,e),r=Lr(this.startControl,this.endControl,e),i=Lr(this.endControl,this.end,e),s=Lr(n,r,e),a=Lr(r,i,e),o=Lr(s,a,e);return A?new t(this.start,n,s,o):new t(o,a,i,this.end)},t.prototype.add=function(e,A){return new t(this.start.add(e,A),this.startControl.add(e,A),this.endControl.add(e,A),this.end.add(e,A))},t.prototype.reverse=function(){return new t(this.end,this.endControl,this.startControl,this.start)},t}(),dA=function(t){return t.type===1},SF=function(){function t(e){var A=e.styles,n=e.bounds,r=Pi(A.borderTopLeftRadius,n.width,n.height),i=r[0],s=r[1],a=Pi(A.borderTopRightRadius,n.width,n.height),o=a[0],c=a[1],l=Pi(A.borderBottomRightRadius,n.width,n.height),u=l[0],h=l[1],p=Pi(A.borderBottomLeftRadius,n.width,n.height),g=p[0],m=p[1],d=[];d.push((i+o)/n.width),d.push((g+u)/n.width),d.push((s+m)/n.height),d.push((c+h)/n.height);var f=Math.max.apply(Math,d);f>1&&(i/=f,s/=f,o/=f,c/=f,u/=f,h/=f,g/=f,m/=f);var x=n.width-o,v=n.height-h,y=n.width-u,b=n.height-m,E=A.borderTopWidth,U=A.borderRightWidth,I=A.borderBottomWidth,C=A.borderLeftWidth,B=nt(A.paddingTop,e.bounds.width),Q=nt(A.paddingRight,e.bounds.width),R=nt(A.paddingBottom,e.bounds.width),T=nt(A.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=i>0||s>0?ut(n.left+C/3,n.top+E/3,i-C/3,s-E/3,Je.TOP_LEFT):new le(n.left+C/3,n.top+E/3),this.topRightBorderDoubleOuterBox=i>0||s>0?ut(n.left+x,n.top+E/3,o-U/3,c-E/3,Je.TOP_RIGHT):new le(n.left+n.width-U/3,n.top+E/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?ut(n.left+y,n.top+v,u-U/3,h-I/3,Je.BOTTOM_RIGHT):new le(n.left+n.width-U/3,n.top+n.height-I/3),this.bottomLeftBorderDoubleOuterBox=g>0||m>0?ut(n.left+C/3,n.top+b,g-C/3,m-I/3,Je.BOTTOM_LEFT):new le(n.left+C/3,n.top+n.height-I/3),this.topLeftBorderDoubleInnerBox=i>0||s>0?ut(n.left+C*2/3,n.top+E*2/3,i-C*2/3,s-E*2/3,Je.TOP_LEFT):new le(n.left+C*2/3,n.top+E*2/3),this.topRightBorderDoubleInnerBox=i>0||s>0?ut(n.left+x,n.top+E*2/3,o-U*2/3,c-E*2/3,Je.TOP_RIGHT):new le(n.left+n.width-U*2/3,n.top+E*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?ut(n.left+y,n.top+v,u-U*2/3,h-I*2/3,Je.BOTTOM_RIGHT):new le(n.left+n.width-U*2/3,n.top+n.height-I*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||m>0?ut(n.left+C*2/3,n.top+b,g-C*2/3,m-I*2/3,Je.BOTTOM_LEFT):new le(n.left+C*2/3,n.top+n.height-I*2/3),this.topLeftBorderStroke=i>0||s>0?ut(n.left+C/2,n.top+E/2,i-C/2,s-E/2,Je.TOP_LEFT):new le(n.left+C/2,n.top+E/2),this.topRightBorderStroke=i>0||s>0?ut(n.left+x,n.top+E/2,o-U/2,c-E/2,Je.TOP_RIGHT):new le(n.left+n.width-U/2,n.top+E/2),this.bottomRightBorderStroke=u>0||h>0?ut(n.left+y,n.top+v,u-U/2,h-I/2,Je.BOTTOM_RIGHT):new le(n.left+n.width-U/2,n.top+n.height-I/2),this.bottomLeftBorderStroke=g>0||m>0?ut(n.left+C/2,n.top+b,g-C/2,m-I/2,Je.BOTTOM_LEFT):new le(n.left+C/2,n.top+n.height-I/2),this.topLeftBorderBox=i>0||s>0?ut(n.left,n.top,i,s,Je.TOP_LEFT):new le(n.left,n.top),this.topRightBorderBox=o>0||c>0?ut(n.left+x,n.top,o,c,Je.TOP_RIGHT):new le(n.left+n.width,n.top),this.bottomRightBorderBox=u>0||h>0?ut(n.left+y,n.top+v,u,h,Je.BOTTOM_RIGHT):new le(n.left+n.width,n.top+n.height),this.bottomLeftBorderBox=g>0||m>0?ut(n.left,n.top+b,g,m,Je.BOTTOM_LEFT):new le(n.left,n.top+n.height),this.topLeftPaddingBox=i>0||s>0?ut(n.left+C,n.top+E,Math.max(0,i-C),Math.max(0,s-E),Je.TOP_LEFT):new le(n.left+C,n.top+E),this.topRightPaddingBox=o>0||c>0?ut(n.left+Math.min(x,n.width-U),n.top+E,x>n.width+U?0:Math.max(0,o-U),Math.max(0,c-E),Je.TOP_RIGHT):new le(n.left+n.width-U,n.top+E),this.bottomRightPaddingBox=u>0||h>0?ut(n.left+Math.min(y,n.width-C),n.top+Math.min(v,n.height-I),Math.max(0,u-U),Math.max(0,h-I),Je.BOTTOM_RIGHT):new le(n.left+n.width-U,n.top+n.height-I),this.bottomLeftPaddingBox=g>0||m>0?ut(n.left+C,n.top+Math.min(b,n.height-I),Math.max(0,g-C),Math.max(0,m-I),Je.BOTTOM_LEFT):new le(n.left+C,n.top+n.height-I),this.topLeftContentBox=i>0||s>0?ut(n.left+C+T,n.top+E+B,Math.max(0,i-(C+T)),Math.max(0,s-(E+B)),Je.TOP_LEFT):new le(n.left+C+T,n.top+E+B),this.topRightContentBox=o>0||c>0?ut(n.left+Math.min(x,n.width+C+T),n.top+E+B,x>n.width+C+T?0:o-C+T,c-(E+B),Je.TOP_RIGHT):new le(n.left+n.width-(U+Q),n.top+E+B),this.bottomRightContentBox=u>0||h>0?ut(n.left+Math.min(y,n.width-(C+T)),n.top+Math.min(v,n.height+E+B),Math.max(0,u-(U+Q)),h-(I+R),Je.BOTTOM_RIGHT):new le(n.left+n.width-(U+Q),n.top+n.height-(I+R)),this.bottomLeftContentBox=g>0||m>0?ut(n.left+C+T,n.top+b,Math.max(0,g-(C+T)),m-(I+R),Je.BOTTOM_LEFT):new le(n.left+C+T,n.top+n.height-(I+R))}return t}(),Je;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=1]="TOP_RIGHT",t[t.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",t[t.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(Je||(Je={}));var ut=function(t,e,A,n,r){var i=4*((Math.sqrt(2)-1)/3),s=A*i,a=n*i,o=t+A,c=e+n;switch(r){case Je.TOP_LEFT:return new sa(new le(t,c),new le(t,c-a),new le(o-s,e),new le(o,e));case Je.TOP_RIGHT:return new sa(new le(t,e),new le(t+s,e),new le(o,c-a),new le(o,c));case Je.BOTTOM_RIGHT:return new sa(new le(o,e),new le(o,e+a),new le(t+s,c),new le(t,c));case Je.BOTTOM_LEFT:default:return new sa(new le(o,c),new le(o-s,c),new le(t,e+a),new le(t,e))}},$a=function(t){return[t.topLeftBorderBox,t.topRightBorderBox,t.bottomRightBorderBox,t.bottomLeftBorderBox]},bF=function(t){return[t.topLeftContentBox,t.topRightContentBox,t.bottomRightContentBox,t.bottomLeftContentBox]},Ja=function(t){return[t.topLeftPaddingBox,t.topRightPaddingBox,t.bottomRightPaddingBox,t.bottomLeftPaddingBox]},MF=function(){function t(e,A,n){this.offsetX=e,this.offsetY=A,this.matrix=n,this.type=0,this.target=6}return t}(),aa=function(){function t(e,A){this.path=e,this.target=A,this.type=1}return t}(),FF=function(){function t(e){this.opacity=e,this.type=2,this.target=6}return t}(),TF=function(t){return t.type===0},Tm=function(t){return t.type===1},QF=function(t){return t.type===2},bd=function(t,e){return t.length===e.length?t.some(function(A,n){return A===e[n]}):!1},IF=function(t,e,A,n,r){return t.map(function(i,s){switch(s){case 0:return i.add(e,A);case 1:return i.add(e+n,A);case 2:return i.add(e+n,A+r);case 3:return i.add(e,A+r)}return i})},Qm=function(){function t(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return t}(),Im=function(){function t(e,A){if(this.container=e,this.parent=A,this.effects=[],this.curves=new SF(this.container),this.container.styles.opacity<1&&this.effects.push(new FF(this.container.styles.opacity)),this.container.styles.transform!==null){var n=this.container.bounds.left+this.container.styles.transformOrigin[0].number,r=this.container.bounds.top+this.container.styles.transformOrigin[1].number,i=this.container.styles.transform;this.effects.push(new MF(n,r,i))}if(this.container.styles.overflowX!==0){var s=$a(this.curves),a=Ja(this.curves);bd(s,a)?this.effects.push(new aa(s,6)):(this.effects.push(new aa(s,2)),this.effects.push(new aa(a,4)))}}return t.prototype.getEffects=function(e){for(var A=[2,3].indexOf(this.container.styles.position)===-1,n=this.parent,r=this.effects.slice(0);n;){var i=n.effects.filter(function(o){return!Tm(o)});if(A||n.container.styles.position!==0||!n.parent){if(r.unshift.apply(r,i),A=[2,3].indexOf(n.container.styles.position)===-1,n.container.styles.overflowX!==0){var s=$a(n.curves),a=Ja(n.curves);bd(s,a)||r.unshift(new aa(a,6))}}else r.unshift.apply(r,i);n=n.parent}return r.filter(function(o){return Ut(o.target,e)})},t}(),Pl=function(t,e,A,n){t.container.elements.forEach(function(r){var i=Ut(r.flags,4),s=Ut(r.flags,2),a=new Im(r,t);Ut(r.styles.display,2048)&&n.push(a);var o=Ut(r.flags,8)?[]:n;if(i||s){var c=i||r.styles.isPositioned()?A:e,l=new Qm(a);if(r.styles.isPositioned()||r.styles.opacity<1||r.styles.isTransformed()){var u=r.styles.zIndex.order;if(u<0){var h=0;c.negativeZIndex.some(function(g,m){return u>g.element.container.styles.zIndex.order?(h=m,!1):h>0}),c.negativeZIndex.splice(h,0,l)}else if(u>0){var p=0;c.positiveZIndex.some(function(g,m){return u>=g.element.container.styles.zIndex.order?(p=m+1,!1):p>0}),c.positiveZIndex.splice(p,0,l)}else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l)}else r.styles.isFloating()?c.nonPositionedFloats.push(l):c.nonPositionedInlineLevel.push(l);Pl(a,l,i?l:A,o)}else r.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),Pl(a,e,A,o);Ut(r.flags,8)&&Rm(r,o)})},Rm=function(t,e){for(var A=t instanceof Il?t.start:1,n=t instanceof Il?t.reversed:!1,r=0;r<e.length;r++){var i=e[r];i.container instanceof mm&&typeof i.container.value=="number"&&i.container.value!==0&&(A=i.container.value),i.listValue=ts(A,i.container.styles.listStyleType,!0),A+=n?-1:1}},RF=function(t){var e=new Im(t,null),A=new Qm(e),n=[];return Pl(e,A,A,n),Rm(e.container,n),A},Md=function(t,e){switch(e){case 0:return mA(t.topLeftBorderBox,t.topLeftPaddingBox,t.topRightBorderBox,t.topRightPaddingBox);case 1:return mA(t.topRightBorderBox,t.topRightPaddingBox,t.bottomRightBorderBox,t.bottomRightPaddingBox);case 2:return mA(t.bottomRightBorderBox,t.bottomRightPaddingBox,t.bottomLeftBorderBox,t.bottomLeftPaddingBox);case 3:default:return mA(t.bottomLeftBorderBox,t.bottomLeftPaddingBox,t.topLeftBorderBox,t.topLeftPaddingBox)}},LF=function(t,e){switch(e){case 0:return mA(t.topLeftBorderBox,t.topLeftBorderDoubleOuterBox,t.topRightBorderBox,t.topRightBorderDoubleOuterBox);case 1:return mA(t.topRightBorderBox,t.topRightBorderDoubleOuterBox,t.bottomRightBorderBox,t.bottomRightBorderDoubleOuterBox);case 2:return mA(t.bottomRightBorderBox,t.bottomRightBorderDoubleOuterBox,t.bottomLeftBorderBox,t.bottomLeftBorderDoubleOuterBox);case 3:default:return mA(t.bottomLeftBorderBox,t.bottomLeftBorderDoubleOuterBox,t.topLeftBorderBox,t.topLeftBorderDoubleOuterBox)}},DF=function(t,e){switch(e){case 0:return mA(t.topLeftBorderDoubleInnerBox,t.topLeftPaddingBox,t.topRightBorderDoubleInnerBox,t.topRightPaddingBox);case 1:return mA(t.topRightBorderDoubleInnerBox,t.topRightPaddingBox,t.bottomRightBorderDoubleInnerBox,t.bottomRightPaddingBox);case 2:return mA(t.bottomRightBorderDoubleInnerBox,t.bottomRightPaddingBox,t.bottomLeftBorderDoubleInnerBox,t.bottomLeftPaddingBox);case 3:default:return mA(t.bottomLeftBorderDoubleInnerBox,t.bottomLeftPaddingBox,t.topLeftBorderDoubleInnerBox,t.topLeftPaddingBox)}},HF=function(t,e){switch(e){case 0:return oa(t.topLeftBorderStroke,t.topRightBorderStroke);case 1:return oa(t.topRightBorderStroke,t.bottomRightBorderStroke);case 2:return oa(t.bottomRightBorderStroke,t.bottomLeftBorderStroke);case 3:default:return oa(t.bottomLeftBorderStroke,t.topLeftBorderStroke)}},oa=function(t,e){var A=[];return dA(t)?A.push(t.subdivide(.5,!1)):A.push(t),dA(e)?A.push(e.subdivide(.5,!0)):A.push(e),A},mA=function(t,e,A,n){var r=[];return dA(t)?r.push(t.subdivide(.5,!1)):r.push(t),dA(A)?r.push(A.subdivide(.5,!0)):r.push(A),dA(n)?r.push(n.subdivide(.5,!0).reverse()):r.push(n),dA(e)?r.push(e.subdivide(.5,!1).reverse()):r.push(e),r},Lm=function(t){var e=t.bounds,A=t.styles;return e.add(A.borderLeftWidth,A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth),-(A.borderTopWidth+A.borderBottomWidth))},qa=function(t){var e=t.styles,A=t.bounds,n=nt(e.paddingLeft,A.width),r=nt(e.paddingRight,A.width),i=nt(e.paddingTop,A.width),s=nt(e.paddingBottom,A.width);return A.add(n+e.borderLeftWidth,i+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+n+r),-(e.borderTopWidth+e.borderBottomWidth+i+s))},PF=function(t,e){return t===0?e.bounds:t===2?qa(e):Lm(e)},NF=function(t,e){return t===0?e.bounds:t===2?qa(e):Lm(e)},zc=function(t,e,A){var n=PF(Or(t.styles.backgroundOrigin,e),t),r=NF(Or(t.styles.backgroundClip,e),t),i=OF(Or(t.styles.backgroundSize,e),A,n),s=i[0],a=i[1],o=Pi(Or(t.styles.backgroundPosition,e),n.width-s,n.height-a),c=kF(Or(t.styles.backgroundRepeat,e),o,i,n,r),l=Math.round(n.left+o[0]),u=Math.round(n.top+o[1]);return[c,l,u,s,a]},Dr=function(t){return et(t)&&t.value===Yr.AUTO},ca=function(t){return typeof t=="number"},OF=function(t,e,A){var n=e[0],r=e[1],i=e[2],s=t[0],a=t[1];if(!s)return[0,0];if(Ct(s)&&a&&Ct(a))return[nt(s,A.width),nt(a,A.height)];var o=ca(i);if(et(s)&&(s.value===Yr.CONTAIN||s.value===Yr.COVER)){if(ca(i)){var c=A.width/A.height;return c<i!=(s.value===Yr.COVER)?[A.width,A.width/i]:[A.height*i,A.height]}return[A.width,A.height]}var l=ca(n),u=ca(r),h=l||u;if(Dr(s)&&(!a||Dr(a))){if(l&&u)return[n,r];if(!o&&!h)return[A.width,A.height];if(h&&o){var p=l?n:r*i,g=u?r:n/i;return[p,g]}var m=l?n:A.width,d=u?r:A.height;return[m,d]}if(o){var f=0,x=0;return Ct(s)?f=nt(s,A.width):Ct(a)&&(x=nt(a,A.height)),Dr(s)?f=x*i:(!a||Dr(a))&&(x=f/i),[f,x]}var v=null,y=null;if(Ct(s)?v=nt(s,A.width):a&&Ct(a)&&(y=nt(a,A.height)),v!==null&&(!a||Dr(a))&&(y=l&&u?v/n*r:A.height),y!==null&&Dr(s)&&(v=l&&u?y/r*n:A.width),v!==null&&y!==null)return[v,y];throw new Error("Unable to calculate background-size for element")},Or=function(t,e){var A=t[e];return typeof A>"u"?t[0]:A},kF=function(t,e,A,n,r){var i=e[0],s=e[1],a=A[0],o=A[1];switch(t){case 2:return[new le(Math.round(n.left),Math.round(n.top+s)),new le(Math.round(n.left+n.width),Math.round(n.top+s)),new le(Math.round(n.left+n.width),Math.round(o+n.top+s)),new le(Math.round(n.left),Math.round(o+n.top+s))];case 3:return[new le(Math.round(n.left+i),Math.round(n.top)),new le(Math.round(n.left+i+a),Math.round(n.top)),new le(Math.round(n.left+i+a),Math.round(n.height+n.top)),new le(Math.round(n.left+i),Math.round(n.height+n.top))];case 1:return[new le(Math.round(n.left+i),Math.round(n.top+s)),new le(Math.round(n.left+i+a),Math.round(n.top+s)),new le(Math.round(n.left+i+a),Math.round(n.top+s+o)),new le(Math.round(n.left+i),Math.round(n.top+s+o))];default:return[new le(Math.round(r.left),Math.round(r.top)),new le(Math.round(r.left+r.width),Math.round(r.top)),new le(Math.round(r.left+r.width),Math.round(r.height+r.top)),new le(Math.round(r.left),Math.round(r.height+r.top))]}},GF="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Fd="Hidden Text",VF=function(){function t(e){this._data={},this._document=e}return t.prototype.parseMetrics=function(e,A){var n=this._document.createElement("div"),r=this._document.createElement("img"),i=this._document.createElement("span"),s=this._document.body;n.style.visibility="hidden",n.style.fontFamily=e,n.style.fontSize=A,n.style.margin="0",n.style.padding="0",n.style.whiteSpace="nowrap",s.appendChild(n),r.src=GF,r.width=1,r.height=1,r.style.margin="0",r.style.padding="0",r.style.verticalAlign="baseline",i.style.fontFamily=e,i.style.fontSize=A,i.style.margin="0",i.style.padding="0",i.appendChild(this._document.createTextNode(Fd)),n.appendChild(i),n.appendChild(r);var a=r.offsetTop-i.offsetTop+2;n.removeChild(i),n.appendChild(this._document.createTextNode(Fd)),n.style.lineHeight="normal",r.style.verticalAlign="super";var o=r.offsetTop-n.offsetTop+2;return s.removeChild(n),{baseline:a,middle:o}},t.prototype.getMetrics=function(e,A){var n=e+" "+A;return typeof this._data[n]>"u"&&(this._data[n]=this.parseMetrics(e,A)),this._data[n]},t}(),Dm=function(){function t(e,A){this.context=e,this.options=A}return t}(),KF=1e4,zF=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this;return r._activeEffects=[],r.canvas=n.canvas?n.canvas:document.createElement("canvas"),r.ctx=r.canvas.getContext("2d"),n.canvas||(r.canvas.width=Math.floor(n.width*n.scale),r.canvas.height=Math.floor(n.height*n.scale),r.canvas.style.width=n.width+"px",r.canvas.style.height=n.height+"px"),r.fontMetrics=new VF(document),r.ctx.scale(r.options.scale,r.options.scale),r.ctx.translate(-n.x,-n.y),r.ctx.textBaseline="bottom",r._activeEffects=[],r.context.logger.debug("Canvas renderer initialized ("+n.width+"x"+n.height+") with scale "+n.scale),r}return e.prototype.applyEffects=function(A){for(var n=this;this._activeEffects.length;)this.popEffect();A.forEach(function(r){return n.applyEffect(r)})},e.prototype.applyEffect=function(A){this.ctx.save(),QF(A)&&(this.ctx.globalAlpha=A.opacity),TF(A)&&(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)),Tm(A)&&(this.path(A.path),this.ctx.clip()),this._activeEffects.push(A)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(A){return zt(this,void 0,void 0,function(){var n;return kt(this,function(r){switch(r.label){case 0:return n=A.element.container.styles,n.isVisible()?[4,this.renderStackContent(A)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(A){return zt(this,void 0,void 0,function(){return kt(this,function(n){switch(n.label){case 0:if(Ut(A.container.flags,16))debugger;return A.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(A)]:[3,3];case 1:return n.sent(),[4,this.renderNodeContent(A)];case 2:n.sent(),n.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(A,n,r){var i=this;if(n===0)this.ctx.fillText(A.text,A.bounds.left,A.bounds.top+r);else{var s=pu(A.text);s.reduce(function(a,o){return i.ctx.fillText(o,a,A.bounds.top+r),a+i.ctx.measureText(o).width},A.bounds.left)}},e.prototype.createFontStyle=function(A){var n=A.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),r=$F(A.fontFamily).join(", "),i=ls(A.fontSize)?""+A.fontSize.number+A.fontSize.unit:A.fontSize.number+"px";return[[A.fontStyle,n,A.fontWeight,i,r].join(" "),r,i]},e.prototype.renderTextNode=function(A,n){return zt(this,void 0,void 0,function(){var r,i,s,a,o,c,l,u,h=this;return kt(this,function(p){return r=this.createFontStyle(n),i=r[0],s=r[1],a=r[2],this.ctx.font=i,this.ctx.direction=n.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),c=o.baseline,l=o.middle,u=n.paintOrder,A.textBounds.forEach(function(g){u.forEach(function(m){switch(m){case 0:h.ctx.fillStyle=Tt(n.color),h.renderTextWithLetterSpacing(g,n.letterSpacing,c);var d=n.textShadow;d.length&&g.text.trim().length&&(d.slice(0).reverse().forEach(function(f){h.ctx.shadowColor=Tt(f.color),h.ctx.shadowOffsetX=f.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=f.offsetY.number*h.options.scale,h.ctx.shadowBlur=f.blur.number,h.renderTextWithLetterSpacing(g,n.letterSpacing,c)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),n.textDecorationLine.length&&(h.ctx.fillStyle=Tt(n.textDecorationColor||n.color),n.textDecorationLine.forEach(function(f){switch(f){case 1:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+c),g.bounds.width,1);break;case 2:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:h.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+l),g.bounds.width,1);break}}));break;case 1:n.webkitTextStrokeWidth&&g.text.trim().length&&(h.ctx.strokeStyle=Tt(n.webkitTextStrokeColor),h.ctx.lineWidth=n.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+c)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(A,n,r){if(r&&A.intrinsicWidth>0&&A.intrinsicHeight>0){var i=qa(A),s=Ja(n);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(r,0,0,A.intrinsicWidth,A.intrinsicHeight,i.left,i.top,i.width,i.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(A){return zt(this,void 0,void 0,function(){var n,r,i,s,a,o,x,x,c,l,u,h,y,p,g,b,m,d,f,x,v,y,b;return kt(this,function(E){switch(E.label){case 0:this.applyEffects(A.getEffects(4)),n=A.container,r=A.curves,i=n.styles,s=0,a=n.textNodes,E.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,i)]):[3,4];case 2:E.sent(),E.label=3;case 3:return s++,[3,1];case 4:if(!(n instanceof dm))return[3,8];E.label=5;case 5:return E.trys.push([5,7,,8]),[4,this.context.cache.match(n.src)];case 6:return x=E.sent(),this.renderReplacedElement(n,r,x),[3,8];case 7:return E.sent(),this.context.logger.error("Error loading image "+n.src),[3,8];case 8:if(n instanceof pm&&this.renderReplacedElement(n,r,n.canvas),!(n instanceof gm))return[3,12];E.label=9;case 9:return E.trys.push([9,11,,12]),[4,this.context.cache.match(n.svg)];case 10:return x=E.sent(),this.renderReplacedElement(n,r,x),[3,12];case 11:return E.sent(),this.context.logger.error("Error loading svg "+n.svg.substring(0,255)),[3,12];case 12:return n instanceof wm&&n.tree?(c=new e(this.context,{scale:this.options.scale,backgroundColor:n.backgroundColor,x:0,y:0,width:n.width,height:n.height}),[4,c.render(n.tree)]):[3,14];case 13:l=E.sent(),n.width&&n.height&&this.ctx.drawImage(l,0,0,n.width,n.height,n.bounds.left,n.bounds.top,n.bounds.width,n.bounds.height),E.label=14;case 14:if(n instanceof gu&&(u=Math.min(n.bounds.width,n.bounds.height),n.type===Wa?n.checked&&(this.ctx.save(),this.path([new le(n.bounds.left+u*.39363,n.bounds.top+u*.79),new le(n.bounds.left+u*.16,n.bounds.top+u*.5549),new le(n.bounds.left+u*.27347,n.bounds.top+u*.44071),new le(n.bounds.left+u*.39694,n.bounds.top+u*.5649),new le(n.bounds.left+u*.72983,n.bounds.top+u*.23),new le(n.bounds.left+u*.84,n.bounds.top+u*.34085),new le(n.bounds.left+u*.39363,n.bounds.top+u*.79)]),this.ctx.fillStyle=Tt(md),this.ctx.fill(),this.ctx.restore()):n.type===Xa&&n.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(n.bounds.left+u/2,n.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=Tt(md),this.ctx.fill(),this.ctx.restore())),WF(n)&&n.value.length){switch(h=this.createFontStyle(i),y=h[0],p=h[1],g=this.fontMetrics.getMetrics(y,p).baseline,this.ctx.font=y,this.ctx.fillStyle=Tt(i.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=jF(n.styles.textAlign),b=qa(n),m=0,n.styles.textAlign){case 1:m+=b.width/2;break;case 2:m+=b.width;break}d=b.add(m,0,0,-b.height/2+1),this.ctx.save(),this.path([new le(b.left,b.top),new le(b.left+b.width,b.top),new le(b.left+b.width,b.top+b.height),new le(b.left,b.top+b.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Xi(n.value,d),i.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Ut(n.styles.display,2048))return[3,20];if(n.styles.listStyleImage===null)return[3,19];if(f=n.styles.listStyleImage,f.type!==0)return[3,18];x=void 0,v=f.url,E.label=15;case 15:return E.trys.push([15,17,,18]),[4,this.context.cache.match(v)];case 16:return x=E.sent(),this.ctx.drawImage(x,n.bounds.left-(x.width+10),n.bounds.top),[3,18];case 17:return E.sent(),this.context.logger.error("Error loading list-style-image "+v),[3,18];case 18:return[3,20];case 19:A.listValue&&n.styles.listStyleType!==-1&&(y=this.createFontStyle(i)[0],this.ctx.font=y,this.ctx.fillStyle=Tt(i.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",b=new an(n.bounds.left,n.bounds.top+nt(n.styles.paddingTop,n.bounds.width),n.bounds.width,ed(i.lineHeight,i.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Xi(A.listValue,b),i.letterSpacing,ed(i.lineHeight,i.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),E.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(A){return zt(this,void 0,void 0,function(){var n,r,f,i,s,f,a,o,f,c,l,f,u,h,f,p,g,f,m,d,f;return kt(this,function(x){switch(x.label){case 0:if(Ut(A.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(A.element)];case 1:x.sent(),n=0,r=A.negativeZIndex,x.label=2;case 2:return n<r.length?(f=r[n],[4,this.renderStack(f)]):[3,5];case 3:x.sent(),x.label=4;case 4:return n++,[3,2];case 5:return[4,this.renderNodeContent(A.element)];case 6:x.sent(),i=0,s=A.nonInlineLevel,x.label=7;case 7:return i<s.length?(f=s[i],[4,this.renderNode(f)]):[3,10];case 8:x.sent(),x.label=9;case 9:return i++,[3,7];case 10:a=0,o=A.nonPositionedFloats,x.label=11;case 11:return a<o.length?(f=o[a],[4,this.renderStack(f)]):[3,14];case 12:x.sent(),x.label=13;case 13:return a++,[3,11];case 14:c=0,l=A.nonPositionedInlineLevel,x.label=15;case 15:return c<l.length?(f=l[c],[4,this.renderStack(f)]):[3,18];case 16:x.sent(),x.label=17;case 17:return c++,[3,15];case 18:u=0,h=A.inlineLevel,x.label=19;case 19:return u<h.length?(f=h[u],[4,this.renderNode(f)]):[3,22];case 20:x.sent(),x.label=21;case 21:return u++,[3,19];case 22:p=0,g=A.zeroOrAutoZIndexOrTransformedOrOpacity,x.label=23;case 23:return p<g.length?(f=g[p],[4,this.renderStack(f)]):[3,26];case 24:x.sent(),x.label=25;case 25:return p++,[3,23];case 26:m=0,d=A.positiveZIndex,x.label=27;case 27:return m<d.length?(f=d[m],[4,this.renderStack(f)]):[3,30];case 28:x.sent(),x.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()},e.prototype.formatPath=function(A){var n=this;A.forEach(function(r,i){var s=dA(r)?r.start:r;i===0?n.ctx.moveTo(s.x,s.y):n.ctx.lineTo(s.x,s.y),dA(r)&&n.ctx.bezierCurveTo(r.startControl.x,r.startControl.y,r.endControl.x,r.endControl.y,r.end.x,r.end.y)})},e.prototype.renderRepeat=function(A,n,r,i){this.path(A),this.ctx.fillStyle=n,this.ctx.translate(r,i),this.ctx.fill(),this.ctx.translate(-r,-i)},e.prototype.resizeImage=function(A,n,r){var i;if(A.width===n&&A.height===r)return A;var s=(i=this.canvas.ownerDocument)!==null&&i!==void 0?i:document,a=s.createElement("canvas");a.width=Math.max(1,n),a.height=Math.max(1,r);var o=a.getContext("2d");return o.drawImage(A,0,0,A.width,A.height,0,0,n,r),a},e.prototype.renderBackgroundImage=function(A){return zt(this,void 0,void 0,function(){var n,r,i,s,a,o;return kt(this,function(c){switch(c.label){case 0:n=A.styles.backgroundImage.length-1,r=function(l){var u,h,p,B,X,q,T,D,I,g,B,X,q,T,D,m,d,f,x,v,y,b,E,U,I,C,B,Q,R,T,D,N,X,q,k,j,J,ie,Z,pe,O,Y;return kt(this,function(re){switch(re.label){case 0:if(l.type!==0)return[3,5];u=void 0,h=l.url,re.label=1;case 1:return re.trys.push([1,3,,4]),[4,i.context.cache.match(h)];case 2:return u=re.sent(),[3,4];case 3:return re.sent(),i.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(p=zc(A,n,[u.width,u.height,u.width/u.height]),B=p[0],X=p[1],q=p[2],T=p[3],D=p[4],I=i.ctx.createPattern(i.resizeImage(u,T,D),"repeat"),i.renderRepeat(B,I,X,q)),[3,6];case 5:Tb(l)?(g=zc(A,n,[null,null,null]),B=g[0],X=g[1],q=g[2],T=g[3],D=g[4],m=Ub(l.angle,T,D),d=m[0],f=m[1],x=m[2],v=m[3],y=m[4],b=document.createElement("canvas"),b.width=T,b.height=D,E=b.getContext("2d"),U=E.createLinearGradient(f,v,x,y),qf(l.stops,d).forEach(function(Ae){return U.addColorStop(Ae.stop,Tt(Ae.color))}),E.fillStyle=U,E.fillRect(0,0,T,D),T>0&&D>0&&(I=i.ctx.createPattern(b,"repeat"),i.renderRepeat(B,I,X,q))):Qb(l)&&(C=zc(A,n,[null,null,null]),B=C[0],Q=C[1],R=C[2],T=C[3],D=C[4],N=l.position.length===0?[hu]:l.position,X=nt(N[0],T),q=nt(N[N.length-1],D),k=Sb(l,X,q,T,D),j=k[0],J=k[1],j>0&&J>0&&(ie=i.ctx.createRadialGradient(Q+X,R+q,0,Q+X,R+q,j),qf(l.stops,j*2).forEach(function(Ae){return ie.addColorStop(Ae.stop,Tt(Ae.color))}),i.path(B),i.ctx.fillStyle=ie,j!==J?(Z=A.bounds.left+.5*A.bounds.width,pe=A.bounds.top+.5*A.bounds.height,O=J/j,Y=1/O,i.ctx.save(),i.ctx.translate(Z,pe),i.ctx.transform(1,0,0,O,0,0),i.ctx.translate(-Z,-pe),i.ctx.fillRect(Q,Y*(R-pe)+pe,T,D*Y),i.ctx.restore()):i.ctx.fill())),re.label=6;case 6:return n--,[2]}})},i=this,s=0,a=A.styles.backgroundImage.slice(0).reverse(),c.label=1;case 1:return s<a.length?(o=a[s],[5,r(o)]):[3,4];case 2:c.sent(),c.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(A,n,r){return zt(this,void 0,void 0,function(){return kt(this,function(i){return this.path(Md(r,n)),this.ctx.fillStyle=Tt(A),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(A,n,r,i){return zt(this,void 0,void 0,function(){var s,a;return kt(this,function(o){switch(o.label){case 0:return n<3?[4,this.renderSolidBorder(A,r,i)]:[3,2];case 1:return o.sent(),[2];case 2:return s=LF(i,r),this.path(s),this.ctx.fillStyle=Tt(A),this.ctx.fill(),a=DF(i,r),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(A){return zt(this,void 0,void 0,function(){var n,r,i,s,a,o,c,l,u=this;return kt(this,function(h){switch(h.label){case 0:return this.applyEffects(A.getEffects(2)),n=A.container.styles,r=!Qn(n.backgroundColor)||n.backgroundImage.length,i=[{style:n.borderTopStyle,color:n.borderTopColor,width:n.borderTopWidth},{style:n.borderRightStyle,color:n.borderRightColor,width:n.borderRightWidth},{style:n.borderBottomStyle,color:n.borderBottomColor,width:n.borderBottomWidth},{style:n.borderLeftStyle,color:n.borderLeftColor,width:n.borderLeftWidth}],s=XF(Or(n.backgroundClip,0),A.curves),r||n.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),Qn(n.backgroundColor)||(this.ctx.fillStyle=Tt(n.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(A.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),n.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var g=$a(A.curves),m=p.inset?0:KF,d=IF(g,-m+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(g),u.ctx.clip(),u.mask(d)):(u.mask(g),u.ctx.clip(),u.path(d)),u.ctx.shadowOffsetX=p.offsetX.number+m,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=Tt(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?Tt(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:a=0,o=0,c=i,h.label=3;case 3:return o<c.length?(l=c[o],l.style!==0&&!Qn(l.color)&&l.width>0?l.style!==2?[3,5]:[4,this.renderDashedDottedBorder(l.color,l.width,a,A.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return l.style!==3?[3,7]:[4,this.renderDashedDottedBorder(l.color,l.width,a,A.curves,3)];case 6:return h.sent(),[3,11];case 7:return l.style!==4?[3,9]:[4,this.renderDoubleBorder(l.color,l.width,a,A.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(l.color,a,A.curves)];case 10:h.sent(),h.label=11;case 11:a++,h.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(A,n,r,i,s){return zt(this,void 0,void 0,function(){var a,o,c,l,u,h,p,g,m,d,f,x,v,y,b,E,b,E;return kt(this,function(U){return this.ctx.save(),a=HF(i,r),o=Md(i,r),s===2&&(this.path(o),this.ctx.clip()),dA(o[0])?(c=o[0].start.x,l=o[0].start.y):(c=o[0].x,l=o[0].y),dA(o[1])?(u=o[1].end.x,h=o[1].end.y):(u=o[1].x,h=o[1].y),r===0||r===2?p=Math.abs(c-u):p=Math.abs(l-h),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=n<3?n*3:n*2,m=n<3?n*2:n,s===3&&(g=n,m=n),d=!0,p<=g*2?d=!1:p<=g*2+m?(f=p/(2*g+m),g*=f,m*=f):(x=Math.floor((p+m)/(g+m)),v=(p-x*g)/(x-1),y=(p-(x+1)*g)/x,m=y<=0||Math.abs(m-v)<Math.abs(m-y)?v:y),d&&(s===3?this.ctx.setLineDash([0,g+m]):this.ctx.setLineDash([g,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=n):this.ctx.lineWidth=n*2+1.1,this.ctx.strokeStyle=Tt(A),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(dA(o[0])&&(b=o[3],E=o[0],this.ctx.beginPath(),this.formatPath([new le(b.end.x,b.end.y),new le(E.start.x,E.start.y)]),this.ctx.stroke()),dA(o[1])&&(b=o[1],E=o[2],this.ctx.beginPath(),this.formatPath([new le(b.end.x,b.end.y),new le(E.start.x,E.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(A){return zt(this,void 0,void 0,function(){var n;return kt(this,function(r){switch(r.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Tt(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),n=RF(A),[4,this.renderStack(n)];case 1:return r.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(Dm),WF=function(t){return t instanceof vm||t instanceof Bm?!0:t instanceof gu&&t.type!==Xa&&t.type!==Wa},XF=function(t,e){switch(t){case 0:return $a(e);case 2:return bF(e);case 1:default:return Ja(e)}},jF=function(t){switch(t){case 1:return"center";case 2:return"right";case 0:default:return"left"}},YF=["-apple-system","system-ui"],$F=function(t){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?t.filter(function(e){return YF.indexOf(e)===-1}):t},JF=function(t){TA(e,t);function e(A,n){var r=t.call(this,A,n)||this;return r.canvas=n.canvas?n.canvas:document.createElement("canvas"),r.ctx=r.canvas.getContext("2d"),r.options=n,r.canvas.width=Math.floor(n.width*n.scale),r.canvas.height=Math.floor(n.height*n.scale),r.canvas.style.width=n.width+"px",r.canvas.style.height=n.height+"px",r.ctx.scale(r.options.scale,r.options.scale),r.ctx.translate(-n.x,-n.y),r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+n.width+"x"+n.height+" at "+n.x+","+n.y+") with scale "+n.scale),r}return e.prototype.render=function(A){return zt(this,void 0,void 0,function(){var n,r;return kt(this,function(i){switch(i.label){case 0:return n=Ql(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,A),[4,qF(n)];case 1:return r=i.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Tt(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(r,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(Dm),qF=function(t){return new Promise(function(e,A){var n=new Image;n.onload=function(){e(n)},n.onerror=A,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(t))})},ZF=function(){function t(e){var A=e.id,n=e.enabled;this.id=A,this.enabled=n,this.start=Date.now()}return t.prototype.debug=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,ks([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},t.prototype.getTime=function(){return Date.now()-this.start},t.prototype.info=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,ks([this.id,this.getTime()+"ms"],e))},t.prototype.warn=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,ks([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},t.prototype.error=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,ks([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},t.instances={},t}(),eT=function(){function t(e,A){var n;this.windowBounds=A,this.instanceName="#"+t.instanceCount++,this.logger=new ZF({id:this.instanceName,enabled:e.logging}),this.cache=(n=e.cache)!==null&&n!==void 0?n:new wF(this,e)}return t.instanceCount=1,t}(),tT=function(t,e){return e===void 0&&(e={}),AT(t,e)};typeof window<"u"&&Fm.setContext(window);var AT=function(t,e){return zt(void 0,void 0,void 0,function(){var A,n,r,i,s,a,o,c,l,u,h,p,g,m,d,f,x,v,y,b,U,E,U,I,C,B,Q,R,T,D,N,X,q,k,j,J,ie,Z,pe,O;return kt(this,function(Y){switch(Y.label){case 0:if(!t||typeof t!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(A=t.ownerDocument,!A)throw new Error("Element is not attached to a Document");if(n=A.defaultView,!n)throw new Error("Document is not attached to a Window");return r={allowTaint:(I=e.allowTaint)!==null&&I!==void 0?I:!1,imageTimeout:(C=e.imageTimeout)!==null&&C!==void 0?C:15e3,proxy:e.proxy,useCORS:(B=e.useCORS)!==null&&B!==void 0?B:!1},i=ml({logging:(Q=e.logging)!==null&&Q!==void 0?Q:!0,cache:e.cache},r),s={windowWidth:(R=e.windowWidth)!==null&&R!==void 0?R:n.innerWidth,windowHeight:(T=e.windowHeight)!==null&&T!==void 0?T:n.innerHeight,scrollX:(D=e.scrollX)!==null&&D!==void 0?D:n.pageXOffset,scrollY:(N=e.scrollY)!==null&&N!==void 0?N:n.pageYOffset},a=new an(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new eT(i,a),c=(X=e.foreignObjectRendering)!==null&&X!==void 0?X:!1,l={allowTaint:(q=e.allowTaint)!==null&&q!==void 0?q:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:c,copyStyles:c},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new Ud(o,t,l),h=u.clonedReferenceElement,h?[4,u.toIFrame(A,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=Y.sent(),g=mu(h)||nF(h)?IU(h.ownerDocument):Bo(o,h),m=g.width,d=g.height,f=g.left,x=g.top,v=nT(o,h,e.backgroundColor),y={canvas:e.canvas,backgroundColor:v,scale:(j=(k=e.scale)!==null&&k!==void 0?k:n.devicePixelRatio)!==null&&j!==void 0?j:1,x:((J=e.x)!==null&&J!==void 0?J:0)+f,y:((ie=e.y)!==null&&ie!==void 0?ie:0)+x,width:(Z=e.width)!==null&&Z!==void 0?Z:Math.ceil(m),height:(pe=e.height)!==null&&pe!==void 0?pe:Math.ceil(d)},c?(o.logger.debug("Document cloned, using foreign object rendering"),U=new JF(o,y),[4,U.render(h)]):[3,3];case 2:return b=Y.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+f+","+x+" with size "+m+"x"+d+" using computed rendering"),o.logger.debug("Starting DOM parsing"),E=_m(o,h),v===E.styles.backgroundColor&&(E.styles.backgroundColor=sn.TRANSPARENT),o.logger.debug("Starting renderer for element at "+y.x+","+y.y+" with size "+y.width+"x"+y.height),U=new zF(o,y),[4,U.render(E)];case 4:b=Y.sent(),Y.label=5;case 5:return(!((O=e.removeContainer)!==null&&O!==void 0)||O)&&(Ud.destroy(p)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,b]}})})},nT=function(t,e,A){var n=e.ownerDocument,r=n.documentElement?zi(t,getComputedStyle(n.documentElement).backgroundColor):sn.TRANSPARENT,i=n.body?zi(t,getComputedStyle(n.body).backgroundColor):sn.TRANSPARENT,s=typeof A=="string"?zi(t,A):A===null?sn.TRANSPARENT:4294967295;return e===n.documentElement?Qn(r)?Qn(i)?s:i:r:s};const Nl=(t,e)=>{tT(t).then(function(A){const n=A.toDataURL("image/png"),r=document.createElement("a");r.href=n,r.download=e,r.click()})},Hm=({checked:t=!1,text:e="选项",pop:A,onChange:n})=>w.jsxs(rT,{children:[w.jsxs(iT,{onClick:()=>{n==null||n()},children:[w.jsx(sT,{className:`${t?"checked":""}`,children:w.jsx(bg,{size:10,strokeWidth:0,fill:"var(--color-bg-white)"})}),e]}),A&&w.jsxs(aT,{className:"hover-pop",children:[w.jsx(au,{stroke:"var(--color-text-4)"}),w.jsx(hr,{content:A,theme:"dark",style:{maxWidth:"200px"}})]})]}),rT=ge.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`,iT=ge.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`,sT=ge.div`
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
`,aT=ge.div`
  position: relative;
  height: 16px;
`,Ea=({data:t,placeholder:e="请选择",selected:A="0",width:n="100px",title:r,info:i,onChange:s,className:a="",style:o})=>{const[c,l]=W.useState(!1),[u,h]=W.useState(A);return w.jsxs(oT,{style:{width:typeof n=="number"?`${n}px`:n,...o},className:a,children:[r&&w.jsx(Rt,{title:r,type:"p",info:i}),w.jsxs(cT,{className:`${c?"show":""}`,onClick:()=>l(!c),children:[w.jsx("p",{className:`${u!=="0"?"land-select-trigger":"land-select-placeholder"}`,children:u==="0"?e:t==null?void 0:t.filter(p=>p.id===u)[0].value}),w.jsx(Sg,{})]}),w.jsx(lT,{className:`land-select-results ${c?"show":""}`,children:w.jsx(uT,{children:t==null?void 0:t.map(p=>w.jsx(hT,{className:`${u===p.id?"selected":""}`,onClick:()=>{h(p.id),s==null||s(p),l(!1)},children:p.value},p.id))})})]})},oT=ge.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`,cT=ge.div`
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
    font-size: 14px;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  svg {
    transition: transform var(--transition-15) ease;
  }
  &.show svg {
    transform: rotate(180deg);
  }
`,lT=ge.div`
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
`,uT=ge.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`,hT=ge.li`
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
  &.selected {
    background-color: var(--color-bg-3);
  }
`,fT=({url:t})=>{const e=W.useRef(null),A=W.useRef(null),[n,r]=W.useState({w:200,h:200,ratio:1});W.useEffect(()=>{if(A.current){const a=A.current.getBoundingClientRect();r({w:a.width,h:a.height,ratio:a.width/a.height})}},[t]);const[i,s]=W.useState("s");return W.useEffect(()=>{if(!e.current)return;const a=c=>{c.forEach(l=>{const{width:u,height:h}=l.contentRect;u/h>n.ratio?s("h"):u/h<n.ratio?s("v"):s("s")})},o=new ResizeObserver(a);return o.observe(e.current),()=>o.disconnect()}),w.jsx("div",{ref:e,className:"flex items-center justify-center width-100 height-100",children:w.jsx("img",{ref:A,src:t,className:`radius-8 ${i==="h"?"height-100":"width-100"}`})})},dT=({align:t="right",onClick:e,children:A})=>w.jsxs(pT,{className:"relative",children:[A,w.jsx("div",{className:"absolute cursor-pointer top-0 hover-icon",onClick:e,style:{left:t==="left"?"0px":"100%"},children:w.jsx(Mg,{fill:"var(--color-red-6)"})})]}),pT=ge.div`
  .hover-icon {
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
  &:hover {
    .hover-icon {
      opacity: 1;
      pointer-events: all;
    }
  }
`,gT="colorcard.jpeg",la=[{id:"1",value:"#b9a78f"},{id:"2",value:"#7e6d5b"},{id:"3",value:"#e5e6eb"},{id:"4",value:"#473f3c"},{id:"5",value:"#623726"},{id:"6",value:"#cab8ba"}],mT=({})=>{const[t,e]=W.useState(""),[A,n]=W.useState([]),[r,i]=W.useState();W.useEffect(()=>{let B={w:200,h:200,ratio:1},Q=new Image;Q.src=t,B={w:Q.width,h:Q.height,ratio:Q.width/Q.height},i(B)},[t]);const s=()=>{if(A.length>=0)if(A.length<8){let B="";window.EyeDropper||h(!0,"你的浏览器不支持此功能"),new EyeDropper().open().then(R=>{B=R.sRGBHex,n([...A,{id:`${B}`,value:B}])}).catch(()=>{h(!0,"出错了～")})}else h(!0,"已达上限～长按删除后重试");else h(!0,"请先上传图片～")},a=B=>{const Q=A.filter(R=>R.id!==B);n(Q)},[o,c]=W.useState(!1),[l,u]=W.useState(""),h=(B,Q)=>{u(Q),c(B);const R=setTimeout(()=>{c(!1),clearTimeout(R)},1e3)},[p,g]=W.useState(10),[m,d]=W.useState(!0);W.useEffect(()=>{p>0?d(!0):d(!1)},[p]),W.useEffect(()=>{g(m?p||10:0)},[m]);const[f,x]=W.useState(6);W.useEffect(()=>{U(t)},[p,m,f]);const v=B=>{const Q=fe(`rgb(${B[0]},${B[1]},${B[2]})`).toHsv();return Q.s<=p/100||Q.v<=p/100};function y(B,Q,R=32){if(v(B))return!0;const T=B[0]-Q[0],D=B[1]-Q[1],N=B[2]-Q[2];return Math.sqrt(T*T+D*D+N*N)<R}const b=B=>{const Q=document.createElement("canvas"),R=Q.getContext("2d");return Q.width=B.width,Q.height=B.height,R==null||R.drawImage(B,0,0,B.width,B.height),R==null?void 0:R.getImageData(0,0,B.width,B.height).data},E=B=>{const Q=b(B);if(!Q)return;const R=new Map;for(let N=0;N<Q.length;N+=4){const q=[Q[N],Q[N+1],Q[N+2]].join(",");R.has(q)?R.set(q,R.get(q)+1):R.set(q,1)}let T=Array.from(R.entries()).sort((N,X)=>X[1]-N[1]).map(N=>N[0].split(",").map(X=>parseInt(X)));const D=[];for(const N of T)if(!D.some(X=>y(N,X,32))&&!v(N)&&D.push(N),D.length>=f)break;return D},U=B=>{const Q=new Image;Q.src=B,Q.onload=()=>{var T;const R=(T=E(Q))==null?void 0:T.map(D=>({id:D[0]+D[1]+D[2],value:`#${fe(`rgb(${D[0]},${D[1]},${D[2]})`).toHex()}`}));n(R)}},[I,C]=W.useState(["","","","","",""]);return w.jsxs("div",{className:"flex column items-start gap-32 px-24 pt-32 mb-24",children:[w.jsxs(wt,{column:!0,gap:24,children:[w.jsxs(wt,{column:!0,gap:8,children:[w.jsx(Rt,{title:"Step 01: 上传图片",type:"h3"}),w.jsx(Rt,{title:"点击或拖拽来上传图片，以像素为单位对颜色计数",type:"p",className:"color-gray-4"})]}),w.jsx("div",{className:"width-100",style:{height:"240px"},children:w.jsx(lu,{fileType:"image/*",onUpload:B=>{e(B),n([])},desc:"点击上传图片或将图片拖拽于此",className:"radius-12",children:t&&w.jsx(fT,{url:t})})})]}),w.jsxs("div",{className:"flex flex-wrap width-100",children:[w.jsxs("div",{children:[w.jsx(Rt,{title:"Step 02: 取色配置",type:"h3"}),w.jsx(Rt,{title:w.jsxs(w.Fragment,{children:["【过滤颜色】设置过滤中性色的范围",w.jsx("br",{}),"【提取数量】可一次提取6、8、10个颜色",w.jsx("br",{}),"【编辑颜色】支持删除、添加、修改提取的颜色列表"]}),type:"p",className:"color-gray-4 mt-8"}),(A==null?void 0:A.length)!==0&&w.jsxs("div",{className:"flex gap-24 mt-12",children:[w.jsxs("div",{className:"flex column gap-8",style:{width:"124px"},children:[w.jsx(Hm,{text:"过滤中性色",checked:m,onChange:()=>{d(!m)},pop:"勾选后将自动过滤饱和度或纯度低于 10 的颜色<br/>支持输入自定义过滤范围（≤35）"}),w.jsx(Vi,{type:"number",max:35,min:0,step:5,value:String(p),onChange:B=>g(Number(B))})]}),w.jsx(Ea,{title:"数量",width:124,data:[{id:"1",value:"4"},{id:"2",value:"6"},{id:"3",value:"8"}],selected:"2",onChange:B=>{x(Number(B.value))}})]})]}),w.jsxs("div",{className:"relative flex items-center justify-center flex-wrap gap-12 p-24 flex-1",style:{minWidth:"325px"},children:[A.length===0&&t&&w.jsx("div",{className:"absolute",style:{zIndex:1},children:w.jsx(sr,{text:"提取颜色",type:"background",onClick:()=>{U(t)}})}),A.length===0?la==null?void 0:la.map((B,Q)=>w.jsx(Td,{className:"flex column relative justify-center gap-4 disabled",children:w.jsx(Fn,{value:B.value,showDrop:!1})},Q)):A==null?void 0:A.map((B,Q)=>w.jsx(dT,{onClick:()=>a(B.id),children:w.jsx(Td,{className:"flex column relative justify-center gap-4",children:w.jsx(Fn,{value:B.value,showDrop:!1,onChange:R=>{const T=A.map(D=>({id:D.id,value:D.id==B.id?`#${fe(R).toHex()}`:D.value}));n(T)}})},Q)})),A.length!==0&&A.length<8&&w.jsxs(Pm,{className:"StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop",onClick:()=>s(),children:[w.jsx(zy,{}),w.jsx(hr,{content:"点击吸取颜色",theme:"dark"})]})]})]}),w.jsxs(wt,{column:!0,gap:8,children:[w.jsx(Rt,{title:"Step 03: 下载 & 保存色卡",type:"h3"}),w.jsx(Rt,{title:"调整颜色至满意值后，点击下载色卡，即可保存到本地",type:"p",className:"color-gray-4"})]}),(A==null?void 0:A.length)===0?w.jsx(Qd,{className:"grid mx-32 gap-24 disabled",length:6,children:Array.from({length:6}).map((B,Q)=>w.jsxs("div",{className:"flex column items-center gap-12",children:[w.jsxs(Id,{className:`relative p-24 flex gap-4 width-100 border color-card card-${Q} column`,width:1e3,height:667,ratio:1.5,children:[w.jsx("div",{className:"color-img",children:w.jsx("img",{src:gT})}),w.jsx("div",{className:"color-list grid gap-4",children:(A==null?void 0:A.length)===0?la.map(R=>w.jsxs("div",{className:"color-item flex column items-center gap-4",children:[w.jsx("div",{style:{background:R.value},className:"width-100 flex-1"},R.id),w.jsx("p",{children:R.value})]})):A.map(R=>w.jsxs("div",{className:"color-item flex column items-center gap-4",children:[w.jsx("div",{style:{background:R.value},className:"width-100 flex-1"},R.id),w.jsx("p",{children:R.value})]}))})]}),w.jsx(sr,{type:"background",className:"width-100",text:"下载色卡",icon:w.jsx(Ef,{})})]}))}):w.jsx(Qd,{className:"grid mx-32 gap-24",length:A.length,children:Array.from({length:6}).map((B,Q)=>w.jsxs("div",{className:"flex column items-center gap-12",children:[w.jsxs(Id,{className:`relative p-24 flex gap-4 width-100 border color-card card-${Q} ${r.ratio<1?"":"column"}`,width:r.w,height:r.h,ratio:r.ratio,children:[w.jsx("div",{className:"color-img",children:w.jsx("img",{src:t})}),w.jsx("div",{className:"color-list grid gap-4",children:A.map(R=>w.jsxs("div",{className:"color-item flex column items-center gap-4",children:[w.jsx("div",{style:{background:R.value},className:"width-100 flex-1"},R.id),w.jsx("p",{children:R.value})]}))})]}),w.jsxs("div",{className:"width-100 flex gap-12",children:[w.jsx(Vi,{placeholder:"自定义色卡名称",value:I[Q],onChange:R=>{const T=I.map((D,N)=>N===Q?R:D);C(T)},className:"flex-1"}),w.jsx(sr,{type:"background",className:"flex-1",text:"下载色卡",icon:w.jsx(Ef,{}),onClick:()=>{const R=document.querySelectorAll(".color-card");Nl(R[Q],I[Q])}})]})]}))}),w.jsx(Ig,{show:o,text:l})]})},Td=ge.div`
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,Pm=ge.div`
  width: 48px;
  height: 48px;
  color: var(--color-text-3);
`,Qd=ge.div`
  width: 100%;
  grid-template-columns: ${t=>`repeat(auto-fit, minmax(${t.length*40+48}px, 1fr))`};
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,Id=ge.div`
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
      grid-auto-flow: ${t=>t.ratio>=1?"column":"row"};
      width: ${t=>t.ratio>=1?"auto":"64px"};
      height: ${t=>t.ratio>=1?"32px":"auto"};
      flex-shrink: 0;
    }
    .color-item {
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
      height: ${t=>t.ratio>=1?"20px":"auto"};
    }
  }
  &.card-3 {
    padding-bottom: ${t=>t.ratio>=1?"60px":"24px"};
    .color-img {
      width: ${t=>t.ratio>=1?"100%":"calc(100% - 68px)"};
    }
    .color-list {
      position: absolute;
      left: ${t=>t.ratio>=1?"50%":""};
      bottom: ${t=>t.ratio>=1?"12px":""};
      right: ${t=>t.ratio>=1?"":"12px"};
      top: ${t=>t.ratio>=1?"":"50%"};
      padding: 12px;
      width: ${t=>t.ratio>=1?"60%":"120px"};
      height: ${t=>t.ratio>=1?"84px":"60%"};
      border-radius: var(--radius-4);
      background-color: var(--color-bg-white);
      transform: ${t=>t.ratio>=1?"translateX(-50%)":"translateY(-50%)"};
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
      transform: ${t=>t.ratio>=1?"rotate(90deg)":""};
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
    padding: ${t=>t.ratio>=1?"42px 24px":"24px 36px"};
    .color-img {
      width: ${t=>t.ratio>=1?"100%":"calc(100% - 44px)"};
    }
    .color-list {
      display: flex;
      justify-content: center;
      flex-direction: ${t=>t.ratio>=1?"row":"column"};
      gap: 0;
      position: absolute;
      left: ${t=>t.ratio>=1?"":"50%"};
      bottom: ${t=>t.ratio>=1?"64px":"50%"};
      height: 40px;
      width: ${t=>t.ratio>=1?"calc(100% - 48px)":"48px"};
      transform: ${t=>t.ratio>=1?"translateX(4px)":"translate(-50%,50%)"};
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
`;ge.div`
  
`;const Nm=[{id:"1",name:"中国传统颜色",data:[{id:"1",name:"朱砂",value:"#ff461f"},{id:"1",name:"赤",value:"#c3272b"},{id:"1",name:"胭脂",value:"#c3272b"},{id:"1",name:"石榴红",value:"#f20c00"},{id:"1",name:"殷红",value:"#be002f"},{id:"1",name:"枣红",value:"#c32136"}]}],BT=({})=>{const[t,e]=W.useState([]),[A,n]=W.useState(!1),[r,i]=W.useState("0"),[s,a]=W.useState("1"),[o,c]=W.useState("1"),[l,u]=W.useState("0"),h=W.useMemo(()=>{if(t.length===0||o==="0"||s==="0")return!0},[t,o,s]),p=W.useMemo(()=>o==="1"?[{id:"1",value:"2"}]:[{id:"1",value:"2"},{id:"2",value:"3"},{id:"3",value:"4"}],[o]),g=W.useMemo(()=>{if(o==="1")return[{id:"1",url:"/src/assets/colorTemplates/template-text-1.png"}]},[o,s]),[m,d]=W.useState([]),f=()=>{let y=[];for(let b=0;b<t.length;b++)for(let E=b+1;E<t.length;E++){const U=`#${fe(t[b].value).toHex()}`,I=`#${fe(t[E].value).toHex()}`,C=(fe(t[b].value).toHsl().l+.05)/(fe(t[E].value).toHsl().l+.05);y.push([{color:U,contrast:C.toFixed(2)},{color:I}])}d(y)},[x,v]=W.useState(!1);return w.jsxs(vT,{className:"flex items-center height-100",children:[w.jsxs(wT,{className:"flex-1 flex column gap-24 pl-24 pr-32 pt-32 pb-24 height-100 overflow-auto",children:[w.jsxs(wt,{column:!0,gap:12,children:[w.jsxs(wt,{column:!0,gap:8,children:[w.jsx(Rt,{title:"Step 01: 选取颜色",type:"h3"}),w.jsx(Rt,{title:"输入自定义颜色，或从颜色库中选取颜色（支持 1-10 个颜色）",type:"p",className:"color-gray-4"})]}),w.jsxs("div",{className:"flex column items-center gap-12 p-12 width-100 border radius-6",children:[t.length>0&&w.jsx("div",{className:"flex flex-wrap both-center gap-12 ",children:w.jsx(w.Fragment,{children:t==null?void 0:t.map(y=>w.jsxs(Rd,{className:"relative",onClick:()=>i(y.value),children:[w.jsx(Fn,{value:y.value,input:!1,showDrop:!1,pop:"标记为主色",active:r===y.value}),w.jsx("div",{className:"absolute cursor-pointer close-icon",onClick:()=>{const b=t.filter(E=>E.id!==y.id);e(b)},children:w.jsx(Mg,{fill:"var(--color-red-6)"})})]}))})}),(t==null?void 0:t.length)<10&&w.jsx(Fn,{showList:!1,showOpacity:!1,onChange:y=>e([...t,{id:y,value:y}]),children:w.jsx(Pm,{className:"StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer",children:w.jsx(Gy,{})})})]}),w.jsxs("div",{className:"relative flex flex-wrap both-center gap-12 p-12 pb-24 width-100 border radius-6",children:[w.jsx(_T,{className:`width-100 ${A?"show":""}`,children:Nm.map(y=>w.jsxs(W.Fragment,{children:[w.jsxs("p",{className:"fs-14 mb-8 color-gray-3",children:["【",y.name,"】"]}),w.jsx(wt,{wrap:!0,gap:12,children:y.data.map(b=>w.jsx(Rd,{onClick:()=>e([...t,{id:b.value,value:b.value}]),children:w.jsx(Fn,{size:36,value:b.value,input:b.name,showDrop:!1,pop:b.value})}))})]},y.id))}),w.jsx(CT,{className:"StyleToggleBtn absolute flex both-center px-12 py-4 border radius-12 cursor-pointer bg-hover-gray",onClick:()=>n(!A),children:w.jsx(Sg,{stroke:"var(--color-text-4)"})})]})]}),w.jsxs(wt,{column:!0,gap:12,children:[w.jsx(Rt,{title:"Step 02: 设置配色数量与类型",type:"h3"}),w.jsxs(wt,{gap:12,children:[w.jsx(Ea,{title:"类型",info:`选择生成的配色类型
类型的选择影响数量与模板的选择`,placeholder:"请选择",width:124,data:[{id:"1",value:"文字"},{id:"2",value:"色块"},{id:"3",value:"渐变"}],selected:o,onChange:y=>{c(y.id)},className:"flex-1"}),w.jsx(Ea,{title:"数量",info:"类型",placeholder:"请选择",width:124,data:p,selected:s,onChange:y=>{a(y.id)},className:"flex-1"}),w.jsx(Ea,{title:"比例",info:"类型",placeholder:"请选择",data:[{id:"1",value:"文字"},{id:"2",value:"6"},{id:"3",value:"8"}],selected:l,onChange:y=>{u(y.id)},className:"flex-1"})]})]}),w.jsxs(wt,{column:!0,gap:12,children:[w.jsxs(wt,{column:!0,gap:8,children:[w.jsx(Rt,{title:"Step 03: 设置配色模版",type:"h3"}),w.jsx(Rt,{title:"根据色彩占比等因素选择合适的配色模板",type:"p",className:"color-gray-4"})]}),w.jsx(Ld,{className:"grid gap-8 width-100 p-12 border",children:g==null?void 0:g.map(y=>w.jsx("div",{className:"cursor-pointer",style:{aspectRatio:1},children:w.jsx("img",{src:y.url,height:"100%"})}))})]})]}),w.jsx(ET,{text:"立即生成",type:"background",status:"primary",disabled:h,onClick:()=>{f(),v(!1)}}),w.jsxs(xT,{className:"flex-1 pl-32 pr-24 height-100 py-32 border-left overflow-auto",style:{flexShrink:0},children:[m.length!==0&&w.jsx("div",{className:"flex gap-12 mb-12",children:w.jsx(Hm,{text:"自动过滤",pop:"勾选后将过滤掉对比度不理想的结果",checked:x,onChange:()=>{v(!x),d(m.filter(y=>y[0].contrast>4.5))}})}),w.jsx(Ld,{className:"grid gap-12 width-100",children:m.map(y=>w.jsxs(W.Fragment,{children:[o==="1"&&w.jsx("div",{className:"flex",children:Array.from({length:2}).map((b,E)=>w.jsxs(yT,{className:"flex column",children:[w.jsxs("div",{className:"p-12 flex-2",style:{backgroundColor:y[E].color,color:y[1-E].color},children:[w.jsx("p",{className:"fs-12",children:"The quick, brown, cerise red, and energy yellow fox jumped over the lazy dog."}),w.jsxs("p",{className:"fs-12",children:[y[0].color," ",y[1].color]})]}),w.jsxs("div",{className:"flex-1 flex items-center gap-4 px-12 color-gray-3 bg-gray",children:[w.jsx("p",{style:{color:y[0].contrast>4.5?"var(--color-green-6)":"var(--color-red-6)"},children:y[0].contrast>4.5?"success":"fail"}),w.jsxs("p",{className:"fs-12",children:["对比度：",w.jsx("span",{className:"fs-16 fw-600",children:y[0].contrast}),":1"]})]})]}))}),o==="3"&&w.jsx("div",{style:{aspectRatio:1,background:`linear-gradient(to bottom, ${y[0].color} 0%, ${y[1].color} 100%)`}})]}))})]})]})},vT=ge.div`
  height: calc(100vh - 64px);
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
  }
`,wT=ge.div`
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`,Rd=ge.div`
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
`,xT=ge.div`
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`,_T=ge.div`
  height: 84px;
  & + .StyleToggleBtn svg {
    transition: transform var(--transition-15) ease;
  }
  &.show {
    height: fit-content;
    overflow: visible;
    & + .StyleToggleBtn svg {
      transform: rotate(180deg);
    }
  }
`,CT=ge.div`
  bottom: 0;
  left: 50%;
  background-color: var(--color-bg-white);
  transform: translate(-50%, 50%);
`,Ld=ge.div`
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @media screen and (max-width: 800px) {
    width: calc(100vw - 48px);
  }
`,ET=ge(sr)`
  width: 36px;
  font-weight: 500;
  text-align: center;
  margin-left: -18px;
  margin-right: -18px;
  @media screen and (max-width: 800px) {
    width: calc(100vw - 48px);
    margin: 12px 24px;
  }
`,yT=ge.div`
  aspect-ratio: 0.75;
  line-height: 1.15em;
  animation: showin 0.3s linear 0s 1;
  @keyframes showin {
    from{
      filter: blur(2px);
    }
    to{
      filter: blur(0px);
    }
  }
`,UT=({})=>w.jsx(ST,{className:"width-100 p-24",children:Nm.map(t=>w.jsxs(W.Fragment,{children:[w.jsxs("p",{className:"fs-14 mb-8 color-gray-3",children:["【",t.name,"】"]}),w.jsx(wt,{wrap:!0,gap:12,children:t.data.map(e=>w.jsx(Fn,{size:48,value:e.value,input:e.name,showDrop:!1,pop:e.value}))})]},t.id))}),ST=ge.div`
  
`,bT=({checked:t=1,data:e=[{value:1,label:"选项1"},{value:2,label:"选项2"},{value:3,label:"选项3"}],titleProps:A,onChange:n})=>w.jsxs("div",{children:[A&&w.jsx(Rt,{...A}),w.jsx(MT,{className:"land-radio-container",children:e==null?void 0:e.map(r=>w.jsxs(W.Fragment,{children:[w.jsxs(FT,{onClick:()=>{n==null||n(r)},children:[w.jsx(TT,{className:`${t===r.value?"checked":""}`,children:w.jsx(bg,{size:10,strokeWidth:0,fill:"var(--color-bg-white)"})}),r.label]}),r.pop&&w.jsxs(QT,{className:"hover-pop",children:[w.jsx(au,{stroke:"var(--color-text-4)"}),w.jsx(hr,{content:r.pop,theme:"dark",style:{maxWidth:"200px"}})]})]}))})]}),MT=ge.div`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  margin-top: 12px;
`,FT=ge.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`,TT=ge.div`
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
`,QT=ge.div`
  position: relative;
  height: 16px;
`,IT=({})=>{const t=W.useRef(null),e=W.useRef(null),[A,n]=W.useState(""),[r,i]=W.useState(50),[s,a]=W.useState(!1),o=u=>{if(!e.current||!s)return;const h=e.current.getBoundingClientRect(),p=u.clientX-h.left;i(Math.round(p/h.width*100))},[c,l]=W.useState(1);return W.useEffect(()=>{if(!t.current)return;const u=t==null?void 0:t.current;var h=new Image;h.src=A,h.crossOrigin="Anonymous",h.onload=function(){var f;u.width=h.width,u.height=h.height,(f=u.getContext("2d"))==null||f.drawImage(h,0,0,h.width,h.height)};var p=u.getContext("2d");if(p){for(var g=p.getImageData(0,0,u.width,u.width),m=g.data,d=0;d<m.length;d+=4)m[d]=255-m[d],m[d+1]=255-m[d+1],m[d+2]=255-m[d+2];p.putImageData(g,0,0)}},[A]),w.jsxs("div",{className:"flex column items-start gap-32 px-24 pt-32 mb-24",children:[w.jsxs(wt,{column:!0,gap:24,children:[w.jsxs(wt,{column:!0,gap:8,children:[w.jsx(Rt,{title:"Step 01: 上传图片",type:"h3"}),w.jsx(Rt,{title:"点击或拖拽来上传图片，",type:"p",className:"color-gray-4"})]}),w.jsx("div",{className:"width-100",style:{height:"120px"},children:w.jsx(lu,{fileType:"image/*",onUpload:u=>{n(u)},desc:"点击上传图片或将图片拖拽于此",className:"radius-12"})})]}),w.jsx(bT,{checked:c,data:[{value:1,label:"反色"},{value:2,label:"换色"},{value:3,label:"滤色"}],onChange:u=>l(u.value),titleProps:{title:"类型",type:"p",info:"ooo"}}),w.jsxs(RT,{ref:e,className:"StyleImgContainer relative border-dash",onMouseUp:()=>a(!1),onMouseMove:u=>o(u),style:{backgroundImage:A?`url(${A})`:"url('colorcard-contrast.png')",opacity:A?1:.2},children:[A&&w.jsx("div",{className:"mask-img-wrap width-100 height-100 absolute flex justify-start items-center overflow-hidden",style:{width:`${r}%`},children:w.jsx("canvas",{ref:t,height:"100%",className:"mask-canvas opacity-0"})}),A&&w.jsx("div",{className:"mask-thumb absolute",style:{left:`${r}%`},onMouseUp:()=>a(!1),onMouseDown:()=>a(!0)})]}),w.jsxs(wt,{gap:12,justify:"center",className:"width-100",children:[w.jsx(sr,{text:"下载对比图",onClick:()=>{const u=document.querySelector(".StyleImgContainer");Nl(u,"img-contrast")}}),w.jsx(sr,{text:"下载转换图",type:"background",onClick:()=>{const u=document.querySelector(".mask-img");Nl(u,"img-contrasted")}})]})]})},RT=ge.div`
  width: calc(100vw  - 48px);
  height: 600px;
  max-height: calc(100vh - 317px);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  .mask-img-wrap{
    top: 0;
    left: 0;
  }
  /* .mask-img{
    width: calc(100vw  - 48px);
    mix-blend-mode: color-burn;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  } */
  .mask-thumb{
    top: -4px;
    width: 2px;
    height: calc(100% + 8px);
    border-radius: 2px;
    background-color: var(--color-primary-6);
    transform: translateX(-50%);
    cursor: ew-resize;
  }
  img{
    cursor: none;
  }
`,Dd=({})=>{const[t,e]=W.useState(1);return w.jsxs(ii,{children:[w.jsx(ou,{logo:w.jsx("p",{children:"❤️💛🩵💜"}),name:w.jsx(Rt,{title:"Colors",type:"h2"}),align:"end",menuProps:{data:[{key:1,title:"图片取色",clickType:lA.SELF},{key:2,title:"自动配色",clickType:lA.SELF},{key:3,title:"图片换色",clickType:lA.SELF},{key:4,title:"颜色库",clickType:lA.SELF}],actived:t,handleChangeTab:(A,n)=>n===lA.SELF&&e(A)}}),w.jsx(ii,{children:w.jsxs(cu,{children:[t===1&&w.jsx(mT,{}),t===2&&w.jsx(BT,{}),t===3&&w.jsx(IT,{}),t===4&&w.jsx(UT,{})]})})]})},LT=({children:t,style:e,className:A})=>w.jsx(DT,{className:`land-footer ${A}`,style:e,children:t}),DT=ge.footer`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`,HT=({})=>w.jsx("div",{children:"Coloring"}),PT=({})=>w.jsx("div",{children:"Chart"}),NT=({})=>{const[t,e]=W.useState(20),[A,n]=W.useState(20),[r,i]=W.useState(Array.from({length:t*A}).map(s=>"transparent"));return w.jsx(OT,{className:"p-24",children:w.jsxs(kT,{className:"relative grid",x:t,y:A,children:[r==null?void 0:r.map((s,a)=>w.jsx(GT,{className:`${a<t?"":"-mt-1"} ${a%32?"-ml-1":""}`,style:{backgroundColor:s}})),w.jsx("div",{className:"line-x"}),w.jsx("div",{className:"line-y"}),w.jsx("div",{className:"grid-sub fs-14",children:`${t} x ${A}`})]})})},OT=ge.div``,kT=ge.div`
  margin: 24px auto;
  width: 540px;
  height: ${t=>`${540*t.x/t.y}px`};
  grid-template-columns: ${t=>`repeat(${t.x}, auto)`};
  .line-x,
  .line-y {
    position: absolute;
    background-color: var(--color-primary-2);
    transition: background-color var(--transition-15) ease;
    &:hover {
      background-color: var(--color-primary-6);
    }
    &:active {
      background-color: var(--color-primary-7);
    }
  }
  .line-x {
    right: 0;
    width: 2px;
    height: 100%;
    cursor: ew-resize;
  }
  .line-y {
    bottom: 0;
    width: 100%;
    height: 2px;
    cursor: ns-resize;
  }
  .grid-sub {
    position: absolute;
    height: 24px;
    bottom: -30px;
    left: 0;
    color: var(--color-text-5);
  }
`,GT=ge.span`
  border: 1px solid var(--color-border-2);
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
`,VT=({})=>{const[t,e]=W.useState(1);return w.jsxs(ii,{children:[w.jsx(ou,{logo:w.jsx("p",{children:"😍😍😍😍"}),name:w.jsx(Rt,{title:"Crochet",type:"h2"}),align:"end",menuProps:{data:[{key:1,title:"款式",clickType:lA.SELF},{key:2,title:"配色",clickType:lA.SELF},{key:3,title:"图解",clickType:lA.SELF}],actived:t,handleChangeTab:(A,n)=>n===lA.SELF&&e(A)}}),w.jsx(ii,{children:w.jsxs(cu,{children:[t===1&&w.jsx(NT,{}),t===2&&w.jsx(HT,{}),t===3&&w.jsx(PT,{})]})}),w.jsx(LT,{children:w.jsx(wt,{bothCenter:!0,className:"width-100 color-gray-4",children:"@suminhan"})})]})},KT=({})=>{const[t,e]=W.useState("#fffff"),[A,n]=W.useState("#0d0d0d"),r=W.useMemo(()=>t==="#fff"||t==="#ffffff"||t==="#FFF"||t==="#FFFFFF",[t]);return w.jsxs(zT,{className:"width-100 height-100 flex",children:[w.jsx("div",{className:`flex-1 height-100 ${r?"border-right":""}`,style:{background:t,color:A},children:"一些测试文字"}),w.jsxs(wt,{column:!0,className:"flex-1 p-24",align:"center",children:[w.jsx("div",{className:"flex bg-gray",style:{width:"100%",height:"320px"}}),w.jsxs(wt,{children:[w.jsx(Fn,{size:120,value:A,onChange:i=>n(i)}),w.jsx(Fn,{size:120,value:t,onChange:i=>e(i)})]})]})]})},zT=ge.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;var oA={},Yi=function(){return Yi=Object.assign||function(t){for(var e,A=1,n=arguments.length;A<n;A++){e=arguments[A];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Yi.apply(this,arguments)};function Xt(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var bo={exports:{}},Mi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function WT(){if(Hd)return Mi;Hd=1;var t=BA,e=Symbol.for("react.element"),A=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(a,o,c){var l,u={},h=null,p=null;c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),o.ref!==void 0&&(p=o.ref);for(l in o)n.call(o,l)&&!i.hasOwnProperty(l)&&(u[l]=o[l]);if(a&&a.defaultProps)for(l in o=a.defaultProps,o)u[l]===void 0&&(u[l]=o[l]);return{$$typeof:e,type:a,key:h,ref:p,props:u,_owner:r.current}}return Mi.Fragment=A,Mi.jsx=s,Mi.jsxs=s,Mi}(function(t){t.exports=WT()})(bo);const XT=bo.exports.Fragment,Xn=bo.exports.jsx,jT=bo.exports.jsxs;var qt=function(){return qt=Object.assign||function(t){for(var e,A=1,n=arguments.length;A<n;A++){e=arguments[A];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},qt.apply(this,arguments)};function Za(t,e,A){if(A||arguments.length===2)for(var n=0,r=e.length,i;n<r;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}var st="-ms-",$i="-moz-",$e="-webkit-",Om="comm",Mo="rule",Bu="decl",YT="@import",km="@keyframes",$T="@layer",Gm=Math.abs,vu=String.fromCharCode,Ol=Object.assign;function JT(t,e){return It(t,0)^45?(((e<<2^It(t,0))<<2^It(t,1))<<2^It(t,2))<<2^It(t,3):0}function Vm(t){return t.trim()}function nn(t,e){return(t=e.exec(t))?t[0]:t}function ke(t,e,A){return t.replace(e,A)}function ya(t,e,A){return t.indexOf(e,A)}function It(t,e){return t.charCodeAt(e)|0}function ai(t,e,A){return t.slice(e,A)}function PA(t){return t.length}function Km(t){return t.length}function ki(t,e){return e.push(t),t}function qT(t,e){return t.map(e).join("")}function Pd(t,e){return t.filter(function(A){return!nn(A,e)})}var Fo=1,oi=1,zm=0,wA=0,Et=0,mi="";function To(t,e,A,n,r,i,s,a){return{value:t,root:e,parent:A,type:n,props:r,children:i,line:Fo,column:oi,length:s,return:"",siblings:a}}function Bn(t,e){return Ol(To("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Hr(t){for(;t.root;)t=Bn(t.root,{children:[t]});ki(t,t.siblings)}function ZT(){return Et}function eQ(){return Et=wA>0?It(mi,--wA):0,oi--,Et===10&&(oi=1,Fo--),Et}function FA(){return Et=wA<zm?It(mi,wA++):0,oi++,Et===10&&(oi=1,Fo++),Et}function cr(){return It(mi,wA)}function Ua(){return wA}function Qo(t,e){return ai(mi,t,e)}function kl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tQ(t){return Fo=oi=1,zm=PA(mi=t),wA=0,[]}function AQ(t){return mi="",t}function Wc(t){return Vm(Qo(wA-1,Gl(t===91?t+2:t===40?t+1:t)))}function nQ(t){for(;(Et=cr())&&Et<33;)FA();return kl(t)>2||kl(Et)>3?"":" "}function rQ(t,e){for(;--e&&FA()&&!(Et<48||Et>102||Et>57&&Et<65||Et>70&&Et<97););return Qo(t,Ua()+(e<6&&cr()==32&&FA()==32))}function Gl(t){for(;FA();)switch(Et){case t:return wA;case 34:case 39:t!==34&&t!==39&&Gl(Et);break;case 40:t===41&&Gl(t);break;case 92:FA();break}return wA}function iQ(t,e){for(;FA()&&t+Et!==57&&!(t+Et===84&&cr()===47););return"/*"+Qo(e,wA-1)+"*"+vu(t===47?t:FA())}function sQ(t){for(;!kl(cr());)FA();return Qo(t,wA)}function aQ(t){return AQ(Sa("",null,null,null,[""],t=tQ(t),0,[0],t))}function Sa(t,e,A,n,r,i,s,a,o){for(var c=0,l=0,u=s,h=0,p=0,g=0,m=1,d=1,f=1,x=0,v="",y=r,b=i,E=n,U=v;d;)switch(g=x,x=FA()){case 40:if(g!=108&&It(U,u-1)==58){ya(U+=ke(Wc(x),"&","&\f"),"&\f",Gm(c?a[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:U+=Wc(x);break;case 9:case 10:case 13:case 32:U+=nQ(g);break;case 92:U+=rQ(Ua()-1,7);continue;case 47:switch(cr()){case 42:case 47:ki(oQ(iQ(FA(),Ua()),e,A,o),o);break;default:U+="/"}break;case 123*m:a[c++]=PA(U)*f;case 125*m:case 59:case 0:switch(x){case 0:case 125:d=0;case 59+l:f==-1&&(U=ke(U,/\f/g,"")),p>0&&PA(U)-u&&ki(p>32?Od(U+";",n,A,u-1,o):Od(ke(U," ","")+";",n,A,u-2,o),o);break;case 59:U+=";";default:if(ki(E=Nd(U,e,A,c,l,r,a,v,y=[],b=[],u,i),i),x===123)if(l===0)Sa(U,e,E,E,y,i,u,a,b);else switch(h===99&&It(U,3)===110?100:h){case 100:case 108:case 109:case 115:Sa(t,E,E,n&&ki(Nd(t,E,E,0,0,r,a,v,r,y=[],u,b),b),r,b,u,a,n?y:b);break;default:Sa(U,E,E,E,[""],b,0,a,b)}}c=l=p=0,m=f=1,v=U="",u=s;break;case 58:u=1+PA(U),p=g;default:if(m<1){if(x==123)--m;else if(x==125&&m++==0&&eQ()==125)continue}switch(U+=vu(x),x*m){case 38:f=l>0?1:(U+="\f",-1);break;case 44:a[c++]=(PA(U)-1)*f,f=1;break;case 64:cr()===45&&(U+=Wc(FA())),h=cr(),l=u=PA(v=U+=sQ(Ua())),x++;break;case 45:g===45&&PA(U)==2&&(m=0)}}return i}function Nd(t,e,A,n,r,i,s,a,o,c,l,u){for(var h=r-1,p=r===0?i:[""],g=Km(p),m=0,d=0,f=0;m<n;++m)for(var x=0,v=ai(t,h+1,h=Gm(d=s[m])),y=t;x<g;++x)(y=Vm(d>0?p[x]+" "+v:ke(v,/&\f/g,p[x])))&&(o[f++]=y);return To(t,e,A,r===0?Mo:a,o,c,l,u)}function oQ(t,e,A,n){return To(t,e,A,Om,vu(ZT()),ai(t,2,-2),0,n)}function Od(t,e,A,n,r){return To(t,e,A,Bu,ai(t,0,n),ai(t,n+1,-1),n,r)}function Wm(t,e,A){switch(JT(t,e)){case 5103:return $e+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $e+t+t;case 4789:return $i+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return $e+t+$i+t+st+t+t;case 5936:switch(It(t,e+11)){case 114:return $e+t+st+ke(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return $e+t+st+ke(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return $e+t+st+ke(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return $e+t+st+t+t;case 6165:return $e+t+st+"flex-"+t+t;case 5187:return $e+t+ke(t,/(\w+).+(:[^]+)/,$e+"box-$1$2"+st+"flex-$1$2")+t;case 5443:return $e+t+st+"flex-item-"+ke(t,/flex-|-self/g,"")+(nn(t,/flex-|baseline/)?"":st+"grid-row-"+ke(t,/flex-|-self/g,""))+t;case 4675:return $e+t+st+"flex-line-pack"+ke(t,/align-content|flex-|-self/g,"")+t;case 5548:return $e+t+st+ke(t,"shrink","negative")+t;case 5292:return $e+t+st+ke(t,"basis","preferred-size")+t;case 6060:return $e+"box-"+ke(t,"-grow","")+$e+t+st+ke(t,"grow","positive")+t;case 4554:return $e+ke(t,/([^-])(transform)/g,"$1"+$e+"$2")+t;case 6187:return ke(ke(ke(t,/(zoom-|grab)/,$e+"$1"),/(image-set)/,$e+"$1"),t,"")+t;case 5495:case 3959:return ke(t,/(image-set\([^]*)/,$e+"$1$`$1");case 4968:return ke(ke(t,/(.+:)(flex-)?(.*)/,$e+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$e+t+t;case 4200:if(!nn(t,/flex-|baseline/))return st+"grid-column-align"+ai(t,e)+t;break;case 2592:case 3360:return st+ke(t,"template-","")+t;case 4384:case 3616:return A&&A.some(function(n,r){return e=r,nn(n.props,/grid-\w+-end/)})?~ya(t+(A=A[e].value),"span",0)?t:st+ke(t,"-start","")+t+st+"grid-row-span:"+(~ya(A,"span",0)?nn(A,/\d+/):+nn(A,/\d+/)-+nn(t,/\d+/))+";":st+ke(t,"-start","")+t;case 4896:case 4128:return A&&A.some(function(n){return nn(n.props,/grid-\w+-start/)})?t:st+ke(ke(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ke(t,/(.+)-inline(.+)/,$e+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(PA(t)-1-e>6)switch(It(t,e+1)){case 109:if(It(t,e+4)!==45)break;case 102:return ke(t,/(.+:)(.+)-([^]+)/,"$1"+$e+"$2-$3$1"+$i+(It(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ya(t,"stretch",0)?Wm(ke(t,"stretch","fill-available"),e,A)+t:t}break;case 5152:case 5920:return ke(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,r,i,s,a,o,c){return st+r+":"+i+c+(s?st+r+"-span:"+(a?o:+o-+i)+c:"")+t});case 4949:if(It(t,e+6)===121)return ke(t,":",":"+$e)+t;break;case 6444:switch(It(t,It(t,14)===45?18:11)){case 120:return ke(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$e+(It(t,14)===45?"inline-":"")+"box$3$1"+$e+"$2$3$1"+st+"$2box$3")+t;case 100:return ke(t,":",":"+st)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(t,"scroll-","scroll-snap-")+t}return t}function eo(t,e){for(var A="",n=0;n<t.length;n++)A+=e(t[n],n,t,e)||"";return A}function cQ(t,e,A,n){switch(t.type){case $T:if(t.children.length)break;case YT:case Bu:return t.return=t.return||t.value;case Om:return"";case km:return t.return=t.value+"{"+eo(t.children,n)+"}";case Mo:if(!PA(t.value=t.props.join(",")))return""}return PA(A=eo(t.children,n))?t.return=t.value+"{"+A+"}":""}function lQ(t){var e=Km(t);return function(A,n,r,i){for(var s="",a=0;a<e;a++)s+=t[a](A,n,r,i)||"";return s}}function uQ(t){return function(e){e.root||(e=e.return)&&t(e)}}function hQ(t,e,A,n){if(t.length>-1&&!t.return)switch(t.type){case Bu:t.return=Wm(t.value,t.length,A);return;case km:return eo([Bn(t,{value:ke(t.value,"@","@"+$e)})],n);case Mo:if(t.length)return qT(A=t.props,function(r){switch(nn(r,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hr(Bn(t,{props:[ke(r,/:(read-\w+)/,":"+$i+"$1")]})),Hr(Bn(t,{props:[r]})),Ol(t,{props:Pd(A,n)});break;case"::placeholder":Hr(Bn(t,{props:[ke(r,/:(plac\w+)/,":"+$e+"input-$1")]})),Hr(Bn(t,{props:[ke(r,/:(plac\w+)/,":"+$i+"$1")]})),Hr(Bn(t,{props:[ke(r,/:(plac\w+)/,st+"input-$1")]})),Hr(Bn(t,{props:[r]})),Ol(t,{props:Pd(A,n)});break}return""})}}var fQ={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ci=typeof process<"u"&&oA!==void 0&&(oA.REACT_APP_SC_ATTR||oA.SC_ATTR)||"data-styled",Xm="active",jm="data-styled-version",Io="6.1.8",wu=`/*!sc*/
`,xu=typeof window<"u"&&"HTMLElement"in window,dQ=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&oA!==void 0&&oA.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&oA.REACT_APP_SC_DISABLE_SPEEDY!==""?oA.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&oA.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&oA!==void 0&&oA.SC_DISABLE_SPEEDY!==void 0&&oA.SC_DISABLE_SPEEDY!==""&&oA.SC_DISABLE_SPEEDY!=="false"&&oA.SC_DISABLE_SPEEDY),Ro=Object.freeze([]),li=Object.freeze({});function pQ(t,e,A){return A===void 0&&(A=li),t.theme!==A.theme&&t.theme||e||A.theme}var Ym=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gQ=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mQ=/(^-|-$)/g;function kd(t){return t.replace(gQ,"-").replace(mQ,"")}var BQ=/(a)(d)/gi,ua=52,Gd=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vl(t){var e,A="";for(e=Math.abs(t);e>ua;e=e/ua|0)A=Gd(e%ua)+A;return(Gd(e%ua)+A).replace(BQ,"$1-$2")}var Xc,$m=5381,Kr=function(t,e){for(var A=e.length;A;)t=33*t^e.charCodeAt(--A);return t},Jm=function(t){return Kr($m,t)};function vQ(t){return Vl(Jm(t)>>>0)}function wQ(t){return t.displayName||t.name||"Component"}function jc(t){return typeof t=="string"&&!0}var qm=typeof Symbol=="function"&&Symbol.for,Zm=qm?Symbol.for("react.memo"):60115,xQ=qm?Symbol.for("react.forward_ref"):60112,_Q={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},CQ={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},e0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},EQ=((Xc={})[xQ]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xc[Zm]=e0,Xc);function Vd(t){return("type"in(e=t)&&e.type.$$typeof)===Zm?e0:"$$typeof"in t?EQ[t.$$typeof]:_Q;var e}var yQ=Object.defineProperty,UQ=Object.getOwnPropertyNames,Kd=Object.getOwnPropertySymbols,SQ=Object.getOwnPropertyDescriptor,bQ=Object.getPrototypeOf,zd=Object.prototype;function t0(t,e,A){if(typeof e!="string"){if(zd){var n=bQ(e);n&&n!==zd&&t0(t,n,A)}var r=UQ(e);Kd&&(r=r.concat(Kd(e)));for(var i=Vd(t),s=Vd(e),a=0;a<r.length;++a){var o=r[a];if(!(o in CQ||A&&A[o]||s&&o in s||i&&o in i)){var c=SQ(e,o);try{yQ(t,o,c)}catch{}}}}return t}function ui(t){return typeof t=="function"}function _u(t){return typeof t=="object"&&"styledComponentId"in t}function nr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Wd(t,e){if(t.length===0)return"";for(var A=t[0],n=1;n<t.length;n++)A+=e?e+t[n]:t[n];return A}function As(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Kl(t,e,A){if(A===void 0&&(A=!1),!A&&!As(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Kl(t[n],e[n]);else if(As(e))for(var n in e)t[n]=Kl(t[n],e[n]);return t}function Cu(t,e){Object.defineProperty(t,"toString",{value:e})}function us(t){for(var e=[],A=1;A<arguments.length;A++)e[A-1]=arguments[A];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var MQ=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var A=0,n=0;n<e;n++)A+=this.groupSizes[n];return A},t.prototype.insertRules=function(e,A){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw us(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=r;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),o=(s=0,A.length);s<o;s++)this.tag.insertRule(a,A[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var A=this.groupSizes[e],n=this.indexOfGroup(e),r=n+A;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var A="";if(e>=this.length||this.groupSizes[e]===0)return A;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,s=r;s<i;s++)A+="".concat(this.tag.getRule(s)).concat(wu);return A},t}(),ba=new Map,to=new Map,Ma=1,ha=function(t){if(ba.has(t))return ba.get(t);for(;to.has(Ma);)Ma++;var e=Ma++;return ba.set(t,e),to.set(e,t),e},FQ=function(t,e){Ma=e+1,ba.set(t,e),to.set(e,t)},TQ="style[".concat(ci,"][").concat(jm,'="').concat(Io,'"]'),QQ=new RegExp("^".concat(ci,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),IQ=function(t,e,A){for(var n,r=A.split(","),i=0,s=r.length;i<s;i++)(n=r[i])&&t.registerName(e,n)},RQ=function(t,e){for(var A,n=((A=e.textContent)!==null&&A!==void 0?A:"").split(wu),r=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var o=a.match(QQ);if(o){var c=0|parseInt(o[1],10),l=o[2];c!==0&&(FQ(l,c),IQ(t,l,o[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}};function LQ(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var A0=function(t){var e=document.head,A=t||e,n=document.createElement("style"),r=function(a){var o=Array.from(a.querySelectorAll("style[".concat(ci,"]")));return o[o.length-1]}(A),i=r!==void 0?r.nextSibling:null;n.setAttribute(ci,Xm),n.setAttribute(jm,Io);var s=LQ();return s&&n.setAttribute("nonce",s),A.insertBefore(n,i),n},DQ=function(){function t(e){this.element=A0(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(A){if(A.sheet)return A.sheet;for(var n=document.styleSheets,r=0,i=n.length;r<i;r++){var s=n[r];if(s.ownerNode===A)return s}throw us(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,A){try{return this.sheet.insertRule(A,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var A=this.sheet.cssRules[e];return A&&A.cssText?A.cssText:""},t}(),HQ=function(){function t(e){this.element=A0(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,A){if(e<=this.length&&e>=0){var n=document.createTextNode(A);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),PQ=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,A){return e<=this.length&&(this.rules.splice(e,0,A),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Xd=xu,NQ={isServer:!xu,useCSSOMInjection:!dQ},n0=function(){function t(e,A,n){e===void 0&&(e=li),A===void 0&&(A={});var r=this;this.options=qt(qt({},NQ),e),this.gs=A,this.names=new Map(n),this.server=!!e.isServer,!this.server&&xu&&Xd&&(Xd=!1,function(i){for(var s=document.querySelectorAll(TQ),a=0,o=s.length;a<o;a++){var c=s[a];c&&c.getAttribute(ci)!==Xm&&(RQ(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Cu(this,function(){return function(i){for(var s=i.getTag(),a=s.length,o="",c=function(u){var h=function(f){return to.get(f)}(u);if(h===void 0)return"continue";var p=i.names.get(h),g=s.getGroup(u);if(p===void 0||g.length===0)return"continue";var m="".concat(ci,".g").concat(u,'[id="').concat(h,'"]'),d="";p!==void 0&&p.forEach(function(f){f.length>0&&(d+="".concat(f,","))}),o+="".concat(g).concat(m,'{content:"').concat(d,'"}').concat(wu)},l=0;l<a;l++)c(l);return o}(r)})}return t.registerId=function(e){return ha(e)},t.prototype.reconstructWithOptions=function(e,A){return A===void 0&&(A=!0),new t(qt(qt({},this.options),e),this.gs,A&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(A){var n=A.useCSSOMInjection,r=A.target;return A.isServer?new PQ(r):n?new DQ(r):new HQ(r)}(this.options),new MQ(e)));var e},t.prototype.hasNameForId=function(e,A){return this.names.has(e)&&this.names.get(e).has(A)},t.prototype.registerName=function(e,A){if(ha(e),this.names.has(e))this.names.get(e).add(A);else{var n=new Set;n.add(A),this.names.set(e,n)}},t.prototype.insertRules=function(e,A,n){this.registerName(e,A),this.getTag().insertRules(ha(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ha(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),OQ=/&/g,kQ=/^\s*\/\/.*$/gm;function r0(t,e){return t.map(function(A){return A.type==="rule"&&(A.value="".concat(e," ").concat(A.value),A.value=A.value.replaceAll(",",",".concat(e," ")),A.props=A.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(A.children)&&A.type!=="@keyframes"&&(A.children=r0(A.children,e)),A})}function GQ(t){var e,A,n,r=t===void 0?li:t,i=r.options,s=i===void 0?li:i,a=r.plugins,o=a===void 0?Ro:a,c=function(h,p,g){return g.startsWith(A)&&g.endsWith(A)&&g.replaceAll(A,"").length>0?".".concat(e):h},l=o.slice();l.push(function(h){h.type===Mo&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(OQ,A).replace(n,c))}),s.prefix&&l.push(hQ),l.push(cQ);var u=function(h,p,g,m){p===void 0&&(p=""),g===void 0&&(g=""),m===void 0&&(m="&"),e=m,A=p,n=new RegExp("\\".concat(A,"\\b"),"g");var d=h.replace(kQ,""),f=aQ(g||p?"".concat(g," ").concat(p," { ").concat(d," }"):d);s.namespace&&(f=r0(f,s.namespace));var x=[];return eo(f,lQ(l.concat(uQ(function(v){return x.push(v)})))),x};return u.hash=o.length?o.reduce(function(h,p){return p.name||us(15),Kr(h,p.name)},$m).toString():"",u}var VQ=new n0,zl=GQ(),i0=BA.createContext({shouldForwardProp:void 0,styleSheet:VQ,stylis:zl});i0.Consumer;BA.createContext(void 0);function jd(){return W.useContext(i0)}var KQ=function(){function t(e,A){var n=this;this.inject=function(r,i){i===void 0&&(i=zl);var s=n.name+i.hash;r.hasNameForId(n.id,s)||r.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=A,Cu(this,function(){throw us(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=zl),this.name+e.hash},t}(),zQ=function(t){return t>="A"&&t<="Z"};function Yd(t){for(var e="",A=0;A<t.length;A++){var n=t[A];if(A===1&&n==="-"&&t[0]==="-")return t;zQ(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var s0=function(t){return t==null||t===!1||t===""},a0=function(t){var e,A,n=[];for(var r in t){var i=t[r];t.hasOwnProperty(r)&&!s0(i)&&(Array.isArray(i)&&i.isCss||ui(i)?n.push("".concat(Yd(r),":"),i,";"):As(i)?n.push.apply(n,Za(Za(["".concat(r," {")],a0(i),!1),["}"],!1)):n.push("".concat(Yd(r),": ").concat((e=r,(A=i)==null||typeof A=="boolean"||A===""?"":typeof A!="number"||A===0||e in fQ||e.startsWith("--")?String(A).trim():"".concat(A,"px")),";")))}return n};function lr(t,e,A,n){if(s0(t))return[];if(_u(t))return[".".concat(t.styledComponentId)];if(ui(t)){if(!ui(i=t)||i.prototype&&i.prototype.isReactComponent||!e)return[t];var r=t(e);return lr(r,e,A,n)}var i;return t instanceof KQ?A?(t.inject(A,n),[t.getName(n)]):[t]:As(t)?a0(t):Array.isArray(t)?Array.prototype.concat.apply(Ro,t.map(function(s){return lr(s,e,A,n)})):[t.toString()]}function WQ(t){for(var e=0;e<t.length;e+=1){var A=t[e];if(ui(A)&&!_u(A))return!1}return!0}var XQ=Jm(Io),jQ=function(){function t(e,A,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&WQ(e),this.componentId=A,this.baseHash=Kr(XQ,A),this.baseStyle=n,n0.registerId(A)}return t.prototype.generateAndInjectStyles=function(e,A,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,A,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&A.hasNameForId(this.componentId,this.staticRulesId))r=nr(r,this.staticRulesId);else{var i=Wd(lr(this.rules,e,A,n)),s=Vl(Kr(this.baseHash,i)>>>0);if(!A.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);A.insertRules(this.componentId,s,a)}r=nr(r,s),this.staticRulesId=s}else{for(var o=Kr(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u=="string")c+=u;else if(u){var h=Wd(lr(u,e,A,n));o=Kr(o,h+l),c+=h}}if(c){var p=Vl(o>>>0);A.hasNameForId(this.componentId,p)||A.insertRules(this.componentId,p,n(c,".".concat(p),void 0,this.componentId)),r=nr(r,p)}}return r},t}(),o0=BA.createContext(void 0);o0.Consumer;var Yc={};function YQ(t,e,A){var n=_u(t),r=t,i=!jc(t),s=e.attrs,a=s===void 0?Ro:s,o=e.componentId,c=o===void 0?function(y,b){var E=typeof y!="string"?"sc":kd(y);Yc[E]=(Yc[E]||0)+1;var U="".concat(E,"-").concat(vQ(Io+E+Yc[E]));return b?"".concat(b,"-").concat(U):U}(e.displayName,e.parentComponentId):o,l=e.displayName,u=l===void 0?function(y){return jc(y)?"styled.".concat(y):"Styled(".concat(wQ(y),")")}(t):l,h=e.displayName&&e.componentId?"".concat(kd(e.displayName),"-").concat(e.componentId):e.componentId||c,p=n&&r.attrs?r.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(n&&r.shouldForwardProp){var m=r.shouldForwardProp;if(e.shouldForwardProp){var d=e.shouldForwardProp;g=function(y,b){return m(y,b)&&d(y,b)}}else g=m}var f=new jQ(A,h,n?r.componentStyle:void 0);function x(y,b){return function(E,U,I){var C=E.attrs,B=E.componentStyle,Q=E.defaultProps,R=E.foldedComponentIds,T=E.styledComponentId,D=E.target,N=BA.useContext(o0),X=jd(),q=E.shouldForwardProp||X.shouldForwardProp,k=pQ(U,N,Q)||li,j=function(Y,re,Ae){for(var Ee,we=qt(qt({},re),{className:void 0,theme:Ae}),Le=0;Le<Y.length;Le+=1){var H=ui(Ee=Y[Le])?Ee(we):Ee;for(var xe in H)we[xe]=xe==="className"?nr(we[xe],H[xe]):xe==="style"?qt(qt({},we[xe]),H[xe]):H[xe]}return re.className&&(we.className=nr(we.className,re.className)),we}(C,U,k),J=j.as||D,ie={};for(var Z in j)j[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&j.theme===k||(Z==="forwardedAs"?ie.as=j.forwardedAs:q&&!q(Z,J)||(ie[Z]=j[Z]));var pe=function(Y,re){var Ae=jd(),Ee=Y.generateAndInjectStyles(re,Ae.styleSheet,Ae.stylis);return Ee}(B,j),O=nr(R,T);return pe&&(O+=" "+pe),j.className&&(O+=" "+j.className),ie[jc(J)&&!Ym.has(J)?"class":"className"]=O,ie.ref=I,W.createElement(J,ie)}(v,y,b)}x.displayName=u;var v=BA.forwardRef(x);return v.attrs=p,v.componentStyle=f,v.displayName=u,v.shouldForwardProp=g,v.foldedComponentIds=n?nr(r.foldedComponentIds,r.styledComponentId):"",v.styledComponentId=h,v.target=n?r.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=n?function(b){for(var E=[],U=1;U<arguments.length;U++)E[U-1]=arguments[U];for(var I=0,C=E;I<C.length;I++)Kl(b,C[I],!0);return b}({},r.defaultProps,y):y}}),Cu(v,function(){return".".concat(v.styledComponentId)}),i&&t0(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function $d(t,e){for(var A=[t[0]],n=0,r=e.length;n<r;n+=1)A.push(e[n],t[n+1]);return A}var Jd=function(t){return Object.assign(t,{isCss:!0})};function $Q(t){for(var e=[],A=1;A<arguments.length;A++)e[A-1]=arguments[A];if(ui(t)||As(t))return Jd(lr($d(Ro,Za([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?lr(n):Jd(lr($d(n,e)))}function Wl(t,e,A){if(A===void 0&&(A=li),!e)throw us(1,e);var n=function(r){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return t(e,A,$Q.apply(void 0,Za([r],i,!1)))};return n.attrs=function(r){return Wl(t,e,qt(qt({},A),{attrs:Array.prototype.concat(A.attrs,r).filter(Boolean)}))},n.withConfig=function(r){return Wl(t,e,qt(qt({},A),r))},n}var c0=function(t){return Wl(YQ,t)},Vt=c0;Ym.forEach(function(t){Vt[t]=c0(t)});var qd;(function(t){t.BG="background",t.BORDER="border"})(qd||(qd={}));var Zd;(function(t){t.LIGHT="light",t.DARK="dark"})(Zd||(Zd={}));Vt.div(ep||(ep=Xt([`
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
`])));var ep,JQ=Vt.div(tp||(tp=Xt([`
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
`])),function(t){return t.justify},function(t){return t.width&&t.width!=="100%"?"":"var(--padding-medium)"},function(t){return t.width?t.width:"fit-content"},function(t){return t.height?t.height:"fit-content"},function(t){return t.color?"".concat(t.color,"6)"):"var(--color-text-2)"},function(t){return t.color?"".concat(t.color,"5)"):"var(--color-text-3)"},function(t){return t.color?"".concat(t.color,"7)"):"var(--color-text-1)"},function(t){return"".concat(t.color,"6)")},function(t){return"".concat(t.color,"5)")},function(t){return"".concat(t.color,"7)")},function(t){return"var(--border-1) solid ".concat(t.color,"4)")},function(t){return"".concat(t.color,"1)")},function(t){return"".concat(t.color,"2)")},function(t){return"".concat(t.color,"4)")},function(t){return"".concat(t.color,"5)")},function(t){return"".concat(t.color,"7)")});Vt.a(Ap||(Ap=Xt([`
  `,`;
  text-decoration: none;
`],[`
  `,`;
  text-decoration: none;
`])),JQ);var tp,Ap;Vt.a(np||(np=Xt([`
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
`])),function(t){return"".concat(t.color,"6)")},function(t){return"".concat(t.color,"6)")},function(t){return"".concat(t.color,"7)")},function(t){return"".concat(t.color,"7)")},function(t){return"".concat(t.color,"8)")},function(t){return"".concat(t.color,"8)")},function(t){return"".concat(t.color,"2)")});var np;Vt.div(rp||(rp=Xt([`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`],[`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`])),function(t){return t.direction},function(t){return t.gap});var rp;Vt.div(ip||(ip=Xt([`
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
`])),function(t){return t.direction},function(t){return t.gap},function(t){return t.wrap?"wrap":""},function(t){return t.justify},function(t){return t.align},function(t){return t.width},function(t){return t.height});var ip,sp;(function(t){t.SELF="self",t.OTHERS="others",t.SIMPLE="simple",t.DISABLED="disabled"})(sp||(sp={}));Vt.div(ap||(ap=Xt([`
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
`])),function(t){return t.direction},function(t){return t.direction==="row"?"100%":""},function(t){return t.direction==="column"?"100%":"fit-content"},function(t){return t.border&&t.direction==="row"?"var(--border-1) solid var(--color-border-1)":""},function(t){return t.border&&t.direction==="column"?"var(--border-1) solid var(--color-border-1)":""},function(t){return t.direction==="row"?"100%":""},function(t){return t.direction==="column"?"100%":""},function(t){return t.direction==="row"?"50%":"-4px"},function(t){return t.direction==="row"?"0":"50%"},function(t){return t.direction==="row"?"translateX(50%)":"translateY(50%) rotate(90deg)"},function(t){return t.direction==="row"?"calc(100% - 32px)":"12px"});var ap;Vt.header(op||(op=Xt([`
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
`])),function(t){return t.height},function(t){return t.borderBottom?"1px solid var(--color-border-2)":""},function(t){return t.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"},function(t){return t.filter?"var(--blur-small)":""});Vt.div(cp||(cp=Xt([`
  display: flex;
  flex: 1;
  justify-content: `,`;
  height: 100%;
`],[`
  display: flex;
  flex: 1;
  justify-content: `,`;
  height: 100%;
`])),function(t){return t.align});var op,cp;Vt.aside(lp||(lp=Xt([`
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
`])),function(t){return t.fixed?"fixed":""},function(t){return t.collapsed?"0px":t.width},function(t){return t.placement==="right"?"var(--border-1) solid var(--color-border-2)":""},function(t){return t.placement==="left"?"var(--border-1) solid var(--color-border-2)":""});var lp;Vt.main(up||(up=Xt([`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`],[`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`])),function(t){return"calc(100vh - ".concat(t.minHeight,"px)")});var up;Vt.footer(hp||(hp=Xt([`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`],[`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`])));var hp;Vt.div(fp||(fp=Xt([`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`],[`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`])));var fp;Vt.table(dp||(dp=Xt([`
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
`])));var dp,pp=function(t){var e=t.title,A=t.type,n=A===void 0?"h1":A,r=t.prefix,i=t.sub,s=t.style,a=t.className,o=a===void 0?"":a,c=t.onClick;return jT(qQ,Yi({className:"land-title ".concat(o),style:s,onClick:function(){return c==null?void 0:c()}},{children:[r&&Xn("span",Yi({className:"land-title-prefix"},{children:r})),n==="h1"&&Xn("h1",{children:e}),n==="h2"&&Xn("h2",{children:e}),n==="h3"&&Xn("h3",{children:e}),n==="p"&&Xn("p",{children:e}),i&&typeof i=="string"?Xn("div",Yi({className:"land-title-sub"},{children:i})):Xn(XT,{children:i})]}))},qQ=Vt.div(gp||(gp=Xt([`
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
`]))),gp;const ZQ=({})=>{const[t,e]=W.useState("#fffff");return W.useState("#0d0d0d"),W.useMemo(()=>t==="#fff"||t==="#ffffff"||t==="#FFF"||t==="#FFFFFF",[t]),w.jsx(eI,{className:"width-100 height-100 flex",children:w.jsxs(wt,{column:!0,gap:24,children:[w.jsxs(wt,{column:!0,gap:8,children:[w.jsx(pp,{title:"Step 01: 上传文件",type:"h3"}),w.jsx(pp,{title:"点击或拖拽来上传动画文件",type:"p",className:"color-gray-4"})]}),w.jsx("div",{className:"width-100",style:{height:"240px"},children:w.jsx(lu,{fileType:"image/*",onUpload:A=>{},desc:"点击上传图片或将图片拖拽于此",className:"radius-12"})})]})})},eI=ge.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`,tI=({})=>{const[t,e]=W.useState(2);return w.jsxs(ii,{children:[w.jsx(ou,{logo:w.jsx("p",{children:"💻💻💻"}),name:w.jsx(Rt,{title:"UITest",type:"h2"}),align:"end",menuProps:{data:[{key:1,title:"可用性测试",clickType:lA.SELF},{key:2,title:"动画文件测试",clickType:lA.SELF}],actived:t,handleChangeTab:(A,n)=>n===lA.SELF&&e(A)}}),w.jsx(ii,{children:w.jsxs(cu,{children:[t===1&&w.jsx(KT,{}),t===2&&w.jsx(ZQ,{})]})})]})};function AI(){return w.jsx(w.Fragment,{children:w.jsxs(iB,{children:[w.jsx(Pr,{path:"/",element:w.jsx(Dd,{})}),w.jsx(Pr,{path:"/home",element:w.jsx(IE,{})}),w.jsx(Pr,{path:"/ui-test",element:w.jsx(tI,{})}),w.jsx(Pr,{path:"/colors",element:w.jsx(Dd,{})}),w.jsx(Pr,{path:"/crochet",element:w.jsx(VT,{})})]})})}$c.createRoot(document.getElementById("root")).render(w.jsx(BA.StrictMode,{children:w.jsx(oB,{children:w.jsx(AI,{})})}));
