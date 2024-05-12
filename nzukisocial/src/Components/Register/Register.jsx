import './Register.scss';
import BgImage from '../../images/img.jpg';
import { Link } from 'react-router-dom';

const Register = ({setPage}) => {

    return <>
        <div className="register">
            <div className="registerLeft">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder='Username...' />
                    <input type="text" placeholder='Email...' />
                    <input type="text" placeholder='Password...' />
                    <input type="text" placeholder='Confirm Password...' />
                    <Link to="/">
                        <button type="submit">Register</button>
                    </Link>
                    
                </form>
            </div>
            <div className="registerRight">
                
                <img src={BgImage} alt="" />       
                
                <div className='overlay'>
                    <h1>Nzuki Social.</h1>

                    <p>
                        Welcome to our social hub! Explore,
                        engage, and connect with our diverse community.
                        Join us in sharing stories, ideas, and
                        experiences. Let's journey together!
                     </p>

                     <span>Already Have an account?</span>
                     <button onClick={() => {setPage('login')}}>Sign In</button>
                </div>
            </div>
        </div>
    </>
}

export default Register