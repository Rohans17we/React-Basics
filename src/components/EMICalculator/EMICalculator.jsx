// EMICalculator.jsx
import React, { useState } from 'react';
import './EMICalculator.css';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(240000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(7.143);
  const [includeTaxesFees, setIncludeTaxesFees] = useState(false);

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    return monthlyPayment.toFixed(0);
  };

  return (
    <div className="emi-calculator-container">
      <div className="emi-calculator">
        <div className="calculator-inputs">
          <div className="calculator-header">
            <div className="tab active">Monthly payment</div>
            <div className="tab">Purchase budget</div>
          </div>
          <div className="input-group">
            <label>
              <input
                type="checkbox"
                checked={includeTaxesFees}
                onChange={(e) => setIncludeTaxesFees(e.target.checked)}
              />
              Include taxes & fees
              <span className="info-icon"> &#9432; </span>
            </label>
          </div>
          <div className="input-group">
            <label>Loan amount</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label>Loan term</label>
            <select value={loanTerm} onChange={(e) => setLoanTerm(parseInt(e.target.value))}>
              <option value={15}>15-yr fixed</option>
              <option value={30}>30-yr fixed</option>
            </select>
            <label>Interest</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
            <span className="info-icon">&#9432; </span>
          </div>
        </div>
        <div className="result">
          Monthly payment <strong>${calculateMonthlyPayment()}</strong>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;