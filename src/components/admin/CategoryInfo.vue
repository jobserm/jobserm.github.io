<template>
    <!-- <c-stack
    wrap="wrap"
    rounded="0.3rem"
    p="3"
    >
        <c-flex>
            <c-stack lineHeight="2" pl="5">
                <c-text v-if="editCategory === false" as="h3" fontSize="3xl" textAlign="center" pb="1">{{ category.category_name }}</c-text>
                <c-flex v-if="editCategory">
                    <c-input v-bind:value="this.$props.category.category_name" />
                    <c-button>Submit</c-button>
                </c-flex>
                <c-button bgColor="yellow.300" @click="handleEditCategory">แก้ไข</c-button>
                <c-button bgColor="red.300" @click="createAlert">ลบหมวดหมู่นี้</c-button>
            </c-stack>
        </c-flex>
    </c-stack> -->
    <div>
        <c-flex flexDirection="column">
            <c-box v-if="!editCategory && !addCategory">
                <c-text fontSize="2xl">
                    Category Name: {{ category.category_name }}
                </c-text>
            </c-box>
            <c-box v-if="editCategory">
                <c-text fontSize="2xl">Category Name: </c-text>
                <c-input v-model="category.category_name"/>        
            </c-box>
            <c-box v-if="addCategory">
                <c-text fontSize="2xl">เพิ่มหมวดหมู่ใหม่</c-text>
                <c-input v-model="newCategory"/>        
            </c-box>
            <c-box mt="1rem">
                <c-text v-if="showEditBtn" fontSize="xl">
                    จำนวนงานในหมวดหมู่: {{ category.job_count }}
                </c-text>
                <c-text v-if="addCategory" fontSize="xl">
                    จำนวนงานในหมวดหมู่: 0
                </c-text>
            </c-box>
            <c-box v-if="!editCategory && !addCategory" width="25%" my="1rem">
                <c-button mr="1rem" width="40%" bgColor="yellow.300" @click="handleAddCategory">เพิ่มหมวดหมู่ใหม่</c-button>
                <c-button v-if="showEditBtn" width="25%" bgColor="yellow.300" @click="handleEditCategory">แก้ไข</c-button>
            </c-box>
            <c-flex v-if="editCategory" width="25%" my="1rem" justify="space-between">
                <c-button width="25%" bgColor="yellow.300" @click="handleSubmit">บันทึก</c-button>
                <c-button width="25%" bgColor="yellow.300" @click="handleCancelButton">ยกเลิก</c-button>
                <c-button width="30%" bgColor="red.300" @click="createAlert">ลบหมวดหมู่นี้</c-button>
            </c-flex>
            <c-flex v-if="addCategory" width="25%" my="1rem">
                <c-button width="25%" mr="1rem" bgColor="yellow.300" @click="handleSubmitAddCategory">บันทึก</c-button>
                <c-button width="25%" bgColor="yellow.300" @click="handleCancelButton">ยกเลิก</c-button>
            </c-flex>
        </c-flex>
    </div>
</template>

<script>
import CategoryStore from "../../store/CategoryStore"
export default {
    props: ['category', 'showEditBtn'],
    data() {
        return {
            editCategory: false,
            categoryEdited: "",
            addCategory: false,
            newCategory: "",
        }
    },
    methods: {
        async createAlert() {
            this.$swal({
                title: "ยืนยันการลบ",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                    this.handleDelete(this.$props.category.id)
                this.$swal("ลบเสร็จสิ้น", {
                icon: "success",
                });
                } else {
                    this.$swal("ยกเลิกการทำรายการ");
                }
                });
        },
        handleEditCategory() {
            this.editCategory = true
            this.addCategory = false
        },
        async handleSubmit() {
            this.categoryEdited = this.$props.category.category_name
            let body = {
                id: this.$props.category.id,
                category_name: this.categoryEdited
            }

            await CategoryStore.dispatch('editCategory', body)
            await this.$root.$refs.categoryTable.fetchCategories()
            this.editCategory = false
        },
        handleCancelButton() {
            this.editCategory = false
            this.addCategory = false
            this.showEditBtn = true
        },
        async handleDelete(id) {
            await CategoryStore.dispatch('removeCategory', id)
            await this.$root.$refs.categoryTable.fetchCategories()
            this.$root.$refs.jobInfo.clearCategory()
            this.editCategory = false
        },
        handleAddCategory() {
            this.addCategory = true
            this.editCategory = false
            this.showEditBtn = false
        },
        async handleSubmitAddCategory() {
            let body = {
                category_name: this.newCategory
            }
            await CategoryStore.dispatch('addCategory', body)
            await this.$root.$refs.categoryTable.fetchCategories()
            this.editCategory = false
            this.addCategory = false
            this.showEditBtn = false
            this.newCategory = ""
        }
    }
}
</script>

<style>

</style>