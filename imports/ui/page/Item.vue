<template>
    <div class="q-pa-md">
        <q-btn label="Add Item"
            icon="add"
            rounded
            color="primary"
            @click="inception = true" />
        <q-dialog v-model="inception"
            class="dialog1">
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
        <ItemTable1
         :items="items"
            @delete="handleDelete"
            @update="handleEdit" />
    </div>
</template>

<script>
import moment from "moment"
import ItemFormss  from "../components/ItemFormss.vue"
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

    mounted(){
        this.GetData();
    },

    methods: {

        close(doc) {
            if (doc._id) {
                //code update
                let index = this.items.findIndex((obj) => {
                    return obj._id == doc._id;
                });
                this.items[index].name = doc.name;
                this.items[index].date = doc.date;
                this.items[index].description = doc.description;
                this.items[index].category = doc.category;
                this.items[index].categoryId = doc.categoryId;
                this.items[index].status = doc.status
                this.inception = false;
            } else {
                //code insert
                this.items.push(doc);
                this.inception = false;
            }
        },

        handleDelete(id) {
            console.log(id);
            let index = this.items.findIndex((doc) => {
                return doc._id == id;
            });
            this.items.splice(index, 1);
        },

        handleEdit(doc) {
            console.log(doc)
            this.inception = true;
            this.updateDoc = Object.assign({}, doc)
            this.updateDoc.date = moment(doc.date).format('YYYY-MM-DD');
        },

        GetData() {
            this.items = [
                {
                    _id: '1',
                    name: 'Drink',
                    date: new Date(),
                    description: "soft drink ",
                    category:"Drink",
                    status:"active",
                },
                {
                    _id: '2',
                    name: 'Fried',
                    date: new Date(),
                    description: "Fast Food",
                    category: "Food",
                    status:"active",
                },
                {
                    _id: "3",
                    name:"Messi",
                    date: new Date(),
                    description: "Messi drink and eat",
                    category: "Football player",
                    status: "inactive",
                }
            ]
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