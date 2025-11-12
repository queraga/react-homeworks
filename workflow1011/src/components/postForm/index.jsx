import styles from "../postForm/styles.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function PostForm({ onAddPost }) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://691226d852a60f10c820ceee.mockapi.io/posts",
        data
      );
      onAddPost(res.data);
      reset();
    } catch (error) {
      console.log("error while adding post", error);
    }
  };
  return (
    <div className={styles.postForm}>
      <h2>Make a post</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label>Headline</label>
          <input
            {...register("title", { required: true })}
            placeholder="Put it here..."
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Post text</label>
          <input
            {...register("text", { required: true })}
            placeholder="Drop it here..."
          />
        </div>
        <button type="submit" className={styles.btn}>
          Publish it
        </button>
      </form>
    </div>
  );
}

export default PostForm;
