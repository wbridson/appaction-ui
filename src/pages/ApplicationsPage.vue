<template>
  <section>
    <v-container class="mr-0 pr-0 pt-0 pb-0">
      <v-row no-gutters style="min-height: 100%;">
        <v-col cols="isFilterOpen ? 10 : 12">
          <div class="d-flex flex-wrap" style="min-height: 100%;">
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
        <v-col v-if="isFilterOpen" cols="2" class="pb-0 pr-0">
          <search-filter></search-filter>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ApplicationCard from "../components/UI/ApplicationCard.vue";
import AddApplicationButton from "../components/UI/AddApplicationButton.vue";
import AddApplicationForm from "../components/UI/AddApplicationForm.vue";
import SearchFilter from "../components/UI/SearchFilter.vue";
//import Drawer from "../components/UI/Drawer.vue";
export default {
  components: {
    ApplicationCard,
    AddApplicationButton,
    AddApplicationForm,
    SearchFilter,
  },
  props: ["isFilterOpen"],
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
    };
  },
  methods: {
    AddApplication() {
      this.isAdding = true;
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
      console.log("active to " + activeTo);
    },
    Close() {
      this.isAdding = false;
    },
  },
};
</script>

<style scoped></style>
