<template>
  <header>
    <h1>Student Portal</h1>

    <p>
      Enrolled Courses: {{ store.enrolledCourses.length }}
    </p>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/courses">Courses</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()
</script>

<style scoped>

</style>