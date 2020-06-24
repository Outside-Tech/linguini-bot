<template>
  <div style="margin: 0; padding: 0; height: 100%">
    <div class="subprincipal flex-column justify-center align-center">
      <img
        style="width: 100%; height: 100%"
        src="../assets/LeoMessage.jpeg"
        alt="Leo Message"
      />
    </div>
    <div class="principal flex-column justify-center align-center">
      <img
        alt="Logo Fibonacci"
        class="img-logo"
        src="../assets/logoFibonacci.png"
      />
      <v-btn
        rounded
        color="#F44138"
        dark
        class="boton"
        to="login"
        style="width: 50%"
        >Login</v-btn
      >
      <v-btn
        rounded
        color="#657FEA"
        dark
        class="boton"
        to="register"
        style="width: 50%"
      >
        Register
      </v-btn>
      <v-btn rounded color="#657FEA" dark class="boton" style="width: 50%">
        <v-icon dark> mdi-google </v-icon>
      </v-btn>
    </div>
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

.subprincipal {
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

@media (min-width: 320px) {
  .principal {
    display: flex !important;
    width: 100% !important;
    height: 100% !important;
  }

  .subprincipal {
    display: none !important;
  }
}

@media (max-width: 599px) {
  .principal {
    display: flex !important;
    width: 100% !important;
    height: 100% !important;
  }

  .subprincipal {
    display: none !important;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .principal {
    display: none !important;
  }

  .subprincipal {
    display: flex !important;
    width: 100% !important;
    height: 100% !important;
  }
}

@media (min-width: 960px) and (max-width: 1200px) {
  .principal {
    display: none !important;
  }

  .subprincipal {
    display: flex !important;
    width: 100% !important;
    height: 100% !important;
  }
}

@media (min-width: 1201px) and (max-width: 1903px) {
  .principal {
    display: none !important;
  }

  .subprincipal {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
  }
}

@media (min-width: 1904px) {
  .principal {
    display: none !important;
  }

  .subprincipal {
    display: flex !important;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
