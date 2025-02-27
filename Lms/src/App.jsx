import { Route, Routes, useMatch } from "react-router-dom"
import Home from "./pages/student/Home"
import CourseList from "./pages/student/CourseList"
import Player from "./pages/student/Player"
import MyEnrollments from "./pages/student/MyEnrollments"
import CourseDetail from "./pages/student/CourseDetail"
import Loading from "./components/student/Loading"
import Educator from "./pages/educator/Educator"
import AddCourse from "./pages/educator/AddCourse"
import Dashboard from "./pages/educator/Dashboard"
import MyCourses from "./pages/educator/MyCourses"
import StudentsEnrolled from "./pages/educator/StudentsEnrolled"
import Navbar from "./components/student/Navbar"

function App() {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className="text-default min-h-screen bg-white">
{!isEducatorRoute && <Navbar/>}
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/course-list' element={<CourseList/>}/>
  <Route path='/course-list/:input' element={<CourseList/>}/>
  <Route path='/player/:id' element={<Player/>}/>
  <Route path='/my-enrollments' element={<MyEnrollments/>}/>
  <Route path='/course/:id' element={<CourseDetail/>}/>
  <Route path='/loading/:path' element={<Loading/>}/>
  <Route path="/educator" element={<Educator/>}>
{/* <Route path="educator" element={<Educator/>}/> */}
<Route path="add-course" element={<AddCourse/>}/>
<Route path="dashboard" element={<Dashboard/>}/>
<Route path="my-courses" element={<MyCourses/>}/>
<Route path="students-enrolled" element={<StudentsEnrolled/>}/>

  </Route>
</Routes>
    </div> 
  )
}

export default App
