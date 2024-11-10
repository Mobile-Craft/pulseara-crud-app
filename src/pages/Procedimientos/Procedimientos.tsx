/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { generateClient } from "aws-amplify/api";
import React, { useEffect, useState } from "react";
import ProcedimientoModal from "../../components/procedimientoModal/ProcedimientoModal";
import ProcedimientosList from "../../components/procedimientosList/ProcedimientosList";
import { listProcedimientos } from "../../graphql/queries";
import useToast from "../../hooks/useToast";
import { Procedimiento } from "../../models/Procedimiento.model";
import pencilIcon from "../../assets/pencil.svg";

const client = generateClient();

const ProcedimientoManager: React.FC = () => {
  const [procedimientos, setProcedimientos] = useState<Procedimiento[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const { errorToast } = useToast();
  useEffect(() => {
    fetchProcedimientos();
  }, []);

  const fetchProcedimientos = async () => {
    try {
      const procedimientoData = await client.graphql(
        graphqlOperation(listProcedimientos)
      );
      const items = (procedimientoData as any).data.listProcedimientos
        .items as Procedimiento[];
      setProcedimientos(items);
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  return (
    <div className="procedimientos">
      <h1 className="title">Procedimientos</h1>
      <ProcedimientoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        fetchProcedimientos={fetchProcedimientos}
        procedimientos={procedimientos}
      />
      <ProcedimientosList procedimientos={procedimientos} />
      <button className="primary-button edit" onClick={() => setModalOpen(true)}>
        <img src={pencilIcon} alt="Pencil" width={13} height={13} /> Editar procedimientos
      </button>
    </div>
  );
};

export default ProcedimientoManager;
