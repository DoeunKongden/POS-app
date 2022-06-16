<template>
    <div>
        <q-card class="q-ma-md">
            <q-card-section>
                <div class="fit column justify-between">
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model="form.name" label="Name" />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                       <fieldset>
                           <label for="">Gender</label>
                           <q-radio v-model="form.gender" val="male" label="Male"></q-radio>
                           <q-radio v-model="form.gender" val="female" label="Female"></q-radio>
                       </fieldset> 
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input v-model="form.dob" outlined label="Date of Birth" type="date" id="date_birth" name="date_birth" ></q-input>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input v-model="form.phone" outlined autogrow label="Phone"></q-input>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input v-model="form.address" outlined autogrow label="Address"></q-input>
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                       <fieldset>
                           <label for="">Status</label>
                           <q-radio v-model="form.status" val="active" label="Active"></q-radio>
                           <q-radio v-model="form.status" val="inactive" label="Inactive"></q-radio>
                       </fieldset> 
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-btn color="primary" :label="updateDoc?`Update`:`Submit`" @click="handleSubmit" ></q-btn>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
    import moment from 'moment'
import { date } from 'quasar';
import { matNoEncryption } from '../../../public';

    export default {
        props:{
            updateDoc:{
                type:Object,
                default:null,
            }
        },

        mounted(){
            if(this.updateDoc){
                this.form = this.updateDoc
            }
        },

        data(){
            return{
                form:{
                    name:null,
                    gender:'male',
                    dob:null,
                    phone:null,
                    address:null,
                    status:'active',
                }
            }
        },

        methods:{
            handleSubmit(){
                this.form.dob = moment(this.form.dob, 'YYYY-MM-DD').toDate;
                console.log('form:',this.form);

                this.$emit("close",this.form)
            }
        }
    }
</script>

<style>

</style>