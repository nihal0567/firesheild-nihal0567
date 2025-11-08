import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/HomePage";
import AllToysList from "../Pages/AllToysList";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "../Context/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import Contact from "../Pages/Contact";
import ForgotPassword from "../Pages/ForgotPassword";
import Add_Product from "../Pages/Add_Product";
import UpdateModel from "../Pages/UpdateModel";
import MyModel from "../Pages/MyModel";
import MyDownload from "../Pages/MyDownload";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        hydrateFallbackElement: <p>Loading...</p>,

        children: [
            {
                index: true,
                element: <Homepage></Homepage>,
                loader: ()=> fetch('https://model-hub-inky.vercel.app/latest-data')
            },
            {
                path: "/toys-list",
                element: <PrivateRoute><AllToysList></AllToysList></PrivateRoute>,
                loader: ()=> fetch('https://model-hub-inky.vercel.app/model')
            },
            {
                path: "/about/:id",
                element: <PrivateRoute><About></About></PrivateRoute>,
            },
            {
                path: "/my-model",
                element: <PrivateRoute><MyModel></MyModel></PrivateRoute>,
            },
            {
                path: "/my-download",
                element: <PrivateRoute><MyDownload></MyDownload></PrivateRoute>,
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateModel /></PrivateRoute>,
                loader: ({params})=> fetch(`https://model-hub-inky.vercel.app/model/${params.id}`)
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
        ]
    },
    {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
    },
    {
        path: "/add-product",
        element: <Add_Product />
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>
    },
])

export default router