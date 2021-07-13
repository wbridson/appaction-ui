<template>
  <section>
    <v-text-field
      :label="label"
      v-model="date"
      type="text"
      readonly
      @click="openDateSelector"
    ></v-text-field>
    <v-overlay :value="isSelecting">
    <v-row v-if="isSelecting" justify="center" class="float-end">
      <v-date-picker
        v-model="date"
        year-icon="mdi-calendar-blank"
        prev-icon="mdi-skip-previous"
        next-icon="mdi-skip-next"
        elevation="24"
        v-click-outside="onClickOutside"
        @change="dateSelected"
        
      ></v-date-picker>
    </v-row>
    </v-overlay>
  </section>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    defaultDate: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      isSelecting: false,
      date: this.defaultDate ? new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10) : null,
      
    };
  },
  methods: {
    openDateSelector() {
      this.isSelecting = !this.isSelecting;
      
    },
    dateSelected(){
      this.isSelecting = !this.isSelecting;
      this.$emit('dateSelected', this.date);
    },
    onClickOutside (){
      this.isSelecting = !this.isSelecting;
    }
  },
};
</script>
