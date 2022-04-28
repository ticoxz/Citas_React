function Paciente() {
  return (
    <div className='mx-5 my-10 shadow-md px-5 py-10 rounded-xl'>
      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Nombre: <span className='font-normal  normal-case'>Hook</span>
      </p>

      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Propietario: <span className='font-normal  normal-case'>Ticox</span>
      </p>

      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Email:{' '}
        <span className='font-normal  normal-case'>correo@correo.com</span>
      </p>

      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Fecha Alta:{' '}
        <span className='font-normal  normal-case'>10 de diciembre 2022</span>
      </p>

      <p className='mb-3 font-bold text-gray-700 uppercase'>
        Sintomas: <span className='font-normal  normal-case'>lorem </span>
      </p>
    </div>
  );
}

export default Paciente;
