<template>
  <section width="300" class="pa-10">
    <v-card width="300" height="300" class="" color="secondary lighten-2">
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
          <v-container class="text-subtitle-1 pt-1 mr-0">
            <v-row>
              <v-col>
                <v-text-field
                  label="Active From"
                  v-model="activeFrom"
                  type="text"
                  readonly
                  class="text-subtitle-2 pt-7 "
                  @click="OpenFromDateSelector"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Active To"
                  v-model="activeTo"
                  type="text"
                  readonly
                  class="text-subtitle-2 pt-7"
                  @click="OpenToDateSelector"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row v-if="isSelectingFrom && !isSelectingTo" justify="center" class="float-end">
              <v-date-picker
                v-model="activeFrom"
                year-icon="mdi-calendar-blank"
                prev-icon="mdi-skip-previous"
                next-icon="mdi-skip-next"
                elevation="24"
                @change="OpenFromDateSelector"
              ></v-date-picker>
            </v-row>
            <v-row v-if="isSelectingTo && !isSelectingFrom" justify="center" class="float-end">
              <v-date-picker
                v-model="activeTo"
                year-icon="mdi-calendar-blank"
                prev-icon="mdi-skip-previous"
                next-icon="mdi-skip-next"
                elevation="24"
                @change="OpenToDateSelector"
              ></v-date-picker>
            </v-row>
          </v-container>
          <div class="align-end d-flex">
            <v-btn
              v-if="!isSelectingFrom && !isSelectingTo"
              block
              class="light-green darken-3"
              @click="$emit('confirm', name, url, activeFrom, activeTo, usersOnline)"
              >Confirm</v-btn
            >
          </div>
        </v-card-text>
      </v-container>
    </v-card>
  </section>
</template>

<script>
export default {
  emits: ["confirm", "close"],
  data() {
    return {
      name: "",
      url: "",
      usersOnline: "",
      isSelectingFrom: false,
      isSelectingTo: false,
      activeFrom: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      activeTo: "",
    };
  },
  methods: {
    OpenFromDateSelector() {
      this.isSelectingTo = false;
      this.isSelectingFrom = !this.isSelectingFrom;
      console.log("change");
    },
    OpenToDateSelector() {
      this.isSelectingFrom = false;
      this.isSelectingTo = !this.isSelectingTo;
    },
  },
};
</script>
