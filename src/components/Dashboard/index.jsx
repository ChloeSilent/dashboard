import React, { Component } from 'react'
import './style.scss'
import Weather from '../Weather'
import Todo from '../Todo'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__content dashboard__content--light">
          <Todo />
          <Weather />
        </div>
      </div>
    )
  }
}

export default Dashboard
