import React from "react";

const Text = (props) => {
  return (
    <div style={props.style} title={props.title}>
      {props.children}
    </div>
  );
};

Text.defaultProps = {
  children: null,
  title: null,
};

export default Text;
