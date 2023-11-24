import React from 'react';
import './MainWeatherWindow.css';

export default class MainWeatherWindow extends React.Component {
  state = {
    imageUrl: null,
  };

  componentDidMount() {
    // Dynamically load the image
    import('../Images/weather.png')
      .then((image) => {
        this.setState({ imageUrl: image.default });
      })
      .catch((error) => {
        console.error('Error loading image:', error);
      });
  }

  render() {
    const { city, data } = this.props;
    const { imageUrl } = this.state;

    const Title = city ? null : <h1 className='title'>Weather Forecast</h1>;

    return (
      <div className='main'>
        <div className='inner-main'>
          {Title}
          {imageUrl && (
            <img
              src={imageUrl}
              alt='weather icon'
              style={{
                visibility: imageUrl ? 'visible' : 'hidden',
                opacity: imageUrl ? '1' : '0',
              }}
            />
          )}

          <div
            className='today1'
            style={{
              visibility: city ? 'visible' : 'hidden',
              opacity: city ? '1' : '0',
            }}
          >
            <span>Today</span>
            <h1>{city}</h1>
            <p>
              Temperature: {data ? Math.round(data.temp - 273.15) : 0} °C
            </p>
            <p>{data ? data.weather_desc.toLowerCase() : ''}</p>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
