import deckofcards from "../api/DeckOfCards";
import InfoBar from "./InfoBar";
import React from "react";
import CardLogic from "./CardLogic";
import cardback from "../stockImage/cardback.png";

class App extends React.Component {
  state = {
    numOfDecks: "3",
    deck_id: "",
    numOfCards: 156,
    startCard: 156,
    count: 0,
    pic: cardback
  };

  componentDidMount() {
    this.createDeck();
  }

  createDeck = async deck => {
    const response = await deckofcards.get("/new/shuffle/", {
      params: {
        deck_count: this.state.numOfDecks
      }
    });
    this.setState({ deck_id: response.data.deck_id });
    console.log(this.state.pic);
  };

  numDeckFromInfo = async dataFromInfo => {
    const temp = await dataFromInfo;
    this.setState({
      numOfDecks: temp,
      startCard: temp * 52,
      numOfCards: temp * 52,
      count: 0
    });
    this.createDeck();
  };

  getStatFromLogic = async dataFromLogic => {
    const tempStat = await dataFromLogic;
    this.setState({ count: tempStat, numOfCards: this.state.numOfCards - 1 });
  };

  render() {
    return (
      <div className="ui containers" style={{ marginTop: "20%" }}>
        <div className="ui container centered">
          <CardLogic
            getStatFromApp={this.getStatFromLogic}
            deckid={this.state.deck_id}
            curCards={this.state.numOfCards}
            picFromApp={this.state.pic}
          />
        </div>
        <div className="ui segment" style={{ bottom: "10px" }}>
          <InfoBar
            statDataCount={this.state.count}
            statDataCards={this.state.numOfCards}
            statStartCards={this.state.startCard}
            callBackFromApp={this.numDeckFromInfo}
          />
        </div>
      </div>
    );
  }
}

export default App;
