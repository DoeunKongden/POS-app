<template>
    <div class="q-pa-md">
        <q-btn label="Add Customer"
            rounded
            icon="add"
            color="primary"
            @click="inception = true" />
        <q-dialog v-model="inception"
            class="dialog1">
            <q-card class="form">
                <q-bar class="flex justify-end">
                    <q-btn dense
                        flat
                        icon="close"
                        v-close-popup
                        rounded
                        class="bg-red text-white">
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                </q-bar>
                <q-card-section>
                    <div class="text-h6 primary flex"
                        id="add-user">Add Customer</div>
                </q-card-section>
                <q-card-section>
                    <CustomerForm @close="close"
                        :updateDoc="updateDoc" />
                </q-card-section>
            </q-card>
        </q-dialog>
        <CustomerTable :items="customers"
            @delete="handleDelete"
            @update="handleEdit" />
    </div>
</template>

<script>
import CustomerForm from "../components/CustomerForm.vue";
import CustomerTable from "../components/CustomerTable.vue";
import moment from "moment"

export default {
    components: {
        CustomerForm,
        CustomerTable,
    },

    data() {
        return {
            inception: false,
            customers: [],
            updateDoc: null,
        };
    },

    mounted() {
        this.GetData();
    },

    methods: {
        close() {
            this.inception = false;
            this.GetData();
        },

        handleDelete(id) {
            Meteor.call('customer.delete',id,(err,result)=>{
                if(result){
                    this.GetData()
                }else{
                    console.log("couldn't delete")
                }
            })
        },

        handleEdit(doc) {
            this.inception = true;
            this.updateDoc = Object.assign({}, doc)
            this.updateDoc.dob = moment(doc.dob).format('YYYY-MM-DD');
        },

        GetData() {
            Meteor.call('customer.find', (err, result) => {
                if (result) {
                    this.customers = result
                } else {
                    console.log(err)
                }
            })
        }
    }
}

</script>

<style>
.form {
    width: 1200px;
    height: 800px;
}
</style>