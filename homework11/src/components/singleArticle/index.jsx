import { useParams, useNavigate } from "react-router-dom";
import { articlesArray } from "../array";
import styles from "../singleArticle/styles.module.css";

function SingleArticle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const targetArticle = articlesArray.find((article) => {
    return article.id === Number(id);
  });

  return (
    <div className={styles.singleArticle}>
      <h1>{targetArticle.title}</h1>
      <p>{targetArticle.text}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default SingleArticle;
