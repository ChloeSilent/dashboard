import React, { Component } from 'react'
import './style.scss'
import Weather from '../Weather'
import Todo from '../Todo'
import News from '../News'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__content dashboard__content--light">
          <Todo />
          <Weather />
          <News />
        </div>
      </div>
    )
  }
}

export default Dashboard
