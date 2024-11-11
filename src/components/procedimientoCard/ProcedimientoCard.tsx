import { formatIndex } from "../../helpers/fotmatIndex";
import { Procedimiento } from "../../models/Procedimiento.model";
import { formatearConMiles } from '../../helpers/procedimientoHelper';

interface ProcedimientoCardProps {
  procedimiento: Procedimiento;
  index: number

}

const ProcedimientoCard: React.FC<ProcedimientoCardProps> = ({
  procedimiento,
  index
}) => {
  return (
    <div key={procedimiento.id} className="procedimiento-card">
      <div className="card-item">
        <span className="label">Procedimiento {formatIndex(index)}</span>
        <span className="value">{procedimiento.procedimiento}</span>
      </div>
      <div className="card-item">
        <span className="label">Código</span>
        <span className="value">{procedimiento.codigo}</span>
      </div>
      <div className="card-item">
        <span className="label">Reclamado</span>
        <span className="value">RD$ {formatearConMiles(procedimiento.reclamo)}</span>
      </div>
      <div className="card-item">
        <span className="label">Diferencia RD$</span>
        <span className="value">RD$ {formatearConMiles(procedimiento.diferenciaRD)}</span>
      </div>
      <div className="card-item">
        <span className="label">Autorizado RD$</span>
        <span className="value">RD$ {formatearConMiles(procedimiento.autorizadoRD)}</span>
      </div>
    </div>
  );
};

export default ProcedimientoCard;
