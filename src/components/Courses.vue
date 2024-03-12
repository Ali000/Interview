<script>
export default {
  name: "Courses",
  methods: {
    handleChange(e) {
      this[e.target.id] = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      // axios call to the backend

      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/courses`, {
        name: this.name,
        email: this.email,
      })

      this.name = ""
      this.email = ""
    },
  },
}
</script>
<template>
  <input placeholder="search course" @change="value" type="text" /><button
    @click="search"
  >
    search
  </button>
  <ul>
    <li>math</li>
    <li>pysics</li>
    <li>chemistry</li>
  </ul>
</template>
<style></style>
