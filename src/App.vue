<template>
  <div id="container">
    <router-link to="/article/1">Article 1</router-link>
    <router-link to="/article/2" >Article 2</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Abel');

  html, body {
    background: #FCEEB5;
    font-family: Abel, Arial, Verdana, sans-serif;
    a {
      margin-right: 100px;
    }
  }
</style>
