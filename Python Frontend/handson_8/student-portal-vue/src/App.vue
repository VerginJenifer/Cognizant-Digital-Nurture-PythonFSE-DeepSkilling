<script setup>
import CoursesView from './views/CoursesView.vue'
import Header from './components/Header.vue'
</script>

<template>
  <header>
    <h1>Student Portal</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/courses">Courses</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>