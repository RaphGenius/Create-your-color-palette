import React from "react";

const ChangeBoxName = ({ getBrightness, item, setIsInputNameOpen }) => {
  return (
    <p
      style={{ color: getBrightness(item.background) }}
      onClick={() => setIsInputNameOpen(true)}
    >
      {item.name}{" "}
    </p>
  );
};

export default ChangeBoxName;
