// Write your code here
import {Component} from 'react'

import './index.css'

let c = 0
let h = 0
let t = 0
class CoinToss extends Component {
  state = {tossCoin: 0}

  tossCoingame = () => {
    const {tossCoin} = this.state
    this.setState({tossCoin: Math.floor(Math.random() * 2)})
    c += 1
    if (tossCoin === 0) {
      h += 1
    } else {
      t += 1
    }
  }

  render() {
    const {tossCoin} = this.state

    return (
      <div className="toss_coin_game">
        <div className="coin_card">
          <h1 className="coin_game_head">Coin Toss Game</h1>
          <p className="coins_details">Heads (or) Tails</p>
          {tossCoin === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="tosscoin"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="tosscoin"
            />
          )}
          <button type="button" className="coinbt" onClick={this.tossCoingame}>
            Toss Coin
          </button>
          <div className="coin_count">
            <p>Total: {c}</p>
            <p>Heads: {h}</p>
            <p>Tails: {t}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
