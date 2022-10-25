import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../Shared/Home/Home"
import FAQ from "../Shared/FAQ/FAQ"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Blog from "../Pages/Blog/Blog"
import Courses from "../Pages/Courses/Courses"
import CourseDetails from "../Pages/CourseDetails/CourseDetails"
import Checkout from "../Pages/Checkout/Checkout"



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/Courses',
                    element: <Courses></Courses>
                },
                {
                    path: '/CourseDetails/:id',
                    element: <CourseDetails></CourseDetails>,
                    loader: ({params}) => fetch(`http://localhost:5000/CourseDetails/${params.id}`)
                },
                {
                    path: '/Checkout/:id',
                    element: <Checkout></Checkout>,
                    loader: ({params}) => fetch(`http://localhost:5000/CourseDetails/${params.id}`)
                },
                {
                    path: '/FAQ',
                    element: <FAQ></FAQ>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/Register',
                    element: <Register></Register>
                },
                {
                    path: '/Blog',
                    element: <Blog></Blog>
                }
        ]
    }
])