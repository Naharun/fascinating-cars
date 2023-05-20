import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import AllToys from "../pages/Home/allToys/allToys";
import Blog from "../pages/Home/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import SingleCarDetails from "../pages/SingleCarDetails/SingleCarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/toys')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <RegistrationPage></RegistrationPage>
      },
      {
        path: '/viewDetails/:id',
        element: <SingleCarDetails></SingleCarDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
      },
    ]
  },
]);

export default router;