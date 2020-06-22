<template>
  <div class="principal d-flex flex-column justify-center align-center">
    <v-toolbar
      color="#5e3bf2"
      dark
      dense
      style="width:100%;  max-height: 8% !important"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="flex justify-center align-center">
        Fibonacci</v-toolbar-title
      >
      <v-spacer></v-spacer> -->
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content style="width: 100%;">
      <div
        style="width: 100%; height:100%"
        class="d-flex flex-column justify-start align-center"
      >
        <div
          class="d-flex justify-center"
          style="margin-top: 1.5rem !important; width: 80%"
        ></div>
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
      </div>
    </v-content>
    <v-text-field
      solo
      label="Search Recipe"
      prepend-inner-icon="mdi-magnify"
      rounded
      dense
      light
      style="width: 100%"
    ></v-text-field>
    <!-- <v-bottom-navigation grow color="#5e3bf2" :value="activeBtn">
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
    </v-bottom-navigation> -->
  </div>
</template>
<script>
import { db } from "@/main";
export default {
  name: "Main",

  created() {
    // this.getRecepies();
    this.getTagsFire();
  },
  data: () => ({
    activeBtn: 0,
    tags: [],
    items: [],
    selected: [],
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
        });
    },
    changeCategory(items) {
      this.selected = items;
    },
    async getTags() {
      let config = {
        headers: {
          Accept: "aplication/json",
          "Access-Control-Allow-Origin": "*",
        },
      };

      const tags = await this.$http.get(
        "https://fibonacci-chatbot.web.app/api/v1/tags",
        config
      );
      console.log("Tags", tags);
    },
    async getRecepies() {
      let config = {
        headers: {
          Accept: "aplication/json",
        },
      };

      const recepies = await this.$http.get(
        "https://fibonacci-chatbot.web.app/api/v1/recipes",
        config
      );
      console.log("Recepies", recepies);
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
  width: 60px;
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
