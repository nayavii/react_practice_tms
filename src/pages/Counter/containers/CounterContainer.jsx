import { Component } from "react";
import { CounterView } from "../components/CounterView";
import { Layout } from "../components/Layout";

export class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
    };

    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Did Mount");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("Should Component Update, true");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Did Update");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  handleIncrement = () => {
    // this.setState({countValue: this.state.countValue + 1});
    // this.setState((preState, prevProps) => {
    // preState -- предыдущий state
    // prevProps -- пропсы, но из используем только если передаем пропсы
    // });

    this.setState((state) => {
      return {
        countValue: state.countValue + 1,
      };
    });
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  handleDecrement = () => {
    this.setState((state) => {
      return {
        countValue: state.countValue - 1,
      };
    });
  };

  render() {
    console.log('Render');
    
    return (
      <Layout
        counterValue={this.state.countValue}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleDecrement={this.handleDecrement}
      />
    );
  }
}
