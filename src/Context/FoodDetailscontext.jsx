import { createContext, useState } from "react";

export const FoodDetailscontext = createContext();

export const FoodDetailscontextProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  return (
    <FoodDetailscontext.Provider value={{ list, setList, data, setData }}>
      {children}
    </FoodDetailscontext.Provider>
  );
};
