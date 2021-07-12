<template>
  <section>
    <!-- <v-row no-gutters>
      <v-col v-if="drawerisActive" cols="2" class="pa-0 ma-0">
        <drawer></drawer>
      </v-col>
      <v-col cols='drawerisActive ? 9 : 12' class="pa-0 ma-0">
        <the-tool-bar title="App Action Control"  @drawer="Drawer"></the-tool-bar> -->

    <v-container>
      <v-row dense>
        <v-col cols="isFilterOpen ? 10 : 12">
          <div class="d-flex flex-wrap">
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
              :appUrl="app.appUrl"
              :activeFrom="app.activeFrom"
              :activeTo="app.activeTo"
              :usersOnline="app.usersOnline"
            ></application-card>
          </div>
        </v-col>

        <v-col v-if="isFilterOpen" cols="2">
          <div v-if="isFilterOpen" style="background-color: blue; min-height: 100%"><p>hi</p></div>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-col> -->
    <!-- </v-row> -->
  </section>
</template>

<script>
import ApplicationCard from "../components/UI/ApplicationCard.vue";
import AddApplicationButton from "../components/UI/AddApplicationButton.vue";
import AddApplicationForm from "../components/UI/AddApplicationForm.vue";
//import Drawer from "../components/UI/Drawer.vue";
export default {
  components: {
    ApplicationCard,
    AddApplicationButton,
    AddApplicationForm,
  },
  data() {
    return {
      apps: [
        {
          appId: "mgmark",
          appTitle: "My Growmark",
          appUrl: "https://mygrowmark.com",
          activeFrom: "1-11-1111",
          activeTo: "2-22-2222",
          usersOnline: "8",
        },
        {
          appId: "ecc",
          appTitle: "ECC",
          appUrl: "https://ecc.com",
          activeFrom: "1-11-1111",
          activeTo: "2-22-2222",
          usersOnline: "4",
        },
        {
          appId: "soybean",
          appTitle: "Plantform",
          appUrl: "https://plantform.com",
          activeFrom: "1-11-1111",
          activeTo: "2-22-2222",
          usersOnline: "30000",
        },
      ],
      isAdding: false,
      idCounter: 0,
      isFilterOpen: false,
    };
  },
  methods: {
    AddApplication() {
      this.isAdding = true;
      console.log(this.$isFilterOpen)
    },
    Confirm(name, url, activeFrom, activeTo, usersOnline) {
      this.isAdding = false;
      this.apps.unshift({
        appId: this.idCounter,
        appTitle: name,
        appUrl: url,
        activeFrom: activeFrom,
        activeTo: activeTo,
        usersOnline: 13,
      });
      this.idCounter++;
      console.log(usersOnline);
      console.log("aciveFrom" + activeFrom);
      console.log(" active to " + activeTo);
    },
    Close() {
      this.isAdding = false;
    },
  },
  watch:{
    $isFilterOpen(){
      this.isFilterpen = this.$isFilterOpen;
      console.log("change");
    }
  }
};
</script>

<style scoped></style>
