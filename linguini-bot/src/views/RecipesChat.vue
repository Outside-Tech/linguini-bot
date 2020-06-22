<template>
  <div class="principal d-flex flex-column justify-center align-center">
    <v-toolbar
      color="#5e3bf2"
      dark
      dense
      floating
      style="width:100%;  max-height: 8% !important"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="flex justify-center align-center">
        Fibonacci</v-toolbar-title
      >
      <v-spacer></v-spacer> -->
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content style="width: 100%;" class="tag-container">
      <div
        style="width: 100%; height:100%"
        class="d-flex flex-column justify-start align-center"
      >
        <div
          class="d-flex justify-center"
          style="margin-top: 1.5rem !important; width: 80%"
        ></div>
        <div class="d-flex flex-column" style="width: 100%;">
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
                <img
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  alt="John"
                />
              </v-avatar>
              <v-card
                flat
                class="card-chat ma-2 d-flex flex-column justify-center"
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
          </div>
        </div>
      </div>
    </v-content>
    <div
      class="d-flex justify-center align-center"
      style="width: 100%; background-color:#edeef2"
    >
      <v-text-field
        v-model="message"
        solo
        label="Type a message..."
        rounded
        dense
        light
        hide-details
        class="ma-2"
      ></v-text-field>
      <v-btn @click="adminChat" class="ma-2" color="#5E3BF2" fab small dark>
        <v-icon>mdi-send-outline</v-icon>
      </v-btn>
    </div>
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
import { db, auth } from "@/main";
export default {
  name: "Main",

  created() {
    // this.getRecepies();
    this.uid = auth.currentUser.uid;
    this.getTagsFire();
  },
  data: () => ({
    activeBtn: 0,
    tags: [],
    items: [],
    selected: [],
    uid: null,
    idChat: false,
    messages: [],
    message: "",
    leoUid: "X4TkYxTgloQlFjgPKO6ciKSUeL63",
    newChat: true,
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
    adminChat() {
      if (this.newChat) {
        this.createChat();
      } else {
        this.sendMessage();
      }
    },
    createChat() {
      let aux = [];
      aux.push({ message: this.message, uid: this.uid });
      db.collection("chats")
        .add({
          recipe: "test",
          uid: this.uid,
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
            // this.getChat();
            // this.message = "";
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
                console.log("Sirvo", this.messages); //Aca donde re
              }
            });
          });
        // console.log("Escucho", this.messages);
      }
    },
    async sendMessageW() {
      let config = {
        headers: {
          Accept: "aplication/json",
        },
      };

      const test = await this.$http
        .post(
          "https://fibonacci-chatbot.web.app/api/v1/chatbot/test",
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
  overflow-y: auto !important;
}
.tag-container::-webkit-scrollbar {
  display: none !important;
}

.card-chat {
  width: 60%;
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
