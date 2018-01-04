<template>
  <div id="app">
    <v-app id="inspire">
    <!-- <app-header></app-header> -->
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>

<script>
import appHeader from './components/common/header'

export default {
  name: 'app',
  components: {
    'app-header': appHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
