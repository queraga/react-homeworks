import { useForm } from "react-hook-form";
import styles from "../dynamicForm/styles.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("data is here ", data);
  };

  const firstValue = watch("first");

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          {...register("first", {
            required: "Field is required",
            minLength: { value: 3, message: "Min 3 chars" },
          })}
          placeholder="Username"
        />
        {errors.first && <p className={styles.error}>{errors.first.message}</p>}
        {firstValue && !errors.first && (
          <div>
            <input
              className={styles.input}
              {...register("second", { required: "Second field required" })}
              placeholder="Second field"
            />
            {errors.second && (
              <p className={styles.error}>{errors.second.message}</p>
            )}
          </div>
        )}
      </form>
      <p>First value: {firstValue}</p>
    </div>
  );
}

export default DynamicForm;
