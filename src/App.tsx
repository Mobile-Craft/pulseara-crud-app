import { useEffect, useState } from 'react';
import './App.css';
// import { API, graphqlOperation } from 'aws-amplify'
import { createProcedimiento, deleteProcedimiento } from './graphql/mutations';
import { listProcedimientos } from './graphql/queries';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { generateClient } from "aws-amplify/api";
import { graphqlOperation } from '@aws-amplify/api-graphql';

const client = generateClient();

interface Procedimiento {
  id: string;
  procedimiento: string;
  codigo: number;
  reclamo: number;
  diferenciaRD: number;
  autorizadoRD: number;
}

const initialState = {
  procedimiento: '',
  codigo: 0,
  reclamo: 0,
  diferenciaRD: 0,
  autorizadoRD: 0,
};

function App() {
  const [procedimientos, setProcedimientos] = useState<Procedimiento[]>([]);
  const [formState, setFormState] = useState<Omit<Procedimiento, 'id'>>(initialState);

  useEffect(() => {
    fetchProcedimientos();
  }, []);

  const fetchProcedimientos = async () => {
    try {
      const procedimientoData = await client.graphql(graphqlOperation(listProcedimientos));
      const items = (procedimientoData as any).data.listProcedimientos.items as Procedimiento[];
      setProcedimientos(items);
    } catch (err) {
      console.log('Error fetching procedimientos:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const addProcedimiento = async () => {
    try {
      if (!formState.procedimiento || !formState.codigo) return;
      const procedimiento: Omit<Procedimiento, 'id'> = { ...formState };
      const newProcedimiento = await client.graphql(graphqlOperation(createProcedimiento, { input: procedimiento }));
      setProcedimientos([...procedimientos, (newProcedimiento as any).data.createProcedimiento]);
      setFormState(initialState);
    } catch (err) {
      console.log('Error creating procedimiento:', err);
    }
  };

  const removeProcedimiento = async (id: string) => {
    try {
      await client.graphql(graphqlOperation(deleteProcedimiento, { input: { id } }));
      setProcedimientos(procedimientos.filter((p) => p.id !== id));
    } catch (err) {
      console.log('Error deleting procedimiento:', err);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div style={{ padding: 20 }}>
          <h2>Procedimientos</h2>
          <input placeholder="Procedimiento" name="procedimiento" value={formState.procedimiento} onChange={handleChange} />
          <input placeholder="Código" name="codigo" value={formState.codigo} onChange={handleChange} type="number" />
          <input placeholder="Reclamo" name="reclamo" value={formState.reclamo} onChange={handleChange} type="number" />
          <input placeholder="Diferencia RD$" name="diferenciaRD" value={formState.diferenciaRD} onChange={handleChange} type="number" />
          <input placeholder="Autorizado RD$" name="autorizadoRD" value={formState.autorizadoRD} onChange={handleChange} type="number" />
          <button onClick={addProcedimiento}>Agregar Procedimiento</button>
          <div>
            {procedimientos.map((p) => (
              <div key={p.id}>
                <p>{p.procedimiento} - Código: {p.codigo} - Reclamo: {p.reclamo} - Diferencia RD$: {p.diferenciaRD} - Autorizado RD$: {p.autorizadoRD}</p>
                <button onClick={() => removeProcedimiento(p.id)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
