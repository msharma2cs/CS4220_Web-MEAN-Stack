import Vue from 'vue';
import { seedData } from './seed.js';

export const store = {
  state: {
    seedData
  },

  getActiveCourse() {
    return this.state.seedData.find((course) => course.active)
  },

  setActiveCourse(courseId) {
    this.state.seedData.map( (courseObj) => {
      courseObj.id === courseId ? courseObj.active = true : courseObj.active = false;
    })
  },

  submitTodo(todoDescription) {
    const activeCourse = this.getActiveCourse();
    activeCourse.todos.push({
      description: todoDescription,
      done: false,
      edit: false
    })
  },

  deleteOneTodo( courseId, todo) {
    this.state.seedData.map( (courseObj) => {
      // find the course the todo is for...
      if ( courseObj.id === courseId ) {
        // delete the todo.
        courseObj.todos = courseObj.todos.filter( (everyTodo) => everyTodo!=todo )
      }
    }) // map: course
  },

  deleteDoneTodos() {
    // for every course object
    this.state.seedData.map( (courseObj) => {
      //for every todo of this course object
      courseObj.todos.map( (todo) => {
        // if this todo is done
        if ( todo.done ) {
          courseObj.todos = courseObj.todos.filter( (todo) => !todo.done )
        }
      }) // map: todo
    }) // map: course
  }

}
