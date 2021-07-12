<template>
  <v-row justify="center" class="float-end">
    <v-date-picker
      v-model="picker"
      year-icon="mdi-calendar-blank"
      prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next"
      elevation="24"
    ></v-date-picker>
  </v-row>
</template>

<script>
export default {
    data(){
        return{
            picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        };
    }
}
</script>