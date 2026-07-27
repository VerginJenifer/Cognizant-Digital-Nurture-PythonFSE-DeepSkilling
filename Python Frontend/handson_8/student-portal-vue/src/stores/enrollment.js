import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useEnrollmentStore = defineStore('enrollment', () => {

  const enrolledCourses = ref([])
  const message = ref('')

  const totalCredits = computed(() => {
    return enrolledCourses.value.reduce(
      (total, course) => total + course.credits,
      0
    )
  })

  function enroll(course) {

    const alreadyEnrolled = enrolledCourses.value.some(
      c => c.id === course.id
    )

    if (alreadyEnrolled) {
      message.value = `${course.name} is already enrolled`
      return
    }

    enrolledCourses.value.push(course)
    message.value = `${course.name} enrolled successfully`
  }

  function unenroll(courseId) {

    enrolledCourses.value = enrolledCourses.value.filter(
      course => course.id !== courseId
    )

    message.value = 'Course removed'
  }

  return {
    enrolledCourses,
    totalCredits,
    message,
    enroll,
    unenroll
  }
})