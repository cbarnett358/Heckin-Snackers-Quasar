import{v as o,x as n,y as d,z as l,D as i}from"./index.7d032ad3.js";import{u,a as c}from"./QItem.521ed6e9.js";var q=o({name:"QList",props:{...u,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:a}){const s=i(),t=c(e,s.proxy.$q),r=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d("div",{class:r.value,role:"list"},l(a.default))}});export{q as Q};
