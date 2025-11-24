import { connect } from "react-redux";
import { incrementAction, decrementAction, resetAction } from "../../actions";
function Counter({ count, name, dispatch }) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(incrementAction())}>Plus one</button>
      <button onClick={() => dispatch(decrementAction())}>minus one</button>
      <button onClick={() => dispatch(resetAction())}>reset</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    name: state.counter.name,
  };
};
export default connect(mapStateToProps)(Counter);
