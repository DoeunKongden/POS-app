<template>
  <div>
    <q-layout view="hHh LpR fFf">
      <!--Header of Nav bar-->
      <q-header elevated
        class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense
            flat
            round
            icon="menu"
            @click="left = !left" />

          <q-toolbar-title class="flex flex-center">
            <q-avatar class="logo">
              <img
                src="https://w1.pngwing.com/pngs/770/562/png-transparent-house-logo-clothing-shop-house-music-skirt-shopping-centre-text-line.png"
                alt=""
                srcset="">
            </q-avatar>
            Clothing-Shop
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <!--Menu Left slider-->
      <q-drawer show-if-above
        v-model="left"
        side="left"
        elevated>

        <!--first menu item-->
        <q-item clickable
          v-ripple
          to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <!--User-->
        <q-item clickable
          v-ripple
          to="/user">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>User</q-item-section>
        </q-item>

        <!--Customer-->
        <q-item clickable
          v-ripple
          to="/customer">
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>Customer</q-item-section>
        </q-item>

        <!--Customer-->
        <q-item clickable
          v-ripple
          to="/item">
          <q-item-section avatar>
            <q-icon name="category" />
          </q-item-section>
          <q-item-section>Item</q-item-section>
        </q-item>

        <!---Category-->
        <q-item clickable
          v-ripple
          to="/category">
          <q-item-section avatar>
            <q-icon name="backup_table" />
          </q-item-section>
          <q-item-section>Category</q-item-section>
        </q-item>

        <!--Supplier Page-->
        <q-item clickable
          v-ripple
          to="/supplier">
          <q-item-section avatar>
            <q-icon name="warehouse" />
          </q-item-section>
          <q-item-section>Supplier</q-item-section>
        </q-item>

        <!--Purchase Page-->
        <q-item clickable
          v-ripple
          to="/purchase">
          <q-item-section avatar>
            <q-icon name="receipt" />
          </q-item-section>
          <q-item-section>Purchase</q-item-section>
        </q-item>

        <!--Sale Pge-->
        <q-item clickable
          v-ripple
          to="/sale">
          <q-item-section avatar>
            <q-icon name="chrome_reader_mode" />
          </q-item-section>
          <q-item-section>Sale</q-item-section>
        </q-item>

        <q-list bordered>
          <q-expansion-item icon="report"
            label="Report">
            <q-item clickable
              v-ripple
              to="/import">
              <q-item-section avatar>
                <q-icon name="arrow_circle_down" />
              </q-item-section>
              <q-item-label>Import</q-item-label>
            </q-item>
            <q-item clickable
              v-ripple
              to="/export">
              <q-item-section avatar>
                <q-icon name="arrow_circle_up" />
              </q-item-section>
              <q-item-label>Export</q-item-label>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <div class="text-center text-h5 ">{{ $route.name }}</div>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>

export default {
  data() {
    return {
      left: false
    }
  }
}
</script>

<style>
.logo {
  padding-right: 50px
}
</style>