/* eslint-disable @typescript-eslint/no-explicit-any */

import { generateClient } from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  createProcedimiento,
  deleteProcedimiento,
  updateProcedimiento,
} from "../../graphql/mutations";
import {
  allowOnlyNumbers,
  formatearConMiles,
} from "../../helpers/procedimientoHelper";
import trashCan from "../../assets/trashCan.svg";
import useToast from "../../hooks/useToast";
import { Procedimiento } from "../../models/Procedimiento.model";
import plusIcon from '../../assets/plus.svg';
import checkIcon from '../../assets/check.svg';
import { formatIndex } from "../../helpers/fotmatIndex";
interface ProcedimientoFormProps {
  fetchProcedimientos: () => Promise<void>;
  procedimientos: Procedimiento[];
  onClose: () => void;
}


const emptyForm = {
  procedimiento: "",
  codigo: "",
  reclamo: "",
  diferenciaRD: "",
  autorizadoRD: "",
  id: "",
};

const procedimientoSchema = Yup.object().shape({
  procedimiento: Yup.string().optional(),
  codigo: Yup.string().optional(),
  reclamo: Yup.string().optional(),
  diferenciaRD: Yup.string().optional(),
  autorizadoRD: Yup.string().optional(),
});

const ProcedimientoForm: React.FC<ProcedimientoFormProps> = ({
  fetchProcedimientos,
  procedimientos,
  onClose,
}) => {
  const client = generateClient();
  const [formularios, setFormularios] = useState(
    procedimientos.length ? [] : [emptyForm]
  );
  const { successToast, errorToast } = useToast();

  useEffect(() => {
    if (procedimientos.length) {
      setFormularios((prevFormularios) => {
        const nuevosFormularios = procedimientos
          .filter(
            (procedimientoExistente) =>
              !prevFormularios.some(
                (formulario) => formulario.id === procedimientoExistente.id
              )
          )
          .map((procedimientoExistente) => ({
            procedimiento: procedimientoExistente.procedimiento,
            codigo: String(procedimientoExistente.codigo),
            reclamo: String(procedimientoExistente.reclamo),
            diferenciaRD: String(procedimientoExistente.diferenciaRD),
            autorizadoRD: String(procedimientoExistente.autorizadoRD),
            id: procedimientoExistente.id,
          }));

        return [...prevFormularios, ...nuevosFormularios];
      });
    }
  }, [procedimientos]);

  const agregarFormulario = () => {
    setFormularios([...formularios, emptyForm]);
  };

  const removeProcedimiento = async (id: string, index: number) => {
    try {
      await client.graphql(
        graphqlOperation(deleteProcedimiento, { input: { id } })
      );
      eliminarFormularioState(index);
      fetchProcedimientos();
      successToast("Procedimiento eliminado exitósamente");
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  const eliminarFormularioState = (index: number) => {
    setFormularios((prevFormularios) =>
      prevFormularios.filter((_, i) => i !== index)
    );
  };

  console.log(formularios);

  const handleInputChange = (index: number, field: string, value: string) => {
    const nuevosFormularios = [...formularios];
    nuevosFormularios[index] = { ...nuevosFormularios[index], [field]: value };
    setFormularios(nuevosFormularios);
  };

  function limpiarObjeto(obj: { [key: string]: any }) {
    const objetoLimpio = { ...obj };

    Object.keys(objetoLimpio).forEach((key) => {
      if (objetoLimpio[key] === "") {
        delete objetoLimpio[key];
      }
    });

    return objetoLimpio;
  }

  const handleSubmitAll = async () => {
    try {
      for (const procedimiento of formularios) {
        const {
          id,
          procedimiento: proc,
          codigo,
          reclamo,
          diferenciaRD,
          autorizadoRD,
        } = procedimiento;

        if (id) {
          const updateData = {
            id,
            procedimiento: proc,
            codigo,
            reclamo,
            diferenciaRD,
            autorizadoRD,
          };
          await client.graphql(
            graphqlOperation(updateProcedimiento, { input: updateData })
          );
        } else {
          const cleanedProcedimiento = limpiarObjeto(procedimiento);
          const newProcedimiento = await client.graphql(
            graphqlOperation(createProcedimiento, {
              input: cleanedProcedimiento,
            })
          );
          procedimiento.id =
            (newProcedimiento as any).data.createProcedimiento.id ?? null;
        }
      }
      successToast("Procedimiento agregado");
      fetchProcedimientos();
      onClose();
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="top-content">
        <h2>Procedimientos</h2>
        <div className="centerBotton">
          <button onClick={agregarFormulario}> <img src={plusIcon} alt="PlusIcon" className="plusIcon" />Añadir procedimiento</button>
        </div>
      </div>

      {formularios.map((formulario, index) => (
        <Formik
          key={index}
          initialValues={formulario}
          validationSchema={procedimientoSchema}
          onSubmit={(values) => {
            const nuevosFormularios = [...formularios];
            nuevosFormularios[index] = values;
            setFormularios(nuevosFormularios);
          }}>
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit} className="procedimiento-form">
              <button
                className="delete"
                onClick={() => {
                  const id = formularios[index].id;
                  if (id) {
                    removeProcedimiento(id, index);
                  } else {
                    eliminarFormularioState(index);
                  }
                }}>
                <img src={trashCan} alt="Trash" />
              </button>
              <div className="form-input">
                <label>Procedimiento {formatIndex(index)}</label>
                <Field
                  name="procedimiento"
                  placeholder="Ej: 4563523"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("procedimiento", e.target.value);
                    handleInputChange(index, "procedimiento", e.target.value);
                  }}
                />
                <ErrorMessage name="procedimiento" component="p" />
              </div>
              <div className="form-input">
                <label>Código</label>
                <Field
                  name="codigo"
                  placeholder="Ej: 4563523"
                  onKeyDown={allowOnlyNumbers}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("codigo", e.target.value);
                    handleInputChange(index, "codigo", e.target.value);
                  }}
                />
                <ErrorMessage name="codigo" component="p" />
              </div>
              <div className="form-input">
                <label>Reclamado RD$</label>
                <Field
                  name="reclamo"
                  placeholder="Ej: 4563523"
                  onKeyDown={allowOnlyNumbers}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const valorNumerico = e.target.value.replace(/\D/g, "");
                    const valorFormateado = formatearConMiles(
                      Number(valorNumerico)
                    );
                    setFieldValue("reclamo", valorFormateado);
                    handleInputChange(index, "reclamo", valorNumerico);
                  }}
                />
              </div>
              <div className="form-input">
                <label>Diferencia RD$</label>
                <Field
                  name="diferenciaRD"
                  placeholder="Ej: 4563523"
                  onKeyDown={allowOnlyNumbers}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const valorNumerico = e.target.value.replace(/\D/g, "");
                    const valorFormateado = formatearConMiles(
                      Number(valorNumerico)
                    );

                    setFieldValue("diferenciaRD", valorFormateado);
                    handleInputChange(index, "diferenciaRD", valorNumerico);
                  }}
                />
              </div>
              <div className="form-input">
                <label>Autorizado RD$</label>
                <Field
                  name="autorizadoRD"
                  placeholder="Ej: 4563523"
                  onKeyDown={allowOnlyNumbers}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const valorNumerico = e.target.value.replace(/\D/g, "");
                    const valorFormateado = formatearConMiles(
                      Number(valorNumerico)
                    );

                    setFieldValue("autorizadoRD", valorFormateado);
                    handleInputChange(index, "autorizadoRD", valorNumerico);
                  }}
                />
              </div>
            </Form>
          )}
        </Formik>
      ))}

      <div className="action-buttons">
        <button onClick={onClose} className="secondary-button" type="button">
          Cancelar
        </button>
        <button
          className="primary-button"
          type="button"
          onClick={handleSubmitAll}>
          <img src={checkIcon} alt="Plus" className="CheckIcon" />
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default ProcedimientoForm;
