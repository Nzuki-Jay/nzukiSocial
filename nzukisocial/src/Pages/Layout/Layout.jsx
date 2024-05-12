import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../Components/RightSideBar/RightSideBar';
import './Layout.scss';


const Layout = () => {

    return <>
        <div className='main'>
            <Navbar/>
            <div className='content'>
                <LeftSideBar />
                <Outlet />
                <RightSideBar/>
            </div>     
        </div>
    </>
}

export default Layout