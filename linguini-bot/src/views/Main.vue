<template>
  <div class="principal d-flex flex-column justify-center align-center">
    <fab
      v-if="!dialog"
      :actions="[
        {
          name: 'alertMe',
          icon: 'send',
          tooltip: firstTooltip,
          color: '#F44138',
        },
      ]"
      position="bottom-right"
      bg-color="#F44138"
      main-icon="face"
      @alertMe="displayModal"
    ></fab>
    <v-toolbar
      color="#5e3bf2"
      dark
      dense
      style="width:100%;  max-height: 8% !important"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="flex justify-center align-center">
        Fibonacci</v-toolbar-title
      >
    </v-toolbar>
    <v-content style="width: 100%;">
      <div
        style="width: 100%; height:100%"
        class="d-flex flex-column justify-start align-center"
      >
        <div
          class="d-flex justify-center"
          style="margin-top: 1.5rem !important; width: 80%"
        >
          <v-text-field
            solo
            label="Search Recipe"
            prepend-inner-icon="mdi-magnify"
            rounded
            dense
            light
            style="width: 100%"
          ></v-text-field>
        </div>
        <div class="d-flex tag-container" style="width: 100%">
          <div
            v-for="tag in tags"
            :key="tag.name"
            class="d-flex justify-center align-center"
          >
            <div
              class="d-flex flex-column justify-center align-center"
              style="padding: 0; margin: 0"
              @click="changeCategory(tag.items)"
            >
              <v-card
                class="card-tag ma-2 d-flex flex-column justify-center"
                color="#8795E8"
              >
                <v-icon dark> {{ tag.img }} </v-icon>
              </v-card>
              <div style="cursor: pointer; font-size: 0.8rem">
                {{ tag.display_name }}
              </div>
            </div>
          </div>
        </div>
        <v-row class="d-flex" style="width: 100%; margin-top: 2rem">
          <v-col
            v-for="item in selected"
            :key="item.id"
            class="d-flex justify-right align-right"
            cols="6"
            xs="6"
            sm="6"
            md="6"
            lg="6"
          >
            <v-card
              class="card-item ma-2 d-flex flex-column justify-center"
              color="white"
              @click="seeDetail()"
            >
              <v-img style="max-height: 75px" :src="item.thumbnail_url"></v-img>
              <v-card-text>
                {{ item.name }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-content>
    <v-bottom-navigation grow color="#5e3bf2" :value="activeBtn">
      <v-btn>
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn>
        <span>Top 10</span>
        <v-icon>mdi-crown</v-icon>
      </v-btn>
      <v-btn>
        <span>Shopping</span>
        <v-icon>mdi-basket</v-icon>
      </v-btn>
      <v-btn>
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-dialog v-model="dialog" scrollable fullscreen hide-overlay>
      <v-card>
        <v-card-title style="background-color:#5e3bf2">
          <v-icon color="#fff" @click="dialog = false">mdi-arrow-left</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 100%;"> </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-text-field
            v-model="message"
            solo
            label="Type a message..."
            rounded
            dense
            light
            hide-details
            class="ma-1"
          ></v-text-field>
          <v-btn @click="adminChat" class="ma-1" color="#5E3BF2" fab small dark>
            <v-icon>mdi-send-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { db } from "@/main";
import fab from "vue-fab";

export default {
  name: "Main",
  components: {
    fab,
  },
  created() {
    // this.getRecepies();
    this.getTagsFire();
  },
  data: () => ({
    activeBtn: 0,
    tags: [],
    items: [],
    selected: [],
    dialog: false,
    message: "",
  }),
  methods: {
    getTagsFire() {
      db.collection("tags")
        // .where("estado", "==", true)
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == "added") {
              let doc = change.doc;
              this.tags.push(doc.data()); //Aca donde re
            }
          });
          // console.log("Tags", this.tags);
          this.getRecipes();
        });
    },
    getRecipes() {
      db.collection("recipes")
        // .where("estado", "==", true)
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == "added") {
              let doc = change.doc;
              this.tags.forEach((x) => {
                if (x.name == doc.data().tags) {
                  x.items.push(doc.data());
                }
              });
            }
          });
        });
      this.selected = this.tags[0].items;
      console.log("Tags", this.tags);
    },
    seeDetail() {
      this.$router.push("/recipeDetail");
    },
    changeCategory(items) {
      this.selected = items;
    },
    displayModal() {
      this.dialog = true;
    },
  },
};
</script>
<style>
.principal {
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.img-logo {
  width: 55%;
  margin-top: 1rem;
}

.boton {
  margin: 0.5rem 0;
}

.tag-container {
  overflow-x: auto !important;
}
.tag-container::-webkit-scrollbar {
  display: none !important;
}

.card-tag {
  width: 70px;
  height: 60px;
  background-color: #1e4067;
}

.card-item {
  width: 150%;
  height: 80%;
  background-color: #1e4067;
}

#img-primera {
  width: 100%;
}
</style>
