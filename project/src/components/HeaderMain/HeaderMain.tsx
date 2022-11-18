import { Link } from 'react-router-dom'
import { Break } from '../Break'
import { Container } from '../Container'
import { EIcons, Icon } from '../Icon'
import { EColor, Text } from '../Text'
import styles from './headermain.module.scss'

export function HeaderMain() {
  const handleClick = () => {
    sessionStorage.removeItem('token')
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.headerContainer}>
            <Text As="h1" size={64} mobileSize={36} color={EColor.white}>
              Наша команда
            </Text>
            <Break top size={4} mobileSize={12} />
            <div>
              <Text As="p" size={20} mobileSize={16} color={EColor.white} addClass={styles.description}>
                Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие
                находить выход из любых, даже самых сложных ситуаций.
              </Text>
            </div>
          </div>
        </div>

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
