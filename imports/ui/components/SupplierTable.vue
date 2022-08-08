<template>
    <q-markup-table class="q-ma-md">
        <thead class="bg-primary text-white">
            <tr>
                <th class="text-left">No</th>
                <th class="text-left">Company Name</th>
                <th class="text-left">Owner Name</th>
                <th class="text-left">Phone Number</th>
                <th class="text-left">Address</th>
                <th class="text-left">Status</th>
                <th class="text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data,index) in suppliers" :key="index">
                <td class="text-left">{{index+1}}</td>
                <td class="text-left">{{data.companyName}}</td>
                <td class="text-left">{{data.ownerName}}</td>
                <td class="text-left">{{data.phone}}</td>
                <td class="text-left">{{data.address}}</td>
                <td class="text-left">{{data.status}}</td>
                <td class="text-left">
                    <q-btn icon="delete" dense color="red" @click="handleDelete(data._id)"></q-btn>

                    <q-btn icon="edit" dense color="info" @click="handleUpdate(data)"></q-btn>
                </td>
            </tr>
        </tbody>
    </q-markup-table>
</template>

<script>
export default {
    props:{
        suppliers:{
            type:Array,
            default:null,
        }
    },
    methods:{
        handleDelete(id){
            console.log(id)
            this.$emit("delete", id)
        },

        handleUpdate(data){
            console.log(data);
            this.$emit("update", data)
        }
    }
}
</script>

<style>

</style>