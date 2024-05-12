import './Navbar.scss';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
import profImage from '../../images/profile-1.jpg';
import { IoSunny } from "react-icons/io5";
import { useTheme } from '../../Theme';

const Navbar = () => {

    const {theme, toggleTheme} = useTheme();
   
    return <>
        <div className="navbar">
            <div className="navbarLeft">
                <Link to="/">
                    <span className='logo'>NzukiSocial.</span>
                </Link>

                <IoHomeOutline className='icon' />
                {theme === 'light' ? <FaRegMoon className='icon' onClick={toggleTheme} /> : <IoSunny className='icon' onClick={toggleTheme}/> }
                
                <GrProjects className='icon' />

                <div className='search'>
                    <IoMdSearch className='icon' />
                    <input type="text" placeholder='search' />
                </div>
               
            </div>
            <div className='navbarRight'>
                <div>
                    <CiMail className='icon'/>
                    <FaRegBell className='icon'/>
                    <Link to='/login'>
                        <span className='logout'>Logout</span>
                    </Link>
                </div>
                <Link to="/profile">
                    <div className='profileLink'>
                        <img src={profImage} alt="" />
                        <span>John Doe</span>   
                    </div>
                </Link>
                
            </div>
            
        </div>
    </>
}

export default Navbar