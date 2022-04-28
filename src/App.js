import './App.css';
import Formulario from './Components/Formulario';
import Header from './Components/Header';
import Listado from './Components/Listado';

function App() {
  return (
    <div className='container mx-auto  mt-[60px]'>
      <Header />
      <div className='mt-12 md:flex  mx-auto'>
        <div className='mb-10'>
          <Formulario />
        </div>
        <Listado />
      </div>
    </div>
  );
}

export default App;
