import { observer } from "mobx-react";
import { useState } from "react";

function TradeForm({ athlete }) {
  const [teamName, setTeamName] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Team name..."
        onChange={(e) => setTeamName(e.target.value)}
      />
      <span>
        <button type="button" onClick={() => athlete.tradePlayer(teamName)}>
          Trade
        </button>
      </span>
    </>
  );
}

export default observer(TradeForm);
