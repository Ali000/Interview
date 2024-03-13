<script>
import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL

export default {
  name: "ViewStudent",
  data: () => ({
    student: [], //grades
    courses: [],
    enrolled: [],
    newCourse: "",
    gpa: null,
    iterator: null,
  }),
  mounted: async function () {
    let count = 0
    let studentId = this.$route.params.student_id
    const courseResponse = await axios.get(`${BASE_URL}/courses`)
    const response = await axios.get(
      `${BASE_URL}/grades/studentgrades/${this.$route.params.student_id}`
    )
    this.courses = courseResponse.data
    if (response.data.length > 0) {
      this.student = response.data
      this.iterator = response.data[0]
      response.data.forEach((element) => {
        count += element.score
      })
      this.gpa = count / response.data.length
    } else {
      const res = await axios.get(`${BASE_URL}/students`)
      this.student = res.data.filter((student) => student._id === studentId)
    }
    console.log(response.data)
    // console.log(response.data[0])
    // console.log(this.iterator)
    // console.log(this.gpa);
  },
  methods: {
    async addCourse(event) {
      event.preventDefault()
      let response = await axios.put(
        `${BASE_URL}/students/${this.$route.params.student_id}/`,
        { courseId: this.newCourse }
      )
      let gradeRes = await axios.post(
        `${BASE_URL}/grades/${this.$route.params.student_id}/${this.newCourse}`
      )
    },
    handleChange(event) {
      this.newCourse = event.target.value
    },
  },
}
</script>

<template>
  <div class="d-flex justify-content-evenly">
    <div>
      <div class="card mt-5 mx-auto" style="width: 18rem">
        <div class="card-header">Student Information</div>
        <ul class="list-group list-group-flush">
          <div v-for="item in student">
            <li v-if="item.name" class="list-group-item">{{ item.name }}</li>
            <li v-if="item.email" class="list-group-item">{{ item.email }}</li>
            <li v-if="item.email" class="list-group-item">{{ gpa }}</li>
          </div>
          <li v-if="iterator" class="list-group-item">
            {{ iterator.studentId.name }}
          </li>
          <li v-if="iterator" class="list-group-item">
            {{ iterator.studentId.email }}
          </li>
          <li v-if="iterator" class="list-group-item">{{ gpa }}</li>
        </ul>
      </div>
      <form @submit="addCourse">
        <select
          @change="handleChange"
          class="form-select mt-5 mx-auto"
          aria-label="Default select example"
          style="width: 18rem"
        >
          <option v-for="course in courses" :value="course._id">
            {{ course.name }}
          </option>
        </select>
        <input type="text" hidden style="display: none" />
        <div class="d-flex justify-content-center">
          <button class="btn btn-primary my-4">Enroll</button>
        </div>
      </form>
    </div>
    <div v-if="gpa">
      <div class="card mt-5 mx-auto" style="width: 24rem">
        <div class="card-header">Courses Grades</div>
        <ul class="list-group list-group-flush">
          <div v-for="course in student">
            <li class="list-group-item d-flex justify-content-between">
              <span>{{ course.courseId.name }}</span>
              <span>{{ course.letter }}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
