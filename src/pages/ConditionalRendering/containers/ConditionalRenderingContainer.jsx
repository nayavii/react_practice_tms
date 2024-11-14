import React, { Component } from "react";
import { Layout } from "../components/Layout";

export default class ConditionalRenderingContainer extends Component {
  state = {
    isActive: true,
  };

  handleActiveToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <Layout
        isActive={this.state.isActive}
        handleClick={this.handleActiveToggle}
      />
    );
  }
}
