import { createContext, useState } from "react";

export const FoodDetailscontext = createContext();

export const FoodDetailscontextProvider = ({ children }) => {
  const [list, setList] = useState({});
  return (
    <FoodDetailscontext.Provider value={{ list, setList }}>
      {children}
    </FoodDetailscontext.Provider>
  );
};
