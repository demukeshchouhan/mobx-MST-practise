import { observer } from "mobx-react";

function Home({ store }) {
  const changeName = () => store.updateUser("changed");
  const addSubject = () => store.addSubject("Sanskrit");
  return (
    <div>
      <h1>Home</h1>
      <h2>
        {store.userInfo.name} - {store.userInfo.id}
      </h2>
      <div style={{ marginBottom: "10px" }}>
        {store.userInfo.subjects.map((sub) => {
          return (
            <span
              key={sub}
              style={{
                marginRight: "10px",
                padding: "5px",
                background: "rgba(0,0,0,0.5)",
              }}
            >
              {sub}
            </span>
          );
        })}
      </div>
      <button onClick={changeName}>Change Name</button>
      <button onClick={addSubject}>Change Subject</button>
    </div>
  );
}

export default observer(Home);
