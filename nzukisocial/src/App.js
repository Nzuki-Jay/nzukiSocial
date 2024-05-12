import './App.scss';
import Login from './Pages/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import Home  from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import { useTheme } from './Theme';


function App() {
  const { theme} = useTheme(); 
 
  return (
    
        <BrowserRouter>
            <div className={theme}>
              <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    
                  </Route>
                  <Route path="/login" element={<Login />} />
              </Routes>
            </div>
         
        </BrowserRouter>       
    
  );
}

export default App;
