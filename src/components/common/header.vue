<template>
<div>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
    <app-sidebar></app-sidebar>
    </v-navigation-drawer>
    <v-toolbar
      color="white darken-3"
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px;text-align: left; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Music</span>
      </v-toolbar-title>
      <v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 500px; min-width: 128px"
      ></v-text-field>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
</div>
</template>

<script>
import appSidebar from './sidebar'
export default {
  name: 'appHeader',
  components: {
    'app-sidebar': appSidebar
  },
  data: () => ({
    drawer: false
  })
}
</script>