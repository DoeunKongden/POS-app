<template>
  <q-markup-table class="q-ma-lg">
    <thead>
      <tr>
        <th class="text-left">No</th>
        <th class="text-left">Name</th>
        <th class="text-left">Email</th>
        <th class="text-left">Phone</th>
        <th class="text-left">Role</th>
        <th class="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user,index) in users" :key="index">
        <td class="text-left">{{index+1}}</td>
        <td class="text-left">{{user.username}}</td>
        <td class="text-left">{{user.email}}</td>
        <td class="text-left">{{user.phone}}</td>
        <td class="text-left">{{user.role}}</td>
        <td class="text-left">
          <q-btn  icon="delete" color="red" dense @click="handleDelete(user.id)"></q-btn>
          <q-btn  icon="edit" color="info" dense @click="handleUpdate(user)"></q-btn>
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>
export default {
  props:{
    users:{
      type:Array,
      default:null,
    }
  },
  methods:{
    handleDelete(id){
      console.log("Delete",id);
      this.$emit("delete",id)
    },
    handleUpdate(user){
      console.log("Update",user);
      this.$emit("update",user)
    
    }
  }
};
</script>

<style>
</style>