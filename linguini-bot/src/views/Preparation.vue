<template>
  <div class="principal d-flex flex-column justify-center align-center">
    <v-toolbar
      color="#5e3bf2"
      dark
      dense
      floating
      style="width:100%;  max-height: 8% !important"
    >
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content style="width: 100%;">
      <div
        style="width: 100%; height:100%"
        class="d-flex flex-column justify-start align-center"
      >
        <v-img width="100%" :src="this.$route.params.img"></v-img>
        <div class="d-flex flex-column align-start" style="width: 80%;">
          <h4
            style="font-weight: 500; color:#C45150; font-size: 1.2rem; margin-top: 0.5rem"
          >
            Ingredients
          </h4>
          <div
            v-for="item in item.sections"
            :key="item.id"
            class="d-flex justify-center align-center"
          >
            <p style="text-align: justify; font-size: 1rem; font-weight: 300;">
              {{ item.ingredient.name }}
            </p>
          </div>
          <h4
            style="font-weight: 500; color:#C45150; font-size: 1.2rem; margin-bottom: 0.5rem"
          >
            Preparation
          </h4>
          <div
            v-for="instruction in item.instructions"
            :key="instruction.id"
            class="d-flex justify-center align-center"
          >
            <p
              style="width: 10% !important; font-weight: bold; color:#C45150; font-size: 1.2rem"
            >
              {{ instruction.position }}
            </p>
            <p
              style="text-align: justify; width: 90% !important; font-size: 1rem; font-weight: 300;"
            >
              {{ instruction.display_text }}
            </p>
          </div>
        </div>
        <v-btn
          rounded
          color="#F44138"
          dark
          class="boton"
          :to="{ name: 'menu' }"
          style="width: 95%"
          >Finish</v-btn
        >
      </div>
    </v-content>
  </div>
</template>
<script>
import { db, auth } from "@/main";
export default {
  name: "Main",

  created() {
    this.uid = auth.currentUser.uid;
    this.loadItem();
  },
  data: () => ({
    activeBtn: 0,
    uid: null,
    item: "",
  }),
  methods: {
    loadItem() {
      console.log(this.$route.params.id);
      if (this.$route.params.id) {
        db.collection("recipe_detail")
          .where("id", "==", parseInt(this.$route.params.id))
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.item = doc.data();
            });
            console.log(this.item);
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
      } else {
        this.$router.replace({ name: "menu" });
      }
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

.card-chat {
  width: 60%;
  height: 60px;
  background-color: #1e4067;
}

.card-chat-img {
  width: 60%;
  height: 100px;
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
