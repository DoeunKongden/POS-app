<template>
  <div class="q-ma-md">
    <FormSearchByDate @searchByDate="searchByDate"/>

    <q-markup-table class="q-ma-md">
        <thead class="bg-primary">
            <tr>
                <th class="text-left">No</th>
                <th class="text-left">Date</th>
                <th class="text-left">Customer</th>
                <th class="text-left">Item</th>
                <th class="text-left">Price</th>
                <th class="text-left">Quatity</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item,index) in items ">
                <tr :key="index">
                    <td class="text-left">{{index+1}}</td>
                    <td class="text-left">{{item.date | toDate}}</td>
                    <td class="text-left">{{item.customerName}}</td>
                    <td class="text-left">{{item.items[0].name}}</td>
                    <td class="text-left">{{item.items[0].price}}</td>
                    <td class="text-left">{{item.items[0].quatity}}</td>
                </tr>

                <template v-for="(it,idx) in item.items">
                    <tr :key="idx + `it` + index" v-if="idx !=0">
                        <td colspan="3"></td>
                        <td class="text-left">{{it.name}}</td>
                        <td class="text-left">{{it.price}}</td>
                        <td class="text-left">{{it.quatity }}</td>
                    </tr>
                </template>
            </template>
        </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import FormSearchByDate from '../components/FormSearchByDate.vue';
import moment from 'moment';
export default {
    components: { FormSearchByDate },

    methods:{
        searchByDate(date){
            console.log(date)

            this.items = [
                {
                    _id:"1",
                    date: new Date(),
                    customerName: "Den",
                    items: [
                        {
                            _id:'01',
                            name:"Coca",
                            price:6000,
                            quatity: 20,
                        },
                        {
                            _id:'02',
                            name:"Pepsi",
                            price:6000,
                            quatity: 20,
                        },
                    ]
                }
            ]
        }
    },

    data(){
        return{
            items: [],
        }
    },

    filters:{
        toDate(date){
            return moment(date).format("DD-MM-YYYY")
        }
    }
}
</script>

<style>

</style>