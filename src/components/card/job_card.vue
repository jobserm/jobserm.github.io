<template>
<div>

         <c-text fontSize="4xl" ml="10rem" mt="2rem">{{ "งานทั้งหมด" }}</c-text>
      <c-flex>
        <c-input-group size="sm" class="input" rounded="md">
            <!-- <c-input-left-element><c-icon name="phone" color="gray.300" /></c-input-left-element> -->
            <c-input borderColor="black" ml="10rem" focus-border-color="indigo.200" w="30rem" mt="1.5rem" h="2.6rem" type="phone" placeholder="ค้นหา" v-model="title"/>
        </c-input-group>

        <c-flex mt="1.5rem" ml="1rem">
            <!-- จังหวัด -->
          <c-select id="province" v-model="form.provinces">
              <option value="" style="display:none;" >จังหวัด</option>
              <option v-for="index in provinces.data" :key="index.id">{{ index.province }}</option>
          </c-select>
          <!-- ประเภทงาน-->
          <c-select id="type" v-model="form.category">
              <option value="" style="display:none;" >ประเภทงาน</option>
              <option v-for="index in categories" :key="index.id">{{ index.category_name }}</option>
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
          <c-button ml="1rem" w="15rem" @click="search(title,form.provinces)" variant-color="indigo" variant="outline">
              ค้นหา
          </c-button>
          <c-button ml="1rem" w="15rem" @click="clear()" variant-color="indigo" variant="outline">
              clear
          </c-button>

        </c-flex>
        </c-flex>


        <c-text fontSize="5xl" align="center" color="red" mt="4rem" v-if="this.count_job === -1">ไม่มีงานที่ค้นหา</c-text>

    <c-flex align="center">
    <div v-for="index in jobs.data" :key="index.id">
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
                        {{ index.province }}  &bull; {{ index.baths }} ประเภท
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

                <c-flex jusify="center">
                    <c-button  mt="1rem" bgColor="black" color="white" size="lg" :_hover="{bg: 'pink.400'}">
                        <a @click='value(index.id)' :href="'#/job'" v-bind="index">รายละเอียดงาน</a>
                    </c-button>
                </c-flex>
            </c-box>
        </c-box>
    </div>
    </c-flex>
    <div class="paginate">
        <ve-pagination :total="count_job" :page-size="4" :layout="['total', 'prev', 'pager', 'next', 'jumper']" @on-page-number-change="pageNumberChange"></ve-pagination>
    </div>
</div>
</template>

<script>
import JobApi from "@/store/JobApi.js"
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
            count_job:0,
            payload_url:"",
            job_id:0,
            provinces: [],
            categories: [],
        }
    },
    async created(){
        console.log("fetch=================")
        await this.fetchJobs()
        console.log("fetch=================",this.jobs.data)
        this.getProvince()
        this.getCategories()
    },
    methods:{
            async search(title,province){
      
      title = `%`+title+`%`
      province = `%`+province+`%`

      console.log(title)
      await JobApi.dispatch("fetchJobFromSearch", {title,province})
      this.jobs = JobApi.getters.getJobFromSearch
      this.count_job = this.jobs.meta.total
      if(this.count_job == 0)
        this.count_job = -1
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
        },
        async clear(){
            await JobApi.dispatch("fetchJob")
            this.jobs = JobApi.getters.jobs
            this.count_job = this.jobs.meta.total
            this.form.provinces = ""
            this.form.category = ""
            this.form.compensation = ""
            this.form.working_status = ""
            this.title = ""
            // console.log("this.jobs")
            // console.log(this.jobs.data)
            // console.log("count_job")
            // console.log(this.count_job)
        },
        
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