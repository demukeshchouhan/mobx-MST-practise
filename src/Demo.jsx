import { observer } from "mobx-react";
import store from "./UsersStore";

function Demo() {
  return (
    <div>
      <h2>Demo</h2>
      <h3>Username: {store.userName}</h3>
      <h3>Total Marks: {store.totalMarks}</h3>
      <h4>Percentage: {store.percentage}</h4>
      <button
        onClick={() => {
          store.setMath(99);
        }}
      >
        Change Math{" "}
      </button>
      <button
        onClick={() => {
          store.getStudentMarks();
        }}
      >
        Get Student Data from API
      </button>
    </div>
  );
}

export default observer(Demo);
