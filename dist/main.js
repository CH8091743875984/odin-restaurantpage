(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(601),a=n.n(i),o=n(314),r=n.n(o)()(a());r.push([e.id,"body {\n    background-color: lightgrey;\n    font-family: Georgia, sans-serif;\n    padding: 10px;\n}\n\n.headerMain {\n    border-bottom: 2px solid black;\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    padding: 5px;\n    font-size: 24pt;\n    font-weight: bold;\n    margin-bottom: 5px;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: auto auto auto;\n}\n\nnav > button {\n    border: none;\n    background-color: transparent;\n}\n\nnav > button:hover {\n    color: grey;\n}\n\n.homeImgContainer {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    justify-items: center;\n}\n\n.introTagline {\n    margin: 0px 0px 5px 10px;\n}\n\n.introText {\n    padding: 20px 100px 0px 100px;\n    text-align: center;\n}\n\n.menuContent {\n    margin: 0px 100px 0px 100px;\n    display: grid;\n    justify-content: center;\n}\n\n.foodMenu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    /* margin-left: 50px;\n    margin-right: 50px; */\n}\n\n.menuItem {\n    /* border: 1px solid black; */\n    background-color: white;\n    padding: 20px;\n    justify-content: center;\n    display: grid;\n    grid-template-rows: 1fr auto 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.menuItem > div, .menuItem > img {\n    padding-bottom: 5px;\n}\n\n.menuTitle {\n    padding: 10px 0px 10px 20px;\n    background-color: white;\n    border-bottom: 1px solid black;\n}\n\n.menuItem > div {\n    text-align: center;\n}\n\n.itemTitle {\n    font-weight: bold;\n}\n\n.itemPicture {\n    height: 100px;\n}\n\n.itemDescription, .itemPrice {\n    font-style: italic;\n    font-size: 10pt;\n}\n\n",""]);const c=r},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},r=[],c=0;c<e.length;c++){var s=e[c],d=i.base?s[0]+i.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var m=n(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var g=a(u,i);i.byIndex=c,t.splice(c,0,{identifier:p,updater:g,references:1})}r.push(p)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var c=n(o[r]);t[c].references--}for(var s=i(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},659:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}function i(){console.log("calling this"),a();const e=document.querySelector("#content"),t=document.createElement("header");t.textContent="TRADITIONAL ROMAN CUISINE",t.classList.add("introTagline"),e.appendChild(t);const n=document.createElement("div");n.classList.add("homeImgContainer");const i=document.createElement("img");i.src="https://static01.nyt.com/images/2022/03/02/dining/kc-pasta-amatriciana/merlin_201502869_17a64c2f-adee-4526-9951-a0b03270b022-master768.jpg",i.height=300,n.appendChild(i);const o=document.createElement("img");o.src="https://static01.nyt.com/images/2021/02/03/dining/pasta-alla-Gricia/pasta-alla-Gricia-master768.jpg",o.height=300,n.appendChild(o);const r=document.createElement("img");r.src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg",r.height=300,n.appendChild(r),e.appendChild(n);const c=document.createElement("div");c.classList.add("introText"),c.textContent="Transport yourself back in time to the dawning age of Italian cooking. The original four Roman pastas. Simple, high quality ingredients. No peas in the carbonara.",e.appendChild(c)}function a(){const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.firstChild)}function o(){a();const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menuContent"),e.appendChild(t);const n=document.createElement("div");n.textContent="Dinner Menu",n.classList.add("menuTitle"),t.appendChild(n);const i=[{itemTitle:"cacio e pepe",itemImg:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Spaghetti_cacio_e_pepe_%28creamy_as_it_should_be%29.jpg",itemDescription:"spaghetti, pecorino romano, black pepper",itemPrice:"18"},{itemTitle:"carbonara",itemImg:"https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg",itemDescription:"bucatini, pecorino romano, black pepper, egg yolk, guancale",itemPrice:"21"},{itemTitle:"gricia",itemImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pasta_alla_Gricia.jpg/1280px-Pasta_alla_Gricia.jpg",itemDescription:"spaghetti, pecorino romano, black pepper, guancale",itemPrice:"27"},{itemTitle:"amatriciana",itemImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bucatini_allamatriciana.jpg/1024px-Bucatini_allamatriciana.jpg",itemDescription:"bucatini, san marzano tomato, pecorino romano, black pepper, guancale",itemPrice:"32"}],o=document.createElement("div");o.classList.add("foodMenu");for(let e=0;e<i.length;e++){const t=document.createElement("div");t.classList.add("menuItem");const n=document.createElement("div");n.classList.add("itemTitle"),n.textContent=i[e].itemTitle,t.appendChild(n);const a=document.createElement("img");a.src=i[e].itemImg,a.classList.add("itemPicture"),t.appendChild(a);const r=document.createElement("div");r.classList.add("itemDescription"),r.textContent=i[e].itemDescription,t.appendChild(r);const c=document.createElement("div");c.classList.add("itemPrice"),c.textContent=i[e].itemPrice,t.appendChild(c),o.appendChild(t)}t.appendChild(o)}function r(){a();const e=document.querySelector("#content");e.textContent="placeholder for about content!";const t=document.createElement("img");t.src="https://wallpaperaccess.com/full/261540.jpg",t.height=300,e.appendChild(t)}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var c=n(72),s=n.n(c),d=n(825),l=n.n(d),p=n(659),m=n.n(p),u=n(56),g=n.n(u),f=n(540),h=n.n(f),v=n(113),b=n.n(v),x=n(208),y={};y.styleTagTransform=b(),y.setAttributes=g(),y.insert=m().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=h(),s()(x.A,y),x.A&&x.A.locals&&x.A.locals,console.log("testing 1 2 3"),function(){const e=document.getElementsByClassName("nav");console.log("trying buttons");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){"Home"==e[t].textContent&&i(),"Menu"==e[t].textContent&&o(),"About"==e[t].textContent&&r()}))}(),console.log("5"),i()})();