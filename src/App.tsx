import { useEffect, useState } from 'react';
import './App.css';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { generateClient } from '@aws-amplify/api';
import { createProcedimiento, deleteProcedimiento, updateProcedimiento } from './graphql/mutations';
import { listProcedimientos } from './graphql/queries';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const client = generateClient();

interface Procedimiento {
  id?: string;
  procedimiento: string;
  codigo: number;
  reclamo: number;
  diferenciaRD: number;
  autorizadoRD: number;
}

const initialState: Procedimiento = {
  procedimiento: '',
  codigo: 0,
  reclamo: 0,
  diferenciaRD: 0,
  autorizadoRD: 0,
};

function App() {
  const [procedimientos, setProcedimientos] = useState<Procedimiento[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProcedimientos, setEditedProcedimientos] = useState<Procedimiento[]>([]);

  useEffect(() => {
    fetchProcedimientos();
  }, []);

  const fetchProcedimientos = async () => {
    try {
      const procedimientoData = await client.graphql(graphqlOperation(listProcedimientos));
      const items = (procedimientoData as any).data.listProcedimientos.items as Procedimiento[];
      setProcedimientos(items);
      setEditedProcedimientos(items);
    } catch (err) {
      console.log('Error fetching procedimientos:', err);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const updatedProcedimientos = [...editedProcedimientos];
    updatedProcedimientos[index] = { ...updatedProcedimientos[index], [name]: value };
    setEditedProcedimientos(updatedProcedimientos);
  };

  const addEmptyProcedimiento = () => {
    setEditedProcedimientos([...editedProcedimientos, { ...initialState }]);
  };

  const saveChanges = async () => {
    try {
      for (const procedimiento of editedProcedimientos) {
        const { id, procedimiento: proc, codigo, reclamo, diferenciaRD, autorizadoRD } = procedimiento;

        if (id) {
          const updateData = { id, procedimiento: proc, codigo, reclamo, diferenciaRD, autorizadoRD };
          await client.graphql(graphqlOperation(updateProcedimiento, { input: updateData }));
        } else {
          const newProcedimiento = await client.graphql(graphqlOperation(createProcedimiento, { input: procedimiento }));
          procedimiento.id = (newProcedimiento as any).data.createProcedimiento.id;
        }
      }
      setProcedimientos(editedProcedimientos);
      closeModal();
    } catch (err) {
      console.log('Error saving changes:', err);
    }
  };

  const removeProcedimiento = async (id?: string, index?: number) => {
    try {
      if (id) {
        await client.graphql(graphqlOperation(deleteProcedimiento, { input: { id } }));
      }
      const updatedProcedimientos = [...editedProcedimientos];
      updatedProcedimientos.splice(index!, 1);
      setEditedProcedimientos(updatedProcedimientos);
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
        <button onClick={openModal}>Editar Procesos</button>
        <div>
          {procedimientos.map((p) => (
            <div key={p.id}>
              <p>{p.procedimiento} - Código: {p.codigo} - Reclamo: {p.reclamo} - Diferencia RD$: {p.diferenciaRD} - Autorizado RD$: {p.autorizadoRD}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Edición */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Editar Procedimientos</h2>
            {editedProcedimientos.map((p, index) => (
              <div key={index} className="edit-item">
                <input
                  placeholder="Procedimiento"
                  name="procedimiento"
                  value={p.procedimiento}
                  onChange={(e) => handleEditChange(e, index)}
                />
                <input
                  placeholder="Código"
                  name="codigo"
                  value={p.codigo}
                  onChange={(e) => handleEditChange(e, index)}
                  type="number"
                />
                <input
                  placeholder="Reclamo"
                  name="reclamo"
                  value={p.reclamo}
                  onChange={(e) => handleEditChange(e, index)}
                  type="number"
                />
                <input
                  placeholder="Diferencia RD$"
                  name="diferenciaRD"
                  value={p.diferenciaRD}
                  onChange={(e) => handleEditChange(e, index)}
                  type="number"
                />
                <input
                  placeholder="Autorizado RD$"
                  name="autorizadoRD"
                  value={p.autorizadoRD}
                  onChange={(e) => handleEditChange(e, index)}
                  type="number"
                />
                <button onClick={() => removeProcedimiento(p.id, index)}>Eliminar</button>
              </div>
            ))}
            <button onClick={addEmptyProcedimiento}>Agregar Procedimiento</button>
            <button onClick={saveChanges}>Guardar Cambios</button>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
