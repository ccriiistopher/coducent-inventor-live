"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{2733:function(e,n,t){var s=t(6700),r=t(1577),l=t(8490),i=t(1163),a=t(5893);n.Z=function(e){var n=e.children,t=(0,i.useRouter)();return(0,a.jsxs)("div",{className:"bg-blue-200 p-2",children:[(0,a.jsx)(r.Z,{className:"inline-block mr-2",icon:(0,a.jsx)(s.Z,{}),shape:"circle",onClick:function(){return t.back()}}),(0,a.jsx)(l.Z,{className:"inline-block",children:n})]})}},6175:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(2809),r=t(4026),l=t(5968),i=t(5893);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e){return(0,i.jsx)(r.Z,{components:{p:function(e){return(0,i.jsx)("p",c(c({},e),{},{className:"w-full whitespace-pre-wrap"}))},ol:function(e){return(0,i.jsx)("ol",c(c({},e),{},{className:"list-decimal list-outside font-light pl-5"}))},ul:function(e){return(0,i.jsx)("ul",c(c({},e),{},{className:"list-disc list-outside font-light pl-5"}))},h1:function(e){return(0,i.jsx)(l.Z.Title,{level:1,children:e.children})},h2:function(e){return(0,i.jsx)(l.Z.Title,{level:2,children:e.children})},h3:function(e){return(0,i.jsx)(l.Z.Title,{level:3,children:e.children})},h4:function(e){return(0,i.jsx)(l.Z.Title,{level:4,children:e.children})},h5:function(e){return(0,i.jsx)(l.Z.Title,{level:5,children:e.children})},blockquote:function(e){return(0,i.jsx)("blockquote",c(c({},e),{},{className:"border-l-2 border-blue-400 bg-blue-100 px-3 my-1"}))},code:function(e){return(0,i.jsx)(l.Z.Paragraph,c(c({code:!0},e),{},{copyable:!0}))},a:function(e){return(0,i.jsx)(l.Z.Link,{copyable:!0,children:e.children})},img:function(e){var n=e.alt,t=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(n),s={style:{}};return t&&(t[3]&&(s.style.width=t[3]),t[4]&&(s.style.height=t[4]),t[6]&&(s.className=t[6])),(0,i.jsx)("img",c(c({},e),s))}},children:e.children})}},1144:function(e,n,t){t.d(n,{G:function(){return z}});var s=t(8216),r=t(5997),l=t(4695),i=t(3444),a=t(268),c=t(2953),o=t(7294),d=t(1163),u=t(1664),m=t(9271),h=t(6371),f=t(2762),x=t(1577),p=t(5893);function j(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,c.Z)(e);if(n){var r=(0,c.Z)(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return(0,a.Z)(this,t)}}var b=function(e){(0,i.Z)(t,e);var n=j(t);function t(e){var r;return(0,s.Z)(this,t),(r=n.call(this,e)).state={open:!1},r.onResize=r.onResize.bind((0,l.Z)(r)),r.closeMenu=r.closeMenu.bind((0,l.Z)(r)),r.openMenu=r.openMenu.bind((0,l.Z)(r)),r.toggleMenu=r.toggleMenu.bind((0,l.Z)(r)),r.isMenuOpen=r.isMenuOpen.bind((0,l.Z)(r)),r.items=[{label:"Home",icon:m.Z,path:"/"},{label:"Extensions",icon:h.Z,path:"/extensions"}],r}return(0,r.Z)(t,[{key:"openMenu",value:function(){this.setState({open:!0}),document.querySelectorAll("div[data-area]").forEach((function(e){return e.classList.remove("hidden")}))}},{key:"closeMenu",value:function(){this.setState({open:!1}),document.querySelectorAll("div[data-area]").forEach((function(e){return e.classList.add("hidden")}))}},{key:"toggleMenu",value:function(){this.isMenuOpen()?this.closeMenu():this.openMenu()}},{key:"isMenuOpen",value:function(){return this.state.open}},{key:"onResize",value:function(e){this.state.open&&this.closeMenu()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this;return(0,p.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,p.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,p.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,p.jsx)("span",{className:"my-auto p-0 m-0 flex-grow text-blue-400 text-lg font-black",children:"TEDUSOFT"}),(0,p.jsx)("div",{className:"md:hidden",children:(0,p.jsx)(x.Z,{onClick:function(){return e.toggleMenu()},className:"p-3",children:(0,p.jsx)(f.Z,{})})})]}),(0,p.jsx)("div",{className:"flex flex-col md:flex-row md:flex-grow gap-4 hidden md:block","data-area":!0,children:(0,p.jsx)("div",{className:this.isMenuOpen()?"flex flex-col divide-y":"flex flex-row divide-x",children:this.items.map((function(n){return(0,p.jsx)(u.default,{href:n.path,passHref:!0,children:(0,p.jsxs)("button",{onMouseUp:function(){return e.isMenuOpen()&&e.toggleMenu()},className:"px-4 py-3 text-left font-semibold ".concat(n.path===e.props.router.pathname||e.props.router.pathname.split("/")[1]===n.path.replace("/","")?"bg-blue-400 text-white":"text-gray-500"),children:[(0,p.jsx)(n.icon,{})," ",n.label]})},n.path)}))})}),(0,p.jsx)("div",{className:"flex flex-col md:flex-row gap-4 hidden md:block","data-area":!0})]})})}}]),t}(o.Component),v=(0,d.withRouter)(b),y=t(2809),g=t(8648),Z=t(2867),w=t(5019),N=t(9366),O=t(4302),k=t(9148),M=t(5365);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,y.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var T={labelCol:{span:24},wrapperCol:{span:24}},D={required:"This field is required!",types:{email:"This is not a valid email!"}},S=function(e){return function(n){M.ZP.send("default_service","template_n5698qg",{from_name:n.name,from_email:n.email,message:n.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){g.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){g.Z.error({message:"Your message was not sent"})}))}},C=function(e){var n=(0,o.useRef)();return(0,p.jsx)("div",{className:"overflow-hidden",children:(0,p.jsxs)(Z.Z,E(E({ref:n},T),{},{onFinish:S(n),name:"nest-messages",validateMessages:D,children:[(0,p.jsx)(Z.Z.Item,{name:"name",rules:[{required:!0}],children:(0,p.jsx)(w.Z,{placeholder:"Name",prefix:(0,p.jsx)(N.Z,{})})}),(0,p.jsx)(Z.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,p.jsx)(w.Z,{placeholder:"Email",prefix:(0,p.jsx)(O.Z,{})})}),(0,p.jsx)(Z.Z.Item,{name:"message",rules:[{required:!0}],children:(0,p.jsx)(w.Z.TextArea,{placeholder:"Message"})}),(0,p.jsx)(Z.Z.Item,{wrapperCol:E(E({},T.wrapperCol),{},{offset:0}),children:(0,p.jsx)(x.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,p.jsx)(k.Z,{}),children:"Submit"})})]}))})},I=t(5491),R=t(9121),_=function(e){return(0,p.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,p.jsxs)("div",{className:"text-center font-black",children:[(0,p.jsx)(I.Z,{className:"mr-3"}),"CONTACT"]}),(0,p.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,p.jsx)("div",{className:"w-full md:w-1/2",children:(0,p.jsx)(C,{})}),(0,p.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,p.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,p.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,p.jsx)(R.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,p.jsx)(R.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,p.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})};function z(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{}),(0,p.jsx)("div",{className:"container mx-auto",children:e}),(0,p.jsx)(_,{})]})}},9627:function(e,n,t){t.r(n),t.d(n,{__N_SSG:function(){return p}});var s=t(8490),r=t(5968),l=t(1474),i=t(7279),a=t(331),c=t(1144),o=t(6175),d=t(1664),u=t(2733),m=t(3944),h=t(5893),f=function(e){var n=e.extension,t=e.platforms,a=e.main;return(0,h.jsxs)("div",{className:"m-3 mt-0",children:[(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(s.Z.Item,{children:(0,h.jsx)(d.default,{href:"/",children:(0,h.jsx)("a",{children:"Home"})})}),(0,h.jsx)(s.Z.Item,{children:(0,h.jsx)(d.default,{href:"/extensions",children:(0,h.jsx)("a",{children:"Extensions"})})}),(0,h.jsx)(s.Z.Item,{children:n.name})]}),(0,h.jsx)(r.Z.Title,{level:1,underline:!0,className:"m-0 p-0",children:n.name}),(0,h.jsx)(l.Z,{type:"info",className:"my-1",showIcon:!0,message:(0,h.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,h.jsx)("span",{className:"mr-1",children:"It is supported for:"}),t?t.map((function(e){return(0,h.jsx)(d.default,{href:e.url,children:(0,h.jsx)("a",{className:"mx-1",children:e.name})},"p-".concat(e.name))})):n.platforms.join(", ")]})}),a&&(0,h.jsx)(l.Z,{type:"info",showIcon:!0,message:(0,h.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,h.jsx)("span",{className:"mr-1",children:"It is part of "}),(0,h.jsx)(d.default,{href:"/extensions/group/".concat(n.group),children:(0,h.jsx)("a",{className:"mx-1",children:a.name})})]})}),(0,h.jsxs)("p",{className:"my-2 font-semibold",children:["Posted on ",n.date]}),(0,h.jsx)(o.Z,{children:n.description}),(0,h.jsxs)(i.Z,{defaultActiveKey:["Events","Methods","Properties"],children:[n.events.length>0&&(0,h.jsx)(i.Z.Panel,{header:"Events",children:n.events.map((function(e,n){return(0,h.jsxs)("div",{className:"mb-10",children:[(0,h.jsx)(r.Z.Title,{level:3,className:"border-b-2 border-gray-200",children:e.name}),(0,h.jsx)(o.Z,{children:e.description}),e.defValue&&(0,h.jsxs)("p",{className:"font-semibold",children:["Default value: ",e.defValue]}),e.params&&(0,h.jsx)(x,{block:e})]},"b-".concat(e.name,"-").concat(n))}))},"Events"),n.methods.length>0&&(0,h.jsx)(i.Z.Panel,{header:"Methods",children:n.methods.map((function(e,n){return(0,h.jsxs)("div",{className:"mb-10",children:[(0,h.jsx)(r.Z.Title,{level:3,className:"border-b-2 border-gray-200",children:e.name}),(0,h.jsx)(o.Z,{children:e.description}),e.defValue&&(0,h.jsxs)("p",{className:"font-semibold",children:["Default value: ",e.defValue]}),e.params&&(0,h.jsx)(x,{block:e})]},"b-".concat(e.name,"-").concat(n))}))},"Methods"),n.properties.length>0&&(0,h.jsx)(i.Z.Panel,{header:"Properties",children:n.properties.map((function(e,n){return(0,h.jsxs)("div",{className:"mb-10",children:[(0,h.jsx)(r.Z.Title,{level:3,className:"border-b-2 border-gray-200",children:e.name}),(0,h.jsx)(o.Z,{children:e.description}),e.defValue&&(0,h.jsxs)("p",{className:"font-semibold",children:["Default value: ",e.defValue]}),e.params&&(0,h.jsx)(x,{block:e})]},"b-".concat(e.name,"-").concat(n))}))},"Properties")]}),(0,h.jsx)(m.ZP.DiscussionEmbed,{shortname:"tedusoft",config:{url:"https://www.tedusoft.com",identifier:n.path,title:n.name}})]})},x=function(e){var n=e.block;return(0,h.jsx)("div",{className:"rounded shadow overflow-hidden inline-block",children:(0,h.jsxs)("table",{className:"table-auto",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{className:"text-white bg-blue-600 divide-x-2 divide-white divide-opacity-30",children:[(0,h.jsx)("th",{className:"p-2",children:"Name"}),(0,h.jsx)("th",{className:"p-2",children:"Type(s)"}),(0,h.jsx)("th",{className:"p-2",children:"Def. value"})]})}),(0,h.jsx)("tbody",{children:n.params.map((function(e,t){return(0,h.jsxs)("tr",{className:"divide-x-2 divide-black divide-opacity-10",children:[(0,h.jsx)("td",{className:"p-2 text-center",children:e.name}),(0,h.jsx)("td",{className:"p-2 text-center",children:e.type.split(",").map((function(t,s){return(0,h.jsx)(a.Z,{children:t},"tag-".concat(n.name,"-").concat(e.name,"-").concat(s))}))}),(0,h.jsx)("td",{className:"p-2 text-center",children:e.default?e.default:"-"})]},"p-".concat(n.name,"-").concat(t))}))})]})})};f.getLayout=c.G;var p=!0;n.default=f}}]);