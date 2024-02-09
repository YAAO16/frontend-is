import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcBusinessman, FcList } from 'react-icons/fc';
import { Transition } from '@headlessui/react';
import { Button, Dropdown } from 'react-bootstrap';
import { BiAdjust } from 'react-icons/bi';
import { useAppContext } from '../context/Context';
import { VscSignOut } from "react-icons/vsc";

function MenuItem({ to, text, icon, onClick }) {
  return (
    <Link
      to={to}
      className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2"
      style={{ fontSize: '20px' }}
      onClick={onClick}
    >
      {icon}
      {text}
    </Link>
  );
}

/*function DropdownMenu({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left-green-500">
      <Button
        variant="primary"
        style={{ color: 'black', fontSize: '20px' }}
        className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} <FcList className="orden" />
      </Button>
      {isOpen && (
        <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg">
          {options.map((option) => (
            <Dropdown.Item
              key={option.href}
              href={option.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {option.text}
            </Dropdown.Item>
          ))}
        </Dropdown>
      )}
    </div>
  );
}*/

function DropdownMenu({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left-green-500">
      <Button
        variant="primary"
        style={{ color: 'black', fontSize: '20px' }}
        className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FcList className="orden" style={{ marginRight: '10px' }} />
        {title}
      </Button>
      {isOpen && (
        <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg">
          {options.map((option) => (
            <Dropdown.Item
              key={option.href}
              href={option.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {option.text}
            </Dropdown.Item>
          ))}
        </Dropdown>
      )}
    </div>
  );
}


function generateMenu(role, onClick) {
  const menuItems = [
    {
      text: 'Evaluación',
      to: '/Evaluacion',
      /*icon: <FcList />,*/
    },
    {
      title: 'Reporte',
      options: [
        { href: '/informesdocentes', text: 'Informes docentes' },
        { href: '/resultadodocentes', text: 'Resultados docentes' },
        {
          href: '#',
          text: 'Resultados todos los docentes',
        },
      ],
    },
    {
      title: 'Informe directivo',
      options: [
        { href: '/evaluaron', text: 'Evaluaron' },
        {
          href: '/infomeresultadoscuantitativos',
          text: 'Informe resultados cuantitativos',
        },
        {
          href: '#',
          text: 'Informe resultados cualitativos',
        },
      ],
    },
    {
      title: 'Gestion',
      options: [
        { href: '/cuestionario',
         text: 'Cuestionario' 
        },
        {
          href: '/informecuestionario',
          text: 'Informe Cuestionario',
        },
        {
          href: '/categoriapregunta',
          text: 'Categoria de preguntas',
        },
        { href: '/basepregunta',
         text: 'Base de preguntas'
        },
        {
          href: '/grupopersona',
          text: 'Grupo de Personas',
        },
      ],
    },
  ];

  if (role === 'cliente') {
    return [menuItems[0]];
  } else if (role === 'entrenador') {
    return [menuItems[0], menuItems[1]];
  }else if (role === 'admin'|| role=== 'superadmin') {
    return menuItems;
  }

  return [];
}

function Menu() {
  const [isOpen, setIsOpen] = useState(true);

  const { rol, setRol } = useAppContext();
  const navigate = useNavigate();

  const toggleMostrarOpciones = () => {
    setIsOpen(!isOpen);
  };

  const cerrarSesion = () => {
    setRol(null);
    navigate('/');
  };
  console.log(rol)
  useEffect(() => {
    if (!rol) {
      navigate('/');
    }
  }, [rol, navigate]);

  const menuItems = generateMenu(rol);

  return (
    <div className="flex h-screen bg-gray-200 relative">
      <button
        className="fixed z-10 inset-0 bg-green-500 relative opacity-50 transition-opacity lg:hidden"
        aria-hidden="true"
      ></button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="fixed z-80 inset-y-0 left-0 w-64 transition duration-300 transform bg-white shadow-lg"
      >
        <div className="p-6 flex flex-col h-full justify-between">
          <div>
            <h1
              className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2"
              style={{ fontSize: '25px' }}
            >
              <FcBusinessman />
              <Link to="/menu">{rol}</Link>
            </h1>
            {menuItems.map((item, index) => {
              if (item.options) {
                return (
                  <DropdownMenu
                    key={index}
                    title={item.title}
                    options={item.options}
                  />
                );
              } else {
                return (
                  <MenuItem
                    key={index}
                    to={item.to}
                    text={item.text}
                    icon={item.icon}
                    onClick={toggleMostrarOpciones}
                  />
                );
              }
            })}
          </div>
          <button
          onClick={cerrarSesion}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-red-300 self-center mb-4"
          style={{
            fontSize: '1.5rem',
          }}
        >
          <VscSignOut size={16} /> 
        </button>
        </div>
      </Transition>
      <div>
        <button
          id="menup"
          className="px-4 py-2 text-white bg-green-800 rounded relative hover:text-stone-950 transition-colors fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'fixed',
            bottom: '4rem',
            right: '4rem',
          }}
        >
          <BiAdjust />
        </button>
      </div>
    </div>
  );
}

export default Menu;
