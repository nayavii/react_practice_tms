import React, { Component } from "react";
import { Counter } from "../components/Counter";

export default class CounterHomeWorkContainer extends Component {
  state = {
    countValue: 0,
    isEven: true,
  };

  handleIncrement = () => {
    this.setState((state) => {
      const incrementedValue = this.state.countValue + 1;
      const isEvenValue = incrementedValue % 2 === 0;

      return {
        countValue: incrementedValue,
        isEven: isEvenValue,
      };
    });
  };

  handleReset = () => {
    this.setState({ countValue: 0, isEven: true });
  };

  handleDecrement = () => {
    this.setState((state) => {
      if (this.state.countValue > 0) {
        const decrementedValue = this.state.countValue - 1;
        const isEvenValue = decrementedValue % 2 === 0;

        return {
          countValue: decrementedValue,
          isEven: isEvenValue,
        };
      }
    });
  };

  render() {
    return (
      <Counter
        value={this.state.countValue}
        isEven={this.state.isEven}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleDecrement={this.handleDecrement}
      />
    );
  }
}
