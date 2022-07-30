<template>
  <q-markup-table class="q-ma-md">
    <thead class="bg-primary">
      <tr class="text-white">
        <th class="text-left">No</th>
        <th class="text-left">Name</th>
        <th class="text-left">Price</th>
        <th class="text-left">Qty</th>
        <th class="text-left">Amount</th>
        <th class="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in items" :key="index">
        <td class="text-left">{{index+1}}</td>
        <td class="text-left">{{item.name}}</td>
        <td class="text-left">{{item.price}}</td>
        <td class="text-left">
          <q-input type="number" v-model.number="item.qty" />
        </td>
        <td class="text-left">{{item.price*item.qty}}</td>
        <td class="text-left">
          <q-btn color="red" rounded icon="delete" dense fat/>
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>
export default {

}
</script>

<style>

</style>