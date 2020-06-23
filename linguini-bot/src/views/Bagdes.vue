<!--Body template-->
<template>
  <div class="principal">
    <v-content style="width: 100%;">
      <div
        style="width: 100%; height:100%"
        class="d-flex flex-column justify-start align-right"
      >
        <h2>Hi, Friend!</h2>
      </div>
    </v-content>
    <v-bottom-navigation
      class="botton_nav"
      grow
      color="#5e3bf2"
      :value="activeBtn"
    >
      <v-btn :to="{ name: 'menu' }">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn>
        <span>Top 10</span>
        <v-icon>mdi-crown</v-icon>
      </v-btn>
      <v-btn>
        <span>About</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-btn>
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
// import { db } from "@/main";
export default {
  name: "Bagdes",
  data: () => ({
    item: [],
  }),
  created() {},
  methods: {},
};
</script>
<!--Style-->
<style>
.principal {
  height: 100%;
}
</style>
