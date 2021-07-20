<template>
  <div>
    <template>
      <v-card>
        <v-list dense>
          <v-subheader>Role Information</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in application_roles" :key="i">
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.description"
                  class="text-wrap"
                  @click="updateRoleInformation(`Role Information`)"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    length: 1,
    title: "hello title",
    sheet: false,
    applications: {
      name: "Active to Nullable Test",
      url: "http://ActiveTo.Nullable.Test",
      active_from: "04/05/2018",
      active_to: "07/14/2021",
      package_url: "http://somedummyurl.com",
      icon_url: "",
      description: "blah blah bleh",
    },
    application_roles: [
      {
        description: "Access to Order Entry for Energy Users",
        inquiry_only: "N",
        active_from: "10/12/2020",
        active_to: "11/12/2021",
        modified_by: "KMEDARA",
        last_modified: "10/12/2020",
        config: "Y",
      },
      {
        description: "Access for energy users to esupplyv3 order entry",
        inquiry_only: "N",
        active_from: "10/12/2020",
        active_to: "11/12/2021",
        modified_by: "KMEDARA",
        last_modified: "10/12/2020",
        config: "Y",
      },
      {
        description: "Testing another role!",
        inquiry_only: "N",
        active_from: "10/12/2020",
        active_to: "11/12/2021",
        modified_by: "KMEDARA",
        last_modified: "10/12/2020",
        config: "Y",
      },
    ],
  }),
  methods: {
    // onClickButton(tabName) {
    //   console.log("consoling from child. Value:::: ", tabName);
    //   this.$emit("clicked", tabName);
    // },
    updateRoleInformation(tabName) {
      console.log("consoling from update role information");
      console.log("button value::", tabName);
      this.$emit("clicked", tabName);
    },
  },
};
</script>
