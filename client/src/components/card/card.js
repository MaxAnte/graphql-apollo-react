import styles from "./card.module.css";

function Card({ product: { title, description, price } }) {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
      <span className={styles.price}>
        {`$`}
        {price}
      </span>
    </div>
  );
}

export default Card;
