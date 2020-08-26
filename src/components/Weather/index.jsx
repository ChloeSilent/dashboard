import React from 'react'
import { API_KEY } from '../../api'
import './style.scss'

class Weather extends React.Component {
  state = {
    city: 'Helsinki',
    geoCoodinates: [60.1695, 24.9355],
    icon: '01d',
    description: 'clear sky',
    temp: 0,
  }

  getWeather = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.geoCoodinates[0]}&lon=${this.state.geoCoodinates[1]}&appid=${API_KEY}&units=metric`
      )
      const json = await res.json()

      this.setState({
        icon: json.weather[0].icon,
        description: json.weather[0].description,
        city: json.name,
        temp: Math.round(json.main.temp),
      })
    } catch (err) {
      console.error('err', err)
    }
  }

  componentDidMount() {
    this.getWeather()
  }

  render() {
    return (
      <div className="weather">
        <div className="weather__icon">
          <img
            src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
            alt={this.state.description}
          />
        </div>
        <div className="weather__temp">
          <p>{this.state.temp}</p>
        </div>
        <div className="weather__city">{this.state.city}</div>
        <div className="weather__description">{this.state.description}</div>
      </div>
    )
  }
}

export default Weather
