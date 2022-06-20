<template>
    <div class="q-pa-md">
        <q-btn label="Add Category"
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
                        id="add-user">Add Customer</div>
                </q-card-section>
                <q-card-section>
                    <CategoryForm @close="close"
                        :updateDoc="updateDoc" />
                </q-card-section>
            </q-card>
        </q-dialog>
        <CategoryTable :items="categories"
            @delete="handleDelete"
            @update="handleEdit" />
    </div>
</template>

<script>
import moment from "moment"
import CategoryTable from "../components/CategoryTable.vue"
import CategoryForm from "../components/CategoryForm.vue"

export default {
    components: {
    CategoryTable,
    CategoryForm
},

    data() {
        return {
            inception: false,
            categories: [],
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
                let index = this.categories.findIndex((obj) => {
                    return obj._id == doc._id;
                });
                this.categories[index].name = doc.name;
                this.categories[index].date = doc.date;
                this.categories[index].description = doc.description;
                this.inception = false;
            } else {
                //code insert
                this.categories.push(doc);
                this.inception = false;
            }
        },

        handleDelete(id) {
            console.log(id);
            let index = this.categories.findIndex((doc) => {
                return doc._id == id;
            });
            this.categories.splice(index, 1);
        },

        handleEdit(doc) {
            console.log(doc)
            this.inception = true;
            this.updateDoc = Object.assign({}, doc)
            this.updateDoc.date = moment(doc.date).format('YYYY-MM-DD');
        },

        GetData() {
            this.categories = [
                {
                    _id: '1',
                    name: 'Drink',
                    date: new Date(),
                    description: "soft drink "
                },
                {
                    _id: '2',
                    name: 'Fried',
                    date: new Date(),
                    description: "Fast Food"
                },
                {
                    _id: "3",
                    name:"Messi",
                    date: new Date(),
                    description: "Messi drink and eat"
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