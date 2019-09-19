<template>
  <div class="app">
    <Nav />
    <router-view />
  </div>
</template>

<style lang="scss">
.app {
  position: relative;
  height: 100%;
  background-color: $dark;
  color: $white;
}
</style>
