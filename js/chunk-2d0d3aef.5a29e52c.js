(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3aef"],{"5e8a":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("c-flex",{attrs:{justify:"center",py:"8vh"}},[e.isLoading?o("loading"):e._e(),o("c-stack",{attrs:{w:"55rem"}},[o("c-form-control",[o("NewUserForm",{attrs:{title:"ข้อมูลสมาชิกใหม่",email:e.email,phone:e.phone,firstname:e.firstname,lastname:e.lastname},on:{saveInfo:e.register}})],1)],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("c-text",{attrs:{fontSize:"4xl",textAlign:"center"}},[e._v(e._s(e.title))]),o("c-text",{attrs:{fontsize:"md",color:"gray.400"}},[e._v(e._s("Fill in the data for profile. It will take a couple of minutes. You only need a passport"))]),o("c-box",{attrs:{mt:"5vh",border:"solid",borderColor:"gray.100",borderWidth:"0.1rem",borderRadius:"0.5rem",p:"2rem"}},[o("c-stack",{attrs:{spacing:8}},[o("c-box",[o("c-text",{attrs:{fontSize:"2xl",py:"1rem"}},[e._v(e._s("ข้อมูลส่วนตัว"))]),o("c-text",{attrs:{fontSize:"md",color:"gray.400"}},[e._v(e._s("Specify exactly as in your passport"))]),o("div")],1),o("c-input",{attrs:{type:"file",multiple:""},on:{change:function(t){return e.handleFilesUpload(t)}}}),o("c-box",[o("c-form-label",{attrs:{for:"name",color:"gray.600"}},[e._v(e._s("ชื่อจริง"))]),o("c-input",{attrs:{disabled:"",id:"name",placeholder:"ชื่อจริง"},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),o("c-box",[o("c-form-label",{attrs:{for:"lastname",color:"gray.600"}},[e._v(e._s("นามสกุล"))]),o("c-input",{attrs:{disabled:"",id:"lastname",placeholder:"นามสกุล"},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),o("c-box",[o("c-form-label",{attrs:{for:"birthdate",color:"gray.600"}},[e._v(e._s("วัน/เดือน/ปีเกิด"))]),o("c-input",{attrs:{type:"date",id:"birthdate",placeholder:"วัน/เดือน/ปีเกิด"},model:{value:e.form.birthdate,callback:function(t){e.$set(e.form,"birthdate",t)},expression:"form.birthdate"}})],1),o("c-box",[o("c-form-label",{attrs:{for:"address",color:"gray.600"}},[e._v(e._s("ที่อยู่"))]),o("c-textarea",{attrs:{placeholder:"ที่อยู่"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),o("c-box",[o("c-text",{attrs:{fontSize:"2xl"}},[e._v(e._s("ช่องทางการติดต่อ"))]),o("c-text",{attrs:{fontSize:"md",color:"gray.400"}},[e._v(e._s("These contracts are used to inform about job"))])],1),o("c-box",[o("c-form-label",{attrs:{for:"email",color:"gray.600"}},[e._v(e._s("Email"))]),o("c-input",{attrs:{disabled:"",id:"email",placeholder:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),o("c-box",[o("c-form-label",{attrs:{for:"เบอร์โทรศัพท์",color:"gray.600"}},[e._v(e._s("เบอร์โทรศัพท์"))]),o("c-input",{attrs:{disabled:"",id:"phone",placeholder:"เบอร์โทรศัพท์"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),o("c-box",[o("c-form-label",{attrs:{for:"facebook",color:"gray.600"}},[e._v(e._s("Facebook"))]),o("c-input",{attrs:{id:"facebook",placeholder:"Facebook"},model:{value:e.form.facebook,callback:function(t){e.$set(e.form,"facebook",t)},expression:"form.facebook"}})],1),o("c-box",[o("c-form-label",{attrs:{for:"line",color:"gray.600"}},[e._v(e._s("Line ID"))]),o("c-input",{attrs:{id:"line",placeholder:"Line ID"},model:{value:e.form.line,callback:function(t){e.$set(e.form,"line",t)},expression:"form.line"}})],1),o("c-box",[o("c-text",{attrs:{fontSize:"2xl"}},[e._v(e._s("แนะนำตนเอง"))]),o("c-text",{attrs:{fontSize:"md",color:"gray.400"}},[e._v(e._s("Express yourself!"))])],1),o("c-box",[o("c-form-label",{attrs:{for:"about_me",color:"gray.600"}},[e._v(e._s("เกี่ยวกับตนเอง"))]),o("c-textarea",{attrs:{placeholder:"แนะนำเกี่ยวกับตนเอง"},model:{value:e.form.about_me,callback:function(t){e.$set(e.form,"about_me",t)},expression:"form.about_me"}})],1),o("c-box",[o("c-form-label",{attrs:{for:"skills",color:"gray.600"}},[e._v(e._s("ทักษะและความสามารถ"))]),o("c-textarea",{attrs:{placeholder:"ทักษะและความสามารถ"},model:{value:e.form.skill,callback:function(t){e.$set(e.form,"skill",t)},expression:"form.skill"}})],1),o("c-box",[o("c-text",{attrs:{fontSize:"2xl"}},[e._v(e._s("การนำข้อมูลไปแสดงในหน้าผู้ที่ต้องการหางาน"))]),o("c-text",{attrs:{fontSize:"md",color:"gray.400"}},[e._v(e._s("Permission to perform your information in freelancer page"))])],1),o("c-box",{attrs:{pb:"3vh"}},[o("c-checkbox",{attrs:{color:"gray.600",size:"md","variant-color":"green"},on:{change:function(t,o){e.form.is_publish=!0===o.target.checked?1:0}}},[e._v("อนุญาต")])],1)],1)],1),o("c-box",{attrs:{textAlign:"right"}},[o("c-button",{attrs:{"variant-color":"blue",mt:"1.5rem"},on:{click:e.saveInfo}},[e._v("บันทึกข้อมูล")])],1)],1)},l=[],i={props:{title:String,user:Object,email:String,firstname:String,lastname:String,phone:String},data(){return{form:{birthdate:"",address:"",facebook:"",line:"",about_me:"",skill:"",is_publish:0},files:[]}},methods:{saveInfo(){let e={body:this.form,img:this.files};this.$emit("saveInfo",e)},handleFilesUpload(e){this.files=[...e.target.files]},async uploadFiles(){}}},c=i,n=o("2877"),m=Object(n["a"])(c,s,l,!1,null,null,null),f=m.exports;const d=o("eb99");d(m,{CText:o("89e8").CText,CBox:o("89e8").CBox,CInput:o("89e8").CInput,CFormLabel:o("89e8").CFormLabel,CTextarea:o("89e8").CTextarea,CCheckbox:o("89e8").CCheckbox,CStack:o("89e8").CStack,CButton:o("89e8").CButton});var b=o("73ec"),u=o("bc3a"),p=o.n(u),h={components:{NewUserForm:f},data(){return{email:"",phone:"",firstname:"",lastname:"",isLoading:!1}},created(){this.initialize()},methods:{initialize(){let e=b["a"].getters.user;console.log(e);let{email:t,phone:o,name:a,lastname:r}=b["a"].getters.user;this.email=t,this.phone=o,this.firstname=a,this.lastname=r},async register({body:e,img:t}){this.isLoading=!0,console.log("body ",e),console.log("img ",t);let o=await b["a"].dispatch("firstRegister",e);if(console.log(o),o.success){let e=new FormData,o=JSON.parse(localStorage.getItem("auth-jobserm")).access_token;console.log(o),t.forEach(async t=>{e.append("photo",t);let o=await p.a.post("http://localhost:8000/api/images/uploadProfile/"+b["a"].getters.user.id,e,{headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("auth-jobserm")).access_token}});console.log(o),200===o.status&&console.log("upload success")}),this.isLoading=!1,this.$swal("ลงทะเบียนสำเร็จ","ขอบคุณที่ให้ความสนใจ","success"),this.$router.push("/")}else this.isLoading=!1,this.$swal("ลงทะเบียนไม่สำเร็จ",o.message,"error")}}},x=h,g=Object(n["a"])(x,a,r,!1,null,null,null);t["default"]=g.exports;const _=o("eb99");_(g,{CFormControl:o("89e8").CFormControl,CStack:o("89e8").CStack,CFlex:o("89e8").CFlex})}}]);
//# sourceMappingURL=chunk-2d0d3aef.5a29e52c.js.map