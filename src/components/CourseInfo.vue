<script>
import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL
export default {
  name: "CourseInfo",
  data: () => ({
    students: [],
  }),
  mounted() {
    this.getAllCourses()
  },
  methods: {
    async getAllCourses() {
      let response = await axios.get(
        `${BASE_URL}/grades/coursegrades/${this.$route.params.id}`
      )
      this.students = response.data

      console.log(response.data)
    },
  },
}
</script>

<template>
  <h1>{{ this.$route.params.courseName }}</h1>
  <div>
    <h4 v-for="student in students" :value="student.studentId.name">
      {{ student.studentId.name }} {{ student.letter }}
    </h4>
    <h4 v-if="!students[0]?.studentId?.name">
      No Students Registered For This Course
    </h4>
  </div>
</template>
