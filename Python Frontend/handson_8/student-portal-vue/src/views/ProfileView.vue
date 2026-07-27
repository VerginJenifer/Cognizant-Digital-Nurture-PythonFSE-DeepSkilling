<template>
  <div>
    <h2>Profile</h2>

    <h3>Enrolled Courses</h3>

    <p v-if="store.enrolledCourses.length === 0">
      No courses enrolled
    </p>

    <ul>
      <li
        v-for="course in store.enrolledCourses"
        :key="course.id"
      >
        {{ course.name }} - {{ course.credits }} credits

        <button @click="store.unenroll(course.id)">
          Unenroll
        </button>
      </li>
    </ul>

    <h3>
      Total Credits: {{ store.totalCredits }}
    </h3>

  </div>
</template>

<script setup>
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()
</script>