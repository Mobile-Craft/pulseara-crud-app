import { Procedimiento } from "../../models/Procedimiento.model";

interface ProcedimientoCardProps {
  procedimiento: Procedimiento;
}

const ProcedimientoCard: React.FC<ProcedimientoCardProps> = ({
  procedimiento,
}) => {
  return (
    <div key={procedimiento.id} className="procedimiento-card">
      <div className="card-item">
        <span className="label">Procedimiento</span>
        <span className="value">{procedimiento.procedimiento}</span>
      </div>
      <div className="card-item">
        <span className="label">Código</span>
        <span className="value">{procedimiento.codigo}</span>
      </div>
      <div className="card-item">
        <span className="label">Reclamado</span>
        <span className="value">RD$ {procedimiento.reclamo}</span>
      </div>
      <div className="card-item">
        <span className="label">Diferencia RD$</span>
        <span className="value">RD$ {procedimiento.diferenciaRD}</span>
      </div>
      <div className="card-item">
        <span className="label">Autorizado RD$</span>
        <span className="value">RD$ {procedimiento.autorizadoRD}</span>
      </div>
    </div>
  );
};

export default ProcedimientoCard;
