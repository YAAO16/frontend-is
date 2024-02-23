// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';
import loginImg from '../assets/rest.jpg';
import '../css/Login.css';
import { useAppContext } from '../context/Context';

const baseUrl = "https://itpsoftback-production.up.railway.app/auth/signin"; // no estas llamando a esta url la tienes en la linea 31

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { rol, setRol } = useAppContext(); 
  console.log(rol)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const iniciarSesion = async (e) => { 
    e.preventDefault(); 

    try {
      const user = await loginUser(form.email, form.password);
      console.log(user)
      if (user) {
        console.log("entre en el if")
        navigate("/menu");
        //setRol(user.rol);
        
      } else {
        alert("El usuario o la contraseña no son correctos");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error al iniciar sesión. Por favor, inténtelo de nuevo.");
    }
  }

  const handleRegister = () => {
    navigate("/registrar");
  }

  const handleForgotPassword = () => {
    navigate("/Recontra");
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="" />
      </div>
      <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={iniciarSesion}>
 
          <h2 className='text-4xl text-white font-bold text-center'>INICIAR SESIÓN</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Email</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" name="email" onChange={handleChange} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Contraseña</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name='password' onChange={handleChange} />
          </div>
          
          <button className='w-full my-2 py-2 bg-teal-500 shadow-lg shadow-teak-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">Iniciar Sesión</button>
            <hr className="border-t border-white-400 my-8" />
          <button className='w-full my-2 py-2 bg-blue-500 shadow-lg shadow-teak-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="button" onClick={handleRegister}>Registrar</button>
          <button className='w-full my-2 py-2 bg-yellow-500 shadow-lg shadow-teak-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="button" onClick={handleForgotPassword}>Recuperar Contraseña</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

