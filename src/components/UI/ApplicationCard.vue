<template>
  <section width="300" class="pa-10 ma-0">
    <router-link to="/testpage" style="text-decoration: none">
    <v-card width="300" height="300" class="mr-0" :color="buttonColor" @mouseover="HoverSwitch" @mouseout="HoverSwitch" :elevation="isHovering ? 24 : 3">
      <v-container class="px-0 pt-0">
        <v-card-text class="px-0 pt-0">
          <v-app-bar width="100%" color="accent" class="pa-0 ma-0 rounded" elevation="1">
          <div class="text-h6 font-weight-bold white--text ml-8 mb-2">
               {{ appTitle }}
            

           
          </div>
          </v-app-bar>
            <div class="text-h2 ml-8 pt-8">
              {{ usersOnline }}
            </div>
            <div class="text-subtitle-2 ml-8 mt-5 ">
              Users Online
            </div>
        </v-card-text>
      </v-container>
    </v-card>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ["appTitle", "usersOnline"],
  data() {
    return {
      isHovering: false,
      buttonColor: "secondary",
    };
  },
  methods: {
    HoverSwitch() {
        this.isHovering = !this.isHovering;
        // if(this.isHovering){
        //     this.buttonColor = "secondary darken-1";
        // }
        // else {
        //     this.buttonColor = "secondary";
        // }
      
    },
  },
};
</script>
