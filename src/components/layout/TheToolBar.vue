<template>
  <v-toolbar dark prominent color="primary darken-2" style="max-height: 70px;" >
    <v-app-bar-nav-icon @click="$emit('drawer')"></v-app-bar-nav-icon>
  <v-container class="d-flex justify-center">
    <h1 class="text-sm-h4 d-flex justify-center">{{ title }}</h1>
  </v-container>
    <v-spacer></v-spacer>

    <v-btn icon @click="$emit('openFilter')" v-if="filterIsNeeded">
      <v-icon>mdi-filter</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: ["title"],
  emits: ["drawer"],
  data() {
    return {
      filterIsNeeded: true,
    };
  },
  watch: {
    $route() {
      if (this.$route.path === "/applications") {
        this.filterIsNeeded = true;
      } else {
        this.filterIsNeeded = false;
      }
    },
  },
};
</script>
