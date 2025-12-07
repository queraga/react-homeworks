import { articlesArray } from "../array";
import { useNavigate } from "react-router-dom";
import styles from "../articles/styles.module.css";

function Articles() {
  const navigate = useNavigate();

  const handleArticles = (id) => {
    navigate(`/articles/${id}`);
  };

  return (
    <div className={styles.articlesList}>
      <h1>Articles</h1>
      <div>
        {articlesArray.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <p>{article.title}</p>
            <button onClick={() => handleArticles(article.id)}>Go</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
