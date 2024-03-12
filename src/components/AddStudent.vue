<script>
import axios from "axios"
export default {
  name: "AddStudent",
  // props: { name: {} },
  data: function () {
    return { name: "", email: "" }
  },
  // mounted: function() {},
  methods: {
    handleChange(e) {
      this[e.target.id] = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      // axios call to the backend

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/students`,
        {
          name: this.name,
          email: this.email,
        }
      )

      this.$refs.success.style.display = "block"

      this.name = ""
      this.email = ""
    },
    close() {
      this.$refs.success.style.display = "none"
    },
  },
}
</script>

<template>
  <form @submit="handleSubmit" class="form shadoww margin">
    <div class="form-row margin">
      <label for="name" class="label">Name:</label>
      <input
        id="name"
        type="text"
        @change="handleChange"
        :value="this.name"
        class="form-control shadoww"
        placeholder="Student Name"
      />
    </div>
    <div class="form-row margin">
      <label for="email" class="label">Email:</label>
      <input
        id="email"
        type="email"
        @change="handleChange"
        :value="this.email"
        class="form-control shadoww"
        placeholder="Student@Email.com"
      />
    </div>
    <div class="form-row margin">
      <!-- <label class="label"></label>
      <label class="label"></label>
      <label class="label"></label> -->

      <button
        type="submit"
        class="btn btn-outline-success shadoww"
        @click="handleSubmit"
      >
        Add
      </button>
      <button type="reset" class="btn btn-outline-danger shadoww">reset</button>
      <!-- <label class="label"></label> -->
    </div>
  </form>

  <div
    ref="success"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
    style="display: none"
  >
    <strong>Student Added</strong>
    <button type="button" class="btn-close" @click="close"></button>
  </div>
</template>
