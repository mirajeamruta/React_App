import React from 'react';
import './WeatherBox.css';
import cloudImg from "../Images/cloudimage.jpg"

export default class WeatherBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  // returns weekday for a given Date value
  getDay = (date) => {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekday[new Date(date).getDay()];
  };

  handleClick = () => {
    // Toggle the showDetails state when the box is clicked
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    return (
      <div className={`weather-box ${this.state.showDetails ? 'active' : ''}`} onClick={this.handleClick}>
        <h1>{this.props.date ? this.getDay(this.props.date) : ''}</h1>

        {/* Display the cloudimage */}
        {this.props.icon && (
          <img src={cloudImg} alt='cloud image' />
        )}

        <span className='temp'>{Math.round(this.props.temp - 273.15)}°C</span>

        {/* Conditional rendering for detailed information */}
        {this.state.showDetails && (
          <div className='details'>
            {/* Add your detailed information here */}
            <p>Additional details for {this.props.date} go here...</p>
          </div>
        )}
      </div>
    );
  }
}
