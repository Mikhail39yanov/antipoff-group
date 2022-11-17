import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { Container } from '../Container'
import { Card } from './Card'
import styles from './cardlist.module.scss'

interface IUser {
  id: string
  first_name: string
}

interface IUsersData {
  page: number
  data: IUser[]
  total_pages: number
}

export function CardList() {
  const token = sessionStorage.getItem('token')
  const [users, setUsers] = useState<IUsersData>({ page: 0, data: [], total_pages: 0 })

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      ;(async () => {
        const dataUsers: AxiosResponse<IUsersData> = await axios.get('https://reqres.in/api/users')
        const { page, data, total_pages } = dataUsers.data
        setUsers({ page, data, total_pages })
      })()
    }
  }, [token])

  // console.log(users);

  return (
    <section>
      <Container>
        <ul className={styles.cardsList}>
          {users.data.length === 0 && <h3 style={{ textAlign: 'center' }}>Список постов пустой</h3>}

          {users.data.map((user) => (
            <Card key={user.id} />
          ))}
        </ul>
      </Container>
    </section>
  )
}
