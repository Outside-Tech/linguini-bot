<template>
  <div class="principal">
    <v-content>
      <v-row style="margin:0; padding:0;">
        <v-col style="margin:0; padding:0;" class="cont_princi_pro" cols="12">
          <v-row style="margin:0; padding:0;" class="justify-end">
            <v-col class="cont_icon" cols="4">
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                      <v-icon>
                        mdi-cog
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                      Settings
                    </v-card-title>
                    <v-card-text>
                      <v-row class="justify-center">
                        <v-btn
                          style="margin-top:1rem; width:100%"
                          color="red lighten-2"
                          dark
                          large
                        >
                          <v-icon>mdi-delete</v-icon>
                          Delete Profile
                        </v-btn>
                      </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <v-row class="justify-center">
                        <v-btn
                          style="margin-top:1rem; width:100%"
                          color="primary"
                          dark
                          large
                        >
                          <v-icon>mdi-creation</v-icon>
                          About the game
                        </v-btn>
                      </v-row>
                      <v-row class="justify-center">
                        <v-btn
                          style="margin-top:1rem; width:100%"
                          color="primary"
                          dark
                          large
                        >
                          <v-icon>mdi-corn</v-icon>
                          Instructions
                        </v-btn>
                      </v-row>
                      <v-row class="justify-center">
                        <v-btn
                          style="margin-top:1rem; width:100%"
                          color="deep-purple accent-4"
                          dark
                          large
                        >
                          <v-icon>mdi-cctv</v-icon>
                          Privacy Policy
                        </v-btn>
                      </v-row>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
          <v-row style="margin:0; padding:0;" class="justify-center">
            <v-col style="margin:0; padding:0;" cols="4">
              <img class="img_profile" src="../assets/chefleo02.png" alt="" />
            </v-col>
          </v-row>
          <v-row style="margin:0; padding:0;">
            <v-col style="padding:0;" class="cont_name">
              <h2 class="txt_name">{{ name }}</h2>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="justify-center row_range_cont">
        <v-col style="margin:0; padding:0.5rem;" class="row_range" cols="4">
          <p style="margin:0; padding:0;" class="txt_range">
            <v-icon style="margin:0; padding:0;" dark>
              mdi-crown-outline
            </v-icon>
            RANGE
          </p>
          <p style="margin:0; padding:0;" class="txt_range_num">
            6
          </p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="11">
          <v-row class="justify-space-around">
            <v-col cols="5" class="cont_txt_info1">
              <p style="margin:0; padding:0;" class="txt_info1">
                Recipe done
              </p>
              <p style="margin:0; padding:0;" class="txt_info_num">
                <v-icon style="margin:0; padding:0;" dark>
                  mdi-cupcake
                </v-icon>
                {{ points }}
              </p>
            </v-col>
            <v-col cols="5" class="cont_txt_info2">
              <p style="margin:0; padding:0;" class="txt_info1">
                Challenges won
              </p>
              <p style="margin:0; padding:0;" class="txt_info_num">
                <v-icon style="margin:0; padding:0;" dark>
                  mdi-medal-outline
                </v-icon>
                {{ points }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row style="margin:0 0 4rem 0; padding:0;" class="justify-center">
        <v-col style="margin:0; padding:0;" cols="10">
          <v-row>
            <v-col cols="12">
              <h2>Last recipes</h2>
            </v-col>
          </v-row>
          <v-row v-for="item in items2" :key="item.id">
            <v-col class="cont_recipe" cols="12">
              <v-row>
                <v-col class="cont_img_recipe" cols="4">
                  <v-img
                    height="100%"
                    width="auto"
                    :src="item.thumbnail_url"
                  ></v-img>
                </v-col>
                <v-col cols="8">
                  <h3 class="txt_name_recipe">
                    {{ item.name }}
                  </h3>
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
        <v-btn>
          <span>Account</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
  </div>
</template>

<script>
import { db, auth } from "@/main";
export default {
  data() {
    return {
      activeBtn: 3,
      dialog: false,
      name: "",
      uid: null,
      points: 0,
      items: [],
    };
  },
  methods: {
    loadItems() {
      db.collection("recipes")
        .where("tags", "==", "breakfast")
        .limit(5)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.items.push(doc.data());
          });
          console.log(this.items);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    },
    getName() {
      db.collection("usuarios")
        .where("email", "==", this.mail)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.name = doc.data().name;
            this.points = doc.data().points;
          });
          console.log(this.item);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    },
  },
  created() {
    this.uid = auth.currentUser.uid;
    this.mail = auth.currentUser.email;
    this.getName();
  },
};
</script>

<style scoped>
.cont_princi_pro {
  background: #2846f7;
}

.principal {
  height: 100%;
}

.botton_nav {
  position: fixed;
  bottom: 0;
}

.cont_icon {
  height: auto;
}

.img_profile {
  width: 100%;
  height: auto;
}

.txt_name {
  text-align: center;
  color: white;
}

.cont_name {
  margin-bottom: 2rem;
}

.row_range_cont {
  margin-top: -1.5rem;
}

.row_range {
  background: #9964ff;
  border-radius: 20px;
}

.txt_range {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  font-style: italic;
}

.txt_range_num {
  text-align: center;
  color: white;
  font-size: 1.2rem;
}

.cont_txt_info1 {
  background: #c45150;
  border-radius: 5px;
}

.cont_txt_info2 {
  background: #c45150;
  border-radius: 5px;
}

.txt_info1 {
  color: white;
  text-align: center;
}

.txt_info_num {
  color: white;
  text-align: center;
}

.cont_recipe {
  background: #9964ff;
  border-radius: 5px;
  margin: 0.3rem 0;
}

.cont_img_recipe {
  overflow: hidden;
}

.txt_name_recipe {
  color: white;
}
</style>
