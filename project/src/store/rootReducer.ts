import { Reducer } from 'redux'
import { IUsersData } from '../components/CardList'
import { IUsersRequestAction, IUsersRequestErrorAction, IUsersRequestSuccessAction } from './users/usersActions'
import { usersReducer } from './users/usersReducer'

export interface IRootState {
  users: IUsersData
}

const initialState: IRootState = {
  users: {
    page: 0,
    data: [],
    total_pages: 0,
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
