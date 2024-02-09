import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscSignOut } from "react-icons/vsc";
import { useAppContext } from '../context/Context';
import loginImg from '../assets/gym.jpg';

function Recontra() {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: '',
      });
      const { rol, setRol } = useAppContext();
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      }
    
      const cerrarSesion = () => {
        setRol(null);
        navigate('/');
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
      }
    
      return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
          <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
          </div>
          <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
              <h2 className='text-4xl text-white font-bold text-center'>RECUPERAR CONTRASEÑA</h2>
              <div className='flex flex-col text-gray-400 py-2'>
                <label>Contraseña nueva</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" name="fullName" onChange={handleChange} />
              </div>
              <div className='flex flex-col text-gray-400 py-2'>
                <label>Repita la contraseña</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="password" onChange={handleChange} />
              </div>
              <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teak-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">Actualizar</button>
              <button onClick={cerrarSesion} className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg' type="submit"><center><VscSignOut size={20} /></center></button>
            </form>
          </div>
        </div>
      );
    }

export default Recontra;