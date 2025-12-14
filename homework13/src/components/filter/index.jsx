import { connect } from "react-redux";
import { setFilter } from "../../redux/actions";
import styles from "../filter/styles.module.css";

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

function Filter({ filter, setFilter }) {
  return (
    <div className={styles.wrapper}>
      <form>
        <input
          className={styles.input}
          value={filter}
          type="text"
          placeholder="Text here"
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
    </div>
  );
}

export default connect(mapStateToProps, { setFilter })(Filter);
