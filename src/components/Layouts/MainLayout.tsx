import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar.js'
import Footer from '../shared/Footer.js'
import MobileNavbar from '../shared/MobileNavbar.js'
const MainLayout = () => {
  return (
    <div>
      <div className='lg:block hidden'>
      <Navbar/>
      </div>
      <MobileNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;