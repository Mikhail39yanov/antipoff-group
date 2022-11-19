import { Link } from 'react-router-dom'
import { useUsers } from '../../hooks/useUsers'
import { Container } from '../Container'
import { Card } from './Card'
import styles from './cardlist.module.scss'

export function CardList() {
  const [users, errorLoading, loading] = useUsers()

  return (
    <section>
      <Container>
        {users.data.length === 0 && !errorLoading && !loading && (
          <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>
            Список партнеров пустой, попробуйте{' '}
            <Link to={'/signup'} style={{ color: 'red' }}>
              зарегистрироваться
            </Link>
          </h2>
        )}

        {loading && (
          <div style={{ textAlign: 'center' }}>
            <div className={styles.ldsDualRing}></div>
          </div>
        )}

        <ul className={styles.cardsList}>
          {users.data.map((user) => (
            <Card key={user.id} id={user.id} first_name={user.first_name} avatar={user.avatar} />
          ))}
        </ul>

        {errorLoading && (
          <div style={{ textAlign: 'center' }} role="alert">
            {errorLoading}
          </div>
        )}
      </Container>
    </section>
  )
}
