<template>
    <div>
        <q-card class="q-ma-md">
            <q-card-section>
                <div class="fit column justify-between">
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input autofocus
                            outlined
                            label="CompanyName"
                            type="text"
                            v-model="supplier.companyName" />
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input autofocus
                            outlined
                            label="OwnerName"
                            type="text"
                            v-model="supplier.ownerName" />
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input 
                            outlined
                            autofocus
                            label="Phone Number"
                            type="text"
                            v-model="supplier.phone"
                        />
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input 
                            autofocus
                            outlined
                            label="Address"
                            type="text"
                            v-model="supplier.address"
                        />
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <fieldset>
                            <label for="">Status:</label>
                            <q-radio 
                                v-model="supplier.status"
                                val="active"
                                label="Active"
                            />
                            <q-radio 
                                v-model="supplier.status"
                                val="inactive"
                                label="Inactive"
                            />
                        </fieldset>
                    </div>

                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-btn 
                            color="primary"
                            :label="updatedDoc? `Update` : `Submit`"
                            @click="handleSubmit"
                        ></q-btn>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
    props:{
        updatedDoc:{
            type:Object,
            default:null,
        }
    },

    mounted(){
        if(this.updatedDoc){
            this.supplier = this.updatedDoc
        }
    },

    data(){
        return{
            supplier:{
                companyName: null,
                ownerName: null,
                phone: null,
                address: null,
                status: 'active'
            }
        }
    },

    methods:{
        handleSubmit(){
            this.$emit("submit", this.supplier)
        }
    }
}
</script>

<style>
</style>