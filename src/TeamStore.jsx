import { makeAutoObservable } from "mobx";
import { createContext, useContext, useRef } from "react";

export default class TeamStore {
  constructor(players) {
    makeAutoObservable(this);
    this.players = players;
  }

  state = "";
  setState = (state) => (this.state = state);

  mascot = "";
  setMascot = (mascot) => (this.mascot = mascot);

  players = [];

  get teamName() {
    return this.state + this.mascot;
  }

  get totalYearlyCost() {
    return (
      this.players.reduce(
        (totalSalary, currentAthlete) => totalSalary + currentAthlete.salary
      ),
      0
    );
  }

  addPlayer(player) {
    this.players.push(player);
  }
}

const TeamStoreContext = createContext(null);

export const useTeamstore = () => useContext(TeamStoreContext);

export function TeamStoreProvider({ children, players }) {
  const store = useRef(new TeamStore(players));

  return (
    <TeamStoreContext.Provider value={store.current}>
      {children}
    </TeamStoreContext.Provider>
  );
}
