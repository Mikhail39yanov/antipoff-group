import { Reducer } from 'react'
import { IUser } from '../../types/IUser'
import { EActions } from '../rootReducer'
import {
  ISetCurrentPageAction,
  IUsersRequestAction,
  IUsersRequestErrorAction,
  IUsersRequestSuccessAction,
} from './usersActions'

export interface IUsersState {
  page: number
  data: IUser[]
  total_pages: number
  error: string
  loading: boolean
}

type TUsersActions = IUsersRequestAction | IUsersRequestSuccessAction | IUsersRequestErrorAction | ISetCurrentPageAction

export const usersReducer: Reducer<IUsersState, TUsersActions> = (state, action) => {
  switch (action.type) {
    case EActions.USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case EActions.USERS_REQUEST_SUCCESS:
      return {
        ...state,
        page: action.usersData.page,
        data: action.usersData.data,
        total_pages: action.usersData.total_pages,
        loading: false,
      }

    case EActions.USERS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }

    case EActions.SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      }

    default:
      return state
  }
}

// =================================================================
// const initialState: IRootState = {
//   users: { page: 0, data: [], total_pages: 0 },
// }

// const usersReducer = createSlice({
//   name: EActions.USERS_REQUEST_SUCCESS,
//   initialState,
//   reducers: {
//     usersRequestSuccess(state, action: PayloadAction<IUsersData>) {
//       state.users = action.payload
//     },
//     usersRequest(state) {
//       state.users = { ...state.users }
//     },
//   },
// })

// export default usersReducer.reducer
// export const { usersRequestSuccess, usersRequest } = usersSlice.actions
