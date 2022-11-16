import { Break } from '../Break';
import { Container } from '../Container';
import { EIcons, Icon } from '../Icon';
import { EColor, Text } from '../Text';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.headerContainer}>
            <Text As="h1" size={64} mobileSize={36} color={EColor.white}>
              Наша команда
            </Text>
            <Break top size={4} mobileSize={12} />
            <Text As="p" size={20} mobileSize={16} color={EColor.white}>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие
              находить выход из любых, даже самых сложных ситуаций.
            </Text>
          </div>
        </div>
        <button className={styles.logoutDesktop}>Выход</button>
        <button className={styles.logoutMobile}>
          <Icon size={18} name={EIcons.LogoutMobile} />
        </button>
      </Container>
    </header>
  );
}
