(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return n?i.a.createElement(f,l({ref:t},s,{components:n})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(6),a=(n(0),n(112)),o={id:"responsive-design",title:"Responsive Design",sidebar_label:"Responsive Design"},l={id:"responsive-design",title:"Responsive Design",description:"Every utility class from littlegiant can be applied conditionally at different breakpoints.",source:"@site/docs/responsive-design.md",permalink:"/littlegiant/docs/responsive-design",editUrl:"https://github.com/ClearTax/littlegiant/edit/master/docs/docs/responsive-design.md",sidebar_label:"Responsive Design",sidebar:"docs",previous:{title:"Cursor",permalink:"/littlegiant/docs/cursor"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Every utility class from littlegiant can be applied conditionally at different breakpoints."),Object(a.b)("p",null,"There are four breakpoints in littlegiant"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"/* Small (sm) */\n@media (max-width: 768px) {\n  /* ... */\n}\n\n/* Medium (md) */\n@media (min-width: 768px) {\n  /* ... */\n}\n\n/* Large (lg) */\n@media (min-width: 1024px) {\n  /* ... */\n}\n\n/* Extra Large (xl) */\n@media (min-width: 1280px) {\n  /* ... */\n}\n")),Object(a.b)("p",null,"To add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the : character"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:"live",live:!0}),'<>\n  <div class="lil-w-1/2 lg:lil-w-4/5 md:lil-w-1/3 sm:lil-w-full lil-bg-green-100">I am responsive</div>\n</>\n')))}p.isMDXComponent=!0}}]);