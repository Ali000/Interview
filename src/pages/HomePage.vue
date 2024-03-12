<script>
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL
    export default {
        name: "HomePage",
        data: () => ({
            name: "",
            students: [],
        }),
        mounted() {
            this.getAllStudents();
        },
        methods: {
           async getAllStudents () {
                let response = await axios.get(`${BASE_URL}/students/`)
                this.students = response.data;
                // console.log(this.students)
            },
            navigateItem(id) {
                this.$router.push(`viewstudent/${id}`)
            }
        },
    }
</script>
<template>
    <div class="container">
        <table class="table table-hover border">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">GPA</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="student in students">
      <td>{{ student.name }}</td>
      <td>Calculated GPA HERE</td>
      <td class="d-flex justify-content-center"><button @click="navigateItem(student._id)" class="btn btn-primary">Details</button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>