import styles from "./styles.module.css";

function Post({ headline, text, id }) {
  return (
    <div className={styles.post}>
      <div className={styles.user}>
        <div className={styles.avatar}>👤</div>
        <div className={styles.userInfo}>
          <p className={styles.username}>User logo</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{headline}</h3>
          <span className={styles.postId}>Post id: {id}</span>
        </div>
        <p className={styles.text}>{text}</p>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
}

export default Post;
