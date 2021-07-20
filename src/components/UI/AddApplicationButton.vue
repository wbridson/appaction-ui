<template>
  <section class="px-10 pt-10 pb-10 ma-0" >
    <v-card flat height="300" width="300" class="hidden px-auto d-flex justify-center align-center" >
      <div class="my-2 px-auto pt-4 pb-3">
        <v-btn
          class="text-h1 weight-bold"
          x-large
          :color="buttonColor"
          dark
          :width="width"
          :height="height"
          @mouseover="HoverSwitch"
          @mouseout="HoverSwitch"
          @click="$emit('add-app')"
        >
          +
        </v-btn>
      </div>
    </v-card>
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
  computed:{
    height(){
      switch (this.$vuetify.breakpoint.name){
        case 'xs' : return 140;
        case 'sm' : return 140;
        case 'md' : return 160;
        default : return 200;
      }
    },
    width(){
      switch (this.$vuetify.breakpoint.name){
        case 'xs' : return 140;
        case 'sm' : return 140;
        case 'md' : return 160;
        default : return 200;
      }
    },
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
