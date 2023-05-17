"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[817],{7817:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var r=n(2791),a=n(9434),o=n(4270),i=n(3634),s="NOT_FOUND";var c=function(e,t){return e===t};function l(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?c:r,o=n.maxSize,i=void 0===o?1:o,l=n.resultEqualityCheck,d=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),u=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:s},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(d):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return s}return{get:r,put:function(t,a){r(t)===s&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,d);function p(){var t=u.get(arguments);if(t===s){if(t=e.apply(null,arguments),l){var n=u.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}u.put(arguments,t)}return t}return p.clearCache=function(){return u.clear()},p}function d(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,i=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=s,u=l.memoizeOptions,p=void 0===u?n:u,m=Array.isArray(p)?p:[p],v=d(r),y=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(m)),f=e((function(){for(var e=[],t=v.length,n=0;n<t;n++)e.push(v[n].apply(null,arguments));return o=y.apply(null,e)}));return Object.assign(f,{resultFunc:c,memoizedResultFunc:y,dependencies:v,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),f};return a}var p=u(l),m=function(e){return e.contacts.contacts},v=function(e){return e.contacts.isLoading},y=p([m,function(e){return e.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),f=n(493),g=n(4942),h=n(3366),b=n(7462),Z=n(8182),x=n(4419),C=n(627),w=n(2065),A=n(7630),S=n(1046),j=n(3701),I=n(9103),N=n(162),k=n(2071),P=n(6199),F=n(5878),M=n(1217);function R(e){return(0,M.Z)("MuiListItem",e)}var L=(0,F.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var T=(0,F.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function B(e){return(0,M.Z)("MuiListItemSecondaryAction",e)}(0,F.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var O=n(184),G=["className"],z=(0,A.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,b.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),q=r.forwardRef((function(e,t){var n=(0,S.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,o=(0,h.Z)(n,G),i=r.useContext(P.Z),s=(0,b.Z)({},n,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,x.Z)(r,B,n)}(s);return(0,O.jsx)(z,(0,b.Z)({className:(0,Z.Z)(c.root,a),ownerState:s,ref:t},o))}));q.muiName="ListItemSecondaryAction";var W=q,_=["className"],V=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],E=(0,A.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,b.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,b.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,g.Z)({},"& > .".concat(T.root),{paddingRight:48}),(t={},(0,g.Z)(t,"&.".concat(L.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,g.Z)(t,"&.".concat(L.selected),(0,g.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(L.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,g.Z)(t,"&.".concat(L.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},r.button&&(0,g.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(L.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),D=(0,A.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),J=r.forwardRef((function(e,t){var n=(0,S.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,o=void 0===a?"center":a,i=n.autoFocus,s=void 0!==i&&i,c=n.button,l=void 0!==c&&c,d=n.children,u=n.className,p=n.component,m=n.components,v=void 0===m?{}:m,y=n.componentsProps,f=void 0===y?{}:y,g=n.ContainerComponent,w=void 0===g?"li":g,A=n.ContainerProps,F=(A=void 0===A?{}:A).className,M=n.dense,T=void 0!==M&&M,B=n.disabled,G=void 0!==B&&B,z=n.disableGutters,q=void 0!==z&&z,J=n.disablePadding,K=void 0!==J&&J,Y=n.divider,$=void 0!==Y&&Y,U=n.focusVisibleClassName,X=n.secondaryAction,H=n.selected,Q=void 0!==H&&H,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,re=void 0===ne?{}:ne,ae=(0,h.Z)(n.ContainerProps,_),oe=(0,h.Z)(n,V),ie=r.useContext(P.Z),se=r.useMemo((function(){return{dense:T||ie.dense||!1,alignItems:o,disableGutters:q}}),[o,ie.dense,T,q]),ce=r.useRef(null);(0,N.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var le=r.Children.toArray(d),de=le.length&&(0,I.Z)(le[le.length-1],["ListItemSecondaryAction"]),ue=(0,b.Z)({},n,{alignItems:o,autoFocus:s,button:l,dense:se.dense,disabled:G,disableGutters:q,disablePadding:K,divider:$,hasSecondaryAction:de,selected:Q}),pe=function(e){var t=e.alignItems,n=e.button,r=e.classes,a=e.dense,o=e.disabled,i={root:["root",a&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,x.Z)(i,R,r)}(ue),me=(0,k.Z)(ce,t),ve=re.root||v.Root||E,ye=te.root||f.root||{},fe=(0,b.Z)({className:(0,Z.Z)(pe.root,ye.className,u),disabled:G},oe),ge=p||"li";return l&&(fe.component=p||"div",fe.focusVisibleClassName=(0,Z.Z)(L.focusVisible,U),ge=j.Z),de?(ge=fe.component||p?ge:"div","li"===w&&("li"===ge?ge="div":"li"===fe.component&&(fe.component="div")),(0,O.jsx)(P.Z.Provider,{value:se,children:(0,O.jsxs)(D,(0,b.Z)({as:w,className:(0,Z.Z)(pe.container,F),ref:me,ownerState:ue},ae,{children:[(0,O.jsx)(ve,(0,b.Z)({},ye,!(0,C.Z)(ve)&&{as:ge,ownerState:(0,b.Z)({},ue,ye.ownerState)},fe,{children:le})),le.pop()]}))})):(0,O.jsx)(P.Z.Provider,{value:se,children:(0,O.jsxs)(ve,(0,b.Z)({},ye,{as:ge,ref:me},!(0,C.Z)(ve)&&{ownerState:(0,b.Z)({},ue,ye.ownerState)},fe,{children:[le,X&&(0,O.jsx)(W,{children:X})]}))})})),K=n(8519),Y=n(4036);function $(e){return(0,M.Z)("MuiTypography",e)}(0,F.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var U=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],X=(0,A.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,Y.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(e){var t=e.theme,n=e.ownerState;return(0,b.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),H={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ee=r.forwardRef((function(e,t){var n=(0,S.Z)({props:e,name:"MuiTypography"}),r=function(e){return Q[e]||e}(n.color),a=(0,K.Z)((0,b.Z)({},n,{color:r})),o=a.align,i=void 0===o?"inherit":o,s=a.className,c=a.component,l=a.gutterBottom,d=void 0!==l&&l,u=a.noWrap,p=void 0!==u&&u,m=a.paragraph,v=void 0!==m&&m,y=a.variant,f=void 0===y?"body1":y,g=a.variantMapping,C=void 0===g?H:g,w=(0,h.Z)(a,U),A=(0,b.Z)({},a,{align:i,color:r,className:s,component:c,gutterBottom:d,noWrap:p,paragraph:v,variant:f,variantMapping:C}),j=c||(v?"p":C[f]||H[f])||"span",I=function(e){var t=e.align,n=e.gutterBottom,r=e.noWrap,a=e.paragraph,o=e.variant,i=e.classes,s={root:["root",o,"inherit"!==e.align&&"align".concat((0,Y.Z)(t)),n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,x.Z)(s,$,i)}(A);return(0,O.jsx)(X,(0,b.Z)({as:j,ref:t,ownerState:A,className:(0,Z.Z)(I.root,s)},w))}));function te(e){return(0,M.Z)("MuiListItemText",e)}var ne=(0,F.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),re=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ae=(0,A.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,g.Z)({},"& .".concat(ne.primary),t.primary),(0,g.Z)({},"& .".concat(ne.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,b.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),oe=r.forwardRef((function(e,t){var n=(0,S.Z)({props:e,name:"MuiListItemText"}),a=n.children,o=n.className,i=n.disableTypography,s=void 0!==i&&i,c=n.inset,l=void 0!==c&&c,d=n.primary,u=n.primaryTypographyProps,p=n.secondary,m=n.secondaryTypographyProps,v=(0,h.Z)(n,re),y=r.useContext(P.Z).dense,f=null!=d?d:a,g=p,C=(0,b.Z)({},n,{disableTypography:s,inset:l,primary:!!f,secondary:!!g,dense:y}),w=function(e){var t=e.classes,n=e.inset,r=e.primary,a=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,x.Z)(o,te,t)}(C);return null==f||f.type===ee||s||(f=(0,O.jsx)(ee,(0,b.Z)({variant:y?"body2":"body1",className:w.primary,component:null!=u&&u.variant?void 0:"span",display:"block"},u,{children:f}))),null==g||g.type===ee||s||(g=(0,O.jsx)(ee,(0,b.Z)({variant:"body2",className:w.secondary,color:"text.secondary",display:"block"},m,{children:g}))),(0,O.jsxs)(ae,(0,b.Z)({className:(0,Z.Z)(w.root,o),ownerState:C,ref:t},v,{children:[f,g]}))})),ie=n(6151),se=function(){var e=(0,a.I0)(),t=(0,a.v9)(y),n=function(t){return e((0,i.GK)(t.target.id))};return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(f.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:t.map((function(e){return(0,O.jsxs)(J,{children:[(0,O.jsx)(oe,{primary:e.name,secondary:e.number}),(0,O.jsx)(ie.Z,{id:e.id,onClick:n,children:"Delete"})]},e.id)}))})})},ce=n(4554),le=n(2316),de="ContactForm_form__dhl+T",ue="ContactForm_label__-cVXI",pe=function(){var e=(0,a.I0)(),t=(0,a.v9)(m);return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(ce.Z,{className:de,component:"form",onSubmit:function(n){n.preventDefault();var r=n.target;t.map((function(e){return e.name})).includes(r.elements.name.value)?alert("".concat(r.elements.name.value," is already in contacts.")):(e((0,i.uK)({name:r.elements.name.value,number:r.elements.number.value})),r.reset())},children:[(0,O.jsx)(le.Z,{className:ue,label:"Name",id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,O.jsx)(le.Z,{className:ue,label:"Number",id:"inputNumber",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,O.jsx)(ie.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})};ce.Z,le.Z,le.Z,le.Z,le.Z,le.Z,le.Z,le.Z;var me=n(4808),ve=function(){var e=(0,a.I0)();return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(le.Z,{label:"Find contacts by name",id:"findName",type:"text",name:"filter",onChange:function(t){return e((0,me.T)(t.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})})};function ye(){var e=(0,a.I0)(),t=(0,a.v9)(v);return(0,r.useEffect)((function(){e((0,i.yF)())}),[e]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o.q,{children:(0,O.jsx)("title",{children:"Your contacts"})}),(0,O.jsx)(pe,{}),(0,O.jsx)(ve,{}),(0,O.jsx)("div",{children:t&&"Request in progress..."}),(0,O.jsx)(se,{})]})}}}]);
//# sourceMappingURL=817.a43d0ada.chunk.js.map