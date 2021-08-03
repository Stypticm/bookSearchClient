import { observable, makeObservable, action } from "mobx";

class Counter {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      decrease: action,
      increase: action
    });
  }

  decrease = () => {
    this.count = this.count - 1;
  };

  increase = () => {
    this.count = this.count + 1;
  };
}

const CounterStore = new Counter();
export default CounterStore;