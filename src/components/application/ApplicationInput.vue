<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-text-field label="Regular" disabled></v-text-field>
      <template>
        <v-container class="px-0" fluid>
          <v-checkbox v-model="checkbox" :label="`Inquiry Only`"></v-checkbox>
        </v-container>
      </template>

      <template>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Active From"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </template>

      <template>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              :return-value.sync="date2"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date2"
                  label="Active To"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu2 = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu2.save(date2)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </template>

      <template>
        <div>
          <v-card-actions>
            <v-dialog v-model="dialog" width="300">
              <template v-slot:activator="{ on, attrs }">
                <v-col class="text-right">
                  <v-btn color="red" dark v-bind="attrs" v-on="on">
                    Update
                  </v-btn>
                  <v-btn
                    color="secondary"
                    class="ml-4"
                    @click="updateConfigSettings('config')"
                  >
                    Config
                  </v-btn>
                </v-col>
              </template>

              <v-card>
                <v-card-title class="text-h5 primary white--text">
                  Confirmation
                </v-card-title>

                <v-card-text class="text-center pa-0 ma-20">
                  <h3 class="pa-10">Update the details?</h3>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="red lighten-2"
                    dark
                    @click="updateConfirmation()"
                    class="mx-5"
                  >
                    Yes
                  </v-btn>

                  <v-btn color="red lighten-2" dark @click="dialog = false">
                    No
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
          <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </template>
    </v-container>
  </v-card>
</template>

<script>
import confirmation from "../UI/UpdateButton.vue";

export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    valid: true,
    sheet: false,
    snackbar: false,
    text: "Data has been updated!",
    timeout: 2000,
    dialog: false,
  }),

  component: { confirmation },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    updateConfirmation() {
      this.snackbar = true;
      this.dialog = false;
      //this.$emit("clicked", "someValue");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    updateConfigSettings(tabName) {
      console.log("Updating config settings:: ", tabName);
      this.$emit("clicked", tabName);
    },
  },
};
</script>