import React from 'react';
import '../assets/Style/home.css'; // Assuming you are using an external CSS file for styling.

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="cc">
          <div className="content">
            <h1>
              Discover Your Next <span className="highlight">Favourite Book</span>!
            </h1>
            <p>Find a wide range of books that inspire, entertain, and educate.</p>
            <a href="#" className="shop-btn">
              Shop Now &rarr;
            </a>
          </div>
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Books Display"
              className="book-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
