<template>
    <div class="principal">
        <v-row class="justify-center">
            <v-col cols="12">
                <h1 style="text-align:center; color:white; margin-top:1rem;">Delete page</h1>
            </v-col>
            <v-col cols="12">
                <v-row class="justify-center">
                    <v-col style="margin:0;padding:0;" cols="6">
                        <img class="img_leo" src="../assets/chefleosad.png" alt="">
                    </v-col>
                    <v-col style="margin:0;padding:0;" cols="12">
                        <h2 style="margin:0;padding:0;text-align:center; color:white; font-style:italic;">
                            Why are you leaving?
                        </h2>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="10">
                <v-row>
                    <v-col cols="12">
                        <p style="color:white; text-align:justify;">This is the purge page. If you push the <strong>DELETE BUTTON</strong>, all the information in your profile, like name, account, range, recipes done and all the information referent to your account will be delete. Are you sure that you will leave?</p>
                    </v-col>
                    <v-col cols="12">
                        <v-btn style="margin-top:1rem; width:100%" color="red lighten-2"
                        dark
                        large>
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
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    
}
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