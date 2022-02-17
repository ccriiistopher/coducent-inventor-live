"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{24021:function(e,t,n){var s=n(85893),i=n(95507),r=n(24093),l=n(20550),a=n(41664);t.Z=function(e){var t=e.data,n=e.pagination,o=void 0!==n&&n,c=e.group,d=e.groups;return(0,s.jsx)(i.ZP,{itemLayout:"horizontal",size:"small",pagination:o&&{pageSize:10},dataSource:t,header:(0,s.jsxs)("div",{children:["Total: ",t.length," extension(s)"]}),bordered:!0,renderItem:function(e){var t=c||(e.group&&d[e.group]?d[e.group][0]:null);return(0,s.jsx)(i.ZP.Item,{className:"rounded bg-white relative",children:(0,s.jsx)(i.ZP.Item.Meta,{avatar:t?t.icon?(0,s.jsx)(r.C,{src:"/".concat(t.icon)}):(0,s.jsx)(r.C,{style:{backgroundColor:t.tagColor},children:t.title[0]}):(0,s.jsx)(r.C,{children:e.name[0]}),title:(0,s.jsx)(a.default,{href:"/docs/".concat(e.path),children:(0,s.jsx)("a",{children:e.name})}),description:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:e.date}),!c&&t&&(0,s.jsxs)("p",{children:["From:"," ",(0,s.jsx)(l.Z,{color:"blue",children:(0,s.jsx)(a.default,{href:"/extensions/".concat(t.path),children:(0,s.jsx)("a",{children:t.title})})})]})]})})},e.name)}})}},56026:function(e,t,n){var s=n(85893),i=n(95507),r=n(20550),l=n(56266),a=n(71577),o=(n(67294),n(41664)),c=n(39876),d=n(78860),x=n(59117),p=n(85060),m=n(71511);t.Z=function(e){var t=e.parentGroup,n=e.groups,h=e.indexedGroups;return(0,s.jsx)(i.ZP,{itemLayout:"vertical",size:"small",dataSource:n,header:(0,s.jsxs)("div",{children:["Total: ",n.length," Extension(s)"]}),bordered:!0,pagination:{pageSize:10},renderItem:function(e){var n=e.parent?h?h[e.parent][0]:t||null:null;return(0,s.jsxs)(i.ZP.Item,{className:"rounded bg-white relative",actions:[(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.Z,{color:"green",children:[(0,s.jsx)(c.Z,{})," ",e.netCost?e.netCost:"FREE",n&&(0,s.jsx)(l.Z,{title:"If this extension is free, it will be obtained when you buy ".concat(n.title),children:(0,s.jsx)(d.Z,{})})]}),(0,s.jsx)(a.Z,{shape:"circle",about:"Get it",icon:e.netCost?(0,s.jsx)(x.Z,{}):(0,s.jsx)(p.Z,{})})]},"item-actions")],children:[(0,s.jsx)(i.ZP.Item.Meta,{avatar:e.icon?(0,s.jsx)(m.Z,{src:"/".concat(e.icon)}):(0,s.jsx)(m.Z,{style:{backgroundColor:e.tagColor},children:e.title[0]}),title:(0,s.jsx)(o.default,{href:"/extensions/".concat(e.path),children:(0,s.jsx)("a",{className:e.deprecated?"line-trought":null,children:e.title})}),description:(0,s.jsxs)("div",{children:[e.deprecated&&(0,s.jsxs)("p",{className:"italic font-semibold",children:[(0,s.jsx)(d.Z,{})," This extension is no longer supported"]}),n&&(0,s.jsxs)("p",{children:["This extension comes bundled with:"," ",(0,s.jsx)(r.Z,{color:n.tagColor,children:(0,s.jsx)(o.default,{href:"/extensions/".concat(n.path),children:(0,s.jsx)("a",{className:"z-30",children:n.title})})})]}),(0,s.jsx)("p",{children:e.shortDescription||e.description})]})}),(0,s.jsx)("div",{className:"w-2 h-full top-0 left-0 absolute",style:{backgroundColor:e.tagColor}})]},e.path)}})}},23076:function(e,t,n){var s=n(85893),i=n(82826),r=n(71577),l=n(58492),a=n(11163),o=n(41664);t.Z=function(e){var t=e.routes,n=(0,a.useRouter)();return(0,s.jsxs)("div",{className:"p-2",children:[(0,s.jsx)(r.Z,{className:"inline-block mr-2",icon:(0,s.jsx)(i.Z,{}),shape:"circle",onClick:function(){return n.back()}}),(0,s.jsx)(l.Z,{className:"inline",separator:">",children:t.map((function(e,t){return e.path?(0,s.jsx)(l.Z.Item,{children:(0,s.jsx)(o.default,{href:e.path,passHref:!0,children:(0,s.jsxs)("a",{children:[e.icon&&(0,s.jsx)(e.icon,{}),(0,s.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(t)):(0,s.jsxs)(l.Z.Item,{children:[e.icon&&(0,s.jsx)(e.icon,{}),(0,s.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(t))}))})]})}},74589:function(e,t,n){n.d(t,{Z:function(){return o}});var s=n(85893),i=n(53856),r=n(74622);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){l(e,t,n[t])}))}return e}function o(e){return(0,s.jsx)(i.Z,{components:{p:function(e){return(0,s.jsx)("p",a({},e,{className:"w-full whitespace-pre-wrap"}))},ol:function(e){return(0,s.jsx)("ol",a({},e,{className:"list-decimal list-outside pl-5"}))},ul:function(e){return(0,s.jsx)("ul",a({},e,{className:"list-disc list-outside pl-5"}))},h1:function(e){return(0,s.jsx)("h1",a({className:"text-4xl font-semibold"},e,{children:e.children}))},h2:function(e){return(0,s.jsx)("h2",a({className:"text-3xl font-semibold"},e,{children:e.children}))},h3:function(e){return(0,s.jsx)("h3",a({className:"text-2xl font-semibold"},e,{children:e.children}))},h4:function(e){return(0,s.jsx)("h4",a({className:"text-xl font-bold"},e,{children:e.children}))},h5:function(e){return(0,s.jsx)("h5",a({className:"text-lg font-bold"},e,{children:e.children}))},h6:function(e){return(0,s.jsx)("h6",a({className:"text-lg font-semibold"},e,{children:e.children}))},blockquote:function(e){return(0,s.jsx)("blockquote",a({},e,{className:"border-l-2 border-blue-400 bg-blue-100 px-3 my-1"}))},code:function(e){return(0,s.jsx)(r.Z.Paragraph,a({code:!0},e,{copyable:!0}))},a:function(e){return(0,s.jsx)(r.Z.Link,a({},e,{copyable:!0,children:e.children}))},img:function(e){var t=e.alt,n=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(t),i={style:{}};return n&&(n[3]&&(i.style.width=n[3]),n[4]&&(i.style.height=n[4]),n[6]&&(i.className=n[6])),(0,s.jsx)("img",a({},e,i))}},children:e.children})}},50777:function(e,t,n){n.r(t),n.d(t,{__N_SSG:function(){return X},default:function(){return Y}});var s=n(85893),i=n(37802),r=n(74622),l=n(14670),a=n(61980),o=n(54907),c=n(49501),d=n(23076),x=n(67294),p=n(41664),m=n(9008),h=(n(96486),n(73403)),u=n(87057),j=n(57671),f=n(6171),g=n(18073),w=n(45605),y=n(74589),b=n(53944),v=n(24021),Z=n(56026),N=n(5152),k=n(8145),C=n(79531),I=n(71577),P=n(87547),T=n(88641),_=n(24126),D=n(63606),E=n(52645),L=n(23430),S=n(87898),q=n(26020),z=n(13448),F=n(39101),A=function(e,t,n){window.paypal.Buttons({style:{shape:"pill",color:"blue",layout:"horizontal",label:"paypal"},createOrder:function(e,n){return n.order.create({purchase_units:[{name:t.title,description:t.title,amount:{currency_code:"USD",value:t.netCost}}]})},onApprove:function(n,s){return s.order.capture().then((function(n){F.ZP.send("default_service","template_qr5u179",{client_name:e.name,client_email:e.email,client_gdrive:e.gmail,products:t.path},"user_Z0tDIaK634ZfJUrLfrywg").then((function(e){z.Z.success({message:"Transaction completed."})}))}))},onError:function(e){z.Z.error({message:"Error loading paypal."})},onCancel:function(e){z.Z.warning({message:"Transaction cancelled."})}}).render(n)},O=function(){return(0,s.jsx)("table",{style:{border:0,alignItems:"center"},cellPadding:0,cellSpacing:0,children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("td",{align:"center"})}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{align:"center",children:(0,s.jsx)("a",{href:"https://www.paypal.com/webapps/mpp/paypal-popup",title:"How PayPal Works",onClick:function(){return window.open("https://www.paypal.com/webapps/mpp/paypal-popup","WIPaypal","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700"),!1},children:(0,s.jsx)("img",{src:"https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg",style:{border:0},alt:"PayPal Acceptance Mark"})})})})]})})},G=function(){return(0,s.jsx)("table",{style:{border:0},cellPadding:10,cellSpacing:0,children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("td",{align:"center"})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{align:"center",children:[(0,s.jsx)("a",{href:"https://www.paypal.com/webapps/mpp/paypal-popup",title:"How PayPal Works",onClick:function(){return window.open("https://www.paypal.com/webapps/mpp/paypal-popup","WIPaypal","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700"),!1},children:(0,s.jsx)("img",{src:"https://www.paypalobjects.com/webstatic/mktg/logo-center/logotipo_paypal_pagos.png",style:{border:0},alt:"Payments by PayPal"})}),(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("a",{href:"https://www.paypal.com/pe/webapps/mpp/what-is-paypal",children:(0,s.jsx)("span",{className:"text-xs font-bold",style:{color:"#0079CD",fontFamily:"Arial"},children:"How PayPal works"})})})]})})]})})},H=n(15313),M=H.v9,W=n(1509),V=n(11382),R=function(e){var t=e.group,n=M(W.yA),i=(0,x.useState)(!1),r=i[0],l=i[1];return(0,x.useEffect)((function(){window.paypal&&l(!0)}),[]),(0,x.useEffect)((function(){r&&A({name:n.name+" "+n.lastname,email:n.email,gmail:n.gdrive},t,"#paypal-ctn")}),[r]),r?(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(O,{}),(0,s.jsxs)("p",{className:"text-5xl font-bold p-0 m-0 mb-3",children:[(0,s.jsx)(j.Z,{}),(0,s.jsx)(y.Z,{children:t.priceMD})]}),(0,s.jsxs)("div",{className:"text-left mb-6",children:[(0,s.jsxs)("p",{className:"p-0 m-0",children:[(0,s.jsx)(D.Z,{}),"Lifetime access for this item."]}),(0,s.jsxs)("p",{className:"p-0 m-0",children:[(0,s.jsx)(D.Z,{}),"Access to all updates."]}),(0,s.jsxs)("p",{className:"p-0 m-0",children:[(0,s.jsx)(D.Z,{}),"Request updates depending on your requirements."]})]}),(0,s.jsx)("div",{id:"paypal-ctn"})]}):(0,s.jsxs)("div",{children:[(0,s.jsx)(V.Z,{})," ... Please wait",(0,s.jsx)(q.Z,{src:"https://www.paypal.com/sdk/js?client-id=AdCBXwV8CZFQbTSQHeqlf_4ts2-iHWleOYaDpqdhiJyBspNrhDMxr3lVmLFWYT22fP-JxXjEhHOyjpTX&currency=USD",type:"text/javascript",onLoad:function(e){window.paypal&&l(!0)},async:!0})]})};function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],s=!0,i=!1,r=void 0;try{for(var l,a=e[Symbol.iterator]();!(s=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);s=!0);}catch(o){i=!0,r=o}finally{try{s||null==a.return||a.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U=function(e){var t=e.group,n=Q(k.Z.useForm(),1)[0],i=M(W.yA),r=(0,H.I0)();return(0,s.jsxs)("div",{className:"rounded-lg bg-blue-500 shadow md:grid md:grid-cols-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-center text-xl text-white font-bold pt-4 pb-2 m-0",children:"Customer Information"}),(0,s.jsx)("p",{className:"text-gray-100 px-2 text-center",children:"Complete or verify your data that will be used to purchase the product."}),(0,s.jsx)("div",{className:"bg-white rounded pt-10 pb-1 px-5 m-5",children:(0,s.jsxs)(k.Z,{layout:"vertical",initialValues:i,onFinish:function(e){r((0,W.qC)(e.name)),r((0,W.QU)(e.lastname)),r((0,W.vV)(e.email)),r((0,W.Q2)(e.gdrive)),A({name:i.name+" "+i.lastname,email:i.email,gmail:i.gdrive},t,"#paypal-ctn")},form:n,children:[(0,s.jsx)(k.Z.Item,{name:"name",rules:[{required:!0,message:"This field is required."}],children:(0,s.jsx)(C.Z,{placeholder:"Name",prefix:(0,s.jsx)(P.Z,{}),allowClear:!0})}),(0,s.jsx)(k.Z.Item,{name:"lastname",rules:[{required:!0,message:"This field is required."}],children:(0,s.jsx)(C.Z,{placeholder:"Lastname",prefix:(0,s.jsx)(P.Z,{}),allowClear:!0})}),(0,s.jsx)(k.Z.Item,{name:"email",rules:[{required:!0,message:"This field is required."}],children:(0,s.jsx)(C.Z,{allowClear:!0,placeholder:"Email",prefix:(0,s.jsx)(T.Z,{}),type:"email"})}),(0,s.jsx)(k.Z.Item,{name:"gdrive",rules:[{required:!0,message:"This field is required."}],children:(0,s.jsx)(C.Z,{placeholder:"Gmail Account",prefix:(0,s.jsx)(_.Z,{}),type:"email",allowClear:!0})}),(0,s.jsx)(k.Z.Item,{children:(0,s.jsx)(I.Z,{className:"w-full",type:"primary",icon:(0,s.jsx)(D.Z,{}),htmlType:"submit",children:"Save"})}),i.name&&(0,s.jsx)(k.Z.Item,{children:(0,s.jsx)(I.Z,{className:"w-full",danger:!0,onClick:function(){r((0,W.ZH)()),n.resetFields()},icon:(0,s.jsx)(E.Z,{}),children:"Clear"})})]})})]}),(0,s.jsx)("div",{className:"flex pt-4 pb-8",children:(0,s.jsx)("div",{className:"my-auto mx-auto",children:i.name?(0,s.jsx)(s.Fragment,{children:t.netCost?(0,s.jsx)("div",{className:"bg-white rounded mx-5 p-4",children:(0,s.jsx)(R,{group:t})}):(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-gray-100 text-lg",children:"Download this item by clicking the download button."}),(0,s.jsx)(I.Z,{className:"my-3",icon:(0,s.jsx)(L.Z,{}),href:t.downloadLink,download:"".concat(t.path,".aix"),children:"Download"}),(0,s.jsx)("p",{className:"text-gray-100 p-0 m-0",children:"If the download doesn't start, go to the next link."}),(0,s.jsx)("a",{rel:"noreferrer noopener",target:"_blank",href:t.downloadLink,className:"text-blue-200 font-bold p-0 m-0",children:"Click here!"})]})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"text-white text-2xl font-bold px-12 text-center pre-wrap",children:t.priceMD?"Complete your information before buy this item.":"Complete your information to download this item."}),(0,s.jsx)("p",{className:"text-white text-6xl text-center w-full",children:(0,s.jsx)(S.Z,{})})]})})})]})},B=(0,N.default)((function(){return Promise.all([n.e(885),n.e(216),n.e(303),n.e(812)]).then(n.bind(n,32812)).then((function(e){return e.Image}))}),{loadableGenerated:{webpack:function(){return[32812]},modules:["extensions/[path].tsx -> antd"]},ssr:!1}),J=function(e){var t=e.group,n=e.groupChildren,c=e.platforms,N=e.parent,k=e.showSideNavigation,C=void 0===k||k,I=e.preview,P=void 0!==I&&I,T=(0,x.useRef)();return(0,s.jsxs)(s.Fragment,{children:[!P&&(0,s.jsxs)(m.default,{children:[(0,s.jsx)("title",{children:t.title}),(0,s.jsx)("meta",{name:"description",content:t.shortDescription?t.shortDescription:void 0}),(0,s.jsx)("meta",{property:"og:title",content:t.title}),(0,s.jsx)("meta",{property:"og:type",content:"article"}),(0,s.jsx)("meta",{property:"og:image",content:t.media?"/".concat(t.media[0]):void 0}),(0,s.jsx)("meta",{property:"og:url",content:"https://www.tedusoft.com/extensions/".concat(t.path)}),(0,s.jsx)("meta",{property:"og:description",content:t.shortDescription?t.shortDescription:void 0}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:url",content:"https://www.tedusoft.com/extensions/".concat(t.path)}),(0,s.jsx)("meta",{name:"twitter:title",content:t.title}),(0,s.jsx)("meta",{name:"twitter:description",content:t.shortDescription?t.shortDescription:void 0}),(0,s.jsx)("meta",{name:"twitter:image",content:t.media?"/".concat(t.media[0]):void 0})]}),(0,s.jsx)("div",{className:"md:fixed md:bg-gray-50 md:w-full lg:w-auto z-50",children:(0,s.jsx)(d.Z,{routes:[{title:"Home",path:"/",icon:h.Z},{title:"Extensions",path:"/extensions",icon:u.Z},{title:"..."}]})}),(0,s.jsxs)("div",{className:"container mx-auto py-3 px-4 md:px-10 lg:px-10 ".concat(C?"md:grid md:grid-cols-7 lg:grid lg:grid-cols-5":void 0),children:[C&&(0,s.jsx)("div",{className:"hidden md:block md:col-start-1 md:col-span-2 lg:col-start-1 lg:col-span-1 md:fixed md:top-32 z-0",children:(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(i.Z.Link,{href:"#overview",title:"Overview"}),t.media&&(0,s.jsx)(i.Z.Link,{href:"#media",title:"Images and Videos"}),n&&(n.extensions||n.groups)&&(0,s.jsxs)(i.Z.Link,{href:"#content",title:"Content",children:[n.extensions&&(0,s.jsx)(i.Z.Link,{href:"#docs",title:"Documentation"}),n.groups&&(0,s.jsx)(i.Z.Link,{href:"#extensions",title:"Nested Extensions"})]}),(0,s.jsx)(i.Z.Link,{href:"#getextension",title:"Get this Item"}),(0,s.jsx)(i.Z.Link,{href:"#comments",title:"Comments"})]})}),(0,s.jsxs)("div",{className:C?"md:col-start-3 md:col-span-5 lg:col-start-2 lg:col-span-4 md:pt-10":void 0,children:[(0,s.jsxs)("div",{id:"overview",children:[(0,s.jsx)(r.Z.Title,{level:1,underline:!0,className:"m-0 p-0",id:"title",children:t.title&&t.title}),(0,s.jsx)("div",{className:"flex md:block w-full pb-3",children:t.netCost?(0,s.jsxs)("div",{className:"mx-auto shadow font-mono p-3 rounded-lg bg-green-400 inline-block text-lg text-green-100",children:["Extension price: ",t.netCost," ",(0,s.jsx)(j.Z,{})]}):!t.parent&&(0,s.jsx)("div",{className:"mx-auto shadow font-mono p-3 rounded-lg bg-green-400 inline-block text-lg text-green-100",children:"This extension is free to download"})}),(0,s.jsxs)("div",{className:"flex flex-col gap-y-2 mb-3",children:[t.deprecated&&(0,s.jsx)(l.Z,{type:"warning",className:"my-1",showIcon:!0,message:"This extension is no longer supported, we recommend to see other alternatives, please visit the description to see more alternatives."}),(0,s.jsx)(l.Z,{type:"info",className:"my-1",showIcon:!0,message:(0,s.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,s.jsx)("span",{className:"mr-1",children:"It is supported for:"}),c?c.map((function(e){return(0,s.jsx)(p.default,{href:e.url,children:(0,s.jsx)("a",{rel:"noreferrer noopener",target:"_blank",className:"mx-1",children:e.name})},"p-".concat(e.name))})):"Selected platforms"]})}),N&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{type:"info",showIcon:!0,message:(0,s.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,s.jsx)("span",{className:"mr-1",children:"It is part of "}),(0,s.jsx)(p.default,{href:"/extensions/".concat(N.path),children:(0,s.jsx)("a",{className:"mx-1",children:N.title})})]})}),(0,s.jsx)(l.Z,{type:"info",showIcon:!0,message:(0,s.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,s.jsxs)("span",{className:"mr-1",children:["The value of this extension depends on:"," ",(0,s.jsx)(p.default,{href:"/extensions/groups/".concat(N.path),children:(0,s.jsx)("a",{className:"mx-1",children:N.title})}),"To get this extension group, please go to:"]}),(0,s.jsx)(p.default,{href:"/extensions/groups/".concat(N.path),children:(0,s.jsx)("a",{className:"mx-1",children:N.title})})]})})]})]}),(0,s.jsx)(y.Z,{children:t.description&&t.description})]}),t.media&&(0,s.jsxs)("div",{id:"media",children:[(0,s.jsx)(r.Z.Title,{level:2,underline:!0,className:"m-0 p-0",children:"Images and Videos"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("span",{className:"absolute h-full flex text-white z-20 text-3xl md:text-6xl ml-2 lg:ml-4",children:(0,s.jsx)(f.Z,{className:"my-auto",onClick:function(){return T.current.prev()}})}),(0,s.jsx)("span",{className:"absolute right-0 h-full flex text-white z-20 text-3xl md:text-6xl mr-2 lg:mr-4",children:(0,s.jsx)(g.Z,{className:"my-auto",onClick:function(){return T.current.next()}})}),(0,s.jsx)(a.Z,{className:"text-center",ref:T,lazyLoad:"ondemand",children:t.media.map((function(e,t){return(0,s.jsx)("div",{className:"bg-gray-200 rounded-lg overflow-hidden w-full",children:e.includes("youtu")?(0,s.jsx)("iframe",{className:"w-full relative block",style:{height:"80vh"},src:e,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,s.jsx)(B,{src:"/".concat(e),width:"100%",height:"80vh",className:"text-center object-contain"})},"thumb-".concat(t))}))})]})]}),n&&(n.extensions||n.groups)&&(0,s.jsxs)("div",{id:"content",children:[(0,s.jsx)(r.Z.Title,{level:2,underline:!0,className:"p-0 mx-0 mt-3 mb-0",children:"Extensions & Documentation"}),(0,s.jsx)("p",{children:"Here you can find related extensions and documentation about the blocks."}),(0,s.jsxs)(o.Z,{defaultActiveKey:["docs","extensions"],bordered:!1,children:[n.extensions&&(0,s.jsx)(o.Z.Panel,{header:(0,s.jsx)("h3",{className:"inline",children:"Detailed documentation of the blocks"}),id:"docs",children:(0,s.jsx)(v.Z,{data:n.extensions,pagination:!0,group:t})},"docs"),n.groups&&(0,s.jsx)(o.Z.Panel,{header:(0,s.jsx)("h3",{className:"inline",children:"Related Extension Groups"}),id:"extensions",children:(0,s.jsx)(Z.Z,{parentGroup:t,groups:n.groups})},"extensions")]})]}),!P&&(0,s.jsxs)("div",{id:"getextension",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(r.Z.Title,{level:2,underline:!0,className:"m-0 p-0",children:"Get The Extension(s)"}),t.priceMD&&(0,s.jsx)("div",{className:"p-3",children:(0,s.jsx)(y.Z,{children:t.priceMD})})]}),N?(0,s.jsxs)("div",{className:"border p-2 bg-white",children:[(0,s.jsx)(r.Z.Text,{className:"block",children:"This item is acquired together with another extension, for more information, read the description again, or go to:"}),(0,s.jsxs)(r.Z.Text,{className:"block",children:["Go to:"," ",(0,s.jsx)(p.default,{href:"/extensions/".concat(N.path),children:(0,s.jsx)("a",{children:N.title})})," "]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center",children:[(0,s.jsx)(G,{}),(0,s.jsx)("div",{className:"gap-y-2 grid my-2",children:(0,s.jsx)(l.Z,{type:"info",showIcon:!0,icon:(0,s.jsx)(w.Z,{}),message:"Want more options to get this extension?",description:(0,s.jsxs)("div",{children:["Please visit"," ",(0,s.jsx)(p.default,{href:"/help",children:(0,s.jsx)("a",{children:"Help"})})," ","to find more options."]})})})]}),(0,s.jsx)(U,{group:t})]})]}),!P&&(0,s.jsx)("div",{id:"comments",children:(0,s.jsx)(b.ZP.DiscussionEmbed,{shortname:"tedusoft",config:{url:"https://www.tedusoft.com/extensions/groups/".concat(t.path),identifier:"#".concat(t.path),title:"".concat(t.title)}})})]})]})]})};J.getLayout=c.d;var X=!0,Y=J}}]);