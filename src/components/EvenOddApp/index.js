import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const x = Math.round(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + x}))
  }

  render() {
    const {count} = this.state
    const verify = count % 2 === 0 ? 'Even' : 'Odd'
    console.log(verify)

    return (
      <div className="bgColor">
        <div className="colCont">
          <h1 className="heading">Count {count}</h1>
          <p className="verify">Count is {verify}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
