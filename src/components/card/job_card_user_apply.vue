<template>
    <div>
        <loading v-if="isLoading" />
        <div v-if="!isLoading">
        <body>
            <c-flex>
                <c-flex mt="1.5rem" ml="1rem">
                    <!-- สถานะการทำงาน -->
                    <c-select mt="2rem" ml="98rem" id="type" v-model="form.working_status">
                        <option value="" style="display:none;" >สถานะการทำงาน</option>
                        <option>AVAILABLE</option>
                        <option>IN PROGRESS</option>
                        <option>FINISH</option>
                    </c-select>
                    <!-- ค้นหา -->
                    <c-button ml="10" mt="2rem" w="20rem" @click="search(form.working_status)" variant-color="indigo" variant="outline">
                        ค้นหา
                    </c-button>
                    <!-- clear -->
                    <c-button mt="2rem" ml="1rem" w="20rem" @click="fetchJobs()"  bg="#F22BB2">
                        clear
                    </c-button>
                </c-flex>
            </c-flex>

            <c-text fontSize="5xl" align="center" color="red" mt="4rem" v-if="this.jobs.length === 0">ยังไม่มีงานที่คุณสนใจ</c-text>
            <c-text fontSize="5xl" ml="4rem" color="indigo.400" mt="4rem" >งานที่คุณสมัครไป</c-text>
    <c-simple-grid :columns="[1, 1, 1, 6]" spacing="8" m="10">
    <div v-for="index in jobs" :key="index.id">
        <c-box mt="4rem"  maxW="sm" border-width="4px" rounded="lg" overflow="hidden" border-color="black" :_hover="{bg: 'indigo.100' , borderColor:'indigo'}" fontSize="xl">
            
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
                        {{ index.province }}  &bull; {{ index.category_name[0].category_name }} 
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
                    <c-button mt="2rem" m="3" bgColor="black" color="white" size="lg" :_hover="{bg: 'pink.400'}">
                        <a @click='value(index.id)' :href="'#/JobInfoApply'" v-bind="index">รายละเอียดงาน</a>
                    </c-button>

                    <div v-if="index.working_status !== 'IN PROGRESS' && index.working_status !== 'FINISH'">
                   

                    </div>
                    
                </c-flex>
            </c-box>
            
        </c-box>
    </div>
    </c-simple-grid>
    </body> 
    </div>
    </div>
</template>

<script>
import JobApi from "@/store/JobApi.js"
import UserApi from "@/store/AuthUser.js"
import Axios from "axios";
import CategoryStore from "@/store/CategoryStore";
export default {
    components: { 
    },
    data(){
        return{
            form: {
                provinces: "",
                category:"",
                compensation:"",
                working_status:"",
            },
            jobs:[],
            count_job:0,
            payload_url:"",
            job_id:0,
            user:[],
            user_id:0,
            provinces: [],
            categories: [],
            isLoading: true,
        }
    },
    async created(){
        console.log("fetch=================")
        this.fetchUser()
        await this.fetchJobs()
        this.getProvince()
        this.getCategories()
        this.isLoading = false
    },
    methods:{
        async search(working_status){
        let payload={
            user_id : this.user_id,
            working_status : working_status
        }
        await JobApi.dispatch("fetchJobUserApply", payload)
        this.jobs = JobApi.getters.getJobsThatUserApply
        // this.count_job = this.jobs.meta.total
        console.log("fetch=================",this.jobs)

    },
    async getProvince() {
        let res = await Axios.get(`https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces`);
        this.provinces = res.data;
    },
    async getCategories() {
        await CategoryStore.dispatch('fetchData')
        this.categories = CategoryStore.getters.getCategories
    },
    fetchUser(){
        this.user = UserApi.getters.user
        this.user_id = this.user.id
        console.log("this.user==>",this.user)
    },
    async fetchJobs(){
        let payload={
            user_id : this.user_id,
            working_status : "ALL"
        }
        await JobApi.dispatch("fetchJobUserApply", payload)
        this.jobs = JobApi.getters.getJobsThatUserApply
        // this.count_job = this.jobs.meta.total
        console.log("fetch=================",this.jobs)
        this.form.working_status = ""
        // console.log("this.jobs")
        // console.log(this.jobs.data)
        // console.log("count_job")
        // console.log(this.count_job)
    },
        // async pageNumberChange(pageIndex) {
        //     console.log(pageIndex)
        //     this.payload_url = this.jobs.meta.links[pageIndex].url
        //     await JobApi.dispatch("paginate_post" ,  this.payload_url)
        //     console.log("payload_url")
        //     console.log(this.payload_url)
        //     this.jobs = JobApi.getters.jobs
        //     this.count_job = this.jobs.meta.total
        //     this.$forceUpdate();
        // },
    async value(id){
        await JobApi.dispatch("fetchJobById" ,  id )
        // console.log("id")
        // console.log(id)
    },
    async Freelance(id){
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
        /* margin-top: 50px; */
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
    .content > *{
        flex: 1 1 100%;
    }
</style>