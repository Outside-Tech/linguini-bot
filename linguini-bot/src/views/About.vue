<template>
  <div class="about">
    <v-row>
      <v-col cols="12">
        <v-row class="justify-center">
          <v-col cols="8" style="margin-top: 1rem;">
            <img class="img_logo" src="../assets/logoFibonacci.png" alt="">
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="margin:0;padding:0;">
        <v-row class="justify-center">
          <v-col cols="9" style="margin:0;padding:0;">
            <v-row>
              <v-col>
                <p style="text-align:justify; color:white; font-size:13px;">Fibonnaci is an interactive cookbook with a touch of gamification, where you can search a recipe an choose if you want to cook it alone or hand in hand with LEO.</p>
                <p style="text-align:justify; color:white; font-size:13px;">We chose the concept of <strong>Fibonnaci sequence</strong> to evoque the perfection of the chef when they make the dishes that deserve Michelin Stars to the restaurant.</p>
                <p style="text-align:justify; color:white; font-size:13px;"><strong>Main Objetive in Fibonacci: </strong> Do all the recipe that you can, make points with them, increase your range, if you are the best, you could be the sous chef of LEO, in his restaurant FIBONNACI.</p>
                <p style="text-align:justify; color:white; font-size:13px;">Range respect the Fibonacci sequence, that means that you can have <strong>Range 1, Range 2, Range 3, Range 5, Range 8, Range, 13</strong> and so on. The recipes have the number of points that you can obtein depend of the difficulty of them.</p>
              </v-col>
            </v-row>
            <v-row class="justify-center">
              <v-col cols="6">
                <img class="img_leo" src="../assets/chefleo02.png" alt="">
              </v-col>
              <v-col cols="12">
                <p style="text-align:justify; color:white; font-size:13px;">LEO is our AI assitance powered bit WIT.AI who can helps you in the process of cook a dish that you can find in Fibonnaci, you can talk with it and tell it that you need some help, LEO will be your partner in the kitchen.</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row style="background:#1e4067;">
      <v-col cols="12" style="margin-bottom:3rem;">
        <v-row class="justify-center">
          <v-col cols="10">
            <h2 style="text-align:center; color:white; margin-bottom:1rem;">Creators</h2>
            <v-row>
              <v-col cols="6">
                <p style="text-align:center; color:white;"><v-icon dark large>mdi-face-recognition</v-icon></p>
                <p style="text-align:center; color:white; font-weight:bold;margin:0;padding:0;">David Quintanilla</p>
                <p style="text-align:center; color:white; font-style:italic; font-size:12px;">Always in "plus ultra" mode</p>
              </v-col>
              <v-col cols="6">
                <p style="text-align:center; color:white;"><v-icon dark large>mdi-face-recognition</v-icon></p>
                <p style="text-align:center; color:white;font-weight:bold;margin:0;padding:0;">Emilio Campos</p>
                <p style="text-align:center; color:white;font-style:italic; font-size:12px;">"Where captain is in command, sailor is not"</p>
              </v-col>
              <v-col cols="6">
                <p style="text-align:center; color:white;"><v-icon dark large>mdi-face-recognition</v-icon></p>
                <p style="text-align:center; color:white;font-weight:bold;margin:0;padding:0;">Jaime Torres</p>
                <p style="text-align:center; color:white; font-style:italic; font-size:12px;">Making programmer moves</p>
              </v-col>
              <v-col cols="6">
                <p style="text-align:center; color:white;"><v-icon dark large>mdi-face-recognition</v-icon></p>
                <p style="text-align:center; color:white;font-weight:bold;margin:0;padding:0;">Herberth Peñate</p>
                <p style="text-align:center; color:white; font-style:italic; font-size:12px;">The "Prezi"</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p style="text-align:center; color:white;font-weight:bold;"><v-icon dark>mdi-earth</v-icon>Made in El Salvador</p>
              </v-col>
            </v-row>
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
      <v-btn>
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
<!--Script-->
<script>
export default {
  
}
</script>
<style scoped>
.about {
  background: #2846f7;
  height: 100%;
}
.botton_nav {
  position: fixed;
  bottom: 0;
}
.img_logo {
  width: 100%;
  height: auto;
}
.img_leo {
  width:100%;
  height: auto;
}
</style>
