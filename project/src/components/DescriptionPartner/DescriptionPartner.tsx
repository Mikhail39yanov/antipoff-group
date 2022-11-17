import { Container } from '../Container';
import { EIcons, Icon } from '../Icon';
import { Text } from '../Text';
import styles from './descriptionpartner.module.scss';

export function DescriptionPartner() {
  return (
    <section>
      <Container>
        <div className={styles.descriptionWrapper}>
          <Text As="p" addClass={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sequi praesentium ex voluptates unde dolorum
            dicta, odio est totam id amet iure minima, eaque, quis odit quisquam! Asperiores, saepe voluptatem.
          </Text>
          <ul className={styles.contactsList}>
            <li className={styles.contactsItem}>
              <Icon size={20} name={EIcons.IconPhone} />
              <a href="tel:+79543334455">+7 (954) 333-44-55</a>
            </li>
            <li className={styles.contactsItem}>
              <Icon size={20} name={EIcons.IconMailto} />
              <a href="mailto:sykfafkar@gmail.com">sykfafkar@gmail.com</a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
