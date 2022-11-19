import { Reducer } from 'redux'
import {
  ISetCurrentPageAction,
  IUsersRequestAction,
  IUsersRequestErrorAction,
  IUsersRequestSuccessAction,
} from './users/usersActions'
import { IUsersState, usersReducer } from './users/usersReducer'

export interface IRootState {
  users: IUsersState
}

const initialState: IRootState = {
  users: {
    page: 1,
    data: [],
    total_pages: 0,
    error: '',
    loading: false,
  },
}

export enum EActions {
  USERS_REQUEST = 'USERS_REQUEST',
  USERS_REQUEST_SUCCESS = 'USERS_REQUEST_SUCCESS',
  USERS_REQUEST_ERROR = 'USERS_REQUEST_ERROR',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

export type IActions =
  | IUsersRequestAction
  | IUsersRequestSuccessAction
  | IUsersRequestErrorAction
  | ISetCurrentPageAction

export const rootReduce: Reducer<IRootState, IActions> = (state = initialState, action) => {
  switch (action.type) {
    case EActions.USERS_REQUEST:
    case EActions.USERS_REQUEST_SUCCESS:
    case EActions.USERS_REQUEST_ERROR:
    case EActions.SET_CURRENT_PAGE:
      return {
        ...state,
        users: usersReducer(state.users, action),
      }

    default:
      return state
  }
}
