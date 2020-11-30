import React from "react";

const Icon = ({ src, style }) => {
  return (
    <div style={style}>
      <img height={"96px"} width={"96px"} src={src} />
    </div>
  );
};

Icon.defaultProps = {
  src: null,
  style: {},
};

export default Icon;
