<template>
  <div class="principal">
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col>
            <h1 style="color:white; text-align:center; margin:2rem;">
              Policy privacy
            </h1>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="6" style="margin-bottom:2rem;">
            <img class="img_logo" src="../assets/logoFibonacci.png" alt="" />
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="10" style="margin-bottom:3rem;">
            <p style="text-align:justify;color:white;font-size:15px;">
              <strong>FIBONACCI App</strong> Use the personal information you
              have gave us, like:
            </p>
            <v-row>
              <v-col cols="5">
                <img class="img_leo" src="../assets/chefleowhite.png" alt="" />
              </v-col>
              <v-col cols="7">
                <h5 style="margin:0;padding:0; color:white;">Name</h5>
                <h5 style="margin:0;padding:0; color:white;">Email</h5>
                <h5 style="margin:0;padding:0; color:white;">UID</h5>
                <h5 style="margin:0;padding:0; color:white;">
                  Conversations with LEO
                </h5>
                <h5 style="margin:0;padding:0; color:white;">Recipes done</h5>
              </v-col>
            </v-row>
            <p style="text-align:justify;color:white;font-size:15px;">
              This information is used to create a personal interaction with
              LEO, calculate the range that you have in the game, track your
              personal profile in the kitchen to suggest you the best recipes
              according to your last decisions.
            </p>
            <p style="text-align:justify;color:white;font-size:15px;">
              <strong>FIBONACCI App</strong> let you erase all the information
              we obtain of you since you create your account in the settings of
              your profile. The information is used only for create the best
              experience in the app to you.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!--Bottom navigation-->
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
      <v-btn :to="{ name: 'topten' }">
        <span>Top 10</span>
        <v-icon>mdi-crown</v-icon>
      </v-btn>
      <v-btn>
        <span>About</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-btn :to="{ name: 'profile' }">
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.principal {
  background: #1e4067;
  height: 100%;
}
.botton_nav {
  position: fixed;
  bottom: 0;
}
.img_leo {
  width: 100%;
  height: auto;
}
.img_logo {
  width: 100%;
  height: auto;
}
</style>
