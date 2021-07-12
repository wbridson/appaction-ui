<template>
  <section width="300" class="pa-10 ma-0">
    <router-link to="/testpage" style="text-decoration: none">
      <v-card
        width="300"
        height="300"
        class="mr-0"
        :color="buttonColor"
        @mouseover="HoverCardSwitch"
        @mouseout="HoverCardSwitch"
        :elevation="isHoveringCard ? 24 : 3"
      >
        <v-container class="px-0 pt-0">
          <v-card-text class="px-0 pt-0">
            <div>
              <v-app-bar
                width="100%"
                height="70px"
                color="accent"
                class="pa-0 ma-0 rounded  d-flex justify-center align-center"
                elevation="1"
              >
                <div class="white--text weight-bold">
                  <div class="d-flex flex-wrap justify-center">
                    <p class="mb-0 text-h6 d-flex justify-center flex-wrap">
                      {{ appTitle }}
                    </p>
                  </div>
                  <div class="d-flex justify-center flex-wrap">
                    <p
                      style="max-width: 190px;"
                      class="ma-0 text-subtitle-2 d-flex justify-center flex-wrap"

                    >
                      {{ appUrl }}
                    </p>
                  </div>
                </div>
              </v-app-bar>
            </div>
            <v-row class="subtitle-1 pt-4">
              <v-col  class="d-flex justify-center flex-wrap">
                <span class="font-weight-bold">Active From: </span>
                {{activeFrom}}
              </v-col>
              <v-col  class="d-flex justify-center flex-wrap">
                <div class="font-weight-bold">Active To:</div>
                {{activeTo}}
              </v-col>
            </v-row>
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
  props: ["appTitle", "appUrl", "activeFrom", "activeTo","usersOnline"],
  data() {
    return {
      isHoveringCard: false,
      buttonColor: "secondary lighten-2",
    };
  },
  methods: {
    HoverCardSwitch() {
      this.isHoveringCard = !this.isHoveringCard;
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
