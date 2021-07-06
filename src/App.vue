<template>
  <v-app height="100%">
    <router-view></router-view>
    <div class="footer">
      <the-footer class="footer"></the-footer>
    </div>
    
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

