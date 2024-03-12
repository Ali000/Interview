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

      this.name = ""
    },
  },
}
</script>

<template>
  <form action="" class="form margin">
    <label for="" class="form-label">Add Course</label>
    <input
      type="text"
      @change="handleChange"
      :value="this.name"
      class="form-control center shadoww"
      placeholder="Course Name"
    />
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
</template>
