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
        handleSubmit(e) {
            //Validation
            //submitting data
            this.categories.dob = moment(this.categories.dob, 'YYYY-MM-DD').toDate;
            console.log('categories:', this.categories);
            e.preventDefault();
            this.$emit("close", this.categories)
        }
    }
}
</script>

<style>
</style>