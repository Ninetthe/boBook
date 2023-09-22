import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from '../views/welcome/Welcome';
import LogIn from '../views/login/LogIn';
import Register from '../views/register/Register';

export default function RouterItem() {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<Welcome/>}></Route>
                <Route path='/login' element={<LogIn/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/home' element={<Register/>}></Route>

            </Route>
        </Routes>

    
    </BrowserRouter>

  )
}
