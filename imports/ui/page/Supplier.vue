<template>
    <div class="q-ma-md">
        <q-btn color="primary"
            rounded
            icon="add"
            label="Add Supplier"
            @click="inception = true" />

        <q-dialog 
        v-model="inception"
        :maximized="maximizedToggle=true"
        transition-show="slide-up"
        transition-hide="slide-down"
        >
            <q-card class="my-card">
                <q-bar class="flex justify-end">
                    <q-btn rounded
                        icon="close"
                        v-close-popup
                        class="bg-red text-white">
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                </q-bar>
                <q-card-section>
                    <div class="text-h6 primary flex justify-center">
                        Add Supplier
                    </div>
                </q-card-section>
                <q-card-section>
                    <SupplierForm @submit="handleInput"
                        :updatedDoc="updatedDoc" />
                </q-card-section>
            </q-card>
        </q-dialog>

        <SupplierTable :suppliers="suppliers"
            @delete="handleDelete"
            @update="handleUpdate" />
    </div>
</template>

<script>
import SupplierForm from "../components/SupplierForm.vue";
import SupplierTable from "../components/SupplierTable.vue";

export default {
    components: { SupplierForm, SupplierTable },

    data() {
        return {
            inception: false,
            updatedDoc: null,
            suppliers: [

            ],
        };
    },

    mounted() {
        this.getdata();
    },

    methods: {
        handleInput(formSupplier) {
            console.log(formSupplier)
            this.inception = false;
            this.getdata()
        },

        handleDelete(id) {
            Meteor.call('supplier.delete',id,(err,result)=>{
                if(result){
                    this.getdata()
                }else{
                    console.log(err)
                }
            })
        },

        handleUpdate(data) {
            this.inception = true;
            this.updatedDoc = Object.assign({}, data)
        },

        getdata() {
           Meteor.call('supplier.find',(err,result)=>{
            if(result){
                this.suppliers = result;
            }
           })
        }
    }

}
</script>

<style>
.my-card {
    width: 100%;
}
</style>