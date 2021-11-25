(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{3620:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var i=n(5152);function r(e,t){return{label:e,name:t,widget:"list",fields:[{label:"Name",name:"name",widget:"string"},{label:"Description",name:"description",widget:"markdown",required:!1},{label:"Image",name:"image",widget:"image",required:!1},{label:"Values",name:"values",widget:"list",required:!1,fields:[{name:"name",label:"Name"},{name:"types",label:"Types",widget:"list",field:{name:"type",widget:"string"}}]},{label:"Default Value",name:"default",required:!1,widget:"string"},{label:"Access Type",name:"access",required:!1,widget:"select",options:["Read","Write"],multiple:!0},{label:"Presentation",name:"presentation",required:!1,widget:"select",options:["Designer","Blocks"],multiple:!0}]}}var l={site_url:"https://www.tedusoft.com",display_url:"https://www.tedusoft.com",backend:{name:"github",repo:"ccriiistopher/tedusoft-src",branch:"main",base_url:"https://auth.tedusoft.com",auth_endpoint:"auth"},media_folder:"public/img",public_folder:"img",collections:[{name:"posts",label:"Posts",folder:"content/posts/",extension:"json",create:!0,slug:"{{title}}",path:"{{extension_path}}/{{year}}-{{month}}-{{day}}/{{slug}}",preview_path:"labs/{{extension_path}}/{{title}}",sortable_fields:["extension_path","title","date","commit_date"],summary:"[{{extension_path | upper}}] {{title}} added on {{date | date('DD-MM-YYYY')}}",label_singular:"Post",view_groups:[{label:"Path",field:"extension_path"}],fields:[{label:"Title",name:"title",widget:"string"},{label:"Extension Path",name:"extension_path",widget:"relation",collection:"extensions",value_field:"path",search_fields:["extension_name"]},{label:"Title Color",name:"title_color",widget:"color",default:"#212121",required:!1},{label:"Title shadow color",name:"title_shadow",widget:"color",required:!1},{label:"Header Background",name:"header_background",widget:"image",required:!1},{label:"Header Background opacity",name:"header_b_opacity",widget:"string",default:"1.0",required:!1},{label:"Header Colors",name:"header_colors",widget:"list",field:{label:"Color",name:"gradient_color",widget:"color"},required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Short Description",name:"short_description",widget:"text",required:!1},{label:"Publisher",name:"publisher",widget:"string",default:"admin"},{label:"Date",name:"date",widget:"datetime"},{label:"Steps title",name:"steps_title",widget:"string",default:"Steps"},{label:"Steps",name:"steps",widget:"list",collapsed:!0,fields:[{label:"Title",name:"step_title",widget:"string"},{label:"Description",name:"step_description",widget:"markdown"},{label:"Images",name:"step_images",widget:"list",field:{label:"New Image",name:"step_image",widget:"image"}}]}]},{name:"extensions",label:"Extensions",folder:"content/extensions",extension:"json",create:!0,identifier_field:"path",editor:{preview:!1},fields:[{label:"Name",name:"name",widget:"string",required:!0},{label:"Path",name:"path",widget:"string",comment:"Used to name the file, must not contain any space.",pattern:["[a-zA-Z0-9-]+$","Must contain only word digits and none space."]},{label:"Creation Date",name:"date",widget:"datetime"},{label:"Settings",name:"settings",widget:"object",fields:[{label:"Is main?",name:"main",widget:"boolean",default:!0},{label:"Parent",name:"parent",widget:"relation",collection:"extensions",value_field:"path",search_fields:["name"],display_fields:["name"],required:!1},{label:"Children",name:"children",widget:"relation",collection:"extensions",value_field:"path",search_fields:["name"],display_fields:["name"],required:!1,multiple:!0}]},{label:"Platforms",name:"platforms",widget:"relation",multiple:!0,collection:"editor_general",display_fields:["platform_list.*.name"],value_field:"platform_list.*.name",search_fields:["platform_list.*"],required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Thumbnails",name:"thumbnail",widget:"list",required:!1,field:{widget:"image",name:"image"}},r("Event blocks","event_blocks"),r("Method blocks","method_blocks"),r("Property blocks","property_blocks")]},{label:"Editor General",name:"editor_general",files:[{file:"content/platforms.json",name:"platforms",label:"Platforms",fields:[{name:"platform_list",widget:"list",fields:[{name:"name",label:"Name",widget:"string"},{name:"url",label:"URL",widget:"string",required:!1,default:"https://"}]}]},{file:"content/banners.json",name:"banners",label:"Banners",fields:[{name:"banner_title",widget:"string",label:"Title"},{name:"banner_body",label:"Body",widget:"markdown"},{name:"image",label:"Image",widget:"image"},{name:"text_color",label:"Text Color",widget:"color"},{name:"Background Color",label:"Background Color",widget:"color"}]}]}]},a=n(7294),s=n(381),o=n.n(s),d=n(2809),c=n(1001),u=n(7933),p=n(5893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){return(0,p.jsx)(c.Z,{components:{p:function(e){return(0,p.jsx)("p",h(h({},e),{},{className:"w-full"}))},ol:function(e){return(0,p.jsx)("ol",h(h({},e),{},{className:"list-decimal list-outside font-light pl-5"}))},ul:function(e){return(0,p.jsx)("ul",h(h({},e),{},{className:"list-disc list-outside font-light pl-5"}))},h1:function(e){return(0,p.jsx)(u.Z.Title,{level:1,children:e.children})},h2:function(e){return(0,p.jsx)(u.Z.Title,{level:2,children:e.children})},h3:function(e){return(0,p.jsx)(u.Z.Title,{level:3,children:e.children})},h4:function(e){return(0,p.jsx)(u.Z.Title,{level:4,children:e.children})},h5:function(e){return(0,p.jsx)(u.Z.Title,{level:5,children:e.children})},blockquote:function(e){return(0,p.jsx)("blockquote",h(h({},e),{},{className:"border-l-2 border-blue-400 bg-blue-100"}))},code:function(e){return(0,p.jsx)(u.Z.Paragraph,h(h({code:!0},e),{},{copyable:!0}))},a:function(e){return(0,p.jsx)(u.Z.Link,{copyable:!0,children:e.children})},img:function(e){var t=e.alt,n=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(t),i={style:{}};return n&&(n[3]&&(i.style.width=n[3]),n[4]&&(i.style.height=n[4]),n[6]&&(i.className=n[6])),(0,p.jsx)("img",h(h({},e),i))}},children:e.children})}var f=n(1600),b=n(4277);function w(e){var t=e.post;return t?(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{id:"post_header",style:{background:t.headerColors&&"linear-gradient(to bottom, ".concat(t.headerColors,")"),color:t.titleColor&&t.titleColor,position:"relative",textShadow:t.titleShadow&&"2px 2px 4px ".concat(t.titleShadow)},children:[t.headerBackground&&(0,p.jsx)("img",{src:t.headerBackground,alt:"banner",className:"absolute w-full h-full object-cover",style:{opacity:t.headerOpacity&&"".concat(t.headerOpacity)}}),(0,p.jsxs)("div",{className:"container mx-auto py-10 text-center md:text-left relative px-0 md:px-5",children:[(0,p.jsx)("p",{className:"text-sm uppercase inline md:mb-3 md:block border-current md:border-b-2 underline md:no-underline",children:t.extension&&t.extension.name}),(0,p.jsx)(u.Z.Title,{level:1,style:{color:"inherit"},className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl",children:t.title}),(0,p.jsxs)(u.Z.Text,{className:"text-lg font-light",style:{color:"inherit"},children:["Posted by ",t.publisher," at ",o()(t.date).format("LLL")]})]})]}),(0,p.jsx)("div",{className:"container mx-auto my-5 md:px-5",id:"markdown",children:t.description&&(0,p.jsx)(g,{children:t.description})}),(0,p.jsx)("div",{className:"container mx-auto my-5 md:px-5",children:(0,p.jsxs)("div",{className:"grid-rows-2",children:[(0,p.jsx)("div",{className:"my-5",children:(0,p.jsx)(u.Z.Title,{level:2,className:"inline mr-5",children:t.stepsTitle&&t.stepsTitle})}),t.steps&&t.steps.size>0?(0,p.jsx)(f.ZP,{dataSource:t.steps,itemLayout:"horizontal",renderItem:function(e,t){return(0,p.jsx)(x,{index:t,step:e},"step-".concat(t))}}):(0,p.jsx)(b.Z,{description:"No steps"})]})})]}):(0,p.jsx)(a.Fragment,{})}var x=function(e){var t=e.step,n=e.index;return t?(0,p.jsx)("div",{className:"border rounded border-2 border-gray-300 px-6 py-3 my-3",children:(0,p.jsxs)("div",{className:"grid grid-rows-2",children:[(0,p.jsx)(u.Z.Text,{strong:!0,className:"w-full",children:"".concat(n+1,". ").concat(t.get("step_title"))}),(0,p.jsx)(g,{children:t.get("step_description")})]})}):(0,p.jsx)(a.Fragment,{})},y=n(8419),v=n.n(y),j=function(e){var t=e.entry,n=t.getIn(["data","title"]),i=t.getIn(["data","title_color"]),r=t.getIn(["data","title_shadow"]),l=t.getIn(["data","header_background"]),a=t.getIn(["data","header_b_opacity"]),s=t.getIn(["data","header_colors"]),o=t.getIn(["data","description"]),d=t.getIn(["data","short_description"]),c=t.getIn(["data","publisher"]),u=t.getIn(["data","date"]),m=t.getIn(["data","steps_title"]),h=t.getIn(["data","steps"]);return(0,p.jsx)(v(),{stylesheet:'\n        body{\n          font-family: "Raleway", sans-serif !important;\n        }      \n      ',children:(0,p.jsx)(w,{post:{title:n,titleColor:i,titleShadow:r,headerBackground:l,headerOpacity:a,headerColors:s,description:o,shortDescription:d,publisher:c,date:u,stepsTitle:m,steps:h}})})},_=n(1382),k=n(8216),Z=n(5997),O=n(4695),N=n(3444),P=n(268),R=n(2953),C=n(5369),H=n(1577),T=n(9166),S=n(5373),D=n(1728),q=n(8092);function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,R.Z)(e);if(t){var r=(0,R.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,P.Z)(this,n)}}var V=function(e){(0,N.Z)(n,e);var t=I(n);function n(){return(0,k.Z)(this,n),t.apply(this,arguments)}return(0,Z.Z)(n,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){var e=this;return this.props.items&&0!=this.props.items.size?(0,p.jsx)(D.Z,{children:function(t){var n=t.height,i=t.width;return(0,p.jsx)(q.S_,{height:n,itemCount:e.props.items.size,itemSize:e.props.itemHeightProvider,ref:e.props.listRef,width:i,children:e.props.row})}}):(0,p.jsx)(b.Z,{})}}]),n}(a.Component);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,R.Z)(e);if(t){var r=(0,R.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,P.Z)(this,n)}}var z=function(e){return function(t){(0,N.Z)(i,t);var n=A(i);function i(e){var t;return(0,k.Z)(this,i),t=n.call(this,e),(0,d.Z)((0,O.Z)(t),"listRef",void 0),(0,d.Z)((0,O.Z)(t),"rowHeights",void 0),(0,d.Z)((0,O.Z)(t),"state",void 0),t.listRef=(0,a.createRef)(),t.rowHeights=(0,a.createRef)(),t.rowHeights.current={},t.getRowHeight=t.getRowHeight.bind((0,O.Z)(t)),t.setRowHeight=t.setRowHeight.bind((0,O.Z)(t)),t.Row=t.Row.bind((0,O.Z)(t)),t.addValue=t.addValue.bind((0,O.Z)(t)),t.getValueAt=t.getValueAt.bind((0,O.Z)(t)),t.state={editorVisible:!1},t.props.value||t.props.onChange((0,C.aV)()),t}return(0,Z.Z)(i,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"getRowHeight",value:function(e){return this.rowHeights.current&&this.rowHeights.current[e]+16||82}},{key:"setRowHeight",value:function(e,t){this.rowHeights.current=E(E({},this.rowHeights.current),{},(0,d.Z)({},e,t)),this.listRef.current.resetAfterIndex(0===e?0:e-1)}},{key:"getValueAt",value:function(e){return this.props.value.get(e)||this.props.onChange(this.props.value.push((0,C.D5)())),this.props.value.get(e)}},{key:"addValue",value:function(e,t,n){var i=this.getValueAt(e).set(t,n),r=this.props.value.set(e,i);return this.props.onChange(r),i}},{key:"render",value:function(){var e=this;return(0,p.jsxs)("div",{className:"my-3 w-full",children:[(0,p.jsxs)(H.Z,{type:"primary",shape:"round",className:"w-full",onClick:function(){return e.setState({editorVisible:!0})},children:["Open Blocks",this.props.value&&(0,p.jsx)(T.Z,{count:this.props.value.size})]}),(0,p.jsx)(S.Z,{title:"Editor",visible:this.state.editorVisible,onCancel:function(){return e.setState({editorVisible:!1})},okType:"dashed",onOk:function(){return e.getValueAt(e.props.value.size)},children:(0,p.jsx)("div",{className:"h-60",children:(0,p.jsx)(V,{items:this.props.value,itemHeightProvider:this.getRowHeight,listRef:this.listRef,row:this.Row})})})]})}},{key:"Row",value:function(t){var n=this,i=t.index,r=t.style,l=(0,a.useRef)(),s=(0,a.useState)(this.getValueAt(i)),o=s[0],d=s[1];(0,a.useEffect)((function(){l.current&&n.setRowHeight(i,l.current.clientHeight)}),[l]);var c=e.getWidget("image").control;return(0,p.jsx)("div",{style:r,className:"p-2",children:(0,p.jsxs)("div",{ref:l,className:"rounded-lg shadow-lg bg-white p-2",children:[(0,p.jsx)("div",{className:"rounded border-2 border-gray-300 w-full p-1 my-1",children:(0,p.jsx)("input",{name:"name",className:"w-full",value:o.get("name"),onChange:function(e){return d(n.addValue(i,"name",e.target.value))},placeholder:"Name"})}),(0,p.jsx)("textarea",{className:"rounded border-2 border-gray-300 w-full p-1",placeholder:"Description...",onMouseUp:function(){n.getRowHeight(i)-16!==l.current.clientHeight&&n.setRowHeight(i,l.current.clientHeight)},value:o.get("description"),onChange:function(e){d(n.addValue(i,"description",e.target.value))}}),(0,p.jsx)(c,E(E({},this.props),{},{value:o.get("image"),onChange:function(e){d(n.addValue(i,"image",e)),n.setRowHeight(i,l.current.clientHeight+150)}}))]})})}}]),i}(a.Component)},L=(0,i.default)((function(){return Promise.all([n.e(263),n.e(764)]).then(n.t.bind(n,7490,23)).then((function(e){e.init({config:l}),e.registerPreviewStyle("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"),e.registerPreviewStyle("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500;700&display=swap"),e.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"),e.registerPreviewTemplate("posts",j),e.registerWidget("extension-list",z(e))}))}),{ssr:!1,loading:function(){return(0,p.jsxs)("div",{className:"mt-5 block text-center h-screen w-full flex flex-col justify-center items-center",children:[(0,p.jsx)(u.Z.Text,{className:"font-weight-bold block mb-2 text-xl",children:"Going to admin panel..."}),(0,p.jsx)(_.Z,{spinning:!0,size:"large"})]})},loadableGenerated:{webpack:function(){return[7490]},modules:["admin.tsx -> netlify-cms-app"]}});var M=function(){return(0,p.jsx)(L,{})};L.displayName="CMSComponent",M.displayName="AdminPage";var U=M},2347:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(3620)}])}},function(e){e.O(0,[774,885,772,33,888,179],(function(){return t=2347,e(e.s=t);var t}));var t=e.O();_N_E=t}]);