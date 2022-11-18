import { ActionCreator } from 'redux'
import { IUsersData } from '../../components/CardList'
import { EActions } from '../rootReducer'

export interface IUsersRequestAction {
  type: typeof EActions.USERS_REQUEST
}

export const usersRequest: ActionCreator<IUsersRequestAction> = () => ({
  type: EActions.USERS_REQUEST,
})

export interface IUsersRequestSuccessAction {
  type: typeof EActions.USERS_REQUEST_SUCCESS
  usersData: IUsersData
}

export const usersRequestSuccess: ActionCreator<IUsersRequestSuccessAction> = (usersData: IUsersData) => ({
  type: EActions.USERS_REQUEST_SUCCESS,
  usersData,
})

export interface IUsersRequestErrorAction {
  type: typeof EActions.USERS_REQUEST_ERROR
  error: string
}

export const usersRequestError: ActionCreator<IUsersRequestErrorAction> = (error: string) => ({
  type: EActions.USERS_REQUEST_ERROR,
  error,
})
