/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { generateClient } from "aws-amplify/api";
import React, { useEffect, useState } from "react";
import ProcedimientoModal from "../../components/procedimientoModal/ProcedimientoModal";
import ProcedimientosList from "../../components/procedimientosList/ProcedimientosList";
import { listProcedimientos } from "../../graphql/queries";
import useToast from "../../hooks/useToast";
import { Procedimiento } from "../../models/Procedimiento.model";
import noDataIcon from "../../assets/noData.svg"
import ButtonComponent from "../../components/buttonComponent/ButtomComponent";
import CircularProgress from '@mui/material/CircularProgress';
const client = generateClient();

const ProcedimientoManager: React.FC = () => {
  const [procedimientos, setProcedimientos] = useState<Procedimiento[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { errorToast } = useToast();
  useEffect(() => {
    fetchProcedimientos();
  }, []);

  const fetchProcedimientos = async () => {
    try {
      setIsLoading(true);
      const procedimientoData = await client.graphql(
        graphqlOperation(listProcedimientos)
      );
      const items = (procedimientoData as any).data.listProcedimientos
        .items as Procedimiento[];
      items.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      setProcedimientos(items);
    } catch (err: any) {
      errorToast(err.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="procedimientos">
      <ProcedimientoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        fetchProcedimientos={fetchProcedimientos}
        procedimientos={procedimientos}
      />

      {isLoading ? (
        <div className="no-data-container">
          <CircularProgress />
        </div>
      ) : procedimientos.length === 0 ? (
        <div className="no-data-container">
          <div className="no-data-message">
            <img src={noDataIcon} alt="No data icon" className="no-data-icon" />
            <p>No hay datos que mostrar</p>
          </div>
          <ButtonComponent onClick={() => setModalOpen(true)} />
        </div>
      ) : (
        <>
          <ProcedimientosList procedimientos={procedimientos} />
          <ButtonComponent onClick={() => setModalOpen(true)} />
        </>
      )}
    </div>
  );
};

export default ProcedimientoManager;
