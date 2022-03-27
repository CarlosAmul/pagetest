"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[2886],{93517:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(93433),a=n(29439),o=n(4942),i=n(87462),s=n(63366),l=n(72791),c=(n(57441),n(28182)),u=n(90767),d=n(47630),h=n(93736),m=n(20890),p=n(12065),f=n(74223),g=n(80184),v=(0,f.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=n(95080),w=(0,d.ZP)(Z.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,p._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(t.palette.grey[600],.12)})})})),b=(0,d.ZP)(v)({width:24,height:16});var x=function(e){var t=e;return(0,g.jsx)("li",{children:(0,g.jsx)(w,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,g.jsx)(b,{ownerState:t})}))})},C=n(95159);function y(e){return(0,C.Z)("MuiBreadcrumbs",e)}var k=(0,n(30208).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,d.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,o.Z)({},"& .".concat(k.li),t.li),t.root]}})({}),M=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function j(e,t,n,r){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,g.jsx)(N,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):a.push(o),a}),[])}var B=l.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),o=n.children,d=n.className,m=n.component,p=void 0===m?"nav":m,f=n.expandText,v=void 0===f?"Show path":f,Z=n.itemsAfterCollapse,w=void 0===Z?1:Z,b=n.itemsBeforeCollapse,C=void 0===b?1:b,k=n.maxItems,N=void 0===k?8:k,B=n.separator,_=void 0===B?"/":B,A=(0,s.Z)(n,S),P=l.useState(!1),F=(0,a.Z)(P,2),z=F[0],I=F[1],T=(0,i.Z)({},n,{component:p,expanded:z,expandText:v,itemsAfterCollapse:w,itemsBeforeCollapse:C,maxItems:N,separator:_}),X=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,t)}(T),q=l.useRef(null),L=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return(0,g.jsx)("li",{className:X.li,children:e},"child-".concat(t))}));return(0,g.jsx)(R,(0,i.Z)({ref:t,component:p,color:"text.secondary",className:(0,c.Z)(X.root,d),ownerState:T},A,{children:(0,g.jsx)(M,{className:X.ol,ref:q,ownerState:T,children:j(z||N&&L.length<=N?L:function(e){return C+w>=e.length?e:[].concat((0,r.Z)(e.slice(0,C)),[(0,g.jsx)(x,{"aria-label":v,onClick:function(){I(!0);var e=q.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-w,e.length)))}(L),X.separator,_,T)})}))}))},57621:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(63366),o=n(72791),i=n(28182),s=n(90767),l=n(47630),c=n(93736),u=n(10703),d=n(95159);function h(e){return(0,d.Z)("MuiCard",e)}(0,n(30208).Z)("MuiCard",["root"]);var m=n(80184),p=["className","raised"],f=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),g=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCard"}),o=n.className,l=n.raised,u=void 0!==l&&l,d=(0,a.Z)(n,p),g=(0,r.Z)({},n,{raised:u}),v=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},h,t)}(g);return(0,m.jsx)(f,(0,r.Z)({className:(0,i.Z)(v.root,o),elevation:u?8:void 0,ref:t,ownerState:g},d))}))},47047:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(30168),a=n(63366),o=n(87462),i=n(72791),s=n(28182),l=n(52554),c=n(90767);function u(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(e){return parseFloat(e)}var h=n(12065),m=n(47630),p=n(93736),f=n(95159);function g(e){return(0,f.Z)("MuiSkeleton",e)}(0,n(30208).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,Z,w,b,x,C,y,k,S=n(80184),R=["animation","className","component","height","style","variant","width"],M=(0,l.F4)(x||(x=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),N=(0,l.F4)(C||(C=Z||(Z=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),j=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=u(t.shape.borderRadius)||"px",a=d(t.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,l.iv)(y||(y=w||(w=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),M)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,l.iv)(k||(k=b||(b=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),N,n.palette.action.hover)})),B=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,l=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,m=n.style,f=n.variant,v=void 0===f?"text":f,Z=n.width,w=(0,a.Z)(n,R),b=(0,o.Z)({},n,{animation:i,component:d,variant:v,hasChildren:Boolean(w.children)}),x=function(e){var t=e.classes,n=e.variant,r=e.animation,a=e.hasChildren,o=e.width,i=e.height,s={root:["root",n,r,a&&"withChildren",a&&!o&&"fitContent",a&&!i&&"heightAuto"]};return(0,c.Z)(s,g,t)}(b);return(0,S.jsx)(j,(0,o.Z)({as:d,ref:t,className:(0,s.Z)(x.root,l),ownerState:b},w,{style:(0,o.Z)({width:Z,height:h},m)}))}))}}]);
//# sourceMappingURL=2886.1b2a0232.chunk.js.map