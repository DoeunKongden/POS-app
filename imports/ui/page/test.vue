<template>
    <div>
        <q-btn color="primary"
            label="Test Insert"
            @click="handleInsert" />
        <q-btn color="primary"
            label="Test Find"
            @click="handleFind" />
        <q-btn dense
            icon="edit"
            color="green"
            label="Update"
            @click="handleUpdate" />
        <ul>
            <li v-for="(customer, index) in customers "
                :key="index">
                {{ customer._id }}| {{ customer.name }} | {{ customer.age }}
                <q-btn icon="delete"
                    dense
                    color="red"
                    @click="handleRemove(customer._id)" />
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            customers: []
        }
    },

    methods: {

        handleUpdate(){
            let doc = {
                id : 'rtYeYYDwtdfw6fxfB',
                name : 'DEN !!!!',
                age : 30
            }

            Meteor.call('customer.update',doc,(err,result)=>{
                if(result){
                    this.handleFind()
                }else{
                    console.log("err:",err)
                }
            })
        },

        handleRemove(id) {
            Meteor.call('customer.delete', id, (err, result) => {
                if (result) {
                    this.handleFind()
                } else {
                    console.log(err);
                }
            })
        },

        handleInsert() {
            let doc = {
                name: "Doeun Kongden",
                age: 20
            }

            Meteor.call('customer.insert', doc, (err, result) => {
                if (result) {
                    console.log(result)
                } else {
                    console.log(err)
                }
            })
        },

        handleFind() {
            Meteor.call('customer.find', (err, result) => {
                if (result) {
                    console.log(result)
                    this.customers = result
                } else {
                    console.log(err)
                }
            })
        }
    }
}
</script>

<style>
</style>