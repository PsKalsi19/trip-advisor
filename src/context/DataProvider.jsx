/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { data } from "../db/data";

const initialData = {
  appData: data,
  selectedContinent: {},
  selectedCountry: {},
  selectedDestination: {},
};

const dataReducer = (state, { type, payload }) => {
  const { key, value } = payload;
  switch (type) {
    case "set_data":
      return { ...state, [key]: value };

    default:
      return state;
  }
};

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [appState, dispatchApp] = useReducer(dataReducer, initialData);
  return (
    <DataContext.Provider
      value={{
        appState,
        dispatchApp,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
