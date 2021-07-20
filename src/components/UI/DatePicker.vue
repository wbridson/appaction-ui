<template>
  <section>
    <v-text-field
      v-model="date"
      :label="label"
      :background-color="color"
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
        class="px-6"
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
    defaultDate: {
      type: Boolean,
      required: false,
      default: true,
    },
    label: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    }
  },
  emits: ['update'],
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
      console.log(this.date);
      this.$emit('dateSelected', this.date);
      this.$emit('update', this.date);
    },
    onClickOutside (){
      this.isSelecting = !this.isSelecting;
    },
    
  },
};
</script>
