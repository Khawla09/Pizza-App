import React from "react";
function Pizza({ name, ingredients, price, photoName }) {
  return (
    <div className="pizza">
      <img src={photoName} alt="" />
      <div>
        <h3> {name} </h3>
        <p> {ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

// const Pizza = (props) => {
//   return (
//     <>
//       <div>
//         <li className="pizza">
//           <img src={props.photoName} alt="" />
//           <h3>{props.name}</h3>
//           <p> {props.ingredients}</p>
//           <span>{props.price}</span>
//         </li>
//       </div>
//     </>
//   );
// };

export default Pizza;
