<template>
    <div class="q-ma-md">
        <q-btn color="primary"
            rounded
            icon="add"
            label="Add Supplier"
            @click="inception = true" />

        <q-dialog v-model="inception">
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
                    <div class="text-h6 primary flex">
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

    mounted(){
        this.getdata();
    },

    methods: {
        handleInput(formSupplier) {
            if (formSupplier.id) {
                let index = this.suppliers.findIndex((obj)=>{
                    return obj.id == formSupplier.id;
                })
                this.suppliers[index].companyName = formSupplier.companyName;
                this.suppliers[index].ownerName = formSupplier.ownerName;
                this.suppliers[index].phone = formSupplier.phone;
                this.suppliers[index].address = formSupplier.address;
                this.suppliers[index].status = formSupplier.status;


                this.updatedDoc = null,
                this.inception = false;
            } else {
                this.suppliers.push(formSupplier);
                console.log(formSupplier)
                this.inception = false;
            }
        },

        handleDelete(id) {
            let index = this.suppliers.findIndex((doc) => {
                return doc.id == id;
            });
            this.suppliers.splice(index, 1)
        },

        handleUpdate(data) {
            this.inception = true;
            this.updatedDoc = Object.assign({}, data)
        },

        getdata(){
            this.suppliers = [
                                {
                    id: "1",
                    companyName: "Somnab",
                    ownerName: "Somnab CEO",
                    phone: "016760505",
                    address: "phnom penh",
                    status: "active"
                },
                {
                    id: "2",
                    companyName: "FWD",
                    ownerName: "FWD CEO",
                    phone: "016760505",
                    address: "phnom penh",
                    status: "active"
                },
                {
                    id: "3",
                    companyName: "SprintSea",
                    ownerName: "SprinSea CEO",
                    phone: "016760505",
                    address: "phnom penh",
                    status: "active"
                },
            ]
        }
    }

}
</script>

<style>
.my-card{
    width: 100%;
}
</style>