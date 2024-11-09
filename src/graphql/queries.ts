/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProcedimiento = /* GraphQL */ `query GetProcedimiento($id: ID!) {
  getProcedimiento(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProcedimientoQueryVariables,
  APITypes.GetProcedimientoQuery
>;
export const listProcedimientos = /* GraphQL */ `query ListProcedimientos(
  $filter: ModelProcedimientoFilterInput
  $limit: Int
  $nextToken: String
) {
  listProcedimientos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProcedimientosQueryVariables,
  APITypes.ListProcedimientosQuery
>;
