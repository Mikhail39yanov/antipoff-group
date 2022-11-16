import { Break } from '../../Break';
import { Text } from '../../Text';
import { EIcons, Icon } from '../../Icon';
import styles from './card.module.scss';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.avatarBox}>
        <Icon size={120} name={EIcons.IconAnon} />
      </div>
      <Break top size={12} />
      <Text As="h2" size={20} bold>
        Артур Королёв
      </Text>
      <button className={styles.buttonLike}>
        <Icon size={14} name={EIcons.IconLike} />
      </button>
    </li>
  );
}
