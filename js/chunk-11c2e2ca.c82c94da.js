(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11c2e2ca"],{"2bd7":function(e,t,o){"use strict";o("8e5f")},"642f":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.isLoading?o("loading"):e._e(),e.isLoading?e._e():o("div",[o("c-stack",{attrs:{spacing:6}},[o("c-text",{attrs:{fontSize:"6xl",ml:"20rem",mt:"2rem"}},[e._v(e._s(e.jobId.title))]),1===e.jobId.image.length?o("c-flex",{attrs:{ml:"20rem"}},[o("c-image",{attrs:{mt:"2rem",align:"center",w:"50%",src:e.jobId.image[0].path}})],1):e._e(),2===e.jobId.image.length?o("c-flex",{attrs:{ml:"20rem"}},[o("c-image",{attrs:{mt:"2rem",align:"center",w:"50%",src:e.jobId.image[0].path}}),o("c-flex",{attrs:{flexDirection:"column"}},[o("c-image",{attrs:{ml:"5rem",w:"50%",h:"50%",mt:"2rem",src:e.jobId.image[1].path}})],1)],1):e._e(),3===e.jobId.image.length?o("c-flex",{attrs:{ml:"20rem"}},[o("c-image",{attrs:{mt:"2rem",align:"center",w:"50%",src:e.jobId.image[0].path}}),o("c-flex",{attrs:{flexDirection:"column"}},[o("c-image",{attrs:{ml:"5rem",w:"50%",h:"50%",mt:"2rem",src:e.jobId.image[1].path}}),o("c-image",{attrs:{ml:"5rem",mt:"2rem",w:"50%",h:"50%",src:e.jobId.image[2].path}})],1)],1):e._e(),o("c-flex",[o("c-text",{attrs:{color:"indigo.400",fontSize:"5xl",ml:"20rem"}},[e._v("ชั่วโมงละ "+e._s(e.jobId.compensation)+" บาท")])],1),o("c-text",{attrs:{fontSize:"4xl",ml:"20rem",as:"ins",mt:"6rem"}},[e._v("รายละเอียดงาน")]),o("c-box",{staticClass:"compensation"},[o("c-text",{attrs:{fontSize:"3xl",ml:"20rem"}},[e._v("อัตราค่าจ้าง")]),o("c-text",{attrs:{fontSize:"xl",ml:"20rem"}},[e._v(" - ชั่วโมงละ "+e._s(e.jobId.compensation)+" บาท ")])],1),o("c-box",{staticClass:"description"},[o("c-text",{attrs:{fontSize:"3xl",ml:"20rem"}},[e._v("รายละเอียดงาน")]),o("c-text",{attrs:{fontSize:"xl",ml:"20rem"}},[e._v(" - "+e._s(e.jobId.description)+" ")])],1),o("c-box",{staticClass:"requirement"},[o("c-text",{attrs:{fontSize:"3xl",ml:"20rem"}},[e._v("คุณสมบัติ")]),o("c-text",{attrs:{fontSize:"xl",ml:"20rem"}},[e._v(" - "+e._s(e.jobId.requirement)+" ")])],1)],1)],1)],1)},a=[],c=o("b529"),i=o("73ec"),r=o("c1ae"),l={data(){return{job:[{id:2,compensation:15304,description:"Adipisci saepe perspiciatis rerum nobis neque libero. Natus quaerat quia nulla ipsam quo. Omnis est voluptates ratione.",requirement:"Et expedita voluptas cupiditate eos veritatis repellendus. Iure autem quia dolorum non.",province:"North Adeline",title:"Government",created_at:"2021-10-02T18:44:39.000000Z",updated_at:"2021-10-02T18:44:39.000000Z"}],id:0,jobId:[],userToReview:[],user_loged_in:[],isLoading:!0}},async created(){console.log("created"),this.user_loged_in=i["a"].getters.user,await c["a"].watch(e=>c["a"].getters.job_filtered,(e,t)=>{this.job.push(e),localStorage.setItem("YourItem",JSON.stringify(e)),this.jobId=JSON.parse(localStorage.getItem("YourItem")),console.log("this.jobId",this.jobId),console.log(localStorage),console.log("this.newValue",e),console.log("this.job",this.job),this.isLoading=!1}),this.jobId=JSON.parse(localStorage.getItem("YourItem")),console.log("this.user_loged_in",this.user_loged_in),console.log("created")},computed:{validated(){return this.user_loged_in.id!==this.jobId.user_id},validated_interest(){return this.user_loged_in.id===this.jobId.user_id},count(){return c["a"].state.JobById}},methods:{async finish(){console.log(this.jobId.users[1].info[0].pivot.is_selected),console.log(this.jobId.users[0].info[0].pivot.is_selected),console.log(this.jobId.users.length);for(let e=0;e<this.jobId.users.length;e++)console.log("user_id",this.jobId.users[e].info[0].pivot.user_id),console.log("is_selected",this.jobId.users[e].info[0].pivot.is_selected),1==this.jobId.users[e].info[0].pivot.is_selected&&(await r["a"].dispatch("fetchUserByID",this.jobId.users[e].info[0].pivot.user_id),this.userToReview=r["a"].getters.fetchUser);console.log("userToReview",this.userToReview),localStorage.setItem("userToReview",JSON.stringify(this.userToReview)),localStorage.setItem("๋JobId",JSON.stringify(this.jobId.id))}}},n=l,g=(o("2bd7"),o("2877")),d=Object(g["a"])(n,s,a,!1,null,null,null);t["default"]=d.exports;const m=o("eb99");m(d,{CText:o("89e8").CText,CImage:o("89e8").CImage,CFlex:o("89e8").CFlex,CBox:o("89e8").CBox,CStack:o("89e8").CStack})},"8e5f":function(e,t,o){},b529:function(e,t,o){"use strict";var s=o("2b0e"),a=o("2f62"),c=o("3ff5"),i=o("ac20");s["default"].use(a["a"]),t["a"]=new a["a"].Store({state:{posts:[],data:[],JobById:[],allJobs:[],JobSuggest:[],fetchRemark:[],fetchUserFinish:[],jobByUser:[],jobFromSearch:[],JobAvaNotLogIn:[],AllJobsAvaNotLogIn:[],JobsThatUserApply:[],recentlyPostedJob:[]},getters:{posts:e=>e.posts,jobs:e=>e.data,job_filtered:e=>e.JobById,getAllJobs:e=>e.allJobs,getJobSuggest:e=>e.JobSuggest,getUserFinish:e=>e.fetchUserFinish,getJobByUser:e=>e.jobByUser,getJobById:e=>e.JobById,getJobFromSearch:e=>e.jobFromSearch,getAvaJobNotLogIn:e=>e.JobAvaNotLogIn,getAllJobsAvaNotLogIn:e=>e.AllJobsAvaNotLogIn,getJobsThatUserApply:e=>e.JobsThatUserApply,getRecentlyPostedJob:e=>e.recentlyPostedJob},mutations:{async fetch(e,{res:t}){e.data=(await t).data},async fetchById(e,{res:t}){e.JobById=(await t).data},async fetchJobUserApply(e,{res:t}){e.JobsThatUserApply=(await t).data},async fetchSuggest(e,{res:t}){e.JobSuggest=(await t).data},async fetchAllAvaJobNotLogIn(e,{res:t}){e.AllJobsAvaNotLogIn=(await t).data},async fetchByUser(e,{res:t}){e.jobByUser=await t},async fetchAvaJobNotLogIn(e,{res:t}){e.JobAvaNotLogIn=await t.data},async fetchFromSearch(e,{res:t}){e.jobFromSearch=(await t).data},addPost(e,t){e.posts.unshift(t)},setAllJobs(e,t){e.allJobs=t},addRemark(e,t){e.fetchRemark=t},fetchUserFinishJob(e,t){e.fetchUserFinish=t},setJobById(e,t){e.JobById=t},removeJob(e,t){e.allJobs=e.allJobs.map(e=>e.id!=t.id)},setRecentlyPostedJob(e,t){e.recentlyPostedJob=t}},actions:{async fetchJobSuggest({commit:e},t){console.log("fetchJobSuggest"),console.log("---id---",t);let o={id:t},s=await i["c"].post(`/api/jobs/${t}/get-rand-jobs`,o);console.log("JobSuggest",(await s).data),console.log("fetchJobSuggest"),e("fetchSuggest",{res:s})},async fetchData({commit:e}){let t=c["a"].getApiHeader(),o=await i["c"].get("/api/jobs",t);e("fetch",o)},async postJob({commit:e},t){try{let o=await i["c"].post("/api/jobs",t);if(201===o.status)return e("setRecentlyPostedJob",o.data),{success:!0}}catch(o){return{success:!1,message:"ตรวจสอบฟอร์มกรอกข้อมูลอีกครั้ง"}}},async fetchJob({commit:e}){try{let t=i["c"].get("/api/jobs");if(console.log("res = ",(await t).data),200===(await t).status)return console.log((await t).data),console.log("ดำะแ้ ่นิ"),e("fetch",{res:t}),{success:!0}}catch(t){return{success:!1}}},async report({commit:e},t){console.log(t);let o={id:t.id};console.log(o.id);await i["c"].get(`/api/jobs/${t.id}/report-inappropriate`)},async paginate({commit:e},t){console.log(t);let o={id:t.id};console.log(o.id);let s=await i["c"].post(t.url,o);console.log("route"),console.log("data from url"),console.log(await s),e("fetch",{res:s})},async paginate_post({commit:e},t){let o=i["c"].post(t);console.log("route"),console.log(t),console.log("data from url"),console.log((await o).data),e("fetch",{res:o})},async getJobByID({commit:e},t){let o=await i["c"].get("/api/jobs/"+t),s=o.data;return s},async fetchJobById({commit:e},t){console.log("---id---"),console.log(t);try{let o=await i["c"].get("/api/jobs/"+t);e("fetchById",{res:o}),console.log((await o).data)}catch(o){console.log(o.message)}console.log("fetchById")},async fetchJobFromSearch({commit:e},t){let o={title:t.title,province:t.province,category:t.category,compen:t.compensatsion_array,check:t.check,user_id:t.user_id};console.log("body",t);try{let t=await i["c"].post("/api/get-job-from-search",o);e("fetchFromSearch",{res:t}),console.log("s",t)}catch(s){console.log(s.message)}console.log("fetchJobFromSearch")},async fetchJobUserId({commit:e},t){console.log("---id---");let o={id:t.user_id,working_status:t.working_status};console.log(o);let s=await i["c"].post("/api/get-job-by-user-id",o);console.log((await s).data),console.log("fetchByUser"),e("fetchByUser",{res:s}),console.log("fetchByUser")},async fetchJobUserApply({commit:e},t){console.log("---id---");let o={id:t.user_id,working_status:t.working_status};console.log(o);let s=await i["c"].post("/api/get-job-apply",o);console.log((await s).data),console.log("fetchJobUserApply"),e("fetchJobUserApply",{res:s}),console.log("fetchJobUserApply")},async fetchJobAvaliableNotLogedIn({commit:e},t){console.log("fetchJobAvaliableNotLogedIn"),console.log("id",t);let o={id:t},s=await i["c"].post("api/jobs/get-avaliable-jobs-not-log-in",o);console.log(s),e("fetchAvaJobNotLogIn",{res:s})},async addRemarks({commit:e},t){try{console.log("payload.id---",t.id),console.log("payload.remark---",t.remark);let o={id:t.user_id,remark:t.remark};console.log("body.id---",o.id),console.log("body.remark---",o.remark);let s=await i["c"].post(`/api/jobs/${t.job_id}/apply-job`,o);return console.log("res",s),e("addRemark",{res:s}),{success:!0}}catch(o){return{success:!1,message:o.response.data}}},async fetchAllJobs({commit:e}){try{let t=await i["c"].get("/api/get-all-jobs");console.log("line 82",t.data),e("setAllJobs",t.data)}catch(t){console.log(t)}},async fetchUserFinish({commit:e},t){let o=await i["c"].get(`/api/jobs/${t}/finish-job`);console.log("finish job =>",o),e("fetchUserFinishJob",o)},async fetchJobByID({commit:e},t){try{let o=await i["c"].get("/api/jobs/"+t);e("setJobById",o.data)}catch(o){console.log(o.message)}},async removeJob({commit:e},{headers:t,id:o}){try{let t=await i["c"].delete("/api/jobs/"+o);e("removeJob",t.data)}catch(s){console.log(s.message)}},async employerSelectFreelancer({commit:e},t){try{let e={id:t.user_id};return await i["c"].put(`/api/jobs/${t.job_id}/select-freelancer`,e),{success:!0}}catch(o){return{success:!1,message:o.response.data}}}}})},c1ae:function(e,t,o){"use strict";var s=o("2b0e"),a=o("2f62"),c=o("ac20");s["default"].use(a["a"]),t["a"]=new a["a"].Store({state:{users:[],user:{},usersArePublish:[]},getters:{getUsers:e=>e.users,fetchUser:e=>e.user,fetchUsersArePublish:e=>e.usersArePublish},mutations:{setUsers(e,t){e.users=t},fetchUser(e,t){e.user=t},fetchUsersArePublish(e,t){e.usersArePublish=t}},actions:{async fetchUsers({commit:e},t){try{let t=await c["c"].get("/api/users");e("setUsers",t.data)}catch(o){console.log(o)}},async fetchUserByID({commit:e},t){try{let o=await c["c"].get("/api/users/"+t);e("fetchUser",o.data)}catch(o){console.log(o)}},async fetchUsersArePublish({commit:e}){try{let t=await c["c"].get("/api/get-user-is-publish");e("fetchUsersArePublish",t.data)}catch(t){console.log(t)}}}})}}]);
//# sourceMappingURL=chunk-11c2e2ca.c82c94da.js.map