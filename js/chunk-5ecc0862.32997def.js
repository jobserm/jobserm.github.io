(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ecc0862"],{"21ea":function(e,t,s){e.exports=s.p+"img/star.45dd5470.png"},"758a":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("c-stack",{attrs:{w:"60rem",ml:"3rem",rounded:"0.5rem",p:"20",bgColor:"brand.400",shadow:"xl","border-width":"1px"}},[s("c-flex",{attrs:{justify:"center"}},[s("c-box",[s("c-image",{attrs:{textAlign:"center",src:e.image,w:"30rem",h:"30rem",borderRadius:"50%",marginTop:"auto",py:"2"}})],1)],1),s("c-heading",{attrs:{mt:"3rem",align:"center",size:"2xl",pb:"2"}},[e._v(e._s(e.freelancerName)+" "+e._s(e.freelancerLastname))]),s("c-flex",{attrs:{justify:"center"}},[s("c-image",{attrs:{src:e.star,w:"40px",h:"40px"}}),s("c-text",{attrs:{as:"h2",fontSize:"4xl",color:"primary.800",opacity:"0.9",fontWeight:"normal",lineHeight:"1.5",pl:"2"}},[e._v(" "+e._s(e.rating)+" / 5 ")])],1),s("c-flex",{attrs:{justify:"center"}},[s("c-text",{attrs:{as:"h2",fontSize:"4xl",color:"primary.800",opacity:"0.8",fontWeight:"normal",lineHeight:"1.7","white-space":"pre-line"}},[e._v("อายุ : "+e._s(e.age)+" ")])],1)],1)},r=[],i={name:"Info",props:["freelancerName","freelancerLastname","star","rating","age","image"]},c=i,o=s("2877"),n=Object(o["a"])(c,a,r,!1,null,null,null);t["a"]=n.exports;const l=s("eb99");l(n,{CImage:s("89e8").CImage,CBox:s("89e8").CBox,CFlex:s("89e8").CFlex,CHeading:s("89e8").CHeading,CText:s("89e8").CText,CStack:s("89e8").CStack})},"88e6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("profiles")],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("c-box",[a("c-box",{attrs:{px:"20",py:"10"}},[e.isLoading?a("loading"):e._e(),e.isLoading?e._e():a("div",[a("c-stack",[a("c-heading",{attrs:{align:"center",fontSize:"5xl",py:"5"}},[e._v("ประวัติส่วนตัว")])],1),a("c-flex",{attrs:{py:"16",justify:"center"}},[a("info-profile",{attrs:{freelancerName:this.user.name,freelancerLastname:this.user.lastname,rating:this.user.review,age:this.user.birthdate,image:this.user.img_url,star:s("21ea")}}),a("c-box",{attrs:{bg:"#FDFDFD","border-width":"3px",rounded:"0.5rem"}},[a("c-heading",{attrs:{as:"h2",size:"xl",color:"black",opacity:"0.9",px:"24",lineHeight:"3"}},[e._v(" ประวัติส่วนตัว ")]),a("c-text",{attrs:{as:"h1",fontSize:"2xl",color:"black",opacity:"0.9",px:"24",lineHeight:"2.5"}},[e._v(" ชื่อ : "+e._s(this.user.name)+" ")]),a("c-text",{attrs:{as:"h1",fontSize:"2xl",color:"black",opacity:"0.9",px:"24",lineHeight:"2.5"}},[e._v(" นามสกุล : "+e._s(this.user.lastname)+" ")]),a("c-text",{attrs:{as:"h1",fontSize:"2xl",color:"black",opacity:"0.9",px:"24",lineHeight:"2.5"}},[e._v(" เบอร์โทรศัพท์ : "+e._s(this.user.phone)+" ")]),a("c-text",{attrs:{as:"h1",fontSize:"2xl",color:"black",opacity:"0.9",px:"24",lineHeight:"2.5"}},[e._v(" อีเมล : "+e._s(this.user.email)+" ")]),a("c-text",{attrs:{as:"h1",fontSize:"2xl",color:"black",opacity:"0.9",px:"24",lineHeight:"2.5"}},[e._v(" ที่อยู่ : "+e._s(this.user.address)+" ")]),a("c-heading",{attrs:{as:"h2",size:"xl",color:"black",opacity:"0.9",px:"24",lineHeight:"3",mt:"1rem"}},[e._v(" ช่องทางการติดต่อ ")]),a("c-text",{attrs:{as:"h1",fontSize:"2xl",color:"black",opacity:"0.9",px:"24",lineHeight:"2.5"}},[e._v(" facebook : "+e._s(this.user.facebook)+" ")]),a("c-text",{attrs:{as:"h1",fontSize:"2xl",color:"black",opacity:"0.9",px:"24",lineHeight:"2.5"}},[e._v(" line : "+e._s(this.user.line)+" ")]),a("c-heading",{attrs:{as:"h2",size:"xl",color:"black",opacity:"0.9",px:"24",lineHeight:"3",mt:"1rem"}},[e._v(" ข้อมูลเพิ่มเติม ")]),a("c-text",{attrs:{as:"h1",fontSize:"2xl",color:"black",opacity:"0.9",px:"24",lineHeight:"2.5"}},[e._v(" เกี่ยวกับตนเอง : "+e._s(this.user.about_me)+" ")]),a("c-text",{attrs:{as:"h1",fontSize:"2xl",color:"black",opacity:"0.9",px:"24",lineHeight:"2.5",pb:"5"}},[e._v(" ความสามารถ : "+e._s(this.user.skill)+" ")])],1)],1)],1),0!==this.user.review?a("c-heading",{attrs:{size:"2xl",py:"5",mt:"5rem",ml:"5rem"}},[e._v("รีวิวจากผู้ว่าจ้าง")]):e._e(),a("c-simple-grid",{attrs:{columns:[1,1,1,2],spacing:"10",ml:"4rem"}},e._l(this.reviews,(function(t){return a("div",{key:t.id},[a("c-stack",{attrs:{wrap:"wrap",rounded:"0.5rem",p:"12",bgColor:"#FDFDFD",shadow:"xl","border-width":"1px",w:"70rem",h:"12rem",mt:"2rem"}},[a("c-heading",{attrs:{fontSize:"2xl",pb:"2"}},[e._v(e._s(t.comment)+" "),a("br"),a("br"),e._v(" คะแนนรีวิว "+e._s(t.rating.toFixed(1))+" ")])],1)],1)})),0)],1)],1)},c=[],o=s("c1ae"),n=s("758a"),l=s("f652"),h={components:{InfoProfile:n["a"]},data(){return{user:{},reviews:[],isLoading:!0,user_id:this.$route.params.id}},async created(){await this.fetchUser(this.user_id),await l["a"].dispatch("getReviewByUserID",this.user.id);let e=l["a"].getters.getReviewsByUserID;this.reviews=e,this.editFormat()},methods:{async editFormat(){if(this.user.birthdate){let e=Date.now()-new Date(this.user.birthdate).getTime(),t=new Date(e);this.user.birthdate=Math.abs(t.getUTCFullYear()-1970)}null===this.user.review?this.user.review=0:this.user.review=this.user.review.toFixed(1)},async fetchUser(e){await o["a"].dispatch("fetchUserByID",e);let t=o["a"].getters.fetchUser;this.user=t,this.isLoading=!1}}},u=h,m=s("2877"),p=Object(m["a"])(u,i,c,!1,null,null,null),d=p.exports;const g=s("eb99");g(p,{CHeading:s("89e8").CHeading,CStack:s("89e8").CStack,CText:s("89e8").CText,CBox:s("89e8").CBox,CFlex:s("89e8").CFlex,CSimpleGrid:s("89e8").CSimpleGrid});var f={name:"Profile",components:{Profiles:d}},x=f,v=Object(m["a"])(x,a,r,!1,null,null,null);t["default"]=v.exports},c1ae:function(e,t,s){"use strict";var a=s("2b0e"),r=s("2f62"),i=s("ac20");a["default"].use(r["a"]),t["a"]=new r["a"].Store({state:{users:[],user:{},usersArePublish:[]},getters:{getUsers:e=>e.users,fetchUser:e=>e.user,fetchUsersArePublish:e=>e.usersArePublish},mutations:{setUsers(e,t){e.users=t},fetchUser(e,t){e.user=t},fetchUsersArePublish(e,t){e.usersArePublish=t}},actions:{async fetchUsers({commit:e},t){try{let t=await i["c"].get("/api/users");e("setUsers",t.data)}catch(s){console.log(s)}},async fetchUserByID({commit:e},t){try{let s=await i["c"].get("/api/users/"+t);e("fetchUser",s.data)}catch(s){console.log(s)}},async fetchUsersArePublish({commit:e}){try{let t=await i["c"].get("/api/get-user-is-publish");e("fetchUsersArePublish",t.data)}catch(t){console.log(t)}}}})},f652:function(e,t,s){"use strict";s("bc3a");var a=s("2b0e"),r=s("2f62"),i=s("ac20");a["default"].use(r["a"]),t["a"]=new r["a"].Store({state:{data:[],postsReview:[],reviewsByUserID:[],reviews_after_remove:[]},getters:{reviews:e=>e.data,getReviews:e=>e.postsReview,getReviewsByUserID:e=>e.reviewsByUserID},mutations:{setData(e,t){e.data=t},setReview(e,t){e.data=t},setReviewByUserID(e,t){e.reviewsByUserID=t},removeReview(e,t){e.reviews_after_remove=e.reviews_after_remove.map(e=>e.id!=t.id)}},actions:{async fetchData({commit:e}){let t=await i["c"].get("/api/reviews");e("setData",t)},async addReview({commit:e},t){let s={comment:t.comment,rating:t.rating,id:t.id},a=await i["c"].post("/api/reviews",s);return console.log("-----------",a),e("setReview",a.data),a},async paginate({commit:e},t){let s=i["c"].get(t);e("fetch",{res:s})},async getReviewByUserID({commit:e},t){let s=await i["c"].get("/api/reviews/get-review-by-user-id/"+t);e("setReviewByUserID",s.data)},async removeReview({commit:e},t){let s=await i["c"].delete("/api/reviews/"+t);e("removeReview",s.data)}},modules:{}})}}]);
//# sourceMappingURL=chunk-5ecc0862.32997def.js.map