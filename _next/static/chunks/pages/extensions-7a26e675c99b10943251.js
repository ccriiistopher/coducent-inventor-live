(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68],{2733:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(8490),o=t(5893);function i(e){var n=e.children;return(0,o.jsx)("div",{className:"bg-green-300 p-2",children:(0,o.jsx)(r.Z,{children:n})})}},2292:function(e,n,t){"use strict";t.d(n,{G:function(){return y}});var r=t(8216),o=t(5997),i=t(4695),s=t(3444),c=t(268),a=t(2953),l=t(7294),u=t(1163),f=t(1664),d=t(9271),h=t(6371),p=t(1457),x=t(2762),m=t(3778),v=t(5893);function g(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,a.Z)(e);if(n){var o=(0,a.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,c.Z)(this,t)}}var b=function(e){(0,s.Z)(t,e);var n=g(t);function t(e){var o;return(0,r.Z)(this,t),(o=n.call(this,e)).state={open:!1},o.onResize=o.onResize.bind((0,i.Z)(o)),o.closeMenu=o.closeMenu.bind((0,i.Z)(o)),o.openMenu=o.openMenu.bind((0,i.Z)(o)),o.toggleMenu=o.toggleMenu.bind((0,i.Z)(o)),o.isMenuOpen=o.isMenuOpen.bind((0,i.Z)(o)),o.items=[{label:"Home",icon:d.Z,path:"/"},{label:"Extensions",icon:h.Z,path:"/extensions"},{label:"Labs",icon:p.Z,path:"labs"}],o}return(0,o.Z)(t,[{key:"openMenu",value:function(){this.setState({open:!0}),document.querySelectorAll("div[data-area]").forEach((function(e){return e.classList.remove("hidden")}))}},{key:"closeMenu",value:function(){this.setState({open:!1}),document.querySelectorAll("div[data-area]").forEach((function(e){return e.classList.add("hidden")}))}},{key:"toggleMenu",value:function(){this.isMenuOpen()?this.closeMenu():this.openMenu()}},{key:"isMenuOpen",value:function(){return this.state.open}},{key:"onResize",value:function(e){this.state.open&&this.closeMenu()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this;return(0,v.jsx)("div",{className:"shadow bg-white sticky top-0 z-10",children:(0,v.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,v.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,v.jsx)("span",{className:"my-auto p-0 m-0 flex-grow text-green-600 text-lg font-bold",children:"Tedusoft"}),(0,v.jsx)("div",{className:"md:hidden",children:(0,v.jsx)(m.z,{onClick:function(){return e.toggleMenu()},className:"p-3",children:(0,v.jsx)(x.Z,{})})})]}),(0,v.jsx)("div",{className:"flex flex-col md:flex-row md:flex-grow gap-4 hidden md:block","data-area":!0,children:(0,v.jsx)("div",{className:this.isMenuOpen()?"flex flex-col divide-y":"flex flex-row divide-x",children:this.items.map((function(n){return(0,v.jsx)(f.default,{href:n.path,passHref:!0,children:(0,v.jsxs)("button",{className:"px-4 py-3 text-left font-semibold ".concat(n.path===e.props.router.pathname||e.props.router.pathname.split("/")[1]===n.path.replace("/","")?"bg-green-600 text-white":"text-gray-500"),children:[(0,v.jsx)(n.icon,{})," ",n.label]})},n.path)}))})}),(0,v.jsx)("div",{className:"flex flex-col md:flex-row gap-4 hidden md:block","data-area":!0})]})})}}]),t}(l.Component),j=(0,u.withRouter)(b);function y(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j,{}),(0,v.jsx)("div",{className:"container mx-auto",children:e})]})}},3778:function(e,n,t){"use strict";t.d(n,{z:function(){return a}});var r=t(2809),o=t(219),i=t(5893),s=["className","ghost"];function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var a=function(e){var n=e.className,t=e.ghost,a=void 0!==t&&t,l=(0,o.Z)(e,s),u=a?"transparent":"green-600",f=a?"green-600":"white",d=a?"gray-100":"green-800",h=a?"green-600":"green-500";return(0,i.jsx)("button",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({onClick:l.navigateto?function(){document.getElementById(l.navigateto).scrollIntoView({behavior:"smooth"})}:l.onClick,className:"shadow ".concat(n," ").concat(a&&"ring-2 ring-green-600 focus:bg-green-600 focus:text-white"," bg-").concat(u," text-").concat(f," py-2 font-semibold rounded-md hover:bg-").concat(d," focus:ring-offset-2 focus:ring-2 focus:ring-").concat(h," w-full")},l))}},8843:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u}});var r=t(8490),o=t(8333),i=t(1664),s=t(2292),c=t(2733),a=t(5893),l=function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(r.Z.Item,{children:(0,a.jsx)(i.default,{href:"/",children:"Home"})}),(0,a.jsx)(r.Z.Item,{children:"Extensions"})]}),(0,a.jsx)("div",{className:"px-4 md:px-0 mt-4",children:(0,a.jsx)(o.Z.Title,{children:"Extensions"})}),e.extensions.map((function(e){return(0,a.jsx)(i.default,{href:"extensions/".concat(e.path,"/1"),children:(0,a.jsx)("a",{children:e.name})},e.name)}))]})};l.getLayout=s.G;var u=!0;n.default=l},2186:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extensions",function(){return t(8843)}])}},function(e){e.O(0,[799,19,577,236,774,888,179],(function(){return n=2186,e(e.s=n);var n}));var n=e.O();_N_E=n}]);