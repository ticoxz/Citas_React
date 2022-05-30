import React from 'react';
import Paciente from './Paciente';

function Listado({ pacientes, setPaciente }) {
  console.log(pacientes.length);
  return (
    <div className='md:w-1/2 md:h-screen lg:w-3/5  overflow-y-scroll '>
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>
            Listado de Pacientes
          </h2>
          <p className='text-lg font-bold mt-5 mb-10 text-center'>
            Administra tus <span className='text-[#6cc8dd]'>Pacientes</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>
            Listado de Pacientes
          </h2>
          <p className='text-lg font-bold mt-5 mb-10 text-center'>
            No hay <span className='text-[#6cc8dd]'>Pacientes</span>
          </p>
        </>
      )}
    </div>
  );
}

export default Listado;
