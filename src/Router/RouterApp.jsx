import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Dashboard/Home/Home'
import StoreUsers from '../Pages/Dashboard/StoreUsers/StoreUsers'
import DashboardLayout from '../Pages/Dashboard/DashboardLayout'

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
