<template>
<div>
    <c-text fontSize="4xl"> filther ตอน search ไม่เอางานของ user ที่ login</c-text>

        <c-text fontSize="4xl" ml="11%" mt="2rem">{{ "งานทั้งหมด" }}</c-text>
        <c-flex>
        <c-input-group size="sm" class="input" rounded="md">
            <!-- <c-input-left-element><c-icon name="phone" color="gray.300" /></c-input-left-element> -->
            <c-input borderColor="black" ml="17rem" focus-border-color="indigo.200" w="60rem" mt="1.5rem" h="2.6rem" type="phone" placeholder="ค้นหา" v-model="title"/>
        </c-input-group>

        <c-flex mt="1.5rem" ml="1rem">
            <!-- จังหวัด -->
          <c-select id="province" v-model="form.provinces">
              <option value="" style="display:none;" >จังหวัด</option>
              <option v-for="index in provinces.data" :key="index.id">{{ index.province }}</option>
          </c-select>
          <!-- ค่าตอบแทน -->
          <c-select ml="3"  id="type" v-model="form.compensation">
              <option value="" style="display:none;" >  ค่าตอบแทน</option>
              <option>3,000 - 4,000</option>
              <option>4,100 - 5,000</option>
              <option>5,100 - 6,000</option>
              <option>6,100 - 7,000</option>
              <option>7,100 - 8,000</option>
              <option>8,100 - 9,000</option>
              <option>9,100 - 10,000</option>
              <option>11,000 - 20,000</option>
              <option>21,000 - 40,000</option>
              <option>41,000 - 60,000</option>
          </c-select>
          <c-button ml="10" w="15rem" @click="search(title,form.provinces,form.compensation,form.category)" variant-color="indigo" variant="outline">
              ค้นหา
          </c-button>
          <c-button ml="1rem" w="15rem" @click="clear()" bg="#F22BB2">
              clear
          </c-button>

        </c-flex>
        </c-flex>


        <c-text fontSize="5xl" align="center" color="red" mt="4rem" v-if="this.count_job === -1">ไม่มีงานที่ค้นหา</c-text>

    <c-simple-grid :columns="[1, 1, 1, 6]" spacing="10" m="10">
    <div v-for="index in paginated" :key="index.id">
        <c-box mt="4rem" m="2rem" maxW="sm" border-width="3px" rounded="lg" overflow="hidden" border-color="black" :_hover="{bg: 'indigo.100' , borderColor:'indigo'}" fontSize="xl">
            
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

    <!-- paginate -->
    <div class="paginate">
        <c-flex mr="3%" mb="5rem">
            <c-button w="100px" @click="prev"> Prev </c-button>
            <c-text fontSize="4xl"> {{ current }}</c-text>
            
            <c-button bg="#F1E4FF" w="100%" @click="next()"> Next </c-button>
        </c-flex>
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
            title:"",
            jobs:{},
            JobA:[],
            count_job:0,
            payload_url:"",
            job_id:0,
            provinces: [],
            categories: [],
            compensation_array: [],
            less:0,
            most:0,
            user_id:0,
            user:[],
            pageIndex:1,
            current: 1,
            pageSize: 6,
        }
    },
    async created(){
        console.log("fetch=================")
        await this.fetchUser()
        await this.fetchJobs()
        
        console.log("fetch=================",this.user_id)
        this.getProvince()
        this.getCategories()
    },
    computed: {
            indexStart() {
            return (this.current - 1) * this.pageSize;
            },
            indexEnd() {
            return this.indexStart + this.pageSize;
            },
            paginated() {
            return this.JobA[0].slice(this.indexStart, this.indexEnd);
            }
        },
    methods:{
        prev() {
            if(this.current > 1)
                this.current--;
            },
            next() {
            if(this.current < this.jobs.length/6)
                this.current++;

            },
         fetchUser(){
            this.user = UserApi.getters.user
            this.user_id = this.user.id
            console.log("this.user==>",this.user)
        },
            async search(title,province,compensation,category){
                if(compensation !== "")
                {
                        this.compensatsion_array = compensation.split(" - ")
                        console.log(this.compensatsion_array)
                        this.less = Number(this.compensatsion_array[0].replace(",",''))
                        this.most = Number(this.compensatsion_array[1].replace(",",''))
                        this.compensatsion_array[0] = this.less
                        this.compensatsion_array[1] = this.most
                        console.log(this.compensatsion_array)

                        let payload={
                            title : `%`+title+`%`,
                            province : `%`+province+`%`,
                            category : `%`+category+`%`,
                            compensatsion_array : this.compensatsion_array,
                            check: 0
                                }

                        console.log("payload",payload)
                        await JobApi.dispatch("fetchJobFromSearch", payload)
                }
                else{
                    let payload={
                            title : `%`+title+`%`,
                            province : `%`+province+`%`,
                            category : `%`+category+`%`,
                            check: 1
                                }

                        console.log(title)
                        await JobApi.dispatch("fetchJobFromSearch", payload)
                }

      
        this.jobs = JobApi.getters.getJobFromSearch
        this.JobA.length = 0
        this.JobA.push(this.jobs)
        console.log("jobs",this.jobs.length)

        this.count_job = this.jobs.length
        console.log("count_job",this.count_job)
        if(this.count_job == 0)
        {
            this.count_job = -1
        }
        this.current = 1;
        console.log("count_job",this.count_job)
        this.$forceUpdate()
      

    },
    async getProvince() {
      let res = await Axios.get(`https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces`);
      this.provinces = res.data;
    },
    async getCategories() {
      await CategoryStore.dispatch('fetchData')
      this.categories = CategoryStore.getters.getCategories
    },
    async fetchJobs(){
        let id = this.user_id
        await JobApi.dispatch("fetchJobAvaliableNotLogedIn",id)
        console.log("this.JobA",this.JobA)
        this.jobs = JobApi.getters.getAvaJobNotLogIn
        this.JobA.push(this.jobs)
        console.log("this.JobA",this.JobA)
        console.log("fetchJobAVA")
        // console.log("this.jobs")
        // console.log(this.jobs.data)
        // console.log("count_job")
        // console.log(this.count_job)
        },
        async value(id){
            await JobApi.dispatch("fetchJobById" ,  id )
            // console.log("id")
            // console.log(id)
        },
        async clear(){
            let id = this.user_id
            await JobApi.dispatch("fetchJobAvaliableNotLogedIn",id)
            this.jobs = JobApi.getters.getAvaJobNotLogIn
            this.form.provinces = ""
            this.form.category = ""
            this.form.compensation = ""
            this.form.working_status = ""
            this.title = ""
            this.current = 1;
            this.JobA.length = 0
            this.JobA.push(this.jobs)
            this.count_job = this.jobs.length
            console.log("this.pageIndex",this.pageIndex)
            this.$forceUpdate();
        },
        
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
    

</style>