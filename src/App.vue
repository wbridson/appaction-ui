<template>
  <v-app>
    <v-row no-gutters class="secondary lighten-4">
      <v-col v-if="drawerisActive" cols="2" class="pa-0 ma-0">
        <drawer></drawer>
      </v-col>
      <v-col cols='drawerisActive ? 9 : 12' class="pa-0 ma-0">
        <the-tool-bar title="App Action Control"  @drawer="Drawer"></the-tool-bar>
      
    
    <router-view></router-view>
    </v-col>
    </v-row>
      <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheToolBar from './components/layout/TheToolBar.vue';
import TheFooter from './components/layout/TheFooter.vue';
import Drawer from './components/UI/Drawer.vue';
export default {
  name: "App",

  components: {
    TheToolBar,
    TheFooter,
    Drawer,
  },

  data: () => ({
    drawerisActive: false,
  }),
  methods: {
    Drawer() {
      this.drawerisActive = !this.drawerisActive;
    },
  },
};
</script>

