import React from "react";
import deckofcards from "../api/DeckOfCards";
import cardback from "../stockImage/cardback.png";

class CardLogic extends React.Component {
  state = { pic: this.props.picFromApp, count: 0 };

  componentDidMount() {
    console.log(this.state.pic);
  }

  drawCard = async props => {
    // let tempurl = `https://deckofcardsapi.com/api/deck/${this.props.deckid}/draw/?count=2`;

    const response = await deckofcards.get(`/${this.props.deckid}/draw/`, {
      params: {
        count: "1"
      }
    });

    console.log(this.props);

    this.setState({ pic: response.data.cards[0].images.png });
    let tempDrawCard = response.data.cards[0].value;

    if (tempDrawCard > 1 && tempDrawCard < 7) {
      this.setState({ count: this.state.count + 1 });
    } else if (tempDrawCard > 6 && tempDrawCard < 10) {
    } else {
      this.setState({ count: this.state.count - 1 });
    }

    this.onHit();
  };

  onHit = e => {
    this.props.getStatFromApp(this.state.count);
  };

  render() {
    return (
      <div className="ui centered" onClick={this.drawCard}>
        <img
          className="ui image centered"
          alt="card"
          src={this.state.pic}
          height="314"
          width="226"
        />
      </div>
    );
  }
}

export default CardLogic;
