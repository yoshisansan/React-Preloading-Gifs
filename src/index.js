import React from "react";
import { render } from "react-dom";
import Image from "./Image";

const images = [
  "https://media3.giphy.com/media/HopYL0SamcCli/giphy-downsized.gif",
  "https://media0.giphy.com/media/aCKMaeduKfFXG/giphy-downsized.gif",
  "https://media0.giphy.com/media/i3Ks1lAev1wk/giphy-downsized.gif"
];

const getRandomImage = () =>
  images[Math.floor(Math.random() * 10) % images.length];

class App extends React.Component {
  state = {
    image: getRandomImage()
  };

  handleChangeImage = () => this.setState({ image: getRandomImage() });

  render() {
    const { image } = this.state;
    return (
      <div>
        <Image src={image} />
        <input type="button" value="Change" onClick={this.handleChangeImage} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
