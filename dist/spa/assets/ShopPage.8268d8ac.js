import{a8 as k,a7 as g,u as v,n as b,a9 as c,aa as r,ab as o,aq as u,ac as s,ae as e,aH as S,af as l,ad as m,a5 as n}from"./index.7d032ad3.js";import{Q as C,a as p}from"./QBreadcrumbs.7f662c0c.js";import{b as a,Q as i}from"./QItem.521ed6e9.js";import{Q as y}from"./QList.ed1e1f07.js";import{Q as w}from"./QBtnDropdown.813b4228.js";import{L as P,Q as B}from"./LogoutBtn.ca345b8f.js";import{C as d}from"./ClosePopup.993d4c4f.js";import{P as q}from"./ProductsList.b779b5ba.js";import{S as Q}from"./SignInBtn.7599d37d.js";import"./selection.0443ddf8.js";import"./focusout.f5538097.js";import"./focus-manager.8a4757a3.js";import"./QCard.4c93b115.js";import"./QCardActions.383e3cb6.js";var I="/assets/AdobeStock_391618271.6a5a7a57.mp4";const L=g({name:"ShopPage",setup(){return{store:v(),onItemClick(){}}},data(){return{user:"",email:""}},created(){b.auth().onAuthStateChanged(t=>{t?(this.user=t.displayName,this.email=t.email):console.log("user name is null")})},components:{ProductsList:q,LogoutBtn:P,SignInBtn:Q}}),A={class:"q-gutter-sm bg-white"},x={class:"q-mx-lg"},H=s("div",{class:"jumbotron jumbotron-con"},[s("video",{autoplay:"",muted:"",loop:"",poster:""},[s("source",{src:I,type:"video/mp4"})]),s("div",{class:"container text-white q-px-lg"},[s("div",{class:"col-1"}),s("div",{class:"col-6"}),s("h1",{class:"display-4 q-mb-none text-center"},"Shop Our Snackers"),s("p",{id:"jumbotronp",class:"lead text-center"}," Heckin' Snackers provides fresh, and most importantly heckin' delicious snacks and food your dog will love garuanteed! Everything is organically sourced from the USA and will leave your pup heckin' happy! ")])],-1),D={class:"row"},T=s("div",{class:"col-1"},null,-1),j={class:"col-6"},N={class:"text-info q-mb-none q-ml-sm"},O={class:"text-info q-pb-md q-mx-sm",id:"productAmount"},$=s("div",{class:"col"},null,-1),R={class:"row wrap justify-center q-px-md q-gutter-lg q-pb-lg"},U=s("div",{class:"row q-pb-xl"},[s("div",{class:"col-1"}),s("div",{class:"col-6"})],-1);function V(t,E,z,F,G,J){const _=u("SignInBtn"),f=u("LogoutBtn"),h=u("ProductsList");return c(),r(B,null,{default:o(()=>[s("div",A,[s("div",x,[e(i,{class:"text-right q-gutter-sm"},{default:o(()=>[e(C,{class:"text-info q-mt-md"},{separator:o(()=>[e(S,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:o(()=>[e(p,{to:"/",label:"Home",icon:"home"}),e(p,{to:"/shop",label:"Shop",icon:"pets"})]),_:1}),e(a,null,{default:o(()=>[l(m(t.email),1)]),_:1}),e(_),e(f)]),_:1})])]),H,s("div",D,[T,s("div",j,[s("div",null,[s("h3",N,[l(" SHOP OUR PRODUCTS "),e(w,{class:"flat",color:"primary",label:"Sort"},{default:o(()=>[e(y,null,{default:o(()=>[e(i,{clickable:"",onClick:t.store.sortItemsByPriceDesc},{default:o(()=>[e(a,null,{default:o(()=>[l("Price: High-Low")]),_:1})]),_:1},8,["onClick"]),e(i,{clickable:"",onClick:t.store.sortItemsByPriceAsc},{default:o(()=>[e(a,null,{default:o(()=>[l("Price: Low-High")]),_:1})]),_:1},8,["onClick"]),e(i,{clickable:"",onClick:t.store.sortItemsByPriceAsc},{default:o(()=>[e(a,null,{default:o(()=>[l("Sort By Catergory")]),_:1})]),_:1},8,["onClick"]),e(i,{clickable:"",onClick:t.store.sortProducts},{default:o(()=>[e(a,null,{default:o(()=>[l("Top Sellers")]),_:1})]),_:1},8,["onClick"]),n((c(),r(i,{clickable:"",onClick:t.store.showSnackers},{default:o(()=>[e(a,null,{default:o(()=>[l("Show Snackers")]),_:1})]),_:1},8,["onClick"])),[[d]]),n((c(),r(i,{clickable:"",onClick:t.store.showToys},{default:o(()=>[e(a,null,{default:o(()=>[l("Show Toys")]),_:1})]),_:1},8,["onClick"])),[[d]]),n((c(),r(i,{clickable:"",onClick:t.store.showAccessories},{default:o(()=>[e(a,null,{default:o(()=>[l("Show Accessories")]),_:1})]),_:1},8,["onClick"])),[[d]]),n((c(),r(i,{clickable:"",onClick:t.store.resetProducts},{default:o(()=>[e(a,null,{default:o(()=>[l("Reset Filter")]),_:1})]),_:1},8,["onClick"])),[[d]])]),_:1})]),_:1})])]),s("div",O," heckin' "+m(t.store.products.length)+" products available. ",1)]),$]),s("div",R,[e(h)]),U]),_:1})}var ro=k(L,[["render",V]]);export{ro as default};
