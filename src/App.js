
import React from 'react';
import { useState } from 'react';

import useGetAll from './hooks/useGetAll';
import useCreate from './hooks/useCreate';
import useUpdate from './hooks/useUpdate';
import useDelete from './hooks/useDelete';

function App() {

  const [data] = useGetAll('http://localhost:3001/readAll')

  const [formulario, setFormulario] = useState({id: 1, name: "Warllei Martins" })

  function CreateData() {
    const create = useCreate('http://localhost:3001/createNewPost', formulario)
  }

  function UpdateData() {
    const update = useUpdate('http://localhost:3001/updatePost', formulario)
  }

  function DeleteData() {
    const update = useDelete('http://localhost:3001/deleteData', formulario)
  }

  return (
    <div className="App">
      <button onClick={() => CreateData()}>Criar</button>
    </div>
  );
}

export default App;
