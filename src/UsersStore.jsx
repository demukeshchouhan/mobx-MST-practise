import { applySnapshot, flow, onSnapshot, types } from "mobx-state-tree";

const UserModel = types
  .model("user", {
    userId: types.string,
    userName: types.string,
    math: types.number,
    hindi: types.number,
  })
  .actions((self) => ({
    setMath(value) {
      self.math = parseInt(value);
    },
    afterCreate() {
      console.log("after create");
      onSnapshot(self, (snapshot) => console.log({ snapshot }));
    },
    getStudentMarks: flow(function* () {
      const data = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = yield data.json();
      applySnapshot(self, {
        ...self,
        math: json.id + 15,
      });
      console.log({ json });
    }),
  }))
  .views((self) => ({
    get totalMarks() {
      return self.math + self.hindi;
    },
    get percentage() {
      return (self.totalMarks / 200) * 100;
    },
  }));

const users = UserModel.create({
  userId: "111",
  userName: "Code Employee",
  math: 75,
  hindi: 80,
});

export default users;
