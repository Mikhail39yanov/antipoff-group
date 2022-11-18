import axios, { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IRootState } from '../../store/rootReducer'
import { usersRequest, usersRequestSuccess } from '../../store/users/usersActions'
import { Container } from '../Container'
import { Card } from './Card'
import styles from './cardlist.module.scss'

export interface IUser {
  id: number
  first_name: string
}

export interface IUsersData {
  page: number
  data: IUser[]
  total_pages: number
}

export function CardList() {
  const dispatch = useDispatch()

  const token = sessionStorage.getItem('token')
  const users = useSelector<IRootState, IUsersData>((state) => state.users)

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      ;(async () => {
        dispatch(usersRequest())
        const dataUsers: AxiosResponse<IUsersData> = await axios.get('https://reqres.in/api/users')
        const { page, data, total_pages } = dataUsers.data
        dispatch(usersRequestSuccess({ page, data, total_pages }))
      })()
    }
  }, [token])

  // console.log(users);

  return (
    <section>
      <Container>
        {users.data.length === 0 && (
          <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>
            Список партнеров пустой, попробуйте{' '}
            <Link to={'/signup'} style={{ color: 'red' }}>
              зарегистрироваться
            </Link>
          </h2>
        )}

        <ul className={styles.cardsList}>
          {users.data.map((user) => (
            <Card key={user.id} id={user.id} first_name={user.first_name} />
          ))}
        </ul>
      </Container>
    </section>
  )
}
