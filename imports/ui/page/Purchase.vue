<template>
    <div class="q-ma-md">
        <q-btn color="primary"
            rounded
            icon="add"
            @click="handleAdd" />

        <q-dialog v-model="inception">
            <q-card class="my-card">
                <q-bar>
                    <q-btn icon="close"
                        v-close-popup
                        class="bg-red text-white">
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                </q-bar>
                <q-card-section>
                    <div class="text-h6 primary flex flex-center">
                        Add purchase
                    </div>
                </q-card-section>
                <q-card-section class="">
                    <PurchaseForm @submit="handleSubmit"
                        :updatedDoc="updatedDoc" />
                </q-card-section>
            </q-card>
        </q-dialog>
        <div>
            <PurchaseTable :purchase="purchase"
                @delete="handleDelete"
                @edit="handleEdit" />
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import PurchaseForm from '../components/PurchaseForm.vue'
import PurchaseTable from '../components/PurchaseTable.vue';

export default {
    mounted() {
        this.getData();
    },
    components: {
        PurchaseForm,
        PurchaseTable
    },
    data() {
        return {
            inception: false,
            purchase: [],
            updatedDoc: null,
        }
    },
    methods: {
        handleAdd() {
            this.inception = true;
            this.updatedDoc = null;
        },

        handleSubmit() {
            this.inception = false;
            this.getData()
        },


        handleDelete(id) {
            let index = this.purchase.findIndex((obj) => {
                return obj.id == id;
            });
            this.purchase.splice(index, 1)
        },

        handleEdit(data) {
            this.inception = true;
            this.updatedDoc = Object.assign({}, data)
        },
        getData() {
           Meteor.call('purchase.find',(err,result)=>{
            if(result){
                this.purchase = result
            }else{
                console.log("couldn't fint data")
            }
           })
        },
    }
}
</script>

<style>
.my-card {
    width: 200px;
}
</style>