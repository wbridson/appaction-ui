<template>
  <v-container class="mr-0 pr-0 pt-0 pb-0">
    <v-row no-gutters>
      <v-col cols="isFilterOpen ? 10 : 12">
        <div
          v-if="!isFiltered"
          class="d-flex flex-wrap"
          style="min-height: 100%;"
        >
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
        <div
          v-if="isFiltered"
          class="d-flex flex-wrap"
          style="min-height: 100%;"
        >
          <application-card
            v-for="app in filteredApps"
            :key="app.appId"
            :appTitle="app.appTitle"
            :appUrl="app.appUrl"
            :activeFrom="app.activeFrom"
            :activeTo="app.activeTo"
            :usersOnline="app.usersOnline"
          ></application-card>
        </div>
      </v-col>
      <v-overlay v-if="xs && isFilterOpen" class="d-flex justify-center">
        <search-filter @submit="filterResults" @clear="clear"></search-filter>
      </v-overlay>
      <v-col v-if="!xs && isFilterOpen" cols="2" class="pb-0 pr-0">
        <search-filter @submit="filterResults" @clear="clear"></search-filter>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApplicationCard from "../components/UI/ApplicationCard.vue";
import AddApplicationButton from "../components/UI/AddApplicationButton.vue";
import AddApplicationForm from "../components/UI/AddApplicationForm.vue";
import SearchFilter from "../components/UI/SearchFilter.vue";

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
          activeTo: "2-12-2222",
          usersOnline: "8",
        },
        {
          appId: "ecc",
          appTitle: "ECC",
          appUrl: "https://ecc.com",
          activeFrom: "1-11-1111",
          activeTo: "2-12-2222",
          usersOnline: "4",
        },
        {
          appId: "soybean",
          appTitle: "Plantform",
          appUrl: "https://plantform.com",
          activeFrom: "1-11-1111",
          activeTo: "2-12-2222",
          usersOnline: "30000",
        },
      ],
      filteredApps: [],
      isFiltered: false,
      isAdding: false,
      idCounter: 0, //temporary value for v-for
    };
  },
  computed: {
    xs() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        default:
          return false;
      }
    },
  },
  methods: {
    AddApplication() {
      this.isAdding = true;
    },
    Confirm(name, url, activeFrom, activeTo) {
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
    },
    Close() {
      this.isAdding = false;
    },
    filterResults(name, activeFrom, activeTo) {
      if (!name && !activeFrom && !activeTo) {
        this.isFiltered = false;
      } else {
        this.isFiltered = true;
        
        this.filteredApps = this.apps.filter((app) => {
          return (
            (name
              ? app.appTitle.toLowerCase().includes(name.toLowerCase())
              : app.appTitle.length >= 0) &&
            (activeFrom
              ? (new Date(app.activeFrom)) <= (new Date(activeFrom))
              : app.activeFrom.length >= 0) &&
            (activeTo
              ? (new Date(app.activeTo)) >= (new Date(activeTo))
              : app.activeTo.length >= 0)
          );
        });
      }
    },
    clear() {
      this.isFiltered = false;
    },
  },
};
</script>

<style scoped></style>
