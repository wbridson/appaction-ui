<template>
  <v-toolbar dark prominent color="primary darken-2">
    <v-app-bar-nav-icon @click="$emit('drawer')"></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>
      
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: ["title"],
  emits: ["drawer"],
  data() {
    return {
      items: [
        ["Applications", "/applications"],
        ["Test Page", "/testpage"],
        ["testpage", "/testpage"],
      ],
    };
  },
};
</script>

