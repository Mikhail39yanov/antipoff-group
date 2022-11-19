import axios, { AxiosResponse } from 'axios'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IUsersData } from '../../types/IUsersData'
import { EActions, IRootState } from '../rootReducer'
import { IUsersState } from './usersReducer'

export interface IUsersRequestAction {
  type: typeof EActions.USERS_REQUEST
}

export const usersRequest: ActionCreator<IUsersRequestAction> = () => ({
  type: EActions.USERS_REQUEST,
})

export interface IUsersRequestSuccessAction {
  type: typeof EActions.USERS_REQUEST_SUCCESS
  usersData: IUsersState
}

export const usersRequestSuccess: ActionCreator<IUsersRequestSuccessAction> = (usersData: IUsersState) => ({
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

export const usersRequestAsync = (): ThunkAction<void, IRootState, unknown, Action<string>> => (dispatch, getState) => {
  ;(async () => {
    try {
      dispatch(usersRequest())
      const dataUsers: AxiosResponse<IUsersData> = await axios.get('https://reqres.in/api/users')
      const { page, data, total_pages } = dataUsers.data
      dispatch(usersRequestSuccess({ page, data, total_pages }))
    } catch (error) {
      dispatch(usersRequestError(String(error)))
    }
  })()
}
