<template>
  <div class="principal d-flex flex-column justify-center align-center">
    <fab
      v-if="!dialog"
      :actions="[
        {
          name: 'alertMe',
          icon: 'send',
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
            style="padding: 0.1rem;"
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
    <v-bottom-navigation grow color="#5e3bf2" :value="activeBtn">
      <v-btn>
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn :to="{ name: 'topten' }">
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
          <v-icon color="#fff" @click="closeModal">mdi-arrow-left</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 100%; padding:0; margin: 0">
          <div
            v-if="newChat"
            class="d-flex flex-column align-center justify-center"
            style="width: 100%; height: 100%"
          >
            <img
              alt="Leo Salute"
              src="../assets/chefleo03.png"
              style="width: 50%;"
            />
            <v-btn
              style="width: 95%"
              @click="adminChat"
              large
              outlined
              color="indigo"
              >Start</v-btn
            >
          </div>
          <div class="d-flex flex-column" style="width: 95%;">
            <div
              v-for="message in messages"
              :key="message.i"
              class="d-flex flex-column justify-center align-center"
            >
              <div
                v-if="message.uid != leoUid"
                class="d-flex justify-right"
                style="padding: 0; margin: 0; width: 100%"
              >
                <v-avatar class="ma-2">
                  <img src="../assets/chef1.png" alt="John" />
                </v-avatar>
                <v-card
                  flat
                  class="card-chat ma-2 d-flex flex-column justify-center align-center"
                  color="#b7bff1"
                >
                  <v-card-text style="color: #fff"
                    >{{ message.message }}
                  </v-card-text>
                </v-card>
              </div>
              <div
                v-else
                class="d-flex justify-end"
                style="padding: 0; margin: 0; width: 100%"
              >
                <v-card
                  flat
                  class="card-chat ma-2 d-flex flex-column justify-center"
                  color="#1E4067"
                >
                  <v-card-text style="color: #fff"
                    >{{ message.message }}
                  </v-card-text>
                </v-card>

                <v-avatar class="ma-2">
                  <img src="../assets/chefleo03.png" alt="Chef Leo" />
                </v-avatar>
              </div>
              <div
                v-if="message.type == 'withImage'"
                class="d-flex justify-end"
                style="padding: 0; margin: 0; width: 100%"
              >
                <v-card
                  flat
                  class="card-chat-img ma-2 d-flex justify-center align-center"
                  color="#1E4067"
                >
                  <v-img style="max-width: 40%" :src="message.img_url"></v-img>
                </v-card>

                <v-avatar class="ma-2">
                  <img src="../assets/chefleo03.png" alt="Chef Leo" />
                </v-avatar>
              </div>
              <div
                v-if="message.type == 'withVideo'"
                class="d-flex justify-end"
                style="padding: 0; margin: 0; width: 100%"
              >
                <v-card
                  flat
                  class="card-chat ma-2 d-flex justify-center align-center"
                  color="#1E4067"
                >
                  <a style="color: #fff" :href="message.video_url"></a>
                </v-card>

                <v-avatar class="ma-2">
                  <img src="../assets/chefleo03.png" alt="Chef Leo" />
                </v-avatar>
              </div>
              <div
                v-if="message.type == 'withCard'"
                class="d-flex justify-center"
                style="padding: 0; margin: 0; width: 100%"
              >
                <div class="d-flex tag-container" style="width: 100%">
                  <div
                    v-for="card in message.cards"
                    :key="card.id"
                    class="d-flex justify-center align-center"
                  >
                    <div
                      class="d-flex flex-column justify-start align-star"
                      style="padding: 0; margin: 0"
                      @click="seeDetail(card.id, card.item.thumbnail_url)"
                    >
                      <v-card
                        class="card-tag2 ma-2 d-flex flex-column"
                        color="#8795E8"
                        style="height: 15%"
                      >
                        <v-img
                          style="max-width: 100px; max-height: 80px;"
                          :src="card.item.thumbnail_url"
                        ></v-img>
                      </v-card>
                      <div style="cursor: pointer; font-size: 0.8rem">
                        {{ card.item.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions v-if="!newChat">
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
          <v-btn
            @click="adminChat()"
            class="ma-1"
            color="#5E3BF2"
            fab
            small
            dark
          >
            <v-icon>mdi-send-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { db, auth } from "@/main";
import fab from "vue-fab";

export default {
  name: "Main",
  components: {
    fab,
  },
  created() {
    this.uid = auth.currentUser.uid;
    this.mail = auth.currentUser.email;
    this.getTagsFire();
  },
  data: () => ({
    activeBtn: 0,
    tags: [],
    items: [],
    selected: [],
    dialog: false,
    uid: null,
    mail: null,
    idChat: false,
    messages: [],
    message: "",
    leoUid: "X4TkYxTgloQlFjgPKO6ciKSUeL63",
    newChat: true,
    name: "",
  }),
  methods: {
    getTagsFire() {
      db.collection("tags").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            let doc = change.doc;
            this.tags.push(doc.data());
          }
        });
        this.getRecipes();
      });

      db.collection("usuarios")
        .where("email", "==", this.mail)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.name = doc.data().name;
          });
          console.log(this.item);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    },
    getRecipes() {
      db.collection("recipes").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            let doc = change.doc;
            let aux = "";
            this.tags.forEach((x) => {
              if (x.name == doc.data().tags) {
                aux = doc.data();
                aux["idF"] = doc.id;
                x.items.push(aux);
              }
            });
          }
        });
      });
      console.log(this.tags);
      this.selected = this.tags[0].items;
    },
    seeDetail(id, img) {
      this.$router.push({ name: "recipeDetail", params: { id: id, img: img } });
    },
    changeCategory(items) {
      this.selected = items;
    },
    displayModal() {
      this.dialog = true;
    },
    adminChat() {
      if (this.newChat) {
        this.createChat();
      } else {
        this.sendMessage();
      }
    },
    createChat() {
      this.message = "Start";
      db.collection("chats")
        .add({
          recipe: "general",
          uid: this.uid,
          name: this.name,
        })
        .then((docRef) => {
          this.idChat = docRef.id;
          console.log(this.idChat);
          this.sendMessage();
        })
        .catch((e) => {
          console.log("Error 2", e);
        });
    },
    sendMessage() {
      if (this.idChat) {
        db.collection("chats")
          .doc(this.idChat)
          .collection("messages")
          .add({
            message: this.message,
            uid: this.uid,
            idChat: this.idChat,
          })
          .then(() => {
            this.sendMessageW();
          })
          .catch((e) => {
            console.log("Error 2", e);
          });
      }
    },
    getChat() {
      if (this.idChat) {
        db.collection("chats")
          .doc(this.idChat)
          .collection("messages")
          .where("idChat", "==", this.idChat)
          .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === "added") {
                let doc = change.doc;
                this.messages.push(doc.data());
                console.log("Sirvo", this.messages);
              }
            });
          });
      }
    },
    async sendMessageW() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";

      let config = {
        headers: {
          Accept: "aplication/json",
        },
      };

      const test = await this.$http
        .post(
          proxyurl + "https://fibonacci-chatbot.web.app/api/v1/chatbot/general",
          { idChat: this.idChat, message: this.message },
          config
        )
        .then((response) => {
          console.log(test);
          this.message = "";
          console.log(response);
          if (this.newChat) {
            this.getChat();
            this.newChat = false;
          }
        })
        .catch((error) => {
          console.log(error);
          this.message = "";
        });
    },
    closeModal() {
      this.dialog = false;
      this.messages = [];
      this.newChat = true;
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

.card-item2 {
  width: 70px;
  height: 60px;
  background-color: #1e4067;
}

.card-chat-img {
  width: 60%;
  height: 100px;
  background-color: #1e4067;
}

#img-primera {
  width: 100%;
}

.card-tag2 {
  width: 100px;
  height: 80px;
  background-color: #1e4067;
}
</style>
