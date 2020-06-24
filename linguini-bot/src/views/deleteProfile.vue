<template>
  <div class="principal">
    <v-row class="justify-center">
      <v-col cols="12">
        <h1 style="text-align:center; color:white; margin-top:1rem;">
          Delete page
        </h1>
      </v-col>
      <v-col cols="12">
        <v-row class="justify-center">
          <v-col style="margin:0;padding:0;" cols="6">
            <img class="img_leo" src="../assets/chefleosad.png" alt="" />
          </v-col>
          <v-col style="margin:0;padding:0;" cols="12">
            <h2
              style="margin:0;padding:0;text-align:center; color:white; font-style:italic;"
            >
              Why are you leaving?
            </h2>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="12">
            <p style="color:white; text-align:justify;">
              This is the purge page. If you push the
              <strong>DELETE BUTTON</strong>, all the information in your
              profile, like name, account, range, recipes done and all the
              information referent to your account will be delete. Are you sure
              that you will leave?
            </p>
          </v-col>
          <v-col cols="12">
            <v-btn
              @click="dialog = true"
              style="margin-top:1rem; width:100%"
              color="red lighten-2"
              dark
              large
            >
              <v-icon>mdi-delete</v-icon>
              Delete Profile
            </v-btn>
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

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Enter your password</v-card-title>
        <v-card-text>
          <v-text-field
            placeholder="Password"
            hide-details
            type="password"
            v-model="password"
            solo
            class="text ma-2"
          ></v-text-field>
          <v-text-field
            placeholder="Confirm password"
            hide-details
            type="password"
            v-model="password2"
            solo
            class="text ma-2"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"
            >Disagree</v-btn
          >
          <v-btn color="green darken-1" text @click="deleteAll()"
            >Confirm</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db, auth } from "@/main";
export default {
  data: () => ({
    items2: [],
    uid: "",
    mail: "",
    password: "",
    password2: "",
    idDoc: "",
    dialog: false,
  }),
  created() {
    this.uid = auth.currentUser.uid;
    this.mail = auth.currentUser.email;
    this.loadItems();
  },
  methods: {
    deleteAll() {
      if (this.password == this.password2) {
        auth
          .signInWithEmailAndPassword(this.mail.toLowerCase(), this.password)
          .then(() => {
            this.deleteChats();
            this.deleteUser();
          })
          .catch((err) => {
            console.log("error 1", err);
          });
      }
    },
    deleteChats() {
      this.items2.forEach((x) => {
        db.collection("chats")
          .doc(x)
          .delete()
          .then(() => {
            console.log("Funciono");
          })
          .catch(function(error) {
            console.log("error", error);
          });
      });
    },
    killUser() {
      var user = auth.currentUser;
      user
        .delete()
        .then(() => {
          this.$router.push("/main");
        })
        .catch(function(error) {
          console.log("error", error);
        });
    },
    deleteUser() {
      db.collection("usuarios")
        .doc(this.idDoc)
        .delete()
        .then(() => {
          this.killUser();
        })
        .catch(function(error) {
          console.log("error", error);
        });
    },
    loadItems() {
      db.collection("chats")
        .where("uid", "==", this.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.items2.push(doc.id);
          });
          console.log(this.items2);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
      db.collection("usuarios")
        .where("email", "==", this.mail)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.idDoc = doc.id;
          });
          console.log(this.idDoc);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    },
  },
};
</script>

<style scoped>
.principal {
  width: 100%;
  height: 100%;
  background: #f44138;
}

.botton_nav {
  position: fixed;
  bottom: 0;
}

.img_leo {
  width: 100%;
  height: auto;
}
</style>
