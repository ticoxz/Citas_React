import React from 'react';
import Paciente from './Paciente';

function Listado() {
  return (
    <div className='md:w-1/2 md:h-screen lg:w-3/5  overflow-y-scroll '>
      <div>
        <h2 className='font-black text-3xl text-center'>
          Listado de Pacientes
        </h2>
        <p className='text-lg font-bold mt-5 mb-10 text-center'>
          Administra tus <span className='text-[#6cc8dd]'>Pacientes</span>
        </p>
      </div>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
}

export default Listado;
