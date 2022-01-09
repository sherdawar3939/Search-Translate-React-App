import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const titleClicked = (index) => {
    setActiveIndex(index);
  };

  const renderItem = items.map((item, index) => {
    const acive = index === activeIndex ? "active title" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${acive}`} onClick={() => titleClicked(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${acive}`}>
            <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderItem}</div>;
};

export default Accordion;
