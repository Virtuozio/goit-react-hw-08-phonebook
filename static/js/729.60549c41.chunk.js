"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{729:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(2791),a=t(9434),u=t(4270),i=t(3634),c="NOT_FOUND";var o=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?o:r,u=t.maxSize,i=void 0===u?1:u,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:c},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return c}return{get:r,put:function(n,a){r(n)===c&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,l);function m(){var n=f.get(arguments);if(n===c){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return m.clearCache=function(){return f.clear()},m}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,i=0,c={memoizeOptions:void 0},o=r.pop();if("object"===typeof o&&(c=o,o=r.pop()),"function"!==typeof o)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof o+"]");var s=c,f=s.memoizeOptions,m=void 0===f?t:f,d=Array.isArray(m)?m:[m],p=l(r),h=e.apply(void 0,[function(){return i++,o.apply(null,arguments)}].concat(d)),v=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return u=h.apply(null,e)}));return Object.assign(v,{resultFunc:o,memoizedResultFunc:h,dependencies:p,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return a}var m=f(s),d=function(e){return e.contacts.contacts},p=function(e){return e.contacts.isLoading},h=m([d,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),v=t(184),y=function(){var e=(0,a.I0)(),n=(0,a.v9)(h),t=function(n){return e((0,i.GK)(n.target.id))};return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{className:"contacts",children:n.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsxs)("span",{className:"contacts-name",children:[e.name,":"]}),(0,v.jsx)("span",{className:"contacts-number",children:e.phone}),(0,v.jsx)("button",{id:e.id,className:"contacts-del-btn",onClick:t,children:"Delete"})]},e.id)}))})})},b=function(){var e=(0,a.I0)(),n=(0,a.v9)(d);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target;n.map((function(e){return e.name})).includes(r.elements.name.value)?alert("".concat(r.elements.name.value," is already in contacts.")):(e((0,i.uK)({name:r.elements.name.value,number:r.elements.number.value})),r.reset())},children:[(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsx)("label",{htmlFor:"inputName",className:"form-label",children:"Name"}),(0,v.jsx)("input",{id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsx)("label",{htmlFor:"inputNumber",className:"form-label",children:"Number"}),(0,v.jsx)("input",{id:"inputNumber",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add contact"})]})})},x=t(4808),j=function(){var e=(0,a.I0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("label",{htmlFor:"findName",className:"form-label",children:"Find contacts by name"}),(0,v.jsx)("input",{id:"findName",type:"text",name:"filter",onChange:function(n){return e((0,x.T)(n.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})};function g(){var e=(0,a.I0)(),n=(0,a.v9)(p);return(0,r.useEffect)((function(){e((0,i.yF)())}),[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.q,{children:(0,v.jsx)("title",{children:"Your contacts"})}),(0,v.jsx)(b,{}),(0,v.jsx)(j,{}),(0,v.jsx)("div",{children:n&&"Request in progress..."}),(0,v.jsx)(y,{})]})}}}]);
//# sourceMappingURL=729.60549c41.chunk.js.map