import { createWebHistory, createRouter } from "vue-router"

import HomePage from "./pages/HomePage.vue"
import AddCourse from "./components/AddCourse.vue"
import ViewStudent from "./components/ViewStudent.vue"
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
    path:"/viewstudent/:student_id", component: ViewStudent, name: "ViewStudent"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
