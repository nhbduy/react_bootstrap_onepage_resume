(this["webpackJsonpnhbduy-resume"]=this["webpackJsonpnhbduy-resume"]||[]).push([[3],{28:function(e,t,n){!function(t,s){e.exports=s(n(0),n(1))}(0,(function(e,t){return function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],s=!0,o=!1,i=void 0;try{for(var r,a=e[Symbol.iterator]();!(s=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);s=!0);}catch(e){o=!0,i=e}finally{try{!s&&a.return&&a.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();t.serialize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&";return Object.entries(e).map((function(e){var t=s(e,2);return t[0]+"="+t[1]})).join(t)},t.classToModules=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(!t)return e.join(" ").trim();for(var n=[],s=e.length;s--;)t[e[s]]&&n.push(t[e[s]]);return n},t.getClassName=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return t&&t[e]||e},t.MediaLoader=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"undefined"!=typeof window&&(this.image=new Image,this.resolve=null,this.video=document.createElement("video"),this.events())}return o(e,[{key:"events",value:function(){var e=this;this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!0)})),this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!1)})),this.image.onload=function(){return e.resolve&&e.resolve(!0)},this.image.onerror=function(){return e.resolve&&e.resolve(!1)}}},{key:"load",value:function(e){var t=this;return new Promise((function(n){e||n(!0),t.resolve=n,t.loading=!0,t.ended=!1,e.match(/\.(mp4|webm)/i)&&t.video.setAttribute("src",e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&(t.image.src=e,(t.image.width>0||t.image.height>0)&&n(!0))}))}}]),e}()},function(e,t,n){e.exports=function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function s(e,t,{tolerance:n=0,propertyName:s}={}){return new Promise(o=>{if(!e)return void o(!1);let i=null;const r=t.charAt(0).toUpperCase()+t.slice(1);let a=0;function l(t){if((t.srcElement||t.target)===e){if(a>=n){if(s&&s!==t.propertyName)return;e.removeEventListener(i,l),o(t)}a+=1}}void 0!==e.style["Webkit".concat(r)]&&(i="webkit".concat(r,"End")),void 0!==e.style.OTransition&&(i="o".concat(t,"End")),void 0!==e.style[t]&&(i="".concat(t,"end")),e.clearCssEndEvent&&e.clearCssEndEvent(),e.clearCssEndEvent=function(){e.removeEventListener(i,l)},e.addEventListener(i,l)})}function o(e){window&&window.requestAnimationFrame(e)}function i(e){window&&window.requestAnimationFrame(()=>{window.requestAnimationFrame(e)})}function r(e,t){!function e(t,n){window&&t&&Number.isInteger(t)&&t>0?window.requestAnimationFrame(()=>{e(t-1,n)}):n()}(e+1,t)}function a(){return new Promise(e=>{i(e)})}function l(e,t={}){return new Promise(n=>{s(e,"transition",t).then(n)})}function c(e,t={}){return new Promise(n=>{s(e,"animation",t).then(n)})}n.r(t),n.d(t,"setCssEndEvent",(function(){return s})),n.d(t,"beforeCssLayout",(function(){return o})),n.d(t,"beforeNextCssLayout",(function(){return i})),n.d(t,"beforeFutureCssLayout",(function(){return r})),n.d(t,"onceNextCssLayout",(function(){return a})),n.d(t,"onceTransitionEnd",(function(){return l})),n.d(t,"onceAnimationEnd",(function(){return c}))}])},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(n(6));t.default=s.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),i=f(n(0)),r=(f(n(1)),n(3)),a=n(2),l=n(7),c=f(n(8)),u=f(n(9)),d=f(n(10));function f(e){return e&&e.__esModule?e:{default:e}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m="awssld",p=new a.MediaLoader,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.clickNext=function(){n.transitionRequest("next");var e=null===n.index?0:n.index+1;n.goTo({index:e,direction:!0})},n.clickPrev=function(){n.transitionRequest("prev"),n.goTo({index:n.index-1,direction:!1})},n.touchStart=function(e){if(!n.animating&&null!==n.index){var t=e.nativeEvent;n.touchStartPoint=t.touches[0].clientX}},n.touchMove=function(e){if(!n.animating&&n.touchStartPoint){var t=e.nativeEvent,s=t.touches[0].clientX-n.touchStartPoint,o=n[n.active],i=n[n.loader],r=!(s>0),a=Math.abs(s);!1!==n.touchEnabled?a>=10&&(!1===n.loading?n.goTo({index:r?n.index+1:n.index-1,direction:r,touch:!0}):!0===n.direction?(s+=10,Math.abs(s)>o.offsetWidth?s=-o.offsetWidth:s>0&&(s=0),o.style.transform="translate3d("+s+"px, 0, 0)",i.style.transform="translate3d(calc(100% + "+s+"px), 0, 0)"):(s-=10,Math.abs(s)>o.offsetWidth?s=o.offsetWidth:s<0&&(s=0),o.style.transform="translate3d("+s+"px, 0, 0)",i.style.transform="translate3d(calc(-100% + "+s+"px), 0, 0)")):a>20&&(n.touchEnabled=!0,n.touchStartPoint=t.touches[0].clientX)}},n.touchEnd=function(){!n.animating&&n.touchStartPoint&&n.loading&&(n.touchStartPoint=null,n.animating=!0,n.touchEnabled=!1,n.animateMobileEnd((function(){n.index=n.nextIndex,n.setState({index:n.index}),n.props.onTransitionEnd&&n.props.onTransitionEnd(s({},n.getInfo())),n.animating=!1,n.loading=!1,n.unchargeIndex()})))},n.bulletClick=function(e){var t=e.currentTarget,s=parseInt(t.getAttribute("data-index"),10);n.goTo({index:s,direction:!(n.index>s)},(function(){(0,r.onceNextCssLayout)().then((function(){t.classList.add(n.classNames.bulletsLoading)}))}))},n.rootElement=e.rootElement||m,n.boxA=null,n.boxB=null,n.loaded=[],n.active="boxA",n.loader="boxB",n.nextIndex=null,n.loading=!1,n.media=null,n.started=!1,n.touchEnabled=!1,n.setupStartup(e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.boxA.classList.add(this.classNames.active),this.props.startupScreen&&(this.buttons&&this.buttons.element.classList.add(this.classNames.controlsActive),!0===this.props.startup&&this.startup()),this.props.onFirstMount&&this.props.onFirstMount(s({},this.getInfo()))}},{key:"componentWillReceiveProps",value:function(e){if(this.checkChildren(e),this.setupClassNames(e.cssModule),e.name===this.props.name)if(!0!==e.startup||!1!==this.started)if(e.selected===this.props.selected)this.refreshSlider();else{var t=this.getIndex(e.selected),n=!0===e.infinite&&0===t&&this.index===this.media.length-1||!(this.index>t);this.goTo({index:t,direction:n})}else this.startup();else this.resetSlider(e.selected)}},{key:"getRootClassName",value:function(){var e=this.props,t=e.fillParent,n=e.infinite,s=e.className,o=e.organicArrows,i=e.disabled,r=e.cssModule;return(0,l.getRootClassName)({cssModule:r,disabled:i,organicArrows:o,className:s,infinite:n,fillParent:t,rootElement:this.rootElement,current:this.state.index,total:this.media.length})}},{key:"setupStartup",value:function(e){this.checkChildren(e),this.setupClassNames(e.cssModule),e.startupScreen?(this.index=null,this.state={index:this.index,boxA:{className:this.classNames.startUp,children:e.startupScreen},boxB:null}):(this.started=!0,this.index=this.getIndex(this.props.selected),this.state={index:this.index,boxA:this.media[this.index]||null,boxB:null})}},{key:"getInfo",value:function(){return{slides:this.media.length,currentIndex:this.index,currentSlide:this[this.active],currentMedia:this.media[this.index],element:this.slider}}},{key:"getBar",value:function(){if(!document)return{};var e=document.createElement("div");return e.className=this.classNames.bar,e}},{key:"setupClassNames",value:function(e){this.classNames=(0,l.setupClassNames)(this.rootElement,e)}},{key:"getIndex",value:function(e){var t=0;return"number"==typeof e?e:("string"==typeof e&&this.media.forEach((function(n,s){n.slug===e&&(t=s)})),t)}},{key:"refreshSlider",value:function(){var e;if(!0!==this.loading&&!1!==this.props.startup&&null!==this.index){var t=this.index;this.setState((h(e={index:t},this.active,this.media[this.getIndex(t)]),h(e,this.loader,null),e))}}},{key:"startup",value:function(){var e=this;this.started=!0,setTimeout((function(){(0,r.onceNextCssLayout)().then((function(){e.goTo({index:e.props.selected,direction:!0,touch:!1})}))}),100)}},{key:"resetSlider",value:function(){var e,t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.index=n,this.setState((h(e={index:n},this.active,this.media[this.getIndex(n)]),h(e,this.loader,null),e),(function(){t.props.onResetSlider&&t.props.onResetSlider(s({},t.getInfo()))}))}},{key:"checkChildren",value:function(e){e.children?e.children===this.props.children&&this.media||(this.media=(0,l.transformChildren)(e.children)):e.media&&e.media.length&&(this.media=e.media)}},{key:"loadContent",value:function(e,t){var n=this;return new Promise((function(s){if(!n.loaded.includes(t)&&t){var o=n.getBar();e.appendChild(o),(0,r.onceNextCssLayout)().then((function(){(0,r.onceNextCssLayout)().then((function(){o.classList.add(n.classNames.barActive)})),p.load(t).then((function(){n.loaded.push(t),(0,r.onceNextCssLayout)().then((function(){(0,r.onceTransitionEnd)(o).then((function(){s(o)})),o.classList.add(n.classNames.barEnd)}))}))}))}else s(null)}))}},{key:"startAnimationMobile",value:function(){var e=this.direction,t=this[this.active],n=this[this.loader],o=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,i=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight;this.props.onTransitionStart&&this.props.onTransitionStart(s({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex}));var r=t.querySelector("."+this.classNames.content);r.classList.add(i),r.classList.add(this.classNames.contentExit);var a=n.querySelector("."+this.classNames.content);a.classList.add(o),a.classList.add(this.classNames.contentStatic)}},{key:"animateMobileEnd",value:function(e){var t=this,n=this.direction,s=this[this.active],o=this[this.loader],i=n?this.classNames.moveLeft:this.classNames.moveRight,a=n?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,l=n?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,c=o.querySelector("."+this.classNames.content),u=s.querySelector("."+this.classNames.content);c.classList.remove(this.classNames.contentStatic),o.classList.add(this.classNames.animatedMobile),s.classList.add(this.classNames.animatedMobile),(0,r.onceNextCssLayout)().then((function(){o.style.transform="translate3d(0, 0, 0)",s.style.transform="translate3d("+(t.direction?"-":"")+"100%, 0, 0)",(0,r.onceTransitionEnd)(s).then((function(){t.loading&&(o.classList.add(t.classNames.active),s.classList.remove(t.classNames.active),s.classList.remove(i),o.classList.remove(t.classNames.animatedMobile),s.classList.remove(t.classNames.animatedMobile),u.classList.remove(l),u.classList.remove(t.classNames.contentExit),c.classList.remove(a),setTimeout((function(){(0,r.onceNextCssLayout)().then((function(){t.buttons&&t.buttons.element.classList.remove(t.classNames.controlsActive)}))}),t.props.controlsReturnDelay),t.activeArrow&&(t.activeArrow.classList.remove(t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA",e&&e())}))}))}},{key:"runAnimation",value:function(e){var t=this,n=e.active,s=e.media,o=e.contentExitMoveClass,i=e.contentEnterMoveClass,a=e.activeContentElement,l=e.loaderContentElement,c=e.loader,u=e.loaderPosition,d=e.exitPosition,f=e.callback,h=e.transitionDelay;this.loadContent(n,s.url).then((function(e){a.classList.add(o),a.classList.add(t.classNames.contentExit),l.classList.add(i),l.classList.add(t.classNames.contentStatic),setTimeout((function(){(0,r.onceNextCssLayout)().then((function(){n.classList.add(t.classNames.animated),c.classList.add(t.classNames.animated),l.classList.remove(t.classNames.contentStatic),n.classList.add(t.classNames.exit),c.classList.add(u),n.classList.add(d),(0,r.onceAnimationEnd)(n).then((function(){c.classList.add(t.classNames.active),c.classList.remove(u),c.classList.remove(t.classNames.animated),n.classList.remove(t.classNames.animated),n.classList.remove(t.classNames.active),n.classList.remove(d),n.classList.remove(t.classNames.exit),a.classList.remove(o),a.classList.remove(t.classNames.contentExit),l.classList.remove(i),e&&n.removeChild(e),setTimeout((function(){(0,r.onceNextCssLayout)().then((function(){t.buttons&&t.buttons.element.classList.remove(t.classNames.controlsActive)}))}),t.props.controlsReturnDelay),t.activeArrow&&(0,r.onceNextCssLayout)().then((function(){t.activeArrow.classList.remove(t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null})),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA",f&&f()}))}))}),h)}))}},{key:"startAnimation",value:function(e,t,n){var o=this.props.transitionDelay,i=this[this.active],r=this[this.loader],a=e?this.classNames.moveRight:this.classNames.moveLeft,l=e?this.classNames.moveLeft:this.classNames.moveRight,c=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,u=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,d=i.querySelector("."+this.classNames.content),f=r.querySelector("."+this.classNames.content);i.style.removeProperty("transform"),r.style.removeProperty("transform"),this.props.onTransitionStart&&this.props.onTransitionStart(s({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex}));var h={active:i,media:t,contentExitMoveClass:u,contentEnterMoveClass:c,activeContentElement:d,loaderContentElement:f,loader:r,loaderPosition:a,exitPosition:l,callback:n,transitionDelay:o};this.runAnimation(h)}},{key:"goTo",value:function(e){var t=this,n=e.index,o=e.direction,i=e.touch,r=void 0!==i&&i,a=this.getIndex(n);!0!==this.loading&&n!==this.index&&(this.loading=!0,this.direction=o,!0!==r?this.activateArrows(o,(function(){t.chargeIndex(a,(function(e){t.renderedLoader=!0,t.startAnimation(o,e,(function(){t.index=t.nextIndex,t.loading=!1,t.setState({index:t.index}),t.props.onTransitionEnd&&t.props.onTransitionEnd(s({},t.getInfo()))}))}))})):this.chargeIndex(a,(function(){t.activateArrows(o),t.startAnimationMobile()})))}},{key:"chargeIndex",value:function(e,t){this.nextIndex=e>this.media.length-1?0:e<0?this.media.length-1:e;var n={},o=this.media[this.nextIndex];n[this.loader]=s({loader:!0},o),this.setState(n,(function(){t(o)}))}},{key:"unchargeIndex",value:function(){var e={};e[this.loader]=null,this.setState(e,(function(){}))}},{key:"activateArrows",value:function(e,t){var n=e?"right":"left";if(this.buttons){var s=e?this.buttons.next:this.buttons.prev;this.activeArrow=s.querySelector("span")}this.activeArrow?(this.activeArrowClass=(0,a.getClassName)(this.rootElement+"__controls__arrow-"+n+"--active",this.props.cssModule),(0,r.onceTransitionEnd)(this.activeArrow,{tolerance:null===this.index?0:2}).then((function(){t&&t()})),this.buttons&&this.buttons.element.classList.add(this.classNames.controlsActive),this.activeArrow.classList.add(this.activeArrowClass)):t&&t()}},{key:"transitionRequest",value:function(e){this.props.onTransitionRequest&&this.props.onTransitionRequest(s({eventName:e},this.getInfo()))}},{key:"renderBox",value:function(e){var t=this;return i.default.createElement("div",{ref:function(n){t["box"+e]=n},className:this.classNames.box,onTouchStart:this.touchStart,onTouchMove:this.touchMove,onTouchEnd:this.touchEnd},this.state["box"+e]&&i.default.createElement(d.default,{media:this.state["box"+e],className:this.classNames.content}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.cssModule,s=t.organicArrows,o=t.bullets,r=t.style,a=t.customContent,l=t.buttons,d=t.buttonContentLeft,f=t.buttonContentRight,h=this.rootElement;return i.default.createElement("div",{ref:function(t){e.slider=t},className:this.getRootClassName(),style:r},i.default.createElement("div",{ref:function(t){e.wrapper=t},className:this.classNames.wrapper},i.default.createElement("div",{ref:function(t){e.container=t},className:this.classNames.container},this.renderBox("A"),this.renderBox("B")),l&&i.default.createElement(u.default,{rootElement:h,cssModule:n,onMount:function(t){e.buttons=t},onNext:this.clickNext,onPrev:this.clickPrev,organicArrows:s,buttonContentLeft:d,buttonContentRight:f}),a),o&&i.default.createElement(c.default,{cssModule:n,rootElement:h,media:this.media,selected:this.state.index,onClick:function(t){e.transitionRequest("bullet"),e.goTo(t)}}))}}]),t}(i.default.Component);v.defaultProps={bullets:!0,buttons:!0,buttonContentRight:null,buttonContentLeft:null,children:null,className:null,controlsReturnDelay:0,cssModule:null,customContent:null,disabled:!1,fillParent:!1,infinite:!0,media:[],name:"awesome-slider",onFirstMount:null,onResetSlider:null,onTransitionEnd:null,onTransitionRequest:null,onTransitionStart:null,organicArrows:!0,rootElement:m,selected:0,startup:!0,startupScreen:null,style:{},transitionDelay:0},t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e};t.getRootClassName=function(e){var t,n=e.rootElement,s=e.cssModule,i=e.disabled,r=e.organicArrows,a=e.className,l=e.total,c=e.current,u=e.infinite,d=e.fillParent,f=[n];return!0===r&&f.push(n+"--organic-arrows"),!0===i&&f.push(n+"--disabled"),d&&f.push(n+"--fill-parent"),!1===u&&(0===c&&f.push(n+"--first"),c===l-1&&f.push(n+"--last")),s&&s[n]&&(f=(0,o.classToModules)(f,s)),a&&(t=f).push.apply(t,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(a.split(" "))),f.join(" ").trim().replace(/[\s]+/gi," ")},t.transformChildren=function(e){var t=[];return(e.constructor===Array?e:[e]).forEach((function(e){var n=s({},e.props);e.props["data-src"]&&(n.url=e.props["data-src"]),e.props["data-slug"]&&(n.slug=e.props["data-slug"]),t.push(n)})),t},t.setupClassNames=function(e,t){return{boxA:(0,o.getClassName)(e+"__boxA",t),boxB:(0,o.getClassName)(e+"__boxB",t),box:(0,o.getClassName)(e+"__box",t),container:(0,o.getClassName)(e+"__container",t),wrapper:(0,o.getClassName)(e+"__wrapper",t),bar:(0,o.getClassName)(e+"__bar",t),barActive:(0,o.getClassName)(e+"__bar--active",t),barEnd:(0,o.getClassName)(e+"__bar--end",t),content:(0,o.getClassName)(e+"__content",t),contentStatic:(0,o.getClassName)(e+"__content--static",t),contentMoveLeft:(0,o.getClassName)(e+"__content--moveLeft",t),contentMoveRight:(0,o.getClassName)(e+"__content--moveRight",t),controlsActive:(0,o.getClassName)(e+"__controls--active",t),animated:(0,o.getClassName)(e+"--animated",t),animatedMobile:(0,o.getClassName)(e+"--animated-mobile",t),contentExit:(0,o.getClassName)(e+"__content--exit",t),exit:(0,o.getClassName)(e+"--exit",t),active:(0,o.getClassName)(e+"--active",t),moveLeft:(0,o.getClassName)(e+"--moveLeft",t),moveRight:(0,o.getClassName)(e+"--moveRight",t),startUp:(0,o.getClassName)(e+"__startUp",t),bulletsLoading:(0,o.getClassName)(e+"__bullets--loading",t)}};var o=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),o=r(n(0)),i=(r(n(1)),n(2));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.bulletClick=function(e){var t=e.currentTarget;t.classList.add((0,i.getClassName)(n.rootElement+"__bullets--loading",n.props.cssModule));var s=parseInt(t.getAttribute("data-index"),10),o=!(n.props.selected>s);n.props.onClick({index:s,direction:o})},n.rootElement=e.rootElement,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"renderBullets",value:function(){var e=this,t=this.props,n=t.cssModule,s=t.selected;return this.props.media.map((function(t,r){var a=r===s?(0,i.getClassName)(e.rootElement+"__bullets--active",n):null;return o.default.createElement("button",{key:"bullet-"+r,"data-index":r,onClick:e.bulletClick,className:a},r)}))}},{key:"render",value:function(){var e=this.props,t=e.cssModule,n=e.rootElement;return o.default.createElement("nav",{className:(0,i.getClassName)(n+"__bullets",t)},this.renderBullets())}}]),t}(o.default.Component);a.defaultProps={cssModule:null,selected:0},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),o=r(n(0)),i=(r(n(1)),n(2));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.onMount({element:this.controls,next:this.next,prev:this.prev})}},{key:"render",value:function(){var e=this,t=this.props,n=t.rootElement,s=t.cssModule,r=t.organicArrows,a=t.buttonContentLeft,l=t.buttonContentRight,c=t.onNext,u=t.onPrev;return o.default.createElement("div",{ref:function(t){e.controls=t},className:(0,i.getClassName)(n+"__controls",s)},o.default.createElement("button",{ref:function(t){e.next=t},"aria-label":"next",className:(0,i.getClassName)(n+"__next",s),onClick:c},r?o.default.createElement("span",{className:(0,i.getClassName)(n+"__controls__arrow-right",s)}):l),o.default.createElement("button",{ref:function(t){e.prev=t},"aria-label":"previous",className:(0,i.getClassName)(n+"__prev",s),onClick:u},r?o.default.createElement("span",{className:(0,i.getClassName)(n+"__controls__arrow-left",s)}):a))}}]),t}(o.default.Component);a.defaultProps={cssModule:null,organicArrows:!0,buttonContentLeft:null,buttonContentRight:null},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),i=r(n(0));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(n(1));var l=function(e){function t(){var e,n,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return n=s=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),s.state={},a(s,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.media,n=e.className,o=t.url,r=t.children,a=t.style,l=(t.loader,t["data-src"],t.className),c=function(e,t){var n={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n}(t,["url","children","style","loader","data-src","className"]),u=null;return o&&(u=o.match(/\.(mp4|webm)/)?i.default.createElement("video",{title:t.title,src:o,type:"video/mp4",controls:!0}):i.default.createElement("img",{alt:t.alt||t.title||null,src:o})),i.default.createElement("div",s({className:n,style:a||null},c),u,r&&i.default.createElement("div",{className:l},t.children))}}]),t}(i.default.Component);t.default=l}])}))}}]);
//# sourceMappingURL=3.b8f4b83a.chunk.js.map