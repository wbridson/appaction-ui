<template>
  <v-card class="rounded-0 primary" height="380px">
    <v-navigation-drawer
      absolute
      dark
      color="primary lighten-2"
      width="100%"
      permanent
    >
      <v-layout row wrap justify-center>
        <form style="height: 100%">
          <!-- <v-flex xs-12 v-for="item in items" :key="item.filterField"> -->
          <!-- <component 
          :is="item.filterType"
          :filterLabel="item.label" 
          :defaultDate="false"
          :ref="item.reference"
          @update="setVals" />
          </v-flex> -->

          <!-- Non-Dynamic -->
          <v-text-field
            v-model="name"
            @input="submit"
            label="Name Of Application"
            background-color="primary lighten-1"
            class="pt-16"
          ></v-text-field>
          <v-row class="d-flex justify-center text-subtitle-1 pt-5">
            <v-col style="max-width: 130px;">
              <date-picker
                ref="activeFrom"
                @update="submit"
                label="Active From"
                color="primary lighten-1"
                :defaultDate="false"
              ></date-picker>
            </v-col>
            <v-col style="max-width: 110px;">
              <date-picker
                ref="activeTo"
                @update="submit"
                label="Active To"
                color="primary lighten-1"
                :defaultDate="false"
              ></date-picker>
            </v-col>
          </v-row>

          <!-- --------- -->
          <v-row class="d-flex justify-center align-center pl-1 pr-1 pt-16">
            <v-btn class="mr-4" @click="submit">
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </v-row>
        </form>
      </v-layout>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import DatePicker from "./DatePicker.vue";

export default {
  components: {
    DatePicker,
  },
  emits: ["submit", "clear"],
  data() {
    return {
      name: null,
      activeFrom: null,
      activeTo: null,
    };
  },
  methods: {
    clear() {
      this.name = null;
      this.$refs.activeFrom.$data.date = null;
      this.$refs.activeTo.$data.date = null;
      this.$emit("clear");
    },

    submit() {
      console.log("ref" + this.$refs.activeFrom.$data.date);
      this.$emit(
        "submit",
        this.name,
        this.$refs.activeFrom.$data.date,
        this.$refs.activeTo.$data.date
      );
    },
  },
};
</script>
