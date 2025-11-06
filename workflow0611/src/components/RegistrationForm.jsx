import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

function RegistrationForm() {
  const { loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ defaultValues: { login: "", email: "", password: "" } });

  const onSubmit = (data) => {
    loginUser(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("login", { required: "Login is required" })}
        placeholder="Your login"
      />
      {errors.login && <span>{errors.login.message}</span>}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
        })}
        placeholder="for@example.com"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Min length is 6 symbols" },
        })}
        placeholder="Password"
      />
      {errors.password && <span>{errors.password.message}</span>}
      <button type="submit" disabled={isSubmitting}>
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
