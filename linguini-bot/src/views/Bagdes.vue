<!--Body template-->
<template>
  <div class="principal">
    <v-content style="width: 100%;">
      <div
        style="width: 100%; height:100%; padding:1rem"
        class="d-flex flex-column justify-start align-right"
      >
        <h2>Hi, Friend!</h2>
        <h4 style="margin-bottom: 1rem">Breakfast category goal proggress</h4>
        <div
          class="d-flex flex-column justify-center align-center"
          style="margin-bottom: 1rem"
        >
          <v-progress-circular
            :rotate="-90"
            :size="125"
            :width="15"
            :value="value"
            color="#5E3BF2"
            style="font-size: 1.2rem"
          >
            {{ value }}%
          </v-progress-circular>
        </div>
        <h3 style="margin-bottom: 0.2rem">Completed</h3>
        <div class="d-flex tag-container" style="width: 100%">
          <div
            v-for="item in items"
            :key="item.id"
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
                style="position: relative"
              >
                <v-img
                  style="max-width: 90px; max-height: 60px;"
                  :src="item.thumbnail_url"
                ></v-img>
                <div
                  class="d-flex justify-center align-center"
                  style="background-color:#5E3BF2; color:white; position: absolute; font-size: .8em; heigth:30%; bottom: 0; right: 0; left: 0; z-index: 2"
                >
                  Completed
                </div>
              </v-card>
              <div style="cursor: pointer; font-size: 0.8rem">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <h3 style="margin-bottom: 0.2rem; margin-top: 1rem">
          Recommended for you
        </h3>
        <v-row class="d-flex" style="width: 100%;">
          <v-col
            v-for="item in items2"
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
              @click="seeDetail(item.id, item.thumbnail_url)"
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
    <v-bottom-navigation
      class="botton_nav"
      grow
      color="#5e3bf2"
      :value="activeBtn"
      style="position: fixed; bottom: 0"
    >
      <v-btn :to="{ name: 'menu' }">
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
<script>
import { db } from "@/main";
export default {
  name: "Bagdes",
  data: () => ({
    interval: {},
    item: [],
    items: [],
    items2: [],
    value: 0,
  }),
  created() {
    this.loadItems();
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

      db.collection("recipes")
        .where("tags", "==", "lunch")
        .limit(6)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.items2.push(doc.data());
          });
          console.log(this.items2);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 90) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>
<!--Style-->
<style>
.principal {
  height: 100%;
}

.tag-container {
  overflow-x: auto !important;
}
.tag-container::-webkit-scrollbar {
  display: none !important;
}

.card-tag {
  width: 90px;
  height: 60px;
  background-color: #1e4067;
}
</style>
