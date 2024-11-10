 
import React from "react";
import closeIcon from "../../assets/close.svg";
import { Procedimiento } from "../../models/Procedimiento.model";
import ProcedimientoForm from "../procedimientoForm/ProcedimientoForm";
interface ProcedimientoModalProps {
  isOpen: boolean;
  onClose: () => void;
  fetchProcedimientos: () => Promise<void>;
  procedimientos: Procedimiento[];
}

const ProcedimientoModal: React.FC<ProcedimientoModalProps> = ({
  isOpen,
  onClose,
  fetchProcedimientos,
  procedimientos,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="close-modal"
          onClick={() => {
            onClose();
          }}>
          <img src={closeIcon} alt="Close" />
        </button>
        <ProcedimientoForm onClose={onClose} procedimientos={procedimientos} fetchProcedimientos={fetchProcedimientos} />
      </div>
    </div>
  );
};

export default ProcedimientoModal;
