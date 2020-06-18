<template>
  <div class="principal d-flex flex-column justify-center align-center">
    <img
      alt="Logo Fibonacci"
      class="img-logo"
      src="../assets/logoFibonacci.png"
    />
    <v-btn rounded color="#F44138" dark class="boton">Iniciar sesión</v-btn>
    <v-btn rounded color="#657FEA" dark class="boton">Registrarse</v-btn>
    <v-btn rounded color="#657FEA" dark class="boton"
      ><v-icon dark>mdi-google</v-icon></v-btn
    >
  </div>
</template>
<script>
export default {
  name: "SecondPage",
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
  margin-bottom: 1rem;
}

.boton {
  margin: 0.5rem 0;
}

#img-primera {
  width: 100%;
}
</style>
