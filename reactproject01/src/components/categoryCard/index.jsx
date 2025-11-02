import styles from "./styles.module.css";

function CategoryCard({ icon, title, isMore = false }) {
  return (
    <div className={`${styles.card} ${isMore ? styles.more : ""}`}>
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default CategoryCard;
