/* eslint-disable react/prop-types */
import { Suspense, lazy } from "react"
import { Outlet } from "react-router-dom"
// import Home from "./Home/Home"

const Sidebar = lazy(() => import('@/Components/Sidebar/Sidebar'));

function DashboardLayout() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
      </Suspense>
        <div className="ggs" style={{position: 'relative', left: '240px', backgroundColor: '#F4F7FE', width: 'calc(100% - 240px)', height:'100vh'}}>
            {/* <Home /> */}
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout
