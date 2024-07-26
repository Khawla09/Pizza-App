import React from "react";
import Pizza from "./Pizza";
const Menu = (props) => {
  // console.log(props.pizzaData);
  const numPizzas = props.pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* ternary example */}

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {props.pizzaData.map((pizza) => (
            <Pizza {...pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}
    </main>
  );
  // return (
  //   <main className="menu">
  //     <ul className="pizzas">
  //       {props.pizzaData.map((pizza) => (
  //         <Pizza
  //           name={pizza.name}
  //           ingredients={pizza.ingredients}
  //           photoName={pizza.photoName}
  //           price={pizza.price}
  //         />
  //       ))}
  //     </ul>
  //   </main>
  // );
};

export default Menu;
