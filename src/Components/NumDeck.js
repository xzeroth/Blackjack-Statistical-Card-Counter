import React from "react";
import { Dropdown } from "semantic-ui-react";

const deckOptions = [
  {
    key: "OneDeck",
    text: "1 Deck",
    value: "1"
  },
  {
    key: "TwoDeck",
    text: "2 Deck",
    value: "2"
  },
  {
    key: "ThreeDeck",
    text: "3 Deck",
    value: "3"
  },
  {
    key: "FourDeck",
    text: "4 Deck",
    value: "4"
  },
  {
    key: "FiveDeck",
    text: "5 Deck",
    value: "5"
  },
  {
    key: "SixDeck",
    text: "6 Deck",
    value: "6"
  }
];

class NumDeck extends React.Component {
  // onDifferentChange = () => {
  //   this.props.callBackFromParent(this.state.num);
  // };

  onChange = (e, data) => {
    this.props.callBackFromInfoBar(data.value);
  };

  render() {
    return (
      <Dropdown
        placeholder="Select # Decks"
        fluid
        selection
        options={deckOptions}
        onChange={this.onChange}
      />
    );
  }
}

export default NumDeck;
