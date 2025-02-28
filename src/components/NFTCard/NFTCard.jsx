import React from "react";
import "./NFTCard.css";
import { BsArrowDownUp } from "react-icons/bs";

const NFTCard = ({ image, ownerAvatar, owner, creatorAvatar, creator, price, usdPrice, isSelected, onClick }) => {
  return (
    <div className={`nft-card ${isSelected ? "selected" : ""}`} onClick={onClick}>
     
      
      {/* Owner & Creator Info */}
      <div className="nft-info">
        <div className="owner">
          <img src={ownerAvatar} alt="Owner" className="avatar" />
          <span>Owned by <strong>{owner}</strong></span>
        </div>
        <div className="creator">
          <img src={creatorAvatar} alt="Creator" className="avatar" />
          <span>Created by <strong>{creator}</strong></span>
        </div>
      </div>

      <img src={image} alt="NFT" className="nft-image" />

      {/* Price Info */}
      <div className="nft-price">
        <span>Price: <strong>ETH {price} - X1</strong></span>
        <span className="usd-price">(${usdPrice})</span>
      </div>

      {/* Buttons */}
      <div className="nft-actions">
        <button className="view-history"><BsArrowDownUp /> View history</button>
        <button className={`buy-now ${isSelected ? "selected-buy" : ""}`}>Buy Now</button>
      </div>
    </div>
  );
};

export default NFTCard;