import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null); 

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="accordion">
          <div className="accordion-header" onClick={() => handleAccordionClick(index)}>
            <h3>{item.title}</h3>
            <span className={`icon ${openIndex === index ? "open" : ""}`}>&#9660;</span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
