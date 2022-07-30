<template>
    <div>
        <q-card class="q-ma-md">
            <q-card-section>
                <div class="fit column justify-between">
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            v-model="categories.name"
                            label="Name" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            v-model="categories.date"
                            type="date"
                            label="date" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            v-model="categories.description"
                            label="Description" />
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
    props: {
        updateDoc: {
            type: Object,
            default: null,
        }
    },

    mounted() {
        if (this.updateDoc) {
            this.categories = this.updateDoc
        }
    },

    data() {
        return {
            categories: {
                name: null,
                date: new Date(),
                description: null,
            }
        }
    },

    methods: {
        handleSubmit() {
            this.categories.date = moment(this.categories.date, 'YYYY-MM-DD').toDate;
            if (this.updateDoc) {
                Meteor.call('category.update',this.categories,(err,result)=>{
                    if(result){
                        this.$emit("close");
                    }else{
                        console.log('err')
                    }
                })
            } else {
                Meteor.call('category.insert', this.categories, (err, result) => {
                    if (result) {
                        console.log('categories:');
                        this.$emit("close")
                    } else {
                        console.log("Couldn't insert");
                    }
                })
            }
        }
    }
}
</script>

<style>
</style>