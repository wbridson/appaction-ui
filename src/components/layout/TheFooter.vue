<template>
  <v-footer app color="primary lighten-1" padless class="hidden-sm-and-down">
    <v-row justify="center" no-gutters class="pa-0 ma-0">
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="primary py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: ['Home', 'About Us', 'Contact Us'],
    };
  },
};
</script>

