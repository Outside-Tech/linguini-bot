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
              class="d-flex justify-end tag-container"
              style="padding: 0; margin: 0; width: 100%"
            >
              <div
                v-for="card in message.cards"
                :key="card.name"
                class="d-flex justify-center align-center"
              >
                <div
                  class="d-flex flex-column justify-center align-center"
                  style="padding: 0; margin: 0"
                >
                  <v-card
                    class="card-item ma-2 d-flex flex-column justify-center"
                    color="white"
                    @click="seeDetail()"
                  >
                    <v-img
                      style="max-height: 75px"
                      :src="card.thumbnail_url"
                    ></v-img>
                    <v-card-text>
                      {{ card.name }}
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-content>
    <div
      v-if="!newChat"
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
  </div>
</template>
<script>
import { db, auth } from "@/main";
export default {
  name: "Main",

  created() {
    this.uid = auth.currentUser.uid;
    this.mail = auth.currentUser.email;
  },
  data: () => ({
    activeBtn: 0,
    uid: null,
    idChat: false,
    messages: [],
    message: "",
    leoUid: "X4TkYxTgloQlFjgPKO6ciKSUeL63",
    newChat: true,
    name: "",
  }),
  methods: {
    getName() {
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
          recipe: "test",
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
          proxyurl +
            "https://fibonacci-chatbot.web.app/api/v1/chatbot/howtocook",
          {
            idChat: this.idChat,
            message: this.message,
            idRecipe: this.$route.params.id,
          },
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
  overflow-x: auto !important;
}
.tag-container::-webkit-scrollbar {
  display: none !important;
}

.card-chat {
  width: 60%;
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
