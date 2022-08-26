import { useState } from "react";
import { createContext } from "react";

export const FavtItemsContext = createContext();

export const FavtItemsContextProvider = ({ children }) => {
  const [empty, setEmpty] = useState([]);

  const handler = (data) => {
    setEmpty([...empty, data]);
  };
  return (
    <FavtItemsContext.Provider
      value={{
        empty,
        handler,
      }}
    >
      {children}
    </FavtItemsContext.Provider>
  );
};
