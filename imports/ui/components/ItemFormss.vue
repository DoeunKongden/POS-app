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
                            v-model="items.category"
                            label="Category"
                            :options="categoryOpt"
                            map-options
                            emit-value
                            option-value="name"
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
                category: null,
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
            if (this.updateDoc) {
                Meteor.call('item.update',this.items,(err,result)=>{
                    if(result){
                        this.$emit("close")
                    }else{
                        console.log("Error")
                    }
                })
            } else {
                Meteor.call('item.insert', this.items, (err, result) => {
                    if (result) {
                        console.log('items:', this.items);
                        this.$emit("close", this.items);
                    } else {
                        console.log("could not insert data")
                    }
                })
            }
        },

        getCategory() {
            Meteor.call('category.find', (err, result) => {
                if (result) {
                    this.categoryOpt = result;
                } else {
                    console.log("Could not find category data")
                }
            })
        }
    }
}
</script>

<style>
</style>