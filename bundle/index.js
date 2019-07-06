!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var o=n(2),i=n(3),r=n(4);n(9),n(10),o.attach(document.body);var s=window.Waypoint,l=document.querySelector(".PageHeader"),a=document.querySelector(".AboutMeAside"),c=document.querySelector(".WorkWithMeFooter");if(document.querySelectorAll("pre>code").forEach(function(t){window.hljs.highlightBlock(t)}),window.addEventListener("resize",i(function(){s.refreshAll()},20)),l){var u=l.querySelector(".Burger");u&&u.addEventListener("click",function(){l.classList.toggle("PageHeader--open"),u.classList.toggle("Burger--x")}),new s({element:document.getElementById("content"),offset:90,handler:function(t){switch(t){case"up":l.classList.remove("PageHeader--collapsed");break;case"down":l.classList.add("PageHeader--collapsed")}}}),a&&new s({element:a,offset:110,handler:function(t){switch(t){case"up":a.classList.remove("AboutMeAside--sticky");break;case"down":a.classList.add("AboutMeAside--sticky")}}}),c&&a&&new s({element:c,offset:"100%",handler:function(t){switch(t){case"up":a.classList.remove("AboutMeAside--bottom");break;case"down":a.classList.add("AboutMeAside--bottom")}}})}document.querySelector(".js-toc")&&r.init({tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h2, h3"})},function(t,e,n){var o;!function(){"use strict";
/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */function i(t,e){var n;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!i.notNeeded(t)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=0,l=o.length;r<l;r++)this[o[r]]=a(this[o[r]],this);s&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,o){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,o):i.call(t,e,n,o)},t.addEventListener=function(e,n,o){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(t,e,n,o)}),"function"==typeof t.onclick&&(n=t.onclick,t.addEventListener("click",function(t){n(t)},!1),t.onclick=null)}function a(t,e){return function(){return t.apply(e,arguments)}}}var r=navigator.userAgent.indexOf("Windows Phone")>=0,s=navigator.userAgent.indexOf("Android")>0&&!r,l=/iP(ad|hone|od)/.test(navigator.userAgent)&&!r,a=l&&/OS 4_\d(_\d)?/.test(navigator.userAgent),c=l&&/OS [6-7]_\d/.test(navigator.userAgent),u=navigator.userAgent.indexOf("BB10")>0;i.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(l&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},i.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!s;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},i.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},i.prototype.determineEventType=function(t){return s&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},i.prototype.focus=function(t){var e;l&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},i.prototype.updateScrollParent=function(t){var e,n;if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},i.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},i.prototype.onTouchStart=function(t){var e,n,o;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],l){if((o=window.getSelection()).rangeCount&&!o.isCollapsed)return!0;if(!a){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},i.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},i.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},i.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},i.prototype.onTouchEnd=function(t){var e,n,o,i,r,u=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,c&&(r=t.changedTouches[0],(u=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||u).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=u.tagName.toLowerCase())){if(e=this.findControl(u)){if(this.focus(u),s)return!1;u=e}}else if(this.needsFocus(u))return t.timeStamp-n>100||l&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,t),l&&"select"===o||(this.targetElement=null,t.preventDefault()),!1);return!(!l||a||!(i=u.fastClickScrollParent)||i.fastClickLastScrollTop===i.scrollTop)||(this.needsClick(u)||(t.preventDefault(),this.sendClick(u,t)),!1)},i.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},i.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},i.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||((e=this.onMouse(t))||(this.targetElement=null),e)},i.prototype.destroy=function(){var t=this.layer;s&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},i.notNeeded=function(t){var e,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!s)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(u&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&o[2]>=3&&(e=document.querySelector("meta[name=viewport]"))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},i.attach=function(t,e){return new i(t,e)},void 0===(o=function(){return i}.call(e,n,e,t))||(t.exports=o)}()},function(t,e,n){(function(e){var n="Expected a function",o=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,h=u||d||Function("return this")(),f=Object.prototype.toString,p=Math.max,m=Math.min,g=function(){return h.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&f.call(t)==i}(t))return o;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=l.test(t);return n||a.test(t)?c(t.slice(2),n?2:8):s.test(t)?o:+t}t.exports=function(t,e,o){var i,r,s,l,a,c,u=0,d=!1,h=!1,f=!0;if("function"!=typeof t)throw new TypeError(n);function w(e){var n=i,o=r;return i=r=void 0,u=e,l=t.apply(o,n)}function S(t){var n=t-c;return void 0===c||n>=e||n<0||h&&t-u>=s}function C(){var t=g();if(S(t))return k(t);a=setTimeout(C,function(t){var n=e-(t-c);return h?m(n,s-(t-u)):n}(t))}function k(t){return a=void 0,f&&i?w(t):(i=r=void 0,l)}function b(){var t=g(),n=S(t);if(i=arguments,r=this,c=t,n){if(void 0===a)return function(t){return u=t,a=setTimeout(C,e),d?w(t):l}(c);if(h)return a=setTimeout(C,e),w(c)}return void 0===a&&(a=setTimeout(C,e)),l}return e=y(e)||0,v(o)&&(d=!!o.leading,s=(h="maxWait"in o)?p(y(o.maxWait)||0,e):s,f="trailing"in o?!!o.trailing:f),b.cancel=function(){void 0!==a&&clearTimeout(a),u=0,i=c=r=a=void 0},b.flush=function(){return void 0===a?l:k(g())},b}}).call(this,n(0))},function(t,e,n){(function(o){var i,r,s,l;l=void 0!==o?o:this.window||this.global,r=[],i=function(t){"use strict";var e,o,i=n(5),r={},s={},l=n(6),a=n(7);if("undefined"!=typeof window){var c,u=!!t.document.querySelector&&!!t.addEventListener,d=Object.prototype.hasOwnProperty;return s.destroy=function(){if(!r.skipRendering)try{document.querySelector(r.tocSelector).innerHTML=""}catch(t){console.warn("Element not found: "+r.tocSelector)}r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).removeEventListener("resize",this._scrollListener,!1),e&&document.querySelector(r.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),e&&document.removeEventListener("click",this._clickListener,!1))},s.init=function(t){if(u&&(r=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var o in n)d.call(n,o)&&(t[o]=n[o])}return t}(i,t||{}),this.options=r,this.state={},r.scrollSmooth&&(r.duration=r.scrollSmoothDuration,r.offset=r.scrollSmoothOffset,s.scrollSmooth=n(8).initSmoothScrolling(r)),e=l(r),o=a(r),this._buildHtml=e,this._parseContent=o,s.destroy(),null!==(c=o.selectHeadings(r.contentSelector,r.headingSelector)))){var f=o.nestHeadingsArray(c).nest;r.skipRendering||e.render(r.tocSelector,f),this._scrollListener=h(function(t){e.updateToc(c);var n=t&&t.target&&t.target.scrollingElement&&0===t.target.scrollingElement.scrollTop;(t&&(0===t.eventPhase||null===t.currentTarget)||n)&&(e.updateToc(c),r.scrollEndCallback&&r.scrollEndCallback(t))},r.throttleTimeout),this._scrollListener(),r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var p=null;return this._clickListener=h(function(t){r.scrollSmooth&&e.disableTocAnimation(t),e.updateToc(c),p&&clearTimeout(p),p=setTimeout(function(){e.enableTocAnimation()},r.scrollSmoothDuration)},r.throttleTimeout),r.scrollContainer&&document.querySelector(r.scrollContainer)?document.querySelector(r.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},s.refresh=function(t){s.destroy(),s.init(t||this.options)},t.tocbot=s,s}function h(t,e,n){var o,i;return e||(e=250),function(){var r=n||this,s=+new Date,l=arguments;o&&s<o+e?(clearTimeout(i),i=setTimeout(function(){o=s,t.apply(r,l)},e)):(o=s,t.apply(r,l))}}}(l),void 0===(s="function"==typeof i?i.apply(e,r):i)||(t.exports=s)}).call(this,n(0))},function(t,e){t.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(t){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:!1,orderedList:!0,scrollContainer:null,skipRendering:!1}},function(t,e){t.exports=function(t){var e=[].forEach,n=[].some,o=document.body,i=!0,r=" ";function s(n,o){var i=o.appendChild(function(n){var o=document.createElement("li"),i=document.createElement("a");t.listItemClass&&o.setAttribute("class",t.listItemClass);t.onClick&&(i.onclick=t.onClick);t.includeHtml&&n.childNodes.length?e.call(n.childNodes,function(t){i.appendChild(t.cloneNode(!0))}):i.textContent=n.textContent;return i.setAttribute("href","#"+n.id),i.setAttribute("class",t.linkClass+r+"node-name--"+n.nodeName+r+t.extraLinkClasses),o.appendChild(i),o}(n));if(n.children.length){var a=l(n.isCollapsed);n.children.forEach(function(t){s(t,a)}),i.appendChild(a)}}function l(e){var n=t.orderedList?"ol":"ul",o=document.createElement(n),i=t.listClass+r+t.extraListClasses;return e&&(i+=r+t.collapsibleClass,i+=r+t.isCollapsedClass),o.setAttribute("class",i),o}return{enableTocAnimation:function(){i=!0},disableTocAnimation:function(e){var n=e.target||e.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(t.linkClass)&&(i=!1)},render:function(t,e){var n=l(!1);e.forEach(function(t){s(t,n)});var o=document.querySelector(t);if(null!==o)return o.firstChild&&o.removeChild(o.firstChild),0===e.length?o:o.appendChild(n)},updateToc:function(s){if(t.scrollContainer&&document.querySelector(t.scrollContainer))var l=document.querySelector(t.scrollContainer).scrollTop;else l=document.documentElement.scrollTop||o.scrollTop;t.positionFixedSelector&&function(){if(t.scrollContainer&&document.querySelector(t.scrollContainer))var e=document.querySelector(t.scrollContainer).scrollTop;else e=document.documentElement.scrollTop||o.scrollTop;var n=document.querySelector(t.positionFixedSelector);"auto"===t.fixedSidebarOffset&&(t.fixedSidebarOffset=document.querySelector(t.tocSelector).offsetTop),e>t.fixedSidebarOffset?-1===n.className.indexOf(t.positionFixedClass)&&(n.className+=r+t.positionFixedClass):n.className=n.className.split(r+t.positionFixedClass).join("")}();var a,c=s;if(i&&null!==document.querySelector(t.tocSelector)&&c.length>0){n.call(c,function(e,n){return function e(n){var o=0;return n!=document.querySelector(t.contentSelector&&null!=n)&&(o=n.offsetTop,t.hasInnerContainers&&(o+=e(n.offsetParent))),o}(e)>l+t.headingsOffset+10?(a=c[0===n?n:n-1],!0):n===c.length-1?(a=c[c.length-1],!0):void 0});var u=document.querySelector(t.tocSelector).querySelectorAll("."+t.linkClass);e.call(u,function(e){e.className=e.className.split(r+t.activeLinkClass).join("")});var d=document.querySelector(t.tocSelector).querySelectorAll("."+t.listItemClass);e.call(d,function(e){e.className=e.className.split(r+t.activeListItemClass).join("")});var h=document.querySelector(t.tocSelector).querySelector("."+t.linkClass+".node-name--"+a.nodeName+'[href="#'+a.id+'"]');-1===h.className.indexOf(t.activeLinkClass)&&(h.className+=r+t.activeLinkClass);var f=h.parentNode;f&&-1===f.className.indexOf(t.activeListItemClass)&&(f.className+=r+t.activeListItemClass);var p=document.querySelector(t.tocSelector).querySelectorAll("."+t.listClass+"."+t.collapsibleClass);e.call(p,function(e){-1===e.className.indexOf(t.isCollapsedClass)&&(e.className+=r+t.isCollapsedClass)}),h.nextSibling&&-1!==h.nextSibling.className.indexOf(t.isCollapsedClass)&&(h.nextSibling.className=h.nextSibling.className.split(r+t.isCollapsedClass).join("")),function e(n){return-1!==n.className.indexOf(t.collapsibleClass)&&-1!==n.className.indexOf(t.isCollapsedClass)?(n.className=n.className.split(r+t.isCollapsedClass).join(""),e(n.parentNode.parentNode)):n}(h.parentNode.parentNode)}}}}},function(t,e){t.exports=function(t){var e=[].reduce;function n(t){return t[t.length-1]}function o(t){return+t.nodeName.split("H").join("")}function i(e){var n={id:e.id,children:[],nodeName:e.nodeName,headingLevel:o(e),textContent:e.textContent.trim()};return t.includeHtml&&(n.childNodes=e.childNodes),n}return{nestHeadingsArray:function(r){return e.call(r,function(e,r){return function(e,r){for(var s=i(e),l=o(e),a=r,c=n(a),u=l-(c?c.headingLevel:0);u>0;)(c=n(a))&&void 0!==c.children&&(a=c.children),u--;l>=t.collapseDepth&&(s.isCollapsed=!0),a.push(s)}(i(r),e.nest),e},{nest:[]})},selectHeadings:function(e,n){var o=n;t.ignoreSelector&&(o=n.split(",").map(function(e){return e.trim()+":not("+t.ignoreSelector+")"}));try{return document.querySelector(e).querySelectorAll(o)}catch(t){return console.warn("Element not found: "+e),null}}}}},function(t,e){function n(t,e){var n=window.pageYOffset,o={duration:e.duration,offset:e.offset||0,callback:e.callback,easing:e.easing||d},i=document.querySelector('[id="'+decodeURI(t).split("#").join("")+'"]'),r=typeof t==="string"?o.offset+(t?i&&i.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):t,s=typeof o.duration==="function"?o.duration(r):o.duration,l,a;function c(t){a=t-l;window.scrollTo(0,o.easing(a,n,r,s));if(a<s){requestAnimationFrame(c)}else{u()}}function u(){if(window.scrollTo(0,n+r),"function"==typeof o.callback){o.callback()}}function d(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}requestAnimationFrame(function(t){l=t;c(t)})}e.initSmoothScrolling=function(t){document.documentElement.style;var e=t.duration,o=t.offset,i=location.hash?r(location.href):location.href;function r(t){return t.slice(0,t.lastIndexOf("#"))}!function(){document.body.addEventListener("click",function(s){if(l=s.target,"a"!==l.tagName.toLowerCase()||!(l.hash.length>0||"#"===l.href.charAt(l.href.length-1))||r(l.href)!==i&&r(l.href)+"#"!==i||s.target.className.indexOf("no-smooth-scroll")>-1||"#"===s.target.href.charAt(s.target.href.length-2)&&"!"===s.target.href.charAt(s.target.href.length-1)||-1===s.target.className.indexOf(t.linkClass))return;var l;n(s.target.hash,{duration:e,offset:o,callback:function(){var t,e;t=s.target.hash,(e=document.getElementById(t.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())}})},!1)}()}},function(t,e){
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";var t=0,e={};function n(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+t,this.options=n.Adapter.extend({},n.defaults,o),this.element=this.options.element,this.adapter=new n.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=n.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=n.Context.findOrCreateByElement(this.options.context),n.offsetAliases[this.options.offset]&&(this.options.offset=n.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),e[this.key]=this,t+=1}n.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},n.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},n.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete e[this.key]},n.prototype.disable=function(){return this.enabled=!1,this},n.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},n.prototype.next=function(){return this.group.next(this)},n.prototype.previous=function(){return this.group.previous(this)},n.invokeAll=function(t){var n=[];for(var o in e)n.push(e[o]);for(var i=0,r=n.length;i<r;i++)n[i][t]()},n.destroyAll=function(){n.invokeAll("destroy")},n.disableAll=function(){n.invokeAll("disable")},n.enableAll=function(){for(var t in n.Context.refreshAll(),e)e[t].enabled=!0;return this},n.refreshAll=function(){n.Context.refreshAll()},n.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},n.viewportWidth=function(){return document.documentElement.clientWidth},n.adapters=[],n.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},n.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=n}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}var e=0,n={},o=window.Waypoint,i=window.onload;function r(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+e,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,e+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new r(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}r.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},r.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),o=this.element==this.element.window;t&&e&&!o&&(this.adapter.off(".waypoints"),delete n[this.key])},r.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,o.requestAnimationFrame(e))})},r.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",function(){t.didScroll&&!o.isTouch||(t.didScroll=!0,o.requestAnimationFrame(e))})},r.prototype.handleResize=function(){o.Context.refreshAll()},r.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var o=e[n],i=o.newScroll>o.oldScroll?o.forward:o.backward;for(var r in this.waypoints[n]){var s=this.waypoints[n][r];if(null!==s.triggerPoint){var l=o.oldScroll<s.triggerPoint,a=o.newScroll>=s.triggerPoint;(l&&a||!l&&!a)&&(s.queueTrigger(i),t[s.group.id]=s.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},r.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},r.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},r.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},r.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var o=0,i=t.length;o<i;o++)t[o].destroy()},r.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),i={};for(var r in this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[r];for(var l in this.waypoints[r]){var a,c,u,d,h=this.waypoints[r][l],f=h.options.offset,p=h.triggerPoint,m=0,g=null==p;h.element!==h.element.window&&(m=h.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(h):"string"==typeof f&&(f=parseFloat(f),h.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),a=s.contextScroll-s.contextOffset,h.triggerPoint=Math.floor(m+a-f),c=p<s.oldScroll,u=h.triggerPoint>=s.oldScroll,d=!c&&!u,!g&&(c&&u)?(h.queueTrigger(s.backward),i[h.group.id]=h.group):!g&&d?(h.queueTrigger(s.forward),i[h.group.id]=h.group):g&&s.oldScroll>=h.triggerPoint&&(h.queueTrigger(s.forward),i[h.group.id]=h.group)}}return o.requestAnimationFrame(function(){for(var t in i)i[t].flushTriggers()}),this},r.findOrCreateByElement=function(t){return r.findByElement(t)||new r(t)},r.refreshAll=function(){for(var t in n)n[t].refresh()},r.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){i&&i(),r.refreshAll()},o.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},o.Context=r}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}var n={vertical:{},horizontal:{}},o=window.Waypoint;function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var o=this.triggerQueues[n],i="up"===n||"left"===n;o.sort(i?e:t);for(var r=0,s=o.length;r<s;r+=1){var l=o[r];(l.options.continuous||r===o.length-1)&&l.trigger([n])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var n=o.Adapter.inArray(e,this.waypoints);return n===this.waypoints.length-1?null:this.waypoints[n+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var n=o.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";var t=window.Waypoint;function e(t){return t===t.window}function n(t){return e(t)?t:t.defaultView}function o(t){this.element=t,this.handlers={}}o.prototype.innerHeight=function(){return e(this.element)?this.element.innerHeight:this.element.clientHeight},o.prototype.innerWidth=function(){return e(this.element)?this.element.innerWidth:this.element.clientWidth},o.prototype.off=function(t,e){function n(t,e,n){for(var o=0,i=e.length-1;o<i;o++){var r=e[o];n&&n!==r||t.removeEventListener(r)}}var o=t.split("."),i=o[0],r=o[1],s=this.element;if(r&&this.handlers[r]&&i)n(s,this.handlers[r][i],e),this.handlers[r][i]=[];else if(i)for(var l in this.handlers)n(s,this.handlers[l][i]||[],e),this.handlers[l][i]=[];else if(r&&this.handlers[r]){for(var a in this.handlers[r])n(s,this.handlers[r][a],e);this.handlers[r]={}}},o.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,e=n(this.element.ownerDocument),o={top:0,left:0};return this.element.getBoundingClientRect&&(o=this.element.getBoundingClientRect()),{top:o.top+e.pageYOffset-t.clientTop,left:o.left+e.pageXOffset-t.clientLeft}},o.prototype.on=function(t,e){var n=t.split("."),o=n[0],i=n[1]||"__default",r=this.handlers[i]=this.handlers[i]||{};(r[o]=r[o]||[]).push(e),this.element.addEventListener(o,e)},o.prototype.outerHeight=function(t){var n,o=this.innerHeight();return t&&!e(this.element)&&(n=window.getComputedStyle(this.element),o+=parseInt(n.marginTop,10),o+=parseInt(n.marginBottom,10)),o},o.prototype.outerWidth=function(t){var n,o=this.innerWidth();return t&&!e(this.element)&&(n=window.getComputedStyle(this.element),o+=parseInt(n.marginLeft,10),o+=parseInt(n.marginRight,10)),o},o.prototype.scrollLeft=function(){var t=n(this.element);return t?t.pageXOffset:this.element.scrollLeft},o.prototype.scrollTop=function(){var t=n(this.element);return t?t.pageYOffset:this.element.scrollTop},o.extend=function(){var t=Array.prototype.slice.call(arguments);function e(t,e){if("object"==typeof t&&"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}for(var n=1,o=t.length;n<o;n++)e(t[0],t[n]);return t[0]},o.inArray=function(t,e,n){return null==e?-1:e.indexOf(t,n)},o.isEmptyObject=function(t){for(var e in t)return!1;return!0},t.adapters.push({name:"noframework",Adapter:o}),t.Adapter=o}()},function(t,e){
/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";var t=window.jQuery,e=window.Waypoint;function n(o){this.options=t.extend({},e.defaults,n.defaults,o),this.element=this.options.element,this.$element=t(this.element),this.createWrapper(),this.createWaypoint()}n.prototype.createWaypoint=function(){var n=this.options.handler;this.waypoint=new e(t.extend({},this.options,{element:this.wrapper,handler:t.proxy(function(t){var e=this.options.direction.indexOf(t)>-1,o=e?this.$element.outerHeight(!0):"";this.$wrapper.height(o),this.$element.toggleClass(this.options.stuckClass,e),n&&n.call(this,t)},this)}))},n.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},n.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},n.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},e.Sticky=n}()}]);