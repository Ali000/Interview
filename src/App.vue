<script>
import NavBar from "./components/NavBar.vue"
export default {
  name: "App",
  components: {
    NavBar,
  },
}
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
