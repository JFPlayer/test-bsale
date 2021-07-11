(()=>{var e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),o=r(26),a=r(372),s=r(327),c=r(97),i=r(109),u=r(985),d=r(61);e.exports=function(e){return new Promise((function(t,r){var p=e.data,f=e.headers;n.isFormData(p)&&delete f["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(h+":"+m)}var g=c(e.baseURL,e.url);if(l.open(e.method.toUpperCase(),s(g,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?i(l.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};o(t,r,a),l=null}},l.onabort=function(){l&&(r(d("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){r(d("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(d(t,e,"ECONNABORTED",l)),l=null},n.isStandardBrowserEnv()){var v=(e.withCredentials||u(g))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;v&&(f[e.xsrfHeaderName]=v)}if("setRequestHeader"in l&&n.forEach(f,(function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete f[t]:l.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){l&&(l.abort(),r(e),l=null)})),p||(p=null),l.send(p)}))}},609:(e,t,r)=>{"use strict";var n=r(867),o=r(849),a=r(321),s=r(185);function c(e){var t=new a(e),r=o(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var i=c(r(655));i.Axios=a,i.create=function(e){return c(s(i.defaults,e))},i.Cancel=r(263),i.CancelToken=r(972),i.isCancel=r(502),i.all=function(e){return Promise.all(e)},i.spread=r(713),i.isAxiosError=r(268),e.exports=i,e.exports.default=i},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),o=r(327),a=r(782),s=r(572),c=r(185);function i(e){this.defaults=e,this.interceptors={request:new a,response:new a}}i.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=c(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},i.prototype.getUri=function(e){return e=c(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){i.prototype[e]=function(t,r){return this.request(c(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){i.prototype[e]=function(t,r,n){return this.request(c(n||{},{method:e,url:t,data:r}))}})),e.exports=i},782:(e,t,r)=>{"use strict";var n=r(867);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,r)=>{"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,o,a){var s=new Error(e);return n(s,t,r,o,a)}},572:(e,t,r)=>{"use strict";var n=r(867),o=r(527),a=r(502),s=r(655);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],a=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],c=["validateStatus"];function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=i(void 0,e[o])):r[o]=i(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),n.forEach(a,u),n.forEach(s,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=i(void 0,e[o])):r[o]=i(void 0,t[o])})),n.forEach(c,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var d=o.concat(a).concat(s).concat(c),p=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===d.indexOf(e)}));return n.forEach(p,u),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},655:(e,t,r)=>{"use strict";var n=r(867),o=r(16),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,i={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=r(448)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){i.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){i.headers[e]=n.merge(a)})),e.exports=i},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),a=s.join("&")}if(a){var c=e.indexOf("#");-1!==c&&(e=e.slice(0,c)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,a,s){var c=[];c.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),n.isString(o)&&c.push("path="+o),n.isString(a)&&c.push("domain="+a),!0===s&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,s={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,r)=>{"use strict";var n=r(849),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function c(e){return null!==e&&"object"==typeof e}function i(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:i,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return c(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function r(r,n){i(t[n])&&i(r)?t[n]=e(t[n],r):i(r)?t[n]=e({},r):a(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)d(arguments[n],r);return t},extend:function(e,t,r){return d(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var t=function(e,t){var r=document.createElement("button");return r.innerHTML=e||"",r.className="pagination__item",r.dataset.page=t,r};var n=r(669),o=r.n(n);function a(e){var t=e.keyword,r=void 0===t?"":t,n=e.page,a=void 0===n?1:n,s=e.categoryId,c=void 0===s?"":s,i=e.limit,u=void 0===i?10:i;return o().get("".concat("/api/products","?limit=").concat(u,"&page=").concat(a,"&search=").concat(r,"&categoryId=").concat(c)).then((function(e){var t=e.data;return{products:t.body.rows,total:t.body.count}})).catch((function(){return{products:[],total:0}}))}var s=document.querySelector("#btn-menu"),c=document.querySelector("#slideout-categories"),i=document.querySelector("#categories-list");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){e(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s.addEventListener("click",(function(){c.classList.toggle("active")})),o().get("/api/categories").then((function(e){return e.data.body})).catch((function(){return[]})).then((function(e){!function(e){var t=document.createDocumentFragment();e.forEach((function(e){var r={name:e.name,categoryId:e.id};t.appendChild(function(e){var t=e.categoryId,r=e.name,n=document.createElement("li");return n.className="categories-item",n.dataset.category=t,n.innerText=r,n}(r))})),i.appendChild(t)}(e)})).catch((function(e){console.log(e)}));var p=document.querySelector("#catalog-list"),f=document.querySelector("#pagination-container"),l={products:[],page:1,search:"",searchCategory:"",limit:10,cart:[],totalProducts:0,timeoutId:null};function h(e){return l[e]}function m(e,r){switch(e){case"set-products":l=d(d({},l),{},{products:r.products,totalProducts:r.totalProducts}),c=h("products"),i=Math.ceil(h("totalProducts")/h("limit")),function(e){var t=document.createDocumentFragment();e.forEach((function(e){var r={productId:e.id,src:e.url_image,name:e.name,category:e.Category.name,price:e.price,discount:e.discount};t.appendChild(function(e){var t=e.productId,r=e.src,n=e.name,o=e.price,a=document.createElement("div");a.className="product";var s=document.createElement("a");s.href="/product.html?productId=".concat(t);var c,i=document.createElement("div");i.className="product__image",r?((c=document.createElement("img")).src=r,c.alt=n):(c=document.createElement("div")).innerText="NO IMAGE",i.appendChild(c);var u=document.createElement("div");u.className="product__title";var d=document.createElement("span");d.innerText=n,u.appendChild(d),s.append(i,u);var p=document.createElement("div");p.className="product__description";var f=document.createElement("span");f.innerText="$".concat(o.toLocaleString("de-DE")),f.className="product__price";var l=document.createElement("button");return l.className="product__cart",l.dataset.action="add",l.dataset.product=t,l.innerHTML='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                viewBox="0 0 193.056 193.056" style="enable-background:new 0 0 193.056 193.056;" xml:space="preserve">\n              <g>\n                <g>\n                  <g>\n                    <path d="M163.972,147.499H63.367l-2.13-8.714H175.25l16.571-72.198l-14.832-3.406l-13.863,60.387H57.893l-10.056-55.55L36.184,0\n                      H1.235v15.217h22.116l5.694,33.234l-0.211,0.038l16.351,90.298h0.383l2.214,9.049c-10.774,1.798-19.021,11.164-19.021,22.44\n                      c0,12.562,10.218,22.78,22.777,22.78c12.562,0,22.78-10.218,22.78-22.78c0-2.65-0.479-5.192-1.319-7.558h69.512\n                      c-0.837,2.369-1.319,4.91-1.319,7.558c0,12.562,10.216,22.78,22.775,22.78c12.562,0,22.78-10.218,22.78-22.78\n                      C186.754,157.718,176.534,147.499,163.972,147.499z M51.54,177.837c-4.17,0-7.56-3.393-7.56-7.563\n                      c0-4.167,3.391-7.558,7.56-7.558s7.563,3.394,7.563,7.558C59.103,174.446,55.71,177.837,51.54,177.837z M163.972,177.84\n                      c-4.169,0-7.558-3.393-7.558-7.563c0-4.167,3.391-7.558,7.558-7.558c4.172,0,7.563,3.393,7.563,7.558\n                      C171.537,174.446,168.144,177.84,163.972,177.84z"/>\n                    <path d="M102.376,103.527c0.276,0.276,0.583,0.5,0.893,0.728c1.331,0.981,2.906,1.501,4.489,1.501\n                      c1.552,0,3.097-0.495,4.415-1.441c0.335-0.241,0.664-0.487,0.964-0.789l29.656-29.651c2.972-2.97,2.972-7.789,0-10.761\n                      c-2.967-2.972-7.786-2.97-10.758,0l-16.668,16.665V31.966c0-4.202-3.406-7.609-7.609-7.609c-4.202,0-7.609,3.406-7.609,7.609\n                      v47.812L83.481,63.113c-2.972-2.97-7.791-2.97-10.758,0c-2.972,2.97-2.972,7.789,0,10.761L102.376,103.527z"/>\n                  </g>\n                </g>\n              </g>\n              </svg>',p.append(f,l),a.append(s,p),a}(r))})),p.innerHTML="",p.append(t),p.removeEventListener("click",v),p.addEventListener("click",v)}(c),function(e){f.removeEventListener("click",g),f.addEventListener("click",g),f.innerHTML="",f.appendChild(function(e){var r=document.createDocumentFragment();r.appendChild(t('<svg width="24" height="24" fill="none" viewBox="0 0 24 24">\n              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.25 8.75L9.75 12L13.25 15.25"></path>\n            </svg>',"back"));for(var n=0;n<e;n++)r.appendChild(t(n+1,n+1));return r.appendChild(t('<svg width="24" height="24" fill="none" viewBox="0 0 24 24">\n              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path>\n            </svg>',"forward")),r}(e))}(i);break;case"set-timeoutId":l=d(d({},l),{},{timeoutId:r});break;case"set-page":l=d(d({},l),{},{page:r});break;case"set-search":l=d(d({},l),{},{search:r}),a({keyword:h("search")}).then((function(e){m("set-products",{products:e.products,totalProducts:e.total}),m("set-page",1)})).catch((function(){m("set-products",{products:[],totalProducts:0}),m("set-page",1)}));break;case"set-searchCategory":l=d(d({},l),{},{searchCategory:r});break;case"update-cart":var n=!1,o=l.products.find((function(e){return e.id==r})),s=l.cart.map((function(e){return e.id===o.id?(n=!0,d(d({},e),{},{quantity:e.quantity+1})):e}));n||s.push(d(d({},o),{},{quantity:1})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];localStorage.setItem("productsCart",JSON.stringify(e))}((l=d(d({},l),{},{cart:s})).cart);break;case"set-cart":l=d(d({},l),{},{cart:r})}var c,i}function g(e){var t=e.target.dataset.page||e.target.parentNode.dataset.page,r=!1,n=h("page"),o=Math.ceil(h("totalProducts")/h("limit"));if("back"===t&&n>1&&(m("set-page",n-1),r=!0),"forward"===t&&n<o&&(m("set-page",n+1),r=!0),t>0&&t<=o&&t!=n&&(m("set-page",t),r=!0),r){var s=h("search"),c=h("searchCategory");a({keyword:s,page:t,categoryId:c}).then((function(e){m("set-products",{products:e.products,totalProducts:e.total}),m("set-page",t),window.scrollTo(0,0)})).catch((function(){m("set-products",{products:[],totalProducts:0}),m("set-page",1),window.scrollTo(0,0)}))}}function v(e){"add"===(e.target.dataset.action||e.target.parentNode.dataset.action)&&m("update-cart",e.target.dataset.product||e.target.parentNode.dataset.product)}function y(e){var t=e.target.value;clearTimeout(h("timeoutId"));var r=setTimeout((function(){m("set-search",t)}),750);m("set-timeoutId",r)}function w(e){var t=e.target.dataset.category;t&&(m("set-searchCategory",t),a({categoryId:t}).then((function(e){m("set-products",{products:e.products,totalProducts:e.total}),m("set-page",1)})).catch((function(){m("set-products",{products:[],totalProducts:0}),m("set-page",1)})))}!function(){var e,t={},r={},n=new URLSearchParams(window.location.search);for(var o in t.categoryId=n.get("categoryId"),t.keyword=n.get("search"),t)t[o]&&(r[o]=t[o]);a(r).then((function(e){m("set-products",{products:e.products,totalProducts:e.total})})).catch((function(){m("set-products",{products:[],totalProducts:0})})),m("set-cart",(e=localStorage.getItem("productsCart"))?JSON.parse(e):[]),document.querySelector("#search-bar").addEventListener("input",y),document.querySelector("#categories-list").addEventListener("click",w)}()})()})();