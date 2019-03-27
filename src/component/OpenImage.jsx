import React from "react";
export default class OpenImage extends React.Component {
  render() {
    if (!this.props.data) {
      return null;
    }
    return (
      <div className="model">
        <button onClick={this.props.closeImage}> X </button>
        <img alt={this.props.data.id} src={this.props.data.data} />
      </div>
    );
  }
}
