(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[577],{8210:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>P});var a=s(3673),l=s(2323);const n=(0,a.Uk)(" Awesome Chat App "),r={class:"tab_profile--icon"},o=["src"],i=(0,a.Uk)("Trang cá nhân"),u=(0,a.Uk)("Đăng xuất"),m=(0,a.Uk)(" Cuộc trò chuyện "),d=(0,a.Uk)(" Danh sách người dùng ");function j(e,t,s,j,c,g){const p=(0,a.up)("q-btn"),f=(0,a.up)("q-toolbar-title"),w=(0,a.up)("q-item-section"),h=(0,a.up)("q-item"),v=(0,a.up)("q-list"),k=(0,a.up)("q-menu"),b=(0,a.up)("q-avatar"),_=(0,a.up)("q-toolbar"),y=(0,a.up)("q-header"),z=(0,a.up)("q-item-label"),W=(0,a.up)("ListMessage"),Z=(0,a.up)("q-drawer"),q=(0,a.up)("router-view"),Q=(0,a.up)("q-page-container"),C=(0,a.up)("FriendList"),R=(0,a.up)("q-layout"),S=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(R,{view:"lhh LpR lff"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{elevated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>{var t;return[(0,a.Wm)(p,{flat:"",dense:"",round:"",icon:e.leftDrawerOpen?"unsubscribe":"mark_as_unread","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["icon","onClick"]),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[n])),_:1}),(0,a.Wm)(p,{flat:"",dense:"",round:"",icon:"help_outline",onClick:e.toggleRightDrawer},null,8,["onClick"]),(0,a._)("div",r,(0,l.zw)(null===(t=e.user)||void 0===t?void 0:t.name),1),(0,a.Wm)(b,{class:"tab_profile--icon"},{default:(0,a.w5)((()=>{var t;return[(0,a._)("img",{src:null===(t=e.user)||void 0===t?void 0:t.avatar},null,8,o),(0,a.Wm)(k,{anchor:"bottom right",self:"bottom left"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{class:"min-width-200"},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(h,{clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[i])),_:1})])),_:1})),[[S]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(h,{clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{onClick:e.logout},{default:(0,a.w5)((()=>[u])),_:1},8,["onClick"])])),_:1})),[[S]])])),_:1})])),_:1})]})),_:1})]})),_:1})])),_:1}),(0,a.Wm)(Z,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(z,{header:""},{default:(0,a.w5)((()=>[m])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.listRoom,(e=>((0,a.wg)(),(0,a.j4)(W,(0,a.dG)({key:e.name},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q)])),_:1}),(0,a.Wm)(Z,{side:"right",modelValue:e.drawerRight,"onUpdate:modelValue":t[1]||(t[1]=t=>e.drawerRight=t),bordered:"",onClick:e.toggleRightDrawer,class:"bg-grey-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(z,{header:""},{default:(0,a.w5)((()=>[d])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.listUser,(e=>((0,a.wg)(),(0,a.j4)(C,(0,a.dG)({key:e.name},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue","onClick"])])),_:1})}var c=s(1959);const g=["src"];function p(e,t,s,n,r,o){const i=(0,a.up)("q-avatar"),u=(0,a.up)("q-item-section"),m=(0,a.up)("q-item-label"),d=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(d,{class:"chat__item-friend",clickable:"",onClick:e.openRoom},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.avatar},null,8,g)])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"message-inline"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.name),1)])),_:1}),(0,a.Wm)(m,{caption:"",class:"message-inline"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.lastMessage),1)])),_:1})])),_:1}),(0,a.Wm)(u,{class:"text-right fit-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"chat-item__time"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.stamp),1)])),_:1})])),_:1})])),_:1},8,["onClick"])}var f=s(3617);const w=(0,a.aZ)({name:"ListMessage",props:{idRoom:{type:String},name:{type:String,default:"Thanhnt"},lastMessage:{type:String,default:"hello ban"},avatar:{type:String,default:"https://cdn.quasar.dev/img/avatar3.jpg"},stamp:{type:String,default:""}},setup(e){const t=(0,f.oR)(),s=()=>{t.dispatch("changeRoom",e.idRoom),localStorage.setItem("roomId",e.idRoom)};return{openRoom:s}}});var h=s(4260),v=s(3414),k=s(2035),b=s(5096),_=s(2350),y=s(7518),z=s.n(y);const W=(0,h.Z)(w,[["render",p]]),Z=W;z()(w,"components",{QItem:v.Z,QItemSection:k.Z,QAvatar:b.Z,QItemLabel:_.Z});const q=["src"];function Q(e,t,s,n,r,o){const i=(0,a.up)("q-avatar"),u=(0,a.up)("q-item-section"),m=(0,a.up)("q-item-label"),d=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(d,{class:"chat__item-friend",clickable:"",onClick:e.createRoom},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.avatar},null,8,q)])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"text-weight-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.name),1)])),_:1})])),_:1})])),_:1},8,["onClick"])}var C=s(8825);const R=(0,a.aZ)({name:"FriendList",props:{uid:{type:String},name:{type:String,default:"Thanhnt"},avatar:{type:String,default:"https://cdn.quasar.dev/img/avatar3.jpg"}},setup(){const e=(0,C.Z)(),t=JSON.parse(localStorage.getItem("user")||"{}"),s=async()=>{const{id:s}=t,a=await api.post("/chat/create-room",{uid:s,listUser:[uid]}),{roomId:l}=a;l?localStorage.setItem("roomId",l):e.notify({color:"red-4",textColor:"white",icon:"cloud_done",message:"Login failed"})};return{createRoom:s}}}),S=(0,h.Z)(R,[["render",Q]]),I=S;z()(R,"components",{QItem:v.Z,QItemSection:k.Z,QAvatar:b.Z,QItemLabel:_.Z});var L=s(9582),D=s(1488),U=s.n(D),M=s(5474);U().fn.fromNow=function(e){var t=U()().diff(this,"day")+" ngày trước";return U()().diff(this,"day")+0<1&&(t=U()().diff(this,"hours")+" giờ trước"),t};const O=(0,a.aZ)({name:"ChatLayout",components:{ListMessage:Z,FriendList:I},setup(){const e=(0,c.iH)(!1),t=(0,c.iH)(!0),s=JSON.parse(localStorage.getItem("user")||"{}"),l=(0,c.iH)([]),n=(0,c.iH)([]),r=(0,L.tv)(),o=()=>{r.push({path:"login"}),localStorage.clear()};return(0,a.wF)((async()=>{var e;const{id:t,email:a,name:r,avatar:i}=s;t&&a&&r&&i||o();const{data:u}=await M.api.get("/users");l.value=u;let m=await M.api.get(`/list-room/${t}`);n.value=null===(e=m.data)||void 0===e?void 0:e.map((e=>({idRoom:null===e||void 0===e?void 0:e.roomId,name:(null===e||void 0===e?void 0:e.name)||"",avatar:(null===e||void 0===e?void 0:e.avatar)||"",lastMessage:(null===e||void 0===e?void 0:e.lastMessage)||"",stamp:U()((null===e||void 0===e?void 0:e.lastActive)||new Date).fromNow().toString()})))})),{listRoom:n,listUser:l,leftDrawerOpen:e,drawerRight:t,user:s,logout:o,toggleLeftDrawer(){e.value=!e.value},toggleRightDrawer(){t.value=!t.value}}}});var x=s(3066),H=s(3812),T=s(9570),A=s(522),N=s(3747),V=s(3943),F=s(7011),E=s(4398),G=s(2652),J=s(677);const K=(0,h.Z)(O,[["render",j]]),P=K;z()(O,"components",{QLayout:x.Z,QHeader:H.Z,QToolbar:T.Z,QBtn:A.Z,QToolbarTitle:N.Z,QAvatar:b.Z,QMenu:V.Z,QList:F.Z,QItem:v.Z,QItemSection:k.Z,QDrawer:E.Z,QItemLabel:_.Z,QPageContainer:G.Z}),z()(O,"directives",{ClosePopup:J.Z})},6700:(e,t,s)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":8393,"./cs.js":8393,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":1515,"./zh-mo.js":1515,"./zh-tw":4746,"./zh-tw.js":4746};function l(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=n,e.exports=l,l.id=6700}}]);