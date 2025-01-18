import { action, computed, observable, toJS } from "mobx";
import { observer } from "mobx-react";
import { useTeamstore } from "./TeamStore";
import Athlete from "./Athlete";

const initialState = {
  name: "",
  age: 0,
  salary: 0,
};

let formState = observable({
  years: 0,
  salary: 0,
});
function MoneyForm() {
  //   const calculateTotal = action((formState) => {
  //     formState.total = formState.years * formState.salary;
  //   });

  //   const totalValue = computed(() => formState.salary * formState.years);
  const { totalYearlyCost, addPlayer } = useTeamstore();
  return (
    <div style={{ display: "flex", flexDirection: "Column" }}>
      <h1>Money Talks</h1>
      <p>Total: {totalYearlyCost}</p>
      <input
        type="text"
        placeholder="Player Name..."
        style={{ height: "40px" }}
        value={formState.name}
        onChange={action((e) => {
          formState.name = e.target.value;
        })}
      />
      <input
        type="number"
        placeholder="Player Age..."
        style={{ height: "40px" }}
        value={formState.name}
        onChange={action((e) => {
          formState.age = Number(e.target.value);
        })}
      />
      <input
        type="number"
        placeholder="Yearly salary..."
        style={{ height: "40px" }}
        onChange={action((e) => {
          formState.salary = Number(e.target.value);
        })}
      />
      <button
        onClick={action((e) => {
          addPlayer(
            new Athlete(formState.name, formState.age, formState.salary)
          );
          formState = initialState;
        })}
      >
        Calculate years
      </button>
    </div>
  );
}

export default observer(MoneyForm);
