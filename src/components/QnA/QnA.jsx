import { useState } from "react";
import { BiSolidConversation } from "react-icons/bi";
import "./QnA.css";

const QnA = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [questionColor, setQuestionColor] = useState("#ff9a9e"); // Single color for all questions

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="qna-container">
      <h2>QnA Section</h2>

      {/* Color Picker for All Questions */}
      <div className="color-picker">
        <label>Change All Questions' Color: </label>
        <input
          type="color"
          value={questionColor}
          onChange={(e) => setQuestionColor(e.target.value)}
        />
      </div>

      {items.map((item, index) => (
        <div key={index} className="qna-box">
          <div
            className="qna-question"
            onClick={() => handleQuestionClick(index)}
            style={{ backgroundColor: questionColor }}
          >
            <h3>
              <BiSolidConversation /> Question: {item.title}
            </h3>
            <span className={`qna-icon ${openIndex === index ? "open" : ""}`}>&#9660;</span>
          </div>

          {openIndex === index && (
            <div className="qna-answer">
              <p>Answer: {item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QnA;