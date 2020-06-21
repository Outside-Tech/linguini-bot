<template>
  <v-app>
    <v-content class="principal"
      ><v-container fluid>
        <div class="principal d-flex flex-column justify-center align-center">
          <img
            alt="Logo Fibonacci"
            class="img-logo"
            src="../assets/logoFibonacci.png"
          />
          <img
            alt="Chef Leo"
            id="img-primera"
            src="../assets/chefleo02.png"
          /></div></v-container
    ></v-content>
  </v-app>
</template>
<script>
export default {
  name: "FirstPage",
  mounted() {
    this.timer();
  },
  methods: {
    timer() {
      setTimeout(() => this.$router.push("/main"), 5000);
    },
  },
};
</script>
<style>
.principal {
  background-color: #5e3bf2;
  width: 100%;
  height: 100%;
}

.img-logo {
  width: 50%;
}

#img-primera {
  width: 100%;
}
</style>
