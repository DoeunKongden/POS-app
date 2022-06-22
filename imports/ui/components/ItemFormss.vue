<template>
    <div>
        <q-card class="q-ma-md">
            <q-card-section>
                <div class="fit column justify-between">
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            v-model="items.name"
                            label="Name" />
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-select outlined
                            v-model="items.categoryId"
                            label="Category"
                            :options="categoryOpt"
                            map-options
                            emit-value
                            option-value="_id"
                            option-label="name" />
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            v-model="items.date"
                            type="date"
                            label="date" />
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            label="description"
                            v-model="items.description" />
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <fieldset>
                            <label for="">Status : </label>
                            <q-radio v-model="items.status"
                                val="active"
                                label="Active" />

                            <q-radio v-model="items.status"
                                val="inactive"
                                label="Inactive" />
                        </fieldset>
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-btn color="primary"
                            :label="updateDoc ? `Update` : `Submit`"
                            @click="handleSubmit"></q-btn>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import moment from 'moment'


export default {
    data() {
        return {
            items: {
                name: null,
                date: moment(new Date("YYYY-MM-DD")),
                description: null,
                categoryId: null,
                category:null,
            },

            categoryOpt: [

            ]
        }
    },
    
    props: {
        updateDoc: {
            type: Object,
            default: null,
        }
    },

    mounted() {
        this.getCategory();

        if (this.updateDoc) {
            this.items = this.updateDoc
        }
    },



    methods: {
        handleSubmit(e) {
            //Validation
            //submitting data
            this.items.date = moment(this.items.date, 'YYYY-MM-DD').toDate;
            console.log('items:', this.items);
            this.$emit("close", this.items);
            let index = this.categoryOpt.findIndex((doc) => {
                return this.items.categoryId == doc._id
            })
            this.items.category = this.categoryOpt[index].name
        },

        getCategory() {
            this.categoryOpt = [
                {
                    _id: "01",
                    name: "soft-drink",
                    date: new Date(),
                    description: 'Soft-Drink ',
                },
                {
                    _id: "02",
                    name: "hard-drink",
                    date: new Date(),
                    description: 'hard-Drink ',
                },
                {
                    _id: "03",
                    name: "Football player",
                    date: new Date(),
                    description: 'sth sth',
                },
            ]
        }
    }
}
</script>

<style>
</style>