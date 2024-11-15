import { formatearConMiles } from '../../helpers/procedimientoHelper';
import { Estudio } from "../../models/Estudio.model";

interface EstudioCardProps {
    estudio: Estudio;

}

const EstudioCard: React.FC<EstudioCardProps> = ({
    estudio,
}) => {
    return (
        <div key={estudio.id} className="procedimiento-card estudio-card">
            <div className="card-item">
                <span className="label">Nombre del estudio</span>
                <span className="value">{estudio.estudio}</span>
            </div>
            <div className="card-item">
                <span className="label">Código</span>
                <span className="value">{estudio.codigo}</span>
            </div>
            <div className="card-item">
                <span className="label">Costo</span>
                <span className="value">RD$ {formatearConMiles(estudio.costo)}</span>
            </div>
        </div>
    );
};

export default EstudioCard;
