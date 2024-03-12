<script>
import axios from "axios"
export default {
  name: "AddCourse",
  // props: { name: {} },
  data: function () {
    return { course: { name: "" } }
  },
  // mounted: function() {},
  methods: {
    handleChange(e) {
      this.name = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      // axios call to the backend
      // await axios.post("get")
    },
  },
}
</script>

<template>
  <form action="">
    <input type="text" />
  </form>
</template>

