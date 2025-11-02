import styles from "./styles.module.css";

function JobCard({ category, title, location, company, daysAgo, logo, color }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.dot} style={{ backgroundColor: color }}></span>
        <p className={styles.category}>{category}</p>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.location}>
        <img src="src/assets/icons/jobsIcons/locationIcon.svg" alt="location" />
        <span>{location}</span>
      </div>
      <div>
        <img src={logo} alt={company} />
        <p>
          {company}, {daysAgo} days ago
        </p>
      </div>
    </div>
  );
}

export default JobCard;
