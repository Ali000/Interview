import { createWebHistory, createRouter } from "vue-router"
import HomePage from "./pages/HomePage.vue"
import AddCourse from "./components/AddCourse.vue"
import ViewStudent from "./components/ViewStudent.vue"
import Courses from "./components/Courses.vue"
import AddStudent from "./components/AddStudent.vue"

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "HomePage",
  },
  {
    path: "/addCourse",
    component: AddCourse,
    name: "AddCourse",
  },
  {
    path:"/viewstudent/:student_id", component: ViewStudent, name: "ViewStudent"
  },
  {
    path: "/courses",
    component: Courses,
    name: "Courses",
  },
  {
    path: "/addStudent",
    component: AddStudent,
    name: "AddStudent",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
