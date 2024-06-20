import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Dashboard/Home/Home'
import StoreUsers from '../Pages/Dashboard/StoreUsers/StoreUsers'
import DashboardLayout from '../Pages/Dashboard/DashboardLayout'
import Pricing from '@/Pages/Dashboard/Pricing/Pricing'
import Category from '@/Pages/Dashboard/Categories/category'
import AddCategory from '@/Pages/Dashboard/Categories/AddCategory/AddCategory'
import AddProduct from '@/Pages/Dashboard/Products/AddProduct/Addproduct'
import Product from '@/Pages/Dashboard/Products/product'
import LandingLayout from '@/Pages/LandingPage/LandingLayout'
import Signup from '@/Pages/LandingPage/Signup/Signup'
import LoginForm from '@/Pages/LandingPage/Login/LoginForm'
import EmailVer from '@/Pages/LandingPage/ForgotPass/EmailVer'
import OtpVer from '@/Pages/LandingPage/ForgotPass/OtpVer'
import SetPass from '@/Pages/LandingPage/ForgotPass/SetPass'
import Home_LandingPage from '@/Pages/LandingPage/Home/Home'
import Discount from '@/Pages/Dashboard/Discount/Discount'
import CreateDiscount from '@/Pages/Dashboard/Discount/CreateDiscount/createDiscount'

const router = createBrowserRouter([
    {
        element: <DashboardLayout />,
        children:[
            {
                path: '/dashboard',
                element: <Home />
            },
            {
                path: '/storeusers',
                element: <StoreUsers />
            },
            {
                path: '/pricing',
                element: <Pricing />
            },{
                path: '/categories',
                element: <Category />,
            },
            {
                path: '/add-category',
                element: <AddCategory />
            },
            {
                path: '/products',
                element: <Product />
            },
            {
                path: '/add-product',
                element: <AddProduct />
            },
            {
                path: '/discount',
                element: <Discount />
            },
            {
                path: '/create-discount',
                element: <CreateDiscount />
            },
        ]
    },
    {
        element: <LandingLayout />,
        children: [
            {
                path: '/',
                element: <Home_LandingPage />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/forgot-password',
                element: <EmailVer />
            },
            {
                path: '/verify-otp',
                element: <OtpVer />
            },
            {
                path: '/set-new-password',
                element: <SetPass />
            }
        ]
    }
])


function RouterApp() {
   
  return (
    <RouterProvider router={router} /> 
  )
}

export default RouterApp
