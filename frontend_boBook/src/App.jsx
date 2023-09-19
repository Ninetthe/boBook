import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './views/Welcome'

import useFetch from './service/useFetch'

function App() {

  const {data} = useFetch("http://127.0.0.1:8000/api/users")
  console.log(data)

  return (
    <>
    <Welcome></Welcome>
  
  
            <div>
                <h1>LISTADO GENERAL DE USUARIOS</h1>
                <ul>
                    {data?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
            </>
  )
    
}

    

export default App
