<template>
    <div>
        
        <body>
            <div class="cards">
                
                <div class="services" v-for="index in jobs.slice(0,3)" :key="index.id">
                    
                    
                    <div class="content">
                        
                        <c-image class="pic" src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" />
                        <div>
                            <c-text  fontSize="2xl">{{ index.title }}</c-text>
                            <c-text >{{ index.description }}</c-text>
                            <c-text>{{ index.requirement }}</c-text>
                            <c-text fontSize="xl">ค่าจ้าง {{ index.compensation }} บาท/ชม</c-text>
                            <br>
                            <a @click='value(index.id)' :href="'#/job'" v-bind="index">รายละเอียดงาน</a>
                        </div>
                        
                    
                        

                    </div>
                </div>
            </div>
            
        </body>

        
        
    </div>
</template>

<script>
import JobApi from "@/store/JobApi.js"

export default {
    components: { 
         
    },
    data(){
        return{
            jobs:{},
            count_job:0,
            payload_url:"",
            job_id:0,
            jobId:[],
            id:0
        }
    },
    async created(){
        this.jobId = JSON.parse(localStorage.getItem('YourItem'));
        console.log("created jobId",this.jobId.id)
         await this.fetchJobs(this.jobId.id)
    },
    methods:{
        async fetchJobs(id){
            await JobApi.dispatch("fetchJobSuggest",id)
            this.jobs = JobApi.getters.getJobSuggest
            console.log("this.getJobSuggest")
            console.log(this.jobs)
        },
        // async pageNumberChange(pageIndex) {
        //     console.log(pageIndex)
        //     this.payload_url = this.jobs.meta.links[pageIndex].url
        //     await JobApi.dispatch("paginate" ,  this.payload_url )
        //     console.log("payload_url")
        //     console.log(this.payload_url)
        //     this.jobs = JobApi.getters.jobs
        //     this.count_job = this.jobs.meta.total
        //     this.$forceUpdate();

        // },
        // async value(id){
        //     await JobApi.dispatch("fetchJobById" ,  id )
        //     console.log("id")
        //     console.log(id)
        // }
        // async value(id){
        //     await JobApi.dispatch("fetchJobById" ,  id )
        //     console.log("id")
        //     console.log(id)
        // }
    },
    colors:{
        purple: "#9356F7"
    }
}
</script>

<style>
    .paginate{
        display: flex;
        flex-direction: row-reverse;
        margin-top: 50px;
    }
    .compensation{
        margin-top: 20px;
        font-size: 20px;
    }
    .title{
        margin-top: 10px;
    }
    .cards{
        display: inline-flex;
        flex-wrap: wrap;
        gap: 20px 10px;
        border: 1px solid red;

    }
    .services{
        width: 900px;
        /* border: 1px solid #c3c3c3; */
        align-items: center;
        flex: 2;
    }
    .content{
        flex: 1;
        margin: auto;
        padding: 40px;
        width: 400px;
        height: 700px;
        border: 2px solid black;
        border-radius: 4px;
        transition: all .3s ease;
        text-align: center;
    }
    .content:hover p{
        color: white;
    }
    .content:hover a{
        border-color: white;
        background: white;
    }
    .content:hover{
        border-color: #8C30F5;
        background: #8C30F5;
    }
    .content a{
        margin: 22px 0;
        background: black;
        color: white;
        text-decoration: none;
        border: 1px solid black;
        padding: 5px 20px;
        border-radius: 25px;
        transition: .3s ease;
        
        
        
    }
    .content a:hover{
        border-radius: 4px; 
    }
    .content:hover a{
        color: #8C30F5;
        
    }
    /* .content > *{
        flex: 1 1 100%;
    } */

</style>