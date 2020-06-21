<template>
  <v-app>
    <v-content class="principal"
      ><v-container fluid>
        <v-row>
          <v-col cols="6" sm="6">
            <h1>{{ example_var }}</h1>
          </v-col>

          <v-col class="test" cols="6" sm="6"> <h1>A LA VERGA PRRO</h1> </v-col>
        </v-row>

        <v-card dark hover class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1"
                >Headline 5</v-list-item-title
              >
              <v-list-item-subtitle
                >Greyhound divisely hello coldly
                fonwderfully</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn :rounded="flag" @click="testfun3()">Button</v-btn>
            <v-btn rounded>Button</v-btn>
          </v-card-actions>
        </v-card>

        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  dark
                  outlined
                  v-model="example_var"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  dark
                  outlined
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  dark
                  outlined
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form> </v-container
    ></v-content>
  </v-app>
</template>
<script>
export default {
  name: "Test",
  mounted() {
    this.testfun();
  },
  data: () => ({
    example_var: "",
    flag: false,
  }),
  methods: {
    testfun() {
      this.example_var = "EJEMPLO1";
      console.log("Hello World");
    },
    testfun3() {
      this.$router.push("/main");
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
.test {
  background-color: azure;
}
</style>
