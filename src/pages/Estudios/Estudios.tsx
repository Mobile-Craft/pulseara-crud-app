import React from "react";
import pencilIcon from "../../assets/pencil.svg";
import EstudiosList from "../../components/estudiosList/EstudiosList";
import { estudios } from "../../helpers/mookData";


const EstudiosManager: React.FC = () => {
    return (
        <div className="procedimientos">
            <EstudiosList estudios={estudios} />
            <button className="primary-button edit green-bg" onClick={() => { }}>
                <img src={pencilIcon} alt="Pencil" width={13} height={13} /> Editar estudio
            </button>
        </div>
    );
}

export default EstudiosManager;
