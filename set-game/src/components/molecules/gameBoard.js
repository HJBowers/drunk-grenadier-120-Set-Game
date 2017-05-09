import Deck from "../../../deck"

import "./gameBoard.css"

export default class GameBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      cardsInPlay: [],
      selected: []
    }
  }



  render() {

    return (
      <div>
        {this.state.cardsInPlay}
      </div>
    )
  }
}
