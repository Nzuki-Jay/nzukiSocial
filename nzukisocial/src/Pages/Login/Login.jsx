import './Login.scss';
import Register from '../../Components/Register/Register';
import LoginComponent from '../../Components/Login/Login';
import { useState } from 'react';


const Login = () => {
    const [page, setPage] = useState('login');   
    
    return <>
        <div className='login'>
            {page === 'login' ? <LoginComponent setPage={setPage}/> : <Register setPage={setPage} />}
            
        </div>
    
    </>
}

export default Login