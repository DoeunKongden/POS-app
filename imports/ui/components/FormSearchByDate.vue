<template>
    <fieldset>
        <legend>Search By date</legend>
        <div class="row jutify-center items-center">
            <div class="col-md-4 col-xl-8 q-pa-sm">
                <q-input outlined
                    v-model="form.formDate">
                    <template v-slot:append>
                        <q-icon name="event"
                            class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy"
                                transition-show="scale"
                                transition-hide="scale">
                                <q-date v-model="form.formDate">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup
                                            label="Close"
                                            color="primary"
                                            flat />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <div class="col-md-4 col-xl-8 q-pa-sm">
                <q-input outlined
                    v-model="form.toDate">
                    <template v-slot:append>
                        <q-icon name="event"
                            class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy"
                                transition-show="scale"
                                transition-hide="scale">
                                <q-date v-model="form.toDate">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup
                                            label="Close"
                                            color="primary"
                                            flat />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <div class="col-md-2 col-xs-4 justify-between q-ma-md">
                <q-btn label="search" color="primary" @click="findByDate()"></q-btn>
            </div>
        </div>
    </fieldset>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            form: {
                formDate: moment(new Date()).startOf('month').format('MM-DD-YYYY'),
                toDate: moment(new Date()).format('DD-MM-YYYY'),
            }
        }
    },

    methods:{
        findByDate(){
            this.$emit('searchByDate',this.form)
        }
    }
}
</script>

<style>
</style>