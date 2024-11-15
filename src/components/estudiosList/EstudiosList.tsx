import React from "react";
import EstudioCard from "../estudioCard/EstudioCard";
import { Estudio } from "../../models/Estudio.model";

interface EstudiosListProps {
    estudios: Estudio[];
}

const EstudiosList: React.FC<EstudiosListProps> = ({
    estudios,
}) => (
    <div className="procedimientos-list">
        {estudios?.map((estudio, index) => (
            <EstudioCard key={index} estudio={estudio} />
        ))}
    </div>
);

export default EstudiosList;
