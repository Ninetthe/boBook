import React, { useState } from "react";
// import axios from "../../service/axios";
import axios from "axios";
import '../../components/atoms/buttons/button.css'
import './logIn.css';
import Logo from '../../components/atoms/logo/Logo';
import VectorDesign from '../../components/atoms/vectordesign/VectorDesign';
import Button from '../../components/atoms/buttons/Button'
import '../../components/atoms/forms/forms.css'
import '../welcome/welcome.css'
// import useFetch from '../../service/useFetch';
// import DynamicUrl from '../../service/DynamicUrl';


export default function LogIn () {
 
    // const [email, setEmail] = useState("");
   
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState(null);
    // const navigate = useNavigate();


//     handleSubmit =e=>{
//       e.preventDefault
//     }
// state={
//   form:{
//     "email":"",
//     "password":""
//   },
//   error:false,
//   errorMsg:""
// }

// handleChange = async e=>{
//   await this.setState({
//     form:{
//       ...this.state.form,
//       [e.target.name]: e.targe.value
//     }
//   })
// }



return(

    <div className='logInContainer'>
      <VectorDesign></VectorDesign>
      <div className='LogoWelcome'>
        <a className="textDecoration" href="/"><Logo ></Logo></a>
      </div>

      <div className='containerForm'>
        <form>
          <label  id="email" className='styleFormsLabel' htmlFor="email">Email</label>
          <br />
          <input
            className='styleFormsInput'
            id="email"
            name="email"
            type="text"
      
        
          />
          <br />
          <label className='styleFormsLabel' htmlFor="password">Password</label>
          <br />
          <input
            className='styleFormsInput'
     
            name="password"
            type="password"
         
          
          />
        </form>
      </div>
      <Button
        styleButton="bttnGreenMedium"
        texButton="Sign In"
        type="submit"
  
      />
      <a className="resetPassword" href="">Forgot a password</a>
      <p className="styleParagraphLogin">No Account
        <a className='enlaceRegister' href="/register">Sign Up</a>
      </p>
    </div>

)
  
}






  //   //SEGUNDO CODIGO
  //   const csrf = () => axios.get('/sanctum/csrf-cookie')
  //   // const csrf = response.headers.get("Set-Cookie");

  
  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };
  
  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };
  
  //   const login = async () => {
  //       console.log("login")
  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, password }),
  //       });
  
  //       if (response.status === 200) {
  //         // Si la respuesta es exitosa (código 200), redirige al usuario a la página de inicio.
  //       } else {
  //         // Si la respuesta tiene un código de error, maneja el error y muestra un mensaje al usuario.
  //         setError("Error en el inicio de sesión. Verifica tus credenciales.");
  //       }
  //     } catch (error) {
  //       // Maneja errores de red u otros errores.
  //       console.error("Error en la solicitud:", error);
  //       setError("Hubo un problema al iniciar sesión. Por favor, intenta de nuevo más tarde.");
  //     }
  //   };
  
  //    OTRO CODIGO
  //   const handleLogin = async (event) => {
  //     event.preventDefault();
  //     await csrf
  //   try {
  //     await axios.post("/login", {email, password });
   
  //     setEmail("");
  //     setPassword("")
  //     navigate("/home")
  //   } catch (e) {
  //     if (e.response.status === 422) {
  //       setErrors(e.response.data.errors);
  //     }
  //     console.log(e);
  //   }
  // };
  // console.log(handleLogin)
  
