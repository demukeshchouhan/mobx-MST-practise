import {
  action,
  autorun,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

export default class UserStore {
  userInfo = {
    id: "1",
    name: "Code",
    subjects: ["math", "English", "Hindi"],
  };

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      updateUser: action,
      addSubject: action,
      totalSubject: computed,
    });
    autorun(this.logUserDetails);
    runInAction(this.prefetchData);
  }

  get totalSubject() {
    return this.userInfo.subjects.length;
  }

  logUserDetails = () => {
    console.log(`logging user details... ${this.totalSubject}`);
  };
  prefetchData() {
    console.log("prefetch run in action");
  }

  updateUser(name) {
    return (this.userInfo.name = name);
  }
  addSubject(subject) {
    return this.userInfo.subjects.push(subject);
  }
}
