<!--Body template-->
<template>
  <div class="principal">
    <v-content class="cont-recipe-detail">
      <v-row class="">
        <v-col style="margin:0; padding:0;" cols="12">
          <div class="img_recipe">
            <!--Aquí iría la imagen-->
            <v-img
              height="100%"
              width="auto"
              src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/f7043f6c2c9246a4808265a6087c0d00/Final.jpg"
            ></v-img>
          </div>
        </v-col>
      </v-row>
      <v-row style="margin-top:-3em;">
        <v-col style="margin-top:0;" cols="12">
          <div class="conteiner_tag">
            <!--Colocar aquí ícono de la tag correspondiente-->
            <v-icon large dark>mdi-home</v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="11">
          <!--Aquí va el nombre de la receta-->
          <h2>
            Brownie Batter Pancakes
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="padding-top:0; padding-bottom:0;" cols="12">
          <v-row class="justify-center">
            <v-col cols="5">
              <v-row>
                <v-col cols="4">
                  <v-icon large>mdi-arm-flex</v-icon>
                </v-col>
                <v-col style="padding-top:0; padding-bottom:0;" cols="8">
                  <v-row>
                    <v-col style="margin:0;" cols="12">
                      <h3>Calories</h3>
                      <p>881</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="5">
              <v-row>
                <v-col cols="4">
                  <v-icon large>mdi-bowl-mix</v-icon>
                </v-col>
                <v-col style="padding-top:0; padding-bottom:0;" cols="8">
                  <v-row>
                    <v-col style="margin:0;" cols="12">
                      <h3>Servings</h3>
                      <p>4</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" style="background-color: #5E3BF2;">
          <h2 class="txt_cooking_mode">Cooking mode</h2>
          <v-divider></v-divider>
          <v-row class="justify-center">
            <v-col cols="4">
              <img
                alt="Chef Leo"
                id="img_cook_leo"
                src="../assets/chefleo02.png"
              />
            </v-col>
            <v-col cols="7">
              <p style="margin:0; color: white;">
                Enjoy the experience to cook with your favorite chef
              </p>
              <v-btn
                to="chat-recipes"
                dark
                style="margin-top: .5rem; background: #657FEA;"
              >
                <v-icon>mdi-food</v-icon>
                Cook with Leo
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="justify-center">
            <v-col style="padding-top:0;" cols="10">
              <v-btn
                dark
                style="margin-top: .5rem; background: #AAB0C2; width:100%"
              >
                <v-icon>mdi-food</v-icon>
                <span>Cook alone</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-content>
    <!--Bottom navigator-->
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
  name: "RecipeDetail",
};
</script>
<!--Style-->
<style>
.principal {
  height: 100%;
}

.cont-recipe-detail {
  margin-bottom: 3rem;
}

.img_recipe {
  background: blueviolet;
  height: 250px;
}

.conteiner_tag {
  background: #5e3bf2;
  width: 70px;
  height: auto;
  text-align: center;
  border-radius: 50%;
  padding: 1rem;
  margin-left: 40%;
  position: relative;
}

.botton_nav {
  position: fixed;
  bottom: 0;
}

.btn_cook_1 {
  background: #657fea;
  height: 100%;
  border-radius: 20px;
}

.btn_cook_2 {
  height: auto;
}

.btn_cook_1_icon {
  background: #5e3bf2;
  width: 70px;
  height: auto;
  text-align: center;
  border-radius: 50%;
  padding: 1rem;
  position: absolute;
  margin-left: 5%;
  bottom: 3rem;
}

#img_cook_leo {
  width: 100%;
  height: auto;
}

.txt_cooking_mode {
  text-align: center;
  color: white;
}
</style>
