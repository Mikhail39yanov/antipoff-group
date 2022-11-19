import { Reducer } from 'redux'
import { IUsersRequestAction, IUsersRequestErrorAction, IUsersRequestSuccessAction } from './users/usersActions'
import { IUsersState, usersReducer } from './users/usersReducer'

export interface IRootState {
  users: IUsersState
}

const initialState: IRootState = {
  users: {
    page: 0,
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
}

export type IActions = IUsersRequestAction | IUsersRequestSuccessAction | IUsersRequestErrorAction

export const rootReduce: Reducer<IRootState, IActions> = (state = initialState, action) => {
  switch (action.type) {
    case EActions.USERS_REQUEST:
    case EActions.USERS_REQUEST_SUCCESS:
    case EActions.USERS_REQUEST_ERROR:
      return {
        ...state,
        users: usersReducer(state.users, action),
      }

    default:
      return state
  }
}
