<template>
    <div>
        <body>
            <c-simple-grid :columns="[1, 1, 1, 3]" spacing="10" mr="10rem">
            <div v-for="index in jobs.slice(0,3)" :key="index.id">
        <c-box mt="4rem" m="2rem" maxW="sm" border-width="2px" rounded="lg" overflow="hidden" border-color="black" :_hover="{bg: 'indigo.100' , borderColor:'indigo'}" fontSize="xl">
            
            <c-image src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" alt="cat" />
            <c-box p="6">
                <c-box d="flex" align-items="baseline">
                    <c-badge rounded="full" px="5" variant-color="green" font-size="0.75em" v-if="index.working_status === 'AVAILABLE'">
                        AVALIABLE
                    </c-badge>
                    <c-badge rounded="full" px="5" variant-color="yellow" font-size="0.75em" v-if="index.working_status === 'IN PROGRESS'">
                        IN PROGRESS
                    </c-badge>
                    <c-badge rounded="full" px="5" variant-color="red" font-size="0.75em" v-if="index.working_status === 'FINISH'">
                        FINISH
                    </c-badge>
                    <c-box
                        color="gray.500"
                        font-weight="semibold"
                        letter-spacing="wide"
                        font-size="0.75em"
                        text-transform="uppercase"
                        ml="2"
                        >
                        {{ index.province }}  &bull; {{ index.provinces }} 
                    </c-box>
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
                    {{ index.description }}
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
                    {{ index.requirement }} 
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

                    {{ index.user_id }}
                <c-flex jusify="center">
                    <c-button  mt="1rem" bgColor="black" color="white" size="lg" :_hover="{bg: 'pink.400'}">
                        <a @click='value(index.id)' :href="'#/job'" v-bind="index">รายละเอียดงาน</a>
                    </c-button>
                </c-flex>
            </c-box>
        </c-box>
    </div>
    </c-simple-grid>
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
        async value(id){
            await JobApi.dispatch("fetchJobById" ,  id )
            console.log("id")
            console.log(id)
            this.$forceUpdate()
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
    /* .content > *{
        flex: 1 1 100%;
    } */

</style>