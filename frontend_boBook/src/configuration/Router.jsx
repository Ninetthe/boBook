import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from '../views/welcome/Welcome';
import LogIn from '../views/login/LogIn';
import Register from '../views/register/Register';
import Home from "../views/home/Home";
import CrudBooklists from '../views/booklists/CrudBooklists';

export default function RouterItem() {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<Welcome/>}></Route>
                <Route path='/login' element={<LogIn/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/booklists' element={<CrudBooklists/>}></Route>
              


            </Route>
        </Routes>

    
    </BrowserRouter>

  )
}
