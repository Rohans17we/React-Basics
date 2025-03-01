import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import tinycolor from "tinycolor2"; // Helps generate a darker shade

// Styled Components
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.bgColor || "#fdfdfd"};
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  gap: 20px;
  max-width: 500px;
  position: relative;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ShadowBox = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(-10deg);
  width: 140px;
  height: 100px;
  border-radius: 20px;
  background: ${(props) => tinycolor(props.bgColor).darken(10).toString()};
  z-index: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Image = styled.img`
  width: 140px;
  height: auto;
  border-radius: 15px;
  background: none;
  position: relative;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const Brand = styled.p`
  font-size: 14px;
  color: gray;
  margin: 4px 0;
`;

const Description = styled.p`
  font-size: 13px;
  color: #666;
  margin: 6px 0;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Subscript = styled.span`
  font-size: 12px;
  vertical-align: sub;
`;

const BuyButton = styled.button`
  background: #3e3566;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #2c264f;
  }
`;

const Favorite = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background: white;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s;
  z-index:1;
  color: #ff6b81;

  &:hover {
    background: #ffebef;
  }
`;

// ShoeCard Component
const ShoeCard = ({ image, title, brand, description, price, bgColor }) => {


  return (
    <Card bgColor={bgColor}>
      <Favorite>
        <FaHeart size={16} />
      </Favorite>

      <ShadowBox bgColor={bgColor} />
      
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>

      <Content>
        <Title>{title}</Title>
        <Brand>by {brand}</Brand>
        <Description>{description}</Description>
        <PriceContainer>
          <Price>${price}<Subscript>.00</Subscript></Price>
          <BuyButton>Buy</BuyButton>
        </PriceContainer>
      </Content>
    </Card>
  );
};

export default ShoeCard;