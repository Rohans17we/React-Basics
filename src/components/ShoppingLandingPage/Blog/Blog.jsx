import React from "react";
import Navbar from "../navbar/Navbar"; 
import "./Blog.css";
import mushroom1 from "/src/assets/Shiitake Mushrooms.png"; 
import mushroom2 from "/src/assets/PortobelloMushrooms.jpg";
import mushroom3 from "/src/assets/OysterMushrooms.jpeg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Shiitake Mushrooms",
      image: mushroom1,
      description:
        "Shiitake mushrooms are popular in Asian cuisine. They have a rich, umami flavor and are often used in soups, stir-fries, and sauces.",
    },
    {
      id: 2,
      title: "Portobello Mushrooms",
      image: mushroom2,
      description:
        "Portobello mushrooms are large and meaty, making them a great vegetarian alternative to meat in burgers and sandwiches.",
    },
    {
      id: 3,
      title: "Oyster Mushrooms",
      image: mushroom3,
      description:
        "Oyster mushrooms have a delicate texture and mild flavor. They are commonly used in stir-fries and pasta dishes.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="blog-container">
        <h1 className="blog-title">Types of Edible Mushrooms</h1>
        <p className="blog-intro">
          Mushrooms are a delicious and nutritious addition to many dishes. Here are some of the most popular edible mushrooms and their uses.
        </p>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;