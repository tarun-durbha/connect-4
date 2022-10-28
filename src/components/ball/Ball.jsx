import React from "react";
import RedBall from "../../assets/images/counter-red-large.svg";
import YellowBall from "../../assets/images/counter-yellow-large.svg";
import { useState } from "react";

const Ball = ({ turn, ball }) => {
  const [color, setColor] = useState(turn);
  console.log(turn);
  return color ? (
    <img src={RedBall} alt="redBall" />
  ) : (
    <img src={YellowBall} alt="yellowBall" />
  );
};

export default Ball;