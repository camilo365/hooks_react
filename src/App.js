import './App.css';
import React, { useState, useRef, useReducer } from 'react';

function App() {
  const [formulario, setFormulario] = useState(false);
  const userlogin = useRef(null);
  const useremail = useRef(null);
  const userpassword = useRef(null);

  const user="admin";
  const email="prueba@ciaf.edu.co";
  const contrasena = 12345

  const initialState = { count: 0 };

  function reducir(state, action) {
    if (action.type === 'increment') {
      return { count: state.count + 1 };
    } else if (action.type === 'decrement') {
      return { count: state.count - 1 };
    } else {
      throw new Error('Acción no soportada');
    }
  }
  const [state, dispatch] = useReducer(reducir, initialState);

  function validar() {
    if (userlogin.current.value === "" || useremail.current.value === "" || userpassword.current.value === "") {
      setFormulario(false);
      alert("Ingrese todos los datos");
    } else if (userlogin.current.value == user && useremail.current.value == email && userpassword.current.value == contrasena) {
      setFormulario(true);
      alert("Datos ingresados correctamente");
    }
    
  }

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      <div className="fondo">
        <div id='modal'>
          <div>
            <h1 className="text-primary d-flex justify-content-center pt-5">useState and UseRef</h1>
          </div>
          <div>
            <input className="d-flex justify-content-center mx-auto align-items-center col-5 mt-4" ref={userlogin} type="text" name='usuario' placeholder="Usuario" />
          </div>
          <div>
            <input className="d-flex justify-content-center mx-auto align-items-center col-5 mt-4" ref={userpassword} type="password" name='password' placeholder="Password" />
          </div>
          <div>
            <input className="d-flex justify-content-center mx-auto align-items-center col-5 mt-4" ref={useremail} type="text" name='correo' placeholder="Correo" />
          </div>
          <div>
            <button className='btn btn-info mx-auto d-flex justify-content-center mt-4' onClick={validar}>validar</button>
          </div>
        </div>
        <div><h1 className='d-flex justify-content-center text-info'>useReducer</h1></div>
        <div className='d-flex justify-content-center'>
          <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
        <div className='text-center'>
          <h1 className='text-primary'>Count: {state.count}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
