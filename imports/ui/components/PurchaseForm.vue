<template>
    <div>
        <q-card>
            <q-card-section>
                <div class="fit column justify-between">
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-select outlined
                            v-model="Purchase.suppliersId"
                            label="Suppliers"
                            :options="SuppliersOpt"
                            map-options
                            emit-value
                            option-value="_id"
                            option-label="company" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-select outlined
                            v-model="Purchase.itemId"
                            label="Item"
                            :options="ItemOpt"
                            map-options
                            emit-value
                            option-value="_id"
                            option-label="name" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            label="Cost"
                            type="number"
                            v-model.number="Purchase.cost" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            label="Price"
                            type="number"
                            v-model.number="Purchase.price" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            label="Quatity"
                            type="text"
                            v-model.number="Purchase.quantity" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            label="Date"
                            type="date"
                            v-model="Purchase.date" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <fieldset>
                            <label for="">Status:</label>
                            <q-radio v-model="Purchase.status"
                                val="active"
                                label="Active" />
                            <q-radio v-model="Purchase.status"
                                val="inactive   "
                                label="Inactive" />
                        </fieldset>

                        <div class="col-xs-12 col-sm-4 q-ma-sm text-center  ">
                            <q-btn color="primary"
                                :label="updatedDoc ? `Update` : `Submit`"
                                @click="handleSubmit" />
                        </div>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    props: {
        updatedDoc: {
            type: Object,
            default: null,
        }
    },
    mounted() {
        this.getSuppliersOpt();
        this.getItemOpt();

        if (this.updatedDoc) {
            this.Purchase = this.updatedDoc;
        }
    },

    data() {
        return {
            Purchase: {
                date: new Date(),
                suppliersId: null,
                itemId: null,
                cost: null,
                price: null,
                quantity: null,
                status: 'active',
                name: null,
                company: null,
            },

            SuppliersOpt: [],
            ItemOpt: [],
        }
    },
    methods: {
        handleSubmit() {
            this.Purchase.date = moment(this.Purchase.date, "YYYY-MM-DD").toDate();
            let indexSupplier = this.SuppliersOpt.findIndex((doc) => {
                return this.Purchase.suppliersId == doc._id;
            });
            let indexItem = this.ItemOpt.findIndex((doc) => {
                return this.Purchase.itemId == doc._id;
            });

            this.Purchase.name = this.ItemOpt[indexItem].name,
            this.Purchase.company = this.SuppliersOpt[indexSupplier].company,

                console.log("form:", this.Purchase)
            this.$emit("submit", this.Purchase)
        },

        getSuppliersOpt() {
            this.SuppliersOpt = [
                {
                    _id: "01",
                    company: "Coca-Company",
                    ownername: "Doeun Kongden",
                    phone: "016760505",
                    address: "KPS",
                    status: "active",
                },
                {
                    _id: "02",
                    company: "Pepsi-Company",
                    ownername: "Elon Musk",
                    phone: "8785098312",
                    address: "USA",
                    status: "active",
                }
            ]
        },

        getItemOpt() {
            this.ItemOpt = [
                {
                    _id: "01",
                    name: "Coca",
                    categoryName: "Drink",
                    categoryId: "01",
                    date: new Date(),
                    description: "coca soft drink emm emm",
                    status: "active",
                },
                {
                    _id: "02",
                    name: "Pepsi",
                    categoryName: "Drink",
                    categoryId: "02",
                    date: new Date(),
                    description: "Pepsi soft drink emm emm",
                    status: "inactive",
                }
            ]
        }


    }
}
</script>

<style>
</style>