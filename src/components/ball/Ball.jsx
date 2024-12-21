/* eslint-disable */
import React from "react";
import RedBall from "../../assets/images/POG Computer.svg";
import SmallRedBall from "../../assets/images/POG Computer.svg";
import YellowBall from "../../assets/images/POG Player.svg";
import SmallYellowBall from "../../assets/images/POG Player.svg";
import { useState, useEffect } from "react";

const Ball = ({ turn, isScreenSmall }) => {
  const [color, setColor] = useState(turn);

  useEffect(() => {
    setColor(turn);
  }, []);

  return !color ? (
    <img src={isScreenSmall ? SmallRedBall : RedBall} alt="redBall" />
  ) : (
    <img src={isScreenSmall ? SmallYellowBall : YellowBall} alt="yellowBall" />
  );
};

export default Ball;
