<template>
  <div class="column has-text-right">
      <a class="button is-rounded is-primary" href="#" @click="deleteDoneTodo()">Archive</a>
  </div>
</template>

<script>
    import { store } from '../store.js';

    export default {
        name: "Archive",
        methods: {
            deleteDoneTodo() {
                store.deleteDoneTodos()
            }
        }
    }
</script>

<style>

</style>
