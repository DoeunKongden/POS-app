<template>
    <div class="q-ma-md">
        <q-btn color="primary"
            rounded
            icon="add"
            @click="inception = true" />

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
                        :updatedDoc="updatedDoc"
                    />
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
        handleSubmit(form) {
            if(form.id){
                let index = this.purchase.findIndex((doc) => {
                    return doc._id == form.id;
                })
                this.purchase[index].name = form.name;
                this.purchase[index].cost = form.cost;
                this.purchase[index].price = form.price;
                this.purchase[index].quatity = form.quatity;
                this.purchase[index].date = moment(form.date).format("YYYY-MM-DD");
                this.purchase[index].status = form.status;
                this.purchase[index].company = form.company;

                this.updatedDoc = null;
                this.inception = false;
            }else{
                this.purchase.push(form);
                this.inception = false;
            }
        },


        handleDelete(id) {
            let index = this.purchase.findIndex((obj) => {
                return obj.id == id;
            });
            this.purchase.splice(index,1)
        },

        handleEdit(data) {
            this.inception = true;
            this.updatedDoc = Object.assign({},data)
        },
        getData() {
            this.purchase = [
               {
                 name:"Pizza",
                 cost:100,
                 price:10,
                 quantity:100,
                 date: moment(this.date).format("YYYY-MM-DD"),
                 status:"active",
               },
               {
                 name:"Hamburger",
                 cost:100,
                 price:10,
                 quantity:100,
                 date: moment(this.date).format("YYYY-MM-DD"),
                 status:"active",
               },
               {
                 name:"Sandwhich",
                 cost:100,
                 price:10,
                 quantity:100,
                 date: moment(this.date).format("YYYY-MM-DD"),
                 status:"active",
               },
            ]
        },
    }
}
</script>

<style>
.my-card {
    width: 200px;
}
</style>