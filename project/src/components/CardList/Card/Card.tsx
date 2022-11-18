import { Break } from '../../Break'
import { Text } from '../../Text'
import { EIcons, Icon } from '../../Icon'
import styles from './card.module.scss'
import { IUser } from '../CardList'
import { Link } from 'react-router-dom'

export function Card({ id, first_name, avatar }: IUser) {
  return (
    <li className={styles.card}>
      <div className={styles.avatarBox}>
        {avatar ? (
          <img src={avatar} alt="аватарка" className={styles.avatarImage} />
        ) : (
          <Icon size={120} name={EIcons.IconAnon} />
        )}
      </div>
      <Break top size={12} />
      <Text As="h2" size={20} bold>
        <Link to={`/users/user${id}`} className={styles.cardLink}>
          {first_name || 'Артур Королёв'}
        </Link>
      </Text>
      <button className={styles.buttonLike}>
        <Icon size={14} name={EIcons.IconLike} />
      </button>
    </li>
  )
}
