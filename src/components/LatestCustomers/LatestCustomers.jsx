import React from "react";
import "./LatestCustomer.css";

const customers = [
  { name: "Neil Sims", email: "email@windster.com", amount: "$320", image: "https://i.pravatar.cc/40?img=1" },
  { name: "Bonnie Green", email: "email@windster.com", amount: "$3467", image: "https://i.pravatar.cc/40?img=2" },
  { name: "Michael Gough", email: "email@windster.com", amount: "$67", image: "https://i.pravatar.cc/40?img=3" },
  { name: "Lana Byrd", email: "email@windster.com", amount: "$367", image: "https://i.pravatar.cc/40?img=4" },
  { name: "Thomas Lean", email: "email@windster.com", amount: "$2367", image: "https://i.pravatar.cc/40?img=5" },
];

const LatestCustomers = () => {
  return (
    <div className="customer-card">
      <div className="header">
        <h2>Latest Customers</h2>
        <a href="#" className="view-all">View all</a>
      </div>
      <ul className="customer-list">
        {customers.map((customer, index) => (
          <li key={index} className="customer-item">
            <div className="customer-info">
              <img src={customer.image} alt={customer.name} className="customer-avatar" />
              <div>
                <p className="customer-name">{customer.name}</p>
                <p className="customer-email">{customer.email}</p>
              </div>
            </div>
            <span className="customer-amount">{customer.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestCustomers;