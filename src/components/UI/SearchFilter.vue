<template>
  <v-card class="rounded-0 primary" height="70%">
    <v-navigation-drawer
      absolute
      dark
      color="primary lighten-2"
      width="100%"
      permanent
    >
      <form @submit.prevent="submit" class="pa-2" style="height: 100%">
        <v-text-field v-model="name" label="Name of Application"></v-text-field>
        <v-text-field v-model="url" label="URL"></v-text-field>
        <v-text-field v-model="modifiedBy" label="Modified By"></v-text-field>
        <v-container>
          <v-row class="d-flex justify-center text-subtitle-1">
            <v-col style="max-width: 130px;">
              <date-picker
                ref="activeFrom"
                label="Active From"
                :defaultDate="false"
                @dateSelected="setActiveFrom"
              ></date-picker>
            </v-col>
            <v-col style="max-width: 110px;">
              <date-picker
                ref="activeTo"
                label="Active To"
                :defaultDate="false"
                @dateSelected="setActiveTo"
              ></date-picker>
            </v-col>
          </v-row>
        </v-container>

        <v-row class="d-flex justify-center align-center pl-1 pr-1 pt-16">
          <v-btn class="mr-4" type="submit">
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </v-row>
      </form>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import DatePicker from "./DatePicker.vue";

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      name: "",
      url: "",
      modifiedBy: "",
      activeTo: "",
    };
  },
  methods: {
    clear() {
      this.name = "";
      this.url = "";
      this.modifiedBy = "";
      this.$refs.activeFrom.date = "";
      this.$refs.activeTo.date = "";
    },
    setActiveFrom(selectedDate) {
      this.activeFrom = selectedDate;
      console.log("setActiveFrom");
    },
    setActiveTo(selectedDate) {
      this.activeTo = selectedDate;
    },
  },
};
</script>
