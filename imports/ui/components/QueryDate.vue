<template>
    <fieldset>
        <legend>Search By date</legend>
        <div class="row justify-center items-center">
            <div class="col-md-4 col-xl-12 q-pa-sm">
                <div class="q-pa-md"
                    style="max-width: 300px">
                    <q-input outlined
                        v-model="form.formDate"

                        mask="DD-MM-YYYY"
                        :rules="['date']">
                        <template v-slot:append>
                            <q-icon name="event"
                                class="cursor-pointer">
                                <q-popup-proxy cover
                                    transition-show="scale"
                                    transition-hide="scale">
                                    <q-date v-model="date">
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
            </div>
            <div class="col-md-4 col-xl-12 q-pa-sm">
                <div class="q-pa-md"
                    style="max-width: 300px">
                    <q-input outlined
                        v-model="form.toDate"

                        mask="DD-MM-YYYY"
                        :rules="['date']">
                        <template v-slot:append>
                            <q-icon name="event"
                                class="cursor-pointer">
                                <q-popup-proxy cover
                                    transition-show="scale"
                                    transition-hide="scale">
                                    <q-date v-model="date">
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
            </div>
        </div>
    </fieldset>
</template>

<script>
import moment from 'moment';
export default {
    data(){
        return{
            form:{
                formDate:moment(new Date()).startOf('month').format("DD-MM-YYYY"),
                toDate:moment(new Date()).format("DD-MM-YYYY"),
            }
        }
    }
}
</script>

<style>
</style>