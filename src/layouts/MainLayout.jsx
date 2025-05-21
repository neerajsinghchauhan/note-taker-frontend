import Navbar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';

const MainLayout = () => {
  return (
    <>
    <Navbar   />
    <ToastContainer />
    <main className="container">
        <Outlet />
    </main>    
    </>
  )
}

export default MainLayout
