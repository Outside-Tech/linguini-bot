<template>
  <div class="principal d-flex flex-column justify-center align-center">
    <img
      alt="Logo Fibonacci"
      class="img-logo"
      src="../assets/logoFibonacci.png"
    />
    <p class="title">Sign Up</p>
    <div style="width: 75%">
      <v-text-field
        placeholder="Name"
        solo
        rounded
        hide-details
        v-model="name"
        class="text"
      ></v-text-field>
      <v-text-field
        placeholder="Email"
        solo
        rounded
        hide-details
        v-model="email"
        type="email"
        class="text"
      ></v-text-field>
      <v-text-field
        placeholder="Password"
        hide-details
        type="password"
        v-model="password"
        solo
        rounded
        class="text"
      ></v-text-field>
    </div>
    <v-btn rounded color="#F44138" dark class="boton" @click="register"
      >Register</v-btn
    >
    <v-btn rounded color="#657FEA" dark class="boton" to="main">Cancel</v-btn>
  </div>
</template>
<script>
import { auth, db } from "@/main";
export default {
  name: "Register",
  data: () => ({ name: "", email: "", password: "" }),
  methods: {
    register() {
      if (this.name && this.email && this.password) {
        auth
          .createUserWithEmailAndPassword(
            this.email.toLowerCase(),
            this.password
          )
          .then(() => {
            //console.log("DONE  REGISTER", user);

            db.collection("usuarios")
              .add({
                name: this.name,
                email: this.email.toLowerCase(),
                points: 0,
              })
              .then(() => {
                auth.signOut();
                this.$router.push("/login");
              })
              .catch((e) => {
                //   swal2.fire(
                //     "¡Error!",
                //     "Contacta con soporte técnico.",
                //     "error"
                //   );

                console.log("Error 2", e);
              });
          })
          .catch((err) => {
            //   swal2.fire(
            //     "¡Error!",
            //     "Contacta con soporte técnico: " +
            //       "Este correo ya se encuentra en uso.",
            //     "error"
            //   );
            console.log("error 1", err);
          });
      } else {
        if (this.password != this.password2) {
          // swal2.fire("¡Error!", "Las contraseñas no coinciden", "error");
        } else {
          // swal2.fire("¡Error!", "Verifica los datos ingresados", "error");
        }
      }
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
  margin-bottom: 1rem;
}

.boton {
  margin: 0.5rem 0;
  width: 75%;
}

.title {
  color: #fff;
  margin-top: 1rem;
  font-weight: 500 !important;
  font-size: 1.5rem !important;
}

.text {
  margin-bottom: 1rem !important;
}

#img-primera {
  width: 100%;
}
</style>
