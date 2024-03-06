!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-native")):"function"==typeof define&&define.amd?define(["react","react-native"],t):"object"==typeof exports?exports.FormComponent=t(require("react"),require("react-native")):e.FormComponent=t(e.react,e["react-native"])}(this,((e,t)=>(()=>{"use strict";var r={155:t=>{t.exports=e},389:e=>{e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};return(()=>{o.d(a,{default:()=>m});var e=o(155),t=o.n(e),r=o(389);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var o;return o=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==n(o)?o:String(o))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=r.StyleSheet.create({container:{flex:1,justifyContent:"center",alignItems:"center",padding:20},input:{height:40,width:"100%",borderColor:"gray",borderWidth:1,marginBottom:10,paddingHorizontal:10},button:{marginTop:10},submittedData:{marginTop:20,padding:10,borderColor:"#ccc",borderWidth:1,borderRadius:4}});const m=function(n){var o=n.onSubmit,a=c((0,e.useState)({firstName:"",lastName:"",email:"",age:""}),2),i=a[0],f=a[1],m=c((0,e.useState)(null),2),p=m[0],y=m[1],b=function(e,t){f(l(l({},i),{},u({},e,t)))};return t().createElement(r.View,{style:s.container},t().createElement(r.TextInput,{placeholder:"First Name",value:i.firstName,onChangeText:function(e){return b("firstName",e)},style:s.input}),t().createElement(r.TextInput,{placeholder:"Last Name",value:i.lastName,onChangeText:function(e){return b("lastName",e)},style:s.input}),t().createElement(r.TextInput,{placeholder:"Email Address",value:i.email,onChangeText:function(e){return b("email",e)},style:s.input}),t().createElement(r.TextInput,{placeholder:"Age",value:i.age,onChangeText:function(e){return b("age",e)},style:s.input}),t().createElement(r.Button,{title:"Submit",onPress:function(){o(i),y(i)},style:s.button}),p&&t().createElement(r.View,{style:s.submittedData},t().createElement(r.Text,null,"Submitted Data:"),t().createElement(r.Text,null,"First Name: ",p.firstName),t().createElement(r.Text,null,"Last Name: ",p.lastName),t().createElement(r.Text,null,"Email: ",p.email),t().createElement(r.Text,null,"Age: ",p.age)))}})(),a.default})()));