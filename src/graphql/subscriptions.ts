/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProcedimiento = /* GraphQL */ `subscription OnCreateProcedimiento(
  $filter: ModelSubscriptionProcedimientoFilterInput
) {
  onCreateProcedimiento(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProcedimientoSubscriptionVariables,
  APITypes.OnCreateProcedimientoSubscription
>;
export const onUpdateProcedimiento = /* GraphQL */ `subscription OnUpdateProcedimiento(
  $filter: ModelSubscriptionProcedimientoFilterInput
) {
  onUpdateProcedimiento(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProcedimientoSubscriptionVariables,
  APITypes.OnUpdateProcedimientoSubscription
>;
export const onDeleteProcedimiento = /* GraphQL */ `subscription OnDeleteProcedimiento(
  $filter: ModelSubscriptionProcedimientoFilterInput
) {
  onDeleteProcedimiento(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProcedimientoSubscriptionVariables,
  APITypes.OnDeleteProcedimientoSubscription
>;
