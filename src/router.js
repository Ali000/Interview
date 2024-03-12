import { createWebHistory, createRouter } from "vue-router"

import HomePage from "./pages/HomePage.vue"
import AddCourse from "./components/AddCourse.vue"
const routes = [
  {
    path: "/",
    component: HomePage,
    name: "HomePage",
  },
  {
    path: "/add",
    comopnent: AddCourse,
    name: "AddCourse",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
