(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1256fe4c"],{"159b":function(t,a,r){var s=r("da84"),e=r("fdbc"),i=r("17c2"),n=r("9112");for(var o in e){var c=s[o],l=c&&c.prototype;if(l&&l.forEach!==i)try{n(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,a,r){"use strict";var s=r("b727").forEach,e=r("a640"),i=e("forEach");t.exports=i?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"1a01":function(t,a,r){"use strict";var s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"app-page-title"},[r("div",{staticClass:"page-title-wrapper"},[r("div",{staticClass:"page-title-heading"},[r("div",{staticClass:"page-title-icon"},[r("i",{class:t.icon})]),r("div",[t._v(" "+t._s(t.heading)+" "),r("div",{staticClass:"page-title-subheading"},[t._v(" "+t._s(t.subheading)+" ")])])]),r("div",{staticClass:"page-title-actions"},[r("button",{staticClass:"btn-shadow mr-3 btn btn-dark",attrs:{type:"button"}},[r("font-awesome-icon",{attrs:{icon:"star"}})],1),r("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[r("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v(" Create New ")],1)])])])},e=[],i=r("ecee"),n=r("c074"),o=r("ad3d");i["c"].add(n["J"],n["F"]);var c={components:{"font-awesome-icon":o["a"]},props:{icon:String,heading:String,subheading:String}},l=c,u=r("2877"),v=Object(u["a"])(l,s,e,!1,null,null,null);a["a"]=v.exports},"65f0":function(t,a,r){var s=r("861d"),e=r("e8b5"),i=r("b622"),n=i("species");t.exports=function(t,a){var r;return e(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!e(r.prototype)?s(r)&&(r=r[n],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===a?0:a)}},"9c6f":function(t,a,r){"use strict";r.r(a);var s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("b-card",{staticClass:"mb-3",attrs:{title:"Basic"}},[r("b-progress",{attrs:{value:t.counter,max:t.max,"show-progress":"",animated:""}}),r("b-progress",{staticClass:"mt-1",attrs:{max:t.max,"show-value":""}},[r("b-progress-bar",{attrs:{value:.6*t.counter,variant:"success"}}),r("b-progress-bar",{attrs:{value:.25*t.counter,variant:"warning"}}),r("b-progress-bar",{attrs:{value:.15*t.counter,variant:"danger"}})],1),r("b-btn",{staticClass:"mt-4",on:{click:t.clicked}},[t._v("Click me")])],1),r("b-card",{staticClass:"mb-3",attrs:{title:"Colors"}},t._l(t.bars,(function(a){return r("div",{key:a.variant,staticClass:"row mb-1"},[r("div",{staticClass:"col-sm-2"},[t._v(t._s(a.variant)+":")]),r("div",{staticClass:"col-sm-10 pt-1"},[r("b-progress",{key:a.variant,attrs:{value:a.value,variant:a.variant}})],1)])})),0)],1),r("b-col",{attrs:{md:"6"}},[r("b-card",{staticClass:"mb-3",attrs:{title:"Sizing"}},[r("b-progress",{staticClass:"mb-3",attrs:{value:t.value,"show-progress":""}}),r("b-progress",{staticClass:"mb-2",attrs:{height:"2rem",value:t.value,"show-progress":""}}),r("b-progress",{staticClass:"mb-2",attrs:{height:"20px",value:t.value,"show-progress":""}}),r("b-progress",{attrs:{height:"2px",value:t.value}})],1),r("b-card",{staticClass:"mb-3",attrs:{title:"Striped"}},[r("b-progress",{staticClass:"mb-2",attrs:{value:25,variant:"success",striped:t.striped}}),r("b-progress",{staticClass:"mb-2",attrs:{value:50,variant:"info",striped:t.striped}}),r("b-progress",{staticClass:"mb-2",attrs:{value:75,variant:"warning",striped:t.striped}}),r("b-progress",{staticClass:"mb-2",attrs:{value:100,variant:"danger",striped:t.striped}}),r("b-button",{attrs:{variant:"secondary"},on:{click:function(a){t.striped=!t.striped}}},[t._v(" "+t._s(t.striped?"Remove":"Add")+" Striped ")])],1)],1)],1)],1)},e=[],i=(r("159b"),r("1a01")),n={components:{PageTitle:i["a"]},data:function(){return{heading:"Progress Bar",subheading:"You can use the progress bars on their own or in combination with other widgets.",icon:"pe-7s-filter icon-gradient bg-grow-early",counter:45,max:100,bars:[{variant:"success",value:75},{variant:"info",value:75},{variant:"warning",value:75},{variant:"danger",value:75},{variant:"primary",value:75},{variant:"secondary",value:75},{variant:"dark",value:75},{variant:"alternate",value:75},{variant:"focus",value:75}],timer:null,striped:!0,value:75}},mounted:function(){var t=this;this.timer=setInterval((function(){t.bars.forEach((function(t){return t.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},methods:{clicked:function(){this.counter=Math.random()*this.max,console.log("Change progress to "+Math.round(100*this.counter)/100)}}},o=n,c=r("2877"),l=Object(c["a"])(o,s,e,!1,null,null,null);a["default"]=l.exports},a640:function(t,a,r){"use strict";var s=r("d039");t.exports=function(t,a){var r=[][t];return!!r&&s((function(){r.call(null,a||function(){throw 1},1)}))}},b727:function(t,a,r){var s=r("0366"),e=r("44ad"),i=r("7b0b"),n=r("50c4"),o=r("65f0"),c=[].push,l=function(t){var a=1==t,r=2==t,l=3==t,u=4==t,v=6==t,d=7==t,b=5==t||v;return function(p,f,g,h){for(var m,w,C=i(p),y=e(C),x=s(f,g,3),_=n(y.length),k=0,E=h||o,A=a?E(p,_):r||d?E(p,0):void 0;_>k;k++)if((b||k in y)&&(m=y[k],w=x(m,k,C),t))if(a)A[k]=w;else if(w)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:c.call(A,m)}else switch(t){case 4:return!1;case 7:c.call(A,m)}return v?-1:l||u?u:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},e8b5:function(t,a,r){var s=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}}}]);