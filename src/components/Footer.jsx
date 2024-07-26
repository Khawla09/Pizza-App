import React from "react";

const Footer = () => {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We are Open!");
  //   } else {
  //     alert("Sorry we're closed");
  //   }
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>We're open until {closeHour}. Visit us or order online!</p>
        ) : (
          <p>We're close . Visit us at{openHour} or order online!</p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
};

export default Footer;
