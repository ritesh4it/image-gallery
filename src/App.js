import React, { Component } from "react";
import "./App.css";
import { ImageGallery, Timer } from "./component";

class App extends Component {
  render() {
    return (
      <div>
        <Timer />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
