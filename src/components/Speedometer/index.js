import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerating = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(previousState => ({count: previousState.count + 10}))
    }
  }

  onBrakes = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(previousState => ({count: previousState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="speedometer-heading">SPEEDOMETER</h1>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="speedometer"
            className="speedometer-img"
          />
        </div>
        <h1 className="speed-reading">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="btn-container">
          <button
            type="button"
            className="button-styles accelerate-btn"
            onClick={this.onAccelerating}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button-styles brake-btn"
            onClick={this.onBrakes}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
