<template>
  <div>
    <v-toolbar
        id="toolbar"
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon  @click="$emit('drawer')"></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    props: ['title'],
    emits: ['drawer'],
}
</script>

<style scoped>
#toolbar{
    bottom: 0;
}
</style>