<template>
    <div class="q-pa-md">
        <q-btn label="Add Item"
            icon="add"
            rounded
            color="primary"
            @click="handleAdd" />
        <q-dialog v-model="inception"
            :maximized="maximizedToggle=true"
            transition-hide="slide-down"
            transition-show="slide-up"
        >
            <q-card class="form">
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
                    <div class="text-h6 primary flex"
                        id="add-user">Add Items</div>
                </q-card-section>
                <q-card-section>
                    <ItemFormss @close="close"
                        :updateDoc="updateDoc" />
                </q-card-section>
            </q-card>
        </q-dialog>
        <ItemTable1 :items="items"
            @delete="handleDelete"
            @update="handleEdit" />
    </div>
</template>

<script>
import moment from "moment"
import ItemFormss from "../components/ItemFormss.vue"
import ItemTable1 from "../components/ItemTable.vue";

export default {
    components: {
        ItemFormss,
        ItemTable1
    },

    data() {
        return {
            inception: false,
            items: [],
            updateDoc: null,
        };
    },

    mounted() {
        this.GetData();
    },

    methods: {

        handleAdd(){
            this.inception = true ;
            this.updateDoc = null ;
        },

        close(){
            this.inception = false;
            this.GetData();
        },

        handleDelete(id) {
            Meteor.call('item.delete',id,(err,result)=>{
                if(result){
                    this.GetData()
                }else{
                    console.log("could not delete data")
                }
            })
        },

        handleEdit(doc) {
            console.log(doc)
            this.inception = true;
            this.updateDoc = Object.assign({}, doc)
            this.updateDoc.date = moment(doc.date).format('YYYY-MM-DD');
        },

        GetData() {
            Meteor.call('item.find',(err,result)=>{
                if(result){
                    this.items = result
                }else{
                    console.log(err)
                }
            })
        }
    }
}

</script>

<style>
.form {
    width: 1200px;
    height: 800px;
}
</style>