(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03cb127c"],{"1a01":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-page-title"},[e("div",{staticClass:"page-title-wrapper"},[e("div",{staticClass:"page-title-heading"},[e("div",{staticClass:"page-title-icon"},[e("i",{class:t.icon})]),e("div",[t._v(" "+t._s(t.heading)+" "),e("div",{staticClass:"page-title-subheading"},[t._v(" "+t._s(t.subheading)+" ")])])]),e("div",{staticClass:"page-title-actions"},[e("button",{staticClass:"btn-shadow mr-3 btn btn-dark",attrs:{type:"button"}},[e("font-awesome-icon",{attrs:{icon:"star"}})],1),e("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v(" Create New ")],1)])])])},o=[],s=e("ecee"),n=e("c074"),r=e("ad3d");s["c"].add(n["J"],n["F"]);var l={components:{"font-awesome-icon":r["a"]},props:{icon:String,heading:String,subheading:String}},c=l,p=e("2877"),d=Object(p["a"])(c,i,o,!1,null,null,null);a["a"]=d.exports},f0c7:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),e("div",{staticClass:"main-card mb-3 card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Tooltips")]),e("div",{staticClass:"text-center"},[e("b-btn",{staticClass:"mr-2",attrs:{id:"exButton1",variant:"primary"}},[t._v(" Tooltip on top ")]),e("b-btn",{staticClass:"mr-2",attrs:{id:"exButton2",variant:"primary"}},[t._v(" Tooltip on right ")]),e("b-btn",{staticClass:"mr-2",attrs:{id:"exButton3",variant:"primary"}},[t._v(" Tooltip on bottom ")]),e("b-btn",{attrs:{id:"exButton4",variant:"primary"}},[t._v(" Tooltip on left ")]),e("b-tooltip",{attrs:{target:"exButton1",placement:"top",title:"Tooltip on top"}}),e("b-tooltip",{attrs:{target:"exButton2",placement:"right",title:"Tooltip on right"}}),e("b-tooltip",{attrs:{target:"exButton3",placement:"bottom",title:"Tooltip on bottom"}}),e("b-tooltip",{attrs:{target:"exButton4",placement:"left",title:"Tooltip on left"}})],1)])]),e("div",{staticClass:"main-card mb-3 card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Popovers")]),e("h5",{staticClass:"my-3"},[t._v("Placement")]),e("b-row",t._l(t.placements,(function(a){return e("b-col",{key:a,staticClass:"py-4 text-center",attrs:{md:"4"}},[e("b-btn",{attrs:{id:"exPopover1-"+a,variant:"primary"}},[t._v(" "+t._s(a)+" ")]),e("b-popover",{attrs:{target:"exPopover1-"+a,placement:a,title:"Popover!",triggers:"hover focus",content:"Placement "+a}})],1)})),1)],1)])],1)},o=[],s=e("1a01"),n={components:{PageTitle:s["a"]},data:function(){return{heading:"Tooltips & Popovers",subheading:"These Vue components are used to add interaction or extra information for your app's content.",icon:"pe-7s-note2 icon-gradient bg-happy-fisher",placements:["topright","top","topleft","bottomright","bottom","bottomleft","righttop","right","lefttop","rightbottom","left","leftbottom"]}}},r=n,l=e("2877"),c=Object(l["a"])(r,i,o,!1,null,null,null);a["default"]=c.exports}}]);