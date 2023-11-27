import React, { useRef, useState } from "react";

export const Collapsible = (props) => {
  const [isOpen, SetIsOpen] = useState(false);

  const contentRef = useRef();
  if (contentRef.current) console.log(contentRef.current.scrollHeight);

  const handleToggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <div className="ch-collapse">
      <button className="collapse-btn" onClick={handleToggle}>
        {props.label}
      </button>
      <div
        className="collapse-wrapper"
        ref={contentRef}
        style={
          isOpen
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="collapse-content">{props.children}</div>
      </div>
    </div>
  );
};
