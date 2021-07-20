<template>
  <v-card class="ma-0 pa-0 rounded-0" height="100%">
    <v-navigation-drawer
      
      dark
      color="primary lighten-2"
      width="100%"
      permanent
    >
      <v-list>
        <router-link :to="path" style="text-decoration: none" class="">
          <v-list-item
            v-for="([icon, text, path], i) in items"
            :key="i"
            link
            @click="setPath(path)"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      items: [
        ["mdi-view-module", "Applications", "/applications"],
        ["mdi-heart", "Scott's Page", "/scottpage"],
        ["mdi-heart", "Ziemovit's Page", "/ziemovitpage"]
      ],
      path: "i",
    };
  },
  methods: {
    setPath(path) {
      this.path = path;
    },
  },
};
</script>
