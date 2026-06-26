import{r as n}from"./react-vendor-BNgX1jll.js";/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(...t)=>t.filter((e,s,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,a)=>a?a.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t=>{const e=C(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},x=n.createContext({}),b=()=>n.useContext(x),A=n.forwardRef(({color:t,size:e,strokeWidth:s,absoluteStrokeWidth:a,className:l="",children:d,iconNode:m,...r},g)=>{const{size:i=24,strokeWidth:u=2,absoluteStrokeWidth:L=!1,color:f="currentColor",className:k=""}=b()??{},_=a??L?Number(s??u)*24/Number(e??i):s??u;return n.createElement("svg",{ref:g,...c,width:e??i??c.width,height:e??i??c.height,stroke:t??f,strokeWidth:_,className:h("lucide",k,l),...!d&&!v(r)&&{"aria-hidden":"true"},...r},[...m.map(([y,M])=>n.createElement(y,M)),...Array.isArray(d)?d:[d]])});/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=(t,e)=>{const s=n.forwardRef(({className:a,...l},d)=>n.createElement(A,{ref:d,iconNode:e,className:h(`lucide-${w(p(t))}`,`lucide-${t}`,a),...l}));return s.displayName=p(t),s};/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],W=o("camera",N);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],T=o("coffee",E);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],G=o("crown",$);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],I=o("flame",H);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Z=o("headphones",S);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],B=o("heart",j);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],R=o("sparkles",q);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Y=o("star",P);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],D=o("tv",z);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],U=o("zap",F),V={0:[{id:0,pos:[-2,0,-2],title:"Personnes âgées",desc:"Les fondations"},{id:1,pos:[2,0,-2],title:"Étudiants",desc:"L'évolution"},{id:2,pos:[2,0,2],title:"Adultes",desc:"La connexion"},{id:3,pos:[-2,0,2],title:"Famille & Enfants",desc:"Le numérique"}],1:[{id:0,pos:[-2,0,-2],title:"Personnes âgées",desc:"Les fondations"},{id:1,pos:[2,0,-2],title:"Étudiants",desc:"L'évolution"},{id:2,pos:[2,0,2],title:"Adultes",desc:"La connexion"},{id:3,pos:[-2,0,2],title:"Famille & Enfants",desc:"Le numérique"}],2:[{id:0,pos:[-.3,.5,-2.2],title:"Personnes âgées",desc:"Les fondations"},{id:1,pos:[2.2,.5,-.3],title:"Étudiants",desc:"L'évolution"},{id:2,pos:[-2.2,.5,.3],title:"Adultes",desc:"La connexion"},{id:3,pos:[-1,-.5,2.1],title:"Famille & Enfants",desc:"Le numérique"}],3:[{id:0,pos:[-2,0,-2],title:"Personnes âgées",desc:"Les fondations"},{id:1,pos:[2,0,-2],title:"Étudiants",desc:"L'évolution"},{id:2,pos:[2,0,2],title:"Adultes",desc:"La connexion"},{id:3,pos:[-2,0,2],title:"Famille & Enfants",desc:"Le numérique"}]},K=[{id:0,title:"Personnes âgées",worldName:"Monde du Go",color:"#2b1b0e",emoji:"♟️",desc:"Le jeu de Go",model:"/models/test_go.glb",spModelHeights:{0:0,1:0,2:0,3:0}},{id:1,title:"Famille & Enfants",worldName:"Monde du Yutnori",color:"#1a1a2e",emoji:"🎲",desc:"Le jeu de Yutnori",model:"/models/yutnori.glb",spModelHeights:{0:0,1:0,2:0,3:0}},{id:2,title:"Étudiants",worldName:"Monde de League of Legends",color:"#3a2e1a",emoji:"⚔️",desc:"League of Legends",model:"/models/test_league.glb",gameZoom:2,modelOffsetY:-1,spModelHeights:{0:0,1:0,2:0,3:0}},{id:3,title:"Adultes",worldName:"Monde de Blue Marble",color:"#1a2e1a",emoji:"🎯",desc:"Blue Marble",model:"/models/adult.glb",spModelHeights:{0:0,1:0,2:0,3:0}}],J={0:"/models/sp_papy.glb",1:"/models/sp_jeune.glb",2:"/models/sp_adulte.glb",3:"/models/sp_enfant.glb"};export{G as C,I as F,J as G,B as H,V as P,Y as S,D as T,U as Z,R as a,W as b,o as c,Z as d,T as e,K as f};
