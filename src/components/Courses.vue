<script>
import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL
export default {
  name: "Courses",
  data: () => ({
    searchQuery: "",
    searchedResults: [],
    courses: [],
  }),
  mounted() {
    this.getAllCourses()
  },
  methods: {
    async getAllCourses() {
      let response = await axios.get(`${BASE_URL}/courses`)
      this.courses = response.data
      this.searchedResults = response.data
      console.log(response)
    },
    handleChange(e) {
      this.searchQuery = e.target.value
    },
    ViewCourse(id, courseName) {
      // navigator()
      this.$router.push(`/view/${id}/${courseName}`)
    },

    search(e) {
      this.searchQuery = e.target.value
      this.searchedResults = []
      console.log(this.searchQuery)
      if (this.searchQuery == "") {
        this.searchedResults = this.courses
      } else {
        this.courses.forEach((course) => {
          if (
            course.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) {
            this.searchedResults.push(course)
          }
        })
      }
    },
  },
}
</script>
<template>
  <div class="form shadoww">
    <div class="form-row search-div">
      <input
        class="form-control shadoww search"
        placeholder="search course"
        @keyup="search"
        :value="searchQuery"
        type="text"
      /><button @click="search" class="btn btn-outline-success shadoww">
        search
      </button>
    </div>
    <div
      class="course-div"
      v-for="course in searchedResults"
      :value="course._id"
    >
      <h4 class="course-name" @click="ViewCourse(course._id, course.name)">
        {{ course.name }}
      </h4>
    </div>
  </div>
</template>
<style></style>
