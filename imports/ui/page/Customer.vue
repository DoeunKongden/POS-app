<template>
    <div class="q-pa-md">
        <q-btn label="Add Customer"
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

    mounted(){
        this.GetData();
    },

    methods: {

        close(doc) {
            if (doc._id) {
                //code update
                let index = this.customers.findIndex((obj) => {
                    return obj._id == doc._id;
                });
                this.customers[index].name = doc.name;
                this.customers[index].gender = doc.gender;
                this.customers[index].dob = doc.dob;
                this.customers[index].phone = doc.phone;
                this.customers[index].status = doc.status;
                this.customers[index].address = doc.address;

                this.inception = false;
            } else {
                //code insert
                this.customers.push(doc);
                this.inception = false;
            }
        },

        handleDelete(id) {
            console.log(id);
            let index = this.customers.findIndex((doc) => {
                return doc._id == id;
            });
            this.customers.splice(index, 1);
        },

        handleEdit(doc) {
            console.log(doc)
            this.inception = true;
            this.updateDoc = Object.assign({}, doc)
            this.updateDoc.dob = moment(doc.dob).format('YYYY-MM-DD');
        },

        GetData() {
            this.customers = [
                {
                    _id: '1',
                    name: 'Kongden',
                    gender: 'male',
                    dob: new Date(),
                    phone: '016760505',
                    status: 'active',
                    address: 'Phnom Penh'
                },
                {
                    _id: '2',
                    name: 'RonalDo',
                    gender: 'male',
                    dob: new Date(),
                    phone: '016760505',
                    status: 'active',
                    address: 'Phnom Penh'
                },
                {
                    _id: "3",
                    name:"Messi",
                    gender:"male",
                    dob: new Date(),
                    phone: "015467680",
                    status: "active",
                    address: "Sihanouk Viller",
                }
            ]
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