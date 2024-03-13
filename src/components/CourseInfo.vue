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
  <h2 class="h2">{{ this.$route.params.courseName }}</h2>
  <div>
    <h4 v-for="student in students" :value="student.studentId.name">
      <b class="red">Student Name:</b> {{ student.studentId.name }}
      <b class="red">Grade:</b>
      {{ student.letter }}
    </h4>
    <h4 v-if="!students[0]?.studentId?.name">
      No Students Registered For This Course
    </h4>
  </div>
</template>
<style>
.red {
  text-decoration-line: underline;
}
.h2 {
  padding-top: 25px;
}
</style>
