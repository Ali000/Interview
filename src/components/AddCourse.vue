<script>
import axios from "axios"
export default {
  name: "AddCourse",
  // props: { name: {} },
  data: function () {
    return { name: "" }
  },
  // mounted: function() {},
  methods: {
    handleChange(e) {
      this.name = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      // axios call to the backend

      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/courses`, {
        name: this.name,
      })

      this.$refs.success.style.display = "block"
      this.name = ""
    },
    close() {
      this.$refs.success.style.display = "none"
    },
  },
}
</script>

<template>
  <!-- <div class="flex-row margin"> -->
  <h2>Add New Course</h2>
  <form action="" class="form shadoww margin">
    <div class="form-row margin">
      <label for="" class="">Name:</label>
      <input
        type="text"
        @change="handleChange"
        :value="this.name"
        class="form-control center shadoww search"
        placeholder="Course Name"
      />
    </div>
    <div class="form-row margin">
      <button
        type="submit"
        class="btn btn-outline-success shadoww"
        @click="handleSubmit"
      >
        Add
      </button>
      <button type="reset" class="btn btn-outline-danger shadoww">reset</button>
    </div>
  </form>

  <div
    ref="success"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
    style="display: none"
  >
    <strong>Course Added</strong>
    <button type="button" class="btn-close" @click="close"></button>
  </div>
  <!-- </div> -->
</template>
