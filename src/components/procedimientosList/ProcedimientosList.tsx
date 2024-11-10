import React from "react";
import { Procedimiento } from "../../models/Procedimiento.model";
import ProcedimientoCard from "../procedimientoCard/ProcedimientoCard";

interface ProcedimientoListProps {
  procedimientos: Procedimiento[];
}

const ProcedimientosList: React.FC<ProcedimientoListProps> = ({
  procedimientos,
}) => (
  <div className="procedimientos-list">
    {procedimientos?.map((procedimiento, index) => (
      <ProcedimientoCard index={index} key={index} procedimiento={procedimiento} />
    ))}
  </div>
);

export default ProcedimientosList;
