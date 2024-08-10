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
      <div>
      <MobileNavbar/>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;