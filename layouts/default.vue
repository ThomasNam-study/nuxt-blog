<template>
  <div>

    <NavTheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <NavTheSidenav :show="displaySidenav" @close="displaySidenav = false"/>
    <Nuxt />
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      displaySidenav: false
    }
  }

}
</script>

<style>
html {
  font-family: 'Noto Sans KR', sans-serif;
}

body {
  margin: 0;
}
</style>
