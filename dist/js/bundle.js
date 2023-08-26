/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={81:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";t=function(){return r};var r={},o=Object.prototype,n=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},p=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",y=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var n=t&&t.prototype instanceof d?t:d,a=Object.create(n.prototype),p=new C(o||[]);return i(a,"_invoke",{value:L(e,r,p)}),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=s;var m={};function d(){}function f(){}function g(){}var h={};u(h,p,(function(){return this}));var v=Object.getPrototypeOf,P=v&&v(v(k([])));P&&P!==o&&n.call(P,p)&&(h=P);var w=g.prototype=d.prototype=Object.create(h);function F(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(t,r){function o(i,a,p,c){var y=l(t[i],t,a);if("throw"!==y.type){var u=y.arg,s=u.value;return s&&"object"==e(s)&&n.call(s,"__await")?r.resolve(s.__await).then((function(e){o("next",e,p,c)}),(function(e){o("throw",e,p,c)})):r.resolve(s).then((function(e){u.value=e,p(u)}),(function(e){return o("throw",e,p,c)}))}c(y.arg)}var a;i(this,"_invoke",{value:function(e,t){function n(){return new r((function(r,n){o(e,t,r,n)}))}return a=a?a.then(n,n):n()}})}function L(e,t,r){var o="suspendedStart";return function(n,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw i;return{value:void 0,done:!0}}for(r.method=n,r.arg=i;;){var a=r.delegate;if(a){var p=E(a,r);if(p){if(p===m)continue;return p}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=l(e,t,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function E(e,t){var r=t.method,o=e.iterator[r];if(void 0===o)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var n=l(o,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function k(e){if(e){var t=e[p];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=g,i(w,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:f,configurable:!0}),f.displayName=u(g,y,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,y,"GeneratorFunction")),e.prototype=Object.create(w),e},r.awrap=function(e){return{__await:e}},F(b.prototype),u(b.prototype,c,(function(){return this})),r.AsyncIterator=b,r.async=function(e,t,o,n,i){void 0===i&&(i=Promise);var a=new b(s(e,t,o,n),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},F(w),u(w,y,"Generator"),u(w,p,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},r.values=k,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return a.type="throw",a.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var p=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(p&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(p){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;x(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},r}function r(e,t,r,o,n,i,a){try{var p=e[i](a),c=p.value}catch(e){return void r(e)}p.done?t(c):Promise.resolve(c).then(o,n)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var n,i,a=document.querySelector(".btn"),p=document.querySelector("nav"),c=document.querySelectorAll("img"),y=document.querySelector(".toggle-mode__button"),u=document.querySelector("body"),s=document.querySelector("#light-dark"),l=document.querySelectorAll(".dropdown-item"),m=document.querySelector(".form-control"),d=document.querySelector(".form-item"),f=document.querySelector("#navbar-search-autocomplete"),g=(n=l,function(e){if(Array.isArray(e))return o(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){return[e.textContent,e.getAttribute("href")]}));function h(){var e;return e=t().mark((function e(){var r,o,n,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(e,t,r){t.setPosition(r),t.setContent(e?"Error: The Geolocation service failed.":"Error: Your browser doesn't support geolocation."),t.open(i)},i=new google.maps.Map(document.getElementById("map"),{center:{lat:24.960855,lng:121.259092},zoom:15}),r=new google.maps.Marker({position:i.getCenter(),map:i,title:"現在位置"}),i.data.addGeoJson({type:"FeatureCollection",features:[{type:"Feature",properties:{name:"% Arabica Singapore CapitaSpring",type:"咖啡"},geometry:{type:"Point",coordinates:[103.85029936819264,1.285088744981146]}},{type:"Feature",properties:{name:"瑞春",type:"宵夜"},geometry:{type:"Point",coordinates:[103.85702521237086,1.3083143605652174]}},{type:"Feature",properties:{name:"Beach Road Scissor-Cut Curry Rice (Jalan Besar)",type:"剪刀剪"},geometry:{type:"Point",coordinates:[103.85782322586397,1.309774568741513]}},{type:"Feature",properties:{name:"545黃埔蝦麵",type:"麵食"},geometry:{type:"Point",coordinates:[103.85045123935696,1.305973486761974]}},{type:"Feature",properties:{name:"Hotel 1888 Collection",type:"Hotel"},geometry:{type:"Point",coordinates:[103.84392238168573,1.2833062712894856]}},{type:"Feature",properties:{name:"喜園",type:"早午餐"},geometry:{type:"Point",coordinates:[103.8558319105213,1.2962643395928042]}},{type:"Feature",properties:{name:"吐司工坊",type:"早午餐"},geometry:{type:"Point",coordinates:[103.86223516819261,1.3086302428141268]}},{type:"Feature",properties:{name:"Killiney Kopitiam",type:"早午餐"},geometry:{type:"Point",coordinates:[103.83941022401437,1.2990820176184579]}},{type:"Feature",properties:{name:"歐南園亞華肉骨茶",type:"肉骨茶"},geometry:{type:"Point",coordinates:[103.84225161052132,1.2726473556348472]}},{type:"Feature",properties:{name:"Founder Bak Kut Teh",type:"肉骨茶"},geometry:{type:"Point",coordinates:[103.85101155285001,1.3245948750537495]}},{type:"Feature",properties:{name:"明發鴨飯",type:"鴨肉飯"},geometry:{type:"Point",coordinates:[103.89017935469953,1.354650286791552]}},{type:"Feature",properties:{name:"黃亞細肉骨茶",type:"肉骨茶"},geometry:{type:"Point",coordinates:[103.85278210867175,1.3178484939533313]}},{type:"Feature",properties:{name:"結霜橋叻沙",type:"叻沙"},geometry:{type:"Point",coordinates:[103.85779089517868,1.3069288950637703]}},{type:"Feature",properties:{name:"Zam Zam Restaurant",type:"印度料理"},geometry:{type:"Point",coordinates:[103.85842925284994,1.3025000955115689]}},{type:"Feature",properties:{name:"脆皮泡芙",type:"點心"},geometry:{type:"Point",coordinates:[103.83440741052138,1.3029182954693639]}},{type:"Feature",properties:{name:"佳香米暹",type:"麵食"},geometry:{type:"Point",coordinates:[103.81821240867177,1.2874740186350433]}},{type:"Feature",properties:{name:"榜鵝椰漿飯",type:"椰漿飯"},geometry:{type:"Point",coordinates:[103.88664492401438,1.3621630151600197]}},{type:"Feature",properties:{name:"林志源肉乾",type:"伴手禮"},geometry:{type:"Point",coordinates:[103.84254161052135,1.2843416973322872]}},{type:"Feature",properties:{name:"天天海南雞飯",type:"海南雞飯"},geometry:{type:"Point",coordinates:[103.84479868168573,1.2807209500058638]}},{type:"Feature",properties:{name:"竹腳中心Tekka Centre",type:"小販中心"},geometry:{type:"Point",coordinates:[103.85069689702833,1.3064762430139998]}},{type:"Feature",properties:{name:"AR-Rahman Cafe 印度煎餅",type:"印度煎餅"},geometry:{type:"Point",coordinates:[103.8506692134101,1.3066574141877283]}},{type:"Feature",properties:{name:"Ya Kun Kaya Toast",type:"早午餐"},geometry:{type:"Point",coordinates:[103.9529726375074,1.343005261912856]}},{type:"Feature",properties:{name:"Ya Kun Family Cafe",type:"早午餐"},geometry:{type:"Point",coordinates:[103.9864351970283,1.3568730899116028]}},{type:"Feature",properties:{name:"亞坤咖椰吐司",type:"早午餐"},geometry:{type:"Point",coordinates:[103.84793176634305,1.2838400405211725]}},{type:"Feature",properties:{name:"Lau Pa Sat 老巴剎",type:"沙嗲"},geometry:{type:"Point",coordinates:[103.8503899375075,1.2809306976715236]}},{type:"Feature",properties:{name:"Good Morning Nanyang Cafe",type:"早午餐"},geometry:{type:"Point",coordinates:[103.83392681237092,1.307227142944353]}},{type:"Feature",properties:{name:"老伴豆花",type:"豆花"},geometry:{type:"Point",coordinates:[103.84454196634316,1.280605623861027]}},{type:"Feature",properties:{name:"飛飛雲吞麵",type:"麵食"},geometry:{type:"Point",coordinates:[103.90319405203236,1.3173094096960802]}},{type:"Feature",properties:{name:"國記雲吞麵",type:"麵食"},geometry:{type:"Point",coordinates:[103.8602166824844,1.312352119158738]}},{type:"Feature",properties:{name:"歐南園炒粿條",type:"早午餐"},geometry:{type:"Point",coordinates:[103.8459196130026,1.2854400906730654]}},{type:"Feature",properties:{name:"東亞餐室",type:"早午餐"},geometry:{type:"Point",coordinates:[103.8369446,1.2801503]}},{type:"Feature",properties:{name:"愛爾鴨",type:"聖淘沙"},geometry:{type:"Point",coordinates:[103.8178321,1.255957]}},{type:"Feature",properties:{name:"Killiney Kopitiam - Lorong Telok",type:"早午餐"},geometry:{type:"Point",coordinates:[103.8441048,1.2867611]}},{type:"Feature",properties:{name:"Bacha Coffee",type:"咖啡"},geometry:{type:"Point",coordinates:[103.8544954,1.2837419]}},{type:"Feature",properties:{name:"% Arabica Jewel Changi Airport",type:"咖啡"},geometry:{type:"Point",coordinates:[103.9851573,1.3603966]}},{type:"Feature",properties:{name:"% Arabica Singapore Arab Street",type:"咖啡"},geometry:{type:"Point",coordinates:[103.855009,1.3009527]}},{type:"Feature",properties:{name:"Makansutra Gluttons Bay",type:"辣椒螃蟹"},geometry:{type:"Point",coordinates:[103.8568698,1.2894024]}},{type:"Feature",properties:{name:"興記咖哩雞麵",type:"麵食"},geometry:{type:"Point",coordinates:[103.8414058,1.2851376]}},{type:"Feature",properties:{name:"白蘭閣街蝦麵",type:"麵食"},geometry:{type:"Point",coordinates:[103.8551276,1.3001657]}},{type:"Feature",properties:{name:"328加東叻沙",type:"叻沙"},geometry:{type:"Point",coordinates:[103.8987822,1.3050644]}},{type:"Feature",properties:{name:"無招牌海鮮",type:"海鮮"},geometry:{type:"Point",coordinates:[103.8782395,1.3129024]}},{type:"Feature",properties:{name:"珍寶海鮮",type:"海鮮"},geometry:{type:"Point",coordinates:[103.8401767,1.2889271]}},{type:"Feature",properties:{name:"545黃埔蝦麵",type:"麵食"},geometry:{type:"Point",coordinates:[103.8459451,1.305818]}},{type:"Feature",properties:{name:"大華豬肉粿條麵",type:"麵食"},geometry:{type:"Point",coordinates:[103.858051,1.3051319]}},{type:"Feature",properties:{name:"新剪刀剪",type:"剪刀剪"},geometry:{type:"Point",coordinates:[103.8842266,1.3145697]}},{type:"Feature",properties:{name:"大巴窑八巷剪刀剪",type:"剪刀剪"},geometry:{type:"Point",coordinates:[103.8497136,1.3401817]}},{type:"Feature",properties:{name:"Belinda‘s Traditional Pancake",type:"早午餐"},geometry:{type:"Point",coordinates:[103.8436945,1.3638918]}},{type:"Feature",properties:{name:"海星粿汁",type:"早午餐"},geometry:{type:"Point",coordinates:[103.8822785,1.3207798]}},{type:"Feature",properties:{name:"Toast Box",type:"早午餐"},geometry:{type:"Point",coordinates:[103.851385,1.2990891]}},{type:"Feature",properties:{name:"Killiney Kopitiam",type:"早午餐"},geometry:{type:"Point",coordinates:[1.2988729,103.834947]}},{type:"Feature",properties:{name:"麵包物語",type:"聖淘沙"},geometry:{type:"Point",coordinates:[1.2569498,103.8157495]}},{type:"Feature",properties:{name:"冰淇淋三明治",type:"點心"},geometry:{type:"Point",coordinates:[103.8282092,1.3042902]}},{type:"Feature",properties:{name:"福明熟食",type:"炒蘿蔔糕"},geometry:{type:"Point",coordinates:[103.8162245,1.2874783]}},{type:"Feature",properties:{name:"松發肉骨茶",type:"肉骨茶"},geometry:{type:"Point",coordinates:[103.8432403,1.2890282]}},{type:"Feature",properties:{name:"Shake Shack Jewel Changi",type:"速食"},geometry:{type:"Point",coordinates:[103.8785706,1.3105317]}},{type:"Feature",properties:{name:"Shake Shack Gardens by the Bay",type:"速食"},geometry:{type:"Point",coordinates:[103.8785706,1.3105317]}},{type:"Feature",properties:{name:"New Ubin Seafood CHIJMES",type:"晚餐"},geometry:{type:"Point",coordinates:[103.8527083,1.2949022]}}]},{idPropertyName:"name"}),i.data.setMap(i),o=new google.maps.InfoWindow,navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude};i.data.addListener("click",function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return clearTimeout(t),function(o){t=setTimeout((function(){e(o)}),r)}}((function(e){var t=e.feature.getProperty("name"),r=new google.maps.InfoWindow({content:t});r.setPosition(e.latLng),r.open(i),setTimeout((function(){r.close()}),1600)}))),o.setPosition(t),o.setContent("我的位置"),o.open(i,r),i.setCenter(t)}),(function(){n(!0,o,i.getCenter())})):n(!1,o,i.getCenter()),(a=document.createElement("button")).textContent="Pan to Current ",a.classList.add("custom-map-control-button"),i.controls[google.maps.ControlPosition.LEFT_CENTER].push(a),a.addEventListener("click",(function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude},r=new google.maps.Marker({position:t,map:i,title:"我的位置"});o.setPosition(t),o.setContent("我的位置"),o.open(i),i.setCenter(t),r.setMap(i)}),(function(){n(!0,o,i.getCenter())})):n(!1,o,i.getCenter())}));case 12:case"end":return e.stop()}}),e)})),h=function(){var t=this,o=arguments;return new Promise((function(n,i){var a=e.apply(t,o);function p(e){r(a,n,i,p,c,"next",e)}function c(e){r(a,n,i,p,c,"throw",e)}p(void 0)}))},h.apply(this,arguments)}m.addEventListener("input",function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800;return function(){clearTimeout(t),t=setTimeout((function(){e.apply(void 0,arguments)}),r)}}((function(){var e,t,r=m.value;r?(t=m.value,e=g.filter((function(e){return e[0].match(t)})),console.log(e),e.forEach((function(e){!function(e,t){var r=document.createElement("li"),o=document.createElement("a");f.children[1].children[0].appendChild(r).appendChild(o),o.textContent=e,o.setAttribute("href",t)}(e[0],e[1])})),d.style.display="flex"):(r=m.value,d.style.display="none")}))),document.onload=void c.forEach((function(e){e.setAttribute("loading","lazy")})),a.addEventListener("click",(function(){var e=window.scrollY;e=p.scrollTop,window.scrollTo(0,e)})),y.addEventListener("click",(function(){y.classList.toggle("act"),s.classList.remove("ri-sun-fill"),s.classList.add("ri-moon-line"),y.classList.contains("act")?u.dataset.bsTheme="dark":(u.dataset.bsTheme="light",s.classList.remove("ri-moon-line"),s.classList.add("ri-sun-fill"))})),window.initMap=function(){return h.apply(this,arguments)}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(81)})()})();