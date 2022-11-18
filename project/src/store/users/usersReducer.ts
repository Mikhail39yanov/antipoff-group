// import axios from 'axios'
import { Reducer } from 'react'
import { IUsersData } from '../../components/CardList'
import { EActions } from '../rootReducer'
import { IUsersRequestAction, IUsersRequestErrorAction, IUsersRequestSuccessAction } from './usersActions'

// interface IUsersState {
//   page: number
//   data: IUser[]
//   total_pages: number
// }

type TUsersActions = IUsersRequestAction | IUsersRequestSuccessAction | IUsersRequestErrorAction

export const usersReducer: Reducer<IUsersData, TUsersActions> = (state, action) => {
  switch (action.type) {
    case EActions.USERS_REQUEST:
      return {
        ...state,
        // loading: true,
      }

    case EActions.USERS_REQUEST_SUCCESS:
      return {
        ...state,
        page: action.usersData.page,
        data: action.usersData.data,
        total_pages: action.usersData.total_pages,
        // loading: false,
      }

    case EActions.USERS_REQUEST_ERROR:
      return {
        ...state,
        // error: action.error,
        // loading: false,
      }

    default:
      return state
  }
}

// export const postsRequestAsync = (): ThunkAction<void, IRootState, unknown, Action<string>> => (dispatch, getState) => {
//   ;(async () => {
//     dispatch(usersRequest())
//     try {
//       const {
//         data: {
//           data: { after, children },
//         },
//       } = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=5', {
//         headers: { Authorization: `bearer ${getState().token.token}` },
//         params: {
//           after: getState().posts.nextAfter,
//         },
//       })

//       if (after !== getState().posts.nextAfter) {
//         dispatch(postsRequestSuccess(after, children))
//       }
//     } catch (error) {
//       dispatch(postsRequestError(String(error)))
//     }
//   })()
// }

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
