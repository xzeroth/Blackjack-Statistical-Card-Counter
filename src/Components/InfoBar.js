import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import NumDeck from "./NumDeck";
import WarningMessage from "./WarningMessage";

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: [], numberOfDecks: "" };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex;

    this.setState({ activeIndex: newIndex });

    const currentIndexPosition = activeIndex.indexOf(index);
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1);
    } else {
      newIndex.push(index);
    }

    this.setState({ activeIndexs: newIndex });
  };

  numCallBack = async dataFromNumDeck => {
    const temp = await dataFromNumDeck;
    this.setState({ numberOfDecks: temp });
    this.props.callBackFromApp(this.state.numberOfDecks);
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex.includes(0)}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Settings
        </Accordion.Title>
        <Accordion.Content active={activeIndex.includes(0)}>
          <div className="ui segment">
            <label>Select number of decks.</label>
            <NumDeck callBackFromInfoBar={this.numCallBack} />
            <WarningMessage message="Selecting deck size will reshuffle the deck." />
          </div>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex.includes(1)}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Card Count Information
        </Accordion.Title>
        <Accordion.Content active={activeIndex.includes(1)}>
          <div className="ui">
            <div className="ui large divided horizontal list">
              <div className="item">
                <div className="content">
                  <div className="header">Remaining Decks</div>
                  {Math.floor(this.props.statDataCards / 52)}
                </div>
              </div>

              <div className="item">
                <div className="content">
                  <div className="header">Remaining Cards</div>
                  {this.props.statDataCards}
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <div className="header">Running Count</div>
                  {this.props.statDataCount}
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <div className="header">True Count</div>
                  {Math.floor(
                    this.props.statDataCount / (this.props.statDataCards / 52)
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="ui">
            <div className="ui large divided horizontal list">
              <div className="header">Accurate Stats</div>
              <div className="item">
                <div className="content">
                  <div className="header">Deck Remaining </div>
                  {(
                    (this.props.statDataCards / this.props.statStartCards) *
                    100
                  ).toFixed(2)}
                  %
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <div className="header">True Count</div>
                  {(
                    this.props.statDataCount /
                    (this.props.statDataCards / 52)
                  ).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </Accordion.Content>
      </Accordion>
    );
  }
}
