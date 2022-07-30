<template>
  <q-markup-table class="q-ma-lg">
    <thead class="bg-primary text-white">
      <tr>
        <th class="text-left">No</th>
        <th class="text-left">Name</th>
        <th class="text-left">Gender</th>
        <th class="text-left">DOB</th>
        <th class="text-left">Phone</th>
        <th class="text-left">Address</th>
        <th class="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in items" :key="index">
        <td class="text-left">{{index+1}}</td>
        <td class="text-left">{{item.name}}</td>
        <td class="text-left">{{item.gender}}</td>
        <td class="text-left">{{item.dob | toDate}}</td>
        <td class="text-left">{{item.phone}}</td>
        <td class="text-left">{{item.address}}</td>
        <td class="text-left">
          <q-btn  icon="delete" color="red" dense @click="handleDelete(item._id)"></q-btn>
          <q-btn  icon="edit" color="info" dense @click="handleUpdate(item)"></q-btn>
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>
import moment from 'moment'
export default {
  props:{
    items:{
      type:Array,
      default:null,
    }
  },

  filters:{
      toDate(date){
          return moment(date).format('DD-MM-YYYY')
      }
  },

  methods:{
    handleDelete(id){
      console.log("Delete",id);
      this.$emit("delete",id)
    },
    handleUpdate(items){
        console.log(this.items)
        this.$emit("update",items)
    
    }
  }
};
</script>

<style>
</style>