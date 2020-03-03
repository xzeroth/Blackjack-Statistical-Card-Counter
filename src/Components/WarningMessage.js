import React from "react";
import { Message } from "semantic-ui-react";

const WarningMessage = props => {
  return (
    <Message warning>
      <Message.Header>Warning!</Message.Header>
      <p>{props.message} </p>
    </Message>
  );
};

export default WarningMessage;
