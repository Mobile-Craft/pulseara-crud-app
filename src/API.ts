/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProcedimientoInput = {
  id?: string | null,
  procedimiento: string,
  codigo: number,
  reclamo: number,
  diferenciaRD: number,
  autorizadoRD: number,
};

export type ModelProcedimientoConditionInput = {
  procedimiento?: ModelStringInput | null,
  codigo?: ModelIntInput | null,
  reclamo?: ModelIntInput | null,
  diferenciaRD?: ModelFloatInput | null,
  autorizadoRD?: ModelFloatInput | null,
  and?: Array< ModelProcedimientoConditionInput | null > | null,
  or?: Array< ModelProcedimientoConditionInput | null > | null,
  not?: ModelProcedimientoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Procedimiento = {
  __typename: "Procedimiento",
  id: string,
  procedimiento: string,
  codigo: number,
  reclamo: number,
  diferenciaRD: number,
  autorizadoRD: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProcedimientoInput = {
  id: string,
  procedimiento?: string | null,
  codigo?: number | null,
  reclamo?: number | null,
  diferenciaRD?: number | null,
  autorizadoRD?: number | null,
};

export type DeleteProcedimientoInput = {
  id: string,
};

export type ModelProcedimientoFilterInput = {
  id?: ModelIDInput | null,
  procedimiento?: ModelStringInput | null,
  codigo?: ModelIntInput | null,
  reclamo?: ModelIntInput | null,
  diferenciaRD?: ModelFloatInput | null,
  autorizadoRD?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProcedimientoFilterInput | null > | null,
  or?: Array< ModelProcedimientoFilterInput | null > | null,
  not?: ModelProcedimientoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProcedimientoConnection = {
  __typename: "ModelProcedimientoConnection",
  items:  Array<Procedimiento | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProcedimientoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  procedimiento?: ModelSubscriptionStringInput | null,
  codigo?: ModelSubscriptionIntInput | null,
  reclamo?: ModelSubscriptionIntInput | null,
  diferenciaRD?: ModelSubscriptionFloatInput | null,
  autorizadoRD?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProcedimientoFilterInput | null > | null,
  or?: Array< ModelSubscriptionProcedimientoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateProcedimientoMutationVariables = {
  input: CreateProcedimientoInput,
  condition?: ModelProcedimientoConditionInput | null,
};

export type CreateProcedimientoMutation = {
  createProcedimiento?:  {
    __typename: "Procedimiento",
    id: string,
    procedimiento: string,
    codigo: number,
    reclamo: number,
    diferenciaRD: number,
    autorizadoRD: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProcedimientoMutationVariables = {
  input: UpdateProcedimientoInput,
  condition?: ModelProcedimientoConditionInput | null,
};

export type UpdateProcedimientoMutation = {
  updateProcedimiento?:  {
    __typename: "Procedimiento",
    id: string,
    procedimiento: string,
    codigo: number,
    reclamo: number,
    diferenciaRD: number,
    autorizadoRD: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProcedimientoMutationVariables = {
  input: DeleteProcedimientoInput,
  condition?: ModelProcedimientoConditionInput | null,
};

export type DeleteProcedimientoMutation = {
  deleteProcedimiento?:  {
    __typename: "Procedimiento",
    id: string,
    procedimiento: string,
    codigo: number,
    reclamo: number,
    diferenciaRD: number,
    autorizadoRD: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProcedimientoQueryVariables = {
  id: string,
};

export type GetProcedimientoQuery = {
  getProcedimiento?:  {
    __typename: "Procedimiento",
    id: string,
    procedimiento: string,
    codigo: number,
    reclamo: number,
    diferenciaRD: number,
    autorizadoRD: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProcedimientosQueryVariables = {
  filter?: ModelProcedimientoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProcedimientosQuery = {
  listProcedimientos?:  {
    __typename: "ModelProcedimientoConnection",
    items:  Array< {
      __typename: "Procedimiento",
      id: string,
      procedimiento: string,
      codigo: number,
      reclamo: number,
      diferenciaRD: number,
      autorizadoRD: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProcedimientoSubscriptionVariables = {
  filter?: ModelSubscriptionProcedimientoFilterInput | null,
};

export type OnCreateProcedimientoSubscription = {
  onCreateProcedimiento?:  {
    __typename: "Procedimiento",
    id: string,
    procedimiento: string,
    codigo: number,
    reclamo: number,
    diferenciaRD: number,
    autorizadoRD: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProcedimientoSubscriptionVariables = {
  filter?: ModelSubscriptionProcedimientoFilterInput | null,
};

export type OnUpdateProcedimientoSubscription = {
  onUpdateProcedimiento?:  {
    __typename: "Procedimiento",
    id: string,
    procedimiento: string,
    codigo: number,
    reclamo: number,
    diferenciaRD: number,
    autorizadoRD: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProcedimientoSubscriptionVariables = {
  filter?: ModelSubscriptionProcedimientoFilterInput | null,
};

export type OnDeleteProcedimientoSubscription = {
  onDeleteProcedimiento?:  {
    __typename: "Procedimiento",
    id: string,
    procedimiento: string,
    codigo: number,
    reclamo: number,
    diferenciaRD: number,
    autorizadoRD: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
