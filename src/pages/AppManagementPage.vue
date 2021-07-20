<template>
  <div>
    <v-container class="hidden-sm-and-up">
      <template>
        <v-card>
          <v-tabs v-model="tab" background-color="primary" dark>
            <v-tab
              v-for="n in length"
              :key="n"
              @click="onClickTab(applicationHeaders[n - 1])"
            >
              {{ applicationHeaders[n - 1] }}
            </v-tab>
          </v-tabs>

          <div v-if="lastClickedItem === 'Application'">
            <Application />
          </div>

          <div v-if="lastClickedItem === 'Roles'">
            <RoleItems @clicked="testingNewTab" />
          </div>

          <div v-if="lastClickedItem === 'Role Information'">
            <RoleInputForm @clicked="testingNewTab" />
          </div>

          <div v-if="lastClickedItem === 'Testing'">
            <Testing @clicked="testingNewTab" />
          </div>

          <v-navigation-drawer v-model="drawer" app class="primary">
            <v-list>
              <v-list-item-group v-model="selectedItem" color="white">
                <v-list-item
                  v-for="(item, i) in links"
                  :key="i"
                  router
                  :to="item.route"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </template>
      <v-footer fixed class="primary hidden-sm-and-up">
        <v-row>
          <v-col>
            <v-icon dark @click="drawer = !drawer">mdi-menu</v-icon>
          </v-col>

          <v-col> </v-col>

          <v-col> </v-col>

          <v-col class="text-right px-0">
            <v-btn
              @click="navigateMenuDecrease()"
              :disabled="!length"
              depressed
              class="primary"
              tile
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-col>

          <v-col class="text-right px-0 pt-2">
            <v-menu top :offset-y="offset" transition="slide-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon color="white" large>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="navigateMenu(item.text)"
                >
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
import Application from "../components/application/ApplicationContent.vue";
import RoleItems from "../components/application/ApplicationItems.vue";
import RoleInputForm from "../components/application/ApplicationInput.vue";

export default {
  components: { Application, RoleItems, RoleInputForm },
  data: () => ({
    tab: null,
    tabClicked: "null",
    offset: true,
    sheet: false,
    tabs: null,
    length: 1,
    lastClickedItem: "Application",
    //alignments: ["start", "center", "end"],
    //text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    applicationMenu: [
      "Roles",
      "Attributes",
      "Users",
      "Registration",
      "Dependencies",
    ],
    applications: {
      name: "Active to Nullable Test",
      url: "http://ActiveTo.Nullable.Test",
      active_from: "04/05/2018",
      active_to: "07/14/2021",
      package_url: "http://somedummyurl.com",
      icon_url: "",
      description: "blah blah bleh",
    },
    model: 1,
    applicationHeaders: ["Application"],
    drawer: false,
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
      { text: "Testing", disabled: true, href: "dependencies" },
    ],
    // item_test: [
    //   { text: "Roles", disabled: false, href: "roles" },
    //   { text: "Attributes", disabled: false, href: "attributes" },
    // ],
  }),
  watch: {
    length(val) {
      this.tab = val - 1;
    },
  },
  methods: {
    onClickTab(clicked) {
      this.tabClicked == clicked;
      this.lastClicked(clicked);
      console.log("Tab clicked:", clicked);
    },
    // onClickChild(value) {
    //   console.log("consoling from parent role",value); // someValue
    // },
    navigateMenu(clickedButton) {
      console.log(clickedButton);
      this.lastClicked(clickedButton);
      console.log(this.applicationHeaders);
      var last_item = this.applicationHeaders.slice(-1)[0];

      if (clickedButton === last_item) {
        return;
      }

      console.log(this.applicationHeaders.includes(String(clickedButton)));

      this.applicationHeaders.push(clickedButton);
      this.length++;
    },
    navigateMenuDecrease(clickedButton) {
      if (this.length < 2) {
        return;
      }
      console.log(clickedButton);
      console.log(this.applicationHeaders);
      this.applicationHeaders.pop(clickedButton);
      this.length--;

      this.lastClicked(this.applicationHeaders.slice(-1)[0]);
    },
    lastClicked(clicked_item) {
      console.log("The last clicked item is: ", clicked_item);
      this.lastClickedItem = clicked_item;
    },
    testingNewTab(tabName) {
      console.log("consoling from parent rolecontent", tabName);
      this.onClickTab(tabName);
      this.navigateMenu(tabName);
    },
  },
};
</script>
