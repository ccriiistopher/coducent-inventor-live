(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(35866)}])},74589:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(85893),s=t(53856),l=t(74622);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function o(e){return(0,r.jsx)(s.Z,{components:{p:function(e){return(0,r.jsx)("p",i({},e,{className:"w-full whitespace-pre-wrap"}))},ol:function(e){return(0,r.jsx)("ol",i({},e,{className:"list-decimal list-outside font-light pl-5"}))},ul:function(e){return(0,r.jsx)("ul",i({},e,{className:"list-disc list-outside font-light pl-5"}))},h1:function(e){return(0,r.jsx)(l.Z.Title,{level:1,children:e.children})},h2:function(e){return(0,r.jsx)(l.Z.Title,{level:2,children:e.children})},h3:function(e){return(0,r.jsx)(l.Z.Title,{level:3,children:e.children})},h4:function(e){return(0,r.jsx)(l.Z.Title,{level:4,children:e.children})},h5:function(e){return(0,r.jsx)(l.Z.Title,{level:5,children:e.children})},blockquote:function(e){return(0,r.jsx)("blockquote",i({},e,{className:"border-l-2 border-blue-400 bg-blue-100 px-3 my-1"}))},code:function(e){return(0,r.jsx)(l.Z.Paragraph,i({code:!0},e,{copyable:!0}))},a:function(e){return(0,r.jsx)(l.Z.Link,i({},e,{copyable:!0,children:e.children}))},img:function(e){var n=e.alt,t=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(n),s={style:{}};return t&&(t[3]&&(s.style.width=t[3]),t[4]&&(s.style.height=t[4]),t[6]&&(s.className=t[6])),(0,r.jsx)("img",i({},e,s))}},children:e.children})}},92120:function(e,n,t){"use strict";t.d(n,{g:function(){return s}});var r=t(67294),s=function(){var e=(0,r.useState)({loading:!0,isAndroidApp:!1}),n=e[0],t=e[1];return(0,r.useEffect)((function(){-1!=navigator.userAgent.indexOf("TCA")?t({loading:!1,isAndroidApp:!0}):t({loading:!1,isAndroidApp:!1})}),[]),n}},49501:function(e,n,t){"use strict";t.d(n,{G:function(){return R}});var r=t(85893),s=t(67294),l=t(11163),a=t(73403),i=t(87057),o=t(69015),c=t(45605),u=t(60532),d=t(71577),m=t(38792),x=t(79531),f=t(19562),h=t(62986),p=t(86926),j=t.n(p),g=t(41125),v=t.n(g),b=j()(v()),y=t(41664),w=t(5152),N=t(96486),Z=t(92764),k=t(74221),S=(0,w.default)((function(){return Promise.all([t.e(885),t.e(80),t.e(334),t.e(650),t.e(303),t.e(255),t.e(66)]).then(t.bind(t,52255)).then((function(e){return e.Menu}))}),{loadableGenerated:{webpack:function(){return[52255]},modules:["../components/general/navbar.tsx -> antd"]},ssr:!1}),C=function(e){var n=(0,s.useContext)(Z.O).searchBar,t=(0,l.useRouter)(),p=function(e){var n=b.theme.screens[e],t=(0,s.useState)(!1),r=t[0],l=t[1],a=(0,s.useCallback)((function(e){e.matches?l(!0):l(!1)}),[]);return(0,s.useEffect)((function(){var e=window.matchMedia("(min-width: ".concat(n,")"));return e.addEventListener("change",a),e.matches&&l(!0),function(){return e.removeEventListener("change",a)}}),[]),r}("md"),j=(0,s.useState)(!1),g=j[0],v=j[1],w=(0,s.useState)([]),C=w[0],O=w[1],T=(0,s.useState)(!1),E=T[0],_=T[1],A=(0,s.useState)(t.pathname),P=A[0],I=A[1],z=null;n&&(z=new k.Z(n.searchBarData,{keys:n.searchKeys}));var q=(0,s.useCallback)((function(e){if(e&&!(e.replaceAll(/\s/g,"").length<=0)){var n=z.search(e),t=[];if(n.length>0){var r=!0,s=!1,l=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var o=a.value;t.push(o.item)}}catch(c){s=!0,l=c}finally{try{r||null==i.return||i.return()}finally{if(s)throw l}}O(t)}else O([]);_(!0)}}),[z,n]);(0,s.useEffect)((function(){var e=t.pathname,n=(0,N.compact)(e.split("/"));if(n.length>=2){var r=1==(n=(0,N.filter)(n,(function(e){return!e.includes("[")}))).length?"/"+n[0]:"/"+n[0]+"/"+n[1];I(r)}else I(e);_(!1)}),[t.pathname]);var M=[{label:"Home",icon:a.Z,path:"/"},{label:"Extensions",icon:i.Z,path:"/extensions"},{label:"Docs",icon:o.Z,path:"/docs"},{label:"Help",icon:c.Z,path:"/help"}];return(0,r.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,r.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,r.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,r.jsx)(y.default,{href:"/",passHref:!0,children:(0,r.jsx)("span",{className:"my-auto p-0 m-0 text-blue-400 text-lg font-black cursor-pointer",children:"TEDUSOFT"})}),(0,r.jsx)("div",{className:"md:hidden ml-auto",children:(0,r.jsx)(d.Z,{onClick:function(){return v(!g)},className:"p-3",children:(0,r.jsx)(u.Z,{})})})]}),(0,r.jsx)("div",{className:"w-full z-50",children:(0,r.jsx)(S,{selectedKeys:[P],mode:p?"horizontal":"inline",hidden:!p&&!g,onClick:function(){return v(!1)},children:M.map((function(e){return e.children?(0,r.jsx)(m.Z.SubMenu,{icon:e.icon&&(0,r.jsx)(e.icon,{}),title:e.label,children:(0,r.jsx)(m.Z.ItemGroup,{title:e.label,children:e.children.map((function(e){return(0,r.jsx)(m.Z.Item,{icon:e.icon&&(0,r.jsx)(e.icon,{}),children:(0,r.jsx)(y.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})},"route-".concat(e.label)):(0,r.jsx)(m.Z.Item,{icon:e.icon&&(0,r.jsx)(e.icon,{}),children:(0,r.jsx)(y.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})}),n&&n.showSearchBar&&(0,r.jsxs)("div",{className:"my-2 mx-3 md:w-80 lg:w-96 z-50",children:[(0,r.jsx)(x.Z.Search,{placeholder:n.placeholder||"Search",onSearch:q}),(0,r.jsx)(f.Z,{visible:E,onCancel:function(){_(!1)},okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},title:"Results",children:C&&C.length>0?n.searchBarResult(C):(0,r.jsx)(h.Z,{description:"No results found."})})]})]})})},O=t(13448),T=t(8145),E=t(87547),_=t(88641),A=t(27496),P=t(39101);function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){I(e,n,t[n])}))}return e}var q={labelCol:{span:24},wrapperCol:{span:24}},M={required:"This field is required!",types:{email:"This is not a valid email!"}},D=function(e){return function(n){P.ZP.send("default_service","template_n5698qg",{from_name:n.name,from_email:n.email,message:n.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){O.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){O.Z.error({message:"Your message was not sent"})}))}},B=function(e){var n=(0,s.useRef)();return(0,r.jsx)("div",{className:"overflow-hidden",children:(0,r.jsxs)(T.Z,z({ref:n},q,{onFinish:D(n),name:"nest-messages",validateMessages:M,children:[(0,r.jsx)(T.Z.Item,{name:"name",rules:[{required:!0}],children:(0,r.jsx)(x.Z,{placeholder:"Name",prefix:(0,r.jsx)(E.Z,{})})}),(0,r.jsx)(T.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,r.jsx)(x.Z,{placeholder:"Email",prefix:(0,r.jsx)(_.Z,{})})}),(0,r.jsx)(T.Z.Item,{name:"message",rules:[{required:!0}],children:(0,r.jsx)(x.Z.TextArea,{placeholder:"Message"})}),(0,r.jsx)(T.Z.Item,{wrapperCol:z({},q.wrapperCol,{offset:0}),children:(0,r.jsx)(d.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,r.jsx)(A.Z,{}),children:"Submit"})})]}))})},L=t(38545),F=t(99121),G=function(e){return(0,r.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,r.jsxs)("div",{className:"text-center font-black",children:[(0,r.jsx)(L.Z,{className:"mr-3"}),(0,r.jsx)("h1",{className:"text-center font-black",children:"CONTACT"})]}),(0,r.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,r.jsx)("div",{className:"w-full md:w-1/2",children:(0,r.jsx)(B,{})}),(0,r.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,r.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,r.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,r.jsx)(F.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,r.jsx)(F.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,r.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})},H=t(53308),K=t(75162);function R(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{}),(0,r.jsxs)("div",{className:"container mx-auto",children:[e,(0,r.jsx)(H.Z,{children:(0,r.jsx)(d.Z,{size:"large",icon:(0,r.jsx)(K.Z,{}),shape:"circle",type:"primary"})})]}),(0,r.jsx)(G,{})]})}},35866:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return P},default:function(){return I}});var r=t(85893),s=t(49501),l=(t(16494),t(92120)),a=t(74622),i=t(71577);function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=function(e){e.className;var n=o(e,["className"]);return(0,r.jsx)(i.Z,{onClick:n.navigateto?function(){document.getElementById(n.navigateto).scrollIntoView({behavior:"smooth"})}:n.onClick,type:"primary",children:n.children})};function u(){return(0,r.jsxs)("div",{className:"md:grid md:grid-cols-2 p-6 md:p-12 bg-gray-200 md:rounded-lg shadow-inner md:my-5",children:[(0,r.jsxs)("div",{className:"mx-auto",children:[(0,r.jsx)(a.Z.Title,{level:1,className:"text-center",children:"Welcome to tedusoft!"}),(0,r.jsx)("p",{className:"text-center",children:"Welcome to tedusoft, We currently work with software development environments like AppInventor, Kodular and Niotron. If you are interested, on this page you can find extensions for these environments."})]}),(0,r.jsxs)("div",{className:"mx-auto w-full md:px-12 grid auto-rows-auto gap-y-2",children:[(0,r.jsx)(c,{navigateto:"groups",children:"Latest Extensions"}),(0,r.jsx)(c,{navigateto:"footer",children:"Contact"})]})]})}var d=t(41664),m=t(86529),x=t(74589),f=function(e){return(0,r.jsx)(m.default,{swipeable:!0,showDots:!0,responsive:{all:{breakpoint:{min:0,max:Number.MAX_VALUE},slidesToSlide:1,items:1}},autoPlay:!0,autoPlaySpeed:3e3,infinite:!0,children:e.items.map((function(e,n){return(0,r.jsxs)("div",{className:"rounded-lg m-3 shadow-lg overflow-hidden flex flex-col md:flex-row align-content-center relative",style:{backgroundColor:e.backgroundColor,color:e.textColor},children:[e.url&&(0,r.jsx)(d.default,{href:e.url,children:(0,r.jsx)("a",{target:e.url.includes("http")?"_blank":"_self",rel:e.url.includes("http")&&"noreferrer noopener",className:"absolute w-full h-full left-0 z-30"})}),(0,r.jsx)("img",{className:"w-full md:w-1/2 z-10 max-h-60 object-cover",src:"/".concat(e.image),loading:"lazy"}),(0,r.jsxs)("div",{className:"p-3 z-20 flex align-content-center justify-center flex-col text-center w-full md:w-1/2",style:{boxShadow:"-10px 5px 25px 25px ".concat(e.backgroundColor)},children:[(0,r.jsx)("p",{className:"text-center text-lg font-bold",children:e.bannerTitle}),(0,r.jsx)(x.Z,{children:e.bannerBody})]})]},"banner-".concat(n))}))})},h={desktop:{breakpoint:{max:3e3,min:768},items:3,slidesToSlide:3},tablet:{breakpoint:{max:768,min:640},items:2,slidesToSlide:2},mobile:{breakpoint:{max:640,min:0},items:1,slidesToSlide:1}},p=function(e){var n=e.platform;return(0,r.jsx)("a",{style:{backgroundColor:n.backgroundColor,color:n.textColor},target:"_blank",href:n.url,rel:"noreferrer",className:"rounded-lg m-3 shadow-lg py-5 text-center flex align-center justify-center",children:(0,r.jsx)("p",{className:"p-0 m-0 text-lg font-bold",children:n.name})})},j=function(e){return(0,r.jsx)(m.default,{swipeable:!0,responsive:h,infinite:!0,children:e.items.map((function(e,n){return(0,r.jsx)(p,{platform:e},"banner-".concat(n))}))})},g=t(9008),v=t(14670),b=t(20550),y=t(67294),w=t(71511),N=t(61011),Z=t(68788);function k(e){var n=e.items;return n&&(0,r.jsxs)(m.default,{swipeable:!0,showDots:!0,responsive:h,containerClass:"py-2",children:[n.map((function(e,n){return(0,r.jsx)(S,{group:e},"card-g-c-".concat(n))})),(0,r.jsx)(S,{showAll:!0})]})}var S=function(e){var n=e.group,t=e.showAll,s=(0,y.useState)(!1),l=s[0],a=s[1];return(0,r.jsxs)("div",{className:"mx-3 px-0 rounded-lg border-2 border-gray-200 text-center overflow-hidden relative ".concat(l?"bg-gray-600":"bg-white"," ").concat(t&&"h-full"),children:[(0,r.jsx)(d.default,{href:t?"/extensions":"/extensions/".concat(n.path),children:(0,r.jsx)("a",{className:"absolute w-full h-full left-0 z-30",onTouchStart:function(){return a(!0)},onTouchEnd:function(){return a(!1)},onMouseOver:function(){return a(!0)},onMouseLeave:function(){return a(!1)}})}),t?(0,r.jsxs)("div",{className:"h-full flex flex-col justify-center items-center",children:[(0,r.jsx)("p",{className:"text-center text-6xl p-0 m-0 ".concat(l&&"text-white"),children:l?(0,r.jsx)(N.Z,{}):(0,r.jsx)(Z.Z,{})}),(0,r.jsx)("p",{className:"text-xl font-bold p-0 m-0 ".concat(l&&"text-white"),children:"See all..."})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"px-4 p-3 m-3 z-20 ".concat(l?"bg-gray-600":"bg-white"),children:[(0,r.jsxs)("p",{className:"p-0 my-2 text-xl font-bold ".concat(l&&"text-white"),children:[n.icon&&(0,r.jsx)(w.Z,{size:"large",src:n.icon})," ",n.title]}),(0,r.jsx)("div",{className:"flex flex-wrap w-full justify-center",children:n.platforms.map((function(e,t){return(0,r.jsx)(b.Z,{color:l?"gray":n.tagColor,children:e},"".concat(e,"-").concat(t))}))})]}),n.media&&(0,r.jsx)("img",{src:n.media[0],className:"mt-auto max-h-40 object-cover w-full z-10 text-transparent z-10 ".concat(l&&"opacity-80"),onError:function(e){e.currentTarget.style.display="none"},alt:n.path})]})]})},C=t(45605),O=function(e){var n=e.ad;return(0,r.jsx)(v.Z,{showIcon:!!n.image,icon:n.image&&(0,r.jsx)("div",{className:"mr-3 w-20 h-20",children:(0,r.jsx)("img",{src:"/".concat(n.image),className:"rounded overflow-hidden object-cover w-full h-full"})}),closable:!0,type:"info",message:(0,r.jsx)("p",{className:"font-bold",children:n.title}),style:{background:n.backgroundColor,color:n.textColor,border:"none",borderRadius:"10px"},className:"shadow relative",description:(0,r.jsxs)("div",{className:"flex",children:[n.url&&(0,r.jsx)(d.default,{href:n.url,children:(0,r.jsx)("a",{target:n.url.includes("http")?"_blank":"_self",rel:n.url.includes("http")&&"noreferrer noopener",className:"absolute w-full h-full left-0 z-30"})}),(0,r.jsx)("div",{className:"my-auto",children:(0,r.jsx)(x.Z,{children:n.body})})]})})},T=function(e){var n=e.banners,t=e.platforms,s=e.groups,l=e.ads;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g.default,{children:[(0,r.jsx)("title",{children:"Home - Tedusoft Extensions"}),(0,r.jsx)("meta",{name:"description",content:"Welcome to Tedusoft extensions, you can find here extensions and help for some environments like Kodular, AppInventor and Niotron."})]}),(0,r.jsx)(u,{}),(0,r.jsxs)("div",{className:"container mx-auto py-3 md:pl-0",children:[(0,r.jsx)("div",{id:"banners",className:"pt-4",children:(0,r.jsx)(f,{items:n})}),l.length>0&&(0,r.jsx)("div",{className:"pt-4 px-3",children:l.map((function(e,n){return(0,r.jsx)(O,{ad:e},"ad-".concat(n))}))}),(0,r.jsxs)("div",{id:"groups",className:"pt-4",children:[(0,r.jsx)(a.Z.Title,{level:2,underline:!0,className:"px-2 md:px-0",children:"Extensions"}),(0,r.jsx)(k,{items:s})]}),(0,r.jsxs)("div",{id:"platforms",className:"pt-4",children:[(0,r.jsx)(a.Z.Title,{level:2,underline:!0,className:"px-2 md:px-0",children:"Platforms"}),(0,r.jsx)("div",{className:"px-3 ",children:(0,r.jsx)(v.Z,{icon:(0,r.jsx)(C.Z,{}),message:"You can require or request content for other platforms.",showIcon:!0})}),(0,r.jsx)(j,{items:t})]})]})]})},E=function(e){var n=e.banners,t=e.platforms,s=e.groups,l=e.ads;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"container mx-auto py-3 md:pl-0",children:[(0,r.jsx)("div",{id:"banners",className:"pt-4",children:(0,r.jsx)(f,{items:n})}),(0,r.jsx)("div",{className:"pt-4",children:l.map((function(e,n){return(0,r.jsx)(O,{ad:e},"ad-".concat(n))}))}),(0,r.jsxs)("div",{id:"platforms",className:"pt-4",children:[(0,r.jsx)(a.Z.Title,{level:2,underline:!0,className:"px-2 md:px-0",children:"Platforms"}),(0,r.jsx)("div",{className:"mx-4",children:(0,r.jsx)(v.Z,{icon:(0,r.jsx)(C.Z,{}),message:"You can require or request content for other platforms.",showIcon:!0})}),t.map((function(e,n){return(0,r.jsx)(p,{platform:e},"home-p-".concat(n))}))]}),(0,r.jsxs)("div",{id:"groups",className:"pt-4",children:[(0,r.jsx)(a.Z.Title,{level:2,underline:!0,className:"px-2 md:px-0",children:"Extensions"}),(0,r.jsx)(k,{items:s})]})]})})},_=t(11382),A=function(e){var n=e.banners,t=e.platforms,s=e.groups,a=e.ads,i=(0,l.g)(),o=i.isAndroidApp;return i.loading?(0,r.jsx)(_.Z,{}):o?(0,r.jsx)(E,{banners:n.filter((function(e){return e.mobile})),platforms:t,groups:s,ads:a.filter((function(e){return e.mobile}))}):(0,r.jsx)(T,{banners:n.filter((function(e){return!e.mobile})),platforms:t,groups:s,ads:a.filter((function(e){return!e.mobile}))})};A.getLayout=s.G;var P=!0,I=A},41125:function(e){"use strict";e.exports={content:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],media:!1,theme:{extend:{}},variants:{extend:{}},plugins:[]}}},function(e){e.O(0,[774,662,789,856,511,783,888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);