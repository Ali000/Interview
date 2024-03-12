import { createWebHistory, createRouter } from "vue-router"

import HomePage from "./pages/HomePage.vue"
import AddCourse from "./components/AddCourse.vue"
import Courses from "./components/Courses.vue"
const routes = [
  {
    path: "/",
    component: HomePage,
    name: "HomePage",
  },
  {
    path: "/add",
    component: AddCourse,
    name: "AddCourse",
  },
  {
    path: "/course",
    component: Courses,
    name: "Courses",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
