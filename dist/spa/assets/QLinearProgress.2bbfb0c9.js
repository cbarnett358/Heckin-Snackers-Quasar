import{u as k,a as $}from"./QItem.521ed6e9.js";import{v as _,aN as h,aO as S,x as t,y as s,U as C,D as w}from"./index.7d032ad3.js";function D(e,a,r){return r<=a?a:Math.min(r,Math.max(a,e))}const x={xs:2,sm:4,md:6,lg:10,xl:14};function i(e,a,r){return{transform:a===!0?`translateX(${r.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var N=_({name:"QLinearProgress",props:{...k,...h,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:r}=w(),d=$(e,r.$q),n=S(e,x),l=t(()=>e.indeterminate===!0||e.query===!0),u=t(()=>e.reverse!==e.query),c=t(()=>({...n.value!==null?n.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=t(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=t(()=>i(e.buffer!==void 0?e.buffer:1,u.value,r.$q)),g=t(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),f=t(()=>i(l.value===!0?1:e.value,u.value,r.$q)),b=t(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${l.value===!0?"in":""}determinate`),q=t(()=>({width:`${e.value*100}%`})),y=t(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const o=[s("div",{class:g.value,style:m.value}),s("div",{class:b.value,style:f.value})];return e.stripe===!0&&l.value===!1&&o.push(s("div",{class:y.value,style:q.value})),s("div",{class:v.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},C(a.default,o))}}});export{N as Q,D as b};
