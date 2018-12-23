import {AsyncActionType, SagaActionType} from '../../store/models/shared/shared.model';

export const createAsyncActionTypes = (actionName: string): AsyncActionType => {
  const prefix: string = actionName;

  return {
    INDEX: `${prefix}_INDEX`,
    REQUEST: `${prefix}_REQUEST`,
    SUCCESS: `${prefix}_SUCCESS`,
    FAIL: `${prefix}_FAIL`
  };
};

const createSagaActionCreator = (actionType: string) => {
  return (payload: any): SagaActionType => ({
    type: actionType,
    payload
  });
};

export const createAsyncActionCreator = (asyncActionType: AsyncActionType) => {
  const asyncActionCreator: any = createSagaActionCreator(asyncActionType.INDEX);
  asyncActionCreator.request = createSagaActionCreator(asyncActionType.REQUEST);
  asyncActionCreator.success = createSagaActionCreator(asyncActionType.SUCCESS);
  asyncActionCreator.fail = createSagaActionCreator(asyncActionType.FAIL);
  return asyncActionCreator;
};