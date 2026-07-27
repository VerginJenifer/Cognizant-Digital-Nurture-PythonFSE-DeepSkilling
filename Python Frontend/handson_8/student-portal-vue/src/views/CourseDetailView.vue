<template>
  <div>
    <h2>Course Details</h2>

    <p>ID: {{ course.id }}</p>
    <p>Name: {{ course.name }}</p>
    <p>Code: {{ course.code }}</p>
    <p>Credits: {{ course.credits }}</p>
    <p>Grade: {{ course.grade }}</p>

    <button @click="enroll">
      Enroll
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const courses = [
  { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, grade: 'A' },
  { id: 2, name: 'Algorithms', code: 'CS102', credits: 4, grade: 'A-' },
  { id: 3, name: 'Databases', code: 'CS201', credits: 3, grade: 'B+' },
  { id: 4, name: 'Operating Systems', code: 'CS202', credits: 4, grade: 'A' },
  { id: 5, name: 'Networks', code: 'CS301', credits: 3, grade: 'B' }
]

const course = courses.find(
  c => c.id === Number(route.params.id)
)

function enroll() {
  router.push('/profile')
}
</script>