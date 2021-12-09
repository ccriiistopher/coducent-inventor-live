(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{6918:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return W}});var n=i(5152),r={site_url:"https://www.tedusoft.com",display_url:"https://www.tedusoft.com",backend:{name:"github",repo:"ccriiistopher/tedusoft-src",branch:"main",base_url:"https://auth.tedusoft.com",auth_endpoint:"auth"},media_folder:"public/img",public_folder:"img",collections:[{name:"posts",label:"Posts",folder:"content/posts/",extension:"json",create:!0,slug:"{{title}}",path:"{{extension_path}}/{{year}}-{{month}}-{{day}}/{{slug}}",preview_path:"labs/{{extension_path}}/{{title}}",sortable_fields:["extension_path","title","date","commit_date"],summary:"[{{extension_path | upper}}] {{title}} added on {{date | date('DD-MM-YYYY')}}",label_singular:"Post",view_groups:[{label:"Path",field:"extension_path"}],fields:[{label:"Title",name:"title",widget:"string"},{label:"Extension Path",name:"extension_path",widget:"relation",collection:"extensions",value_field:"path",search_fields:["extension_name"]},{label:"Title Color",name:"title_color",widget:"color",default:"#212121",required:!1},{label:"Title shadow color",name:"title_shadow",widget:"color",required:!1},{label:"Header Background",name:"header_background",widget:"image",required:!1},{label:"Header Background opacity",name:"header_b_opacity",widget:"string",default:"1.0",required:!1},{label:"Header Colors",name:"header_colors",widget:"list",field:{label:"Color",name:"gradient_color",widget:"color"},required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Short Description",name:"short_description",widget:"text",required:!1},{label:"Publisher",name:"publisher",widget:"string",default:"admin"},{label:"Date",name:"date",widget:"datetime"},{label:"Steps title",name:"steps_title",widget:"string",default:"Steps"},{label:"Steps",name:"steps",widget:"list",collapsed:!0,fields:[{label:"Title",name:"step_title",widget:"string"},{label:"Description",name:"step_description",widget:"markdown"},{label:"Images",name:"step_images",widget:"list",field:{label:"New Image",name:"step_image",widget:"image"}}]}]},{name:"extensions",label:"Extensions",folder:"content/extensions",extension:"json",create:!0,identifier_field:"path",editor:{preview:!0},fields:[{label:"Name",name:"name",widget:"string",required:!0},{label:"Path",name:"path",widget:"string",comment:"Used to name the file, must not contain any space.",pattern:["[a-zA-Z0-9-]+$","Must contain only word digits and none space."]},{label:"Creation Date",name:"date",widget:"datetime"},{label:"Short Description",name:"short_description",widget:"text"},{label:"Group",name:"group",widget:"relation",collection:"groups",value_field:"path",search_fields:["title"],display_fields:["title"],required:!1},{label:"Platforms",name:"platforms",widget:"relation",multiple:!0,collection:"editor_general",display_fields:["platform_list.*.name"],value_field:"platform_list.*.name",search_fields:["platform_list.*"],required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Event Blocks",name:"events",widget:"extension-list",meta:void 0,required:!1,index_file:void 0},{label:"Method Blocks",name:"methods",widget:"extension-list",meta:void 0,required:!1,index_file:void 0},{label:"Property Blocks",name:"properties",widget:"extension-list",meta:void 0,required:!1,index_file:void 0}]},{label:"Editor General",name:"editor_general",files:[{file:"content/platforms.json",name:"platforms",label:"Platforms",fields:[{name:"platform_list",widget:"list",fields:[{name:"name",label:"Name",widget:"string"},{name:"url",label:"URL",widget:"string",required:!1,default:"https://"},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"}]}]},{file:"content/banners.json",name:"banners",label:"Banners",fields:[{name:"list",widget:"list",label:"List",fields:[{name:"banner_title",widget:"string",label:"Title"},{name:"banner_body",label:"Body",widget:"markdown"},{name:"image",label:"Image",widget:"image"},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"}]}]}]},{label:"Groups",name:"groups",folder:"content/groups",extension:"json",create:!0,identifier_field:"path",fields:[{name:"title",label:"Title",widget:"string",required:!0},{name:"path",label:"Path",widget:"string",required:!0},{name:"description",label:"Description",widget:"markdown",required:!0},{name:"media",label:"Media",widget:"list",field:{name:"file",label:"File",widget:"file"},required:!1},{name:"price",label:"Price",widget:"number",required:!1},{name:"paypal_link",label:"Paypal Link",widget:"string",required:!1},{label:"Parent",name:"parent",widget:"relation",collection:"groups",value_field:"path",search_fields:["title"],display_fields:["title"],required:!1}]}]},l=i(5968),a=i(1382),s=i(8216),o=i(5997),d=i(4695),c=i(3444),u=i(268),p=i(2953),h=i(2809),m=i(7294),f=i(5369),g=i(1577),x=i(9166),b=i(7764),w=i(1230),v=i(5746),y=i(5019),j=i(8086),Z=i(9650),_=i(2867),V=i(4277),k=i(1728),N=i(173),R=i(5893);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=(0,p.Z)(e);if(t){var r=(0,p.Z)(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return(0,u.Z)(this,i)}}var P=function(e){(0,c.Z)(i,e);var t=C(i);function i(){return(0,s.Z)(this,i),t.apply(this,arguments)}return(0,o.Z)(i,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){var e=this;return this.props.items&&0!=this.props.items.size?(0,R.jsx)(k.Z,{children:function(t){var i=t.height,n=t.width;return(0,R.jsx)(N.S_,{height:i,itemCount:e.props.items.size,itemSize:e.props.itemHeightProvider,ref:e.props.listRef,width:n,children:e.props.row})}}):(0,R.jsx)(V.Z,{})}}]),i}(m.Component),E=i(1977),I=i(3171),D=i(8212),S=i(2104);function O(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function q(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?O(Object(i),!0).forEach((function(t){(0,h.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=(0,p.Z)(e);if(t){var r=(0,p.Z)(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return(0,u.Z)(this,i)}}var T=function(e){return function(t){(0,c.Z)(n,t);var i=H(n);function n(t){var r;return(0,s.Z)(this,n),r=i.call(this,t),(0,h.Z)((0,d.Z)(r),"MDEditor",void 0),(0,h.Z)((0,d.Z)(r),"listRef",void 0),(0,h.Z)((0,d.Z)(r),"rowHeights",void 0),(0,h.Z)((0,d.Z)(r),"valuesFormRef",void 0),(0,h.Z)((0,d.Z)(r),"editorIndex",void 0),(0,h.Z)((0,d.Z)(r),"state",void 0),r.listRef=(0,m.createRef)(),r.rowHeights=(0,m.createRef)(),r.valuesFormRef=(0,m.createRef)(),r.editorIndex=-1,r.rowHeights.current={},r.getRowHeight=r.getRowHeight.bind((0,d.Z)(r)),r.setRowHeight=r.setRowHeight.bind((0,d.Z)(r)),r.toggleEditor=r.toggleEditor.bind((0,d.Z)(r)),r.toggleMdEditor=r.toggleMdEditor.bind((0,d.Z)(r)),r.addValue=r.addValue.bind((0,d.Z)(r)),r.removeValue=r.removeValue.bind((0,d.Z)(r)),r.getValueAt=r.getValueAt.bind((0,d.Z)(r)),r.Row=r.Row.bind((0,d.Z)(r)),r.state={editorVisible:!1,mdEditorVisible:!1},r.MDEditor=e.getWidget("markdown").control,r.props.value||r.props.onChange((0,f.aV)()),r}return(0,o.Z)(n,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"getRowHeight",value:function(e){return(this.rowHeights.current&&this.rowHeights.current[e])+16||82}},{key:"setRowHeight",value:function(e,t){this.rowHeights.current=q(q({},this.rowHeights.current),{},(0,h.Z)({},e,t)),this.listRef.current.resetAfterIndex(0===e?0:e-1)}},{key:"getValueAt",value:function(e){return this.props.value.get(e)||this.props.onChange(this.props.value.push((0,f.D5)())),this.props.value.get(e)}},{key:"addValue",value:function(e,t,i){var n=this.getValueAt(e).set(t,i),r=this.props.value.set(e,n);return this.props.onChange(r),n}},{key:"removeValue",value:function(e,t){if(t){var i=this.getValueAt(e).delete(t),n=this.props.value.set(e,i);return this.props.onChange(n),i}var r=this.props.value.delete(e);this.props.onChange(r)}},{key:"toggleMdEditor",value:function(){this.setState({mdEditorVisible:!this.state.mdEditorVisible})}},{key:"toggleEditor",value:function(){this.setState({editorVisible:!this.state.editorVisible})}},{key:"render",value:function(){var e=this;return(0,R.jsxs)("div",{className:"my-3 w-full",children:[(0,R.jsxs)(g.Z,{type:"primary",shape:"round",className:"w-full",onClick:this.toggleEditor,children:["Open Editor",this.props.value&&(0,R.jsx)(x.Z,{count:this.props.value.size})]}),(0,R.jsx)(b.Z,{title:"Editor",bodyStyle:{height:"calc(100vh - 110px)"},style:{height:"100vh",minWidth:"100vw",margin:0,top:0,left:0},visible:this.state.editorVisible,onCancel:this.toggleEditor,footer:(0,R.jsxs)(w.Z,{gutter:[16,16],children:[(0,R.jsx)(v.Z,{span:4,offset:12,children:(0,R.jsx)(g.Z,{onClick:function(){return e.getValueAt(e.props.value.size)},type:"primary",icon:(0,R.jsx)(E.Z,{}),children:"Add New"})}),(0,R.jsx)(v.Z,{span:8,children:(0,R.jsx)(y.Z.Search,{allowClear:!0,placeholder:"Search block...",onSearch:function(t){var i=-1;e.props.value.forEach((function(e,n){e.get("name")&&e.get("name").toLowerCase()===t.toLowerCase()&&(i=n)})),-1!=i?e.listRef.current.scrollToItem(i,"center"):j.ZP.info("Item not found.")}})})]}),children:(0,R.jsx)("div",{className:"h-full",children:(0,R.jsx)(P,{items:this.props.value,itemHeightProvider:this.getRowHeight,listRef:this.listRef,row:this.Row})})}),(0,R.jsx)(b.Z,{bodyStyle:{height:"calc(100vh - 110px)"},style:{height:"100vh",minWidth:"100vw",margin:0,top:0,left:0},title:"Description",visible:this.state.mdEditorVisible,onCancel:this.toggleMdEditor,footer:(0,R.jsx)(g.Z,{onClick:this.toggleMdEditor,children:"Close"}),children:this.props.value&&this.editorIndex>=0&&(0,R.jsxs)(w.Z,{gutter:[0,16],children:[(0,R.jsx)(v.Z,{span:12,children:(0,R.jsx)(this.MDEditor,q(q({},this.props),{},{value:this.getValueAt(this.editorIndex).get("description"),onChange:function(t){return e.addValue(e.editorIndex,"description",t)}}))}),(0,R.jsx)(v.Z,{span:12,children:(0,R.jsxs)(Z.Z,{direction:"vertical",className:"px-3",children:[(0,R.jsx)(l.Z.Title,{level:5,children:"Values"}),(0,R.jsxs)(_.Z,{layout:"inline",ref:this.valuesFormRef,onFinish:function(t){var i=e.getValueAt(e.editorIndex).get("params")||(0,f.aV)(),n=(0,f.D5)();t.name&&(n=n.set("name",t.name)),t.types&&(n=n.set("type",t.type)),t.default&&(n=n.set("default",t.default)),i=i.push(n),e.addValue(e.editorIndex,"params",i),e.valuesFormRef.current.resetFields()},children:[(0,R.jsx)(_.Z.Item,{name:"name",rules:[{required:!0}],className:"pt-3",children:(0,R.jsx)(y.Z,{placeholder:"Name"})}),(0,R.jsx)(_.Z.Item,{name:"type",children:(0,R.jsx)(y.Z,{placeholder:"Type(s)"})}),(0,R.jsx)(_.Z.Item,{name:"default",children:(0,R.jsx)(y.Z,{placeholder:"Default Value"})}),(0,R.jsx)(_.Z.Item,{children:(0,R.jsx)(g.Z,{icon:(0,R.jsx)(E.Z,{}),type:"primary",htmlType:"submit",className:"w-full",shape:"round",children:"Add"})})]}),this.getValueAt(this.editorIndex).get("params")&&(0,R.jsx)("div",{className:"max-h-96 overflow-y-scroll",children:(0,R.jsxs)("table",{className:"table-auto rounded overflow-hidden shadow",children:[(0,R.jsx)("thead",{children:(0,R.jsxs)("tr",{className:"text-white bg-blue-400",children:[(0,R.jsx)("th",{className:"p-2",children:"Name"}),(0,R.jsx)("th",{className:"p-2",children:"Types"}),(0,R.jsx)("th",{className:"p-2",children:"Default Value"}),(0,R.jsx)("th",{className:"p-2"})]})}),(0,R.jsx)("tbody",{children:this.getValueAt(this.editorIndex).get("params").map((function(t,i){return(0,R.jsxs)("tr",{className:"divide-x divide-gray-100",children:[(0,R.jsx)("td",{className:"p-2",children:t.get("name")}),(0,R.jsx)("td",{className:"p-2",children:t.get("type","Not defined.")}),(0,R.jsx)("td",{className:"p-2",children:t.get("default","Not defined.")}),(0,R.jsx)("td",{className:"p-2",onClick:function(){var t=e.getValueAt(e.editorIndex).get("params");1===t.size?e.removeValue(e.editorIndex,"params"):(t=t.remove(i),e.addValue(e.editorIndex,"params",t))},children:(0,R.jsx)(I.Z,{})})]},"row-".concat(i))}))})]})})]})})]})})]})}},{key:"Row",value:function(e){var t=this,i=e.index,n=e.style,r=(0,m.useRef)(),l=(0,m.useState)(this.getValueAt(i)),a=l[0],s=l[1];return(0,m.useEffect)((function(){r.current&&t.setRowHeight(i,r.current.clientHeight)}),[r]),(0,R.jsx)("div",{style:n,children:(0,R.jsxs)("div",{ref:r,className:"rounded border-2 border-gray-200 px-6 py-3",children:[(0,R.jsxs)(w.Z,{align:"middle",className:"text-gray-800 cursor-pointer",children:[(0,R.jsx)(v.Z,{span:18,children:(0,R.jsxs)(Z.Z,{direction:"horizontal",children:[(0,R.jsx)("span",{className:"text-gray-900 rounded bg-gray-200 p-2",children:i+1}),(0,R.jsx)("span",{className:"font-bold text-xl",children:a.get("name")})]})}),(0,R.jsx)(v.Z,{span:4,children:(0,R.jsxs)(Z.Z,{direction:"horizontal",children:[(0,R.jsx)(g.Z,{onClick:function(){t.editorIndex=i,t.toggleMdEditor()},icon:(0,R.jsx)(D.Z,{}),children:"View Description"}),(0,R.jsx)(g.Z,{icon:(0,R.jsx)(I.Z,{}),onClick:function(){t.removeValue(i)}})]})})]}),(0,R.jsx)(Z.Z,{direction:"vertical",className:"py-2",children:(0,R.jsxs)(_.Z,{layout:"inline",initialValues:{name:a.get("name"),defValue:a.get("defValue")},onFinish:function(e){e.name&&s(t.addValue(i,"name",e.name)),e.defValue&&s(t.addValue(i,"defValue",e.defValue))},children:[(0,R.jsx)(_.Z.Item,{name:"name",children:(0,R.jsx)(y.Z,{placeholder:"Name"})}),(0,R.jsx)(_.Z.Item,{name:"defValue",children:(0,R.jsx)(y.Z,{placeholder:"Default Value"})}),(0,R.jsx)(_.Z.Item,{children:(0,R.jsx)(g.Z,{icon:(0,R.jsx)(S.Z,{}),type:"primary",htmlType:"submit"})})]})})]})})}}]),n}(m.Component)},A=i(8419),M=i.n(A),B=i(9627),z=i(381),F=i.n(z);var L=function(e){var t,i=e.entry,n={name:(t=i.toJS().data).name||null,path:t.path||null,description:t.description||null,date:F()(t.date).format("LLL"),platforms:t.platforms||[],events:t.events||[],methods:t.methods||[],properties:t.properties||[],shortDescription:t.short_description||"",group:t.group||null};return(0,R.jsx)(M(),{stylesheet:'\n        body{\n          font-family: "Raleway", sans-serif !important;\n        }      \n      ',children:(0,R.jsx)(B.default,{extension:n})})},G=(0,n.default)((function(){return Promise.all([i.e(263),i.e(764)]).then(i.t.bind(i,7490,23)).then((function(e){e.registerPreviewStyle("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"),e.registerPreviewStyle("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500;700&display=swap"),e.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"),e.registerWidget("extension-list",T(e)),e.registerPreviewTemplate("extensions",L),e.init({config:r})}))}),{ssr:!1,loading:function(){return(0,R.jsxs)("div",{className:"mt-5 block text-center h-screen w-full flex flex-col justify-center items-center",children:[(0,R.jsx)(l.Z.Text,{className:"font-weight-bold block mb-2 text-xl",children:"Going to admin panel..."}),(0,R.jsx)(a.Z,{spinning:!0,size:"large"})]})},loadableGenerated:{webpack:function(){return[7490]},modules:["admin.tsx -> netlify-cms-app"]}});var U=function(){return(0,R.jsx)(G,{})};G.displayName="CMSComponent",U.displayName="AdminPage";var W=U},2347:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return i(6918)}])}},function(e){e.O(0,[774,885,635,434,231,468,678,627,888,179],(function(){return t=2347,e(e.s=t);var t}));var t=e.O();_N_E=t}]);