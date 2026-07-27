<template>
  <div class="course-card">
    <h2>{{ name }}</h2>
    <p>Code: {{ code }}</p>
    <p>Credits: {{ credits }}</p>
    <p>Grade: {{ grade }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  code: String,
  credits: Number,
  grade: String
})
</script>

<style scoped>
.course-card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
}
</style>