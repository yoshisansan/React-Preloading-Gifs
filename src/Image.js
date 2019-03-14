import React from "react";

class Image extends React.PureComponent {
  static defaultProps = {
    src: ""
  };

  state = {
    src: this.props.src,
    loaded: false,
    error: false
  };

  componentDidMount() {
    this.preloadImage(this.state.src);
  }

  componentWillReceiveProps({ src }) {
    if (src !== this.state.src) {
      this.preloadImage(src);
    }
  }

  preloadImage = src => {
    if (!src) {
      return;
    }

    const img = new window.Image();

    img.onload = () => {
      this.setState({ src, loaded: true, error: false });
    };
    img.onerror = () => {
      this.setState({ src, loaded: false, error: true });
    };
    img.src = src;
  };

  render() {
    const { loaded, error, src } = this.state;
    return (
      <div>
        {!loaded && !error && "Loading..."}
        {loaded && <img height="300" src={src} />}
        {error && "Could not load image"}
      </div>
    );
  }
}

export default Image;
