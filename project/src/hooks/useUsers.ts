import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../store/rootReducer'
import { usersRequestAsync } from '../store/users/usersActions'
import { IUsersState } from '../store/users/usersReducer'
import { IUsersData } from '../types/IUsersData'

export function useUsers(): [IUsersData, string, boolean] {
  const dispatch = useDispatch<any>()

  const token = sessionStorage.getItem('token')
  const users = useSelector<IRootState, IUsersState>((state) => state.users)
  const errorLoading = useSelector<IRootState, string>((state) => state.users.error)
  const loading = useSelector<IRootState, boolean>((state) => state.users.loading)

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      dispatch(usersRequestAsync())
    }
  }, [token])

  return [users, errorLoading, loading]
}
