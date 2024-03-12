<script>
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
  },
}
</script>

<template></template>
