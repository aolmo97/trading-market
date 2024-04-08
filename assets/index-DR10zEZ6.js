var gt=Object.defineProperty;var yt=(o,t,e)=>t in o?gt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var q=(o,t,e)=>(yt(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,F=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),G=new WeakMap;let lt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=G.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&G.set(e,t))}return t}toString(){return this.cssText}};const _t=o=>new lt(typeof o=="string"?o:o+"",void 0,W),At=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new lt(e,o,W)},vt=(o,t)=>{if(F)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},Z=F?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return _t(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Et,defineProperty:bt,getOwnPropertyDescriptor:St,getOwnPropertyNames:Ct,getOwnPropertySymbols:wt,getPrototypeOf:Pt}=Object,g=globalThis,J=g.trustedTypes,Ut=J?J.emptyScript:"",L=g.reactiveElementPolyfillSupport,P=(o,t)=>o,z={toAttribute(o,t){switch(t){case Boolean:o=o?Ut:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ht=(o,t)=>!Et(o,t),K={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:ht};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&bt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=St(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);r.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...Ct(e),...wt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:z).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:z;this._$Em=i,this[i]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ht)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[P("elementProperties")]=new Map,b[P("finalized")]=new Map,L==null||L({ReactiveElement:b}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,D=U.trustedTypes,Y=D?D.createPolicy("lit-html",{createHTML:o=>o}):void 0,ct="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,pt="?"+$,xt=`<${pt}>`,v=document,x=()=>v.createComment(""),T=o=>o===null||typeof o!="object"&&typeof o!="function",dt=Array.isArray,Tt=o=>dt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",k=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,y=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,ut=/^(?:script|style|textarea|title)$/i,Nt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),E=Nt(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),st=new WeakMap,_=v.createTreeWalker(v,129);function ft(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const Rt=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":"",n=w;for(let l=0;l<e;l++){const a=o[l];let c,d,h=-1,f=0;for(;f<a.length&&(n.lastIndex=f,d=n.exec(a),d!==null);)f=n.lastIndex,n===w?d[1]==="!--"?n=Q:d[1]!==void 0?n=X:d[2]!==void 0?(ut.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=y):d[3]!==void 0&&(n=y):n===y?d[0]===">"?(n=i??w,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?y:d[3]==='"'?et:tt):n===et||n===tt?n=y:n===Q||n===X?n=w:(n=y,i=void 0);const m=n===y&&o[l+1].startsWith("/>")?" ":"";r+=n===w?a+xt:h>=0?(s.push(c),a.slice(0,h)+ct+a.slice(h)+$+m):a+$+(h===-2?l:m)}return[ft(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const l=t.length-1,a=this.parts,[c,d]=Rt(t,e);if(this.el=N.createElement(c,s),_.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=_.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ct)){const f=d[n++],m=i.getAttribute(h).split($),M=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:M[2],strings:m,ctor:M[1]==="."?Mt:M[1]==="?"?Ht:M[1]==="@"?Dt:V}),i.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:r}),i.removeAttribute(h));if(ut.test(i.tagName)){const h=i.textContent.split($),f=h.length-1;if(f>0){i.textContent=D?D.emptyScript:"";for(let m=0;m<f;m++)i.append(h[m],x()),_.nextNode(),a.push({type:2,index:++r});i.append(h[f],x())}}}else if(i.nodeType===8)if(i.data===pt)a.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)a.push({type:7,index:r}),h+=$.length-1}r++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function C(o,t,e=o,s){var n,l;if(t===S)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const r=T(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=C(o,i._$AS(o,t.values),i,s)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);_.currentNode=i;let r=_.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new O(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Vt(r,this,t)),this._$AV.push(c),a=s[++l]}n!==(a==null?void 0:a.index)&&(r=_.nextNode(),n++)}return _.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),T(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==p&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(ft(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const n=new Ot(i,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new N(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new O(this.S(x()),this.S(x()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=C(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=C(this,l[s+a],e,a),c===S&&(c=this._$AH[a]),n||(n=!T(c)||c!==this._$AH[a]),c===p?t=p:t!==p&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mt extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ht extends V{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Dt extends V{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??p)===S)return;const s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const I=U.litHtmlPolyfillSupport;I==null||I(N,O),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.1.2");const Lt=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new O(t.insertBefore(x(),r),r,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let A=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}};var at;A._$litElement$=!0,A.finalized=!0,(at=globalThis.litElementHydrateSupport)==null||at.call(globalThis,{LitElement:A});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");const kt="https://www.alphavantage.co/query?",It="VGJJZ3G6O35GAZRW",mt=o=>{const t=`${kt}function=TIME_SERIES_INTRADAY&symbol=${o}&interval=5min&apikey=${It}`;return fetch(t).then(e=>e.json()).then(e=>{if(e["Error Message"])throw new Error("Error al obtener datos de la acción");return e}).catch(e=>{console.error("Error al obtener datos en tiempo real:",e)})};class jt extends A{static get properties(){return{portfolio:{type:Array},balance:{type:Number}}}constructor(){super(),this.portfolio=[],this.balance=1e4}setCompany(t){this.selectedCompany=t,this.fetchCompanyData()}fetchCompanyData(){this.selectedCompany&&mt(this.selectedCompany.symbol).then(t=>{console.log("Datos de la empresa:",t)}).catch(t=>{console.error("Error al obtener datos de la empresa:",t)})}async buyStock(t){}async sellStock(t){}render(){return E`
      <!-- UI para mostrar el portafolio y realizar operaciones -->
      <div>
        Balance: ${this.balance}
        <div>Portafolio:</div>
        <ul>
          ${this.portfolio.map(t=>E`<li>${t.name} - ${t.shares} shares</li>`)}
        </ul>
        <div>
          Empresa seleccionada:
          ${this.selectedCompany?this.selectedCompany.name:"Ninguna"}
        </div>
        <!-- Aquí puedes agregar elementos de UI para comprar/vender acciones -->
      </div>
    `}}customElements.define("stock-simulator",jt);const zt=At`
  .portfolio-list {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: white;
  }
  .portfolio-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid grey;
  }
  .symbol {
    font-size: 20px;
    font-weight: bold;
    width: 100%;
  }
  .change-positive {
    color: #4caf50; /* green */
  }
  .change-negative {
    color: #f44336; /* red */
  }
  .price,
  .shares {
  }
  .price,
  .shares {
    width: 15%;
  }
  .info-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 25%;
  }
  .portfolio-name {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .portfolio-data {
    width: 100%;
    margin-top: 10px;
  }
  .portfolio-total {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .portfolio-total span {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`,u=.9,B=[{name:"Apple",symbol:"AAPL",shares:.2,priceUSD:170.2,totalValueEur:.2*170.2*u,changePercent:-7.43},{name:"Amazon",symbol:"AMZN",shares:.14,priceUSD:183.42,totalValueEur:.14*183.42*u,changePercent:9.44},{name:"Alphabet (Class C)",symbol:"GOOG",shares:.15,priceUSD:155.43,totalValueEur:.15*155.43*u,changePercent:5.79},{name:"Microsoft",symbol:"MSFT",shares:.05,priceUSD:422.65,totalValueEur:.05*422.65*u,changePercent:9.61},{name:"Meta Platforms",symbol:"META",shares:.04,priceUSD:514.7,totalValueEur:.04*514.7*u,changePercent:36.63},{name:"Nvidia",symbol:"NVDA",shares:.01,priceUSD:898.43,totalValueEur:.01*898.43*u,changePercent:22.19},{name:"C4 Therapeutics",symbol:"CCCC",shares:1.57,priceUSD:7.81,totalValueEur:1.57*7.81*u,changePercent:5.42},{name:"LVMH Moët Hennessy Louis Vuitton",symbol:"LVMH",shares:.01,priceEUR:816.45,totalValueEur:.01*816.45,changePercent:12.94},{name:"Cazoo",symbol:"CZOO",shares:.43,priceUSD:11.58,totalValueEur:.43*11.58*u,changePercent:27.42},{name:"Sanmina Corporation",symbol:"SANM",shares:.06,priceUSD:61,priceEUR:61*u,totalValueEur:.06*61*u,changePercent:-2.29},{name:"Iamgold Corp",symbol:"IAG",shares:1,priceUSD:3.66,priceEUR:3.66*u,totalValueEur:1*3.66*u,changePercent:2.44},{name:"System1",symbol:"SST",shares:1,priceUSD:2.14,priceEUR:2.14*u,totalValueEur:1*2.14*u,changePercent:-13.27}];class $t extends A{static get properties(){return{portfolio:{type:Array},isRealTime:{type:Boolean},totalCost:{type:Number}}}constructor(){super(),this.portfolio=[],this.isRealTime=!1,this.totalCost=0}connectedCallback(){super.connectedCallback(),this.routeChange(),window.addEventListener("popstate",()=>this.routeChange())}disconnectedCallback(){window.removeEventListener("popstate",()=>this.routeChange()),super.disconnectedCallback()}routeChange(){const t=window.location.pathname;this.isRealTime=t.includes("/real-time"),this.isRealTime?this.updatePortfolioPrices():this.loadMockPortfolio()}loadMockPortfolio(){this.portfolio=B.map(t=>{const e=t.priceUSD?t.priceUSD*u:t.priceEUR,s=t.shares*e;return{...t,priceEUR:e,totalValueEur:parseFloat(s.toFixed(2))}}),this.calculateTotalCost()}async updatePortfolioPrices(){const t=this.portfolio.map(e=>mt(e.symbol).then(s=>{const i=s["Time Series (5min)"],r=Object.keys(i)[0],n=i[r],l=parseFloat(n["4. close"]);return{...e,priceUSD:l,totalValueEur:e.shares*l*u}}));try{this.portfolio=await Promise.all(t),this.calculateTotalCost()}catch(e){console.error("Error al actualizar los precios en tiempo real:",e)}}calculateTotalCost(){this.totalCost=this.portfolio.reduce((t,e)=>{const s=parseFloat(e.totalValueEur)||0;return t+s},0),this.totalCost=parseFloat(this.totalCost.toFixed(2)),console.log("totalCost: "+this.totalCost)}render(){return E`
      <div class="portfolio-list">
        <div class="portfolio-total">
          <h1>Capital at risk</h1>
          <span>${this.totalCost}€</span>
        </div>
        ${this.portfolio.map(t=>E`
            <div class="portfolio-item">
              <div class="portfolio-name">
                <span class="symbol">${t.name} (${t.symbol})</span>
                <div class="portfolio-data">
                  <span class="shares">${t.shares.toFixed(2)} shares</span>
                  <span class="price">
                    €${t.totalValueEur.toFixed(2)}
                  </span>
                </div>
              </div>
              <div class="info-user">
                <span class="total-value">
                  €${t.totalValueEur.toFixed(2)}
                </span>
                <span
                  class="change ${t.changePercent>=0?"change-positive":"change-negative"}"
                >
                  ${t.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>
          `)}
      </div>
    `}}q($t,"styles",[zt]);customElements.define("portfolio-view",$t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=new WeakMap,ot=o=>{if((e=>e.pattern!==void 0)(o))return o.pattern;let t=it.get(o);return t===void 0&&it.set(o,t=new URLPattern({pathname:o.path})),t};let Bt=class{constructor(t,e,s){this.routes=[],this.o=[],this.t={},this.i=i=>{if(i.routes===this)return;const r=i.routes;this.o.push(r),r.h=this,i.stopImmediatePropagation(),i.onDisconnect=()=>{var l;(l=this.o)==null||l.splice(this.o.indexOf(r)>>>0,1)};const n=rt(this.t);n!==void 0&&r.goto(n)},(this.l=t).addController(this),this.routes=[...e],this.fallback=s==null?void 0:s.fallback}link(t){var e;if(t!=null&&t.startsWith("/"))return t;if(t!=null&&t.startsWith("."))throw Error("Not implemented");return t??(t=this.u),(((e=this.h)==null?void 0:e.link())??"")+t}async goto(t){let e;if(this.routes.length===0&&this.fallback===void 0)e=t,this.u="",this.t={0:e};else{const s=this.p(t);if(s===void 0)throw Error("No route found for "+t);const i=ot(s).exec({pathname:t}),r=(i==null?void 0:i.pathname.groups)??{};if(e=rt(r),typeof s.enter=="function"&&await s.enter(r)===!1)return;this.v=s,this.t=r,this.u=e===void 0?t:t.substring(0,t.length-e.length)}if(e!==void 0)for(const s of this.o)s.goto(e);this.l.requestUpdate()}outlet(){var t,e;return(e=(t=this.v)==null?void 0:t.render)==null?void 0:e.call(t,this.t)}get params(){return this.t}p(t){const e=this.routes.find(s=>ot(s).test({pathname:t}));return e||this.fallback===void 0?e:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(R.eventName,this.i);const t=new R(this);this.l.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){var t;(t=this._)==null||t.call(this),this.h=void 0}};const rt=o=>{let t;for(const e of Object.keys(o))/\d+/.test(e)&&(t===void 0||e>t)&&(t=e);return t&&o[t]};class R extends Event{constructor(t){super(R.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}R.eventName="lit-routes-connected";const nt="/trading-market",Ft=[{path:`${nt}/`,render:()=>E`<portfolio-view .portfolio=${B}></portfolio-view>`},{path:`${nt}/real-time`,render:()=>E`<portfolio-view .portfolio=${B}></portfolio-view>`}];class Wt extends A{static get properties(){return{companies:{type:Array}}}constructor(){super(),this._routes=new Bt(this,Ft),this._routes.goto(window.location.pathname)}render(){return E` <main>${this._routes.outlet()}</main> `}}window.customElements.define("container-app",Wt);
