<template>
    <!-- <div>
        <body>
            <div class="cards">
                <div class="services" v-for="index in jobs.data" :key="index.id">
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
        <div class="paginate">
            <ve-pagination :total="count_job" :page-size="4" :layout="['total', 'prev', 'pager', 'next', 'jumper']" @on-page-number-change="pageNumberChange"></ve-pagination>
        </div>
        
    </div> -->
<div>
    <c-flex justify="space-between" m="auto" mb="2rem">
    <c-box mt="4rem"  maxW="sm" border-width="3px" rounded="lg" overflow="hidden">
    <div v-for="index in jobs.data" :key="index.id">
    <c-image :src="property.imageUrl" :alt="property.imageAlt" />
    <c-box p="6">
        <c-box d="flex" align-items="baseline">
            <c-badge rounded="full" px="2" variant-color="green">
            New
            </c-badge>
        </c-box>
        <c-box
            mt="1"
            font-weight="semibold"
            as="h4"
            line-height="tight"
            is-truncated
        >
            {{ index.title }}
        </c-box>

        <c-box>
            {{ property.description }}
        </c-box>

        <c-box
            mt="1.5rem"
            font-weight="semibold"
            as="h4"
            line-height="tight"
            is-truncated
        >
            {{ "คุณสมบัติที่ต้องการ" }}
        </c-box>
        <c-box>
          {{ property.requirment }} 
        </c-box>

        <c-box
            mt="1.5rem"
            font-weight="semibold"
            as="h4"
            line-height="tight"
            is-truncated
        >
        {{ "ค่าจ้าง" }}
        </c-box>
        <c-box>
            {{ index.compensation }} บาท/ชม
        </c-box>

        <c-button mt="1rem" bgColor="black" color="white">
            <a @click='value(index.id)' :href="'#/job'" v-bind="index">รายละเอียดงาน</a>
        </c-button>
    </c-box>
    </div>
    </c-box>
    </c-flex>
    <div class="paginate">
        <ve-pagination :total="count_job" :page-size="4" :layout="['total', 'prev', 'pager', 'next', 'jumper']" @on-page-number-change="pageNumberChange"></ve-pagination>
    </div>
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
            property: {
            imageUrl: "	https://www.seekpng.com/png/full/560-5609130_free-boss-baby-pngs-boss-baby-no-background.png",
            description: "เลี้ยงเด็กทารก 2 คน ว่างตลอด 24 ชม. ใจดี ไม่เหวี่ยง ซื่อสัตย์",
            title: "Modern home in city center in the heart of historic Los Angeles",
            requirment: "- เพศหญิง \n มีประสบการณ์มากกว่า 5 ปี",
        }
        }
    },
    async created(){
        console.log("fetch=================")
        await this.fetchJobs()
        console.log("fetch=================",this.jobs.data)
    },
    methods:{
        async fetchJobs(){
        await JobApi.dispatch("fetchJob")
        this.jobs = JobApi.getters.jobs
        this.count_job = this.jobs.meta.total
        // console.log("this.jobs")
        // console.log(this.jobs.data)
        // console.log("count_job")
        // console.log(this.count_job)
        },
        async pageNumberChange(pageIndex) {
            console.log(pageIndex)
            this.payload_url = this.jobs.meta.links[pageIndex].url
            await JobApi.dispatch("paginate" ,  this.payload_url )
            console.log("payload_url")
            console.log(this.payload_url)
            this.jobs = JobApi.getters.jobs
            this.count_job = this.jobs.meta.total
            this.$forceUpdate();

        },
        async value(id){
            await JobApi.dispatch("fetchJobById" ,  id )
            // console.log("id")
            // console.log(id)
        }
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
        margin-top: 25px;
        display: inline-flex;
        flex-wrap: wrap;
        gap: 20px 10px;

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