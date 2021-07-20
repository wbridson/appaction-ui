<template>
  <v-card class="mx-auto">
    <v-list-item>
      <v-container>
        <v-text-field
          label="Application Name"
          v-model="applications.name"
        ></v-text-field>
        <v-text-field label="URL" v-model="applications.url"></v-text-field>
        <template>
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
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>

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
        </template>

        <v-text-field
          label="Package URL"
          v-model="applications.package_url"
        ></v-text-field>
        <v-text-field
          label="Icon URL"
          v-model="applications.icon_url"
        ></v-text-field>
        <v-text-field
          label="Description"
          v-model="applications.description"
        ></v-text-field>
      </v-container>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    length: 1,
    applications: {
      name: "Active to Nullable Test",
      url: "http://ActiveTo.Nullable.Test",
      active_from: "04/05/2018",
      active_to: "07/14/2021",
      package_url: "http://somedummyurl.com",
      icon_url: "",
      description: "blah blah bleh",
    },
        links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-human-male-female", text: "Actions", route: "/actions" },
      { icon: "mdi-account-settings", text: "Users", route: "/users" },
      {
        icon: "mdi-text-account",
        text: "Restrictions",
        route: "/restrictions",
      },
      { icon: "mdi-texture", text: "Dependencies", route: "/dependencies" },
      { icon: "mdi-apps-box", text: "Attributes", route: "/attributes" },
      { icon: "mdi-apps-box", text: "Applications", route: "/application" },
    ],
        items: [
      { text: "Roles", disabled: false, href: "roles" },
      { text: "Attributes", disabled: false, href: "attributes" },
      { text: "Menus", disabled: false, href: "roles" },
      { text: "Restrictions", disabled: false, href: "restrctions" },
      { text: "Registration", disabled: false, href: "registration" },
      { text: "Dependencies", disabled: true, href: "dependencies" },
    ],
    item_test: [
      { text: "Roles", disabled: false, href: "roles" },
      { text: "Attributes", disabled: false, href: "attributes" },
    ],
  }),
};
</script>
