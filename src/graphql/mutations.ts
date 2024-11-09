/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProcedimiento = /* GraphQL */ `mutation CreateProcedimiento(
  $input: CreateProcedimientoInput!
  $condition: ModelProcedimientoConditionInput
) {
  createProcedimiento(input: $input, condition: $condition) {
    id
    procedimiento
    codigo
    reclamo
    diferenciaRD
    autorizadoRD
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProcedimientoMutationVariables,
  APITypes.CreateProcedimientoMutation
>;
export const updateProcedimiento = /* GraphQL */ `mutation UpdateProcedimiento(
  $input: UpdateProcedimientoInput!
  $condition: ModelProcedimientoConditionInput
) {
  updateProcedimiento(input: $input, condition: $condition) {
    id
    procedimiento
    codigo
    reclamo
    diferenciaRD
    autorizadoRD
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProcedimientoMutationVariables,
  APITypes.UpdateProcedimientoMutation
>;
export const deleteProcedimiento = /* GraphQL */ `mutation DeleteProcedimiento(
  $input: DeleteProcedimientoInput!
  $condition: ModelProcedimientoConditionInput
) {
  deleteProcedimiento(input: $input, condition: $condition) {
    id
    procedimiento
    codigo
    reclamo
    diferenciaRD
    autorizadoRD
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProcedimientoMutationVariables,
  APITypes.DeleteProcedimientoMutation
>;
