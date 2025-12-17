import { connect } from "react-redux";
import styles from "../user/styles.module.css";
function User({ name, status }) {
  return (
    <div className={styles.card}>
      <p className={styles.row}> Name: {name}</p>
      <p className={styles.row}>Status: {status}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
