import React from "react";
import OpenImage from "./OpenImage";
import { base64Convertor } from "../utils";
import images from "../gallery.json";

export default class ImageGallery extends React.Component {
  state = {
    images: [...images],
    openImage: null
  };
  uploadFile = event => {
    base64Convertor(
      event.target.files[0],
      (error, { data, name: fileName } = {}) => {
        if (error) {
          return;
        }
        let _images = this.state.images;
        _images.unshift({
          id: `${new Date().toString()}_${fileName}`,
          data,
          fileName
        });
        this.setState({
          images: _images
        });
      }
    );
  };
  openImage = data => {
    this.setState({ openImage: data });
  };
  closeImage = () => {
    this.setState({ openImage: null });
  };
  render() {
    return (
      <div>
        <div>
          {this.state.images.map(row => {
            return (
              <div key={row.id} onClick={e => this.openImage(row)}>
                <img
                  style={{ height: 100, width: 100 }}
                  alt={row.id}
                  src={row.data}
                />
                <span>{row.fileName}</span>
              </div>
            );
          })}
        </div>
        <div>
          <span>File Upload</span>
          <input type="file" onChange={this.uploadFile} />
        </div>
        <div
          className="parent-model"
          style={
            this.state.openImage ? { display: "block" } : { display: "none" }
          }
        >
          <OpenImage data={this.state.openImage} closeImage={this.closeImage} />
        </div>
      </div>
    );
  }
}
