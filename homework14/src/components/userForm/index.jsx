import { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions";
import styles from "../userForm/styles.module.css";

function UserForm({ setUserInfo }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedStatus = status.trim();

    if (trimmedName === "") {
      setError("Name is required");
      return;
    }

    if (trimmedStatus === "") {
      setError("Status is required");
      return;
    }
    setError("");
    setUserInfo(trimmedName, trimmedStatus);
    setName("");
    setStatus("");
  };

  return (
    <div className={styles.formCard}>
      <form onSubmit={submitHandler} className={styles.form}>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </div>
  );
}

export default connect(null, { setUserInfo })(UserForm);
