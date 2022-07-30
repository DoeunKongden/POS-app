<template>
    <q-markup-table class="q-ma-md">
        <thead class="bg-primary text-white">
            <th class="text-left">No</th>
            <th class="text-left">Name</th>
            <th class="text-left">Cost</th>
            <th class="text-left">Price</th>
            <th class="text-left">Quatity</th>
            <th class="text-left">Date</th>
            <th class="text-left">Status</th>
            <th class="text-left">Action</th>
        </thead>
        <tbody>
            <tr v-for="(prop, index) in purchase"
                :key="index">
                <td class="text-left">{{ index + 1 }}</td>
                <td class="text-left">{{ prop.name }}</td>
                <td class="text-left">{{ prop.cost }}</td>
                <td class="text-left">{{ prop.price }}</td>
                <td class="text-left">{{ prop.quantity }}</td>
                <td class="text-left">{{ prop.date | toDate}}</td>
                <td class="text-left">{{ prop.status }}</td>
                <td class="text-left">
                    <q-btn icon="delete"
                        dense
                        color="red"
                        rounder 
                        @click="handleDelte(prop.id)"
                        />

                    <q-btn icon="edit"
                        dense
                        color="primary" 
                        @click="handleEdit(prop)"
                        />
                </td>
            </tr>
        </tbody>
    </q-markup-table>
</template>

<script>
import moment from 'moment';
export default {
    props: {
        purchase: {
            type: Array,
            default: null,
        }
    },

    filters:{
        toDate(date){
            return moment(date).format("YYYY-MM-DD")
        }
    },

    methods:{
        handleEdit(data){
            this.$emit("edit",data);
        },

        handleDelte(id){
            this.$emit("delete", id);
        }
    }
}
</script>

<style>
</style>