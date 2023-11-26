import React, { useState } from "react";

export const Collapsible = (props) => {
  const [isOpen, SetIsOpen] = useState(false);

  const handleToggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={handleToggle}>{props.label}</button>
      {isOpen && <div className="collapse-toggle">{props.children}</div>}
    </div>
  );
};
