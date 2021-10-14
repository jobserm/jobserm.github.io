<template>
    <div>
        <h1>Job card</h1>
        <body>
            <div class="cards">
                <div class="services" v-for="index in jobs.data" :key="index.id">
                    
                    <div class="content">
                        <c-image class="pic" src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" />
                        <c-box>
                            <c-text class="title" fontSize="2xl">{{ index.title }}</c-text>
                            <p class="description">{{ index.description }}</p>
                            <p class="requirement">{{ index.requirement }}</p>
                            <p class="compensation">ค่าจ้าง {{ index.compensation }} บาท/ชม</p>
                            <br>
                            <a href="#">รายละเอียดงาน</a>
                        </c-box>
                    
                        

                    </div>
                </div>
            </div>
        </body>
        
    </div>
</template>

<script>
import JobApi from "@/store/JobApi.js"

export default {
    components:{  },
    data(){
        return{
        jobs:{}
        }
    },
    async created(){
        await this.fetchJobs()
    },
    methods:{
        async fetchJobs(){
        await JobApi.dispatch("fetchJob")
        this.jobs = JobApi.getters.jobs
        console.log("this.jobs")
        console.log(this.jobs.data)
        }
    },
    colors:{
        purple: "#9356F7"
    }
}
</script>

<style>
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
    .content > *{
        flex: 1 1 100%;
    }

</style>