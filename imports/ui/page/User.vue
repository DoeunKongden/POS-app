<template>
  <div>
    <div class="q-pa-md q-gutter-sm ">
      <q-btn label="Add User"
        rounded
        icon="add"
        color="primary"
        @click="inception = true" />

      <q-dialog v-model="inception"
        :maximized="maximizedToggle=true"
        transition-hide="slide-down"
        transition-show="slide-up"
      >
        <q-card>
          <q-bar class="flex justify-end">
            <q-btn dense
              flat
              icon="close"
              v-close-popup
              rounded
              class="bg-red text-white">
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section>
            <div class="text-h6 primary flex justify-center"
              id="add-user">Add User</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <UserForm :updateDoc="updateDoc"
              @submit="handleSubmit" />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <Usertable :users="users"
      @delete="handleDelete"
      @update="handleUpdate" />
  </div>
</template>

<script>
//importing component and other pages to use
import UserForm from "../components/UserForm.vue";
import Usertable from "../components/Usertable.vue";

//Declaring data and other method
//Taking in props

export default {
  components: {
    UserForm,
    Usertable,
  },

  props: {},
  data() {
    return {
      users: [],
      inception: false,
      secondDialog: false,
      updateDoc: null,
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    handleSubmit(doc) {
      if (doc.id) {
        //update data code
        let index = this.users.findIndex((obj) => {
          return obj._id == doc._id;
        });
        this.users[index].username = doc.username;
        this.users[index].email = doc.email;
        this.users[index].phone = doc.phone;
        this.users[index].role = doc.role;
        this.inception = false;
        this.updateDoc = null;
      } else {
        //Insert Data Code
        this.users.push(doc);
        this.inception = false;
      }
    },
    handleDelete(id) {
      console.log("Delete: ", id);
      let index = this.users.findIndex((doc) => {
        return doc._id == id;
      });
      this.users.splice(index, 1);
    },
    handleUpdate(user) {
      console.log("Update:", user), (this.inception = true);
      this.updateDoc = user;
    },
    getData() {
      this.users = [
        {
          id: "01",
          username: "Kongden",
          email: "Kongden1@gmail.com",
          phone: "016760505",
          role: "admin",
        },
        {
          id: "02",
          username: "Mr-Den",
          email: "Mr-den2@gmail.com",
          phone: "016760505",
          role: "sale",
        },
        {
          id: "03",
          username: "Messi",
          email: "Messi11@gmail.com",
          phone: "016760505",
          role: "sale",
        },
      ];
    },
  },
};
</script>

<style>
</style>