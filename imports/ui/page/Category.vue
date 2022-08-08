<template>
    <div class="q-pa-md">
        <q-btn label="Add Category"
            icon="add"
            rounded
            color="primary"
            @click="handleAdd" />
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
                    <div class="text-h6 primary flex flex-center"
                        id="add-user">Add Category</div>
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

    mounted() {
        this.GetData();
    },

    methods: {

        handleAdd() {
            this.inception = true,
            this.updateDoc = null
        },

        close(doc) {
            //code insert
            this.inception = false;
            this.GetData();
        },

        handleDelete(id) {
            Meteor.call('category.delete', id, (err, result) => {
                if (result) {
                    this.GetData()
                } else {
                    console.log("couldnt delete data")
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
            Meteor.call('category.find', (err, result) => {
                if (result) {
                    this.categories = result
                } else {
                    console.log('couldnt find data')
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