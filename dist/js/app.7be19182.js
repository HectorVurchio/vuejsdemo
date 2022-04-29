(function(){"use strict";var e={9674:function(e,t,a){var n=a(9242),o=a(3396);const l=(0,o.Uk)("Home"),s=(0,o.Uk)(" | "),r=(0,o.Uk)("Form"),i=(0,o.Uk)(" | "),d=(0,o.Uk)("Uploads"),c=(0,o.Uk)(" | "),u=(0,o.Uk)("List"),p=(0,o.Uk)(" | "),h=(0,o.Uk)("About");function m(e,t,a,n,m,f){const v=(0,o.up)("FlashMessage"),g=(0,o.up)("router-link"),b=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(v),(0,o._)("nav",null,[(0,o.Wm)(g,{to:"/"},{default:(0,o.w5)((()=>[l])),_:1}),s,(0,o.Wm)(g,{to:{name:"form"}},{default:(0,o.w5)((()=>[r])),_:1}),i,(0,o.Wm)(g,{to:{name:"uploads",params:{id:"uploads"},query:{_limit:2,_page:1}}},{default:(0,o.w5)((()=>[d])),_:1}),c,(0,o.Wm)(g,{to:{name:"list",params:{id:"events"},query:{_limit:2,_page:1}}},{default:(0,o.w5)((()=>[u])),_:1}),p,(0,o.Wm)(g,{to:{name:"about"}},{default:(0,o.w5)((()=>[h])),_:1})]),(0,o.Wm)(b)],64)}var f=a(7139);const v={key:0,id:"yellowMessage"},g={key:1,id:"redMessage"};function b(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[this.$store.state.yellowMessage?((0,o.wg)(),(0,o.iD)("div",v,(0,f.zw)(this.$store.state.yellowMessage),1)):(0,o.kq)("",!0),this.$store.state.redMessage?((0,o.wg)(),(0,o.iD)("div",g,(0,f.zw)(this.$store.state.redMessage),1)):(0,o.kq)("",!0)],64)}var w={name:"FlashMessage"},y=a(89);const _=(0,y.Z)(w,[["render",b],["__scopeId","data-v-c8ea7ade"]]);var k=_,C={components:{FlashMessage:k}};const x=(0,y.Z)(C,[["render",m]]);var Z=x,E=a(678);const D={class:"home"},T=(0,o._)("img",{id:"main",alt:"../assets/logo.png"},null,-1);function S(e,t,a,n,l,s){const r=(0,o.up)("PruebaDos");return(0,o.wg)(),(0,o.iD)("div",D,[T,(0,o.Wm)(r,{msg:"Welcome to My Demo App"})])}const $={class:"prueba-data"};function W(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("h1",null,(0,f.zw)(a.msg),1),(0,o._)("h2",null,(0,f.zw)(l.person.name)+" "+(0,f.zw)(l.person.lastName),1),(0,o._)("h3",null,"FE Developed with "+(0,f.zw)(l.person.frontend),1)])}var B={name:"PruebaDos",props:{msg:String},data(){return{person:{id:13801637,name:"Hector Jose",lastName:"Vurchio Hurtado",frontend:"Vuejs"}}},created(){console.log("Parameters: ",this.$route.params),console.log("Query: ",this.$route.query)}};const M=(0,y.Z)(B,[["render",W]]);var N=M,F={name:"HomeView",components:{PruebaDos:N}};const I=(0,y.Z)(F,[["render",S]]);var O=I;const U=e=>((0,o.dD)("data-v-b40b7184"),e=e(),(0,o.Cn)(),e),H={class:"outer"},j=U((()=>(0,o._)("label",{class:"form-label-1"},"Test Configuration",-1))),R={class:"container"},z={class:"test-conf",id:"test-conf-form"},A={class:"test-input-files"},P=U((()=>(0,o._)("label",{class:"form-label-2"},"Test Configuration",-1)));function q(e,t,a,l,s,r){const i=(0,o.up)("HeadBar"),d=(0,o.up)("RowFirst"),c=(0,o.up)("RowSecond"),u=(0,o.up)("RowThird"),p=(0,o.up)("RowFourth"),h=(0,o.up)("RowSixth"),m=(0,o.up)("SubmitButton");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i,{msg:"Create Test"}),(0,o._)("div",H,[(0,o._)("form",{enctype:"multipart/form-data",onSubmit:t[0]||(t[0]=(0,n.iM)(((...t)=>e.onSubmit&&e.onSubmit(...t)),["prevent"]))},[j,(0,o._)("div",R,[(0,o._)("div",z,[(0,o.Wm)(d),(0,o.Wm)(c),(0,o.Wm)(u),(0,o.Wm)(p)]),(0,o._)("div",A,[P,(0,o.Wm)(h,{label:"TDMD Data File:",fileid:"file1"}),(0,o.Wm)(h,{label:"Config Log File:",fileid:"file2"}),(0,o.Wm)(h,{label:"Start Stroke:",fileid:"file3"})])]),(0,o.Wm)(m)],32)])],64)}const L=e=>((0,o.dD)("data-v-59246872"),e=e(),(0,o.Cn)(),e),V={class:"form-row-1"},Y=L((()=>(0,o._)("div",{class:"hor-col-1"},[(0,o._)("label",null,[(0,o._)("span",null,"Test Name"),(0,o.Uk)("(Prefix / Machine Name / Test)"),(0,o._)("span",null,"*")])],-1))),K={class:"hor-col-2"},J=L((()=>(0,o._)("input",{type:"text",id:"macnam",value:"",placeholder:"Machine Name",maxlength:"20"},null,-1))),G=L((()=>(0,o._)("input",{type:"text",id:"Testnumb",value:"",placeholder:"Test #",maxlength:"10"},null,-1)));function Q(e,t,a,n,l,s){const r=(0,o.up)("BaseSelect");return(0,o.wg)(),(0,o.iD)("div",V,[Y,(0,o._)("div",K,[(0,o.Wm)(r,{id:"prefix",options:l.categories},null,8,["options"]),J,G])])}const X=["value"],ee=["value","selected"];function te(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)("select",(0,o.dG)({value:a.modelValue},{...e.$attrs,onChange:t=>{e.$emit("update:modelValue",t.target.value)}}),[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.options,(e=>((0,o.wg)(),(0,o.iD)("option",{value:e,key:e,selected:e===a.modelValue},(0,f.zw)(e),9,ee)))),128))],16,X)}var ae={name:"BaseSelect",props:{modelValue:{type:[String,Number],default:""},options:{type:Array,required:!0}}};const ne=(0,y.Z)(ae,[["render",te]]);var oe=ne,le={name:"RowFirst",components:{BaseSelect:oe},props:{},data(){return{categories:["LDT","GAS","EMIT","HOU","EDU","COM"]}}};const se=(0,y.Z)(le,[["render",Q],["__scopeId","data-v-59246872"]]);var re=se;const ie={class:"form-row-2"},de={class:"ver-col-1"},ce={class:"ver-col-1"};function ue(e,t,a,n,l,s){const r=(0,o.up)("BaseInput");return(0,o.wg)(),(0,o.iD)("div",ie,[(0,o._)("div",de,[(0,o.Wm)(r,{label:"Start Phase:",type:"text",id:"start-phase",maxlength:"10"})]),(0,o._)("div",ce,[(0,o.Wm)(r,{label:"End Phase:",type:"text",id:"end-phase",maxlength:"10"})])])}const pe=e=>((0,o.dD)("data-v-55e06f58"),e=e(),(0,o.Cn)(),e),he={key:0},me=pe((()=>(0,o._)("span",null,"*",-1))),fe=["value","placeholder"];function ve(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[a.label?((0,o.wg)(),(0,o.iD)("label",he,[(0,o.Uk)((0,f.zw)(a.label),1),me])):(0,o.kq)("",!0),(0,o._)("input",(0,o.dG)(e.$attrs,{value:a.modelValue,placeholder:a.label}),null,16,fe)],64)}var ge={name:"BaseInput",props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""}}};const be=(0,y.Z)(ge,[["render",ve],["__scopeId","data-v-55e06f58"]]);var we=be,ye={name:"RowFirst",components:{BaseInput:we},props:{}};const _e=(0,y.Z)(ye,[["render",ue],["__scopeId","data-v-33a43652"]]);var ke=_e;const Ce={class:"form-row-2"},xe={class:"ver-col-1"},Ze={class:"ver-col-1"};function Ee(e,t,a,n,l,s){const r=(0,o.up)("BaseInput");return(0,o.wg)(),(0,o.iD)("div",Ce,[(0,o._)("div",xe,[(0,o.Wm)(r,{label:"Start Stroke:",type:"text",id:"start-stroke",maxlength:"20"})]),(0,o._)("div",Ze,[(0,o.Wm)(r,{label:"End Stroke:",type:"text",id:"end-stroke",maxlength:"20"})])])}var De={name:"RowThird",components:{BaseInput:we},props:{}};const Te=(0,y.Z)(De,[["render",Ee],["__scopeId","data-v-5ad524c8"]]);var Se=Te;const $e=(0,o.uE)('<div class="form-row-1" data-v-325071a4><div class="hor-col-1" data-v-325071a4><label data-v-325071a4><span data-v-325071a4>Hydrous bioethanol E90W10 LHV:</span><span data-v-325071a4>*</span></label></div><div class="hor-col-2" data-v-325071a4><input type="text" id="hydrous-bioethanol" maxlength="12" data-v-325071a4><label for="hydrous-bioethanol" data-v-325071a4>J/mg</label></div></div><div class="form-row-1" data-v-325071a4><div class="hor-col-1" data-v-325071a4><label data-v-325071a4><span data-v-325071a4>Notes:</span><span data-v-325071a4></span></label></div><div class="hor-col-2" data-v-325071a4><textarea id="notes" maxlength="250" data-v-325071a4></textarea></div></div>',2);function We(e,t,a,n,o,l){return $e}var Be={name:"RowFour",props:{}};const Me=(0,y.Z)(Be,[["render",We],["__scopeId","data-v-325071a4"]]);var Ne=Me,Fe=a(6971);const Ie=e=>((0,o.dD)("data-v-31f009b8"),e=e(),(0,o.Cn)(),e),Oe={class:"form-row-3"},Ue={class:"ver-col-3"},He=["id"],je=Ie((()=>(0,o._)("span",null,"*",-1))),Re=Ie((()=>(0,o._)("img",{class:"butn-img-1",src:Fe},null,-1))),ze=Ie((()=>(0,o._)("a",{href:"#"},"Select File",-1))),Ae=[Re,ze],Pe={class:"file-selected"},qe=["id"],Le=["id"];function Ve(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",Oe,[(0,o._)("div",Ue,[a.label?((0,o.wg)(),(0,o.iD)("label",{key:0,id:`${a.fileid}-l`},[(0,o.Uk)((0,f.zw)(a.label),1),je],8,He)):(0,o.kq)("",!0),(0,o._)("div",{class:"btn-img-1",onClick:t[0]||(t[0]=e=>s.handleClick())},Ae)]),(0,o._)("div",Pe,[(0,o._)("p",{id:`${a.fileid}-p`},"No File Chosen",8,qe)]),(0,o._)("input",{type:"file",class:"uploadfiles",id:a.fileid,accept:".xlsx",onChange:t[1]||(t[1]=(...e)=>s.handleChange&&s.handleChange(...e)),style:{display:"none",width:"1px"}},null,40,Le)])}var Ye={name:"RowSixth",props:{label:{type:String,default:""},fileid:{type:String}},data(){return{fileExt:"xlsx",default_color:"#2c3e50"}},methods:{handleClick(){const e=document.getElementById(this.fileid);e.showPicker()},handleChange(e){const t=e.target,a=t.id,n=`${a}-l`,o=document.getElementById(`${n}`),l=`${a}-p`,s=document.getElementById(`${l}`),r=t.files,i=r[0].name,d=i.split(".").pop();d.toLowerCase()==this.fileExt?(s.textContent=r[0].name,s.style.color=this.default_color,o.style.color=this.default_color):(s.style.color="red",o.style.color="red",alert(`The File Extension must be of type .${this.fileExt}`),t.removeAttribute("type"),t.setAttribute("type","file"))}}};const Ke=(0,y.Z)(Ye,[["render",Ve],["__scopeId","data-v-31f009b8"]]);var Je=Ke;const Ge={class:"headbar"};function Qe(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",Ge,[(0,o._)("h1",null,(0,f.zw)(a.msg),1)])}var Xe={name:"HeadBar",props:{msg:{type:String,default:""}}};const et=(0,y.Z)(Xe,[["render",Qe],["__scopeId","data-v-1520e86a"]]);var tt=et;const at={class:"form-row-4"},nt={class:"hor-col-1"};function ot(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",at,[(0,o._)("div",nt,[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>s.submitFiles&&s.submitFiles(...e)),id:"button",value:"submit"},"Submit")])])}var lt=a(6265),st=a.n(lt);const rt=st().create({baseURL:"https://myexcelphpdata.no-ip.org",withCredentials:!1,headers:{"Content-Type":"multipart/form-data"}});var it={getExcel(e){return rt.get(`/excel-files/${e}`)},getErhalten(e,t){return rt.get(`upload?_limit=${e}&_page=${t}`)},postSendung(e){return rt.post("/excel-files",e)}},dt={chkEmptyElm(e){const t=[],a={},n=[];let o=!0;const l="#deeaeb",s=e.form,r=s.elements;for(let i=0;i<r.length;i++)if("input"==r[i].nodeName.toLowerCase()&&"file"==r[i].type.toLowerCase()){const e=`${r[i].id}-p`;if(void 0==r[i].files[0]){const t=`${r[i].id}-l`,a=document.getElementById(`${t}`),n=document.getElementById(`${e}`);alert(`Please Select ${a.textContent} File`),a.style.color="red",n.style.color="red",o=!1;break}t.push(r[i].files[0]),n.push(e)}else if("textarea"!=r[i].nodeName.toLowerCase()){if(""==r[i].value){r[i].style.borderColor="red",alert("Please Fill In the Required Fields in Red"),o=!1;break}a[`${r[i].id}`]=r[i].value,r[i].style.borderColor=l}else a[`${r[i].id}`]=r[i].value;return[t,a,n,o]}},ct={name:"SubmitButton",data(){return{files:[],fields:{},aaids:[],play:!0}},methods:{submitFiles(e){const t=dt.chkEmptyElm(e.target);this.files=t[0],this.fields=t[1],this.aaids=t[2],this.play=t[3];const a=e.target.form;if(this.play){const e=new FormData;this.files.forEach(((t,a)=>{e.append(`files[${a}]`,t)})),e.append("fields",JSON.stringify(this.fields)),it.postSendung(e).then((e=>{console.log(e.data),this.$store.commit("change_flash_yellow","Data Successfully Loaded... "),this.aaids.forEach((e=>{document.getElementById(`${e}`).textContent="No File Chosen"})),a.reset(),setTimeout((()=>{this.$store.commit("change_flash_yellow","")}),3e3)})).catch((e=>{console.log(e),this.$store.commit("change_flash_red","Data Unsuccessfully Loaded..."),setTimeout((()=>{this.$store.commit("change_flash_red","")}),3e3)}))}}}};const ut=(0,y.Z)(ct,[["render",ot],["__scopeId","data-v-ce8919c0"]]);var pt=ut,ht={name:"FormView",components:{RowFirst:re,RowSecond:ke,RowThird:Se,RowFourth:Ne,RowSixth:Je,HeadBar:tt,SubmitButton:pt}};const mt=(0,y.Z)(ht,[["render",q],["__scopeId","data-v-b40b7184"]]);var ft=mt;function vt(e,t,a,n,l,s){const r=(0,o.up)("HeadBarTest"),i=(0,o.up)("ListOne");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r,{title:l.title,onChangeTitle:t[0]||(t[0]=e=>s.updateTitle(e))},null,8,["title"]),(0,o.Wm)(i)],64)}const gt={class:"headbar"};function bt(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",gt,[(0,o._)("h1",{onClick:t[0]||(t[0]=(...e)=>s.changeTitle&&s.changeTitle(...e))},(0,f.zw)(a.title),1)])}var wt={name:"HeadBarTest",props:{title:{type:String,default:""}},methods:{changeTitle(){this.$emit("changeTitle","This is a New List")}}};const yt=(0,y.Z)(wt,[["render",bt],["__scopeId","data-v-8c4c5960"]]);var _t=yt;function kt(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h1",null,"User "+(0,f.zw)(e.$route.params.id),1),(0,o._)("h2",null,(0,f.zw)(l.event.title),1),(0,o._)("p",null,(0,f.zw)(l.event.time)+" on "+(0,f.zw)(l.event.date)+" @ "+(0,f.zw)(l.event.location),1),(0,o._)("p",null,(0,f.zw)(l.event.description),1),(0,o._)("h3",null,"Button Click "+(0,f.zw)(l.btnclk)+" times!",1),(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>s.methodone&&s.methodone(...e))},"Click Me!"),(0,o._)("p",null,"You are on page "+(0,f.zw)(e.$route.query._page),1)])}var Ct={data(){return{event:null,btnclk:null}},created(){this.event={title:"Titulo",time:"12:00",date:"23/01/2023",location:"Caracas",description:"We hope yo will be present"},this.btnclk=0,console.log("events: ",this.event),console.log("btnclk: ",this.btnclk)},computed:{btnclkplus:{get(){return this.btnclk},set(e){this.btnclk=e}}},methods:{methodone(){const e=this.$route.params,t=this.$route.query;this.btnclkplus++,console.log("parameters",e),console.log("query",t)}},watch:{btnclk(e,t){console.log(`Old Value of btnclk: ${t}, New Value ov btnclk: ${e}`)}}};const xt=(0,y.Z)(Ct,[["render",kt]]);var Zt=xt,Et={name:"ListView",components:{HeadBarTest:_t,ListOne:Zt},data(){return{title:"View Test List"}},methods:{updateTitle(e){this.title=e}}};const Dt=(0,y.Z)(Et,[["render",vt]]);var Tt=Dt;const St={class:"upfiles"},$t={key:0},Wt={key:1},Bt={class:"pagination"},Mt=(0,o.Uk)("< Previous"),Nt=(0,o.Uk)("Next >");function Ft(e,t,a,n,l,s){const r=(0,o.up)("HeadBar"),i=(0,o.up)("TableHead"),d=(0,o.up)("TableRow"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r,{msg:"Upload List"}),(0,o._)("div",St,[l.upFiles?((0,o.wg)(),(0,o.iD)("table",Wt,[(0,o.Wm)(i,{items:l.thData},null,8,["items"]),(0,o.Wm)(d,{items:l.upFiles,mustBe:l.mustBe},null,8,["items","mustBe"])])):((0,o.wg)(),(0,o.iD)("table",$t," Loading Please wait... ")),(0,o._)("div",Bt,[1!=a.page?((0,o.wg)(),(0,o.j4)(c,{key:0,id:"page-prev",to:{name:"uploads",params:{id:"uploads"},query:{_limit:2,_page:a.page-1}},rel:"prev"},{default:(0,o.w5)((()=>[Mt])),_:1},8,["to"])):(0,o.kq)("",!0),s.hasNextPage?((0,o.wg)(),(0,o.j4)(c,{key:1,id:"page-next",to:{name:"uploads",params:{id:"uploads"},query:{_limit:2,_page:a.page+1}},rel:"next"},{default:(0,o.w5)((()=>[Nt])),_:1},8,["to"])):(0,o.kq)("",!0)])])],64)}function It(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)("tr",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.items,(e=>((0,o.wg)(),(0,o.iD)("th",{key:e.id},(0,f.zw)(e),1)))),128))])}var Ot={name:"TableHead",props:{items:{Array:Array,required:!0}},data(){return{}},created(){},methods:{}};const Ut=(0,y.Z)(Ot,[["render",It],["__scopeId","data-v-e4e2c578"]]);var Ht=Ut;const jt=["id","value"];function Rt(e,t,a,n,l,s){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.items,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.elements(e),(e=>((0,o.wg)(),(0,o.iD)("td",{onClick:t[0]||(t[0]=(...e)=>s.rowClk&&s.rowClk(...e)),key:e.id},(0,f.zw)(e),1)))),128)),(0,o._)("input",{id:e.id,type:"hidden",value:l.hide},null,8,jt)])))),128)}var zt={props:{items:{Array:Array,required:!0},mustBe:{Array:Array,required:!0}},data(){return{hide:null,vals:null}},methods:{elements(e){const t=[],a={};for(const[n,o]of Object.entries(e))this.mustBe.includes(n)?t.push(o):a[`${n}`]=o;return this.hide=JSON.stringify(a),t},rowClk(e){const t=e.target,a=t.parentElement;this.vals=a.lastChild.value,this.$store.commit("change_uploadval",a.lastChild.value),this.$router.push({name:"ExelFile",params:{file:"files"}})}}};const At=(0,y.Z)(zt,[["render",Rt],["__scopeId","data-v-aab57416"]]);var Pt=At,qt={name:"UploadView",components:{HeadBar:tt,TableHead:Ht,TableRow:Pt},props:["page"],data(){return{upFiles:null,totalUpFiles:0,mustBe:["prefix","machine_name","test_number","start_phase","end_phase","start_stroke","end_stroke","bioethanol"],thData:null}},beforeRouteEnter(e,t,a){it.getErhalten(2,parseInt(e.query._page)||1).then((e=>{a((t=>{t.upFiles=e.data.RecSet,t.totalUpFiles=e.data.NumSet,t.tableHead=e.data.RecSet}))})).catch((e=>{console.log(e),a({name:"NetworkError"})}))},beforeRouteUpdate(e){return it.getErhalten(2,parseInt(e.query._page)||1).then((e=>{this.upFiles=e.data.RecSet,this.totalUpFiles=e.data.NumSet,this.tableHead=e.data.RecSet})).catch((e=>(console.log(e),{name:"NetworkError"})))},computed:{hasNextPage(){var e=Math.ceil(this.totalUpFiles/2);return this.page<e},tableHead:{get(){return this.thData},set(e){this.thData=Array.isArray(e)?this.tableKeys(e[0]):[]}}},methods:{tableKeys(e){let t=[];if(void 0!=e&&"object"==typeof e)for(const[a]of Object.entries(e))if(this.mustBe.includes(a)){let e=a.split("_");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);t.push(e.join(" "))}return t}}};const Lt=(0,y.Z)(qt,[["render",Ft],["__scopeId","data-v-3c34664c"]]);var Vt=Lt,Yt=a(530),Kt=a.n(Yt);const Jt=(0,o._)("h1",null,"Oops!",-1),Gt=(0,o.Uk)("Back to the home page");function Qt(e,t,a,n,l,s){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[Jt,(0,o._)("h3",null,"The page "+(0,f.zw)(l.resource)+" you're llokingfor is not here.",1),(0,o.Wm)(r,{to:{name:"home"}},{default:(0,o.w5)((()=>[Gt])),_:1})],64)}var Xt={data(){return{resource:""}},resource:{type:String,required:!0,default:"page"}};const ea=(0,y.Z)(Xt,[["render",Qt]]);var ta=ea;const aa={class:"networkError"},na=(0,o._)("h1",null,"Uh-Oh!",-1),oa=(0,o.Uk)(" It looks like you're experiencing some network issues, please take a breath and "),la=(0,o.Uk)(" to try again. ");function sa(e,t){return(0,o.wg)(),(0,o.iD)("div",aa,[na,(0,o._)("h3",null,[oa,(0,o._)("a",{href:"#",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},"click here"),la])])}const ra={},ia=(0,y.Z)(ra,[["render",sa]]);var da=ia;const ca=e=>((0,o.dD)("data-v-43f6a06f"),e=e(),(0,o.Cn)(),e),ua={class:"outer-2"},pa=ca((()=>(0,o._)("div",{class:"date"},[(0,o._)("p")],-1))),ha=ca((()=>(0,o._)("div",{class:"title-2"},[(0,o._)("h1",null,".xlsx files")],-1))),ma={class:"container",id:"container-one"},fa=(0,o.uE)('<div class="container" id="container-two" data-v-43f6a06f><div class="table-zone" data-v-43f6a06f></div><div class="graphic-zone" data-v-43f6a06f><canvas id="myChart" data-v-43f6a06f></canvas></div></div><div class="container" id="container-three" data-v-43f6a06f><p data-v-43f6a06f>Notes:</p><textarea readonly data-v-43f6a06f></textarea></div>',2);function va(e,t,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",ua,[pa,ha,(0,o._)("div",ma,[(0,o._)("div",{onClick:t[0]||(t[0]=(...e)=>s.filebtnclk&&s.filebtnclk(...e)),class:"file-btn",id:"file-btn-1"}),(0,o._)("div",{onClick:t[1]||(t[1]=(...e)=>s.filebtnclk&&s.filebtnclk(...e)),class:"file-btn",id:"file-btn-2"}),(0,o._)("div",{onClick:t[2]||(t[2]=(...e)=>s.filebtnclk&&s.filebtnclk(...e)),class:"file-btn",id:"file-btn-3"})]),fa])}class ga{selectedButton(e,t){const a=e.parentElement,n=a.children;for(let o=0;o<n.length;o++)n[o].removeAttribute("class"),n[o]===e?n[o].setAttribute("class",`${t}-pushed`):n[o].setAttribute("class",`${t}`)}deselectedButton(e,t){const a=e.children;for(let n=0;n<a.length;n++){let e=a[n].className.split("-");3==e.length&&"pushed"==e.pop()&&(a[n].removeAttribute("class"),a[n].setAttribute("class",`${t}`))}}}var ba=a(3781),wa=a(714),ya=a(9614),_a=a(8829),ka=a(2575),Ca=new WeakMap,xa=new WeakMap,Za=new WeakMap,Ea=new WeakMap,Da=new WeakMap,Ta=new WeakMap,Sa=new WeakMap,$a=new WeakMap,Wa=new WeakMap,Ba=new WeakSet,Ma=new WeakSet;class Na{constructor(e){(0,ba.Z)(this,Ma),(0,ba.Z)(this,Ba),(0,wa.Z)(this,Ca,{writable:!0,value:4}),(0,wa.Z)(this,xa,{writable:!0,value:[]}),(0,wa.Z)(this,Za,{writable:!0,value:[]}),(0,wa.Z)(this,Ea,{writable:!0,value:!1}),(0,wa.Z)(this,Da,{writable:!0,value:new Map}),(0,wa.Z)(this,Ta,{writable:!0,value:{width:"100%","border-collapse":"collapse"}}),(0,wa.Z)(this,Sa,{writable:!0,value:{"text-align":"center",border:"1px solid #ceeadd",padding:"8px","font-size":"16px"}}),(0,wa.Z)(this,$a,{writable:!0,value:{"text-align":"center",border:"1px solid #ceeadd",padding:"8px","font-size":"16px",position:"sticky",top:"0px",background:"#41b782",color:"#fff"}}),(0,wa.Z)(this,Wa,{writable:!0,value:""});const t=Object.entries(e),a=t.shift().pop();void 0!=a["Error"]&&(0,ka.Z)(this,Ea,!0),(0,ka.Z)(this,xa,Object.values(a)),(0,_a.Z)(this,xa).splice((0,_a.Z)(this,Ca)),(0,ka.Z)(this,Za,t)}createTable(){const e=document.createElement("table"),t=(0,ya.Z)(this,Ba,Fa).call(this),a=(0,ya.Z)(this,Ma,Ia).call(this);e.appendChild(t),e.appendChild(a);for(const[n,o]of Object.entries((0,_a.Z)(this,Ta)))e.style.setProperty(n,o);return e}getVec(){return(0,_a.Z)(this,Da)}}function Fa(){const e=document.createElement("tr"),t=document.createDocumentFragment();return(0,_a.Z)(this,xa).forEach(((e,a)=>{if(a<4){let a=document.createElement("th"),n=document.createTextNode(e);a.appendChild(n);for(const[e,t]of Object.entries((0,_a.Z)(this,$a)))a.style.setProperty(e,t);(0,_a.Z)(this,Ea)&&(a.style.background="red",a.style.color="yellow"),t.appendChild(a)}})),e.appendChild(t),e}function Ia(){const e=document.createDocumentFragment();return(0,_a.Z)(this,Za).forEach((t=>{let a=t.pop(),n=document.createElement("tr"),o=0;for(const[e,l]of Object.entries(a)){(0,ka.Z)(this,Wa,e);let t=document.createElement("td"),a=document.createTextNode(l);t.appendChild(a);for(const[e,n]of Object.entries((0,_a.Z)(this,Sa)))t.style.setProperty(e,n);if(n.appendChild(t),(0,_a.Z)(this,Da).has((0,_a.Z)(this,xa)[o]))(0,_a.Z)(this,Da).get((0,_a.Z)(this,xa)[o]).push(l);else{let e=new Array;e.push(l),(0,_a.Z)(this,Da).set((0,_a.Z)(this,xa)[o],e)}if(o++,o>=(0,_a.Z)(this,xa).length)break}e.appendChild(n)})),e}var Oa=a(4851),Ua=new WeakMap,Ha=new WeakMap,ja=new WeakMap,Ra=new WeakMap,za=new WeakMap,Aa=new WeakMap;class Pa{constructor(e,t){(0,wa.Z)(this,Ua,{writable:!0,value:["rgba(65, 186, 130, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"]}),(0,wa.Z)(this,Ha,{writable:!0,value:["rgba(65, 186, 130, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}),(0,wa.Z)(this,ja,{writable:!0,value:Oa.Z.instances}),(0,wa.Z)(this,Ra,{writable:!0,value:[]}),(0,wa.Z)(this,za,{writable:!0,value:[]}),(0,wa.Z)(this,Aa,{writable:!0,value:null}),(0,ka.Z)(this,Aa,t);let a=0;for(const[n,o]of e)0==a?(0,ka.Z)(this,Ra,o):(0,_a.Z)(this,za).push({label:n,data:o,backgroundColor:(0,_a.Z)(this,Ua)[a],borderColor:(0,_a.Z)(this,Ha)[a],borderWidth:1}),a++}getInstances(){return(0,_a.Z)(this,ja)}plot(){const e=new Oa.Z((0,_a.Z)(this,Aa),{type:"line",data:{labels:(0,_a.Z)(this,Ra),datasets:(0,_a.Z)(this,za)},options:{scales:{y:{beginAtZero:!0}}}});return e}}var qa={data(){return{btnMap:new Map,from:null}},beforeRouteEnter(e,t,a){a((e=>{e.winload(e)}))},beforeRouteUpdate(e,t){this.from=t,this.popstatchg(e)},beforeRouteLeave(e,t){this.winunload(),this.from=t},methods:{filebtnclk(e){const t=e.target,a=t.innerText;this.btnMap.set(`/excel-files/${a}`,[a,t]),this.$router.push(`/excel-files/${a}`)},getDatabase(e,t){it.getExcel(e).then((e=>{const t=document.getElementsByClassName("table-zone");while(t[0].hasChildNodes())t[0].removeChild(t[0].firstChild);const a=new Na(e.data);return t[0].appendChild(a.createTable()),a})).then((e=>{const t=document.getElementById("myChart"),a=e.getVec(),n=new Pa(a,t),o=n.getInstances(),l=Object.keys(o);0===l.length||o[l[0]].destroy(),n.plot()})).then((()=>{(new ga).selectedButton(t,"file-btn")}))},winload(e){const t=JSON.parse(e.$store.state.uploadval),a=[t["file_one_name"],t["file_two_name"],t["file_three_name"]],n=document.getElementsByClassName("date");let o=document.createTextNode(t["date"]);n[0].childNodes[0].appendChild(o);const l=document.getElementById("container-one");l.childNodes.forEach(((e,t)=>{o=document.createTextNode(a[t]),e.appendChild(o)}));const s=document.getElementsByTagName("textarea");o=document.createTextNode(t["note"]),s[0].appendChild(o)},winunload(){const e=document.getElementsByClassName("date");e[0].firstChild.removeChild(e[0].firstChild.firstChild);const t=document.getElementById("container-one");t.childNodes.forEach((e=>{e.removeChild(e.firstChild)}));const a=document.getElementsByClassName("table-zone");while(a[0].hasChildNodes())a[0].removeChild(a[0].firstChild);const n=document.getElementsByTagName("textarea");n[0].removeChild(n[0].firstChild)},popstatchg(e){const t=e.fullPath.split("%20").join(" ");if(this.btnMap.has(t)){const e=this.btnMap.get(t);this.getDatabase(e[0],e[1])}else this.winunload(),this.winload(this),(new ga).deselectedButton(window["container-one"],"file-btn")}}};const La=(0,y.Z)(qa,[["render",va],["__scopeId","data-v-43f6a06f"]]);var Va=La;const Ya=[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,7381))},{path:"/form",name:"form",component:ft},{path:"/uploads",name:"uploads",component:Vt,props:e=>({page:parseInt(e.query._page)||1})},{path:"/events",name:"list",component:Tt},{path:"/:catchAll(.*)",name:"NotFound",component:ta},{path:"/network-error",name:"NetworkError",component:da},{path:"/excel-files",name:"excel",component:Va},{path:"/excel-files/:file",name:"ExelFile",component:Va}],Ka=(0,E.p7)({history:(0,E.PO)("/"),routes:Ya});Ka.beforeEach((()=>{Kt().start()})),Ka.afterEach((()=>{Kt().done()}));var Ja=Ka,Ga=a(65),Qa=(0,Ga.MT)({state:{yellowMessage:"",redMessage:"",event:null,events:[],uploadval:null},getters:{},mutations:{change_flash_yellow(e,t){e.yellowMessage=t},change_flash_red(e,t){e.redMessage=t},change_uploadval(e,t){e.uploadval=t}},actions:{},modules:{}});(0,n.ri)(Z).use(Qa).use(Ja).mount("#app")},6971:function(e,t,a){e.exports=a.p+"img/selfil.514ba036.svg"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,l){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var r=!0,i=0;i<n.length;i++)(!1&l||s>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(r=!1,l<s&&(s=l));if(r){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.2dc8331b.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuejsdemo:";a.l=function(n,o,l,s){if(e[n])e[n].push(o);else{var r,i;if(void 0!==l)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+l){r=u;break}}r||(i=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+l),r.src=n),e[n]=[o];var p=function(t,a){r.onerror=r.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(a)})),t)return t(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),i&&document.head.appendChild(r)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var l=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=l);var s=a.p+a.u(t),r=new Error,i=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+l+": "+s+")",r.name="ChunkLoadError",r.type=l,r.request=s,o[1](r)}};a.l(s,i,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,s=n[0],r=n[1],i=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(i)var c=i(a)}for(t&&t(n);d<s.length;d++)l=s[d],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self["webpackChunkvuejsdemo"]=self["webpackChunkvuejsdemo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9674)}));n=a.O(n)})();
//# sourceMappingURL=app.7be19182.js.map