(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f4daca7"],{bfad:function(t,a,e){"use strict";e.d(a,"d",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return o})),e.d(a,"f",(function(){return c})),e.d(a,"g",(function(){return s})),e.d(a,"b",(function(){return l})),e.d(a,"e",(function(){return u}));var n=e("b775");function i(t){return Object(n["a"])({url:"/v1/short-link/".concat(t),method:"get"})}function r(t,a){return Object(n["a"])({url:"/v1/short-link/?page=".concat(t,"&pageSize=").concat(a),method:"get"})}function o(t){return Object(n["a"])({url:"/v1/short-link/",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/v1/short-link/".concat(t),method:"delete"})}function s(t,a){return Object(n["a"])({url:"/v1/short-link/".concat(t),method:"patch",data:a})}function l(t,a){return Object(n["a"])({url:"/v1/short-link/".concat(t,"/latest-request-history?size=").concat(a),method:"get"})}function u(t,a,e){return Object(n["a"])({url:"/v1/short-link/".concat(t,"/data?startDate=").concat(a,"&endDate=").concat(e),method:"get"})}},df03:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-main",{staticStyle:{"background-color":"rgb(240, 242, 245)",position:"relative"}},[e("el-page-header",{attrs:{content:t.title},on:{back:t.back}}),t._v(" "),e("el-divider"),t._v(" "),e("h3",{staticStyle:{color:"#555"}},[t._v("点击量/点击人数")]),t._v(" "),e("div",{staticStyle:{width:"100%","background-color":"#fff","padding-top":"15px"}},[e("line-chart",{attrs:{"chart-data":t.chartData.PvUv,height:"300px"}})],1),t._v(" "),e("el-divider"),t._v(" "),e("h3",{staticStyle:{color:"#555"}},[t._v("访问记录")]),t._v(" "),e("el-table",{attrs:{data:t.list,size:"mini"}},[e("el-table-column",{attrs:{prop:"url",label:"目标链接",width:"300"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-link",{attrs:{type:"info",href:a.row.url,target:"_blank"}},[t._v(t._s(a.row.url))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"ip",label:"IP",width:"200"}}),t._v(" "),e("el-table-column",{attrs:{prop:"ua",label:"User Agent"}}),t._v(" "),e("el-table-column",{attrs:{label:"访问时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n        "+t._s(t._f("dateformat")(a.row.time))+"\n      ")]}}])})],1)],1)},i=[],r=(e("ac6a"),e("c1df")),o=e.n(r),c=e("bfad"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},l=[],u=e("313e"),h=e.n(u);e("817d");var d={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=h.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.pv,e=t.uv,n=t.dates;this.chart.setOption({xAxis:{data:n,boundaryGap:!1,axisTick:{show:!1}},grid:{left:50,right:50,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["PV","UV"]},series:[{name:"PV",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:a,animationDuration:2800,animationEasing:"cubicInOut"},{name:"UV",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:e,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},f=d,p=e("2877"),v=Object(p["a"])(f,s,l,!1,null,null,null),m=v.exports,b={name:"ShortLinkData",components:{LineChart:m},data:function(){return{title:"",list:[],chartData:{PvUv:{pv:[],uv:[],dates:[]}},startDate:null,endDate:null}},created:function(){var t=7,a=o()();this.startDate=a.clone().add(-(t-1),"d"),this.endDate=a.clone(),this.preparePvUvDates(this.startDate.clone());var e=this.$route.params.id;this.title='"'.concat(e,'" 近7日的数据'),this.getRequestHistoriesByDateRange(e,this.startDate.format("YYYY-MM-DD"),this.endDate.format("YYYY-MM-DD"))},methods:{preparePvUvDates:function(t){while(t.isSameOrBefore(this.endDate))this.chartData.PvUv.dates.push(t.format("YYYY-MM-DD")),t.add(1,"d")},calcPvUvDate:function(t){var a=this,e={};this.chartData.PvUv.dates.forEach((function(t){e[t]={pv:0,ips:[]}})),t.forEach((function(t,a){var n=o()(t.time).format("YYYY-MM-DD");e[n].pv+=1,-1===e[n].ips.indexOf(t.ip)&&e[n].ips.push(t.ip)})),this.chartData.PvUv.dates.forEach((function(t){a.chartData.PvUv.pv.push(e[t].pv),a.chartData.PvUv.uv.push(e[t].ips.length)}))},getRequestHistoriesByDateRange:function(t,a,e){var n=this;Object(c["e"])(t,a,e).then((function(t){n.list=t.data.histories,n.calcPvUvDate(t.data.histories)}))},back:function(){this.$router.go(-1)}}},D=b,g=Object(p["a"])(D,n,i,!1,null,"11d46891",null);a["default"]=g.exports}}]);