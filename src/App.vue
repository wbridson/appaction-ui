<template>
  <v-app>
    <v-row no-gutters>
      <v-col v-if="isDrawerOpen" cols="2" class="pa-0 ma-0">
        <the-drawer></the-drawer>
      </v-col>
      <v-col cols="drawerisActive ? 9 : 12" class="pa-0 ma-0" >
        <the-tool-bar
          title="App Action Control"
          @drawer="Drawer"
          @openFilter="openFilter"
        ></the-tool-bar>
        <router-view :isFilterOpen="isFilterOpen"></router-view>
        
      </v-col>
      
    </v-row>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheToolBar from "./components/layout/TheToolBar.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheDrawer from "./components/layout/TheDrawer.vue";
export default {
  components: {
    TheToolBar,
    TheFooter,
    TheDrawer,
  },

  data: () => ({
    isDrawerOpen: false,
    isFilterOpen: false,
  }),
  methods: {
    Drawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    openFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    },
  },
};
</script>
