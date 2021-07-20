<template>
  <div>
    <v-card-actions>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-1" dark v-bind="attrs" v-on="on">
            Update
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Update Confirmation
          </v-card-title>

          <v-card-text>
            <h3 class="pa-10">Are you sure you want to update the details?</h3>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red lighten-2" dark @click="dialog = false">
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </div>
</template>
