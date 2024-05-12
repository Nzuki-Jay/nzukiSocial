import './Profile.scss'
import Posts from '../../Components/Posts/Posts'
import background from '../../images/background.jpg';
import profileImg from '../../images/profile-1.jpg';
import { FaFacebook, FaInstagramSquare, FaDev, FaLinkedinIn, FaPinterest, FaTwitter, FaEllipsisV } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";

const Profile = () => {
    return <>
        <div className="profileContainer">

            <div className='profile'>
                <img className='backgroundImg' src={background} alt="" />

                <div className='profileImg'>
                    <img src={profileImg} alt='' />

                </div>

                <div className="profileDetails">
                    <div className='left'>
                        <FaFacebook/>
                        <FaInstagramSquare/>
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaPinterest />
                    </div>
                    <div className='center'>
                        <span>John Doe</span>

                        <div className='locations'>
                            <div>
                                <CiLocationOn />
                                <span>USA</span>
                            </div>

                            <div>
                                <FaDev />
                                <span>Nzuki Dev</span>
                            </div>
                            
                        </div>

                        <button>
                            Follow
                        </button>

                    </div>

                    <div className='right'>
                        <FaRegMessage />
                        <FaEllipsisV />         
                    </div>
                </div>
            </div>

            <div className='posts'>
                <Posts />
            </div>
           
        </div>
       
    </>
}

export default Profile