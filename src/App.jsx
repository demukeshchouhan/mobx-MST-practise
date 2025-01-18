import "./App.css";
// import Athlete from "./Athlete";
// import MoneyForm from "./MoneyForm";
// import Roster from "./Roster";
// import { TeamStoreProvider } from "./TeamStore";
// import UserStore from "./UserStore";
// import Home from "./Home";
import Demo from "./Demo";

// const lj = new Athlete("Lebron james", 37, 8);
// const sc = new Athlete("Steph Curry", 34, 5);

// function getPlayersFromBackend() {
//   return [lj, sc];
// }

function App() {
  // const players = getPlayersFromBackend();
  // const store = new UserStore();
  // const store = new UserStore();
  return (
    // <TeamStoreProvider players={players}>
    //   <Roster />
    //   <MoneyForm />
    // </TeamStoreProvider>
    <>
      <Demo />
      {/* <Home store={store} /> */}
    </>
  );
}

export default App;
