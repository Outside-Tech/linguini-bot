<!--Body template-->
<template>
  <div class="principal">
    <v-content style="width: 100%;">
      <div
        style="width: 100%; height:100%; padding:1rem"
        class="d-flex flex-column justify-start align-center"
      >
        <h2>Top Chefs</h2>
        <v-row class="d-flex" style="width: 100%; margin-bottom: 2rem">
          <v-col
            v-for="item in items2"
            :key="item.id"
            class="d-flex justify-center align-right"
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="12"
          >
            <p
              style="width: 10% !important; font-weight: bold; color:#C45150; font-size: 1.2rem"
            >
              {{ item.position }}
            </p>
            <v-card
              class="card-item d-flex justify-center align-center"
              color="white"
              style="width: 90%; padding: 0.4rem"
              @click="seeDetail(item.id, item.thumbnail_url)"
            >
              <img
                src="../assets/chef.png"
                alt="chef icon"
                style="max-width: 25%; height: 50px"
              />

              <v-card-text class="d-flex flex-column" style="font-weight: bold">
                {{ item.name }}
                <span style="font-weight: 400">Points: {{ item.points }}</span>
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
    activeBtn: 1,
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
      let num = 1;
      let aux = "";
      db.collection("usuarios")
        .orderBy("points", "desc")
        .limit(10)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            aux = doc.data();
            aux["position"] = num;
            this.items2.push(aux);
            num++;
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
  width: 100px;
  height: 80px;
  background-color: #1e4067;
}

.card-item {
  background-color: #1e4067;
}
</style>
