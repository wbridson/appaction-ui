<template>
  <section width="300" class="pa-10">
    <v-card width="300" height="300" class="" color="secondary">
      <v-container>
        <div class="d-flex justify-end">
          <v-btn icon @click="$emit('close')"><v-icon>mdi-window-close</v-icon></v-btn>
          
        </div>
        <v-card-text>
          <div class="text-subtitle-1 ">
            <v-text-field
            label="name"
              type="text"
              placeholder="Enter a name for your application"
              hide-details="auto"
              v-model="name"
            />
          </div>
          <div class="text-subtitle-1 pt-5">
            <v-text-field
            label = Users
              type="text"
              placeholder="Users Online"
              hide-details="auto"
              v-model="usersOnline"
            />
          </div>
          <div class="lign-end d-flex align-end pt-10">
            <v-btn block class="light-green darken-3" @click="$emit('confirm', name, usersOnline)"
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
      usersOnline: "",
    };
  },
};
</script>
