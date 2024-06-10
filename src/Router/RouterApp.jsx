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

const router = createBrowserRouter([
    {
        element: <DashboardLayout />,
        children:[
            {
                path: '/',
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
            },{
                path: '/add-product',
                element: <AddProduct />
            }
        ]
    },
    {
        element: <LandingLayout />,
        children: [
            {
                path: '/landingpages',
                element: <LandingLayout />
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
