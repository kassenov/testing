(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[16],{737:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},748:function(e,t,n){"use strict";n.d(t,"a",(function(){return ve}));var r=n(1),o=n.n(r),i=n(10),a=n.n(i);function c(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(u){c=[6,u],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}Object.create;function l(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}Object.create;var s=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function f(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=s.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var p=[".DS_Store","Thumbs.db"];function d(e){return"object"===typeof e&&null!==e}function v(e){return y(e.target.files).map((function(e){return f(e)}))}function m(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return f(e)}))]}}))}))}function g(e,t){return c(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return null===e?[2,[]]:e.items?(n=y(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(h))]):[3,2];case 1:return[2,b(w(r.sent()))];case 2:return[2,b(y(e.files).map((function(e){return f(e)})))]}}))}))}function b(e){return e.filter((function(e){return-1===p.indexOf(e.name)}))}function y(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function h(e){if("function"!==typeof e.webkitGetAsEntry)return O(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?D(t):O(e)}function w(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e}(e,Array.isArray(t)?w(t):[t])}),[])}function O(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=f(t);return Promise.resolve(n)}function j(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return[2,e.isDirectory?D(e):x(e)]}))}))}function D(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return c(i,void 0,void 0,(function(){var i,a,c;return u(this,(function(u){switch(u.label){case 0:if(t.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=u.sent(),e(i),[3,4];case 3:return a=u.sent(),n(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(j)),r.push(c),o(),u.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function x(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=f(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var F=n(737),A=n.n(F);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z="file-invalid-type",R="file-too-large",T="file-too-small",I="too-many-files",L=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:z,message:"File type must be ".concat(t)}},K=function(e){return{code:R,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},M=function(e){return{code:T,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},B={code:I,message:"Too many files"};function $(e,t){var n="application/x-moz-file"===e.type||A()(e,t);return[n,n?null:L(t)]}function G(e,t,n){if(_(e.size))if(_(t)&&_(n)){if(e.size>n)return[!1,K(n)];if(e.size<t)return[!1,M(t)]}else{if(_(t)&&e.size<t)return[!1,M(t)];if(_(n)&&e.size>n)return[!1,K(n)]}return[!0,null]}function _(e){return void 0!==e&&null!==e}function q(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=S($(e,n),1)[0],i=S(G(e,r,o),1)[0];return t&&i}))}function J(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function N(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function U(e){e.preventDefault()}function W(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function H(e){return-1!==e.indexOf("Edge/")}function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return W(e)||H(e)}function V(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!J(e)&&t&&t.apply(void 0,[e].concat(r)),J(e)}))}}function X(){return"showOpenFilePicker"in window}function Y(e){return e="string"===typeof e?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter((function(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)})).reduce((function(e,t){return P(P({},e),{},E({},t,[]))}),{}):{}}]}var Z=["children"],ee=["open"],te=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],ne=["refKey","onChange","onClick"];function re(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ie(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||ie(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){if(e){if("string"===typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var fe=Object(r.forwardRef)((function(e,t){var n=e.children,i=ve(se(e,Z)),a=i.open,c=se(i,ee);return Object(r.useImperativeHandle)(t,(function(){return{open:a}}),[a]),o.a.createElement(r.Fragment,null,n(ue(ue({},c),{},{open:a})))}));fe.displayName="Dropzone";var pe={disabled:!1,getFilesFromEvent:function(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return d(e)&&d(e.dataTransfer)?[2,g(e.dataTransfer,e.type)]:function(e){return d(e)&&d(e.target)}(e)?[2,v(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,m(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1};fe.defaultProps=pe,fe.propTypes={children:a.a.func,accept:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),multiple:a.a.bool,preventDropOnDocument:a.a.bool,noClick:a.a.bool,noKeyboard:a.a.bool,noDrag:a.a.bool,noDragEventsBubbling:a.a.bool,minSize:a.a.number,maxSize:a.a.number,maxFiles:a.a.number,disabled:a.a.bool,getFilesFromEvent:a.a.func,onFileDialogCancel:a.a.func,onFileDialogOpen:a.a.func,useFsAccessApi:a.a.bool,onDragEnter:a.a.func,onDragLeave:a.a.func,onDragOver:a.a.func,onDrop:a.a.func,onDropAccepted:a.a.func,onDropRejected:a.a.func,validator:a.a.func};var de={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ue(ue({},pe),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,m=t.onDropRejected,g=t.onFileDialogCancel,b=t.onFileDialogOpen,y=t.useFsAccessApi,h=t.preventDropOnDocument,w=t.noClick,O=t.noKeyboard,j=t.noDrag,D=t.noDragEventsBubbling,x=t.validator,F=Object(r.useMemo)((function(){return"function"===typeof b?b:ge}),[b]),A=Object(r.useMemo)((function(){return"function"===typeof g?g:ge}),[g]),k=Object(r.useRef)(null),P=Object(r.useRef)(null),E=Object(r.useReducer)(me,de),S=oe(E,2),C=S[0],z=S[1],R=C.isFocused,T=C.isFileDialogActive,I=C.draggedFiles,L=function(){T&&setTimeout((function(){P.current&&(P.current.files.length||(z({type:"closeDialog"}),A()))}),300)};Object(r.useEffect)((function(){return y&&X()?function(){}:(window.addEventListener("focus",L,!1),function(){window.removeEventListener("focus",L,!1)})}),[P,T,A,y]);var K=Object(r.useRef)([]),M=function(e){k.current&&k.current.contains(e.target)||(e.preventDefault(),K.current=[])};Object(r.useEffect)((function(){return h&&(document.addEventListener("dragover",U,!1),document.addEventListener("drop",M,!1)),function(){h&&(document.removeEventListener("dragover",U),document.removeEventListener("drop",M))}}),[k,h]);var _=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),we(e),K.current=[].concat(re(K.current),[e.target]),N(e)&&Promise.resolve(i(e)).then((function(t){J(e)&&!D||(z({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,D]),W=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),we(e);var t=N(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1}),[p,D]),H=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),we(e);var t=K.current.filter((function(e){return k.current&&k.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),K.current=t,t.length>0||(z({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),N(e)&&f&&f(e))}),[k,f,D]),Z=Object(r.useCallback)((function(e,t){var r=[],o=[];e.forEach((function(e){var t=oe($(e,n),2),i=t[0],u=t[1],l=oe(G(e,c,a),2),s=l[0],f=l[1],p=x?x(e):null;if(i&&s&&!p)r.push(e);else{var d=[u,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!u&&r.length>1||u&&l>=1&&r.length>l)&&(r.forEach((function(e){o.push({file:e,errors:[B]})})),r.splice(0)),z({acceptedFiles:r,fileRejections:o,type:"setFiles"}),d&&d(r,o,t),o.length>0&&m&&m(o,t),r.length>0&&v&&v(r,t)}),[z,u,n,c,a,l,d,v,m,x]),ee=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),we(e),K.current=[],N(e)&&Promise.resolve(i(e)).then((function(t){J(e)&&!D||Z(t,e)})),z({type:"reset"})}),[i,Z,D]),ie=Object(r.useCallback)((function(){if(y&&X()){z({type:"openDialog"}),F();var e={multiple:u,types:Y(n)};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){return Z(e,null)})).catch((function(e){return A(e)})).finally((function(){return z({type:"closeDialog"})}))}else P.current&&(z({type:"openDialog"}),F(),P.current.value=null,P.current.click())}),[z,F,A,y,Z,n,u]),ae=Object(r.useCallback)((function(e){k.current&&k.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),ie()))}),[k,P,ie]),ce=Object(r.useCallback)((function(){z({type:"focus"})}),[]),fe=Object(r.useCallback)((function(){z({type:"blur"})}),[]),ve=Object(r.useCallback)((function(){w||(Q()?setTimeout(ie,0):ie())}),[P,w,ie]),be=function(e){return o?null:e},ye=function(e){return O?null:be(e)},he=function(e){return j?null:be(e)},we=function(e){D&&e.stopPropagation()},Oe=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=se(e,te);return ue(ue(le({onKeyDown:ye(V(i,ae)),onFocus:ye(V(a,ce)),onBlur:ye(V(c,fe)),onClick:be(V(u,ve)),onDragEnter:he(V(l,_)),onDragOver:he(V(s,W)),onDragLeave:he(V(f,H)),onDrop:he(V(p,ee)),role:"string"===typeof r&&""!==r?r:"button"},n,k),o||O?{}:{tabIndex:0}),d)}}),[k,ae,ce,fe,ve,_,W,H,ee,O,j,o]),je=Object(r.useCallback)((function(e){e.stopPropagation()}),[]),De=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=se(e,ne),c=le({accept:n,multiple:u,type:"file",style:{display:"none"},onChange:be(V(o,ee)),onClick:be(V(i,je)),autoComplete:"off",tabIndex:-1},r,P);return ue(ue({},c),a)}}),[P,n,u,ee,o]),xe=I.length,Fe=xe>0&&q({files:I,accept:n,minSize:c,maxSize:a,multiple:u,maxFiles:l}),Ae=xe>0&&!Fe;return ue(ue({},C),{},{isDragAccept:Fe,isDragReject:Ae,isFocused:R&&!o,getRootProps:Oe,getInputProps:De,rootRef:k,inputRef:P,open:be(ie)})}function me(e,t){switch(t.type){case"focus":return ue(ue({},e),{},{isFocused:!0});case"blur":return ue(ue({},e),{},{isFocused:!1});case"openDialog":return ue(ue({},de),{},{isFileDialogActive:!0});case"closeDialog":return ue(ue({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive,r=t.draggedFiles;return ue(ue({},e),{},{draggedFiles:r,isDragActive:n});case"setFiles":return ue(ue({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return ue({},de);default:return e}}function ge(){}}}]);
//# sourceMappingURL=16.62e80823.chunk.js.map