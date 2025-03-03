import React from "react";
import styled from "styled-components";
import { FaCcVisa, FaCcMastercard, FaExchangeAlt } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  width: 600px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: gray;
  margin-bottom: 15px;
`;

const Table = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
`;

const HeaderRow = styled(Row)`
  font-weight: bold;
  border-bottom: 2px solid #ddd;
  color: gray;
`;

const Column = styled.div`
  flex: ${(props) => props.flex || 1};
  font-size: 14px;
  ${(props) => props.bold && "font-weight: bold;"}
`;

const StatusBadge = styled.span`
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  color: ${(props) => (props.status === "Verified" ? "#1F9254" : props.status === "Rejected" ? "#D32F2F" : "#FF8C00")};
  background: ${(props) => (props.status === "Verified" ? "#E6F4EA" : props.status === "Rejected" ? "#FEECEC" : "#FFF2D4")};
`;

const Amount = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.value >= 0 ? "#1F9254" : "#D32F2F")};
`;

const transactions = [
  { cardType: "mastercard", cardNumber: "*4920", type: "Credit", date: "Jun 24, 2023", time: "10:00 am", status: "Verified", amount: 2890.0 },
  { cardType: "visa", cardNumber: "*4230", type: "Debit", date: "Jun 20, 2023", time: "11:00 am", status: "Rejected", amount: -49.0 },
  { cardType: "visa", cardNumber: "*5510", type: "Debit", date: "Jun 19, 2023", time: "2:00 pm", status: "Pending", amount: -80.0 },
  { cardType: "visa", cardNumber: "*0983", type: "Debit", date: "Jun 18, 2023", time: "11:00 am", status: "Verified", amount: -30.0 },
  { cardType: "mastercard", cardNumber: "*4443", type: "Credit", date: "Jun 17, 2023", time: "10:00 am", status: "Verified", amount: 1500.0 },
  { cardType: "visa", cardNumber: "*7635", type: "Debit", date: "Jun 14, 2023", time: "9:00 am", status: "Rejected", amount: -200.0 },
];

const TransactionCard = () => {
  return (
    <Container>
      <Title>Recent Transactions</Title>
      <Subtitle>Transactions overview</Subtitle>
      <Table>
        {/* Table Header */}
        <HeaderRow>
          <Column flex={1.5}>Card</Column>
          <Column flex={2}>Date</Column>
          <Column flex={1}>Status</Column>
          <Column flex={1}>Amount ($)</Column>
        </HeaderRow>

        {/* Transactions */}
        {transactions.map((txn, index) => (
          <Row key={index}>
            <Column flex={1.5} bold>
              {txn.cardType === "visa" ? <FaCcVisa color="#1A1F71" size={24} /> : <FaCcMastercard color="#EB001B" size={24} />} {txn.cardNumber}
              <br />
              <span style={{ fontSize: "12px", color: "gray", display: "flex", alignItems: "center", gap: "5px" }}>
                <FaExchangeAlt size={12} color={txn.type === "Credit" ? "#1F9254" : "#D32F2F"} />
                {txn.type}
              </span>
            </Column>
            <Column flex={2}>
              {txn.date}
              <br />
              <span style={{ fontSize: "12px", color: "gray" }}>{txn.time}</span>
            </Column>
            <Column flex={1}>
              <StatusBadge status={txn.status}>{txn.status}</StatusBadge>
            </Column>
            <Column flex={1}>
              <Amount value={txn.amount}>{txn.amount >= 0 ? `$${txn.amount.toFixed(2)}` : `-$${Math.abs(txn.amount).toFixed(2)}`}</Amount>
            </Column>
          </Row>
        ))}
      </Table>
    </Container>
  );
};

export default TransactionCard;