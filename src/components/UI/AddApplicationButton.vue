<template>
  <section class="px-10 pt-10 pb-10 ma-0">
    <v-container width="300" height="279" class="pl-6 pr-7 d-flex justify-center align-center">
      <div class="my-2 px-6 pt-4 pb-3">
        <v-btn
          class="text-h1 weight-bold"
          x-large
          :color="buttonColor"
          dark
          width="200"
          height="200"
          @mouseover="HoverSwitch"
          @mouseout="HoverSwitch"
          @click="$emit('add-app')"
        >
          +
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  emits: ['add-app'],
  data() {
    return {
      isHovering: false,
      buttonColor: "light-green darken-3",
    };
  },
  methods: {
    HoverSwitch() {
        this.isHovering = !this.isHovering;
        if(this.isHovering){
            this.buttonColor = "light-green lighten-3";
        }
        else {
            this.buttonColor = "light-green darken-3";
        }
      
    },
  },
};
</script>
