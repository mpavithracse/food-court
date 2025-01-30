import { useState } from "react";
import { FoodCourtContext } from "./FoodCourtContext";
import { foodCoutrts } from "./foodcourts";

export const FoodCourtProvider = ({ children }) => {
    const [foodCourt, setFoodCourt] = useState(foodCoutrts);

  return (
    <FoodCourtContext.Provider value={{ foodCourt, setFoodCourt }}>
      {children}
    </FoodCourtContext.Provider>
  );
};