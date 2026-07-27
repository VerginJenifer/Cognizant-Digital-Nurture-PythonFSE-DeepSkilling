<template>
  <div>
    <h2>Courses</h2>

    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search courses"
    />

    <p v-if="store.message">
      {{ store.message }}
    </p>

    <div
      v-for="course in filteredCourses"
      :key="course.id"
    >
      <CourseCard
        :name="course.name"
        :code="course.code"
        :credits="course.credits"
        :grade="course.grade"
      />

      <button @click="store.enroll(course)">
        Enroll
      </button>
    </div>

  </div>
</template>


<script setup>
import CourseCard from '../components/CourseCard.vue'
import { ref, onMounted, computed } from 'vue'
import { useEnrollmentStore } from '../stores/enrollment'


const courses = ref([])

const searchTerm = ref('')

const store = useEnrollmentStore()


onMounted(() => {
  courses.value = [
    {
      id: 1,
      name: "Data Structures",
      code: "CS101",
      credits: 4,
      grade: "A"
    },
    {
      id: 2,
      name: "Web Development",
      code: "CS102",
      credits: 3,
      grade: "B+"
    },
    {
      id: 3,
      name: "Database Management",
      code: "CS103",
      credits: 3,
      grade: "A"
    },
    {
      id: 4,
      name: "Artificial Intelligence",
      code: "CS104",
      credits: 4,
      grade: "A+"
    },
    {
      id: 5,
      name: "Machine Learning",
      code: "CS105",
      credits: 4,
      grade: "B"
    }
  ]
})


const filteredCourses = computed(() => {
  return courses.value.filter(course =>
    course.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase())
  )
})
</script>


<style scoped>

</style>