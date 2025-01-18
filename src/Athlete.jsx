import { action, makeObservable, observable } from "mobx";

class Athlete {
  name;
  age;
  teamHistory;
  constructor(name, age, teamHistory, salary) {
    this.name = name;
    this.age = age;
    this.teamHistory = teamHistory;
    this.salary = salary;

    makeObservable(this, {
      salary: true,
      tradePlayer: action,
      wishHappyBirthday: action,
      name: observable,
      age: observable,
      teamHistory: true,
    });
  }
  wishHappyBirthday() {
    this.age++;
  }

  tradePlayer(team) {
    this.teamHistory.push(team);
  }
}

export default Athlete;
