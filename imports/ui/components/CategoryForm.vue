<template>
    <div>
        <q-card class="q-ma-md">
            <q-card-section>
                <div class="fit column justify-between">
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            v-model="form.name"
                            label="Name" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            v-model="form.date"
                            label="Date" 
                            type="date"
                            />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined
                            v-model="form.description"
                            label="Description" 
                            
                            />
                    </div>


                    <div class="col-xs-12 col-sm-4 q-ma-sm text-center">
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
            this.form = this.updateDoc
        }
    },

    data() {
        return {
            form: {
                name: null,
                date: null,
                description: null,
            }
        }
    },

    methods: {
        handleSubmit() {
            this.form.dob = moment(this.form.dob, 'YYYY-MM-DD').toDate;
            console.log('form:', this.form);

            this.$emit("close", this.form)
        }
    }
}
</script>

<style>
</style>