import axios, { AxiosResponse } from 'axios'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IUsersData } from '../../types/IUsersData'
import { EActions, IRootState } from '../rootReducer'
import { IUsersState, TDataLike } from './usersReducer'

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

export interface ISetCurrentPageAction {
  type: typeof EActions.SET_CURRENT_PAGE
  payload: number
}

export const setCurrentPage: ActionCreator<ISetCurrentPageAction> = (page: number) => ({
  type: EActions.SET_CURRENT_PAGE,
  payload: page,
})

export interface IChangeLikeUserPageAction {
  type: typeof EActions.CHANGE_LIKE_USER
  payload: TDataLike
}

export const changeLikeUser: ActionCreator<IChangeLikeUserPageAction> = (dataLike: TDataLike) => ({
  type: EActions.CHANGE_LIKE_USER,
  payload: dataLike,
})

export const usersRequestAsync =
  (pageNumber: number): ThunkAction<void, IRootState, unknown, Action<string>> =>
  async (dispatch, getState) => {
    try {
      dispatch(usersRequest())
      const dataUsers: AxiosResponse<IUsersData> = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`)
      const { page, data, total_pages } = dataUsers.data
      dispatch(usersRequestSuccess({ page, data, total_pages }))
    } catch (error) {
      dispatch(usersRequestError(String(error)))
    }
  }
