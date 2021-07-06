<template>
  <section>
    <v-row no-gutters>
      <v-col v-if="drawerisActive" cols="2" class="pa-0 ma-0">
        <drawer></drawer>
      </v-col>
      <v-col cols='drawerisActive ? 9 : 12' class="pa-0 ma-0">
        <the-tool-bar title="App Action Control"  @drawer="Drawer"></the-tool-bar>

        <v-container>
          <v-row dense>
            <add-application-button
              @add-app="AddApplication"
            ></add-application-button>
            <add-application-form
              v-if="isAdding"
              @confirm="Confirm"
              @close="Close"
            ></add-application-form>
            <application-card
              v-for="app in apps"
              :key="app.appId"
              :appTitle="app.appTitle"
              :usersOnline="app.usersOnline"
            ></application-card>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ApplicationCard from "../components/UI/ApplicationCard.vue";
import AddApplicationButton from "../components/UI/AddApplicationButton.vue";
import AddApplicationForm from "../components/UI/AddApplicationForm.vue";
import Drawer from "../components/UI/Drawer.vue";
export default {
  components: {
    ApplicationCard,
    AddApplicationButton,
    AddApplicationForm,
    Drawer,
  },
  data() {
    return {
      apps: [
        {
          appId: "mgmark",
          appTitle: "My Growmark",
          usersOnline: "8",
        },
        {
          appId: "ecc",
          appTitle: "ECC",
          usersOnline: "4",
        },
        {
          appId: "soybean",
          appTitle: "Plantform",
          usersOnline: "30000",
        },
      ],
      drawerisActive: false,
      isAdding: false,
      idCounter: 0,
    };
  },
  methods: {
    Drawer() {
      this.drawerisActive = !this.drawerisActive;
    },
    AddApplication() {
      this.isAdding = true;
    },
    Confirm(name, usersOnline) {
      this.isAdding = false;
      this.apps.unshift({
        appId: this.idCounter,
        appTitle: name,
        usersOnline: usersOnline,
      });
      this.idCounter++;
    },
    Close(){
      this.isAdding = false;
    }
  },
};
</script>

<style scoped></style>
