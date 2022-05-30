function Paciente({ paciente, setPaciente }) {
  const { nombre, propietario, email, fecha, sintomas } = paciente;
  return (
    <div className='mx-5 my-10 shadow-md px-5 py-10 rounded-xl'>
      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Nombre: <span className='font-normal  normal-case'>{nombre}</span>
      </p>
      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Propietario:{' '}
        <span className='font-normal  normal-case'>{propietario}</span>
      </p>
      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Email: <span className='font-normal  normal-case'>{email}</span>
      </p>
      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Fecha Alta: <span className='font-normal  normal-case'>{fecha}</span>
      </p>
      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Sintomas: <span className='font-normal  normal-case'>{sintomas}</span>
      </p>
      <div className='flex justify-between mt-10'>
        <button
          className='py-2 px-6 bg-indigo-600 hover:opacity-80 text-white uppercase rounded'
          type='button'>
          Editar
        </button>
        <button
          onClick={() => setPaciente(paciente)}
          className='py-2 px-6 bg-red-600 hover:opacity-80 text-white uppercase rounded'
          type='button'>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
