import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoCounter = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaCounter = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <h1>
          Bob ate <span>{mango}</span> mangoes <span> {banana}</span> bananas
        </h1>
        <div className="fruitsContainer">
          <div className="box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              alt="mango"
            />
            <button type="button" onClick={this.mangoCounter}>
              Eat Mango
            </button>
          </div>
          <div className="box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              alt="banana"
            />
            <button type="button" onClick={this.bananaCounter}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
