import './Login.scss';
import BgImage from '../../images/img.jpg';
import { Link } from 'react-router-dom';

const LoginComponent = ({setPage}) => {
    return <>
        <div className="loginComponent">
            <div className="loginLeft">
                    
                <img src={BgImage} alt="" />       
                
                <div className='overlay'>
                    <h1>Hello World.</h1>

                    <p>
                        Welcome to our social hub! Explore,
                        engage, and connect with our diverse community.
                        Join us in sharing stories, ideas, and
                        experiences. Let's journey together!
                        </p>

                        <span>Don't Have an account?</span>
                        <button onClick={() => {setPage('register')}}>Sign Up</button>
                </div>
            </div>

            <div className="loginRight">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username...' />
                    <input type="text" placeholder='Password...' />
                    <Link to='/'>
                      <button type="submit">Login</button>
                    </Link>
                    
                </form>
            </div>
            
        </div>

    </>
}

export default LoginComponent