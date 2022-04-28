import { useState, useEffect } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del form
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('hay un campo vacios');
    } else {
      console.log('todos llenos');
    }
  };

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <div>
        <h2 className='font-black text-3xl text-center'>
          Seguimiento pacientes
        </h2>

        <p className='font-bold text-lg text-center my-5'>
          Añade Paciente y{' '}
          <span className='text-[#6cc8dd] mt-5'>Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-lg rounded-lg py-10 px-5'>
          <div className='mx-[30px]'>
            <div className='mb-5'>
              <label htmlFor='mascota' className='block text-gray-700'>
                Nombre Mascota
              </label>
              <input
                id='mascota'
                type='text'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder='nombre de la mascota'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='propietario' className='block text-gray-700'>
                Nombre Propietario
              </label>
              <input
                id='propietario'
                value={propietario}
                onChange={(e) => setPropietario(e.target.value)}
                type='text'
                placeholder='nombre de la Propietario'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-gray-700'>
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                type='email'
                placeholder='Email contacto propietario'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='Alta' className='block text-gray-700'>
                Alta
              </label>
              <input
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                id='Alta'
                type='date'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='sintomas' className='block text-gray-700'>
                Sintomas
              </label>
              <textarea
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                id='sintomas'
                placeholder='Describe los sintomas'
              />
            </div>

            <input
              type='submit'
              className='w-full bg-[#6cc8dd] opacity-80 hover:opacity-100 text-white p-3 hover:cursor-pointer duration-300 ease-in-out '
              value='Agregar Paciente'
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
