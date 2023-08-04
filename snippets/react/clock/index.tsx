import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

export const Clock = () => {
  const [time, setTime] = useState(format(new Date(), "HH:mm:ss"));

  useEffect(() => {
    setInterval(() => {
      return setTime(format(new Date(), "HH:mm:ss"));
    }, 1000);
  }, []);

  return (
    <>
      {[...time].map((digit, index) => (
        <span key={index} className="digit">
          {digit}
        </span>
      ))}
    </>
  );
};
