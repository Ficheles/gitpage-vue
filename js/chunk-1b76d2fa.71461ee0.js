(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b76d2fa"],{"1a01":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app-page-title"},[s("div",{staticClass:"page-title-wrapper"},[s("div",{staticClass:"page-title-heading"},[s("div",{staticClass:"page-title-icon"},[s("i",{class:t.icon})]),s("div",[t._v(" "+t._s(t.heading)+" "),s("div",{staticClass:"page-title-subheading"},[t._v(" "+t._s(t.subheading)+" ")])])]),s("div",{staticClass:"page-title-actions"},[s("button",{staticClass:"btn-shadow mr-3 btn btn-dark",attrs:{type:"button"}},[s("font-awesome-icon",{attrs:{icon:"star"}})],1),s("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[s("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v(" Create New ")],1)])])])},r=[],i=s("ecee"),n=s("c074"),o=s("ad3d");i["c"].add(n["J"],n["F"]);var l={components:{"font-awesome-icon":o["a"]},props:{icon:String,heading:String,subheading:String}},c=l,u=s("2877"),d=Object(u["a"])(c,e,r,!1,null,null,null);a["a"]=d.exports},"9c6f":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("b-card",{staticClass:"mb-3",attrs:{title:"Basic"}},[s("b-progress",{attrs:{value:t.counter,max:t.max,"show-progress":"",animated:""}}),s("b-progress",{staticClass:"mt-1",attrs:{max:t.max,"show-value":""}},[s("b-progress-bar",{attrs:{value:.6*t.counter,variant:"success"}}),s("b-progress-bar",{attrs:{value:.25*t.counter,variant:"warning"}}),s("b-progress-bar",{attrs:{value:.15*t.counter,variant:"danger"}})],1),s("b-btn",{staticClass:"mt-4",on:{click:t.clicked}},[t._v("Click me")])],1),s("b-card",{staticClass:"mb-3",attrs:{title:"Colors"}},t._l(t.bars,(function(a){return s("div",{key:a,staticClass:"row mb-1"},[s("div",{staticClass:"col-sm-2"},[t._v(t._s(a.variant)+":")]),s("div",{staticClass:"col-sm-10 pt-1"},[s("b-progress",{key:a.variant,attrs:{value:a.value,variant:a.variant}})],1)])})),0)],1),s("b-col",{attrs:{md:"6"}},[s("b-card",{staticClass:"mb-3",attrs:{title:"Sizing"}},[s("b-progress",{staticClass:"mb-3",attrs:{value:t.value,"show-progress":""}}),s("b-progress",{staticClass:"mb-2",attrs:{height:"2rem",value:t.value,"show-progress":""}}),s("b-progress",{staticClass:"mb-2",attrs:{height:"20px",value:t.value,"show-progress":""}}),s("b-progress",{attrs:{height:"2px",value:t.value}})],1),s("b-card",{staticClass:"mb-3",attrs:{title:"Striped"}},[s("b-progress",{staticClass:"mb-2",attrs:{value:25,variant:"success",striped:t.striped}}),s("b-progress",{staticClass:"mb-2",attrs:{value:50,variant:"info",striped:t.striped}}),s("b-progress",{staticClass:"mb-2",attrs:{value:75,variant:"warning",striped:t.striped}}),s("b-progress",{staticClass:"mb-2",attrs:{value:100,variant:"danger",striped:t.striped}}),s("b-button",{attrs:{variant:"secondary"},on:{click:function(a){t.striped=!t.striped}}},[t._v(" "+t._s(t.striped?"Remove":"Add")+" Striped ")])],1)],1)],1)],1)},r=[],i=(s("ac6a"),s("1a01")),n={components:{PageTitle:i["a"]},data:function(){return{heading:"Progress Bar",subheading:"You can use the progress bars on their own or in combination with other widgets.",icon:"pe-7s-filter icon-gradient bg-grow-early",counter:45,max:100,bars:[{variant:"success",value:75},{variant:"info",value:75},{variant:"warning",value:75},{variant:"danger",value:75},{variant:"primary",value:75},{variant:"secondary",value:75},{variant:"dark",value:75},{variant:"alternate",value:75},{variant:"focus",value:75}],timer:null,striped:!0,value:75}},methods:{clicked:function(){this.counter=Math.random()*this.max}},mounted:function(){var t=this;this.timer=setInterval((function(){t.bars.forEach((function(t){return t.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},o=n,l=s("2877"),c=Object(l["a"])(o,e,r,!1,null,null,null);a["default"]=c.exports},ac6a:function(t,a,s){for(var e=s("cadf"),r=s("0d58"),i=s("2aba"),n=s("7726"),o=s("32e9"),l=s("84f2"),c=s("2b4c"),u=c("iterator"),d=c("toStringTag"),v=l.Array,b={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=r(b),p=0;p<g.length;p++){var m,h=g[p],f=b[h],C=n[h],w=C&&C.prototype;if(w&&(w[u]||o(w,u,v),w[d]||o(w,d,h),l[h]=v,f))for(m in e)w[m]||i(w,m,e[m],!0)}}}]);