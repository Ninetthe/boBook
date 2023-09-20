import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from '../views/welcome/Welcome';
import LogIn from '../views/login/LogIn';

export default function RouterItem() {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<Welcome/>}></Route>
                <Route path='/login' element={<LogIn/>}></Route>

            </Route>
        </Routes>

    
    </BrowserRouter>

  )
}
