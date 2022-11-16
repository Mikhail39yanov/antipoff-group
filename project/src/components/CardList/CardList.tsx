import { Container } from '../Container';
import { Card } from './Card';
import styles from './cardlist.module.scss';

export function CardList() {
  return (
    <section>
      <Container>
        <ul className={styles.cardsList}>
          <Card />
        </ul>
      </Container>
    </section>
  );
}
