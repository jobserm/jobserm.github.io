(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48a5a10a"],{6889:function(e,t,a){"use strict";a("8e3a")},"8e3a":function(e,t,a){},bb44:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("c-flex",{attrs:{justify:"center",py:"8vh"}},[a("c-stack",{attrs:{w:"55rem"}},[a("Review")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("c-text",{attrs:{fontSize:"4xl",textAlign:"center"}},[e._v(e._s("รีวิวทั้งหมด"))]),e._l(e.reviews.data,(function(t){return a("div",{key:t.id},[a("c-box",{attrs:{mt:"4vh",border:"solid",bgColor:"#F5EEF8",borderColor:"7F8C8D",borderWidth:"0.1rem",borderRadius:"0.5rem",p:"0.5rem"}},[a("c-image",{attrs:{w:"40px",h:"40px",src:"https://storage.googleapis.com/fastwork-static/c645b5d1-7ad5-46ae-88b5-e2463e17a3d7.jpg"}}),a("c-box",[a("c-flex",{attrs:{justify:"left",mt:"0.5rem"}},[a("p",{staticClass:"comment"},[e._v(e._s(t.comment))])]),a("c-flex",{attrs:{justify:"right"}},[a("c-image",{attrs:{w:"30px",h:"30px",mr:"1rem",src:"https://toppng.com/uploads/preview/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png"}}),a("p",{staticClass:"rating"},[e._v(e._s(t.rating))])],1)],1)],1)],1)})),a("c-box",{attrs:{mt:"5vh",p:"1rem"}},[a("div",{staticClass:"paginate"},[a("ve-pagination",{attrs:{total:e.count_review,"page-size":4,layout:["total","prev","pager","next","jumper"]},on:{"on-page-number-change":e.pageNumberChange}})],1)])],2)},c=[],o=a("f652"),n={components:{},data(){return{reviews:{},count_review:0,payload_url:""}},async created(){await this.fetchReview()},methods:{async fetchReview(){await o["a"].dispatch("fetchData"),console.log("getters review",this.reviews),this.reviews=o["a"].getters.reviews,console.log("getters review",this.reviews)},async pageNumberChange(e){this.payload_url=this.reviews.meta.links[e].url,await o["a"].dispatch("paginate",this.payload_url),this.reviews=o["a"].getters.reviews,this.count_review=this.reviews.meta.total,this.$forceUpdate()}}},v=n,w=(a("6889"),a("2877")),l=Object(w["a"])(v,r,c,!1,null,null,null),m=l.exports;const p=a("eb99");p(l,{CText:a("89e8").CText,CImage:a("89e8").CImage,CFlex:a("89e8").CFlex,CBox:a("89e8").CBox});var d={components:{Review:m},data(){return{reviews:{}}},async created(){await this.fetchDataReview()},methods:{async fetchDataReview(){await o["a"].dispatch("fetchData"),this.reviews=o["a"].getters.reviews}}},u=d,g=Object(w["a"])(u,s,i,!1,null,null,null);t["default"]=g.exports;const h=a("eb99");h(g,{CStack:a("89e8").CStack,CFlex:a("89e8").CFlex})},f652:function(e,t,a){"use strict";a("bc3a");var s=a("2b0e"),i=a("2f62"),r=a("ac20");s["default"].use(i["a"]),t["a"]=new i["a"].Store({state:{data:[],postsReview:[],reviewsByUserID:[],reviews_after_remove:[]},getters:{reviews:e=>e.data,getReviews:e=>e.postsReview,getReviewsByUserID:e=>e.reviewsByUserID},mutations:{setData(e,t){e.data=t},setReview(e,t){e.data=t},setReviewByUserID(e,t){e.reviewsByUserID=t},removeReview(e,t){e.reviews_after_remove=e.reviews_after_remove.map(e=>e.id!=t.id)}},actions:{async fetchData({commit:e}){let t=await r["c"].get("/api/reviews");e("setData",t)},async addReview({commit:e},t){let a={comment:t.comment,rating:t.rating,id:t.id},s=await r["c"].post("/api/reviews",a);return console.log("-----------",s),e("setReview",s.data),s},async paginate({commit:e},t){let a=r["c"].get(t);e("fetch",{res:a})},async getReviewByUserID({commit:e},t){let a=await r["c"].get("/api/reviews/get-review-by-user-id/"+t);e("setReviewByUserID",a.data)},async removeReview({commit:e},t){let a=await r["c"].delete("/api/reviews/"+t);e("removeReview",a.data)}},modules:{}})}}]);
//# sourceMappingURL=chunk-48a5a10a.7d652bd9.js.map