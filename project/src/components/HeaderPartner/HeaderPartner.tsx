import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IRootState } from '../../store/rootReducer'
import { IUser } from '../../types/IUser'
import { Break } from '../Break'
import { Container } from '../Container'
import { EIcons, Icon } from '../Icon'
import { EColor, Text } from '../Text'
import styles from './HeaderPartner.module.scss'

export function HeaderPartner() {
  const { id } = useParams<{ id: string }>()
  const users = useSelector<IRootState, IUser[]>((state) => state.users.data)
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const activeUser = users.find((user) => String(user.id) === id)

  const handleClick = () => {
    sessionStorage.removeItem('token')
  }

  const handleClickBack = () => {
    goBack()
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.headerPartner}>
            <div className={styles.avatarBox}>
              {activeUser ? (
                <img src={activeUser?.avatar} alt="аватарка" className={styles.avatarImage} />
              ) : (
                <Icon size={120} name={EIcons.IconAnon} />
              )}
            </div>
            <div>
              <Text As="h1" size={64} mobileSize={36} color={EColor.white}>
                {activeUser?.first_name || 'Артур Королёв'}
              </Text>
              <Break top size={4} mobileSize={12} />
              <Text As="p" size={32} mobileSize={20} color={EColor.white}>
                Партнер
              </Text>
            </div>
          </div>
        </div>

        <button className={styles.backDesktop} onClick={handleClickBack}>
          Назад
        </button>
        <button className={styles.backMobile} onClick={handleClickBack}>
          <Icon size={18} name={EIcons.IconBackPage} />
        </button>

        <Link to={'/signup'} className={styles.logoutDesktop} onClick={handleClick}>
          Выход
        </Link>
        <Link to={'/signup'} className={styles.logoutMobile} onClick={handleClick}>
          <Icon size={18} name={EIcons.IconLogoutMobile} />
        </Link>
      </Container>
    </header>
  )
}
