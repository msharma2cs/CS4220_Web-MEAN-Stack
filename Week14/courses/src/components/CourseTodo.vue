<template>
  <div class="columns">
    <div class="column is-three-fifths">
      <!-- To hide checkbox tag completely. -->
      <!-- <label class="checkbox" v-show="!todo.edit"> -->
      <label class="checkbox">
        <input type="checkbox" v-model="todo.done" v-show="!todo.edit"> <span :class="{done: todo.done}">{{todo.description}}</span>
      </label>
      <label class="text" v-show="todo.edit">
        <!-- Works for both : hitting enter key and also with done button. -->
        <input type="text" v-model="todo.description" @keyup.enter="toggleEditTodo(todo)"> <a class="button is-small is-rounded is-dark" @click="toggleEditTodo(todo)">Done</a>
      </label>
    </div>
    <div class="column has-text-right">
      <!-- Edit and Delete icons/link go here -->
      <span class="icon">
        <i class="fa fa-edit has-text-info" @click="toggleEditTodo(todo)"></i>
      </span>
      <span class="icon">
        <i class="fa fa-trash has-text-danger" @click="deleteTodo( course.id, todo)"></i>
      </span>
    </div>
  </div>
</template>


<script>
  import { store } from '../store.js';
  export default {
      name: 'CourseTodo',
      data () {
          return {
          }
      },
      props: ['todo', 'course'],
      methods: {
        toggleTodo (courseId, description) {
          store.toggleTodo(courseId, description )
        },
        toggleEditTodo ( todo ) {
          todo.edit = !todo.edit
        },
        deleteTodo ( courseId, todo) {
          store.deleteOneTodo( courseId, todo)
        }
      }
  }
</script>

<style>
.fa-trash {
    color: red;
}
.done {
  text-decoration: line-through;
}
</style>