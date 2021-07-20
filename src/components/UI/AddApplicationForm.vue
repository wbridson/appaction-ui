<template>
  <section class="pa-10">
    <v-card width="300" height="300" color="secondary lighten-2">
      <v-container class="pt-1">
        <div class="d-flex justify-end pt-0 pr-0">
          <v-btn icon @click="$emit('close')"
            ><v-icon>mdi-window-close</v-icon></v-btn
          >
        </div>
        <v-card-text class="pt-0">
          <div class="text-subtitle-1">
            <v-text-field
              label="name"
              type="text"
              placeholder="Enter a name for your application"
              hide-details="auto"
              v-model="name"
              class="pt-0 ma-0"
            />
          </div>
          <div class="text-subtitle-1 pt-1">
            <v-text-field
              label="url"
              type="text"
              placeholder="Enter your application's URL"
              hide-details="auto"
              v-model="url"
            />
          </div>
          <v-container style="min-width: 255px;" class="d-flex justify-center ">
            <v-row dense class="d-flex justify-center">
              <v-col style="max-width: 130px" class="px-3">
                <date-picker
                  label="Active From"
                  @dateSelected="setActiveFrom"
                ></date-picker>
              </v-col>
              <v-col style="max-width: 130px" class="px-5">
                <date-picker
                  label="Active To"
                  :defaultDate="false"
                  @dateSelected="setActiveTo"
                ></date-picker>
              </v-col>
            </v-row>
          </v-container>

          <div class="align-end d-flex">
            <v-btn
              block
              class="light-green darken-3"
              @click="
                $emit('confirm', name, url, activeFrom, activeTo)
              "
              >Confirm</v-btn
            >
          </div>
        </v-card-text>
      </v-container>
    </v-card>
  </section>
</template>

<script>
import DatePicker from "./DatePicker.vue";

export default {
  components: {
    DatePicker,
  },
  emits: ["confirm", "close"],
  data() {
    return {
      name: "",
      url: "",
      activeFrom: "",
      activeTo: "",
    };
  },
  methods: {
    setActiveFrom(selectedDate) {
      this.activeFrom = selectedDate;
    },
    setActiveTo(selectedDate) {
      this.activeTo = selectedDate;
    },
  },
};
</script>
