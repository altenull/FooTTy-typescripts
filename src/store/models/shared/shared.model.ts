export interface ActionType {
  type: string;
}

export interface AsyncActionType {
  INDEX: string;
  REQUEST: string;
  SUCCESS: string;
  FAIL: string;
}

export interface SagaActionType {
  type: string;
  payload: any;
}