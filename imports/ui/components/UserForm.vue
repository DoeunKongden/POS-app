<template>
  <div>
    <div class="row justify-around q-ma-sm">
      <div class="col-md-5 col-sm-12 q-ma-md">
        <q-input outlined v-model="form.username" label="Username"></q-input>
      </div>
      <div class="col-md-5 col-sm-12 q-ma-md">
        <q-input outlined v-model="form.email" label="Email"></q-input>
      </div>
      <div class="col-md-5 col-sm-12 q-ma-md">
        <q-input outlined v-model="form.phone" label="Phone"></q-input>
      </div>
      <div class="col-md-5 col-sm-12 q-ma-md">
        <q-select
          outlined
          v-model="form.role"
          label="Role"
          :options="role"
          emit-value
          map-options
          option-label="label"
        ></q-select>
      </div>
      <div class="col-md-5 col-sm-12 q-ma-md">
        <q-input outlined v-model="form.password" label="Password" type="password"></q-input>
      </div>
      <div class="col-md-5 col-sm-12 q-ma-md">
        <q-input
          outlined
          v-model="confirmPassword"
          label="ConfirmPassword"
          type="password"
        ></q-input>
      </div>
    </div>
    <div class="flex flex-center">
      <q-btn :label="updateDoc? `Update` : `Submit` " color="primary" @click="handleSubmit"></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    updateDoc:{
      default:null,
      type:Object,
    }
  },

  mounted(){
    if(this.updateDoc){
        this.form=this.updateDoc
    }
    
  },

  data() {
    return {
      form: {
        username: null,
        email: null,
        phone: null,
        password: null,
        role: null,
      },
      confirmPassword: null,
      role: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Sale",
          value: "sale",
        },
      ],
    };
  },

  methods:{
      handleSubmit(){
          this.$emit("submit", this.form)
      }
  }
};
</script>

<style>
</style>