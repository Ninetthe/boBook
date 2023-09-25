import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/atoms/navbar/Navbar';
import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/";

async function getUser() {
  try {
    const response = await axios.get(`${baseUrl}api/users`);
    console.log(response.data);
    console.log(response)
    return response;
    
  } catch (error) {
    console.error(error);
    throw error; // Re-lanza el error para que pueda ser manejado en otro lugar si es necesario.
  }
}


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null); // Inicializa user como null en lugar de un arreglo vacío.
  // console.log(user)
  useEffect(() => {
    async function loadUser() {
      try {
        const response = await getUser();
        if (response.status === 200) {
          setUser(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        // Maneja el error aquí, por ejemplo, mostrando un mensaje de error.
        console.error("Error al cargar el usuario:", error);
        setIsLoading(false);
      }
    }
    loadUser();
  
  }, []); // Agrega un arreglo vacío como segundo argumento para que useEffect se ejecute solo una vez.

  return (
    <div>
      <h3>
        Welcome,
        <ul>
       {user?.map((user)=>(
        <li key={user.id}>{user.name}</li>
        ))}

        </ul>
      </h3>

      <Navbar />

      Bienvenido al Home
    </div>
  )
}
