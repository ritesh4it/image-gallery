import React from "react";
export default class Timer extends React.Component {
  state = {
    time: new Date()
  };
  componentDidMount() {
    setInterval(_ => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  render() {
    return (
      <div>
        <span>{JSON.stringify(this.state.time).split('"')[1]}</span>
      </div>
    );
  }
}
