<template>
  <div id="app" class="container">
    <Archive />
    <CourseTodoEntry />
    <CourseSchedule />
  </div>
</template>

<script>
import Archive from './components/Archive.vue'
import CourseSchedule from './components/CourseSchedule.vue'
import CourseTodoEntry from './components/CourseTodoEntry.vue'

export default {
  name: 'app',

  // NOTE: The following syntax has been allowed since ES2015
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
  data () {
    return {
    }
  },
  components: {
    Archive,
    CourseSchedule,
    CourseTodoEntry
  }
}
</script>

<style>
</style>
