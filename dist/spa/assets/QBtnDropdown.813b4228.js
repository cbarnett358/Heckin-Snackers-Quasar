import{v as z,x as b,y as w,z as R,I as C,aB as Ce,$ as Y,a4 as qe,Y as J,J as x,M as ae,K as F,D as V,a2 as Se,O,W as ke,a1 as Te,T as He,aK as Me,a3 as Ee,aH as Pe,ak as L,aL as We,aM as Ae,a0 as pe}from"./index.7d032ad3.js";import{c as De}from"./selection.0443ddf8.js";import{p as X,c as Le,u as Oe,j as ie,d as $e,i as ze,e as Re,o as Fe,f as Ve,k as je,m as Qe,r as Ie,l as Z,g as Ke,q as _e,n as Ne}from"./focusout.f5538097.js";import{u as Ge,a as Ue}from"./QItem.521ed6e9.js";import{b as Ye,u as Je}from"./focus-manager.8a4757a3.js";var Xe=z({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const a=b(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${n.length>0?" "+n:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>w("div",{class:a.value},R(t.default))}});const Ze={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function et({showing:e,avoidEmit:t,configureAnchorEl:a}){const{props:n,proxy:o,emit:u}=V(),l=C(null);let h;function f(i){return l.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const s={};a===void 0&&(Object.assign(s,{hide(i){o.hide(i)},toggle(i){o.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Ce(i,13)===!0&&s.toggle(i)},contextClick(i){o.hide(i),Y(i),qe(()=>{o.show(i),i.qAnchorHandled=!0})},prevent:Y,mobileTouch(i){if(s.mobileCleanup(i),f(i)!==!0)return;o.hide(i),l.value.classList.add("non-selectable");const v=i.target;J(s,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),h=setTimeout(()=>{o.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){l.value.classList.remove("non-selectable"),clearTimeout(h),e.value===!0&&i!==void 0&&De()}}),a=function(i=n.contextMenu){if(n.noParentEvent===!0||l.value===null)return;let v;i===!0?o.$q.platform.is.mobile===!0?v=[[l.value,"touchstart","mobileTouch","passive"]]:v=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:v=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],J(s,"anchor",v)});function d(){Se(s,"anchor")}function g(i){for(l.value=i;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;a()}function m(){if(n.target===!1||n.target===""||o.$el.parentNode===null)l.value=null;else if(n.target===!0)g(o.$el.parentNode);else{let i=n.target;if(typeof n.target=="string")try{i=document.querySelector(n.target)}catch{i=void 0}i!=null?(l.value=i.$el||i,a()):(l.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return x(()=>n.contextMenu,i=>{l.value!==null&&(d(),a(i))}),x(()=>n.target,()=>{l.value!==null&&d(),m()}),x(()=>n.noParentEvent,i=>{l.value!==null&&(i===!0?d():a())}),ae(()=>{m(),t!==!0&&n.modelValue===!0&&l.value===null&&u("update:modelValue",!1)}),F(()=>{clearTimeout(h),d()}),{anchorEl:l,canShow:f,anchorEvents:s}}function tt(e,t){const a=C(null);let n;function o(h,f){const s=`${f!==void 0?"add":"remove"}EventListener`,d=f!==void 0?f:n;h!==window&&h[s]("scroll",d,O.passive),window[s]("scroll",d,O.passive),n=f}function u(){a.value!==null&&(o(a.value),a.value=null)}const l=x(()=>e.noParentEvent,()=>{a.value!==null&&(u(),t())});return F(l),{localScrollTarget:a,unconfigureScrollTarget:u,changeScrollEvent:o}}let ue;const{notPassiveCapture:H}=O,y=[];function M(e){clearTimeout(ue);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let a=X.length-1;for(;a>=0;){const n=X[a].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;a--}for(let n=y.length-1;n>=0;n--){const o=y[n];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function nt(e){y.push(e),y.length===1&&(document.addEventListener("mousedown",M,H),document.addEventListener("touchstart",M,H))}function ee(e){const t=y.findIndex(a=>a===e);t>-1&&(y.splice(t,1),y.length===0&&(clearTimeout(ue),document.removeEventListener("mousedown",M,H),document.removeEventListener("touchstart",M,H)))}let te,ne;function oe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ot(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const $={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{$[`${e}#ltr`]=e,$[`${e}#rtl`]=e});function le(e,t){const a=e.split(" ");return{vertical:a[0],horizontal:$[`${a[1]}#${t===!0?"rtl":"ltr"}`]}}function lt(e,t){let{top:a,left:n,right:o,bottom:u,width:l,height:h}=e.getBoundingClientRect();return t!==void 0&&(a-=t[1],n-=t[0],u+=t[1],o+=t[0],l+=t[0],h+=t[1]),{top:a,left:n,right:o,bottom:u,width:l,height:h,middle:n+(o-n)/2,center:a+(u-a)/2}}function at(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function it(e){if(ke.is.ios===!0&&window.visualViewport!==void 0){const h=document.body.style,{offsetLeft:f,offsetTop:s}=window.visualViewport;f!==te&&(h.setProperty("--q-pe-left",f+"px"),te=f),s!==ne&&(h.setProperty("--q-pe-top",s+"px"),ne=s)}let t;const{scrollLeft:a,scrollTop:n}=e.el;if(e.absoluteOffset===void 0)t=lt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:h,left:f}=e.anchorEl.getBoundingClientRect(),s=h+e.absoluteOffset.top,d=f+e.absoluteOffset.left;t={top:s,left:d,width:1,height:1,right:d+1,center:s,middle:d,bottom:s+1}}let o={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(o.minWidth=t.width+"px",e.cover===!0&&(o.minHeight=t.height+"px")),Object.assign(e.el.style,o);const u=at(e.el),l={top:t[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};ut(l,t,u,e.anchorOrigin,e.selfOrigin),o={top:l.top+"px",left:l.left+"px"},l.maxHeight!==void 0&&(o.maxHeight=l.maxHeight+"px",t.height>l.maxHeight&&(o.minHeight=o.maxHeight)),l.maxWidth!==void 0&&(o.maxWidth=l.maxWidth+"px",t.width>l.maxWidth&&(o.minWidth=o.maxWidth)),Object.assign(e.el.style,o),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==a&&(e.el.scrollLeft=a)}function ut(e,t,a,n,o){const u=a.bottom,l=a.right,h=Le(),f=window.innerHeight-h,s=document.body.clientWidth;if(e.top<0||e.top+u>f)if(o.vertical==="center")e.top=t[n.vertical]>f/2?Math.max(0,f-u):0,e.maxHeight=Math.min(u,f);else if(t[n.vertical]>f/2){const d=Math.min(f,n.vertical==="center"?t.center:n.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,d),e.top=Math.max(0,d-u)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,f-e.top);if(e.left<0||e.left+l>s)if(e.maxWidth=Math.min(l,s),o.horizontal==="middle")e.left=t[n.horizontal]>s/2?Math.max(0,s-l):0;else if(t[n.horizontal]>s/2){const d=Math.min(s,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(l,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(l,s-e.left)}var rt=z({name:"QMenu",inheritAttrs:!1,props:{...Ze,...Oe,...Ge,...ie,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:ot},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...$e,"click","escape-key"],setup(e,{slots:t,emit:a,attrs:n}){let o=null,u,l,h;const f=V(),{proxy:s}=f,{$q:d}=s,g=C(null),m=C(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),v=Ue(e,d),{registerTick:E,removeTick:P}=ze(),{registerTimeout:k}=Re(),{transition:T,transitionStyle:q}=Fe(e,m),{localScrollTarget:c,changeScrollEvent:se,unconfigureScrollTarget:ce}=tt(e,G),{anchorEl:B,canShow:de}=et({showing:m}),{hide:j}=Ve({showing:m,canShow:de,handleShow:ge,handleHide:be,hideOnRouteChange:i,processOnMount:!0}),{showPortal:Q,hidePortal:I,renderPortal:fe}=je(f,g,xe),W={anchorEl:B,innerRef:g,onClickOutside(r){if(e.persistent!==!0&&m.value===!0)return j(r),(r.type==="touchstart"||r.target.classList.contains("q-dialog__backdrop"))&&Ee(r),!0}},K=b(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),he=b(()=>e.cover===!0?K.value:le(e.self||"top start",d.lang.rtl)),ve=b(()=>(e.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),me=b(()=>e.autoClose===!0?{onClick:we}:{}),_=b(()=>m.value===!0&&e.persistent!==!0);x(_,r=>{r===!0?(Ne(p),nt(W)):(Z(p),ee(W))});function A(){Ye(()=>{let r=g.value;r&&r.contains(document.activeElement)!==!0&&(r=r.querySelector("[autofocus], [data-autofocus]")||r,r.focus({preventScroll:!0}))})}function ge(r){if(o=e.noRefocus===!1?document.activeElement:null,Qe(U),Q(),G(),u=void 0,r!==void 0&&(e.touchPosition||e.contextMenu)){const D=Te(r);if(D.left!==void 0){const{top:ye,left:Be}=B.value.getBoundingClientRect();u={left:D.left-Be,top:D.top-ye}}}l===void 0&&(l=x(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,S)),e.noFocus!==!0&&document.activeElement.blur(),E(()=>{S(),e.noFocus!==!0&&A()}),k(()=>{d.platform.is.ios===!0&&(h=e.autoClose,g.value.click()),S(),Q(!0),a("show",r)},e.transitionDuration)}function be(r){P(),I(),N(!0),o!==null&&(r===void 0||r.qClickOutside!==!0)&&(o.focus(),o=null),k(()=>{I(!0),a("hide",r)},e.transitionDuration)}function N(r){u=void 0,l!==void 0&&(l(),l=void 0),(r===!0||m.value===!0)&&(Ie(U),ce(),ee(W),Z(p)),r!==!0&&(o=null)}function G(){(B.value!==null||e.scrollTarget!==void 0)&&(c.value=Ke(B.value,e.scrollTarget),se(c.value,S))}function we(r){h!==!0?(_e(s,r),a("click",r)):h=!1}function U(r){_.value===!0&&e.noFocus!==!0&&Me(g.value,r.target)!==!0&&A()}function p(r){a("escape-key"),j(r)}function S(){const r=g.value;r===null||B.value===null||it({el:r,offset:e.offset,anchorEl:B.value,anchorOrigin:K.value,selfOrigin:he.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function xe(){return w(He,{name:T.value,appear:!0},()=>m.value===!0?w("div",{role:"menu",...n,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+ve.value,n.class],style:[n.style,q.value],...me.value},R(t.default)):null)}return F(N),Object.assign(s,{focus:A,updatePosition:S}),fe}});const re=Object.keys(We),st=re.reduce((e,t)=>(e[t]={})&&e,{}),ct=e=>re.reduce((t,a)=>{const n=e[a];return n!==void 0&&(t[a]=n),t},{});var gt=z({name:"QBtnDropdown",props:{...st,...ie,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:t,emit:a}){const{proxy:n}=V(),o=C(e.modelValue),u=C(null),l=Je(),h=b(()=>{const c={"aria-expanded":o.value===!0?"true":"false","aria-haspopup":"true","aria-controls":l,"aria-owns":l,"aria-label":e.toggleAriaLabel||n.$q.lang.label[o.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(c["aria-disabled"]="true"),c}),f=b(()=>"q-btn-dropdown__arrow"+(o.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),s=b(()=>Ae(e)),d=b(()=>ct(e));x(()=>e.modelValue,c=>{u.value!==null&&u.value[c?"show":"hide"]()}),x(()=>e.split,q);function g(c){o.value=!0,a("before-show",c)}function m(c){a("show",c),a("update:modelValue",!0)}function i(c){o.value=!1,a("before-hide",c)}function v(c){a("hide",c),a("update:modelValue",!1)}function E(c){a("click",c)}function P(c){pe(c),q(),a("click",c)}function k(c){u.value!==null&&u.value.toggle(c)}function T(c){u.value!==null&&u.value.show(c)}function q(c){u.value!==null&&u.value.hide(c)}return Object.assign(n,{show:T,hide:q,toggle:k}),ae(()=>{e.modelValue===!0&&T()}),()=>{const c=[w(Pe,{class:f.value,name:e.dropdownIcon||n.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&c.push(w(rt,{ref:u,id:l,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:g,onShow:m,onBeforeHide:i,onHide:v},t.default)),e.split===!1?w(L,{class:"q-btn-dropdown q-btn-dropdown--simple",...d.value,...h.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:E},{default:()=>R(t.label,[]).concat(c),loading:t.loading}):w(Xe,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...s.value,glossy:e.glossy,stretch:e.stretch},()=>[w(L,{class:"q-btn-dropdown--current",...d.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:P},{default:t.label,loading:t.loading}),w(L,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...h.value,...s.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>c)])}}});export{gt as Q};
