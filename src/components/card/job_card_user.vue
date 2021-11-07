<template>
    <div>
        <body>
            
            <!-- <div class="cards">
                <div class="services" v-for="index in jobs" :key="index.id">
                    <div class="content">
                        <c-image class="pic" src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" />
                        <div>
                            <c-text  fontSize="2xl">{{ index.title }}</c-text>
                            <c-text >{{ index.description }}</c-text>
                            <c-text>{{ index.requirement }}</c-text>
                            <c-text fontSize="xl">ค่าจ้าง {{ index.compensation }} บาท/ชม</c-text>
                            <br>
                            <a @click='value(index.id)' :href="'#/job'" v-bind="index" >รายละเอียดงาน</a>
                            
                            <a @click='Freelance(index.id)' :href="'#/freelance'" v-bind="index">ผู้ที่สนใจงาน</a>
                        </div>
                        
                    
                        

                    </div>
                </div>
            </div> -->

                  <c-flex>
        <c-input-group size="sm" class="input" rounded="md">
            <!-- <c-input-left-element><c-icon name="phone" color="gray.300" /></c-input-left-element> -->
            <c-input borderColor="black" ml="10rem" focus-border-color="indigo.200" w="30rem" mt="1.5rem" h="2.6rem" type="phone" placeholder="ค้นหา" />
        </c-input-group>

        <c-flex mt="1.5rem" ml="1rem">
            <!-- จังหวัด -->
          <c-select id="province" v-model="form.provinces">
              <option value="" style="display:none;" >จังหวัด</option>
              <option v-for="index in provinces.data" :key="index.id">{{ index.province }}</option>
          </c-select>
          <!-- ค่าตอบแทน -->
          <c-select id="type" v-model="form.compensation">
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
          <!-- สถานะการทำงาน -->
          <c-select id="type" v-model="form.working_status">
              <option value="" style="display:none;" >สถานะการทำงาน</option>
              <option>AVAILABLE</option>
              <option>IN PROGRESS</option>
              <option>FINISH</option>
          </c-select>
          <c-button w="15rem" @click="search(form.provinces)" variant-color="indigo" variant="outline">
              ค้นหา
          </c-button>
          <c-button ml="1rem" w="15rem" @click="fetchJobs()" variant-color="indigo" variant="outline">
              clear
          </c-button>

        </c-flex>
        </c-flex>

    <c-flex align="center">
    <div v-for="index in jobs.data" :key="index.id">
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
                    <c-button  mt="1rem" bgColor="black" color="white" size="lg" :_hover="{bg: 'pink.400'}">
                        <a @click='value(index.id)' :href="'#/job'" v-bind="index">รายละเอียดงาน</a>
                    </c-button>
                    <c-button mt="1rem" bgColor="black" color="white" size="lg" :_hover="{bg: 'pink.400'}">
                        <a @click='Freelance(index.id)' :href="'#/all-freelance-who-interested-in-job/'+index.id" v-bind="index">ผู้ที่สนใจงาน</a>
                    </c-button>
                    
                </c-flex>
            </c-box>
            
        </c-box>
    </div>
    </c-flex>
            
        </body> 
            <!-- <div class="paginate">
        <ve-pagination :total="count_job" :page-size="4" :layout="['total', 'prev', 'pager', 'next', 'jumper']" @on-page-number-change="pageNumberChange"></ve-pagination>
    </div>
        {{jobs}} -->
        
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
        }
    },
    async created(){
        console.log("fetch=================")
        this.fetchUser()
        await this.fetchJobs()
        this.getProvince()
        this.getCategories()
        

    },
    methods:{
                    async search(province){
      console.log(province)
      await JobApi.dispatch("fetchJobFromSearch", province)
      this.jobs = JobApi.getters.getJobFromSearch
      this.count_job = this.jobs.meta.total
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
         fetchUser(){
            this.user = UserApi.getters.user
            this.user_id = this.user.id
            console.log("this.user==>",this.user)
        },
        async fetchJobs(){
            await JobApi.dispatch("fetchJobUserId",this.user_id)
            this.jobs = JobApi.getters.getJobByUser
            // this.count_job = this.jobs.meta.total
            console.log("fetch=================",this.jobs)
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