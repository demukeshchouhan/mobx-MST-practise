import { observer } from "mobx-react";
import TradeForm from "./TradeForm";
import { useTeamstore } from "./TeamStore";

function Roster() {
  const { players } = useTeamstore();
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th>Team</th>
        <th>Trade form</th>
        <th>Is it their birthday?</th>
      </thead>

      <tbody>
        {players.map((athlete) => {
          return (
            <tr key={athlete.name}>
              <td>{athlete.name}</td>
              <td>{athlete.age}</td>
              <td>{athlete.teamHistory}</td>
              <td>
                <TradeForm athlete={athlete} />
              </td>
              <td>
                <button onClick={() => athlete.wishHappyBirthday()}>
                  Wish Happy Birthday
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default observer(Roster);
