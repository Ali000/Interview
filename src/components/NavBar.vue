<script>
export default {
  name: "NavBar",
}
</script>
<template>
  <nav class="navbar justify-content-between">
    <router-link to="/" class="color">Home</router-link>

    <router-link to="/addCourse" class="color">Add Course</router-link>
    <router-link to="/courses" class="color">Courses</router-link>
    <router-link to="/addStudent" class="color">Add Student</router-link>
  </nav>
</template>
<style></style>
